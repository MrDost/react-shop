import React, { useState } from 'react'
import cartIcon from '../assets/shopping-cart.svg';
import { insideCart } from "../mock/mock"
import { useCart } from '../App';
import { CartMenu } from "./CartMenu"

export const Cart = (props) => {
  const { cart, calculateTotal } = useCart()
  const [menuDisplayed, setMenuDisplayed] = useState(false)

  return (
    <>
      <div onClick={() => setMenuDisplayed(true)} className='bg-white py-3 px-6 flex justify-center items-center rounded-full gap-3 cursor-pointer hover:bg-slate-50'>
        <img src={cartIcon} alt=""/>
        <span className='text-xl'>${calculateTotal()}</span>
        <p className='text-white bg-red-600 h-7 w-7 pb-1 font-semibold flex justify-center items-center rounded-full'>
          {cart.length}
        </p>
      </div>
      <CartMenu isOpen={menuDisplayed} setIsOpen={setMenuDisplayed}/>
    </>
  )
}
