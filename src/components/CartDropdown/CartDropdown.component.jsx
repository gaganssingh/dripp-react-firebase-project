import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setIsCartOpen } from "../../store/cart/cart.action";
import { selectCartItems } from "../../store/cart/cart.selector";
import Button from "../Button/Button.component";
import CartItem from "../CartItem/CartItem.component";
import {
  CartDropdownContainer,
  CartItems,
  EmptyCart,
} from "./CartDropdown.styles";

const CartDropdown = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);

  const navigate = useNavigate();

  const handleCheckoutButtonClick = () => {
    dispatch(setIsCartOpen(false));
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
