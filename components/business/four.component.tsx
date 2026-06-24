"use client";
import { bebas_neue, orbitron } from '@/fonts/font';
import { Building2 } from 'lucide-react';
import React from 'react';
import { useIntlayer } from 'next-intlayer';

const Fourcomponent = () => {
  const content = useIntlayer('fourcomponent');

  const pricingTitle = content.pricingTitle.value;
  const individualsTitle = content.individualsTitle.value;
  const individualsDescription = content.individualsDescription.value;
  const individualsPrice = content.individualsPrice.value;
  const individualsPeriod = content.individualsPeriod.value;
  const individualsCta = content.individualsCta.value;
  const enterpriseTitle = content.enterpriseTitle.value;
  const enterpriseDescription = content.enterpriseDescription.value;
  const enterprisePrice = content.enterprisePrice.value;
  const enterpriseCta = content.enterpriseCta.value;

  return (
    <div className='w-full bg-pink-950/50 h-full flex py-16 gap-y-10 px-15'>
      <div className="bg-pink-950/10 flex items-start justify-between gap-x-5 px-15 w-full">
        
       
        <div className="w-1/3">
          <h3 className={`${bebas_neue.className} text-3xl text-white`}>{pricingTitle}</h3>
        </div>


        <div className="w-1/3 flex-col flex">
          <h3 className={`${bebas_neue.className} text-3xl text-white`}>{individualsTitle}</h3>
          <p className="text-zinc-400 text-sm mt-2">{individualsDescription}</p>
          <p className="mb-10 mt-4">
            <span className={`${orbitron.className} font-bold text-white`}>{individualsPrice}</span>
            <span className="text-gray-400"> {individualsPeriod}</span>
          </p>
          <div className="flex flex-col">
            <button className="flex bg-white hover:bg-zinc-400 hover:border-zinc-400 transition-all ease-in-out duration-300 px-5 border-2 rounded-full py-2 cursor-pointer text-black items-center justify-center gap-x-2">
              {individualsCta}
            </button>
          </div>
        </div>

       
        <div className="w-1/3 flex-col flex">
          <h3 className={`${bebas_neue.className} text-3xl text-white`}>{enterpriseTitle}</h3>
          <p className="text-zinc-400 text-sm mt-2">{enterpriseDescription}</p>
          <p className="mb-5 mt-4">
            <span className={`${orbitron.className} font-bold text-white`}>{enterprisePrice}</span>
          </p>
          <div className="flex flex-col">
            <button className="flex border text-white border-white hover:bg-neutral-800 hover:border-zinc-400 transition-all ease-in-out duration-300 px-5 rounded-full py-2 cursor-pointer items-center justify-center gap-x-2">
              <Building2 size={18} />
              {enterpriseCta}
            </button>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Fourcomponent;