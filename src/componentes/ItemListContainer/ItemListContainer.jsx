import React, { useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../firebase/config"; 

const ItemListContainer = ({ limit }) => {
    const [productos, setProductos] = useState([]);
    const [titulo, setTitulo] = useState("Productos");
    const categoria = useParams().categoria;

    useEffect(() => {
        const productosRef = collection(db, "productos");
        const q = categoria ? query(productosRef, where("categoria", "==", categoria)) : productosRef;

        getDocs(q)
            .then((resp) => {
                const productosData = resp.docs.map((doc) => ({
                    ...doc.data(),
                    id: doc.id,
                }));
                
                // Si hay una categoría, se usa como título, sino se usa "Productos"
                setProductos(productosData);
                setTitulo(categoria ? categoria : "Productos");
            })
            .catch((error) => console.error("Error al obtener los productos desde Firebase:", error));
    }, [categoria]);

    // Aplicar límite de productos si se pasa el prop `limit`
    const productosMostrados = limit ? productos.slice(0, limit) : productos;

    return (
        <div>
            <ItemList productos={productosMostrados} titulo={titulo} />
        </div>
    );
};

export default ItemListContainer;