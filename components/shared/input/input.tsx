'use client';
import React from 'react';
import {useState} from "react";
import { ArrowUp } from 'lucide-react';
import { montserrat } from '@/fonts/font';

const Inputcomponents = () => {
const [inputValue, setInputValue]=useState('');
const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputValue(e.target.value);
};
  return (
   <div className={`relative ${montserrat.className}`}>
  <textarea
        value={inputValue}
        onChange={handleInputChange}
        placeholder={"Comment puis-je vous aider très chère ?"}
        className={`bg-pink-600/10 backdrop-blur-xl rounded-lg p-5 w-190 h-30 pr-20 text-white font-bold focus:outline-none resize-none`}
        style={{
            borderRadius: "30px",
            border: "1px solid #4b004f"
        }}
    />
     <div className="absolute right-3 bottom-5">
     <button 
            disabled={inputValue.trim() === ''}
            className={`flex items-center justify-center px-2 py-2 rounded-full transition-colors duration-200
                ${inputValue.trim() !== '' 
                    ? 'bg-purple-900 cursor-pointer' 
                    : 'bg-zinc-700 cursor-not-allowed opacity-50'
                }
            `}
        >
            <ArrowUp size={20} color="#fff" />
        </button>
     </div>
</div>
  )
}

export default Inputcomponents