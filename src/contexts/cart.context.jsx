import { createContext, useEffect, useState } from "react";

// HELPER FUNCTIONS
const updateCartItem = (cartItems, itemToUpdate, action) => {
  const existingItem = cartItems.find(
    (cartItem) => cartItem.id === itemToUpdate.id
  );

  switch (action) {
    case "ADD_ITEM":
      if (existingItem) {
        return cartItems.map((cartItem) =>
          cartItem.id === itemToUpdate.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      }
      return [...cartItems, { ...itemToUpdate, quantity: 1 }];
    case "REDUCE_ITEM":
      if (existingItem.quantity === 1) {
        return cartItems.filter((cartItem) => cartItem.id !== itemToUpdate.id);
      }

      return cartItems.map((cartItem) =>
        cartItem.id === itemToUpdate.id
          ? { ...cartItem, quantity: cartItem.quantity - 1 }
          : cartItem
      );
    case "CLEAR_ITEM":
      return cartItems.filter((cartItem) => cartItem.id !== itemToUpdate.id);
    default:
      return cartItems;
  }
};

// CONTEXT
export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
  removeItemFromCart: () => {},
  clearItemFromCart: () => {},
  cartCount: 0,
  cartTotal: 0,
});

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [cartTotal, setCartTotal] = useState(0);

  useEffect(() => {
    setCartCount(
      cartItems.reduce(
        (totalQty, nextItem) => (totalQty += nextItem.quantity),
        0
      )
    );
  }, [cartItems]);

  useEffect(() => {
    setCartTotal(
      cartItems.reduce(
        (total, next) => (total += next.quantity * next.price),
        0
      )
    );
  }, [cartItems]);

  const addItemToCart = (item) =>
    setCartItems(updateCartItem(cartItems, item, "ADD_ITEM"));

  const removeItemFromCart = (item) =>
    setCartItems(updateCartItem(cartItems, item, "REDUCE_ITEM"));

  const clearItemFromCart = (item) =>
    setCartItems(updateCartItem(cartItems, item, "CLEAR_ITEM"));

  return (
    <CartContext.Provider
      value={{
        isCartOpen,
        setIsCartOpen,
        cartItems,
        addItemToCart,
        removeItemFromCart,
        clearItemFromCart,
        cartCount,
        cartTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
