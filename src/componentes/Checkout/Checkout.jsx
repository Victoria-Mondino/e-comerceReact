import React, { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import { useForm } from "react-hook-form";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../firebase/config";
import "./Checkout.css"; // Asegúrate de incluir estilos

const Checkout = () => {
  const [pedidoId, setPedidoId] = useState("");

  const { carrito, precioTotal, vaciarCarrito } = useContext(CartContext);

  const { register, handleSubmit } = useForm();

  const comprar = (data) => {
    const pedido = {
      cliente: data,
      productos: carrito,
      total: precioTotal(),
    };

    const pedidosRef = collection(db, "pedidos");

    addDoc(pedidosRef, pedido).then((doc) => {
      setPedidoId(doc.id);
      vaciarCarrito();
    });
  };

  if (pedidoId) {
    return (
        <div className="thank-you-container">
        <div className="thank-you-card">
          <h1 className="thank-you-title">🎉 Thank You for Your Purchase! 🎉</h1>
          <p className="thank-you-message">We're thrilled to have you as a customer!</p>
          <p className="order-id">Your Order ID: <strong>{pedidoId}</strong></p>
          <p className="next-steps">You will receive a confirmation email shortly with your order details.</p>
          <button className="return-home-btn" onClick={() => window.location.href = '/'}>Return to Home</button>
        </div>
      </div>
      
    );
  }

  return (
    <div className="checkout-container">
      <h1 className="checkout-title">Billing Details</h1>
      <form className="checkout-form" onSubmit={handleSubmit(comprar)}>
        <div className="billing-details">
          <div className="form-group">
            <label>First Name *</label>
            <input type="text" {...register("firstName")} required />
          </div>
          <div className="form-group">
            <label>Last Name *</label>
            <input type="text" {...register("lastName")} required />
          </div>
          <div className="form-group">
            <label>Company Name (optional)</label>
            <input type="text" {...register("company")} />
          </div>
          <div className="form-group">
            <label>Country / Region *</label>
            <select {...register("country")} required>
              <option value="United Kingdom">United Kingdom (UK)</option>
              <option value="USA">USA</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <div className="form-group">
            <label>Street Address *</label>
            <input
              type="text"
              placeholder="House number and street name"
              {...register("streetAddress")}
              required
            />
            <input
              type="text"
              placeholder="Apartment, suite, unit, etc. (optional)"
              {...register("apartment")}
            />
          </div>
          <div className="form-group">
            <label>Town / City *</label>
            <input type="text" {...register("city")} required />
          </div>
          <div className="form-group">
            <label>County (optional)</label>
            <input type="text" {...register("county")} />
          </div>
          <div className="form-group">
            <label>Postcode *</label>
            <input type="text" {...register("postcode")} required />
          </div>
          <div className="form-group">
            <label>Phone *</label>
            <input type="tel" {...register("phone")} required />
          </div>
          <div className="form-group">
            <label>Email Address *</label>
            <input type="email" {...register("email")} required />
          </div>
        </div>
        <div className="order-summary">
          <h2>Your Order</h2>
          <div className="order-item">
            <p>Daycare - Half Day (under 5 hrs) × 1</p>
            <p>$33.33</p>
          </div>
          <div className="order-totals">
            <p>Subtotal: $33.33</p>
            <p>Shipping: Flat rate</p>
            <p>VAT: $6.67</p>
            <p>
              <strong>Total: $40.00</strong>
            </p>
          </div>
          <div className="payment-method">
            <label>
              <input type="radio" name="payment" value="bank" required />
              Direct bank transfer
            </label>
            <p>
              Make your payment directly into our bank account. Please use your
              Order ID as the payment reference.
            </p>
            <label>
              <input type="radio" name="payment" value="check" />
              Check payments
            </label>
            <label>
              <input type="radio" name="payment" value="cod" />
              Cash on delivery
            </label>
          </div>
          <div className="terms">
            <label>
              <input type="checkbox" {...register("terms")} required /> I have
              read and agree to the website terms and conditions *
            </label>
          </div>
          <button className="place-order-btn" type="submit">
            Place Order
          </button>
        </div>
      </form>
    </div>
  );
};

export default Checkout;
