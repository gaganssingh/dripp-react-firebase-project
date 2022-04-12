import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../contexts/cart.context";
import Button from "../Button/Button.component";
import CartItem from "../CartItem/CartItem.component";
import "./CartDropdown.styles.scss";

const CartDropdown = () => {
  const { cartItems, setIsCartOpen } = useContext(CartContext);
  const navigate = useNavigate();

  const handleCheckoutButtonClick = () => {
    setIsCartOpen(false);
    navigate("/checkout", { replace: true });
  };

  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.map((item) => (
          <CartItem key={item.id} cartItem={item} />
        ))}
      </div>
      <Button onClick={handleCheckoutButtonClick}>Checkout Now</Button>
    </div>
  );
};

export default CartDropdown;
