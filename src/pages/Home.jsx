import React from 'react';
import Title from '../components/Title';
import Subtitle from '../components/Subtitle';
import Card from '../components/Card';
import Person1 from '../assets/person1.jpg';
import Person2 from '../assets/person2.jpg';
import Person3 from '../assets/person3.jpg';
import Person4 from '../assets/person4.jpg';
import Person5 from '../assets/person5.jpg';
import Person6 from '../assets/person6.jpg';

export default function Home () {
  return(
    <>
      <section className="flex items-center gap-6 flex-col tablet:flex-row p-4 max-w-5xl m-auto w-full">
        <div className="flex flex-col items-center gap-4 text-center ">
          <Title>Aqui você poderá aprender <span className='text-primary'>quanto</span>, <span className='text-primary'>quando</span> e <span className='text-primary'>onde</span> quiser!</Title>
          <Subtitle>Escolha qualquer um dos professores abaixo e comece agora sua jornada em uma nova língua!</Subtitle>
        </div>
        <div className='bg-study w-full tablet:h-[450px] tablet:w-96 bg-center z-10 min-h-[100px]'></div>
      </section>
      <section className='py-6 px-2 bg-white'>
        <div className='flex flex-1 flex-wrap gap-8 justify-evenly max-w-5xl m-auto'>
          <Card name='Ivan Dimitri' language='Russo' experience='10' person={Person1} />
          <Card name='Mary Amelia' language='Inglês' experience='3' person={Person2} />
          <Card name='Paul Pierre' language='Francês' experience='7' person={Person3} />
          <Card name='Mahara Kali' language='Hindi' experience='32' person={Person4} />
          <Card name='Garcia Rodriguez' language='Espanhol' experience='8' person={Person5} />
          <Card name='Nicolai Iuri' language='Russo' experience='13' person={Person6} />
        </div>
      </section>
    </>
  )
}