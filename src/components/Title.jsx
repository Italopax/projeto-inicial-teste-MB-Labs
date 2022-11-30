import React from 'react';

export default function Title ({children, textSize}) {
  return(
    <h1 className={`${textSize ? textSize : 'text-4xl'} tabet:text-5xl font-bold m-auto max-w-[500px]`}>{children}</h1>  
  )
}