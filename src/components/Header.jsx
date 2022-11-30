import React from 'react';
import { Link } from 'react-router-dom';
import LinkComponent from '../components/Link';
import Input from '../components/Input';
import { ReactComponent as Logo } from '../assets/logo.svg';

export default function Header () {

  return(
    <header className='p-2 shadow-sm'>
      <div className="w-full max-w-5xl flex justify-around gap-2 m-auto flex-col tablet:flex-row items-center">
        <div className="flex gap-4 flex-1 flex-wrap">
          <Link to='/'>
            <Logo className='h-10' />
          </Link>
          <Input placeholder='Pesquise por professores ou línguas' type="text" />
        </div>
        <nav className='flex items-center gap-4'>
          <LinkComponent to='/sobre'>
            Sobre
          </LinkComponent>
          <LinkComponent to='/login'>
            Login
          </LinkComponent>
          <LinkComponent to='/cadastro'>
            Cadastre-se
          </LinkComponent>
        </nav>
      </div>
    </header>
  )
}