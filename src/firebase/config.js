import { getFirestore } from "firebase/firestore";
import { initializeApp} from "firebase/app"; 

//this for firebase setup to get firbase backend storage
const firebaseConfig = {
    apiKey: "AIzaSyATp4BewYzGY2mTDHCvE5m61lLJR9otNiw",
    authDomain: "hello11-55fec.firebaseapp.com",
    projectId: "hello11-55fec",
    storageBucket: "hello11-55fec.appspot.com",
    messagingSenderId: "527943880887",
    appId: "1:527943880887:web:94e734b1db0588fc0f3d32",
    measurementId: "G-GTLH2T12ZZ"
  };
export default initializeApp(firebaseConfig);

