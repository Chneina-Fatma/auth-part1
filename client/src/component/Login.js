import React, { useState } from 'react'
 import { useDispatch } from 'react-redux';
import { userLogin, userlogin } from '../JS/user/Userslice';
import { Link, useNavigate } from 'react-router-dom';
 
  const Login = () => {
    const [login, setlogin] = useState({
      email:"",
      password:"",
    });
    const dispatch=useDispatch();
    let navigate=useNavigate();

  return (
    <div classNameName='body'>
         
         <div className="container">
    <div className="row">
      <div className="col-md-6 offset-md-3">
        <h2 className="text-center text-dark mt-5">Please Login </h2>
        <div className="text-center mb-5 text-dark">Made with bootstrap</div>
        
        <div className="card my-5">

          <form className="card-body cardbody-color p-lg-5" onSubmit={(e)=>e.preventDefault()}>

            <div className="text-center">
              <img src="https://ps.w.org/login-customizer/assets/icon-256x256.png?rev=2455454" className="img-fluid profile-image-pic img-thumbnail rounded-circle my-3"
                width="200px" alt="profile"/>
            </div>

            <div className="mb-3">
                <input type="email" className="form-control" id="Adress Email" aria-describedby="emailHelp"
                placeholder="Adress Email"
                required=""
                autoFocus=""
                onChange={ (e) => setlogin({...login,email:e.target.value})}/>
            </div>
            <div className="mb-3">
              <input type="password" className="form-control" id="password" 
              placeholder="password"
              required=""
              autoFocus=""
              onChange={ (e) => setlogin({...login,password: e.target.value})}/>
            </div>


            <div className="text-center">
              <button  className="btn btn-color px-5 mb-5 w-100"
              onClick={()=>{dispatch(userlogin(login));
setTimeout(() => {
  navigate("/");
}, 1000);
setTimeout(() => {
  window.location.reload();
}, 1000);


}}>Login</button></div>


            <div id="emailHelp" className="form-text text-center mb-5 text-dark">Not
              Registered? <Link to="/register"> Create an
                Account</Link>
            </div>
          </form>
        </div>

      </div>
    </div>
  </div> 

 
</div>
  )
};

export default Login;