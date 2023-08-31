const express = require('express')
const router = express.Router();
const multer = require('multer');
const upload = multer();


const Plants = require ('../../models/Plant.model')
const Garden = require ('../../models/Garden.model')

// Adding the plant to the list 

router.post('/create', upload.single('plantImage'), async (req, res) => {
    try {
        const { plantImage } = req.file;

        // Upload the image to the plant API
        const plantApiResponse = await axios.post('PLANT_API_URL', plantImage, {
        });

        
        const newPlant = await Plants.create({
            name: plantApiResponse.data.plant_name, // Use plantApiResponse here
            // Add other data here
        });
        await newPlant.save();

// Adding the plant to the garden in userProfile
const garden = await Garden.findOneAndUpdate(
    { name: 'My Garden' }, // Specify the criteria to find the garden
    { $push: { plants: newPlant._id } }, // Add the new plant to the plants array
    { upsert: true, new: true } // Create the garden if not found
);
        res.json(newPlant, garden);
    } catch (error) {
        console.error('Error creating plant entry:', error);
        res.status(500).json({ error: 'An error occurred' });
    }
});

module.exports = router;