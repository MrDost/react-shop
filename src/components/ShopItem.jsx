import React from 'react'
import { Button } from './Button'
import { useCart } from '../App'

export const ShopItem = ({ good }) => {
  const { addItemToCart } = useCart();

  function addToCart(item) {
    addItemToCart(item);
  }

  return (
    <div className='w-full h-[30rem] relative'>
      <div className='relative h-1/2 w-full bg-red-50 rounded-t-2xl'>
        <img src={good.image} alt="Image" className="rounded-2xl absolute inset-0 w-full h-full object-cover" />
      </div>
      <p className='text-lg font-semibold text-black mt-4'>
        {good.title.slice(0, 60)}
      </p>
      <div className='absolute bottom-0 w-full' onClick={() => addToCart(good)}>
        <Button text="In cart"/>
      </div>
      <div className='absolute bottom-20 w-full text-3xl'>
        ${good.price}
      </div>
    </div>
  )
}
