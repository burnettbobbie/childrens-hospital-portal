const mongoose = require('mongoose');

const PatientNote = mongoose.model(
  "notes",
  new mongoose.Schema({

  text: {
    type: String,
    required: true,
  },
  created: {
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

module.exports = PatientNote; 