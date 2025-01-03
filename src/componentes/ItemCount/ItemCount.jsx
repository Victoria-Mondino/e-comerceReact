import React from 'react'
import "./ItemCount.css"
const ItemCount = ( {cantidad, handleRestar, handleSumar, handleAgregar} ) => {

  return (
    <div>

        <div className="item-count">
            <button onClick={handleRestar}>-</button>
            <p>{cantidad}</p>
            <button onClick={handleSumar}>+</button>
        </div>
        <button className="agregar-al-carrito" onClick={handleAgregar}>Add To Cart</button>
    </div>
  )
}

export default ItemCount