// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {

  apiKey: "AIzaSyA6oxMtOBMtuUZu0xpvC6UyaiOHVkQL0vw",
  authDomain: "thread-up-5a525.firebaseapp.com",
  projectId: "thread-up-5a525",
  storageBucket: "thread-up-5a525.appspot.com",
  messagingSenderId: "349507741023",
  appId: "1:349507741023:web:c4767d91b5808a111882ea"

};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export { auth };