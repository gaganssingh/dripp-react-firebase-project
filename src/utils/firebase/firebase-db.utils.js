import {
  doc,
  getFirestore,
  collection,
  writeBatch,
  query,
  getDocs,
} from "firebase/firestore";

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
