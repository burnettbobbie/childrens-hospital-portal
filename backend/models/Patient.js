const mongoose = require('mongoose');

const Patient = mongoose.model(
  "patient",
  new mongoose.Schema({

  condition: {
    type: String,
    required: true,
  },
  treatment: {
    type: String,
    required: true,
  },
  doctor: {
    type: String,
  },
  nurse: {
    type: String,
  },
  medication: {
    type: String,
  },
  updated_date: {
    type: Date,
    default: Date.now,
  },
  patient: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  }
})
);

module.exports = Patient; 
