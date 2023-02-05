import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {firebaseContex} from './store/firebaseContext'
 import firebase from './firebase/config'
import Context from './store/firebaseContext';
import { BrowserRouter as Router} from 'react-router-dom';



ReactDOM.render(
<Router>
<firebaseContex.Provider value={{firebase}}>
   <Context>

    <App />
   </Context>

   
        
   

</firebaseContex.Provider>
   </Router>
, document.getElementById('root'));
