import './css/app.css';
import Landing from './pages/Landing';
import Patient from './pages/Patient';
import {Routes, Route} from "react-router-dom";
import React from 'react';
import Games from './pages/Home/Games';
import Admin from './pages/Admin';
import Login from './components/Login';
import Register from './components/Register';
import Home from './pages/Home/Home';
import Map from './pages/Home/Map';
import Appointment from './pages/Profile/Calendar';
import Entertainment from './pages/Home/Entertainment';
import ShowUserList from './components/admin/Users';
import CreatePatient from './components/admin/CreatePatient';
import UpdatePatientInfo from './components/admin/UpdatePatientInfo';
import ShowPatientDetails from './components/admin/ShowPatientDetails';
import UploadAvatar from './components/admin/UploadAvatar';
import CreateAppointment from './components/admin/CreateAppointment';
import UpdateAppointment from './components/admin/UpdateAppointment';
import CreateNote from './components/admin/CreateNote';
import UpdateNote from './components/admin/UpdateNote';






const App = () =>{


  return (
    <>
      <Routes>
          <Route path="/" element={<Landing/>} />
          <Route path="/Patient" element={<Patient />}/>
          <Route path="/Games" element={<Games/>}/>
          <Route path="/Entertainment" element={<Entertainment/>}/>
          <Route path="/Login" element={<Login />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/Admin" element={<Admin />} />
          <Route path="/Home" element={<Home/>}/>
          <Route path="/Map" element={<Map/>}/>
          <Route path='/Appointments' element={<Appointment/>}/>
          <Route path='/User-Records' element={<ShowUserList/>}/>
          <Route path='/User-Records/create-patient/:id' element={<CreatePatient />} />
          <Route path='/User-Records/edit-patient/:id' element={<UpdatePatientInfo />} />
          <Route path='/User-Records/show-patient/:id' element={<ShowPatientDetails />} />
          <Route path='/User-Records/upload-photo/:id' element={<UploadAvatar />} />
          <Route path='/User-Records/create-appointment/:id' element={<CreateAppointment />} />
          <Route path='/User-Records/edit-appointment/:id' element={<UpdateAppointment />} />
          <Route path='/User-Records/create-note/:id' element={<CreateNote/>}/>
          <Route path='/User-Records/edit-note/:id' element={<UpdateNote />} />
      </Routes>
    </>
  )
}
  


export default App;
