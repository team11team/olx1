import React from 'react';

import Logo from '../../olx-logo.png';
import './Login.css';
import { useState,useContext ,} from 'react';
import {firebaseContex} from '../../store/firebaseContext'
import {signInWithEmailAndPassword,getAuth} from 'firebase/auth'
import { Link, useNavigate } from 'react-router-dom';

function Login() {
  const [loginEmail,setloginEmail ] = useState('');
  const [loginpassword,setloginpassword ] = useState('');
const {loginfirecontext}=useContext(firebaseContex)
const navigate=useNavigate()
const handleSubmit=(e)=>{
  e.preventDefault()
  const auth=getAuth()
   signInWithEmailAndPassword(auth,loginEmail,loginpassword).then(()=>{
    alert('success')
   navigate('/')


  }).catch((error)=>{
    alert(error.message)

  })
  




}
  return (
    <div>
      <div className="loginParentDiv">
        <img width="200px" height="200px" src={Logo}></img>
        <form onClick={handleSubmit}>
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            type="email"
            value={loginEmail}
            id="fname"
            onChange={(e)=>setloginEmail(e.target.value)}
            name="email"
            defaultValue="John"
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            className="input"
            type="password"
            value={loginpassword}
            id="lname"
            onChange={(e)=>setloginpassword(e.target.value)}
            name="password"
            defaultValue="Doe"
          />
          <br />
          <br />
          <button>Login</button>
        </form>
       <a>
        <Link to={'/signup'} style={{color:'black'}}>Signup</Link>
       </a>
        
      </div>
    </div>
  );
}

export default Login;
