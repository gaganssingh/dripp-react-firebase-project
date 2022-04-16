import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { setCategories } from "../../store/categories/category.action";
import { getCategoriesAndDocuments } from "../../utils/firebase/firebase-db.utils";
import CategoriesPreview from "../CategoriesPreview/CategoriesPreview.component";
import Category from "../Category/Category.component";

const Shop = () => {
  const dispatch = useDispatch();

  // Fetch products data from the db
  useEffect(() => {
    const fetchProductsFromDb = async () => {
      const categoriesArray = await getCategoriesAndDocuments();
      dispatch(setCategories(categoriesArray));
    };
    fetchProductsFromDb();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=":category" element={<Category />} />
    </Routes>
  );
};

export default Shop;
