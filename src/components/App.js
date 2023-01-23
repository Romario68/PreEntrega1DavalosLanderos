import './App.css';
import Brand from "./Brand/Brand";
import NavBar from "./NavBar/NavBar";
import ItemListContainer from "./ItemListContainer/ItemListContainer";
import {ItemCounter} from "./ItemCounter/ItemCounter";

const App = () => {
  return (
    <>
      <Brand/>
      <NavBar/>
      <ItemListContainer greeting={"Welcome to the knowledge tree"}/>
      <ItemCounter valMin={1} valStock={24} />
    </>
  );
}

export default App;
