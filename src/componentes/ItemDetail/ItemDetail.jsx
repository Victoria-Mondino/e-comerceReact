import React, { useContext, useState } from "react";
import "./ItemDetail.css";
import ItemCount from "../ItemCount/ItemCount";
import { toCapital } from "../../helpers/toCapital";
import { CartContext } from "../../context/CartContext";

const ItemDetail = ({ item }) => {
  const { carrito, agregarAlCarrito } = useContext(CartContext);
  console.log(carrito);

  const [cantidad, setCantidad] = useState(1);
  const [activeTab, setActiveTab] = useState("details"); // Manejo de pestañas

  const handleRestar = () => {
    cantidad > 1 && setCantidad(cantidad - 1);
  };

  const handleSumar = () => {
    cantidad < item.stock && setCantidad(cantidad + 1);
  };

  return (
    <div className="container-detalle">
      <div className="producto-detalle">
        <img src={item.imagen} alt={item.titulo} />
        <div className="detalle-info">
          <h3 className="titulo">{item.titulo}</h3>
          <p className="descripcion">{item.descripcion}</p>
          <p className="categoria">Category: {toCapital(item.categoria)}</p>
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
            handleAgregar={() => {
              agregarAlCarrito(item, cantidad);
            }}
          />
        </div>
      </div>

      {/* Pestañas de Información */}
      <div className="tabs-container">
        <div className="tabs">
          <button
            className={activeTab === "details" ? "active" : ""}
            onClick={() => setActiveTab("details")}
          >
            Details
          </button>
          <button
            className={activeTab === "ingredients" ? "active" : ""}
            onClick={() => setActiveTab("ingredients")}
          >
            Ingredients & Analysis
          </button>
          <button
            className={activeTab === "shipping" ? "active" : ""}
            onClick={() => setActiveTab("shipping")}
          >
            Shipping & Returns
          </button>
        </div>

        {/* Contenido dinámico de las pestañas */}
        <div className="tab-content">
          {activeTab === "details" && <p>{item.details || "No details available."}</p>}
          {activeTab === "ingredients" && <p>{item.ingredients || "No ingredients available."}</p>}
          {activeTab === "shipping" && <p>{item.shipping || "No shipping info available."}</p>}
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
