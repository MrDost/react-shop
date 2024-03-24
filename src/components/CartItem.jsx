import React from 'react'

export const CartItem = ({ item }) => {
  return (
    <div className='text-black w-full flex gap-4'>
      <div className='relative h-20 min-w-20 bg-red-50 rounded-t-2xl'>
        <img src={item.image} alt="Image" className="rounded-2xl absolute inset-0 w-full h-full object-cover" />
      </div>
      <div className='flex flex-col justify-between'>
        <p>
          {item.title}
        </p>
        <p className='text-2xl font-semibold'>
          ${item.price}
        </p>
      </div>
    </div>
  )
}
