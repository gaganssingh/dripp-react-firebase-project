import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import CheckoutItem from "../../components/CheckoutItem/CheckoutItem.component";
import "./Checkout.styles.scss";

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
    <div className="checkout-container">
      <div className="checkout-header">
        {headerTitles.map((title) => (
          <div className="header-block" key={title}>
            <span>{title}</span>
          </div>
        ))}
      </div>
      {cartItems.map((item) => (
        <CheckoutItem key={item.id} item={item} />
      ))}
      <span className="total">Total: ${cartTotal}</span>
    </div>
  );
};

export default Checkout;
