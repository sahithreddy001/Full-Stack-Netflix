import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
// import { seedDatabase } from '../seed';


const config = {
    apiKey: "AIzaSyBiD1_CrKZ1v45zAaKiqEC2uJv6uUR-J8U",
    authDomain: "netflix-sahith.firebaseapp.com",
    projectId: "netflix-sahith",
    storageBucket: "netflix-sahith.appspot.com",
    messagingSenderId: "1033066752820",
    appId: "1:1033066752820:web:fa0dce398aebf1de155361"
};

const firebase = Firebase.initializeApp(config);

// seedDatabase(firebase);

export {firebase};