import { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { UserContext } from "../../contexts/user.context";
import { signOutUser } from "../../utils/firebase";
import { ReactComponent as Logo } from "../../assets/dripp-logo.svg";
import "./Navigation.styles.scss";

const Navigation = () => {
  const { currentUser } = useContext(UserContext);

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
        </nav>
      </header>
      <Outlet />
    </>
  );
};

export default Navigation;
