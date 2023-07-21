import React, { useState } from 'react'
import "./marriage.css"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { addreservation } from '../JS/reservationslice';
import { useDispatch, useSelector } from 'react-redux';
import Navbarr from './Navbarr';
import Swal from 'sweetalert2'
import { Link } from 'react-router-dom';


function Event({ping, setping}) {
    const user=useSelector((state) => state.user.user);
    const [reservation, setreservation] = useState({
        
            name: user?.name,
            lastname:user?.lastname,
            service:"Event",
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
 <span className="thebase-bread-current">Events</span></div></nav>			</header>
       {/* {/* fin */}
       <Link to="/service"> <button id="BTN"></button> </Link>
    <div className="bigbox">

        <div className='box1'>
            <img src="https://solene.qodeinteractive.com/wp-content/uploads/2019/11/h1-port-feauture-img-3.jpg" />
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
        <Form.Label>Date of Event</Form.Label>
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

export default Event
