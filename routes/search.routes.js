// Grab Express and browser
const express = require('express');
const router = express.Router();

// Grab models and middleware

const Plant = require("../models/Plant.model");

// Routes
router.get('/', async(req,res)=>{

    try{
    const {query}= req.query
    console.log(query)
    let searchPlants = await Plant.find({ $or: [
        {commonName: { $regex: new RegExp(query, 'i') }},
        {scientificName: {$regex: new RegExp(query, 'i')}}
     ] 
    });
    console.log(searchPlants)
    res.json(searchPlants);
    }
    catch(error){
        res.json(error);
    }
})


module.exports = router