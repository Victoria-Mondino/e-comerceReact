import React, { useContext, useState } from 'react';
import './ItemDetail.css';
import ItemCount from '../ItemCount/ItemCount';
import { toCapital } from '../../helpers/toCapital';
import { CartContext } from '../../context/CartContext';

const ItemDetail = ( {item} ) => {

    const { carrito, agregarAlCarrito } = useContext(CartContext);
    console.log(carrito);

    const [cantidad, setCantidad] = useState(1);

    const handleRestar = () => {
        cantidad > 1 && setCantidad(cantidad - 1)
    }

    const handleSumar = () => {
        cantidad < item.stock && setCantidad(cantidad + 1)
    }

  return (
    <div className="container-detalle">
        <div className="producto-detalle">
            <img src={item.imagen} alt={item.titulo} />
            <div className="detalle-info">
                <h3 className="titulo">{item.titulo}</h3>
                <p className="descripcion">{item.descripcion}</p>
                <p className="categoria">Categoría: {toCapital(item.categoria)}</p>
                <p className="precio">${item.precio}</p>
                <div className="select-cantidad">
                  <select className="gramos-seccion">
                      <option>250 grams</option>
                      <option>500 grams</option>
                  </select>
                </div>

                
                <ItemCount
                  cantidad={cantidad}
                  handleSumar={handleSumar}
                  handleRestar={handleRestar}
                  handleAgregar={() => { agregarAlCarrito(item, cantidad) }}
                />
            </div>
        </div>
    </div>
  )
}

export default ItemDetail