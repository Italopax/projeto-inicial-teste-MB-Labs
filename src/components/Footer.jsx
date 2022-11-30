import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../assets/logo.svg';
import { ReactComponent as Facebook } from '../assets/facebookLogo.svg';
import { ReactComponent as Instagram } from '../assets/instagramLogo.svg';
import { ReactComponent as Linkedin } from '../assets/linkedinLogo.svg';

export default function Footer () {
  return(
    <footer className='bg-primary text-textButton flex font-bold items-center justify-center gap-4 py-2'>
      <Logo className='h-full' />
      <div className='text-center'>
        <p>Entre em contato conosco:</p>
        <div className='flex gap-2 justify-center'>
          <Link to='#'>
            <Facebook className='h-6' />
          </Link>
          <Link to='#'>
            <Instagram className='h-6' />
          </Link>
          <Link to='#'>
            <Linkedin className='h-6' />
          </Link>
        </div>
      </div>
    </footer>
  )
}