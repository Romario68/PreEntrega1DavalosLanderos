import { initializeApp } from "firebase/app";
import {getFirestore, collection, doc, addDoc, getDoc, getDocs, updateDoc, deleteDoc} from 'firebase/firestore'

const firebaseConfig = {
  apiKey:process.env.API_KEY,
  authDomain: "knowledgetree-fe84e.firebaseapp.com",
  projectId: "knowledgetree-fe84e",
  storageBucket: "knowledgetree-fe84e.appspot.com",
  messagingSenderId: "364044839579",
  appId: "1:364044839579:web:88848c4db558502bfeb43e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore();


export const loadDB = async () => {
    const promise = await fetch('./json/productos.json')
    const productos = await promise.json()
    productos.forEach( async (prod) => {
        await addDoc(collection(db,"products"), {
            idCategoria: prod.idCategoria,
            Title      : prod.Title,
            TitleL     : prod.TitleL,
            Publisher  : prod.Publisher,
            Date       : prod.Date,
            Pages      : prod.Pages,
            Tracks     : prod.Tracks,
            Rating     : prod.Rating,
            Price      : prod.Price,
            Image      : prod.Image,
            Stock      : prod.Stock,
            Review     : prod.Review
        })
    })
}

export const getProducts = async() => {
    const products = await getDocs(collection(db,"products"))
    const items = products.docs.map(prod => {
        return {...prod.data(), id: prod.id}
    })
    return items
}

export const getProduct = async(id) => {
    const product = await getDoc(doc(db, "products", id))
    const item = {...product.data(), id: product.id}
    return item
}

export const updateProduct = async(id, info) => {
    await updateDoc(doc(db, "products", id), info)
}

export const deleteProduct = async(id) => {
    await deleteDoc(doc(db, "products", id))
}

export const createOrdenCompra = async(cliente, productos,precioTotal, fecha) => {
    const ordenCompra = await addDoc(collection(db, "ordenCompra"), {
        datosCliente: cliente,
        productos: productos,
        precioTotal: precioTotal, 
        fecha: fecha
    })
    return ordenCompra
}

export const getOrdenCompra = async(id) => {
    const ordenCompra = await getDoc(doc(db, "ordenCompra", id))
    const oCompra = {...ordenCompra.data(), id: ordenCompra.id}
    return oCompra
}