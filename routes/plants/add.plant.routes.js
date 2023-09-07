const express = require("express");
const router = express.Router();


const Plant = require("../../models/Plant.model");
const Garden = require("../../models/Garden.model");
const User = require("../../models/User.model");
const { isAuthenticated } = require("../../middleware/jwt.middleware");

// ROUTES

// Add new plant via form

// POST
router.post("/add", isAuthenticated, async (req, res) => {
  const {
    commonName,
    scientificName,
    cycle,
    sunlight,
    watering,
    imgUrl,
    edible,
    maintenance,
    poisonous,
    indoor,
    description,
    medicinal,
    flowering,
    care
  } = req.body;
  const userId = req.payload._id;

  try {
    const userGarden = await Garden.findOne({ user: userId });
    if (!userGarden) {
      return res.status(404).json({ message: "User's garden not found." });
    }
    let newPlant = await Plant.create({
      commonName,
      scientificName,
      cycle,
      sunlight,
      watering,
      imgUrl,
      edible,
      maintenance,
      poisonous,
      indoor,
      description,
      medicinal,
      flowering,
      care
    });
    userGarden.plants.push(newPlant._id);
    console.log("created new plant and pushed to userID :", newPlant);

    await userGarden.save();
    res.json(newPlant);
  } catch (err) {
    res.json(err);
  }
});

// Display list of added plants
// GET
router.get("/", async (req, res) => {
  try {
    const plantList = await Plant.find();
    res.json(plantList);
  } catch (err) {
    res.json(err);
  }
});

module.exports = router;
