import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../../context/CartContext'

const CartWidget = () => {

    const { cantidadEnCarrito } = useContext(CartContext)
  return (
    <div className="carrito">
        <Link  to="/carrito">
        <i className="bi bi-cart-check-fill"></i>
        <span className="numerito"> {cantidadEnCarrito()} </span>

        </Link>
    </div>
  )
}

export default CartWidget