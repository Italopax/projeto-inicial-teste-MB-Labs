import React from 'react';
import Title from '../components/Title';
import Card from '../components/Card';

export default function Home () {
  return(
    <>
      <section className="flex items-center gap-6 flex-col tablet:flex-row p-4 max-w-5xl m-auto w-full h-">
        <div className="flex flex-col items-center gap-1 text-center ">
          <Title>Aqui você poderá aprender <span className='text-primary'>quanto</span>, <span className='text-primary'>quando</span> e <span className='text-primary'>onde</span> quiser!</Title>
        </div>
        <div className='bg-study w-full tablet:h-[450px] tablet:w-96 bg-center z-10 min-h-[100px]'></div>
      </section>
      <section className='flex flex-1 flex-col bg-white flex-wrap p-6'>
        <Card name='Italo Paixão' language='Russo' experience='10' src='../assets/person1.jpg'/>
      </section>
    </>
  )
}