require('dotenv').config();

const connectDB = require('./config/db.config');
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
// const fs = require('fs');
const path = require("path");  
const multer = require('multer');
// const Avatar = require('./models/Avatar');
const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  apiKey: "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",
});
const openai = new OpenAIApi(configuration);


mongoose.set('strictQuery', true);

const db = require("./models");
const app = express();
const Role = db.role;
const patients = require('./routes/api/patients');


const port = process.env.PORT || 5000;
const corsOptions = {
  origin: "http://localhost:3000",
  optionsSuccessStatus: 200,
};

connectDB();


// parse application/json
// app.use(express.bodyParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));                       

// parse multipart/form-data media etc

// app.use(multer({ dest: './uploads/',// app.use(multer());
//   rename: function (fieldname, filename) {
//     return filename;
//   },
// }));
// app.use(multer({dest:'./images'}).single('photo'));
//use cors
app.use(cors(corsOptions, {credentials: true, origin:true})); //origin:true
app.use(express.json({extended: false}));
app.use(express.urlencoded({ extended: true }));
//use routes for requests with cors
app.use('/api/patients', patients);
app.use("/images", express.static(path.join("backend/images")));  

// Set up the ChatGPT endpoint
app.post("/chat", async (req, res) => {
  // Get the prompt from the request
  const { prompt } = req.body;


// Generate a response with ChatGPT
  const completion = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: prompt,
    max_tokens: 1000
  });
  res.send(completion.data.choices[0].text);
});


const port2 = 8080;
app.listen(port2, () => {
  console.log(`Server listening on port ${port2}`);
});


require('./routes/auth.routes')(app);//
require('./routes/user.routes')(app);//


app.listen(port, ()=>{
    console.log(`Server is running on port: ${port}`);
});


function initial() {
    Role.estimatedDocumentCount((err, count) => {
      if (!err && count === 0) {
        new Role({
          name: "user"
        }).save(err => {
          if (err) {
            console.log("error", err);
          }  
          console.log("added 'user' to roles collection");
        });
  
        new Role({
          name: "admin"
        }).save(err => {
          if (err) {
            console.log("error", err);
          } 
          console.log("added 'admin' to roles collection");
        });
      }
    });
  }

  initial();

  module.exports = app

 
