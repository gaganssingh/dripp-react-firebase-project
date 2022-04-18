import { useContext } from "react";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

import { signOutUser } from "../../utils/firebase";
import CartIcon from "../../components/CartIcon/CartIcon.component";
import { ReactComponent as Logo } from "../../assets/dripp-logo.svg";
import CartDropdown from "../../components/CartDropdown/CartDropdown.component";
import { selectCurrentUser } from "../../store/user/user.selector";
import { selectIsCartOpen } from "../../store/cart/cart.selector";
import {
  LogoContainer,
  NavigationContainer,
  NavLinks,
  NavLink,
} from "./Navigation.styles";

const Navigation = () => {
  const currentUser = useSelector(selectCurrentUser);
  const isCartOpen = useSelector(selectIsCartOpen);

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
