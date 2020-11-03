const mongoose = require("mongoose");

const exerciseSchema = mongoose.Schema({
  duration: { type: Number, required: true },
  heartRate: { type: Number, required: true },
  bodyTemp: { type: Number, required: true },
  calories: { type: Number, required: true },
});

module.exports = mongoose.model("Exercise", exerciseSchema, "Exercises");
