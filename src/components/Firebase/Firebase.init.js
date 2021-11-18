import { initializeApp } from "firebase/app";
import firebaseConfig from "./Firebase.Config";


const firebaseAuthentication = () =>{
    initializeApp(firebaseConfig);
}

export default firebaseAuthentication;