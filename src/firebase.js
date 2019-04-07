import firebase from 'firebase/app';
import 'firebase/auth';        // for authentication
import 'firebase/storage';     // for storage
import 'firebase/database';    // for realtime database
import 'firebase/firestore';   // for cloud firestore
import 'firebase/messaging';   // for cloud messaging
import 'firebase/functions';   // for cloud functions
import * as f from './secrets';

// Initialize Firebase
export const config = {
  apiKey: f.FIREBASE_API_KEY,
  authDomain: f.FIREBASE_AUTH_DOMAIN,
  databaseURL: f.FIREBASE_DATABASE_URL,
  projectId: f.FIREBASE_PROJECT_ID,
  storageBucket: f.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: f.FIREBASE_MESSAGING_SENDER_ID
};

firebase.initializeApp(config);

export const databaseRef = firebase.database().ref();
export const photosRef = databaseRef.child('photos');
export const authorize = firebase.auth();
export const storage = firebase.storage();
// export const provider = new firebase.auth.GoogleAuthProvider();
