import React from "react";
import { createRoot } from "react-dom/client";

import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { store } from "./store/store";
import { CartProvider } from "./contexts/cart.context";
import { CategoriesProvider } from "./contexts/categories.context";
import App from "./App";
import "./index.scss";

const entryPoint = document.getElementById("root");
createRoot(entryPoint).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <CategoriesProvider>
          <CartProvider>
            <App />
          </CartProvider>
        </CategoriesProvider>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
