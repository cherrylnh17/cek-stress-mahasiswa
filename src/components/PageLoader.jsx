"use client";
import { useState, useEffect } from "react";

export default function PageLoader({ children }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); 

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-black text-white transition-opacity duration-500">
        <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white">
            <img src="/logo.png" alt="Logo" className="w-20 h-20 animate-bounce" />
            <p className="mt-4 text-lg animate-pulse">Memuat halaman...</p>
        </div>

      </div>
    );
  }

  return children;
}
