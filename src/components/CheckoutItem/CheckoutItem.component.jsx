import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import {
  CheckoutItemContainer,
  ImageContainer,
  RemoveButton,
} from "./CheckoutItem.styles";

const CheckoutItem = ({ item }) => {
  const { addItemToCart, removeItemFromCart, clearItemFromCart } =
    useContext(CartContext);

  const addItemHandler = () => addItemToCart(item);
  const reduceItemHandler = () => removeItemFromCart(item);
  const clearItemHandler = () => clearItemFromCart(item);

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
