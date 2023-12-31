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
      edible:{
        type: String
      },
      maintenance: {
        type: String,
      },
      humanPoisonous: {
        type: Boolean,
      },
      petPoisonous: {
        type: Boolean,
      },
      indoor:{
        type: Boolean,
      }, 
      description: {
        type: String,
      },
      medicinal:{
        type: Boolean,
      },
      flowering:[{
        type: String
      }],
      care: {
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
  
  
  