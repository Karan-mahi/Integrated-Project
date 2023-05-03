const mongoose = require("mongoose");
const dbUri = process.env.DATABASE;

const connectDB = async () => {
  try {
    mongoose.set("strictQuery", false);
    mongoose.connect(dbUri);
    console.log("Mongo connected");
  } catch (error) {
    console.log(error);
  }
};
connectDB();
