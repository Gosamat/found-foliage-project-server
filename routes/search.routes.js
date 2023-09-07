// Grab Express and browser
const express = require('express');
const router = express.Router();

// Grab models and middleware

const Plant = require("../models/Plant.model");

// Routes
router.get('/', async(req,res)=>{
    const { q } = req.query;
  
    try {
      const searchResults = await Plant.find({
        $or: [
          { commonName: { $regex: new RegExp(q, 'i') } },
          { scientificName: { $regex: new RegExp(q, 'i') } }
        ]
      });
  
      res.json(searchResults);
    } catch (error) {
      console.error('Error searching for plants:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  })


module.exports = router