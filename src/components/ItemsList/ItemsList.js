import { db } from "../../config/firebase";
import { collection, getDocs, addDoc, doc, deleteDoc } from "firebase/firestore";
import { useEffect, useState, } from "react";
import { Link } from "react-router-dom";
import "bulma/css/bulma.css";
import "./ItemList.css"

function ItemsList() {
  const itemsCollectionRef = collection(db, "Items");
  console.log(itemsCollectionRef);

  const [itemList, setItemList] = useState([]);

  const [newItemNombre, setNewItemNombre] = useState("");
  const [newItemPrecio, setNewItemPrecio] = useState(0);
  const [newItemStock, setNewItemStock] = useState(0);

  const getItemsList = async () => {
    const data = await getDocs(itemsCollectionRef);
    const filteredData = data.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,

    }));
    setItemList(filteredData);
    console.log(filteredData);
  };

  useEffect(() => {

    getItemsList()
  }, [])

  return (
    <div>
      {itemList.map((item) => (
       
        <div key={item.id} className="card column is-12">
          <div className="cardItem columns is-6">
            <div className="card-image">
              <figure >
                <img className="image is-128x128" src={item.img} alt="not found" />
              </figure>
            </div>
            <div className="card-content">
              <div className="media-content">
                <h2 className="title is-4">{item.nombre}</h2>
                <p className="title is-6">${item.precio}</p>
                <p className="subtitle is-6"><b>stock: </b>{item.stock}</p>
              </div>
              
            </div>
          </div>
          <footer className="CardItemFooter">
            <Link to={`/item/${item.id}`} className="Option">Ver detalle</Link>
          </footer>
        </div>
      ))}
    </div>
  )
}

export default ItemsList;