const mongoose = require('mongoose');

const Fact = mongoose.model(
  "fact",
  new mongoose.Schema({

  text: {
    type: String,
    required: true,
  },

})
);

module.exports = Fact; 