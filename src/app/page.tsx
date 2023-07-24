"use client";
import React, { useState } from "react";
import HeroSection from "./components/Herosection/index";
import About from "./components/AboutSection";
import Services from "./components/Services";
import Breed from "./components/Breed";
import Banner from "./components/Banner";
import Blog from "./components/Blog";
import Footer from "./components/Footer";

export default function Home(): any {
  return (
    <div className="flex flex-col gap-36">
      <HeroSection />
      <About />
      <Services />
      <Breed />
      <Banner />
      <Blog />
      <Footer />
    </div>
  );
}
