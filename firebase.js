import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAJZWQzIjZkSwmwc_5kHh9wiGV9oYV18jg",
  authDomain: "mukutdigilabs.firebaseapp.com",
  projectId: "mukutdigilabs",
  storageBucket: "mukutdigilabs.appspot.com",
  messagingSenderId: "791950119546",
  appId: "1:791950119546:web:17db90f3f84afaf0bc21c3",
  measurementId: "G-HDXT70960Y",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

export default firebaseApp;
