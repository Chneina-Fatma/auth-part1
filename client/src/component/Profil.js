import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { useNavigate } from 'react-router-dom'
 import "./Profil.css"
import { edituser } from '../JS/user/Userslice'
import { deletereservation } from '../JS/reservationslice'
  

const Profil = ({ping,setping}) => {
    const user=useSelector((state) => state.user.user);
    const reservations=useSelector((state)=>state.reservation.reservationList)
   const navigate=useNavigate()
   const dispatch=useDispatch()
   const [edited, setedited] = useState({
    name:user?.name,
    lastname:user?.lastname,
    email:user?.email,
    password:user?.password,
  })
  return (
    <div>
        
         <div style={{marginTop:150} }>
     
            <div className="row" style={{width:1148,marginLeft:48}} > 
              <div className="col-md-12">
                <ol className="breadcrumb">
                  <h6  style={{fontWeight:'bolder', fontSize:24}}>Informations personnelles</h6>
                </ol>
              </div>
            </div>
            {user? <div className="container" style={{marginTop:110}} >
                 
          <div className="main-body" style={{margin:20}}>
    
           {/* /Breadcrumb */}
            <div className="row gutters-sm">
              <div className="col-md-4 mb-3" style={{marginTop:20}}>
                <div className="card" style={{marginLeft:-100, marginTop:-120, width:400, height:350}}>
                  <div className="card-body">
                    <div className="d-flex flex-column align-items-center text-center" >
                      <img src="https://img.freepik.com/psd-gratuit/illustration-3d-personne-lunettes-soleil_23-2149436188.jpg?size=626&ext=jpg" alt="" class="rounded-circle p-1 bg-light" width="120" height="130"  />
                      <div className="mt-3">
                        <h4>{user?.name} {user?.lastname}</h4>
                        <p className="text-secondary mb-1">Full Stack Developer</p>
                        <p className="text-muted font-size-sm"></p>
                      
                        {/* <button className="btn btn-primary">Changer votre photo</button> */}
                       
                      </div>
                    </div>
                  </div>
                </div>
                
              </div>

              <div className="col-md-8">
                <div className="card mb-3" style={{marginLeft:-10, marginTop:-100, width:665}}>
                  <div className="card-body">
                    <div className="row">
                      <div className="col-sm-3">
                        <h6 className="mb-0" style={{color:"blue"}}>Prénom</h6>
                      </div>
                      <div className="col-sm-9 text-secondary">
                      <input type="text" class="form-control" name="name" placeholder={user?.name} onChange={(e)=>setedited({...edited,name:e.target.value})} />
                      </div>
                    </div>
                    <hr />
                    <div className="row">
                      <div className="col-sm-3">
                        <h6 className="mb-0" style={{color:"blue"}}>Nom</h6>
                      </div>
                      <div className="col-sm-9 text-secondary">
                      <input type="text" class="form-control" placeholder={user?.lastname} onChange={(e)=>setedited({...edited,lastname:e.target.value})} />
                      </div>
                    </div>
                    <hr />
                    <div className="row">
                      <div className="col-sm-3">
                        <h6 className="mb-0" style={{color:"blue"}}>Email</h6>
                      </div>
                      <div className="col-sm-9 text-secondary">
                      <input type="text" class="form-control" placeholder={user?.email} onChange={(e)=>setedited({...edited,email:e.target.value})}/>
                      </div>
                    </div>
                    <hr />
                    <div className="row">
                      <div className="col-sm-3">
                        <h6 className="mb-0" style={{color:"blue"}} >Password</h6>
                      </div>
                      <div className="col-sm-9 text-secondary">
                      <input type="text" class="form-control" onChange={(e)=>setedited({...edited,password:e.target.value})} />
                      </div>
                    </div>
                    <hr />
                   {/*  <div className="row">
                      <div className="col-sm-3">
                        <h6 className="mb-0">Address</h6>
                      </div>
                      <div className="col-sm-9 text-secondary">
                        Bay Area, San Francisco, CA
                      </div>
                    </div>
                    <hr /> */}
                    <div className="row">
                      <div className="col-sm-12">
<button variant="primary" onClick={()=> {dispatch(edituser({id:user?._id,edited}));setping(!ping); alert("Votre profile est modifié")}}> Enregistrer </button> 
                     
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>:<h2 style={{marginTop:150,marginLeft:600}}>  loading ...</h2> }


        {/*Reservation List */}
<table className='restable'>
  <tr>

    <td>service</td>
    <td>date</td>
    <td>tel</td>
    <td></td>
  </tr>
{reservations.filter((el)=>el?.name==user?.name).map((el)=><tr><td>{el?.service}</td><td>{el?.date}</td><td>{el?.tel}</td><td><button onClick={()=>{dispatch(deletereservation(el?._id));setping(!ping)}}>X</button></td></tr>)}

  </table>
       
        </div>
         
    </div>
  )
}

export default Profil