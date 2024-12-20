import React from 'react'
import { Link } from 'react-router-dom'

const Item = ( { producto }) => {
  return (
    <div className="producto">
        <img src={producto.imagen}  alt={producto.title}/>
        <div>
            <h4 className="producto-titulo">{producto.titulo}</h4>
            <p className="producto-parrafo">Precio: ${producto.precio}</p>
            <Link className="ver-mas" to={`/item/${producto.id}`}>Ver más</Link>
        </div>
    </div>
  )
}

export default Item