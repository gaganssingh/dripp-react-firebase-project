import ProductCard from "../ProductCard/ProductCard.component";
import {
  CategoryPreviewContainer,
  CategoryTitle,
  Preview,
} from "./CategoryPreview.styles";

const CategoryPreview = ({ title, products }) => {
  return (
    <CategoryPreviewContainer>
      <h2>
        <CategoryTitle to={`/shop/${title}`}>
          {title.toUpperCase()}
        </CategoryTitle>
      </h2>
      <Preview>
        {products
          .filter((_, idx) => idx < 4)
          .map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </Preview>
    </CategoryPreviewContainer>
  );
};

export default CategoryPreview;
