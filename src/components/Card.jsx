import React from 'react';
import Title from '../components/Title';
import Subtitle from '../components/Subtitle';
import ImagePerson from '../components/ImgPerson';
import { Link } from 'react-router-dom';

export default function Card ({children, name, experience, language, person}) {
  return(
    <Link className='bg-primary rounded-b-lg flex flex-col max-w-[370px] h-fit rounded-lg'>
      <ImagePerson src={person} alt="Imagem do professor" />
      <div className='p-4'>
        <Title textSize='text-3xl'>{name}</Title>
        <Subtitle>Língua: {language}.</Subtitle>
        <Subtitle>Experiência: {experience} anos.</Subtitle>
      </div>
    </Link>
  )
}

      