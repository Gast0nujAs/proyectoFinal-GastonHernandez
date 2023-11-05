import ItemsList from "../ItemsList/ItemsList";
import ItemCount from "../itemCount/ItemCount";

function ItemDetail ({id, nombre, img, precio, stock}) {

 
    return (
         <article className="CardItem">
            <header className="Header">
                <h2 className="ItemHeader">
                    {nombre}
                </h2>
            </header>
            <picture>
                <img src={img} alt="a" className="ItemImg"/>
            </picture>
            <section>
                <p className="Info">
                    Categoria: "asd"
                </p>
                <p className="Info">
                    Descricion: "asd"
                </p>
                <p className="Info">
                    Precio: ${precio}
                </p>
            </section>
            <footer className="ItemFooter">
                <ItemCount initial={1} stock={stock} onAdd={ (quantity)=>{console.log("Cantidad agregada de items ", quantity)} }/>
            </footer>
        </article>
 
    )

}

export default ItemDetail;