"use client";
import React from 'react';
import { bebas_neue, montserrat } from '@/fonts/font';
import CircularGallery from '@/animate/circularGallery/CircularGallery';
import { useRouter } from 'next/navigation';
import { useIntlayer } from "next-intlayer";
const Fourhome = () => {
  const {messages8, messages8other,messages9,messages10,messages11,messages12,messages13,messages14,messages15,messages16,messages17,messages18,messages19,messages88} = useIntlayer('page');
  const router=useRouter();
  return (
    <div className='w-full min-h-screen flex flex-col justify-center items-center gap-y-5 p-10 border-b border-b-zinc-300'>
      
      <div className="flex flex-col items-center justify-center gap-y-5 mt-10">
        <h1 className={`${bebas_neue.className} text-3xl font-normal text-white text-center`}>
         {messages8}
        </h1>
        <p className={`${montserrat.className} text-xl font-normal text-zinc-300 text-center`}>
         {messages88}.{' '}
          <span className={`text-white text-6xl opacity-90 ${bebas_neue.className}`}>
            {messages8other}
          </span>
        </p>
      </div>

      <div className="w-full" style={{ height: '600px', position: 'relative' }}>
        <CircularGallery
          items={[
            { image: '/assets/images/circular_marchand.jpeg',    text: messages11.value    },
            { image: '/assets/images/circular_medical.jpeg',     text: messages9.value     },
            { image: '/assets/images/circular_software.jpeg',     text: messages12.value   },
            { image: '/assets/images/circular_strongwoman.jpeg', text: messages17.value },
            { image: '/assets/images/circular_avocate.jpeg',     text: messages16.value     },
            { image: '/assets/images/circular_enseignante.jpeg', text:  messages13.value  },
            { image: '/assets/images/circular_entrepreneur.jpeg',text: messages15.value},
            { image: '/assets/images/circular_etudiante.jpeg',   text: messages14.value},
            { image: '/assets/images/circular_lyceenne.jpeg',    text:    messages13.value},
          ]}
          bend={1}
          textColor="#ffffff"
          borderRadius={0.05}
          scrollSpeed={2}
          scrollEase={0.05}
        />
      </div>
      <button 
          onClick={() =>router.push('/login')}
          className={`px-8 py-1.5 text-xl text-white border border-zinc-100 rounded-full hover:bg-neutral-800 transition-all cursor-pointer duration-200 ${bebas_neue.className}`}>
             {messages19}
          </button>
    </div>
  );
};

export default Fourhome;