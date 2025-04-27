const { Router } = require('express');
const match = require('../../matches/wissenscharbeit/Stage2_1v4.json')
const timeline = require('../../matches/wissenscharbeit/Stage2_1v4_timeline.json')
const router = Router();

router.get('/:id', async (req,res) => {
    try{
        res.status(200).send(match);
    } catch(err){
        return res.status(404).send("Match does not exist.")
    }
    
})
.get('/:id/timeline', async (req,res) => {
    try{
        res.status(200).send(timeline);
    } catch(err){
        return res.status(404).send("Match does not exist.")
    }
    
})

module.exports = router;