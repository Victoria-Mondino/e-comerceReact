import React from 'react'

const Item = ( { producto }) => {
  return (
    <div className="producto">
        <img src={producto.imagen} />
        <div>
            <h4 className="producto-titulo">{producto.titulo}</h4>
            <p className="producto-parrafo">Precio: ${producto.precio}</p>
            <a className="ver-mas" href={`/item/${producto.id}`}>Ver más</a>
        </div>
    </div>
  )
}

export default Item