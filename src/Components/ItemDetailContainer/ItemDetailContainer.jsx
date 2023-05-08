
const ItemDetailContainer = (prods) => {
  
    const { productos } = prods;
    
    return (

    <>
    {productos.map((p) => {
      return (
        <div className="container-fluid" key={p.id}>
          <div className="card">
            <div>
              <h3>producto n°{p.id}</h3>
            </div>
            <div>
              <h3>{p.marca}</h3>  
            </div>
          </div>
        </div>
      );
    })}
  </>
  )
}

export default ItemDetailContainer;