import { useDispatch, useSelector } from "react-redux";
import { addItemToCart } from "../../store/cart/cart.action";
import { selectCartItems } from "../../store/cart/cart.selector";
import Button from "../Button/Button.component";
import { ProductCardContainer, ProductCardFooter } from "./ProductCard.styles";

const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);

  const addProductToCart = () => dispatch(addItemToCart(cartItems, product));

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
