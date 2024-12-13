import Item from "../Item/Item"
import "../ItemList/ItemList.css"; 


const ItemList = ( { productos } ) => {
  return (
    <div className="container"> 

        <h2 className="main-title">Best Selling Products</h2>
        <div className="productos">
        {productos.slice(0, 4).map((prod) => (
          <Item producto={prod} key={prod.id} />
        ))}
      </div>

    </div>
    )
 }

export default ItemList