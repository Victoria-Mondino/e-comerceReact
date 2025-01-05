import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import "./navbar.css";
import { Link } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";
import { categories } from "../Categories/Categories";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false); // Estado para el menú móvil
  const [dropdownOpen, setDropdownOpen] = useState(false); // Estado para desplegar categorías

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <div className="navbar-logo">
          <Link to="/">
            <img
              src="https://petmania.vamtam.com/wp-content/uploads/2022/03/logo.svg"
              alt="Logo"
              className="logo"
            />
          </Link>
        </div>

        {/* Menú hamburguesa */}
        <div className="hamburger" onClick={toggleMenu}>
          <div className={menuOpen ? "line open" : "line"}></div>
          <div className={menuOpen ? "line open" : "line"}></div>
          <div className={menuOpen ? "line open" : "line"}></div>
        </div>

        {/* Menú principal */}
        <ul className={`navbar-menu ${menuOpen ? "active" : ""}`}>
          <li><Link to="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
          <li><Link to="/About" onClick={() => setMenuOpen(false)}>About</Link></li>
          <li><Link to="/productos" onClick={() => setMenuOpen(false)}>Shop</Link></li>
          <li className="dropdown">
            {/* Categorías con toggle para móvil */}
            <span onClick={toggleDropdown} className="dropdown-toggle">
              Categoría
            </span>
            <ul className={`dropdown-menu ${dropdownOpen ? "open" : ""}`}>
              {categories.map((category) => (
                <li key={category.name}>
                  <Link
                    to={category.link}
                    onClick={() => {
                      setMenuOpen(false);
                      setDropdownOpen(false);
                    }}
                  >
                    {category.emoji} {category.name}
                  </Link>
                </li>
              ))}
            </ul>
          </li>
          <li><Link to="/Contact" onClick={() => setMenuOpen(false)}>Contact</Link></li>
        </ul>

        {/* Iconos */}
        <div className="navbar-icons">
          <CartWidget />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
