import React, { useState } from 'react'
import "./marriage.css"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { addreservation } from '../JS/reservationslice';
import { useDispatch, useSelector } from 'react-redux';
import Navbarr from './Navbarr';
import Swal from 'sweetalert2'
import { Link } from 'react-router-dom';



function Engagement({ping, setping}) {
    const user=useSelector((state) => state.user.user);
    const [reservation, setreservation] = useState({
        
            name: user?.name,
            lastname:user?.lastname,
            service:"Engagement",
            date:"",
            tel:"",
            
    })
const dispatch=useDispatch();
  return (
    <div className='flex-column' style={{display:'flex', flexDirection:'column',}} > 
     <div className="Navvv" >
  <Navbarr/>
</div>
{/* header */}
<header className="entry-header">
<h1 className="entry-title">Reservation</h1>
<nav id="thebase-breadcrumbs" aria-label="Breadcrumbs"
className="thebase-breadcrumbs">
<div className="thebase-breadcrumb-container">
  <span>
<Link to="/" itemprop="url" className="thebase-bc-home">
<span style={{color:"black",}}>Home</span></Link></span> <span className="bc-delimiter">/</span>
 <span className="thebase-bread-current">Service</span> <span className="bc-delimiter">/</span>
 <span className="thebase-bread-current">Engagement</span></div></nav>			</header>
       {/* {/* fin */}
       <Link to="/service"> <button id="BTN"> </button> </Link>
    <div className="bigbox">

        <div className='box1'>
            <img src="data:image/jpeg;base64,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" />
        </div>
        <div className="box2">
            <h1>Make your reservation</h1>
        <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder={user?.name} />
        
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Lastname</Form.Label>
        <Form.Control type="text" placeholder={user?.lastname} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Date of Engagement</Form.Label>
        <Form.Control type="date" placeholder="text" onChange={(e)=>setreservation({...reservation, date:e.target.value})}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Number phone</Form.Label>
        <Form.Control type="text" placeholder="phone" onChange={(e)=>setreservation({...reservation, tel:e.target.value})} />
      </Form.Group>
  
      <Button variant="primary" onClick={()=>{dispatch(addreservation(reservation));setping(!ping);Swal.fire(
  'Good job!',
  'Your reservation is saved!',
  'success'
)}}>
        Reserve
      </Button>
    </Form>
        </div>
    </div></div>
  )
}

export default Engagement
