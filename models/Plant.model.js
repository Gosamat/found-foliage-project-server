const { Schema, model } = require("mongoose");


const PlantSchema = new Schema(
    {
      commonName: {
        type: String,
       
        unique: true,
        trim: true,
      },
      scientificName: {
        type: String,
        unique: true,
        trim: true,
        lowercase: true,
      },
      cycle: {
        type: String,
        trim: true,
      },
      sunlight: {
        type: String,
        trim: true,
      },
      watering: {
        type: String,
        trim: true,
      },
      notes: {
        type: String,
        trim: true,
      },
      imgUrl: {
        type: String,
        
      },
      garden:{
        type: Schema.Types.ObjectId,
        ref: "Garden"
      }
    }
    
  );
  
module.exports = model("Plant", PlantSchema);
  
  
  