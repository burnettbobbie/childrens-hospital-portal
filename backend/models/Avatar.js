const mongoose = require('mongoose');


const Avatar = mongoose.model(
  "avatar",
  new mongoose.Schema({
    photo: {
        type: String
    },
    
     patient: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
      }

})
);

module.exports = Avatar; 