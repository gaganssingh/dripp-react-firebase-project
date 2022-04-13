import { CartItemContainer, ItemDetails } from "./CartItem.styles";

const CartItem = ({ cartItem: { name, quantity, price, imageUrl } }) => {
  return (
    <CartItemContainer>
      <img src={imageUrl} alt={name} />
      <ItemDetails>
        <span>{name}</span>
        <span>
          {quantity} x ${price}
        </span>
      </ItemDetails>
    </CartItemContainer>
  );
};

export default CartItem;
