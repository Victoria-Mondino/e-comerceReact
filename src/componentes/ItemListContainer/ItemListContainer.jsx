import React, { useState, useEffect } from "react";
import { pedirDatos } from "../../helpers/pedirDatos";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";

const ItemListContainer = ({ limit }) => {
    const [productos, setProductos] = useState([]);
    const [titulo, setTitulo] = useState("Productos");
    const categoria = useParams().categoria;

    useEffect(() => {
        pedirDatos()
            .then((res) => {
                if (categoria) {
                    setProductos(res.filter((prod) => prod.categoria === categoria));
                    setTitulo(categoria);
                } else {
                    setProductos(res);
                    setTitulo("Productos");
                }
            });
    }, [categoria]);

    // FUNCION PARA EL LIMITE 
    const productosMostrados = limit ? productos.slice(0, limit) : productos;

    return (
        <div>
            <ItemList productos={productosMostrados} titulo={titulo} />
        </div>
    );
};

export default ItemListContainer;

