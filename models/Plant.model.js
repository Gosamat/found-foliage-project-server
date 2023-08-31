const { Schema, model } = require("mongoose");


const PlantSchema = new Schema(
    {
      commonName: {
        type: String,
      },
      scientificName: {
        type: String,
      },
      cycle: {
        type: String,
      },
      sunlight: {
        type: String,
      },
      watering: {
        type: String,
      },
      notes: {
        type: String,
      },
      imgUrl: {
        type: String,
        
      }
    }
    
  );
  
module.exports = model("Plant", PlantSchema);
  
  
  