const { Schema, model } = require("mongoose");


const gardenSchema = new Schema({

  name: {
    type: String,
    default: 'My Garden',
    },
    description:{
      type: String,
      default: 'This is my garden',
    },

  plants: [{
      type: Schema.Types.ObjectId,
      ref: 'Plant'
  }],

    }
    
  );
  
  module.exports = model ('Garden', gardenSchema);
  
