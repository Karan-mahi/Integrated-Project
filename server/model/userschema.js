// Importing mongoose to make schema
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
// Importing bcrypt for hashing
const bcrypt = require("bcrypt");


const schema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  
  password: {
    type: String,
    required: true,
  },
  tokens: [
    {
      token: {
        type: String,
        required: true,
      },
    },
  ],
});

// Hashing password
schema.pre("save", async function (next) {
  if (this.isModified("password"))
    this.password = await bcrypt.hash(this.password, 12);
  next();
});

schema.methods.generateAuthToken = async function () {
  try {
    const token = jwt.sign({ _id: this._id }, process.env.JWT_SECRET);
    this.tokens = this.tokens.concat({token:token});
    await this.save();
    return token;
  } catch (error) {
    console.log(error);
  }
};




// Making new collection in database named user(s)
const User = new mongoose.model("users", schema);

//Exporting User class
module.exports = User;
