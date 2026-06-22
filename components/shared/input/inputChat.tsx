'use client';
import React, { useState, useRef, useEffect } from 'react';
import { ArrowUp, Plus, Mic, ChevronDown, ChevronUp, Check, Zap, Sparkles, Brain, Users, FileUp, Clock, ChevronRight } from 'lucide-react';
import { bebas_neue, montserrat } from '@/fonts/font';
import { useIntlayer } from "next-intlayer";

type Mode = {
  id: string;
  label: string;
  description: string;
  icon: React.ReactNode;
}

const InputChatComponents = () => {
  const { 
    messages,
    messages1,
    messages2,
    messages3,
    messages3other,
    messages4,
    messages4other,
    messages5,
    messages5other,
    messages6,
    messages6other,
    messages7,
    messages7other,
    messages8,
    messages82,
    messages8other,
    messages9,
    btn3,
  } = useIntlayer('fenasius');

  const MODES: Mode[] = [
    { id: 'fast',   label: messages3.value,   description: messages3other.value,  icon: <Zap size={16} /> },
    { id: 'auto',   label: messages4.value,   description: messages4other.value,  icon: <Sparkles size={16} /> },
    { id: 'expert', label: messages5.value,   description: messages5other.value,  icon: <Brain size={16} /> },
    { id: 'heavy',  label: messages6.value,   description: messages6other.value,  icon: <Users size={16} /> },
  ];

  const [inputValue, setInputValue] = useState('');
  const [modeOpen, setModeOpen] = useState(false);
  const [plusOpen, setPlusOpen] = useState(false);
  const [selectedMode, setSelectedMode] = useState<Mode>(MODES[0]);

  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const modeRef = useRef<HTMLDivElement>(null);
  const plusRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  }, [inputValue]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (modeRef.current && !modeRef.current.contains(e.target as Node)) setModeOpen(false);
      if (plusRef.current && !plusRef.current.contains(e.target as Node)) setPlusOpen(false);
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleMic = async () => {
    try {
      await navigator.mediaDevices.getUserMedia({ audio: true });
    } catch {
      console.error('Permission micro refusée.');
    }
  };

  return (
    <div className={`w-full ${montserrat.className}`}>
      <div className="flex items-end gap-x-3 bg-pink-600/10 backdrop-blur-xl px-5 py-4 rounded-full border border-[#4b004f] shadow-xl relative">

        <div className="relative shrink-0 flex items-center justify-center" ref={plusRef}>
          <button
            onClick={() => setPlusOpen(!plusOpen)}
            className="text-pink-300 hover:text-white transition-colors -translate-y-2 duration-200 mb-0.5 cursor-pointer"
          >
            <Plus size={20} />
          </button>

          {plusOpen && (
            <div className={`absolute left-0 bottom-10 bg-white/90 border rounded-xl shadow-xl w-52 z-50 overflow-hidden ${bebas_neue.className}`}>
              <button className="flex items-center gap-x-3 w-full px-4 py-3 text-black text-sm hover:bg-pink-800/90 transition-colors cursor-pointer">
                <FileUp size={16} color='black' />
                {messages1.value}
              </button>
              <button className="flex items-center justify-between w-full px-4 py-3 text-black hover:bg-pink-800/90 text-sm transition-colors cursor-pointer">
                <div className="flex items-center gap-x-3">
                  <Clock size={16} color='black' />
                  {messages2.value}
                </div>
                <ChevronRight size={14} color='black' />
              </button>
            </div>
          )}
        </div>

        <textarea
          ref={textareaRef}
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter' && !e.shiftKey) {
              e.preventDefault();
            }
          }}
          placeholder={messages.value}
          rows={1}
          className="flex-1 min-w-0 bg-transparent -translate-y-2 text-white text-sm placeholder-pink-300/50 font-bold focus:outline-none resize-none overflow-y-auto leading-6"
        />

        <div className="flex items-center gap-x-2 shrink-0">
          <div className="relative" ref={modeRef}>
            <button
              onClick={() => setModeOpen(!modeOpen)}
              className="flex items-center gap-x-1 text-pink-300 hover:text-white text-sm transition-colors duration-200 cursor-pointer"
            >
              {selectedMode.label}
              {modeOpen ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
            </button>

            {modeOpen && (
              <div className={`absolute right-0 top-12 bg-white/90 border rounded-xl shadow-xl w-80 z-50 overflow-hidden ${bebas_neue.className}`}>
                {MODES.map((mode) => (
                  <button
                    key={mode.id}
                    onClick={() => { setSelectedMode(mode); setModeOpen(false); }}
                    className="flex items-center justify-between w-full px-4 py-1 hover:bg-pink-800/90 transition-colors cursor-pointer"
                  >
                    <div className="flex items-center gap-x-3">
                      <span className="text-black-400">{mode.icon}</span>
                      <div className="text-left">
                        <p className="text-black text-sm font-medium">{mode.label}</p>
                        <p className="text-black text-xs">{mode.description}</p>
                      </div>
                    </div>
                    {selectedMode.id === mode.id && <Check size={16} className="text-pink-400" />}
                  </button>
                ))}

                <div className="flex items-center justify-between px-4 py-3 bg-white border-t border-zinc-700">
                  <div>
                    <p className="text-black text-sm font-semibold">{messages7.value}</p>
                    <p className="text-black text-xs">{messages7other.value}</p>
                  </div>
                  <button className="text-sm bg-pink-900/90 shadow-2xl hover:bg-pink-950 cursor-pointer h-9 w-30 text-white px-3 py-1 rounded-full font-medium transition-colors">
                    {btn3.value}
                  </button>
                </div>
              </div>
            )}
          </div>

          <button
            onClick={handleMic}
            className="text-pink-300 hover:text-white transition-colors duration-200 cursor-pointer"
          >
            <Mic size={20} />
          </button>

          <button
            disabled={inputValue.trim() === ''}
            className={`flex items-center justify-center p-2 rounded-full transition-colors duration-200
              ${inputValue.trim() !== ''
                ? 'bg-purple-900 cursor-pointer hover:bg-purple-800'
                : 'bg-zinc-700 cursor-not-allowed opacity-40'
              }
            `}
          >
            <ArrowUp size={18} color="#fff" />
          </button>
        </div>
      </div>

      
    </div>
  );
};

export default InputChatComponents;