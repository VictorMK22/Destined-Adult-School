
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyBG8WiYiLYL2p3XkRnf-OHHI1ZN6wQk2RA",
    authDomain: "destined-adult-school.firebaseapp.com",
    projectId: "destined-adult-school",
    storageBucket: "destined-adult-school.appspot.com",
    messagingSenderId: "276435761753",
    appId: "1:276435761753:web:93ebf13ce02e336e87cf48",
    measurementId: "G-5XNDWBQG59"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);