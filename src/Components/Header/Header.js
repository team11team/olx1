import React,{useContext} from 'react';

import './Header.css';
import OlxLogo from '../../assets/OlxLogo';
import Search from '../../assets/Search';
import Arrow from '../../assets/Arrow';
import SellButton from '../../assets/SellButton';
import SellButtonPlus from '../../assets/SellButtonPlus';
import { getAuth, signOut } from "firebase/auth";
import {Postcontext}from '../../store/ViewContext'



import { AuthContex,firebaseContex } from '../../store/firebaseContext';
import { Link, useNavigate } from 'react-router-dom';
function Header() {
  const {PostDetails}=useContext(Postcontext)

  console.log(PostDetails);
  
  const navegate=useNavigate()
  const auth = getAuth();
const {firebase}=useContext(firebaseContex)
  const {user}=useContext(AuthContex)

  console.log(user);
  return (
    <div className="headerParentDiv">
      <div className="headerChildDiv">
        <div className="brandName">
          <OlxLogo></OlxLogo>
        </div>
        <div className="placeSearch">
          <Search></Search>
          <input type="text" />
          <Arrow></Arrow>
        </div>
        <div className="productSearch">
          <div className="input">
            <input
              type="text"
              placeholder="Find car,mobile phone and more..."
            />
          </div>
          <div className="searchAction">
            <Search color="#ffffff"></Search>
          </div>
        </div>
        <div className="language">
          <span> ENGLISH </span>
          <Arrow >
          </Arrow>

        </div>
        <div className="loginPage">
          <span>{user? user. displayName :<Link style={{color:'black'}} to={'/login'}>Login  </Link>}</span>
          <hr />
          { user&&<span onClick={()=>{
            signOut(auth).then(()=>{
              navegate('login')
            })
            
          }}>Logout</span>}

        
        
        </div>

        <div className="sellMenu">
          <SellButton ></SellButton>
          <div className="sellMenuContent">
            <SellButtonPlus></SellButtonPlus>
            <span onClick={()=>{
              navegate('create')
            }}>SELL</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
