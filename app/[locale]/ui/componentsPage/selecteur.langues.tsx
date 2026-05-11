"use client"
import React, { useEffect, useRef } from 'react'
import { useState } from 'react';
import Image from 'next/image';
interface SelectLanguageProps {
  index: number;
  name: string;
  value: string;
}

interface SelectContinentProps {
  name: string;
  pays: SelectLanguageProps[];
}

const Select_Continent: SelectContinentProps[] = [
  {
    name: "Afrique",
    pays: [
      { index: 1, name: "Anglais", value: "en-Uk" },
      { index: 2, name: "Français", value: "fr" },
      { index: 3, name: "Espaniol", value: "es" },
      { index: 4, name: "العربية", value: "ar" },
    ]
  },
  {
    name: "Amerique",
    pays: [
      { index: 5, name: "Anglais", value: "en-US" },
      { index: 6, name: "Français-Quebec", value: "fr-CA" },
      { index: 7, name: "Espanol", value: "es" },
      { index: 8, name: "Português", value: "pt" },
    ]
  },
  {
    name: "Asie",
    pays: [
      { index: 9, name: "中文 (Traditionnel)", value: "zh-TW" },
      { index: 10, name: "中文 (Simplifié)", value: "zh-CN" },
      { index: 11, name: "한국어", value: "ko" },
      { index: 12, name: "日本語", value: "ja" },
      { index: 13, name: "Русский", value: "ru" },
      { index: 14, name: "हिन्दी", value: "hi" },
      { index: 15, name: "العربية", value: "ar" },
    ]
  },
  {
    name: "Europe",
    pays: [
      { index: 16, name: "Anglais", value: "en-UK" },
      { index: 17, name: "Français", value: "fr-Fr" },
      { index: 18, name: "Español", value: "es" },
      { index: 19, name: "Deutsch", value: "de" },
      { index: 20, name: "Italiano", value: "it" },
    ]
  },
]

const SelectorLanguage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState(`Langues`);
   const dropdownRef = useRef<HTMLDivElement>(null); 

   useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
            setIsOpen(false);
        }
    }

    document.addEventListener('mousedown', handleClickOutside);
    
    return () => {
        document.removeEventListener('mousedown', handleClickOutside);
    };
}, []);
  const handleSelect = (languageName: string, value: string, ) => {
    setSelectedLang(languageName);

    setIsOpen(false);
    console.log(languageName, value,);
  }

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={` text-white rounded-lg p-2 text-sm focus:outline-none cursor-pointer flex items-center justify-center  w-full md:w-32 transition-colors font-semibold  border border-neutral-950 ${isOpen? "border-purple-500":"hover:border-purple-500"}`}
        style={{
          borderRadius:"10px",
        }}
      >
        <span className="">
          {selectedLang}
        </span>
        <svg
          className={`w-4 h-4 ml-2 transition-transform ${isOpen ? "rotate-180" : ""}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute top-full  pt-2 pb-2 left-0 mt-2 w-full md:w-64 bg-neutral-950/80 backdrop-blur-md  rounded-md shadow-lg z-50 max-h-96 overflow-y-auto">
          <div
            onClick={() => handleSelect("Langues", "")}
            className="p-3 text-gray-300  cursor-pointer border-b border-neutral-700"
          >
            Sélectionnez une langue
          </div>

          {Select_Continent.map((continent) => (
            <div
              key={continent.name}
              onClick={()=>handleSelect(continent.name, "")}
              className="border-b border-neutral-700 last:border-b-0"
            >
              <div className="p-2 px-3 bg-neutral-800 text-gray-300 text-xs font-semibold uppercase tracking-wider">
                {continent.name}
              </div>

              {continent.pays.map((language) => (
                <div
                  key={`${continent.name}-${language.index}`} 
                  onClick={() => handleSelect(language.name, language.value)}
                  className="p-2 px-6 text-white hover:bg-purple-950 hover:rounded-lg cursor-pointer flex items-center transition-colors"
                >
                  <span className="flex-1">{language.name}</span>
                  <span className="text-xs text-gray-400 bg-neutral-800 px-2 py-1 rounded">
                    {language.value}
                  </span>
                </div>
              ))}
            </div>
          ))}
        </div>
      )}

      {isOpen && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}
    </div>
  )
}

export default SelectorLanguage;