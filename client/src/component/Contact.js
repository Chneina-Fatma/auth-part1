import React from 'react'
import Footer from './Footer'
import { Link } from 'react-router-dom'
import Navbarr from './Navbarr'

function Contact() {
  return (
    <div>
{/* <div className="Navv" ></div> */}

<header className="entry-header">
<Navbarr/>

				<h1 className="entry-title">Contact</h1><nav id="thebase-breadcrumbs" aria-label="Breadcrumbs"
 className="thebase-breadcrumbs">
 <div className="thebase-breadcrumb-container"><span>
 <Link to="/" itemprop="url" className="thebase-bc-home">
 <span style={{color:"black",}}>Home</span></Link></span> <span className="bc-delimiter">/</span> <span className="thebase-bread-current">Contact Us</span></div></nav></header>
       {/* {/* fin */}

<div className='top-title' style={{border:"0", width:"100%",height:"150px",display:"flex",
justifyContent:"center",alignItems:"center",fontSize:"25px",}}><h1 style={{color: "#4d504a",fontSize: "48px",
lineHeight: "50px",textTransform:" uppercase",fontWeight: "400",letterSpacing: ".2em",}}>GET IN TOUCH</h1></div>

        <div className="wrapper-light-wrapper">
      <div className="container inner pt-60">
        <div className="google-map">
          <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2499.4483800426133!2d3.
          2241689!3d51.2108153!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c350cfcf934d7d%3A0xa4d8f385ffa7d70b!
          2sChoco-Story!5e0!3m2!1sen!2str!4v1534408440419" width="100%" height="450" frameborder="0" 
          style={{border:"0", allowfullscreen:"",}}></iframe>
        </div>
         <div className="space50"></div>
        <div className="row">
          <div className="col-md-8">
            <h2 className="section-title">Get in Touch</h2>
            <p>Nullam quis risus eget urna mollis ornare vel eu leo. Fusce dapibus, tellus ac cursus commodo, 
                tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Integer posuere erat.</p>
            <div className="space10"></div>
            <div className="form-container">
              <form action="contact/vanilla-form.php" method="post" className="vanilla vanilla-form" novalidate="" data-vf-id="7b29303a-b7ce-643d-4949-0ed4ab9cbdc1">
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <input type="text" className="form-control" name="name" placeholder="Your name" required="required"/>
                    </div>
                   </div>
                   <div className="col-md-6">
                    <div className="form-group">
                      <input type="email" className="form-control" name="email" placeholder="Your e-mail" required="required"/>
                    </div>
                   </div>
                   <div className="col-md-6">
                    <div className="form-group">
                      <input type="tel" className="form-control" name="tel" placeholder="Phone"/>
                    </div>
                   </div>
                   <div className="col-md-6">
                    <div className="form-group">
                      <input type="text" className="form-control" name="subject" placeholder="Subject"/>
                    </div>
                   </div>
                   <div className="col-12">
                    <textarea name="message" className="form-control" 
                    rows="3" placeholder="Type your message here..." required=""></textarea>
                    <div className="space20"></div>
                    <Link to=""><button type="submit" className="btn state-initial" 
                    data-error="Fix errors" data-processing="Sending..." 
                    data-success="Thank you!" data-initial="" value="" style={{backgroundColor:"#c2d9fc",border:"2px solid #6ea2ef",
                    marginTop: "15PX",marginLeft: "43%",}}>Send</button></Link>
                    <footer className="notification-box"></footer>
                  </div>
                 </div>
               </form>
             </div>
           </div>
           <aside class="col-md-4-sidebar">
            <div class="box-bg-white shadow p-30">
              <h4>Address</h4>
              <p>Fusce dapibus, tellus commodo, tortor mauris condimentum utellus fermentum, porta sem malesuada magna.
                 Sed posuere consectetur est at lobortis. Morbi leo risus, porta ac consectetur.</p>
              <ul class="icon-list">
                <li><i class="fa fa-map"></i>Moonshine St. 14/05 Light City</li>
                <li><i class="fa fa-envelope"> </i>
                <Link to="chneina.chneina@email.com" class="nocolor">chneina.chneina@email.com</Link></li>
                <li><i class="fa-solid fa-phone" style={{color: "#e48807",}}> </i>(+216) 99623630 </li>
              </ul>
            </div>
           </aside>
         </div>
       </div>
     </div>


     <div className='footer'><Footer/></div>
    </div>
  )
}

export default Contact