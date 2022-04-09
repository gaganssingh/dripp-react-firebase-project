import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  signInWithRedirect,
  GoogleAuthProvider,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAPW2z2pcqPCGOuSRZja9tOZ07ethLgNMQ",
  authDomain: "dripp-react-firebase-projectv2.firebaseapp.com",
  projectId: "dripp-react-firebase-projectv2",
  storageBucket: "dripp-react-firebase-projectv2.appspot.com",
  messagingSenderId: "44409635092",
  appId: "1:44409635092:web:fcf5d1a78c4b4ba2d54201",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

// Auth config
const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
