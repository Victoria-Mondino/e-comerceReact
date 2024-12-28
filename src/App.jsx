
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
import { useState } from "react";
import { CartContext } from "./context/CartContext";

function App() {

  const [carrito, setCarrito] = useState([]);



  const agregarAlCarrito = () => {
    const itemAgregado = {...item, cantidad};

    const nuevoCarrito = [...carrito];
    const estaEnElCarrito = nuevoCarrito.find((producto) => producto.id === itemAgregado.id);

    if (estaEnElCarrito) {
      estaEnElCarrito.cantidad += cantidad;
      
    } else {
      nuevoCarrito.push(itemAgregado);
    }
    setCarrito(nuevoCarrito);
    
    console.log('Carrito actualizado:', nuevoCarrito);

  }




  return (
    <div>
      <CartContext.Provider value={ {carrito, setCarrito}}>

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
            </Routes>

          <Footer />

        </BrowserRouter>

      </CartContext.Provider>
    </div>
  );
}

export default App;
