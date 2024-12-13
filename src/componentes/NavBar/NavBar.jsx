import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import "./navbarar.css";

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <img src="https://petmania.vamtam.com/wp-content/uploads/2022/03/logo.svg" alt="Logo" className="logo" />
          
        </div>
        <ul className="navbar-menu">
          <li><a href="#">Home</a></li>
          <li><a href="#">Shop by Pet</a></li>
          <li><a href="#">Shop</a></li>
          <li><a href="#">Shop by Brand</a></li>
          <li><a href="#">Pet Services</a></li>
          <li><a href="#">Deals</a></li>
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