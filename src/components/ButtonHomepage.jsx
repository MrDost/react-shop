import React from 'react'

export const ButtonHomepage = ({ text, onclick }) => {
  return (
    <button onClick={onclick} className='shadow-2xl shadow-black py-4 text-xl font-semibold border-0 px-8 rounded-full bg-white'>
      {text}
    </button>
  )
}
