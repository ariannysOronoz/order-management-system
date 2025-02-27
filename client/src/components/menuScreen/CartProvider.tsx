import { createContext, useState, ReactNode, useContext } from "react";
import {DishProps}  from "./OrderDetails"; 
import { v4 as uuidv4 } from 'uuid';

interface CartDish extends DishProps {
  uniqueId: string; 
}

interface CartContextType {
  cart: CartDish[];
  addToCart: (dish: DishProps) => void;
  removeFromCart: (uniqueId: string) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);


export function CartProvider({ children }: { children: ReactNode }) {
  
  const [cart, setCart] = useState<CartDish[]>([]);
  
  const addToCart = (dish: DishProps) => {
    const uniqueDish: CartDish = { ...dish, uniqueId: uuidv4() };
    setCart((prevCart) => [...prevCart, uniqueDish]);
    console.log("Plato agregado:", uniqueDish);
  };
  
  const removeFromCart = (uniqueId: string) => {
    setCart(prevCart => {
      const filteredCart = prevCart.filter(item => item.uniqueId !== uniqueId);
      console.log("Carrito después de eliminar:", filteredCart);
      return filteredCart;
    });
  };
  
  
  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart debe usarse dentro de un CartProvider");
  }
  return context;
}
