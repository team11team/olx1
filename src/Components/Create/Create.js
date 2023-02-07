import React, { Fragment,useContext } from 'react';
import './Create.css';
import Header from '../Header/Header';
import { useState } from 'react';
import {firebaseContex,AuthContex} from'../../store/firebaseContext';
import { getStorage, ref,uploadBytes } from "firebase/storage";


const Create = () => {
  const [Name, Getname] = useState('');
  const [Catagory,Getcatagory ] = useState('');
  const [price,Getprice ] = useState('');
  const [image,Getimage ] = useState(null);
  const {firebase} = useContext(firebaseContex);
  const {user} = useContext(AuthContex);
  const storage = getStorage();



  const hanldesubmit=()=>{
    if (!image) {
         alert("Please choose a file first!")
      }
    
    const storageRef =ref(storage,`image/${image.name}`);
    uploadBytes(storageRef,image).then((url)=>{
      console.log(url);

    })
    


  }
  return (
    <Fragment>
      <Header />
      <card>
        <div className="centerDiv">
       
            <label htmlFor="fname">Name</label>
            <br />
            <input
              className="input"
              type="text"
              value={Name}
              id="fname"
              onChange={(e)=>Getname(e.target.value)}
              name="Name"
              defaultValue="John"
            />
            <br />
            <label htmlFor="fname">Category</label>
            <br />
            <input
              className="input"
              type="text"
              id="fname"
              value={Catagory}
              
              onChange={(e)=>Getcatagory(e.target.value)}
              name="category"
              defaultValue="John"
            />
            <br />
            <label htmlFor="fname">Price</label>
            <br />
            <input className="input" type="number" onChange={(e)=>price(e.target.value)} value={Getprice} id="fname" name="Price" />
            <br />
          
          <br />
          <img alt="Posts" width="200px" height="200px" src={image? URL.createObjectURL(image):''}></img>
          
            <br />
            <input  onChange={(e)=>Getimage(e.target.files[0])}
            type="file" />
            <br />
            <button onClick={hanldesubmit} className="uploadBtn">upload and Submit</button>
          
        </div>
      </card>
    </Fragment>
  );
};

export default Create;
