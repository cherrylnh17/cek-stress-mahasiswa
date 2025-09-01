"use client"
import React from 'react';
import { Youtube, Instagram, Github } from "lucide-react"; 

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 border-t border-white/10 text-gray-400">
      <div className="container mx-auto px-6 py-12">
        <div className="md:flex md:justify-between md:items-center text-center md:text-left">

          <div className="w-full md:w-1/2 lg:w-1/3 mb-6 md:mb-0">
            <h2 className="text-2xl font-bold text-pink-500">
              Cek Stres Mahasiswa
            </h2>
            <p className="mt-2 text-sm">
              Platform untuk membantumu mengenali, mengatasi, dan mengendalikan tingkat stres.
            </p>
          </div>

          <div className="flex justify-center md:justify-end space-x-6">
            <a href="https://www.youtube.com/@KimCh." target="_blank" className="text-gray-400 hover:text-red-500 transition-colors duration-300">
              <span className="sr-only">Youtube</span>
              <Youtube />
            </a>
            <a href="https://www.instagram.com/cherrylnh_/#" target="_blank" className="text-gray-400 hover:text-red-700 transition-colors duration-300">
              <span className="sr-only">Instagram</span>
              <Instagram />
            </a>
            <a href="https://github.com/cherrylnh17" target="_blank" className="text-gray-400 hover:text-pink-500 transition-colors duration-300">
              <span className="sr-only">GitHub</span>
              <Github />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-white/10 text-center text-sm">
          <p>&copy; {currentYear} ctsm.cherry.biz.id  . All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
