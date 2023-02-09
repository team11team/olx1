import React, { useState,useContext } from 'react';


import Logo from '../../olx-logo.png';
import { firebaseContex } from '../../store/firebaseContext';
import { getFirestore } from "firebase/firestore";
import './Signup.css';
import { getAuth, createUserWithEmailAndPassword,updateProfile, getIdToken ,} from "firebase/auth";
import {collection, addDoc, getDoc,getDocs} from 'firebase/firestore'
import { Link, useNavigate } from 'react-router-dom';


export default function Signup() {
  const [userName,setUername]=useState('')
  const [email,setEmail]=useState('')
  const [phonenumber,Sethponenumber]=useState('')
  const [passwerd,Setpasswerd]=useState('')
  const navigate=useNavigate();
  
  const {firebase}=useContext(firebaseContex)
 
  const handleSubmit=(e)=>{
    e.preventDefault()
    const auth=getAuth();
  

    createUserWithEmailAndPassword(auth,email,passwerd).then((result)=>{
      
      console.log(result.user.uid);
      
      updateProfile(auth.currentUser,{
        displayName:userName
   
        
      })

      .then(() => {
      
        console.log("got it");
        const db=getFirestore(firebase)
        const products=addDoc(collection(db, 'user'),{
          id:result.user.uid,
          user:userName,
          phone:phonenumber
        }).then(()=>{
          
          
         navigate('/login')
  }).catch((error)=>{
    console.log(error);
  })

    
 

})
    })

    console.log(firebase);
  }
  return (
    <div>
      <div className="signupParentDiv">
        <img width="200px" height="200px" src={Logo}></img>
        <form onSubmit={handleSubmit}>
          <label htmlFor="fname">Username</label>
          <br />
          <input
            className="input"
            type="text"
            value={userName}
            onChange={(e)=>setUername(e.target.value)}
            id="fname"
            name="name"
            defaultValue="John"
          />
          <br />
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            type="email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            id="fname"
            name="email"
            defaultValue="John"
          />
          <br />
          <label htmlFor="lname">Phone</label>
          <br />
          <input
            className="input"
            type="number"
            value={phonenumber}
            onChange={(e)=>Sethponenumber(e.target.value)}
            id="lname"
            name="phone"
            defaultValue="Doe"
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            className="input"
            type="password"
            value={passwerd}
            onChange={(e)=>Setpasswerd(e.target.value)}
            id="lname"
            name="password"
            defaultValue="Doe"
          />
          <br />
          <br />
          <button>Signup</button>
        </form>
        <a >
          <Link to={'/login'} style={{color:'black'}}>Login</Link>

        </a>
      </div>
    </div>
  );
}
