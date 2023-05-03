const mongoose = require("mongoose");
const orderSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  source: {
    type: String,
    required: true,
  },
  destination: {
    type: String,
    required: true,
  },
});

module.exports = new mongoose.model("Order", orderSchema);
