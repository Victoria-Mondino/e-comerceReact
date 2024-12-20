import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import "./navbar.css";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <img href="/" src="https://petmania.vamtam.com/wp-content/uploads/2022/03/logo.svg" alt="Logo" className="logo" />
          
        </div>
        <ul className="navbar-menu">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/About"> About</Link></li>
          <li><Link to="/productos">Shop</Link></li>
          <li><Link to="/productos/perros">Perro</Link></li>
          <li><Link to="/productos/gatos">Gato</Link></li>
          <li><Link to="/Contact">Contact</Link></li>
        </ul>
        <div className="navbar-icons">
          <i class="bi bi-search"></i>
          <i class="bi bi-bag-heart"></i>
          <i class="bi bi-person-circle"></i>
          <i class="bi bi-cart-check-fill"></i>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;