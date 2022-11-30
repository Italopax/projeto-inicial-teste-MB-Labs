import React from 'react';
import Title from '../components/Title';
import Subtitle from '../components/Subtitle';

export default function Card ({children, name, experience, language, src}) {
  return(
    <div className='bg-yellow-200 flex flex-col'>
      <img src={src} alt="imagem do professor" className='' />
      <div className='w-full h-96'>
        
      </div>
      <div className=''>
        <Title textSize='text-3xl'>{name}</Title>
        <Subtitle>Língua: {language}.</Subtitle>
        <Subtitle>Experiência: {experience} anos.</Subtitle>
      </div>
    </div>
  )
}

      