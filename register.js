
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-auth.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA2qcMDUTV_mHPmuiaiUYJbbMcGM0VaQKk",
  authDomain: "fcc-login-form.firebaseapp.com",
  projectId: "fcc-login-form",
  storageBucket: "fcc-login-form.appspot.com",
  messagingSenderId: "602907192460",
  appId: "1:602907192460:web:4c2b4eb6dcb4b1b65fdfa9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
 const auth= getAuth(app);

//input
const email= document.getElementById('email').value;
const password= document.getElementById('password').value;

//submit
const submit = document.getElementById('submit');
submit.addEventListener("click",function(e){
  e.preventDefault()

  const email= document.getElementById('email').value;
const password= document.getElementById('password').value;

  createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    alert("Account Created")
    window.location.href = "index.html"; ///this redirects the users to the book
    //authors page once they sign up.
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(errorMessage)
    // ..
  });
})

