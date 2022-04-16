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
  apiKey: "AIzaSyDSxN4gukpZVrhB9vZWtNMLVmKx2IpBtog",
  authDomain: "module-60-61.firebaseapp.com",
  projectId: "module-60-61",
  storageBucket: "module-60-61.appspot.com",
  messagingSenderId: "616408796297",
  appId: "1:616408796297:web:22e2ca84cd7f802d234a58"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
