import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import {
  createUserDocumentFromAuth,
  onAuthStateChangedListener,
} from "./utils/firebase";
import { setCurrentUser } from "./store/user/user.action";
import Home from "./pages/Home/Home.component";
import Navigation from "./pages/Navigation/Navigation.component";
import Authentication from "./pages/Authentication/Authentication.component";
import Shop from "./pages/Shop/Shop.component";
import Checkout from "./pages/Checkout/Checkout.component";
import { useDispatch } from "react-redux";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      if (user) {
        createUserDocumentFromAuth(user);
      }
      dispatch(setCurrentUser(user));
    });

    return unsubscribe;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="/shop/*" element={<Shop />} />
        <Route path="/auth" element={<Authentication />} />
        <Route path="/checkout" element={<Checkout />} />
      </Route>
    </Routes>
  );
};

export default App;
