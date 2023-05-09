import Item from "../Item/Item";
import "./ItemList.css"

const ItemList = ({catalogoProductos}) => {

    console.log(catalogoProductos);

  return (
    <div className="item-list">
    {catalogoProductos.map((prod) => {
      return (
        <Item
          key={prod.id}
          tipo={prod.tipo}
          img={prod.img}
          marca={prod.marca}
          modelo={prod.modelo}
          stock={prod.stock}
          precio={prod.precio}
        />
      );
    })}
  </div>
  );
};

export default ItemList;
