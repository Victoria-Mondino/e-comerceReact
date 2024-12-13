import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
      <div className="footer-social">
          <p>We are social:</p>
          <div className="social-icons">
            <a href="#"><i class="bi bi-facebook"></i></a>
            <a href="#"><i class="bi bi-instagram"></i></a>
            <a href="#"><i class="bi bi-tiktok"></i></a>
            <a href="#"><i className="fab fa-pinterest"></i></a>
          </div>
        </div>
        <div className="footer-logo">
          <img src="https://petmania.vamtam.com/wp-content/uploads/2022/07/logo-footer.svg" alt="PetMania Logo" className="footer-logo-img" />
          <p>Our experts are available 24/7:</p>
          <h2 className="footer-phone">+1-800-356-8933</h2>
        </div>
        <div className="footer-subscribe">
          <p>Subscribe! New subscribers get 20% off!</p>
          <div className="subscribe-form">
            <input type="email" placeholder="Email" />
            <button>Subscribe</button>
          </div>
        </div>
      </div>
      <div className="footer-links">
        <div>
          <h4>Shop</h4>
          <ul>
            <li><a href="#">Dog</a></li>
            <li><a href="#">Cat</a></li>
            <li><a href="#">Small</a></li>
            <li><a href="#">Fish</a></li>
            <li><a href="#">Reptile</a></li>
            <li><a href="#">Bird</a></li>
          </ul>
        </div>
        <div>
          <h4>Services</h4>
          <ul>
            <li><a href="#">Grooming</a></li>
            <li><a href="#">Boarding</a></li>
            <li><a href="#">Training</a></li>
            <li><a href="#">Veterinary</a></li>
          </ul>
        </div>
        <div>
          <h4>PetMania</h4>
          <ul>
            <li><a href="#">About us</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Gift Cards</a></li>
          </ul>
        </div>
        <div>
          <h4>Customer Service</h4>
          <ul>
            <li><a href="#">Contact us</a></li>
            <li><a href="#">Shipping</a></li>
            <li><a href="#">Returns</a></li>
            <li><a href="#">FAQ</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2024 VM. All rights reserved. <a href="#">Privacy Policy</a> | <a href="#">Terms of Use</a> | <a href="#">Search</a></p>
        
      </div>
    </footer>
  );
};

export default Footer;
