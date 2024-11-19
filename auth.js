import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-analytics.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-auth.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDI6ZuMGdlm8AuGDPbX3Ph4kgVFbn1ZgRg",
    authDomain: "wordsmith-532cc.firebaseapp.com",
    projectId: "wordsmith-532cc",
    storageBucket: "wordsmith-532cc.firebasestorage.app",
    messagingSenderId: "1065279678896",
    appId: "1:1065279678896:web:a5bf910b77bc5d457cce75",
    measurementId: "G-6K59QDC3VN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export async function registerUser(email, password) {
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        console.log("User registered:", userCredential.user);
        alert("Registration successful!");
    } catch (error) {
        console.error("Registration error:", error.message);
        alert(error.message);
    }
}

export async function loginUser(email, password) {
    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        console.log("User logged in:", userCredential.user);
        alert("Login successful!");
        redirectToRandomWordGenerator();
    } catch (error) {
        console.error("Login error:", error.message);
        alert(error.message);
    }
}

function redirectToRandomWordGenerator() {
    window.location.href = "random-words.html";
}

export async function logoutUser() {
    try {
        await signOut(auth);
        console.log("User logged out");
        alert("Logout successful!");
        window.location.href = "index.html";
    } catch (error) {
        console.error("Logout error:", error.message);
        alert(error.message);
    }
}