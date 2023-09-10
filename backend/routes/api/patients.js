const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

// Load models
const Patient = require('../../models/Patient');
const User = require('../../models/user.model');
const PatientNote = require('../../models/PatientNote');
const Notice = require('../../models/Notice');
const Fact = require('../../models/Fact');
const Avatar = require('../../models/Avatar');
const Appointment = require('../../models/Appointment');


//multer module to handle multi part data
const multer = require('multer');
//unique id module to be generated for each multipart file
const { v4: uuidv4 } = require('uuid');
let path = require('path');

//sets location of multer files to be stored (uploads folder)
const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, 'uploads' );
    },
    filename: function(req, file, cb) {   
        cb(null, uuidv4() + '-' + Date.now() + path.extname(file.originalname));
    }
});

//sets allowed file types 
const fileFilter = (req, file, cb) => {
    const allowedFileTypes = ['image/jpeg', 'image/jpg', 'image/png'];
    if(allowedFileTypes.includes(file.mimetype)) {
        cb(null, true);
    } else {
        cb(null, false);
    }
};

//variable to be used for multer file requests inc. file destination and file filter
let upload = multer({ storage, fileFilter });


//******************************* G E T *****************************

//Get all user accounts in alphabetical order (lastname)
router.get('/users', (req, res) => {
  User.find({ roles:'63cb011a6a972a7c59cb4288' })
    .sort({
      lastname: 1 
    })
    .then((users) => res.json(users))
    .catch((err) => res.status(404).json({ nousersfound: 'No user accounts found' }));
});


//Get random fact
router.get('/facts', (req, res) => {
  Fact.find({ $expr: { $lt: [0.5, {$rand: {} } ] }}).limit(1)
    .then((facts) => res.json(facts))
    .catch((err) => res.status(404).json({ nofactsfound: 'No facts found' }));
});

//Get all notices
router.get('/notices', (req, res) => {
  Notice.find()
    .then((notices) => res.json(notices))
    .catch((err) => res.status(404).json({ nonoticesfound: 'No notices found' }));
});


//Get a notice by admin ID
router.get("/notice/:id", async (req, res) => {
  try {
    const adminNotice = await Notice.find({created_by:req.params.id})
    res.status(201).json([adminNotice]);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});


//Get all patient records
router.get('/', (req, res) => {
  Patient.find()
    .then((patients) => res.json(patients))
    .catch((err) => res.status(404).json({ nopatientsfound: 'No patient records found' }));
});


//Get patient record by patient user id
router.get("/patient/:id", async (req, res) => {
  try {
    const patientRecord = await Patient.find({patient:req.params.id})
  
    res.status(201).json([patientRecord]);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});


//Get patient note by user id
router.get("/patient/note/:id", async (req, res) => {
  try {
    const patientNote = await PatientNote.find({patient:req.params.id})
  
    res.status(201).json([patientNote]);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

//Get patient photo by user id
router.get("/patient/photo/:id", async (req, res) => {
  try {
    const photo = await Avatar.find({patient:req.params.id})
    res.status(201).json([photo]);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

//Get patient appointment by user id
router.get("/patient/appointment/:id", async (req, res) => {
  try {
    const appoint = await Appointment.find({patient:req.params.id})
    res.status(201).json([appoint]);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});


//Get user by user id
router.get("/user/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
   
    console.log(user);
    res.status(201).json([user]);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});


//Get patient's record by record id
router.get('/:patientId', (req, res) => {
  Patient.findById(req.params.patientId)
    .then((patient) => res.json(patient))
    .catch((err) => res.status(404).json({ nopatientfound: 'No patient record found' }));
});

//Get patient's appointment by appointment id
router.get('/appointments/:id', (req, res) => {
  Appointment.findById(req.params.id)
    .then((appointment) => res.json(appointment))
    .catch((err) => res.status(404).json({ noappointmentfound: 'No appointment found' }));
});

//Get patient's note by note id
router.get('/notes/:id', (req, res) => {
  PatientNote.findById(req.params.id)
    .then((note) => res.json(note))
    .catch((err) => res.status(404).json({ nonotefound: 'No patient note found' }));
});


 
//******************** P O S T ***************************************
//upload user photo
router.route('/users/photo').post(upload.single('photo'), (req, res) => {
  const photo = req.file.filename;
  const patient = req.body.patient;

  const newAvatarData = {
      photo,
      patient
  }

  const newAvatar = new Avatar(newAvatarData);

  newAvatar.save()
         .then(() => res.json('Photo Added'))
         .catch(err => res.status(400).json('Error: ' + err));
});


//post patient note
router.post("/notes", async (req, res) =>{
  const notes = new PatientNote({
    _id: new mongoose.Types.ObjectId(),
    text: req.body.text,
    created: req.body.created,
    patient: req.body.patient
  });

  console.log(notes);

  try{

    const result = await notes.save();
    res.status(201).json({
      createdPatientNote: {
        _id: result._id,
        text: result.text,
        created: result.created,
        patient: result.patient
      },
      
    });
  
  } catch (err) {
    res.status(500).json(err);    
  }
  // router.push(res.data);
});

//post patient appointment
router.post("/appointments", async (req, res) =>{
  const appoint = new Appointment({
    _id: new mongoose.Types.ObjectId(),
    doctor: req.body.doctor,
    description: req.body.description,
    location: req.body.location,
    date: req.body.date,
    patient: req.body.patient
  });

  console.log(appoint);

  try{

    const result = await appoint.save();
    res.status(201).json({
      createdAppointment: {
        _id: result._id,
        doctor: result.doctor,
        description: result.description,
        location: result.location,
        date: result.date,
        patient: result.patient
      },     
    });
  
  } catch (err) {
    res.status(500).json(err);    
  }
  // router.push(res.data);
});

//post notice
router.post("/notices", async (req, res) =>{
  const notices = new Notice({
    _id: new mongoose.Types.ObjectId(),
    text: req.body.text,
    created: req.body.created,
    created_by: req.body.created_by
  });

  console.log(notices);

  try{

    const result = await notices.save();
    res.status(201).json({
      createdNotice: {
        _id: result._id,
        text: result.text,
        created: result.created,
        created_by: result.created_by
      },
      
    });
  
  } catch (err) {
    res.status(500).json(err);    
  }

});

//Post new patient record
router.post("/", async (req, res) => {
  const patient = new Patient({
    _id: new mongoose.Types.ObjectId(),
    condition: req.body.condition,
    treatment: req.body.treatment,
    doctor: req.body.doctor,
    nurse: req.body.nurse,
    medication: req.body.medication,
    updated_date: req.body.updated_date,
    patient: req.body.patient
  });

  
  console.log(patient);

  try {
    const result = await patient.save();
    res.status(201).json({
      createdPatient: {
        _id: result._id,
        condition: result.condition,
        treatment: result.treatment,
        doctor: result.doctor,
        nurse: result.nurse,
        medication: result.medication,
        updated_date: result.updated_date,
        patient: result.patient
      },      
    });
  
  } catch (err) {
    res.status(500).json(err);    
  }
  // router.push(res.data);
});


//***************************** U P D A T E ******************************************

// update patient record by id
router.put('/:id', (req, res) => { 
  Patient.findByIdAndUpdate(req.params.id, req.body)
    .then((patient) => res.json({msg: 'Record updated successfully' }))
    .catch((err) =>
      res.status(400).json({ error: 'Unable to update the Database' })
    );
});


//update user record by id
router.put('/user/:id', (req, res) => {
  User.findByIdAndUpdate(req.params.id, req.body)
    .then((user) => res.json({msg: 'Record updated successfully' }))
    .catch((err) =>
      res.status(400).json({ error: 'Unable to update the Database' })
    );
});

//update patient note by id
router.put('/note/:id', (req, res) => {
  PatientNote.findByIdAndUpdate(req.params.id, req.body)
    .then((patientNote) => res.json({msg: 'Note updated successfully' }))
    .catch((err) =>
      res.status(400).json({ error: 'Unable to update the Database' })
    );
});

//update patient appointment by id
router.put('/appointment/:id', (req, res) => {
  Appointment.findByIdAndUpdate(req.params.id, req.body)
    .then((appointment) => res.json({msg: 'Appointment updated successfully' }))
    .catch((err) =>
      res.status(400).json({ error: 'Unable to update the Database' })
    );
});


//******************************** D E L E T E **********************************

// Delete a patient's record
router.delete('/:id', (req, res) => {
  Patient.findByIdAndRemove(req.params.id, req.body)
    .then((patient) => res.json({ mgs: 'Patient record deleted successfully' }))
    .catch((err) => res.status(404).json({ error: 'No such Record' }));
});

// Delete a patient's note
router.delete('/note/:id', (req, res) => {
  PatientNote.findByIdAndRemove(req.params.id, req.body)
    .then((patient) => res.json({ mgs: 'Patient note deleted successfully' }))
    .catch((err) => res.status(404).json({ error: 'No such Note' }));
});

// Delete a notice
router.delete('/notice/:id', (req, res) => {
  Notice.findByIdAndRemove(req.params.id, req.body)
    .then((notice) => res.json({ mgs: 'Notice deleted successfully' }))
    .catch((err) => res.status(404).json({ error: 'No notice!' }));
});

// Delete a patient photo
router.delete('/photo/:id', (req, res) => {
  Avatar.findByIdAndRemove(req.params.id, req.body, req.file )
    .then((avatar) => res.json({ mgs: 'Photo deleted successfully' }))
    .catch((err) => res.status(404).json({ error: 'No photo!' }));
});

// Delete a patient appointment
router.delete('/appointment/:id', (req, res) => {
  Appointment.findByIdAndRemove(req.params.id, req.body)
    .then((appointment) => res.json({ mgs: 'Appointment deleted successfully' }))
    .catch((err) => res.status(404).json({ error: 'No photo!' }));
});

module.exports = router;
