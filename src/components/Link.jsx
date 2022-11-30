import React from 'react';
import { Link } from 'react-router-dom';

export default function LinkComponent ({to, children}) {
  return(
    <Link to={to} className='p-3 rounded-md hover:bg-neutral'>
      {children}
    </Link>
  )
}