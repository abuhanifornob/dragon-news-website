// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCHQaHZd02VzsGuN7j22n6l0Ad1HDoluKo",
  authDomain: "dragon-news-dfc16.firebaseapp.com",
  projectId: "dragon-news-dfc16",
  storageBucket: "dragon-news-dfc16.appspot.com",
  messagingSenderId: "1066483268135",
  appId: "1:1066483268135:web:41e3e1ed7d86a55535ec02"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;