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
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_AUTH_DOMAIN",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_STORAGE_BUCKET",
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
    appId: "YOUR_APP_ID"
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