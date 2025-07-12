import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAbwKVJLPVAJDV6W4n61N6Aczh9bNmX964",
  authDomain: "nbhwc-study-platform.firebaseapp.com",
  projectId: "nbhwc-study-platform",
  storageBucket: "nbhwc-study-platform.firebasestorage.app",
  messagingSenderId: "579374591514",
  appId: "1:579374591514:web:a26baa11f7e343d9ceaba3",
  measurementId: "G-Z7HWYEFM2K"
};

const requiredKeys = ['apiKey','authDomain','projectId','storageBucket','messagingSenderId','appId'];
const missingKeys = requiredKeys.filter(k => !firebaseConfig[k]);
if (missingKeys.length) {
  throw new Error(`Firebase config missing: ${missingKeys.join(', ')}`);
}

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export default app;