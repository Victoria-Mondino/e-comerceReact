import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { pedirItemPorId } from "../../helpers/pedirDatos";
import ItemDetail from "../ItemDetail/ItemDetail";

const ItemDetailContainer = () => {
  const [item, setItem] = useState(null);
  const { id } = useParams();  // Extrae el 'id' de la URL

  useEffect(() => {
    if (id) {
      pedirItemPorId(Number(id))  // Asegúrate de convertir el id a número antes de pasarlo
        .then((res) => {
          setItem(res);  // Guarda el item recibido
        })
        .catch((error) => {
          console.error("Error al obtener el item:", error);
        });
    }
  }, [id]);

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

  