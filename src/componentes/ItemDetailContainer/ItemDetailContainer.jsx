import { useEffect, useState } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";  
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase/config";  

const ItemDetailContainer = () => {
    const [item, setItem] = useState(null);
    const { id } = useParams();  // Extrae el 'id' de la URL

    useEffect(() => {
        if (id) {
            // Referencia al documento con el ID recibido
            const docRef = doc(db, "productos", id);
            
            // Obtener el documento desde Firestore
            getDoc(docRef)
                .then((resp) => {
                    if (resp.exists()) {
                        // Si el documento existe, actualiza el estado
                        setItem({ ...resp.data(), id: resp.id });
                    } else {
                        console.log("El producto no existe");
                    }
                })
                .catch((error) => {
                    console.error("Error al obtener el producto desde Firebase:", error);
                });
        }
    }, [id]);

    // Mostrar cargando mientras esperamos la respuesta
    if (!item) {
        return <p>Cargando...</p>;
    }

    return (
        <div>
            {item && <ItemDetail item={item} />}
        </div>
    );
};

export default ItemDetailContainer;
