import ItemsList from "../ItemsList/ItemsList";

function ItemsContext({products}){
    return (
        <div>
            {products.map(prod => <ItemsList key={prod.id} {...prod}/>)}
        </div>
    )
}

export default ItemsContext;