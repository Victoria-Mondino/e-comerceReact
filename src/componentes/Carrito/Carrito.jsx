import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import "./Carrito.css";
import { Link } from "react-router-dom";

const Carrito = () => {
  const { carrito, precioTotal, vaciarCarrito, actualizarCantidad } =
    useContext(CartContext);

  const handleVaciar = () => {
    vaciarCarrito();
  };

  const handleIncrementar = (id) => {
    actualizarCantidad(id, 1); // Incrementar en 1
  };

  const handleDecrementar = (id) => {
    actualizarCantidad(id, -1); // Decrementar en 1
  };

  return (
    <div className="cart-page">
      <div className="cart-header">
        <h1 className="cart-title">Your Cart</h1>
        <div className="breadcrumbs">
          <span>Cart</span> &gt; <span>Checkout</span> &gt;{" "}
          <span className="active">Order Complete</span>
        </div>
      </div>

      <div className="cart-container">
        <div className="cart-items">
          {carrito.length > 0 ? (
            carrito.map((prod) => (
              <div className="cart-item" key={prod.id}>
                <img
                  src={prod.imagen}
                  alt={prod.titulo}
                  className="cart-item-image"
                />
                <div className="cart-item-details">
                  <h3>{prod.titulo}</h3>
                  <p>Unit Price: ${prod.precio.toFixed(2)}</p>
                  <p>Quantity: {prod.cantidad}</p>
                  <p>
                    Subtotal: ${(prod.precio * prod.cantidad).toFixed(2)}
                  </p>
                  <div className="cart-item-actions">
                    <button
                      onClick={() => handleDecrementar(prod.id)}
                      className="quantity-button"
                    >
                      -
                    </button>
                    <span className="quantity-value">{prod.cantidad}</span>
                    <button
                      onClick={() => handleIncrementar(prod.id)}
                      className="quantity-button"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <h2 className="empty-cart-message">The cart is empty :(</h2>
          )}
        </div>

        <div className="cart-summary">
          <h2>Cart Totals</h2>
          <div className="summary-line">
            <span>Subtotal:</span>
            <span>${precioTotal().toFixed(2)}</span>
          </div>
          <div className="summary-line">
            <span>VAT:</span>
            <span>$0.00</span>
          </div>
          <div className="summary-line">
            <span>Total:</span>
            <span>${precioTotal().toFixed(2)}</span>
          </div>
          <button onClick={handleVaciar} className="empty-cart-button">
            Clear Cart
          </button>
          <Link to="/Checkout" className="checkout-button">
            Proceed to Checkout
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Carrito;
