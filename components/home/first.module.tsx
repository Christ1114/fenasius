"use client"
import React from 'react';
import TrueFocus from '@/animate/textFocus/TrueFocus';
import { bebas_neue, montserrat } from '@/fonts/font';
import Inputcomponents from '@/components/shared/input/input';
import SoftAurora from '@/animate/animateBg/animateBg';
import { MoveDown } from 'lucide-react';
import { useRouter } from 'next/navigation';

const FirstModuleHome = () => {
   const router = useRouter();
  return (
    <div className={`relative w-full min-h-screen flex flex-col  justify-center border-b p-5 border-b-zinc-600 ${bebas_neue.className}`}>
      <div className="absolute  inset-0 z-0">
        <SoftAurora
          speed={0.6}
          scale={1}
          brightness={1}
          color1="#f7f7f7"
          color2="#e100ff"
          noiseFrequency={2.5}
          noiseAmplitude={5.5}
          bandHeight={0.5}
          bandSpread={1}
          octaveDecay={0.1}
          layerOffset={0}
          colorSpeed={1}
          enableMouseInteraction
          mouseInfluence={0}
        />
      </div>
      <div className="relative z-10 flex flex-col items-center justify-center gap-y-5">
        <TrueFocus 
          sentence="Prédisez Anticipez"
          manualMode={false}
          blurAmount={5}
          borderColor="#4b004f"
          animationDuration={1}
          pauseBetweenAnimations={1} 
        />
        <h1 className="text-9xl font-bold text-white">votre santé menstruelle</h1>
        <Inputcomponents/>
      </div>
      <div className="flex items-center justify-between p-10 translate-y-10">
        <div className="">
        <MoveDown size={25}  color="#fff" aria-label="Défiler vers le bas" />
        </div>
        <div className="flex items-center justify-between">
          <p className={`text-xs text-zinc-400 w-110 font-semibold ${montserrat.className}`} >
          Vous pouvez désormais importer les résultats du calendrier menstruel d'autres applications sur Fenasius.
          </p>
          <button 
          onClick={() =>router.push('/fenasius/read-articles')}
          className={`px-5 py-1.5 text-xl text-white border border-zinc-100 rounded-full hover:bg-neutral-800 transition-all cursor-pointer duration-200 ${bebas_neue.className}`}>
             ARTICLES À LIRE
          </button>
        </div>
      </div>
    </div>
  )
}

export default FirstModuleHome;