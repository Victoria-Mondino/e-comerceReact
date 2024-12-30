
import Footer from "./componentes/Footer/Footer";
import Home from "./componentes/Home/Home";
import ItemListContainer from "./componentes/ItemListContainer/ItemListContainer";
import NavBar from "./componentes/NavBar/NavBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./main.css"
import ItemDetailContainer from "./componentes/ItemDetailContainer/ItemDetailContainer";
import About from "./componentes/About/About";
import ItemDetail from "./componentes/ItemDetail/ItemDetail";
import Contact from "./componentes/Contact/Contact";
import { CartProvider } from "./context/CartContext";
import Carrito from "./componentes/Carrito/Carrito";


function App() {

  return (
    <div>
      <CartProvider>
        <BrowserRouter>

          <NavBar />

            <Routes> 
              <Route path="/" element={<Home />} />
              <Route path="/productos" element={<ItemListContainer />} />
              <Route path="/productos/:categoria" element={<ItemListContainer />} />
              <Route path="/item/:id" element={<ItemDetailContainer  />} /> 
              <Route path="/item" element={<ItemDetail />} />
              <Route path="/About" element={<About />} />
              <Route path="/Contact" element={<Contact />} />
              <Route path="/Carrito" element={<Carrito />} />
            </Routes>

           

          <Footer />

        </BrowserRouter>

        </CartProvider>
    </div>
  );
}

export default App;
