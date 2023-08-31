const express = require('express')
const router = express.Router();
const multer = require('multer');
const upload = multer();


const Plant = require ('../../models/Plant.model')
const Garden = require ('../../models/Garden.model')



// ROUTES

// Add new plant via form

// POST
router.post('/add', async (req, res) => {

    const {commonName, scientificName, cycle, sunlight, watering, notes, imgUrl, garden} = req.body;

    try{
        let newPlant = await Plant.create({commonName, scientificName, cycle, sunlight, watering, notes, imgUrl, garden});
        res.json(newPlant)
    }
    catch(err){
        res.json(err)

    }
})

// Display list of added plants
// GET
router.get('/', async (req, res) => {

    try{
        const plantList = await Plant.find()
        res.json(plantList)
    }
    catch(err){
        res.json(err)

    }
})

// Create a new plant based on form data

// POST 

module.exports = router;