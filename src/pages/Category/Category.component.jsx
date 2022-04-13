import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductCard from "../../components/ProductCard/ProductCard.component";
import { CategoriesContext } from "../../contexts/categories.context";
import { CategoryContainer, CategoryTitle } from "./Category.styles";

const Category = () => {
  const { categoriesMap } = useContext(CategoriesContext);
  const { category } = useParams();
  const [products, setProducts] = useState(categoriesMap[category]);

  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);

  return (
    <>
      <CategoryTitle>{category.toUpperCase()}</CategoryTitle>
      <CategoryContainer>
        {products &&
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </CategoryContainer>
    </>
  );
};

export default Category;
