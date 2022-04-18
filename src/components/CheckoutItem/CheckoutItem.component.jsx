import { useDispatch, useSelector } from "react-redux";
import {
  addItemToCart,
  removeItemFromCart,
  clearItemFromCart,
} from "../../store/cart/cart.action";
import { selectCartItems } from "../../store/cart/cart.selector";
import {
  CheckoutItemContainer,
  ImageContainer,
  RemoveButton,
} from "./CheckoutItem.styles";

const CheckoutItem = ({ item }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);

  const addItemHandler = () => dispatch(addItemToCart(cartItems, item));
  const reduceItemHandler = () => dispatch(removeItemFromCart(cartItems, item));
  const clearItemHandler = () => dispatch(clearItemFromCart(cartItems, item));

  const { name, imageUrl, price, quantity } = item;

  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <img src={imageUrl} alt={name} />
      </ImageContainer>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={reduceItemHandler}>
          &#10094;
        </div>
        <div className="value">{quantity}</div>
        <div className="arrow" onClick={addItemHandler}>
          &#10095;
        </div>
      </span>
      <span className="price">{price}</span>
      <RemoveButton onClick={clearItemHandler}>&#10005;</RemoveButton>
    </CheckoutItemContainer>
  );
};

export default CheckoutItem;
