import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// Step 3: Firebase Configuration
const firebaseConfig = {
  apiKey: "AIzaSyAbwKVJLPVAJDV6W4n61N6Aczh9bNmX964",
  authDomain: "nbhwc-study-platform.firebaseapp.com",
  projectId: "nbhwc-study-platform",
  storageBucket: "nbhwc-study-platform.firebasestorage.app",
  messagingSenderId: "579374591514",
  appId: "1:579374591514:web:a26baa11f7e343d9ceaba3",
  measurementId: "G-Z7HWYEFM2K"
};

// Step 4: Error Handling
const requiredKeys = ['apiKey', 'authDomain', 'projectId', 'storageBucket', 'messagingSenderId', 'appId'];
const missingKeys = requiredKeys.filter(key => !firebaseConfig[key]);

if (missingKeys.length > 0) {
  throw new Error(`Firebase config missing: ${missingKeys.join(', ')}`);
}

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export default app;
