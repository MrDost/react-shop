import React, { useEffect, useRef } from 'react'
import { useCart } from '../App'
import { CartItem } from './CartItem';
import { Button } from './Button';

export const CartMenu = ({ isOpen, setIsOpen }) => {
  const { cart, calculateTotal, clearCart } = useCart();

  const menuRef = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <>
      <div ref={menuRef} className={`fixed h-screen ${isOpen ? "w-[30rem]" : "w-0"} bg-white right-0 top-0 z-[3] transition-all duration-500 ease-in-out`}>
        { isOpen && <>
          <div className='text-2xl font-bold px-10 mt-20 mb-10'>
            <p>
              Total
            </p>
            <span className='text-5xl font-light'>
              ${calculateTotal().toString().slice(0, -3)}
              <span className='text-black/50'>{calculateTotal().toString().slice(-3)}</span>
            </span>
          </div>
          <ul className='px-10 h-[70%] overflow-y-scroll no-scrollbar relative space-y-8'>
            {cart.map(item => {
              return <li key={item.id}> <CartItem item={item}/> </li>
            })}
          </ul>
          <div onClick={() => clearCart()} className='px-10 absolute bottom-20 w-full'>
            <Button text="Checkout"/>    
          </div>
        </>}
      </div>
      <div className={`fixed inset-0 w-screen h-screen z-[2] bg-black/70 ${isOpen ? "visible" : "hidden"} transition-all duration-500 ease-in-out`}></div>    
    </>

  )
}
