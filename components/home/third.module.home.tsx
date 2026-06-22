"use client";
import React from 'react';
import ParticlesScene from '@/animate/particules/particules';
import { bebas_neue } from '@/fonts/font';
import { useIntlayer } from "next-intlayer";

const ThirdModuleHome = () => {
  const {messages6, messages6other,messages7}=useIntlayer('page');
  return (
    <div className='relative border-b border-b-zinc-400 p-3'>
      <ParticlesScene/>
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-y-5">
         <div className="">
            <h1 className={`${bebas_neue.className} text-zinc-300 text-6xl opacity-50`}>
               {messages6}
            </h1>
         </div>
         <div className="flex flex-col items-center gap-y-5">
            <h1 className={`${bebas_neue.className} text-zinc-300 text-6xl`}>
               {messages6other}
            </h1>
            <h1 className={`${bebas_neue.className} text-zinc-300 text-6xl opacity-50`}>
                {messages7}
            </h1>
         </div>
      </div>
    </div>
  )
}

export default ThirdModuleHome
