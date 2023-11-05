// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { collection } from "firebase/firestore";
import { useEffect } from "react";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.APP_REACT_API_KEY,
  authDomain: "ecommerce-projectfinal.firebaseapp.com",
  projectId: "ecommerce-projectfinal",
  storageBucket: "ecommerce-projectfinal.appspot.com",
  messagingSenderId: "723089863428",
  appId: "1:723089863428:web:f05815c0fac0f0d63ed651"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)


export const getProductos = ()=>{

  return new Promise((resolve)=>{

      setTimeout ( ()=> {

          //let cantidad  = Math.floor(Math.random() * lista_productos.length);
          //console.log("Cantidad de productos devueltos en el asyncMock:", cantidad);
          resolve(db);

              },500)
      }  )
 }

 export const getProductById = (idProduct)=>{

  return new Promise((resolve) => {
      setTimeout(() => {
          resolve(db.find( prod => prod.id == idProduct))
      }, 500);
      
  })

 }

 export const getProductsByCategory = (category)=>{

  return new Promise((resolve) => {
      setTimeout(() => {
          resolve(db.filter( prod => prod.category == category ))
      }, 500);
  })

 }