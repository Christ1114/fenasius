"use client";
import { bebas_neue, montserrat, orbitron } from '@/fonts/font'
import Image from "next/image";
import Bg from '@/public/assets/images/background.webp';
import Logo from '@/public/assets/logo/logo1.png';
import InputChatComponents from '@/components/shared/input/inputChat';
import { useIntlayer } from "next-intlayer";
import Link from 'next/link';

const MainInterface = () => {
  const { btn1, btn2, messages8, messages8other, messages9, messages82 } = useIntlayer('fenasius');

  return (
    <div className={`relative w-full min-h-screen flex flex-col items-center justify-between ${bebas_neue.className}`}>
      <div className="absolute inset-0 -z-10">
        <Image
          src={Bg}
          alt="background"
          fill
          priority
          className='opacity-100 brightness-30'
        />
      </div>

      <header className="w-full flex items-center justify-between px-5">
        <Image
          src={Logo}
          alt="logo"
          width={400}
          height={300}
          priority
          className="h-15 w-auto z-50 shadow-2xl"
        />
        <div className="flex items-center justify-center gap-x-5 p-5">
          <button className='bg-white/10 text-white p-2 h-10 w-35 flex items-center justify-center backdrop-blur-3xl border border-zinc-100 rounded-full hover:bg-pink-800/30 transition-all cursor-pointer duration-200 text-sm'>
            {btn1.value}
          </button>
          <button className='bg-white/10 text-white p-2 h-10 w-35 flex items-center justify-center backdrop-blur-3xl border border-zinc-100 rounded-full hover:bg-pink-800/30 transition-all cursor-pointer duration-200 text-sm'>
            {btn2.value}
          </button>
        </div>
      </header>

      <main className='w-full flex flex-col gap-y-5 items-center justify-start -translate-y-20'>
        <div className="flex items-center justify-center -translate-x-10">
          <Image
            src={Logo}
            alt="logo"
            width={500}
            height={500}
            priority
            className="h-20 w-auto z-50 shadow-2xl"
          />
          <p className={`text-white text-4xl font-bold ${orbitron.className} antialiased`}>FENASIUS</p>
        </div>

        <div className="w-3/4 px-20">
          <InputChatComponents />
        </div>
      </main>

      <footer className='w-full flex items-center justify-center pb-5'>
        <p className={`text-center text-pink-300/40 text-xs font-bold ${montserrat.className}`}>
          {messages8.value}{' '}
          <span className="text-pink-300/70">
            <Link
              href="/terms-of-service"
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer hover:underline"
            >
              {messages8other.value}
            </Link>
          </span>
          {' '}{messages82.value}{' '}
          <span className="text-pink-300/70">
            <Link
              href="/privacy-policy"
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer hover:underline"
            >
              {messages9.value}
            </Link>
          </span>.
        </p>
      </footer>
    </div>
  );
};

export default MainInterface;