import React from 'react'
import woman from "../assets/woman.jpg"
import { ButtonHomepage } from "./ButtonHomepage"
import { Link } from 'react-router-dom'

export const Homepage = () => {
  const divStyle = {
    backgroundImage: `url(${woman})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    filter: 'grayscale(100%)',
  };

  return (
    <div style={divStyle} className='relative bg-blue-500 mx-10 my-5 mb-16 h-full flex justify-center items-center flex-1 rounded-2xl'>
      <div className='absolute bottom-40'>
        <Link to="/shop">
          <ButtonHomepage text="Continue"/>
        </Link>
      </div>
    </div>
  );
}
