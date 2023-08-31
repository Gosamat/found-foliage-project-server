const express = require('express');
const router = express.Router();


const Plants = require('../../models/Plant.model')


// To add a new plant

router.post ('/plants', async (req, res) => {



})


// Get Route to get all the plants

router.get ('/plants', async (req, res) => {
    try{
        allPlants = await Plants.find().populate()
        res.json(allPlants)
    }
    catch {
        res.json(error)
    }})


    // Get Route to get info about the plant


    router.get('/plants/:plantId', async (req, res) => {
        const {Plants} = req.params;
        try{
            let foundPlants = await Plants.findbyid(plantId).populate()
            res.json(foundPlants)
        }
        catch(error){
            res.json(error)
        }
    })


    module.exports = router