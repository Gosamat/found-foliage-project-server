const express = require('express')
const router = express.Router();
const multer = require('multer');
const upload = multer();


const Plant = require ('../../models/Plant.model')
const Garden = require ('../../models/Garden.model')


// ROUTES

// Display all plants in garden

// GET
router.get('/', async (req, res) => {


   try{
    let gardenPlants = await Garden.findById().populate('plants');
    res.json(gardenPlants);

   }
   catch(error){
    res.json("error while fetching plants in garden: ", error)
   }
   
})

// display info about specific plant in garden

// GET
router.get('/:plantId', async (req, res) => {
    const{plantId} = req.params;

    try{
        let foundPlant = await Plant.findById(plantId);
        res.json(foundPlant);
 
    }
    catch(error){
     res.json("error while displaying specific plant in garden: ", error)
    }
    
 })

 // Edit info about specific plant in garden

//  PUT
 router.put('/:plantId/edit', async (req, res) => {
    const {commonName, notes, imgUrl} = req.body;
    const{plantId} = req.params;

    try{
        let updatedPlant = await Plant.findByIdAndUpdate(plantId, {commonName, notes, imgUrl},{new: true});
        res.json(updatedPlant);
    }
    catch(error){
     res.json("error while updating info on specific plant in garden: ", error)
    }
    
 })




// Delete specific plant in garden

//  DELETE
 router.delete('/:plantId/edit', async (req, res) => {
    const{plantId} = req.params;

    try{
        await Plant.findByIdAndDelete(plantId);
        res.json({message: 'plant deleted successfully'});
 
    }
    catch(error){
     res.json("error while deleting specific plant in garden: ", error)
    }
    
 })

 module.exports = router;