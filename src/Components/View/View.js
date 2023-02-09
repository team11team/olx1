import React,{useState,useContext,useEffect} from 'react';
import { firebaseContex } from '../../store/firebaseContext';

import { collection, query, where,getFirestore,getDocs,} from "firebase/firestore";

import './View.css';
import { Postcontext } from '../../store/ViewContext';
function View() {
  
  const [userDetails, setUserDetails] = useState()
  const {PostDetails}= useContext(Postcontext)
  const {firebase}=useContext(firebaseContex)

  useEffect(async ()=>{
    console.log(userDetails);
    const {userid}=PostDetails
    const db=getFirestore(firebase)
    const q = query(collection(db, "user"), where("id", "==",userid ));

const querySnapshot = await getDocs(q);
querySnapshot.forEach((doc) => {
  // doc.data() is never undefined for query doc snapshots
  console.log(doc.id, " => ", doc.data());
  setUserDetails(doc.data())
});


  },[])








 


   
    

  return (
    <div className="viewParentDiv">
      <div className="imageShowDiv">
        <img
          src={PostDetails.url}

        />
      </div>
      <div className="rightSection">
        <div className="productDetails">
          <p>&#x20B9;{PostDetails.price}</p>
          <span>{PostDetails.Catagory}</span>
          <p>{PostDetails.Name}</p>
          <span>{PostDetails.createdAT}</span>
        </div>
      {userDetails&& <div className="contactDetails">
          <p>Seller details</p>
          <p>{userDetails.user}</p>
          <p>{userDetails.phone}</p>
        </div>}
      </div>
    </div>
  );
}
export default View;


