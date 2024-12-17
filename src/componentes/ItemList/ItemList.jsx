import Item from "../Item/Item"
import "../ItemList/ItemList.css"; 
import { toCapital } from "../../helpers/toCapital";


const ItemList = ( { productos, titulo } ) => {
  return (
    <div className="container"> 

        <h2 className="main-title">{toCapital(titulo)}</h2>
        <div className="productos">
        {productos.slice(0, 4).map((prod) => (
          <Item producto={prod} key={prod.id} />
        ))}
      </div>

    </div>
    )
 }

export default ItemList

/* TEHNGO QUE CORREGIR EL QUE SE MUESTRE SOLO 4 PRODUCTOS 
 CODIGO DONDE SE MUESREA TODO LOSP RODUCTOS :
 <div className="productos">
 {productos.map((prod) => <Item producto={prod} key={prod.id} />)}
*/