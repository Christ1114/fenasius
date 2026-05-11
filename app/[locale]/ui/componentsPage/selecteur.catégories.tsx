"use client"
import React, { useEffect, useRef } from 'react';
import {useState} from "react";
import Image from "next/image";

interface SelectMode {
    name:string;
    icon?:string;
}

const selectModes:SelectMode[]=[
    {
        name:"Personnes âgées", 
    },
    {
        name:"Enfants",icon:"/icons/icon_kids_94x94.png",
    }
]

const CategorieSelector= () => {
    const [isOpen , setIsOpen]=useState(false);
    const [selectCatg, setSelectCatg]=useState("Catégories");
    const dropdownRef=useRef<HTMLDivElement>(null);


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

const handleSelect = (CategorieName: string ) => {
     setSelectCatg(CategorieName);
    
        setIsOpen(false);
        console.log(CategorieName);
      }
    
  return (
    <div className="relative" ref={dropdownRef}>
        <button 
        onClick={()=>setIsOpen(!isOpen)}
        className={`bg-neutral-950/90  text-white rounded-md p-2 px-4 text-sm focus:outline-none cursor-pointer flex items-center justify-between w-full md:w-32  transition-colors font-semibold  border border-neutral-950 ${isOpen? "border-purple-500":"hover:border-purple-500"} `}>
      <span className="">
        {selectCatg}
      </span>
      <svg
         className={`w-4 h-4 ml-2 transition-transform ${isOpen? "rotate-180": "*:"}`}
         fill= "none"
         stroke="currentColor"
         viewBox="0 0 24 24 "
        >
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7"/>
        </svg>
        </button>

      {isOpen && (
        <div className="absolute top-full pt-2 pb-2 left-0 mt-3 w-full md:w-64 bg-neutral-950/80  rounded-md shadow-lg z-50 max-h-96 overflow-y-auto backdrop-blur-md">
          <div
            onClick={() => handleSelect("Catégories")}
            className="p-3 text-gray-300 cursor-pointer  border-b border-neutral-700"
          >
            Sélectionnez une catégorie
          </div>
        
        {selectModes.map((categorie)=>(
            <div 
            key={categorie.name}
            onClick={()=>handleSelect(categorie.name)}
            className="cursor-pointer hover:bg-purple-950 hover:rounded-md">
                <div className="p-2 px-3   text-gray-300 text-sm  font-bold  tracking-wider flex flex-row items-center justify-between">
                    {categorie.name}
                    {
                        categorie.icon ? (
                            <span className="">
                             <Image
                               src={categorie.icon}
                               alt="kids icon"
                               width={25}
                               height={25}
                             
                             />
                    </span>
                        ) : null
                    }
                    
                </div>
            </div>
        ))}
        </div>
      )}
        
    </div>
  )
}

export default CategorieSelector;
