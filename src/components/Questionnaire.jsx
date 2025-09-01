"use client";

import React, { useState } from "react";
import questions from "../data/questions";
import Question from "./Questions";

export default function Questionnaire() {
  const [answers, setAnswers] = useState({});
  const [currentIndex, setCurrentIndex] = useState(0);
  const [result, setResult] = useState(null);

  const currentQuestion = questions[currentIndex];

  function handleChange(id, value) {
    setAnswers((prev) => ({ ...prev, [id]: value }));
  }

  function handleNext() {
    if (answers[currentQuestion.id] === undefined) {
      window.Swal.fire({
        icon: "warning",
        title: "Oops...",
        text: "Mohon isi pertanyaan terlebih dahulu!",
      });
      return;
    }

    if (currentIndex < questions.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      let totalScore = 0;
      for (const q of questions) {
        totalScore += answers[q.id];
      }

      let level = "";
      if (totalScore <= 30) level = "Rendah";
      else if (totalScore <= 60) level = "Sedang";
      else level = "Tinggi";

      setResult({ totalScore, level });
    }
  }

  function handleBack() {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  }

  const renderResultMessage = (result) => {
    if (!result) return null; 

    switch (result.level) {
      case "Tinggi":
        return (
          <p className="text-red-500"> 
            ⚠️ Sepertinya kamu sedang di bawah banyak tekanan. Ingat ya, tidak apa-apa untuk beristirahat sejenak.
          </p>
        );
      case "Sedang":
        return (
          <p className="text-yellow-600"> 
            🙂 Tingkat stresmu berada di level sedang. Ini adalah pengingat untuk tetap menjaga keseimbangan antara aktivitas dan istirahat.
          </p>
        );
      case "Rendah":
        return (
          <p className="text-green-600"> 
            ✨ Keren! Kamu berhasil mengelola stres dengan baik. Pertahankan, ya!
          </p>
        );
      default:
        return null;
    }
  };
  const progress = Math.round((currentIndex / questions.length) * 100);

  return (
    <div id="questions" className="min-h-[70dvh] mb-8 text-gray-100 pt-[20vh] -mt-[20vh]" data-aos="fade-up"
     data-aos-anchor-placement="center-bottom">
      <div className="max-w-4xl mx-auto p-6 bg-black/40 border border-white/10 rounded-2xl shadow-lg">
        <h1 className="text-4xl font-extrabold mb-8 text-center text-pink-500">
          Self-Assessment Stres Mahasiswa
        </h1>

        {result ? (
          <div className="mt-8 p-6 bg-gray-900 rounded-xl shadow-lg text-center">
            <h2 className="text-2xl font-semibold mb-4 text-pink-400">
              Hasil Self-Assessment
            </h2>
            <p className="mb-2">Terima kasih telah meluangkan waktu untuk mengenali diri Anda lebih baik. <br></br>
              Berikut adalah gambaran kondisi stres yang Anda alami saat ini:</p>
            <p className="mb-2">Level Stres: <b>{result.level}</b></p>
            <div className="text-gray-300">
              {renderResultMessage(result)}
            </div>
          </div>
        ) : (
          <>
          {/* Bar */}
            <div className="w-full bg-gray-700 rounded-full h-3 mb-6">
              <div
                className="bg-gradient-to-r from-pink-500 to-purple-600 h-3 rounded-full transition-all duration-500 ease-in-out"
                style={{ width: `${progress}%` }}
              />
            </div>

            {/* Pertanyaan */}
            <div className="bg-gray-900 p-6 rounded-xl shadow-md border border-purple-600/30">
              <Question
                key={currentQuestion.id}
                questionData={currentQuestion}
                value={answers[currentQuestion.id]}
                onChange={handleChange}
              />
            </div>

            {/* Navigasi */}
            <div className="flex justify-between mt-6">
              <button
                type="button"
                onClick={handleBack}
                disabled={currentIndex === 0}
                className={`px-6 py-2 rounded-xl font-medium transition ${
                  currentIndex === 0
                    ? "bg-gray-700 text-gray-500 cursor-not-allowed"
                    : "bg-gradient-to-r from-gray-700 to-gray-600 text-white hover:from-gray-600 hover:to-gray-500"
                }`}
              >
                Back
              </button>

              <button
                type="button"
                onClick={handleNext}
                className="px-6 py-2 rounded-xl font-medium text-white bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 transition"
              >
                {currentIndex < questions.length - 1 ? "Next" : "Lihat Hasil"}
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
