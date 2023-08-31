// Import the functions you need from the SDKs you need
// import * as firebase from "firebase";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAvZMo5FGDwj2nls6BpMqVCQjwT0myTRmw",
  authDomain: "fir-auth-83d26.firebaseapp.com",
  projectId: "fir-auth-83d26",
  storageBucket: "fir-auth-83d26.appspot.com",
  messagingSenderId: "469026335821",
  appId: "1:469026335821:web:91317baaa64be111758004",
};

// Initialize Firebase
// let app;
// if (firebase.apps.length === 0) {
//   app = firebase.initializeApp(firebaseConfig);
// } else {
//   app = firebase.app();
// }

// const auth = firebase.auth();

// export { auth };
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
