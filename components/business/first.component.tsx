"use client";
import { bebas_neue } from '@/fonts/font';
import React from 'react'
import FenasiusChatDemo from '@/components/business/ui/fenasius.component';
import { GoArrowUpRight } from "react-icons/go";
import { GoCheck } from "react-icons/go";
import { useIntlayer } from "next-intlayer";

const FirstcomponentPage = () => {
  const { heroTitle, heroDescription, heroCta1, heroCta2, heroBadge } = useIntlayer('firstcomponent');

  return (
    <div className='h-full min-h-screen w-full px-15 flex items-center justify-center'>
      <div className={`flex flex-col w-1/2`}>
        <h1 className={`${bebas_neue.className} w-100 text-white font-bold text-5xl mb-2`}>
          {heroTitle}
        </h1>
        <p className={`text-zinc-400 text-xl w-110`}>
          {heroDescription}
        </p>
        <div className="flex mt-5 gap-x-5">
          <button className="flex bg-white hover:bg-zinc-400 hover:border-zinc-400 transition-all ease-in-out duration-300 px-5 border-2 rounded-full py-2 cursor-pointer text-black items-center justify-center gap-x-2">
            {heroCta1}
            <span>
              <GoArrowUpRight />
            </span>
          </button>
          <button className="flex border text-white border-white hover:bg-neutral-800 hover:border-zinc-400 transition-all ease-in-out duration-300 px-5 rounded-full py-2 cursor-pointer items-center justify-center gap-x-2">
            {heroCta2}
          </button>
        </div>
        <p className='text-zinc-400 flex items-center text-sm mt-5'>
          <span className="mr-2 flex items-center">
            <GoCheck color='white' />
          </span>
          {heroBadge}
        </p>
      </div>
      <div className="flex-1 flex-col w-1/2">
        <FenasiusChatDemo />
      </div>
    </div>
  )
}

export default FirstcomponentPage