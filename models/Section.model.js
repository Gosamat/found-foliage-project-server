const { Schema, model } = require("mongoose");


const sectionSchema = new Schema({

  title: {
    type: String,
    default: 'section',
    },
  plants: [{
      type: Schema.Types.ObjectId,
      ref: 'Plant'
  }],
  garden: {
    type: Schema.Types.ObjectId,
    ref: 'Garden'
  }
    });
  
  module.exports = model ('Section', sectionSchema);
  
