import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home.component";
import Navigation from "./pages/Navigation/Navigation.component";
import Authentication from "./pages/Authentication/Authentication.component";

const Shop = () => <h1>THISI IS THE SHOP COMPONENT</h1>;

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/auth" element={<Authentication />} />
      </Route>
    </Routes>
  );
};

export default App;
