"use client";
import React from 'react';
import { bebas_neue, montserrat } from '@/fonts/font';
import { ArrowUpRight } from 'lucide-react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { useIntlayer } from "next-intlayer";

const Cardcomponent = () => {
    const router = useRouter();
    const { 
        messages3, 
        messages3other, 
        messages4, 
        Messages4other, 
        messages5, 
        messages5other ,
        btn1,
        btn2,
        btn3,
    } = useIntlayer('page');

    const cards = [
        {
            title: messages3.value,
            description: messages3other.value,  
            cta:btn1.value,
            href: "/fenasius",
            illustration: "/assets/images/ull_fenasius_bg.svg",
        },
        {
            title: messages4.value,
            description: Messages4other.value,
            cta: btn2.value,
            href: "/fenasius/government",
            illustration: "/assets/images/illustration_datacenter.svg"
        },
        {
            title: messages5.value,
            description: messages5other.value,
            cta: btn3.value,
            href: "/fenasius/careers/social",
            illustration: "/assets/images/illustration_social.svg"
        }
    ];

    return (
        <div className='w-full h-full'>
            <div className="grid grid-cols-3 gap-4 max-w-7xl mx-auto h-full">
                {cards.map((card, index) => (
                    <div
                        key={index}
                        className="relative flex flex-col justify-between border-l border-l-purple-500 p-8 min-h-[600px] overflow-hidden group"
                    >
                        <div className="flex flex-col gap-y-4">
                            <h2 className={`text-white text-3xl ${bebas_neue.className}`}>
                                {card.title}
                            </h2>
                            <p className={`text-zinc-400 group-hover:text-white transition-colors duration-300 text-sm font-bold leading-relaxed ${montserrat.className}`}>
                                {card.description}
                            </p>
                        </div>

                        <div className="flex-1 flex items-center justify-center my-8 overflow-hidden">
                            {card.illustration && (
                                <Image
                                    src={card.illustration}
                                    alt="Illustration"
                                    width={900}
                                    height={900}
                                    priority
                                    className='w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110'
                                />
                            )}
                        </div>

                        <button
                            onClick={() => router.push(card.href)}
                            className={`flex items-center justify-center gap-2 self-center px-5 py-2 border border-zinc-600 rounded-full text-white text-xl cursor-pointer hover:bg-zinc-800 transition-all duration-200 ${bebas_neue.className}`}
                        >
                            {card.cta}
                            <ArrowUpRight size={16} />
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Cardcomponent;