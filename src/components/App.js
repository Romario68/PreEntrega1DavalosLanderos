import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';
import Brand from "./Brand/Brand";
import NavBar from "./NavBar/NavBar";
import ItemListContainer from "./ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./ItemDetailContainer/ItemDetailContainer";
import UnderConstruction from "./UnderConstruction/UnderConstruction";
import Music from "./Music/Music";
import Movies from "./Movies/Movies";
import Contact from "./Contact/Contact";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Brand/>
        <NavBar/>
          <Routes>
            <Route path='/' element={<ItemListContainer/>}/> 
            <Route path='/item/:id' element={<ItemDetailContainer/>}/>
            <Route path='/categories/:categoryName' element={<ItemListContainer/>}/>
            <Route path='/music/' element={<Music/>}/>
            <Route path='/movies/' element={<Movies/>}/>
            <Route path='/contact/' element={<Contact/>}/>
            <Route path='/cart/' element={<UnderConstruction/>}/>
          </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
