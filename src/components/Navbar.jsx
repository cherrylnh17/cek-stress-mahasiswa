"use client"
import React from "react"; 
import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react"; 

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 w-[90%] max-w-5xl 
                    bg-gray-900/80 backdrop-blur-md border border-gray-700/50 
                    rounded-full px-6 py-3 flex items-center justify-between shadow-lg z-50">
      
      <div>
        <a href="#home" className="flex items-center space-x-2">
          <div className="w-8 h-8 rounded-md flex items-center justify-center">
            <img src="/logo.png" alt="logo" />
          </div>
          <span className="text-white font-semibold tracking-wide">
            CTSM Cherry
          </span>
        </a>
      </div>

      <div className="hidden md:flex space-x-6 text-gray-300 font-medium">
        <Link href="#home" className="hover:text-pink-400 transition">Home</Link>
        <Link href="#about" className="hover:text-pink-400 transition">About</Link>
        <Link href="#questions" className="hover:text-pink-400 transition">Assessment</Link>
        <Link href="#faq" className="hover:text-pink-400 transition">FAQ</Link>
      </div>

      <button 
        className="md:hidden text-gray-300"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {isMounted && isOpen && (
        <div className="absolute top-16 left-0 w-full px-6">
          <div className="bg-gray-900/95 backdrop-blur-md border border-gray-700/50 
                          rounded-xl p-4 flex flex-col space-y-4 text-gray-300 font-medium shadow-lg">
            <Link href="#home" className="hover:text-pink-400 transition" onClick={() => setIsOpen(false)}>Home</Link>
            <Link href="#about" className="hover:text-pink-400 transition" onClick={() => setIsOpen(false)}>About</Link>
            <Link href="#questions" className="hover:text-pink-400 transition" onClick={() => setIsOpen(false)}>Assessment</Link>
            <Link href="#faq" className="hover:text-pink-400 transition" onClick={() => setIsOpen(false)}>FAQ</Link>
          </div>
        </div>
      )}
    </nav>
  );
}
