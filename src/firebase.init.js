// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey:process.env.REACT_APP_apiKey,
//   authDomain:process.env.REACT_APP_authDomain,
//   projectId:process.env.REACT_APP_projectId,
//   storageBucket:process.env.REACT_APP_storageBucket,
//   messagingSenderId:process.env.REACT_APP_messagingSenderId,
//   appId:process.env.REACT_APP_appId,
// };
const firebaseConfig = {
  apiKey: "AIzaSyD61fyYMLz9Nib2j63MmC_yqcIUnMXm_VY",
  authDomain: "assignment-10-react-auth.firebaseapp.com",
  projectId: "assignment-10-react-auth",
  storageBucket: "assignment-10-react-auth.appspot.com",
  messagingSenderId: "354971255864",
  appId: "1:354971255864:web:ca3fc562d25ef673c6d2cd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
