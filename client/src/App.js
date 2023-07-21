import {Routes,Route, useNavigate} from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './component/Login';
import Register from './component/Register';
import { useEffect, useState } from 'react';
import Profil from './component/Profil';
import { useDispatch } from 'react-redux';
import { userCurrent } from './JS/user/Userslice';
import Home from './component/Home';
import AboutAs from './component/AboutAs';
import Contact from './component/Contact';

import Service from './component/Service';
import Shop from './component/Shop';
import Marriage from './component/Marriage';
import { getreservation } from './JS/reservationslice';
import Birthday from './component/Birthday';
import Engagement from './component/Engagement';
import Event from './component/Event';
import Dashbord from './component/Dashbord';

function App() {
  const isAuth=localStorage.getItem ("token");
const dispatch=useDispatch();
const navigate=useNavigate()
const [ping, setping] = useState(false)
useEffect(() => {

  dispatch(userCurrent());
  dispatch(getreservation());

  
},[ping]);


  return (
    <div className="App">
      
        <Routes>
        <Route path="/login" element={ <Login/> }/>
        <Route path="/register" element={ <Register/> }/>
        <Route path="/profil" element={ <Profil ping={ping} setping={setping}/> }/>
        <Route path="/" element={ <Home/> }/>
        <Route path="/about" element={ <AboutAs/> }/>
        <Route path="/contact" element={ <Contact/> }/>
        <Route path="/shop" element={ <Shop/> }/>
        <Route path="/service" element={ <Service/> }/>
        <Route path="/marriage" element={ <Marriage ping={ping} setping={setping}/> }/>
        <Route path="/event" element={ <Event ping={ping} setping={setping}/> }/>
        <Route path="/birthday" element={ <Birthday ping={ping} setping={setping}/> }/>
        <Route path="/engagement" element={ <Engagement ping={ping} setping={setping}/> }/>
        <Route path="/dashbord" element={ <Dashbord ping={ping} setping={setping}/> }/>

         </Routes>
       
    </div>
  );
}

export default App;
