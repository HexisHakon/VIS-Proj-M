const { Router } = require('express');
const fs = require('fs');
const path = require('path')

const router = Router();
const assetsPath = path.normalize(__dirname + "../../../assets");
const stopWordsArray = fs.readFileSync(assetsPath + "/sentiments.json")

router.get('/',(req, res) => {
    res.status(200).send(JSON.parse(stopWordsArray))
})

module.exports = router;