const express = require("express");
const router = express.Router();
const multer = require("multer");

const Plant = require("../../models/Plant.model");
const Garden = require("../../models/Garden.model");
const Section = require("../../models/Section.model");
const User = require("../../models/User.model");
const { isAuthenticated } = require("../../middleware/jwt.middleware");

// ROUTES

// Display user's garden

// GET
router.get("/", isAuthenticated, async (req, res) => {
  const userId = req.payload._id;
  console.log("this is the user ID: ", userId);

  try {

    let gardenPlants = await Garden.findOne({ user: userId }).populate(
      "plants");
      console.log(gardenPlants);

    let currentUser = await User.findById(userId);
    console.log(currentUser);

    res.json({gardenPlants, currentUser});
  } catch (error) {
    res.status(500).json({ error: 'error while fetching plants in garden' });

}
});

// Delete/Reset User's Garden

// DELETE

router.delete("/delete", isAuthenticated, async (req, res) => {
    const userId = req.payload._id;
  
    try {
      let findGarden = await Garden.findOne({ user: userId });
  
      // Find and delete all associated plants
      await Plant.deleteMany({ _id: { $in: findGarden.plants } });
  
      // Delete the garden object
      await Garden.findByIdAndDelete({ _id: findGarden._id });
  
      // Create a new garden
      let newGarden = await Garden.create({ user: userId });
  
      res.json({ message: "Garden and associated plants deleted successfully and new one created" });
    } catch (error) {
      res.status(500).json({ error: "Error while deleting garden and associated plants: " + error.message });
    }
  });

// display info about specific plant in garden

// GET
router.get("/:plantId", async (req, res) => {
  const { plantId } = req.params;

  try {
    let foundPlant = await Plant.findById(plantId);
    res.json(foundPlant);
  } catch (error) {
    res.status(500).json({error: "error while displaying specific plant in garden: ", error});
  }
});

// Edit info about specific plant in garden

//  PUT
router.put("/:plantId/edit", async (req, res) => {
  const { commonName, notes, imgUrl } = req.body;
  const { plantId } = req.params;

  try {
    let updatedPlant = await Plant.findByIdAndUpdate(
      plantId,
      { commonName, notes, imgUrl },
      { new: true }
    );
    res.json(updatedPlant);
  } catch (error) {
    res.json("error while updating info on specific plant in garden: ", error);
  }
});

// Delete specific plant in garden

//  DELETE
router.delete("/:plantId/delete", async (req, res) => {
  const { plantId } = req.params;

  try {
    let findGarden = await Garden.findOne({ plants: plantId });
    findGarden.plants.pull(plantId);
    await Plant.findByIdAndDelete(plantId);
    res.json({ message: "plant deleted successfully" });
  } catch (error) {
    res.json("error while deleting specific plant in garden: ", error);
  }
});

//  Add new section to Garden
router.post("/section/create", isAuthenticated, async (req, res) => {
  const userId = req.payload._id;
  const { sectionTitle, plants } = req.body; 

  try {
    // Find the garden
    const findGarden = await Garden.findOne({ user: userId });
    console.log("AHHHHH")

    if (!findGarden) {
      return res.status(404).json({ error: "Garden not found for the user" });
    }

    // Create a new section
    const newSection = await Section.create({
      title: sectionTitle,
      plants,
      garden: findGarden._id,
    });

      // Add new section to 
      findGarden.sections.push(newSection._id);
      await findGarden.save();

      res.status(201).json(newSection); 
    } catch (error) {
      console.error("Error while creating a new section in the garden: ", error);
      res.status(500).json({ error: "Internal server error" });
    }
  });

  //Delete a section
  // Import necessary dependencies and models

// Define a route to delete a section
router.delete('/section/:sectionId/delete', async (req, res) => {
  const sectionId = req.params.sectionId;

  try {
    // Find the section by its ID
    const section = await Section.findById(sectionId);

    if (!section) {
      return res.status(404).json({ error: 'Section not found' });
    }

    // Delete the section
    await section.remove();

    // Remove the section from the garden's sections array
    const garden = await Garden.findOneAndUpdate(
      { sections: sectionId },
      { $pull: { sections: sectionId } },
      { new: true }
    );

    res.status(200).json({ message: 'Section deleted successfully' });
  } catch (error) {
    console.error('Error while deleting a section: ', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Update section name
router.put('/section/:sectionId/update', async (req, res) => {
  const sectionId = req.params.sectionId;
  const { sectionTitle } = req.body;

  try {
    const section = await Section.findById(sectionId);

    if (!section) {
      return res.status(404).json({ error: 'Section not found' });
    }

    // Update the section name
    section.sectionTitle = sectionTitle;
    await section.save();

    res.status(200).json({ message: 'Section name updated successfully' });
  } catch (error) {
    console.error('Error while updating section name: ', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Remove a plant from a section
router.put('/section/:sectionId/remove-plant/:plantId', async (req, res) => {
  const sectionId = req.params.sectionId;
  const plantId = req.params.plantId;

  try {
    // Find the section by ID
    const section = await Section.findById(sectionId);

    if (!section) {
      return res.status(404).json({ error: 'Section not found' });
    }

    // Remove the plant ID from the section's plants array
    section.plants.pull(plantId);
    await section.save();

    res.status(200).json({ message: 'Plant removed from the section' });
  } catch (error) {
    console.error('Error while removing plant from section: ', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Add a plant to a section
router.put('/section/:sectionId/add-plant/:plantId', async (req, res) => {
  const sectionId = req.params.sectionId;
  const plantId = req.params.plantId;

  try {
    // Find the section by ID
    const section = await Section.findById(sectionId);

    if (!section) {
      return res.status(404).json({ error: 'Section not found' });
    }

    // Add the plant ID to the section's plants array
    section.plants.push(plantId);
    await section.save();

    res.status(200).json({ message: 'Plant added to the section' });
  } catch (error) {
    console.error('Error while adding plant to section: ', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Delete all sections in the garden
router.delete('/garden/sections/delete-all', async (req, res) => {
  try {
    // Find and delete all sections
    await Section.deleteMany({});

    res.status(200).json({ message: 'All sections deleted successfully' });
  } catch (error) {
    console.error('Error while deleting all sections: ', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Display user's garden

// GET
router.get("/", isAuthenticated, async (req, res) => {
  const userId = req.payload._id;

  console.log("this is the user ID: ", userId);

  try {
    const findGarden = await Garden.findById({user : userId});

    let userSections = await Section.find({garden: findGarden._id})

    let populatedSections = userSections.map((section) => {
      section.populate("plants")
    });

    res.json({populatedSections});
  } catch (error) {
    res.status(500).json({ error: 'error while fetching sections in garden' });

}
});







module.exports = router;
