"use client";
import { orbitron } from '@/fonts/font'
import React from 'react'
import Formulairecomponent from './ui/formulaire.component'
import { useIntlayer } from 'next-intlayer';

const Lastcomponent = () => {
  const content = useIntlayer('sixcomponent');
  const lastTitle = content.lastTitle.value;
  const lastDescription = content.lastDescription.value;

  return (
    <div className='w-full h-full min-h-screen flex flex-col px-15 py-16'>
      <div className="flex flex-col items-center justify-center">
        <h1 className={`${orbitron.className} text-3xl mb-5 text-white`}>{lastTitle}</h1>
        <p className="text-xl text-zinc-400 flex items-center justify-center text-center w-150">{lastDescription}</p>
      </div>
      <div className="flex items-center justify-center mt-10">
        <Formulairecomponent />
      </div>
    </div>
  )
}

export default Lastcomponent