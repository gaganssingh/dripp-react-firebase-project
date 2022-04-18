import { useDispatch, useSelector } from "react-redux";
import { ReactComponent as ShoppingBagIcon } from "../../assets/shopping-bag.svg";
import { setIsCartOpen } from "../../store/cart/cart.action";
import {
  selectIsCartOpen,
  selectCartCount,
} from "../../store/cart/cart.selector";
import { CartIconContainer, ItemCount } from "./CartIcon.styles";

const CartIcon = () => {
  const dispatch = useDispatch();
  const cartCount = useSelector(selectCartCount);
  const isCartOpen = useSelector(selectIsCartOpen);

  const toggleCartDropdown = () => dispatch(setIsCartOpen(!isCartOpen));

  return (
    <CartIconContainer onClick={toggleCartDropdown}>
      <ShoppingBagIcon className="shopping-icon" />
      <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;
