import React, { useState } from 'react';

const faqData = [
  {
    question: "Apa itu 'CTSM Cherry' ?",
    answer:
      "Ini adalah sebuah website yang dirancang untuk mahasiswa. Tujuannya adalah membantu mahasiswa untuk mengenali dan memahami tingkat stres yang mungkin sedang di alaminya terkait dengan kehidupan akademis dan pribadi, sehingga bisa mengambil langkah-langkah proaktif untuk mengelolanya.",
  },
  {
    question: "Siapa saja yang bisa menggunakannya ?",
    answer:
      "Website ini ditujukan untuk semua mahasiswa aktif di berbagai jenjang, baik sarjana maupun pascasarjana. Siapapun yang merasa butuh untuk memahami kondisi mentalnya dapat menggunakannya sebagai langkah awal.",
  },
  {
    question: "Apakah data dan jawaban saya akan aman?",
    answer:
      "Tentu saja. Kami sangat menjaga privasi Anda. Semua jawaban yang Anda berikan bersifat anonim dan rahasia. Data yang dikumpulkan hanya digunakan untuk memberikan hasil penilaian tingkat stres Anda dan tidak akan dibagikan kepada pihak manapun.",
  },
  {
    question: "Apa yang harus saya lakukan setelah mengetahui hasilnya?",
    answer:
      "Hasil dari tes ini adalah panduan awal. Jika hasilnya menunjukkan tingkat stres yang tinggi, kami sangat menyarankan Anda untuk mencari dukungan lebih lanjut, seperti berbicara dengan konselor kampus, psikolog profesional, atau orang terdekat yang Anda percaya.",
  },
  {
    question: "Seberapa akurat hasil dari tes ini?",
    answer:
      "Tes ini disusun berdasarkan indikator-indikator umum stres yang sering dialami mahasiswa. Meskipun bukan merupakan diagnosis medis formal, hasilnya dapat memberikan gambaran yang cukup baik mengenai kondisi Anda saat ini dan menjadi pemicu untuk lebih peduli terhadap kesehatan mental.",
  },
];

const FaqItem = ({ question, answer, isOpen, onClick }) => {
  return (
    <div id='faq' className="border-b border-gray-200 py-4">
      <button
        className="flex justify-between items-center w-full text-left" data-aos="fade-up"
        data-aos-anchor-placement="center-bottom"
        onClick={onClick}
      >
        <h3 className="text-lg font-medium text-white">{question}</h3>
        <span className="transform transition-transform duration-300">
          <svg
            className={`w-6 h-6 text-white ${isOpen ? 'rotate-180' : ''}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </span>
      </button>
      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? 'max-h-screen mt-4' : 'max-h-0'
        }`}
      >
        <p className="text-white leading-relaxed">
          {answer}
        </p>
      </div>
    </div>
  );
};

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="font-sans mb-8" data-aos="fade-up"
     data-aos-anchor-placement="center-bottom">
      <div className="container max-w-4xl mx-auto px-6 py-16 md:py-24 bg-black/40 border border-white/10 rounded-2xl p-6 shadow-lg">
        <div className="text-center mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-pink-500 mb-4">
            Pertanyaan yang Sering Diajukan
          </h2>
          <p className="text-lg text-white">
            Temukan jawaban atas pertanyaan Anda tentang alat Cek Tingkat Stres Mahasiswa. Kenali, Atasi, dan Kendalikan stres Anda bersama kami.
          </p>
        </div>

        <div className="mx-auto mt-12">
          {faqData.map((faq, index) => (
            <FaqItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onClick={() => toggleFaq(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
