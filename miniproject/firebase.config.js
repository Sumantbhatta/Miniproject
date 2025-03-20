// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDRmi08coUNi7Ck774xD5xi6rNzMkwI_gc",
  authDomain: "internshipportal-1.firebaseapp.com",
  projectId: "internshipportal-1",
  storageBucket: "internshipportal-1.firebasestorage.app",
  messagingSenderId: "375636301181",
  appId: "1:375636301181:web:20a756a7d916b0581f2814"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {db}