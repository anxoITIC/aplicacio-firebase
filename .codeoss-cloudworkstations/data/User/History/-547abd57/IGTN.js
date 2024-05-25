import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
// Follow this pattern to import other Firebase services
// import { } from 'firebase/<service>';

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyCMFU0YbxqWGds70FMTQfh2b8ZHL3UFH_g",
  authDomain: "react-firebase-bd.firebaseapp.com",
  projectId: "react-firebase-bd",
  storageBucket: "react-firebase-bd.appspot.com",
  messagingSenderId: "1036697556022",
  appId: "1:1036697556022:web:a417e4be2edb9d64327497",
  measurementId: "G-B7DBC6GJ1R"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db