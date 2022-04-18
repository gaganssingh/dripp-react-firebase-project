import { useSelector } from "react-redux";
import CategoryPreview from "../../components/CategoryPreview/CategoryPreview.component";
import Spinner from "../../components/Spinner/Spinner.component";
import {
  selectCategoriesMap,
  selectIsCategoriesLoading,
} from "../../store/categories/category.selector";

const CategoriesPreview = () => {
  const categoriesMap = useSelector(selectCategoriesMap);
  const isLoading = useSelector(selectIsCategoriesLoading);

  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        Object.keys(categoriesMap).map((title) => (
          <CategoryPreview
            key={title}
            title={title}
            products={categoriesMap[title]}
          />
        ))
      )}
    </>
  );
};

export default CategoriesPreview;
