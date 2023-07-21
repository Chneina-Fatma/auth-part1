// import React from 'react';
// import Productcard from './Productcard';
// import Addproduct from '../Addproduct';

// function Productlist({ product,setproduct,text,rate }) {
//   return (
//     <div>
//     <div className='add'>
//         <Addproduct product={product} setproduct={setproduct}/>
//     </div>
//     <div className='container'>
//         {product.filter((el) => el.name.toLowerCase().includes(text.toLowerCase())&& el.rating>=rate).map((el) => 
//         <Productcard el={el} />).reverse()}
//     </div></div>
//   );
// }

// export default Productlist;