import React from 'react';

export default function ImagePerson ({src, alt}) {
  return(
    <img className='rounded-t-lg h-[400px] w-80' src={src} alt={alt} />
  )
}