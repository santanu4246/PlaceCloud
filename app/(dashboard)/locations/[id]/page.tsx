"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { ChevronLeft, X, ChevronRight, MapPin } from "lucide-react";

export default function LocationDetailsPage() {
  const router = useRouter();
  const [readMore, setReadMore] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const galleryImages = [
    {
      src: "/locations/nag-tibba/gallery-1.jpg",
      title: "Nag Tibba Meadow Basecamp",
      caption: "Lush green slopes with pine trees and alpine views",
    },
    {
      src: "/locations/nag-tibba/gallery-2.jpg",
      title: "Summit Panoramic Ridge",
      caption: "Stunning 360-degree views looking down towards the valley",
    },
    {
      src: "/locations/nag-tibba/gallery-3.jpg",
      title: "Mossy Forest Trail",
      caption: "Enchanted oak and rhododendron forest section",
    },
    {
      src: "/locations/nag-tibba/gallery-4.jpg",
      title: "Dramatic Sunset & Clouds",
      caption: "Atmospheric evening over the Himalayan ranges",
    },
  ];

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const nextImage = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % galleryImages.length);
    }
  };

  const prevImage = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex(
        (lightboxIndex - 1 + galleryImages.length) % galleryImages.length
      );
    }
  };

  return (
    <div className="min-h-screen bg-white text-[#111] px-6 py-6 md:px-12 md:py-8 lg:px-16 lg:py-10">
      <div className="max-w-[1360px] mx-auto">
        {/* Back Button */}
        <div className="mb-4">
          <button
            onClick={() => router.back()}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EFEFEF] hover:bg-[#E2E2E2] text-[#222] text-[13px] font-medium transition-colors cursor-pointer"
          >
            <ChevronLeft className="w-3.5 h-3.5 stroke-[2.5]" />
            <span>Back</span>
          </button>
        </div>

        {/* Title and Location */}
        <div className="mb-6">
          <h1 className="text-[28px] md:text-[34px] font-bold text-[#111] tracking-tight leading-tight">
            Nag Tibba Trek
          </h1>
          <div className="flex items-center gap-1.5 mt-1.5 text-[#333] text-[14px]">
            {/* Custom SVG Location Pin from repository */}
            <svg
              width="17"
              height="17"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-[#333] shrink-0"
            >
              <path
                d="M5.25 13.5C3.8783 13.8088 3 14.2832 3 14.8153C3 15.7457 5.68629 16.5 9 16.5C12.3137 16.5 15 15.7457 15 14.8153C15 14.2832 14.1217 13.8088 12.75 13.5"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              <path
                d="M10.875 6.75C10.875 7.78552 10.0355 8.625 9 8.625C7.96448 8.625 7.125 7.78552 7.125 6.75C7.125 5.71447 7.96448 4.875 9 4.875C10.0355 4.875 10.875 5.71447 10.875 6.75Z"
                stroke="currentColor"
                strokeWidth="1.5"
              />
              <path
                d="M9.94305 13.1202C9.69007 13.3638 9.35198 13.5 9.00015 13.5C8.64825 13.5 8.31015 13.3638 8.05717 13.1202C5.74072 10.8756 2.63639 8.36812 4.15028 4.7278C4.96882 2.75949 6.93371 1.5 9.00015 1.5C11.0666 1.5 13.0314 2.7595 13.85 4.7278C15.362 8.36355 12.2652 10.8833 9.94305 13.1202Z"
                stroke="currentColor"
                strokeWidth="1.5"
              />
            </svg>
            <span className="underline underline-offset-2 hover:opacity-80 transition-opacity cursor-pointer">
              Mussoorie, Uttarakhand, India
            </span>
          </div>
        </div>

        {/* Photo Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-[1.12fr_1.12fr_0.88fr] gap-4 mb-9 md:h-[410px] lg:h-[440px]">
          {/* Left Column Image */}
          <div
            onClick={() => openLightbox(0)}
            className="relative h-[290px] md:h-full rounded-[24px] overflow-hidden shadow-sm group cursor-pointer bg-neutral-100"
          >
            <img
              src="/locations/nag-tibba/gallery-1.jpg"
              alt="Nag Tibba Mountain Meadow"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>

          {/* Middle Column Image */}
          <div
            onClick={() => openLightbox(1)}
            className="relative h-[290px] md:h-full rounded-[24px] overflow-hidden shadow-sm group cursor-pointer bg-neutral-100"
          >
            <img
              src="/locations/nag-tibba/gallery-2.jpg"
              alt="Nag Tibba Ridge and Valley"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>

          {/* Right Column (2 Stacked Images) */}
          <div className="flex flex-col gap-4 h-[300px] md:h-full">
            {/* Top Image */}
            <div
              onClick={() => openLightbox(2)}
              className="relative flex-1 rounded-[24px] overflow-hidden shadow-sm group cursor-pointer bg-neutral-100 min-h-[140px]"
            >
              <img
                src="/locations/nag-tibba/gallery-3.jpg"
                alt="Forest Trail"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            {/* Bottom Image with 12+ Images Overlay */}
            <div
              onClick={() => openLightbox(3)}
              className="relative flex-1 rounded-[24px] overflow-hidden shadow-sm group cursor-pointer bg-neutral-100 min-h-[140px]"
            >
              <img
                src="/locations/nag-tibba/gallery-4.jpg"
                alt="Scenic Mountain Trek"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/45 backdrop-blur-[1px] flex items-center justify-center transition-colors group-hover:bg-black/55">
                <span className="text-white font-bold text-[19px] md:text-[21px] tracking-wide select-none drop-shadow-sm">
                  12+ Images
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Description Section (2 Columns) */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.65fr_1fr] gap-8 lg:gap-14 pb-8">
          {/* Left Column: About Guide */}
          <div>
            <h2 className="text-[21px] font-bold text-[#111] mb-3">
              About Guide
            </h2>
            <div className="text-[#333] text-[15px] leading-[1.72] space-y-4">
              <p>
                Neelkantha Mahadev is a Temple in Rishikesh that is revered by
                tourists from all over the world and is one of the most visited
                pilgrimage sites for ages. The temple is open throughout the year
                for the pilgrims. According to the mythology, this is the site
                where Lord Shiva consumed poison after Samudra Manthan, which was
                one of the bi-products. After consuming the poison, Lord
                Shiva&apos;s throat turned blue, giving him the name NeelKanth,
                directly translating to &quot;blue throat.&quot;
              </p>
              <p>
                The story of the Samudra Manthan is highlighted on the temple
                walls to honor the sacrifice made by Mahadev, the God of gods,
                for the world&apos;s well-being.{" "}
                <button
                  type="button"
                  onClick={() => setReadMore(!readMore)}
                  className="font-bold text-[#111] hover:underline inline cursor-pointer"
                >
                  {readMore ? "Read less" : "Read more"}
                </button>
              </p>
              {readMore && (
                <div className="space-y-4 text-[#444] pt-1">
                  <p>
                    Nag Tibba stands at an altitude of 3,022 meters (9,915 ft),
                    making it the highest peak in the lesser Himalayan region of
                    Uttarakhand. The trek begins from Pantwari village and winds
                    through scenic oak and rhododendron forests, offering
                    breathtaking panoramas of Bandarpoonch, Swargarohini, and
                    Gangotri peaks.
                  </p>
                  <p>
                    Known as the &quot;Serpent&apos;s Peak&quot;, it carries deep
                    spiritual significance among local shepherds and villagers
                    who offer prayers at the Nag Devta temple nestled amidst the
                    high-altitude meadows.
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Right Column: About Location */}
          <div>
            <h2 className="text-[21px] font-bold text-[#111] mb-3 flex items-center gap-2">
              <svg
                width="20"
                height="20"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-[#111] shrink-0"
              >
                <path
                  d="M5.25 13.5C3.8783 13.8088 3 14.2832 3 14.8153C3 15.7457 5.68629 16.5 9 16.5C12.3137 16.5 15 15.7457 15 14.8153C15 14.2832 14.1217 13.8088 12.75 13.5"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                />
                <path
                  d="M10.875 6.75C10.875 7.78552 10.0355 8.625 9 8.625C7.96448 8.625 7.125 7.78552 7.125 6.75C7.125 5.71447 7.96448 4.875 9 4.875C10.0355 4.875 10.875 5.71447 10.875 6.75Z"
                  stroke="currentColor"
                  strokeWidth="1.6"
                />
                <path
                  d="M9.94305 13.1202C9.69007 13.3638 9.35198 13.5 9.00015 13.5C8.64825 13.5 8.31015 13.3638 8.05717 13.1202C5.74072 10.8756 2.63639 8.36812 4.15028 4.7278C4.96882 2.75949 6.93371 1.5 9.00015 1.5C11.0666 1.5 13.0314 2.7595 13.85 4.7278C15.362 8.36355 12.2652 10.8833 9.94305 13.1202Z"
                  stroke="currentColor"
                  strokeWidth="1.6"
                />
              </svg>
              <span>About Location</span>
            </h2>
            <div className="text-[#333] text-[15px] leading-[1.72] space-y-4">
              <p>
                Neelkantha Mahadev is a Temple in Rishikesh that is revered by
                tourists from all over the world and is one of the most visited
                pilgrimage sites for ages. The temple is open throughout the year
                for the pilgrims. According to the mythology, this is the site
                wh...
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Section: Map and Terrain Preview (matching bottom blur in screenshot) */}
        <div className="relative mt-2 pt-6 border-t border-gray-100">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-[18px] font-bold text-[#111] flex items-center gap-2">
              <MapPin className="w-4 h-4 text-[#EA5E33]" />
              Trailhead & Map Overview
            </h3>
            <span className="text-[13px] text-gray-500 font-medium">
              Coordinates: 30.5847° N, 78.1517° E
            </span>
          </div>

          <div className="relative w-full h-[240px] md:h-[280px] rounded-[24px] overflow-hidden border border-gray-200 shadow-inner group">
            {/* Styled Map Background */}
            <iframe
              title="Nag Tibba Map"
              width="100%"
              height="100%"
              loading="lazy"
              className="w-full h-full border-0 filter contrast-[1.05] brightness-[0.98]"
              src="https://www.openstreetmap.org/export/embed.html?bbox=78.1000%2C30.5500%2C78.2000%2C30.6200&amp;layer=mapnik&amp;marker=30.5847%2C78.1517"
            ></iframe>

            {/* Map Overlay Card */}
            <div className="absolute bottom-4 left-4 right-4 md:right-auto md:w-[320px] bg-white/95 backdrop-blur-md p-4 rounded-[16px] shadow-lg border border-white/50 flex flex-col gap-2">
              <div className="flex items-center justify-between">
                <span className="text-[14px] font-bold text-[#111]">
                  Nag Tibba Summit
                </span>
                <span className="text-[11px] font-semibold bg-[#EA5E33]/10 text-[#EA5E33] px-2 py-0.5 rounded-full">
                  3,022 m
                </span>
              </div>
              <p className="text-[12px] text-gray-600 leading-snug">
                Basecamp: Pantwari Village • Trail: 19 km • Difficulty: Moderate
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Interactive Lightbox Modal */}
      {lightboxIndex !== null && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex flex-col justify-between p-4 md:p-8 animate-in fade-in duration-200">
          {/* Top Bar */}
          <div className="flex items-center justify-between text-white max-w-6xl mx-auto w-full z-10">
            <div>
              <span className="text-white/70 text-sm font-medium">
                Photo {lightboxIndex + 1} of {galleryImages.length}
              </span>
              <h3 className="text-lg font-bold">
                {galleryImages[lightboxIndex].title}
              </h3>
            </div>
            <button
              onClick={closeLightbox}
              className="p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Main Image with Navigation */}
          <div className="relative flex-1 flex items-center justify-center max-w-5xl mx-auto w-full my-4">
            <button
              onClick={prevImage}
              className="absolute left-2 md:-left-12 p-3 rounded-full bg-white/10 hover:bg-white/25 text-white transition-colors cursor-pointer z-10"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <img
              src={galleryImages[lightboxIndex].src}
              alt={galleryImages[lightboxIndex].title}
              className="max-h-[75vh] max-w-full object-contain rounded-2xl shadow-2xl"
            />

            <button
              onClick={nextImage}
              className="absolute right-2 md:-right-12 p-3 rounded-full bg-white/10 hover:bg-white/25 text-white transition-colors cursor-pointer z-10"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Thumbnails Footer */}
          <div className="flex items-center justify-center gap-3 z-10 overflow-x-auto py-2">
            {galleryImages.map((img, idx) => (
              <button
                key={idx}
                onClick={() => setLightboxIndex(idx)}
                className={`relative w-16 h-16 rounded-xl overflow-hidden border-2 transition-all cursor-pointer ${
                  lightboxIndex === idx
                    ? "border-white scale-105"
                    : "border-transparent opacity-60 hover:opacity-100"
                }`}
              >
                <img
                  src={img.src}
                  alt={img.title}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
