const express = require('express')
const router = express.Router();
const multer = require('multer');
const upload = multer();


const Plant = require ('../../models/Plant.model')
const Garden = require ('../../models/Garden.model')
const Section = require ('../../models/Section.model')
const {isAuthenticated} = require ('../../middleware/jwt.middleware')



// ROUTES

// Display all plants in garden

// GET
router.get('/', isAuthenticated, async (req, res) => {
    const userId = req.payload._id


   try{
    let gardenPlants = await Garden.findOne({user:userId}).populate('plants');
    console.log(gardenPlants);
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
 router.delete('/:plantId/delete', async (req, res) => {
    const{plantId} = req.params;

    try{
        let findGarden = await Garden.findOne({plants:plantId});
        findGarden.plants.pull(plantId);
        await Plant.findByIdAndDelete(plantId);    
        res.json({message: 'plant deleted successfully'});
 
    }
    catch(error){
     res.json("error while deleting specific plant in garden: ", error)
    }
    
 })

//  Add new section to Garden
router.post('/section/create', isAuthenticated, async (req, res) => {
    const userId = req.payload._id
    const {title, plants} = req.body;

    try{
    let findGarden = await Garden.findOne({user:userId});
    let newSection = await Section.create({title, plants, garden:findGarden._id});
    res.json(newSection);

    }
    catch(error){
     res.json("error while creating new section in garden: ", error)
    }

});

 module.exports = router;