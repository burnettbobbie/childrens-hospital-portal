// const { MongoClient } = require("mongodb");
require('dotenv').config();
const Db = process.env.ATLAS_URI;
// const client = new MongoClient(Db, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });


const mongoose = require('mongoose');
// const config = require('config');
// const db = config.get('mongoURI');

const connectDB = async () => {
  try {
    mongoose.set('strictQuery', true);
    await mongoose.connect(Db, {
      useNewUrlParser: true,
    });

    console.log('MongoDB is Connected');
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

module.exports = connectDB;

