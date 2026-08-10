"use client";

import Navigation from "./Navigation";
import Hero from "./Hero";
import Testimonials from "./Testimonials";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#FAFAFA] font-sans text-gray-900 relative overflow-x-hidden">
      <Navigation />
      <Hero />
      <Testimonials />
    </div>
  );
}
