import { initializeApp } from "firebase/app";
// Get all data from Firestore
import { getFirestore } from "firebase/firestore";

// Storage for files
import { getStorage } from "firebase/storage";
// Authentication 
// import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBOddjMrPqNP6j__epku9_tgqHI97nuVAM",
  authDomain: "aslanov-c939e.firebaseapp.com",
  projectId: "aslanov-c939e",
  storageBucket: "aslanov-c939e.appspot.com",
  messagingSenderId: "307245842602",
  appId: "1:307245842602:web:4982330aff14821e34d0d3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// export
export const getFirestoreDb = getFirestore(app);
export const getStorageDb = getStorage(app);
// export const auth = getAuth(app)