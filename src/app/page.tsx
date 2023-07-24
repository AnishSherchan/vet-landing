"use client";
import React, { useState } from "react";
import HeroSection from "./components/Herosection/index";
import About from "./components/AboutSection";

export default function Home(): any {
  return (
    <>
      <HeroSection />
      <About />
    </>
  );
}
