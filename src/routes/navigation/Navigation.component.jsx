import { Link, Outlet } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/dripp-logo.svg";
import "./Navigation.styles.scss";

const Navigation = () => {
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
        </nav>
      </header>
      <Outlet />
    </>
  );
};

export default Navigation;
