const { Router } = require('express');
const fs = require('fs');
const path = require('path');

const router = Router();
const recordingPath = path.normalize(__dirname + "../../../recordings/wissenscharbeit");



router.get('/thehakon', (req,res) => {
    const textfileP1 = fs.readFileSync(recordingPath + '/B1.json')
    const textfileP2 = fs.readFileSync(recordingPath + '/B2.json')
    const textfileP5 = fs.readFileSync(recordingPath + '/B3.json')
    const textfileP3 = fs.readFileSync(recordingPath + '/B4.json')
    const textfileP4 = fs.readFileSync(recordingPath + '/B5.json')
    const textfileP10 = fs.readFileSync(recordingPath + '/R1.json')
    const textfileP8 = fs.readFileSync(recordingPath + '/R2.json')
    const textfileP6 = fs.readFileSync(recordingPath + '/R3.json')
    const textfileP9 = fs.readFileSync(recordingPath + '/R4.json')
    const textfileP7 = fs.readFileSync(recordingPath + '/R5.json')
    res.status(200).send([
        JSON.parse(textfileP1.toString()),
        JSON.parse(textfileP2.toString()),
        JSON.parse(textfileP5.toString()),
        JSON.parse(textfileP3.toString()),
        JSON.parse(textfileP4.toString()),
        JSON.parse(textfileP10.toString()),
        JSON.parse(textfileP8.toString()),
        JSON.parse(textfileP6.toString()),
        JSON.parse(textfileP9.toString()),
        JSON.parse(textfileP7.toString())])
})

module.exports = router;