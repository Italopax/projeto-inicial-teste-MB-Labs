import React from 'react';

export default function Input ({placeholder, type}) {
  return(
    <input placeholder={placeholder} type={type} className='bg-neutral rounded px-4 py-2 flex-1 max-w-xs hover:bg-white focus:bg-white focus:outline-none hover:shadow-customShadow focus:shadow-customShadow duration-200' />
  )
}