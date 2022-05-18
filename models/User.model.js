const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the user model to whatever makes sense in this case
const userSchema = new Schema(
  {
    name: {
      type: String,
      unique: true 
    },
    password: String,
    email: String,
    pointsTotal: Number,
    pointsLevel1: Number,
    pointsLevel2: Number,
    pointsLevel3: Number,
  },
 
  {
    // this second object adds extra properties: `createdAt` and `updatedAt`
    timestamps: true,
  }
);

const User = model("User", userSchema);

module.exports = User;