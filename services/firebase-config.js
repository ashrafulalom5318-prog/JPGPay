// Firebase CDN v10 Exports Configuration
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { 
    getAuth, 
    RecaptchaVerifier, 
    signInWithPhoneNumber,
    signOut
} from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";
import { 
    getFirestore, 
    doc, 
    setDoc, 
    getDoc, 
    updateDoc,
    collection, 
    query, 
    where, 
    getDocs 
} from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

// REPLACE THESE KEYS WITH YOUR FIREBASE CONFIG COPED IN NOTEPAD
const firebaseConfig = {
    apiKey: "AIzaSyD8P7R9VgKpmb45kVqpdxkCJexjJ5AQP7E",
    authDomain: "webapps-983db.firebaseapp.com",
    projectId: "webapps-983db",
    storageBucket: "webapps-983db.firebasestorage.app",
    messagingSenderId: "582018608677",
    appId: "1:582018608677:web:4845e224d54b25415f59cc"
};

// Initialize app & modules
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// Helper to generate a unique 6-character referral code (e.g., "4MjPfy", "zLnUJI")
function generateReferralCode() {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz01233456789';
    let code = '';
    for (let i = 0; i < 6; i++) {
        code += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return code;
}

export { 
    auth, 
    db, 
    RecaptchaVerifier, 
    signInWithPhoneNumber, 
    signOut,
    doc, 
    setDoc, 
    getDoc, 
    updateDoc,
    collection, 
    query, 
    where, 
    getDocs,
    generateReferralCode
};
