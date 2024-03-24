import React, {useEffect, useState} from 'react'
import axios from 'axios';
import { ShopItem } from "../components/ShopItem"

export const ShopPage = () => {
  const [items, setItems] = useState([])
  console.log(items)

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products")
    .then(response => setItems(response.data))
  }, [])
  return (
    <div className='flex-1 mt-10 px-10'>
      <ul className='grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-12 gap-y-40'>
        {items.map(item => {
          return <li key={item.id}> <ShopItem good={item}/> </li>
        })}
      </ul>
    </div>
  )
}
