"use client";
import { bebas_neue } from '@/fonts/font'
import { KeyRound, LockKeyhole } from 'lucide-react';
import React from 'react';
import { useIntlayer } from 'next-intlayer';

type Card = {
  id: number;
  title: string;
  description: string;
  illustration: React.ReactNode;
}

const VaultIllustration = () => (
  <svg viewBox="0 0 400 220" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse">
        <rect width="48" height="48" x="1" y="1" rx="6" fill="none" stroke="#3f3f46" strokeWidth="1"/>
      </pattern>
    </defs>
    <rect width="400" height="220" fill="url(#grid)" />
  
    {[
      [75,35],[125,35],[175,35],[225,35],[275,35],[325,35],
      [75,85],[125,85],[225,85],[275,85],[325,85],
      [75,135],[125,135],[175,135],[225,135],[275,135],[325,135],
      [75,185],[125,185],[175,185],[225,185],[275,185],[325,185],
    ].map(([x,y], i) => (
      <foreignObject key={i} x={x-10} y={y-20} width="24" height="24">
        <LockKeyhole color='#52525b' />
      </foreignObject>
    ))}
   
    <foreignObject x={165} y={65} width="24" height="24"><KeyRound /></foreignObject>
  
    <circle cx="175" cy="79" r="30" fill="none" stroke="#a3004c" strokeWidth="1" opacity="0.9"/>
    <circle cx="175" cy="79" r="45" fill="none" stroke="#a3004c" strokeWidth="0.5" opacity="1"/>
  </svg>
)

const SearchIllustration = () => (
  <svg viewBox="0 0 400 220" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
    <rect width="400" height="230" fill="#1c1917" />
   
    {[
      { x: 40,  y: 30,  color: "#3b82f6", letter: "A" },
      { x: 100, y: 30,  color: "#8b5cf6", letter: "S" },
      { x: 160, y: 30,  color: "#111827", letter: "✕" },
      { x: 220, y: 30,  color: "#1f2937", letter: "⊞" },
      { x: 280, y: 30,  color: "#374151", letter: "●" },
      { x: 340, y: 30,  color: "#1d4ed8", letter: "SF" },

      { x: 40,  y: 95,  color: "#1e40af", letter: "G" },
      { x: 100, y: 95,  color: "#16a34a", letter: "✦" },
      { x: 160, y: 95,  color: "#ca8a04", letter: "★" },
      { x: 220, y: 95,  color: "#7c3aed", letter: "W" },
      { x: 280, y: 95,  color: "#111827", letter: "C" },
      { x: 340, y: 95,  color: "#15803d", letter: "⚡" },

      { x: 40,  y: 160, color: "#0ea5e9", letter: "N" },
      { x: 100, y: 160, color: "#f97316", letter: "◈" },
      { x: 160, y: 160, color: "#dc2626", letter: "M" },
      { x: 220, y: 160, color: "#0891b2", letter: "G" },
      { x: 280, y: 160, color: "#7c3aed", letter: "✦" },
      { x: 340, y: 160, color: "#1d4ed8", letter: "S" },
    ].map(({ x, y, color, letter }, i) => (
      <g key={i}>
        <rect x={x - 22} y={y - 22} width="44" height="44" rx="10" fill={color} />
        <text x={x} y={y + 6} textAnchor="middle" fontSize="14" fill="white" fontWeight="bold">{letter}</text>
      </g>
    ))}
  </svg>
)

const SpreadsheetIllustration = () => (
  <svg viewBox="0 0 400 220" className="w-full h-full opacity-90" xmlns="http://www.w3.org/2000/svg">
    <rect width="400" height="230" fill="#1c1917" />
   
    <rect x="20" y="15" width="360" height="30" rx="6" fill="#27272a" />
    <circle cx="38" cy="30" r="5" fill="#ef4444" />
    <circle cx="54" cy="30" r="5" fill="#eab308" />
    <circle cx="70" cy="30" r="5" fill="#22c55e" />
    
    {['', 'A', 'B', 'C', 'D'].map((col, i) => (
      <g key={i}>
        <rect x={20 + i * 76} y={55} width="76" height="24" fill="#27272a" />
        <text x={20 + i * 76 + 38} y={71} textAnchor="middle" fontSize="11" fill="#71717a">{col}</text>
      </g>
    ))}
   
    {[
      ['1', 'Revenue',      '$1.2M', '$1.5M', '$2.02M', true],
      ['2', 'COGS',         '$520K', '$610K', '$720K',  false],
      ['3', 'OpEx',         '$180K', '$210K', '$240K',  false],
      ['4', 'Gross profit', '$680K', '$890K', '$1.30M', false],
    ].map(([num, label, a, b, c, highlight], rowIdx) => (
      <g key={rowIdx as number}>
        {[num, label, a, b, c].map((cell, colIdx) => (
          <g key={colIdx}>
            <rect
              x={20 + colIdx * 76} y={79 + (rowIdx as number) * 28}
              width="76" height="28"
              fill={highlight && colIdx === 4 ? '#14532d' : '#18181b'}
              stroke="#27272a" strokeWidth="0.5"
            />
            <text
              x={20 + colIdx * 76 + (colIdx === 0 ? 38 : colIdx === 1 ? 8 : 38)}
              y={79 + (rowIdx as number) * 28 + 18}
              textAnchor={colIdx === 1 ? 'start' : 'middle'}
              fontSize="11"
              fill={highlight && colIdx === 4 ? '#4ade80' : colIdx === 0 ? '#71717a' : '#e4e4e7'}
            >
              {cell as string}
            </text>
          </g>
        ))}
      </g>
    ))}
  </svg>
)

const Secondcomponent = () => {
  const content = useIntlayer('secondcomponent');

  const sectionLabel = content.sectionLabel.value;
  const sectionTitle = content.sectionTitle.value;
  const sectionDescription = content.sectionDescription.value;
  const card1Title = content.card1Title.value;
  const card1Description = content.card1Description.value;
  const card2Title = content.card2Title.value;
  const card2Description = content.card2Description.value;
  const card3Title = content.card3Title.value;
  const card3Description = content.card3Description.value;

  const cards: Card[] = [
    {
      id: 1,
      title: card1Title,
      description: card1Description,
      illustration: <VaultIllustration />
    },
    {
      id: 2,
      title: card2Title,
      description: card2Description,
      illustration: <SearchIllustration />
    },
    {
      id: 3,
      title: card3Title,
      description: card3Description,
      illustration: <SpreadsheetIllustration />
    },
  ]

  return (
    <div className='w-full min-h-screen px-[60px] py-16 flex flex-col gap-y-10'>

      <div className="w-full flex flex-col gap-y-4">
        <h6 className="text-zinc-500 text-sm uppercase tracking-widest">
          {sectionLabel}
        </h6>
        <div className="flex items-start justify-between gap-10">
          <h2 className={`${bebas_neue.className} text-5xl font-bold text-white w-1/2 leading-tight`}>
            {sectionTitle}
          </h2>
          <p className="text-zinc-400 text-lg w-1/2 pt-2">
            {sectionDescription}
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {cards.map((card) => (
          <div
            key={card.id}
            className={`flex flex-col justify-between opacity-90 rounded-2xl overflow-hidden border border-zinc-800 min-h-[400px]`}
            style={{
              background:"#1c1917"
            }}
          >
            <div className="flex flex-col gap-y-3 p-6">
              <h3 className={`${bebas_neue.className} text-xl font-bold text-white`}>
                {card.title}
              </h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                {card.description}
              </p>
            </div>

            <div className="w-full overflow-hidden rounded-b-2xl">
              {card.illustration}
            </div>
          </div>
        ))}
      </div>

    </div>
  )
}

export default Secondcomponent