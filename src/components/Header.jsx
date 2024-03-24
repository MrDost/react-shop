import React from 'react'
import { Search } from "./Search"
import { Cart } from "./Cart"
import { Link } from 'react-router-dom'

export const Header = () => {
  return (
    <div className="flex justify-between items-center py-4 px-20 pt-12">
      <Link to="/">
        <div className='text-3xl font-semibold'>
          TheOdinShop
        </div>
      </Link>
      <Search/>
      <Cart/>
    </div>
  )
}
