
// import React from 'react';
// import ReactStars from "react-rating-stars-component";

// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';
// import { Link } from 'react-router-dom';

// function Productcard({el}) {
//   return (
//     <div>
//     <Card style={{ margin:'20px', width: '18rem',borderRadius:'11px',
//      boxShadow:"0 8px 8px 0 rgba(0, 0, 0, 0.2), 0 8px 20px 0 rgba(0, 0, 0, 0.19)" }}>
//     <Card.Img variant="top" src={el.posterurl} />
//     <Card.Body>
//       <Card.Title>{el.name}</Card.Title>
//       <Card.Text>
//        {el.description}
//       </Card.Text>
//       <ReactStars
//     count={5}
//     size={24}
//     activeColor="rgb(23, 180, 23)"
//     value={el.rating}
//     edit={false}
//   />
//   <Card.Text>
//        {el.price}
//       </Card.Text>
//   <Link to={`/trailer/${el.name}`} style={{color:"black" ,textDecoration:"none"}}>  
//  <Button variant="primary">View Product</Button>
//  </Link>

//     </Card.Body>
//   </Card>
//   </div>
//   )
// }

// export default Productcard