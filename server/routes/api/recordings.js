const { Router } = require('express');
const fs = require('fs')
const path = require('path');
const wavDuration = require('wav-audio-length').default;

/**
 * Express router
 */
const router = Router();

/**
 * Path where recordings are stored locally
 */
const recordingsPath = path.normalize(__dirname + "../../../recordings");

/**
 * String[] of filenames in the directory {@link recordingsPath} points to
 */
const fileArray = fs.readdirSync(recordingsPath);

/**
 * Array which holds information about every file stored in the directory  {@link recordingsPath} points to
 */
const jsonArrayOfFiles = new Array();

/**
 * Auxiliary array which holds an array of names, split by "."
 */
let nameOfFile;

/**
 * fills {@link jsonArrayOfFiles} with entries
 */
for(x of fileArray){
    // gate clause
    if(!x.endsWith(".wav")) continue

    // calc duration of file
    let sec = parseFloat(wavDuration(Buffer.from(fs.readFileSync(recordingsPath + "/" + x, 'binary'), 'binary')).toFixed(2));

    // normalize names
    let nameOfFileWithoutFileExtension = "";
    nameOfFile = x.split(".");
    for(y = 0; y<nameOfFile.length-2; y++){
        nameOfFileWithoutFileExtension = nameOfFileWithoutFileExtension.concat(nameOfFile[y] + ".")
    }
    nameOfFileWithoutFileExtension = nameOfFileWithoutFileExtension.concat(nameOfFile[nameOfFile.length-2]);

    // create JSON entry for array
    jsonArrayOfFiles.push({
        id: jsonArrayOfFiles.length + 1,
        name: nameOfFileWithoutFileExtension,
        length_in_seconds: sec,
        path: path.relative(__dirname, recordingsPath + "/" + x)
    })
}

router.get('/', (req,res) => {res.status(200).send(jsonArrayOfFiles)})

module.exports = router;