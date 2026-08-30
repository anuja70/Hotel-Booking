import { Heart, Menu, User } from "lucide-react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="container nav-content">

        {/* LOGO */}
        <Link to="/" className="logo">
          <span>Stay</span>Ease
        </Link>

        {/* NAVIGATION */}
        <div className="nav-links">
          <Link to="/">Home</Link>

          <Link to="/hotels">Hotels</Link>

          <Link to="/offers">Offers</Link>

          <Link to="/about">About</Link>

          <Link to="/contact">Contact</Link>

          <Link to="/my-bookings">
            My Bookings
          </Link>
        </div>

        {/* ACTIONS */}
        <div className="nav-actions">

          <button className="icon-button">
            <Heart size={20} />
          </button>

          <button className="login-button">
            <User size={18} />
            Login
          </button>

        </div>

        {/* MOBILE MENU */}
        <button className="menu-button">
          <Menu size={24} />
        </button>

      </div>
    </nav>
  );
}

export default Navbar;