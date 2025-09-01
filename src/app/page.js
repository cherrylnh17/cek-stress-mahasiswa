"use client";
import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect, useState } from "react";

import Questionnaire from "../components/Questionnaire";
import Hero from "../components/Hero";
import Faq from "../components/Faq";
import Detail from "../components/Detail";

export default function HomePage() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return(
    <>
      <div>
        <Hero />
        <Detail />
        <Questionnaire />
        <Faq />
      </div>
    </>
  );
}