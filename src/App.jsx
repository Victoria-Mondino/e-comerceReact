
import Categories from "./componentes/Categories/Categories";
import Home from "./componentes/Home/Home";
import ItemListContainer from "./componentes/ItemListContainer/ItemListContainer";
import NavBar from "./componentes/NavBar/NavBar";

import "./main.css"

function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <Categories />
    
      
      <ItemListContainer />
    </div>
  );
}

export default App;