import {initializeApp} from "firebase/app";
import {getAnalytics} from "firebase/analytics";




const firebaseConfig = {
  apiKey: "AIzaSyDjzHVdFia5P9ACwtiYli3IAQK2zlfUCyk",
  authDomain: "ttoutt-54f41.firebaseapp.com",
  projectId: "ttoutt-54f41",
  storageBucket: "ttoutt-54f41.appspot.com",
  messagingSenderId: "1009839005842",
  appId: "1:1009839005842:web:2b8bb7bb4627522cacc64b",
  measurementId: "G-RN4TDMJKB5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;