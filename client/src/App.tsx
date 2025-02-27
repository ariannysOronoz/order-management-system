import React from "react";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Menu from "./components/menuScreen/Menu";
import OrderDetails from "./components/menuScreen/OrderDetails";
import { CartProvider } from "./components/menuScreen/CartProvider";
import  Cart  from "./components/menuScreen/Cart";

const App = () => {
  {/*
  const [isChecked, setIsChecked] = useState(false);
  const toggleCheckbox = () => {
      setIsChecked(!isChecked);
  };*/}
  return(
    <div className="App">
      <CartProvider>
        <Router>
            <Routes>
                <Route path="/" element={<Menu />} />
                <Route path="/pedido/:id" element={<OrderDetails/>} />
            </Routes>
            <Cart />
        </Router>
      </CartProvider> 
    </div>
  );
}

export default App;



