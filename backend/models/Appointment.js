const mongoose = require('mongoose');

const Appointment = mongoose.model(
  "appointment",
  new mongoose.Schema({

  doctor: {
    type: String,
  },
  description: {
    type: String,
  },
  location: {
    type: String,
  },
  date: {
    type: Date,
    required: true,
    timestamps: true,
  },
  patient: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  
})
);

module.exports = Appointment; 
