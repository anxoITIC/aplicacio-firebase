import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
// Follow this pattern to import other Firebase services
// import { } from 'firebase/<service>';

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyAb0VCQ2ZrpRdHXaBfzlsqkntZpa2BQQIg",
  authDomain: "m06apppelis.firebaseapp.com",
  projectId: "m06apppelis",
  storageBucket: "m06apppelis.appspot.com",
  messagingSenderId: "606255444727",
  appId: "1:606255444727:web:3670658ff78eb657b119f2"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db