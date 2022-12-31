import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyDcnEkTsK7eB9mH4pVFRcgXorsf2O-ZbeM',
  authDomain: 'chat-app-3ddc7.firebaseapp.com',
  projectId: 'chat-app-3ddc7',
  storageBucket: 'chat-app-3ddc7.appspot.com',
  messagingSenderId: '621412442584',
  appId: '1:621412442584:web:180c9071586e33ddec92ad',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const storage = getStorage();
export const db = getFirestore();
