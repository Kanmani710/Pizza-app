const mongoose = require("mongoose");

const pizzaSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    description: String,
    category: String,
    prices: {
      small: Number,
      medium: Number,
      large: Number,
    },
    image: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model("Pizza", pizzaSchema);
