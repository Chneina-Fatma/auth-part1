import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { userRegister } from '../JS/user/Userslice';

const Register = () => {
const [register, setregister] = useState({
  name:"",
  lastname:"",
  email:"",
  password:"",
})
const dispatch=useDispatch();
const navigate=useNavigate();
  return (
    <div className='regis'> 
       <div className="container">
    <div className="row">
      <div className="col-md-6 offset-md-3">
        <h2 className="text-center text-dark mt-5">Please Register</h2>
         

          <form className="card-body cardbody-color p-lg-5" onSubmit={(e)=>e.preventDefault()}>

            <div className="text-center">
              <img src="register-icon.jpg"/>
            </div>

            <div className="mb-3">
              <input type="text" 
              className="form-control"
               id="Username" aria-describedby="emailHelp"
                placeholder=" Name"
                required=""
                autoFocus=""
                onChange={ (e) => setregister({...register,name:e.target.value})}
                /></div>
                <div className="mb-3">
                <input type="text" className="form-control" id="lastName" aria-describedby="emailHelp"
                placeholder="lastName"
                required=""
                autoFocus=""
                onChange={ (e) => setregister({...register,lastname:e.target.value})}/></div>
                <div className="mb-3">
                <input type="email" className="form-control" id="Adress Email" aria-describedby="emailHelp"
                placeholder="Adress Email"
                required=""
                autoFocus=""
                onChange={ (e) => setregister({...register,email:e.target.value})}/>
            </div>
            <div className="mb-3">
              <input type="password" className="form-control" id="password" 
              placeholder="password"
              required=""
              autoFocus=""
              onChange={ (e) => setregister({...register,password: e.target.value})}/>
            </div>
            <div className="text-center">
              <button  className="btn btn-color px-5 mb-5 w-100"
              onClick={()=>{dispatch(userRegister(register));navigate("/")}} 
              >Register</button></div>
              <p>u already have a count <Link to="/login">sign in</Link></p>
            
          </form>
        </div>

      </div>
    </div>
  </div> 

 
     
  )
};

export default Register;