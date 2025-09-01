import React from "react"; 

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[100dvh] flex flex-col justify-center items-center text-center px-6">
      <h1 className="text-4xl md:text-6xl font-extrabold text-pink-500 drop-shadow-[0_0_25px_rgba(236,72,153,0.8)]">
        Cek Tingkat Stres Mahasiswa
      </h1>

      <p className="mt-2 text-pink-400 font-semibold tracking-widest uppercase text-sm">
        Kenali, Atasi, Kendalikan
      </p>

      <p className="mt-6 max-w-2xl text-gray-300">
        Pengen tau seberapa tinggi tingkat stresmu sebagai mahasiswa?
        Langsung saja cek tingkat di CTSM Cherry, web ini akan membantumu memahami kondisi mentalmu dengan cepat dan mudah.
      </p>

      <div className="button flex justify-center">
        <a href="#questions" className="
          mt-8 px-7 py-3 
          bg-transparent text-[#F92C85] font-bold text-base 
          border-2 border-[#F92C85] 
          rounded-full 
          transition-all duration-300 ease-in-out 
          hover:bg-[#F92C85] hover:text-white hover:shadow-[0_4px_15px_rgba(249,44,133,0.4)] hover:-translate-y-1
        ">
            Mulai Assessment Sekarang!
        </a>
      </div>
    </section>
  );
}
