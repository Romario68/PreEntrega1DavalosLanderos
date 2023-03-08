import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import {ToastContainer} from 'react-toastify';
import {Brand} from "./Brand/Brand";
import {NavBar} from "./NavBar/NavBar";
import {ItemListContainer} from "./ItemListContainer/ItemListContainer";
import {ItemDetailContainer} from "./ItemDetailContainer/ItemDetailContainer";
import {UnderConstruction} from "./UnderConstruction/UnderConstruction";
import {Music} from "./Music/Music";
import {Movies} from "./Movies/Movies";
import {Contact} from "./Contact/Contact";
import {Cart} from "./Cart/Cart";
import { Checkout } from './Checkout/Checkout';
import { CarritoProvider } from '../context/CarritoContext';

export const App = () => {
  return (
    <>
      <BrowserRouter>
      <CarritoProvider>
        <Brand/>
        <NavBar/>
          <Routes>
            <Route path='/' element={<ItemListContainer/>}/> 
            <Route path='/item/:id' element={<ItemDetailContainer/>}/>
            <Route path='/books/:categoryName' element={<ItemListContainer/>}/>
            <Route path='/:categoryName' element={<Music/>}/>
            <Route path='/:categoryName' element={<Movies/>}/>
            <Route path='/contact/' element={<Contact/>}/>
            <Route path='/cart/' element={<Cart/>}/>
            <Route path='/checkout' element={<Checkout/>}/>
          </Routes>
          <ToastContainer/>
      </CarritoProvider>
      </BrowserRouter>
    </>
  );
}
