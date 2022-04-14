import { initializeApp } from "firebase/app";
import {
  doc,
  getFirestore,
  collection,
  writeBatch,
  query,
  getDocs,
} from "firebase/firestore";

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

// INIT db
const db = getFirestore();

// SEED DB
export const addCollectionAndDocuments = async (
  collectionKey,
  objectsToAdd
) => {
  const collectionRef = collection(db, collectionKey);
  const batch = writeBatch(db);

  objectsToAdd.forEach((obj) => {
    const docRef = doc(collectionRef, obj.title.toLowerCase());

    // Seed products under each category name
    // hats, jackets, sneakers etc...
    batch.set(docRef, obj);
  });

  await batch.commit();
  console.log(`✅ Successfully seeded the db`);
};

// FETCH DB ITEMS
export const getCategoriesAndDocuments = async () => {
  const collectionRef = collection(db, "categories");
  const q = query(collectionRef);

  const querySnapshot = await getDocs(q);
  const categoryMap = querySnapshot.docs.reduce((acc, docSnapshot) => {
    const { title, items } = docSnapshot.data();
    acc[title.toLowerCase()] = items;
    return acc;
  }, {});

  return categoryMap;
};
