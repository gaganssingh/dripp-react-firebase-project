import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
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
const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () =>
  signInWithPopup(auth, googleProvider);

// ----------------
// Save authenticated user in firestore
// ----------------
// Firestore database
const db = getFirestore();

export const createUserDocumentFromAuth = async (
  userAuth,
  additionalInformation = {}
) => {
  if (!userAuth) return;

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
        ...additionalInformation,
      });
    } catch (error) {
      console.error("Error creating the user", error.message);
    }
  }

  // If user data exists
  return userDocRef;
};

// ----------------
// SIGNUP
// Initiate the firebase auth flow (user provides email & password)
// ----------------
export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await createUserWithEmailAndPassword(auth, email, password);
};

// ----------------
// SIGNIN
// Initiate the firebase auth flow (user provides email & password)
// ----------------
export const signInAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await signInWithEmailAndPassword(auth, email, password);
};

// ----------------
// SIGNOUT
// ----------------
export const signOutUser = async () => await signOut(auth);
