"use client";
import { bebas_neue } from '@/fonts/font';
import React from 'react';
import Cardcomponent from '@/components/home/ui/cardComponent';
import { useIntlayer } from "next-intlayer";


const SecondModuleHome = () => {
  const {messages2,messages2other} = useIntlayer('page');

  return (
    <div className='min-h-screen w-full'>
      <div className="relative flex items-center justify-center overflow-hidden w-full h-[200px]">
        <svg width="1300" height="200" viewBox="0 0 900 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="grad" x1="0" y1="0" x2="900" y2="0" gradientUnits="userSpaceOnUse">
              <stop stopColor="purple"/>
              <stop offset="1" stopColor="white" stopOpacity="0.2"/>
            </linearGradient>
          </defs>
          <path d="M10 10 L10 110 L30 110 L30 70 L70 70 L70 52 L30 52 L30 28 L80 28 L80 10 Z" fill="url(#grad)" opacity={0.1}/>
          <path d="M95 10 L95 110 L175 110 L175 92 L115 92 L115 68 L165 68 L165 50 L115 50 L115 28 L175 28 L175 10 Z" fill="url(#grad)" opacity={0.1}/>
          <path d="M190 10 L190 110 L210 110 L210 45 L250 110 L270 110 L270 10 L250 10 L250 75 L210 10 Z" fill="url(#grad)" opacity={0.1}/>
          <path d="M285 110 L315 10 L335 10 L365 110 L344 110 L330 65 L320 65 L306 110 Z M322 50 L328 50 L335 75 L315 75 Z" fill="url(#grad)" opacity={0.8}/>
          <path d="M380 10 L440 10 L440 28 L400 28 L400 52 L440 52 L440 110 L380 110 L380 92 L420 92 L420 70 L380 70 Z" fill="url(#grad)" opacity={0.1}/>
          <path d="M450 10 L490 10 L490 28 L480 28 L480 92 L490 92 L490 110 L450 110 L450 92 L460 92 L460 28 L450 28 Z" fill="url(#grad)" opacity={0.8}/>
          <path d="M500 10 L500 85 Q500 110 525 110 L555 110 Q580 110 580 85 L580 10 L560 10 L560 85 Q560 92 540 92 Q520 92 520 85 L520 10 Z" fill="url(#grad)" opacity={0.1}/>
          <path d="M595 10 L655 10 L655 28 L615 28 L615 52 L655 52 L655 110 L595 110 L595 92 L635 92 L635 70 L595 70 Z" fill="url(#grad)" opacity={0.1}/>
        </svg>

        <div className="absolute inset-0 flex flex-col justify-center w-full p-3 px-9">
          <div className='flex flex-col gap-y-3'>
            <h1 className={`${bebas_neue.className} text-zinc-200 text-start text-2xl font-bold underline underline-offset-4`}>
              {messages2}
            </h1>
            <h1 className={`${bebas_neue.className} text-white text-5xl`}>
              {messages2other}
            </h1>
          </div>
        </div>
      </div>
      <div className="mt-10 w-full px-9">
        <Cardcomponent/>
      </div>

    </div>
  );
};

export default SecondModuleHome;