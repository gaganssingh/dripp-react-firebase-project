import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import CheckoutItem from "../../components/CheckoutItem/CheckoutItem.component";
import "./Checkout.styles.jsx";
import {
  CheckoutContainer,
  CheckoutHeader,
  HeaderBlock,
  Total,
} from "./Checkout.styles.jsx";

const Checkout = () => {
  const { cartItems, cartTotal } = useContext(CartContext);

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
