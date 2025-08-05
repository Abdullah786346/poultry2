import { initializeApp } from "firebase/app";
import { getAuth, connectAuthEmulator } from "firebase/auth";
import { getFirestore, connectFirestoreEmulator } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyARktvxjrtjgwjJtj1RTfmXZUpDziBlaX0",
  authDomain: "poultryscienceorg.firebaseapp.com",
  projectId: "poultryscienceorg",
  storageBucket: "poultryscienceorg.firebasestorage.app",
  messagingSenderId: "433402554079",
  appId: "1:433402554079:web:65ee159d5553eb0760eb6a",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);

// Enable offline persistence for Firestore
// Note: This should be called before any other Firestore operations
// and only needs to be called once per app instance
if (typeof window !== 'undefined') {
  // Only run in browser environment
  import('firebase/firestore').then(({ enableNetwork, disableNetwork }) => {
    // Enable network by default
    enableNetwork(db).catch((error) => {
      console.warn('Failed to enable Firestore network:', error);
    });
  });
}