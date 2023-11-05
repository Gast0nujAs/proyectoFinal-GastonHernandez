import { db } from "./config/firebase";
import { collection, getDocs , addDoc , doc, deleteDoc } from "firebase/firestore"; 
import { useEffect, useState,  } from "react";
import NavBar from "./components/NavBar/NavBar";
import ItemsList from "./components/ItemsList/ItemsList";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemDetail from "./components/itemDetail/ItemDetail";
import ItemDetailContainer from "./components/itemDetailContainer/ItemDetailContainer";
import ItemListContainer from "./components/itemListContainer/ItemListContainer";

function App() {

  /* onst onSubmitItem = async ()=>{
    await addDoc(itemsCollectionRef, {nombre:newItemNombre, precio:newItemPrecio,stock:newItemStock});
    getItemsList();
  }

  const deleteItem = async (id) =>{
    const itemId = doc(db, "Items" , id);
    await deleteDoc(itemId);
    getItemsList();


} */

  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path="/" element={<ItemsList/>}/>
        <Route path="/category/:categoryId" element={<ItemListContainer/>}/>
        <Route path="/item/:itemId" element={<ItemDetailContainer/>} />
        <Route path="*" element={<h1>404 NOT FOUND</h1>}/>
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
