"use client";
import { bebas_neue, montserrat } from '@/fonts/font';
import React, { useState, useEffect, useRef } from 'react';
import { Check, Zap, Images, BookKey, BookDashed, MessagesSquare, FileText, Mail, NotebookPen, ChartColumn, FileSpreadsheet, ChartNoAxesCombined, MailCheck, ArrowDown } from 'lucide-react';
import { useIntlayer } from 'next-intlayer';

const Thirdcomponent = () => {
  const content = useIntlayer('thirdcomponent');

  // Extraire toutes les valeurs
  const scrollHere = content.scrollHere.value;
  const syncing = content.syncing.value;
  const encryptionActive = content.encryptionActive.value;
  const analyzing = content.analyzing.value;
  const generating = content.generating.value;
  const demoSyncPrompt = content.demoSyncPrompt.value;
  const demoVaultPrompt = content.demoVaultPrompt.value;
  const demoSearchPrompt = content.demoSearchPrompt.value;
  const demoOutputPrompt = content.demoOutputPrompt.value;
  const vaultEncryption = content.vaultEncryption.value;
  const vaultEncryptionValue = content.vaultEncryptionValue.value;
  const vaultKeys = content.vaultKeys.value;
  const vaultKeysValue = content.vaultKeysValue.value;
  const vaultIsolation = content.vaultIsolation.value;
  const vaultIsolationValue = content.vaultIsolationValue.value;
  const vaultAccess = content.vaultAccess.value;
  const vaultAccessValue = content.vaultAccessValue.value;
  const searchItem1Name = content.searchItem1Name.value;
  const searchItem1Result = content.searchItem1Result.value;
  const searchItem2Name = content.searchItem2Name.value;
  const searchItem2Result = content.searchItem2Result.value;
  const searchItem3Name = content.searchItem3Name.value;
  const searchItem3Result = content.searchItem3Result.value;
  const outputItem1 = content.outputItem1.value;
  const outputItem2 = content.outputItem2.value;
  const outputItem3 = content.outputItem3.value;
  const outputItem4 = content.outputItem4.value;
  const outputStatus = content.outputStatus.value;
  const card1Title = content.card1Title.value;
  const card1Description = content.card1Description.value;
  const card1Item1 = content.card1Item1.value;
  const card1Item2 = content.card1Item2.value;
  const card1Item3 = content.card1Item3.value;
  const card2Title = content.card2Title.value;
  const card2Description = content.card2Description.value;
  const card2Item1 = content.card2Item1.value;
  const card2Item2 = content.card2Item2.value;
  const card2Item3 = content.card2Item3.value;
  const card3Title = content.card3Title.value;
  const card3Description = content.card3Description.value;
  const card3Item1 = content.card3Item1.value;
  const card3Item2 = content.card3Item2.value;
  const card3Item3 = content.card3Item3.value;
  const card4Title = content.card4Title.value;
  const card4Description = content.card4Description.value;
  const card4Item1 = content.card4Item1.value;
  const card4Item2 = content.card4Item2.value;
  const card4Item3 = content.card4Item3.value;

  // Composants demo avec traductions
  const ConnectToolsDemo = () => (
    <div className="bg-[#1c1917] opacity-90 rounded-2xl p-5 w-full flex flex-col gap-4">
      <div className="bg-[#1c1917] border border-zinc-700 rounded-xl p-3 text-sm text-zinc-300 font-medium">
        {demoSyncPrompt}
      </div>
      <div className="flex items-center gap-2 text-zinc-400 text-xs">
        <Zap size={14} /><span>{syncing}</span>
      </div>
      <div className="flex flex-col gap-2">
        {[
          { id: "salesforce", name: "Salesforce", color: "#333", letter: "S" },
          { id: "hubspot", name: "HubSpot", color: "#333", letter: "H" },
          { id: "slack", name: "Slack", color: "#333", letter: "Sl" },
          { id: "notion", name: "Notion", color: "#333", letter: "N" },
        ].map((tool) => (
          <div key={tool.id} className="flex items-center justify-between bg-[#1c1917] border border-zinc-700 rounded-lg px-4 py-2.5">
            <div className="flex items-center gap-3">
              <div className="w-7 h-7 rounded-md flex items-center justify-center text-white text-xs font-bold" style={{ background: tool.color }}>
                {tool.letter}
              </div>
              <span className="text-zinc-300 text-sm">{tool.name}</span>
            </div>
            <Check size={14} className="text-zinc-400" />
          </div>
        ))}
      </div>
    </div>
  );

  const VaultDemo = () => (
    <div className="bg-[#1c1917] opacity-90 rounded-2xl p-5 w-full flex flex-col gap-4">
      <div className="bg-[#1c1917] rounded-xl p-3 text-sm border border-zinc-700 font-medium">
        {demoVaultPrompt}
      </div>
      <div className="flex items-center gap-2 text-zinc-400 text-xs">
        <Zap size={14} /><span>{encryptionActive}</span>
      </div>
      <div className="flex flex-col gap-2">
        {[
          { id: "encryption", label: vaultEncryption, value: vaultEncryptionValue, color: "text-zinc-400" },
          { id: "keys", label: vaultKeys, value: vaultKeysValue, color: "text-zinc-400" },
          { id: "isolation", label: vaultIsolation, value: vaultIsolationValue, color: "text-zinc-400" },
          { id: "access", label: vaultAccess, value: vaultAccessValue, color: "text-zinc-400" },
        ].map((row) => (
          <div key={row.id} className="flex items-center justify-between bg-[#1c1917] border border-zinc-700 rounded-lg px-4 py-2.5">
            <span className="text-zinc-400 text-sm">{row.label}</span>
            <span className={`text-sm font-medium ${row.color}`}>{row.value}</span>
          </div>
        ))}
      </div>
    </div>
  );

  const SearchDemo = () => (
    <div className="bg-[#1c1917] rounded-2xl p-5 w-full flex flex-col gap-4">
      <div className="bg-[#1c1917] border border-zinc-700 rounded-xl p-3 text-sm text-zinc-300 font-medium">
        {demoSearchPrompt}
      </div>
      <div className="flex items-center gap-2 text-zinc-400 text-xs">
        <Zap size={14} /><span>{analyzing}</span>
      </div>
      <div className="flex flex-col gap-2">
        {[
          { id: "pdf", type: <FileText color='gray' />, name: searchItem1Name, match: searchItem1Result },
          { id: "email", type: <Mail color='gray' />, name: searchItem2Name, match: searchItem2Result },
          { id: "notes", type: <NotebookPen color='gray' />, name: searchItem3Name, match: searchItem3Result },
        ].map((item) => (
          <div key={item.id} className="flex items-center justify-between bg-[#1c1917] border border-zinc-700 rounded-lg px-4 py-2.5">
            <div className="flex items-center gap-3">
              <span>{item.type}</span>
              <span className="text-zinc-300 text-sm">{item.name}</span>
            </div>
            <span className="text-zinc-400 text-xs">{item.match}</span>
          </div>
        ))}
      </div>
    </div>
  );

  const OutputsDemo = () => (
    <div className="bg-[#1c1917] rounded-2xl p-5 w-full flex flex-col gap-4">
      <div className="bg-[#1c1917] border border-zinc-700 rounded-xl p-3 text-sm text-zinc-300 font-medium">
        {demoOutputPrompt}
      </div>
      <div className="flex items-center gap-2 text-zinc-400 text-xs">
        <Zap size={14} /><span>{generating}</span>
      </div>
      <div className="flex flex-col gap-2">
        {[
          { id: "ppt", type: <ChartColumn color='gray' />, label: outputItem1, status: outputStatus },
          { id: "pdf", type: <FileSpreadsheet color='gray' />, label: outputItem2, status: outputStatus },
          { id: "excel", type: <ChartNoAxesCombined color='gray' />, label: outputItem3, status: outputStatus },
          { id: "email", type: <MailCheck color='gray' />, label: outputItem4, status: outputStatus },
        ].map((item) => (
          <div key={item.id} className="flex items-center justify-between bg-[#1c1917] border border-zinc-700 rounded-lg px-4 py-2.5">
            <div className="flex items-center gap-3">
              <span>{item.type}</span>
              <span className="text-zinc-300 text-sm">{item.label}</span>
            </div>
            <span className="text-zinc-400 text-xs">{item.status}</span>
          </div>
        ))}
      </div>
    </div>
  );

  const cards = [
    {
      id: "connect",
      icon: <Images />,
      title: card1Title,
      description: card1Description,
      items: [card1Item1, card1Item2, card1Item3],
      demo: <ConnectToolsDemo />,
    },
    {
      id: "vault",
      icon: <BookKey />,
      title: card2Title,
      description: card2Description,
      items: [card2Item1, card2Item2, card2Item3],
      demo: <VaultDemo />,
    },
    {
      id: "search",
      icon: <BookDashed />,
      title: card3Title,
      description: card3Description,
      items: [card3Item1, card3Item2, card3Item3],
      demo: <SearchDemo />,
    },
    {
      id: "outputs",
      icon: <MessagesSquare />,
      title: card4Title,
      description: card4Description,
      items: [card4Item1, card4Item2, card4Item3],
      demo: <OutputsDemo />,
    },
  ];

  const [activeCard, setActiveCard] = useState(0);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const leftRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const leftEl = leftRef.current;
    if (!leftEl) return;

    const handleScroll = () => {
      const scrollTop = leftEl.scrollTop;
      let accumulatedHeight = 0;
      let index = 0;
      
      for (let i = 0; i < cardRefs.current.length; i++) {
        const section = cardRefs.current[i];
        if (!section) continue;
        const sectionHeight = section.offsetHeight;
        if (scrollTop >= accumulatedHeight && scrollTop < accumulatedHeight + sectionHeight) {
          index = i;
          break;
        }
        accumulatedHeight += sectionHeight;
        if (i === cardRefs.current.length - 1) index = i;
      }
      setActiveCard(Math.min(index, cards.length - 1));
    };

    leftEl.addEventListener('scroll', handleScroll);
    return () => leftEl.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`w-full flex flex-row h-screen overflow-hidden ${montserrat.className}`}>
      <div
        ref={leftRef}
        className="w-1/2 h-full overflow-y-scroll no-scrollbar"
        style={{ scrollbarWidth: 'none' }}
      >
        <style>{`.no-scrollbar::-webkit-scrollbar { display: none; }`}</style>
        <p className="px-15 flex items-center">
          {scrollHere}
          <span><ArrowDown /></span>
        </p>
        {cards.map((card, index) => (
          <div
            key={card.id}
            ref={el => { cardRefs.current[index] = el; }}
            className="min-h-[80vh] flex flex-col justify-center px-16 py-10"
          >
            <div className="flex items-center gap-x-3 mb-4">
              <span className="text-2xl">{card.icon}</span>
              <h3 className={`text-white text-4xl ${bebas_neue.className}`}>
                {card.title}
              </h3>
            </div>
            <p className="text-zinc-400 text-sm leading-relaxed mb-6">
              {card.description}
            </p>
            <div className="flex flex-col gap-3">
              {card.items.map((item, i) => (
                <div key={`${card.id}-item-${i}`} className="flex items-start gap-3">
                  <Check size={15} className="text-zinc-400 mt-0.5 shrink-0" />
                  <span className="text-zinc-300 text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="w-1/2 h-screen flex items-center justify-center px-10">
        <div className="w-full transition-all duration-500 ease-in-out">
          {cards[activeCard].demo}
        </div>
      </div>
      <hr className="border border-zinc-800 opacity-90" />
    </div>
  );
};

export default Thirdcomponent;