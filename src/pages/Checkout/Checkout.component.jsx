import { useSelector } from "react-redux";
import CheckoutItem from "../../components/CheckoutItem/CheckoutItem.component";
import {
  selectCartItems,
  selectCartTotal,
} from "../../store/cart/cart.selector";
import "./Checkout.styles.jsx";
import {
  CheckoutContainer,
  CheckoutHeader,
  HeaderBlock,
  Total,
} from "./Checkout.styles.jsx";

const Checkout = () => {
  const cartItems = useSelector(selectCartItems);
  const cartTotal = useSelector(selectCartTotal);

  const headerTitles = [
    "Product",
    "Description",
    "Quantity",
    "Price",
    "Remove",
  ];

  return (
    <CheckoutContainer>
      <CheckoutHeader>
        {headerTitles.map((title) => (
          <HeaderBlock key={title}>
            <span>{title}</span>
          </HeaderBlock>
        ))}
      </CheckoutHeader>
      {cartItems.map((item) => (
        <CheckoutItem key={item.id} item={item} />
      ))}
      <Total>Total: ${cartTotal}</Total>
    </CheckoutContainer>
  );
};

export default Checkout;
