import { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { UserContext } from "../../contexts/user.context";
import { signOutUser } from "../../utils/firebase";
import CartIcon from "../../components/CartIcon/CartIcon.component";
import { ReactComponent as Logo } from "../../assets/dripp-logo.svg";
import "./Navigation.styles.scss";
import CartDropdown from "../../components/CartDropdown/CartDropdown.component";
import { CartContext } from "../../contexts/cart.context";

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);

  return (
    <>
      <header className="navigation">
        <Link to="/" className="logo-container">
          <Logo className="logo" />
        </Link>
        <nav className="nav-links-container">
          <Link to="/shop" className="nav-link">
            Shop
          </Link>
          {currentUser ? (
            <span className="nav-link" onClick={signOutUser}>
              Signout
            </span>
          ) : (
            <Link to="/auth" className="nav-link">
              Signin
            </Link>
          )}
          <CartIcon />
        </nav>
        {isCartOpen && <CartDropdown />}
      </header>
      <Outlet />
    </>
  );
};

export default Navigation;
