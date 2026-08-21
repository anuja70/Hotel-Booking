import { Heart, Menu, User } from "lucide-react";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="container nav-content">
        <div className="logo">
          <span>Stay</span>Ease
        </div>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#hotels">Hotels</a>
          <a href="#offers">Offers</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>

        <div className="nav-actions">
          <button className="icon-button">
            <Heart size={20} />
          </button>

          <button className="login-button">
            <User size={18} />
            Login
          </button>
        </div>

        <button className="menu-button">
          <Menu size={24} />
        </button>
      </div>
    </nav>
  );
}

export default Navbar;