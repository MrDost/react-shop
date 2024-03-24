import { createContext, useContext, useState } from 'react'
import './App.css'
import { Homepage } from "./components/Homepage"
import { Header } from "./components/Header"
import { Outlet } from "react-router-dom";
import { ShopPage } from './components/ShopPage';

const CartContext = createContext();

export const useCart = () => {
  return useContext(CartContext);
}

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([])

  const addItemToCart = (item) => {
    setCart([...cart, item])
  }

  const removeItemFromCart = (id) => {
    const newCart = [...cart].map(item => {
      return item.id === id ? null : item
    });
    setCart(newCart);
  }

  const clearCart = () => {
    setCart([]);
  }

  const calculateTotal = () => {
    const totalValue = cart.reduce((acc, item) => acc + item.price, 0);
    return totalValue.toFixed(2);
  }

  const value = {
    cart,
    addItemToCart,
    removeItemFromCart,
    clearCart,
    calculateTotal
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;

}

function App() {

  return (
    <>
    <CartProvider>
      <div className='flex flex-col min-h-screen'>
        <Header/>
        <Outlet/>
      </div>
    </CartProvider>
    </>
  )
}

export default App
