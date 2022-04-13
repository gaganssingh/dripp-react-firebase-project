import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import Button from "../Button/Button.component";
import { ProductCardContainer, ProductCardFooter } from "./ProductCard.styles";

const ProductCard = ({ product }) => {
  const { addItemToCart } = useContext(CartContext);
  const { name, price, imageUrl } = product;

  const addProductToCart = () => addItemToCart(product);

  return (
    <ProductCardContainer>
      <img src={imageUrl} alt={name} />
      <ProductCardFooter className="footer">
        <span className="name">{name}</span>
        <span className="price">${price}</span>
      </ProductCardFooter>
      <Button buttonType="inverted" onClick={addProductToCart}>
        Add To Cart
      </Button>
    </ProductCardContainer>
  );
};

export default ProductCard;
