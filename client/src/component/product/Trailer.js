// import React from 'react'
// import { useParams } from 'react-router-dom';
// import ReactStars from "react-rating-stars-component";


// function Trailer({products}) {
//     const params=useParams();
//     const product=products.filter((el)=>el.name==params.name)[0];
//     console.log(product);
//   return (
//     <div style={{ width:"100%",textAlign:'center'}}>
//       <div style={{marginTop:"60PX"}}><img src={product.posterurl} style={{width:"80%",
//        borderRadius:"15px"
//       }}/>
//       </div>
//       <h1 style={{textShadow:"1px 1px 2px black, 0 0 25px blue, 0 0 5px darkblue"}}>{product.name } </h1>
//       <p>{product.description}</p>
//       <div className='ReactStars'><ReactStars 
//     count={5}
//     size={29}
//     activeColor="rgb(23, 180, 23)"
//     value={product.rating}
//     edit={false}/></div>
//       </div>
//   )
// }

// export default Trailer