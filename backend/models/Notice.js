const mongoose = require('mongoose');

const Notice = mongoose.model(
  "notice",
  new mongoose.Schema({

  text: {
    type: String,
    required: true,
  },
  created: {
    type: Date,
    default: Date.now,
  },
  created_by: {
    type: String,
    required: true,
  }
})
);

module.exports = Notice; 