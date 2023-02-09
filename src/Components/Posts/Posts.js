import { getFirestore,getDocs,collection,doc } from 'firebase/firestore';
import React ,{useEffect,useContext,useState} from 'react';
import { useNavigate } from 'react-router-dom';


import Heart from '../../assets/Heart';
import { firebaseContex } from '../../store/firebaseContext';
import { Postcontext } from '../../store/ViewContext';
import './Post.css';



function Posts() {
  const {firebase}=useContext(firebaseContex);
  const [product,setproducts] = useState([]);
  const {SetpostDetails}=useContext(Postcontext)
  const navigate=useNavigate()
  console.log(SetpostDetails);
  

  useEffect(async () => {
    const db=getFirestore(firebase)
    const products=await getDocs(collection(db,'products'));
   const allposts= products.docs.map((allproduct)=>{
    console.log(allproduct .data() );

 
    console.log('kkk');
 
  
    
    return{
      ...allproduct.data(),
      id:allproduct.id
    }
   })
setproducts(allposts)
console.log(allposts);
  
    
  }, [])

  return (
    <div className="postParentDiv">
      <div className="moreView">
        <div className="heading">
          <span>Quick Menu</span>
          <span>View more</span>
        </div>

        
          <div className="cards">

         
          
         {product.map(Prdetiles=>{
          
        return  <div
            className="card"
            onClick={()=>{
              SetpostDetails(Prdetiles)
              navigate('/view')
        


            }}
          >
            <div className="favorite">
              <Heart></Heart>
            </div>
            <div className="image">
              <img src={Prdetiles.url} alt="" />
            </div>
            <div className="content">
              <p className="rate">&#x20B9;{Prdetiles.price} </p>
              <span className="kilometer">{Prdetiles.Name}</span>
              <p className="name"> {Prdetiles.Catagory}</p>
            </div>
            <div className="date">
              <span>{Prdetiles.createdAT}</span>
            </div>
          </div>
         })
          }
        </div>
      </div>
      <div className="recommendations">
        <div className="heading">
          <span>Fresh recommendations</span>
        </div>
        <div className="cards">
          <div className="card">
            <div className="favorite">
              <Heart></Heart>
            </div>
            <div className="image">
              <img src="../../../Images/R15V3.jpg" alt="" />
            </div>
            <div className="content">
              <p className="rate">&#x20B9; 250000</p>
              <span className="kilometer">Two Wheeler</span>
              <p className="name"> YAMAHA R15V3</p>
            </div>
            <div className="date">
              <span>10/5/2021</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Posts;
