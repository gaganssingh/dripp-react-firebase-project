import { createContext, useEffect, useState } from "react";
import { getCategoriesAndDocuments } from "../utils/firebase/firebase-db.utils.js";
// import SHOP_DATA from "../shop-data.js";

export const CategoriesContext = createContext({
  categoriesMap: {},
});

export const CategoriesProvider = ({ children }) => {
  const [categoriesMap, setCategoriesMap] = useState({});

  // 🛑 SEED DB
  // 🛑 ONLY RUN ONCE
  // useEffect(() => {
  //   addCollectionAndDocuments("categories", SHOP_DATA);
  // }, []);

  // Fetch products data from the db
  const fetchProductsFromDb = async () => {
    setCategoriesMap(await getCategoriesAndDocuments());
  };
  useEffect(() => {
    fetchProductsFromDb();
  }, []);

  return (
    <CategoriesContext.Provider
      value={{
        categoriesMap,
      }}
    >
      {children}
    </CategoriesContext.Provider>
  );
};
