"use client"
import React, { useState, useEffect, useRef } from 'react'
import Image from "next/image";

interface SelectMode {
    name: string;
    icon?: string;
}

const Select_Mode: SelectMode[] = [
    {
        name: " Visite normale",
    },
    {
        name: "Visite Automatique", 
        icon: "/icons/icon_auto_94x94.png",
    }
]

const SelectedVisited = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectMode, setSelectMode] = useState("Navigation");
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

    const handleSelect = (ModeName: string) => {
        setSelectMode(ModeName);
        setIsOpen(false);
        console.log(ModeName);
    }

    return (
        <div className="relative" ref={dropdownRef}>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className={`bg-neutral-950/90 text-white rounded-md p-2 px-4 text-sm focus:outline-none cursor-pointer flex items-center justify-center w-full md:w-32 transition-colors font-semibold border border-neutral-950 ${isOpen? "border-purple-500":"hover:border-purple-500"}`}
            >
                <span className="">
                    {selectMode}
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
                <div className="absolute top-full pt-2 pb-2 -left-15 mt-3 w-full md:w-64 bg-neutral-950/80 backdrop-blur-md rounded-md shadow-lg z-50 max-h-96 overflow-y-auto">
                    <div className="p-3 text-gray-300 border-b border-neutral-700">
                        Sélectionnez un mode
                    </div>
                    {Select_Mode.map((Mode) => (
                        <div
                            key={Mode.name}
                            onClick={() => handleSelect(Mode.name)} 
                            className="cursor-pointer hover:bg-purple-950 hover:rounded-md"
                        >
                            <div className="p-2 px-3 text-gray-300 text-sm font-bold tracking-wider flex flex-row items-center justify-between">
                                {Mode.name}
                                {Mode.icon && (
                                    <span className="">
                                        <Image
                                            src={Mode.icon}
                                            alt={`${Mode.name} icon`}
                                            width={20}
                                            height={20}
                                        />
                                    </span>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}

export default SelectedVisited;