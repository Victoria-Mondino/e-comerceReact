import React from 'react';

const ItemDetail = ({ item }) => {
  if (!item) {
    return <p>Item no encontrado.</p>;  // Si item es undefined, mostrar un mensaje
  }

  return (
    <div className="container-detalle">
      <div className="producto-detalle">
        <img src={item.imagen} alt={item.titulo} />
        <div>
          <h3 className="titulo">{item.titulo}</h3>
          <p className="descripcion">{item.descripcion}</p>
          <p className="categoria">Categoria: {item.categoria}</p>
          <p className="precio">${item.precio}</p>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
