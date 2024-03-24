import React from 'react'

export const Button = ({text}) => {
  return (
    <div className='cursor-pointer w-full py-3 text-lg bg-black text-white rounded-full justify-center flex font-semibold'>
      {text}
    </div>
  )
}
