import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home.component";
import Navigation from "./pages/Navigation/Navigation.component";
import Authentication from "./pages/Authentication/Authentication.component";
import Shop from "./pages/Shop/Shop.component";
import Checkout from "./pages/Checkout/Checkout.component";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/auth" element={<Authentication />} />
        <Route path="/checkout" element={<Checkout />} />
      </Route>
    </Routes>
  );
};

export default App;
