// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBUOUddNw4E2cvb5PxjvJ7CAV-JCFh9qss",
  authDomain: "vickshop-44852.firebaseapp.com",
  projectId: "vickshop-44852",
  storageBucket: "vickshop-44852.firebasestorage.app",
  messagingSenderId: "856756680213",
  appId: "1:856756680213:web:94bf0d7bfe926ad002801c",
  measurementId: "G-X69BL7CFH1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore(app);