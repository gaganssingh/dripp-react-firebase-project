import { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { UserContext } from "../../contexts/user.context";
import { signOutUser } from "../../utils/firebase";
import CartIcon from "../../components/CartIcon/CartIcon.component";
import { ReactComponent as Logo } from "../../assets/dripp-logo.svg";
import CartDropdown from "../../components/CartDropdown/CartDropdown.component";
import { CartContext } from "../../contexts/cart.context";
import {
  LogoContainer,
  NavigationContainer,
  NavLinks,
  NavLink,
} from "./Navigation.styles";

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);

  return (
    <>
      <NavigationContainer>
        <LogoContainer to="/">
          <Logo className="logo" />
        </LogoContainer>
        <NavLinks>
          <NavLink to="/shop">Shop</NavLink>
          {currentUser ? (
            <NavLink as="span" className="nav-link" onClick={signOutUser}>
              Signout
            </NavLink>
          ) : (
            <NavLink to="/auth">Signin</NavLink>
          )}
          <CartIcon />
        </NavLinks>
        {isCartOpen && <CartDropdown />}
      </NavigationContainer>
      <Outlet />
    </>
  );
};

export default Navigation;
