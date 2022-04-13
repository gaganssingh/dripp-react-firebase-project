import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../contexts/cart.context";
import Button from "../Button/Button.component";
import CartItem from "../CartItem/CartItem.component";
import {
  CartDropdownContainer,
  CartItems,
  EmptyCart,
} from "./CartDropdown.styles";

const CartDropdown = () => {
  const { cartItems, setIsCartOpen } = useContext(CartContext);
  const navigate = useNavigate();

  const handleCheckoutButtonClick = () => {
    setIsCartOpen(false);
    navigate("/checkout", { replace: true });
  };

  return (
    <CartDropdownContainer>
      <CartItems>
        {cartItems.length === 0 && <EmptyCart>Your cart is empty</EmptyCart>}
        {cartItems.map((item) => (
          <CartItem key={item.id} cartItem={item} />
        ))}
      </CartItems>
      <Button onClick={handleCheckoutButtonClick}>Checkout Now</Button>
    </CartDropdownContainer>
  );
};

export default CartDropdown;
