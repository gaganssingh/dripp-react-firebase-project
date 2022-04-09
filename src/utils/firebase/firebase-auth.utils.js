import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  signInWithRedirect,
  GoogleAuthProvider,
} from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

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

// ----------------
// Initiate the firebase auth flow ("sign in with google" new window popup)
// ----------------
const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

// ----------------
// Save authenticated user in firestore
// ----------------
// Firestore database
const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, "users", userAuth.uid);

  const userSnapshot = await getDoc(userDocRef);

  // If user is new / has not previously signed in:
  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
      });
    } catch (error) {
      console.error("Error creating the user", error.message);
    }
  }

  // If user data exists
  return userDocRef;
};
