const { Router } = require('express');
const axios = require('axios');
require('dotenv').config();

const router = Router();
const matchURL = "https://europe.api.riotgames.com/lol/match/v5/matches/";


router.get('/:id', async (req,res) => {
    try{
        const match = await axios.get(`${matchURL}${req.params.id}?api_key=${process.env.RIOT_API_KEY}`)
        res.status(200).send(match.data);
    } catch(err){
        return res.status(404).send("Match does not exist.")
    }
    
})
.get('/:id/timeline', async (req,res) => {
    try{
        const match = await axios.get(`${matchURL}${req.params.id}/timeline?api_key=${process.env.RIOT_API_KEY}`)
        res.status(200).send(match.data);
    } catch(err){
        return res.status(404).send("Match does not exist.")
    }
    
})



module.exports = router;