const { Router } = require('express');
const axios = require('axios');
require('dotenv').config();

const router = Router();
const latestVersionURL = "https://ddragon.leagueoflegends.com/api/versions.json";
const championURL1 = "http://ddragon.leagueoflegends.com/cdn/"
const championURL2 = "/data/en_US/champion.json"
const championURL2Full = "/data/en_US/championFull.json"
let versionArray

axios.get(latestVersionURL).then(result => {
    versionArray = result.data
}).catch(err=> {
    console.log(err.message)
})

router.get('/', (req, res) => {
    axios.get(`${championURL1}${versionArray[0]}${championURL2}`).then(result => {
        res.status(200).send(result.data.data)
    }).catch(err => {
        res.status(400).send(`Something went wrong.\n${err.message}`)
    })
})
.get('/:name', (req,res) => {
    axios.get(`${championURL1}${versionArray[0]}${championURL2}`).then(result => {
        for(i in result.data.data){
            if(i.toLowerCase()==req.params.name.toLowerCase()){
                return res.status(200).send(result.data.data[i])
            }
        }
        res.status(404).send("Champion could not be found.")
    }).catch(err => {
        res.status(400).send(`Something went wrong.\n${err.message}`)
    });
})
.get('/:name/full', (req,res) => {
    axios.get(`${championURL1}${versionArray[0]}${championURL2Full}`).then(result => {
        for(i in result.data.data){
            if(i.toLowerCase()==req.params.name.toLowerCase()){
                return res.status(200).send(result.data.data[i])
            }
        }
        res.status(404).send("Champion could not be found.")
    }).catch(err => {
        res.status(400).send(`Something went wrong.\n${err.message}`)
    });
})

module.exports = router;