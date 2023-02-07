import React,{useEffect,useContext  } from 'react';
import './App.css';
import Signup from './Pages/Signup'

import {BrowserRouter as Router,Link,Route,Routes,} from 'react-router-dom'
import {AuthContex, firebaseContex,} from './store/firebaseContext'
/**
 * ?  =====Import Components=====
 */
import Home from './Pages/Home';
import Login from './Components/Login/Login';
import { getAuth, onAuthStateChanged } from '@firebase/auth';
import Create from './Components/Create/Create';

function App() {
  const {user,setUser}=useContext(AuthContex)
  console.log(user);
  
  const {firebase}=useContext(firebaseContex)
  const auth=getAuth()
  
  useEffect(()=>{
     onAuthStateChanged(auth,(User)=>{
      
      
     
      setUser(User)

  
    })
   


  })
  return (
    <div>


     
        
    <Routes>
    <Route element={ <Home />} exact path={'/'}>
    </Route>
  </Routes>

    <Routes>
      
    <Route element={ <Signup />} path={'/signup'}>
    </Route>
    </Routes>

    <Routes>
    <Route element={ <Login />} path={'/login'}>
    </Route>
    </Routes>

    
    <Routes>
    <Route element={ <Create />} path={'/create'}>
    </Route>
    </Routes>


    
    

    

   

    </div>
  );
}

export default App;
