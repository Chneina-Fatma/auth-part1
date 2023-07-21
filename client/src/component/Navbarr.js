import React from 'react'
import { Link } from 'react-router-dom'
import { logout } from '../JS/user/Userslice';
import { useDispatch, useSelector } from 'react-redux';

function Navbarr() {
  const user=useSelector((state) => state.user.user);
  const dispatch=useDispatch();
  return (
    <div className='navv'>  <nav class="blend">
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/about">About As</Link></li>
      <li><Link to="/service">Services</Link></li>
      <li><Link to="/shop">Shop</Link></li>
      <li><Link to="/contact">Contact</Link></li>
    { !user? <li><Link to="/login">Login</Link></li>:<li><Link to="/profil">Profil</Link></li>}
    { user?.category=="admin"? <li><Link to="/dashbord">Dashbord</Link></li>:null}
    
    {user? <button onClick={()=>dispatch(logout())}
     style={{ backgroundColor:'#f97202',border:'1px solid',}}>logout</button>:null}

    </ul>
    </nav></div>
  )
}

export default Navbarr