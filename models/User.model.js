const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the User model to whatever makes sense in this case
const userSchema = new Schema(
  {
    username: {
      type: String,
      required: false,
      unique: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: true,
    },
 
    profilePicUrl: {
      type: String,
      default: "https://res.cloudinary.com/ghostly/image/upload/v1692265256/ghostly-tales/Sem-T%C3%ADtulo-1_gub7tk.gif"
    },
    garden:{
      type: Schema.Types.ObjectId,
      ref: "Garden"
    }
  }
  
);

const User = model("User", userSchema);

module.exports = User;
