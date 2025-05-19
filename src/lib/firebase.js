// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
import {getAuth} from "firebase/auth";



const firebaseConfig = {
  apiKey: "AIzaSyBW1LLB77GxbNGbyreriEPeiChv7_W_hoo",
  authDomain: "logintest-99.firebaseapp.com",
  projectId: "logintest-99",
  storageBucket: "logintest-99.firebasestorage.app",
  messagingSenderId: "249764872289",
  appId: "1:249764872289:web:593c7ccc12284b3f332a20",
  measurementId: "G-X7RN5NCXH0"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth (app);