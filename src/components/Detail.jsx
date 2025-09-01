import React from "react"; 

export default function Detail() {
  return (
    <section id="about" className="min-h-[50vh] mb-8 flex flex-col justify-center items-center text-center md:px-6"
    data-aos="fade-up" data-aos-anchor-placement="center-bottom">
      <div className="mt-10 max-w-4xl w-full bg-black/40 border border-white/10 rounded-2xl p-6 text-left shadow-lg">
        <h2 className="text-2xl font-bold text-pink-500 mb-3 text-center">
          Apa Itu Web Cek Tingkat Stres Mahasiswa?
        </h2>
        <p className="text-gray-300 leading-relaxed">
            Ini adalah tes mandiri sederhana untuk membantu mahasiswa mengenali tingkat stres yang sedang dialami.
            Melalui beberapa pertanyaan, kamu bisa mengetahui apakah tingkat stresmu tergolong rendah, sedang, atau tinggi.
            Yuk, coba sekarang agar kamu bisa lebih memahami kondisi mentalmu dan mengambil langkah yang tepat sejak dini.
            Data kamu disini tidak akan disimpan, dan akan dihapus setelah keluar hasilnya.
        </p>
      </div>
    </section>
  );
}
