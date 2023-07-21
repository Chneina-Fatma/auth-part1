// import React, { Component } from 'react'
// import { useState } from 'react';
// import Button from 'react-bootstrap/Button';
// import Modal from 'react-bootstrap/Modal';
// import Form from 'react-bootstrap/Form';

// function Addproduct({ products , setproducts }) {
//     const [show, setShow] = useState(false);
//     const handleClose = () => setShow(false);
//     const handleShow = () => setShow(true);
//     const [Newproduct, setNewproduct] = useState({
//         name:"",
//         posteurl:"",
//         description:"",
//         rating:"",

//     });
//     const add=()=>{
//         setproducts([...products , Newproduct]);
//     };
//     return (
//     <div >
//     <Button variant="primary" style={{backgroundColor:"rgb(23, 180, 23)",color:"white",border:"none" ,borderRadius:"50%" , marginTop:"40px" }} onClick={handleShow}>
//       +
//     </Button>

//     <Modal show={show} onHide={handleClose}>
//       <Modal.Header closeButton>
//         <Modal.Title>Add products</Modal.Title>
//       </Modal.Header>
//       <Modal.Body>
//         <Form>
//       <Form.Group className="mb-3" controlId="formBasicEmail">
//         <Form.Label>product Name </Form.Label>
//         <Form.Control type="text" placeholder="Enter product Name" onChange={(e)=>setNewproduct({...Newproduct,name:e.target.value})}/>
//         </Form.Group>
      
      
      
//       <Form.Group className="mb-3" controlId="formBasicEmail">
//         <Form.Label>product Image </Form.Label>
//         <Form.Control type="text" placeholder="Enter product Image" onChange={(e)=>setNewproduct({...Newproduct,posterurl:e.target.value})} />
//       </Form.Group>

      
//       <Form.Group className="mb-3" controlId="formBasicEmail">
//         <Form.Label>product Description </Form.Label>
//         <Form.Control type="text" placeholder="Enter product Description" onChange={(e)=>setNewproduct({...Newproduct,Description:e.target.value})}/>
//       </Form.Group>

//       <Form.Group className="mb-3" controlId="formBasicEmail">
//         <Form.Label>product rate </Form.Label>
//         <Form.Control type="text" placeholder="Enter product Rate" onChange={(e)=>setNewproduct({...Newproduct,Rating:e.target.value})}/>
        
//       </Form.Group>
      
//       <Form.Group className="mb-3" controlId="formBasicEmail">
//         <Form.Label>product price </Form.Label>
//         <Form.Control type="text" placeholder="Enter product price" onChange={(e)=>setNewproduct({...Newproduct,price:e.target.value})}/>
        
//       </Form.Group>

//       </Form>

//       </Modal.Body>
//       <Modal.Footer>
//         <Button variant="secondary" onClick={handleClose}>
//           Close
//         </Button>
//         <Button variant="primary" style={{backgroundColor:"rgb(23, 180, 23)", color:"white", border:"none"}}
//         onClick={() => {add();handleClose()}} 
//         >
//           Add
//         </Button>
//       </Modal.Footer>
//     </Modal>
//   </div>
//   )
// }

// export default Addproduct