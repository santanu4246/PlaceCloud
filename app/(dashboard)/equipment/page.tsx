"use client";

import React from "react";

const mockEquipment = [
  {
    id: 1,
    title: "Canon EOS-1D X Mark III",
    desc: "Lightweight carbon based Tripod Stand upto 7 feet and...",
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=600&q=80",
    promo: "JOHNDOE20",
    link: "https://link.com/code/t61gdg6ags172"
  },
  {
    id: 2,
    title: "iPhone 15 Pro Max",
    desc: "Lightweight carbon based Tripod Stand upto 7 feet and...",
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=600&q=80",
    link: "https://amazon.com/shduakbwh..."
  },
  {
    id: 3,
    title: "Carbon Fiber Tripod",
    desc: "Lightweight carbon based Tripod Stand upto 7 feet and...",
    image: "https://images.unsplash.com/photo-1587393855524-087f83d95bc9?auto=format&fit=crop&w=600&q=80",
    promo: "JOHNDOE20"
  },
  {
    id: 4,
    title: "iPhone 15 Pro Max",
    desc: "Lightweight carbon based Tripod Stand upto 7 feet and...",
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=600&q=80",
    link: "https://amazon.com/shduakbwh..."
  },
  {
    id: 5,
    title: "Carbon Fiber Tripod",
    desc: "Lightweight carbon based Tripod Stand upto 7 feet and...",
    image: "https://images.unsplash.com/photo-1587393855524-087f83d95bc9?auto=format&fit=crop&w=600&q=80",
    promo: "JOHNDOE20"
  },
  {
    id: 6,
    title: "Canon EOS-1D X Mark III",
    desc: "Lightweight carbon based Tripod Stand upto 7 feet and...",
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=600&q=80",
    promo: "JOHNDOE20"
  }
];

export default function DashboardGearList() {
  return (
    <div className="p-5 md:p-10 w-full min-h-screen bg-[#FAFAFA]">
      <div className="mb-10 w-full flex flex-col md:flex-row md:items-center justify-between gap-4 md:gap-6 relative">
        <div className="flex items-center flex-1 w-full relative">
          <h1 className="text-[28px] font-bold text-[#111] whitespace-nowrap bg-[#FAFAFA] pr-6 relative z-10">My Equipment</h1>
        </div>
        
        <div className="flex items-center gap-3 relative z-10 bg-[#FAFAFA] md:pl-4">
          <button className="bg-[#EA5E33] hover:bg-[#D5522B] text-white font-bold text-[14px] px-5 py-2.5 rounded-[10px] flex items-center gap-2 transition-colors shadow-sm">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <path d="M12 10v6"></path>
              <path d="M9 13h6"></path>
            </svg>
            Add New Equipment
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-[1200px]">
        {mockEquipment.map((item) => (
          <div key={item.id} className="relative h-[340px] rounded-[24px] overflow-hidden group shadow-[0_2px_12px_rgba(0,0,0,0.04)]">
            <img 
              src={item.image} 
              alt={item.title} 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent pointer-events-none"></div>
            
            {/* 3-Dot Menu */}
            <button className="absolute top-4 right-4 bg-white/20 hover:bg-white/30 backdrop-blur-md rounded-[10px] p-2 transition-colors">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="1.5"></circle>
                <circle cx="12" cy="5" r="1.5"></circle>
                <circle cx="12" cy="19" r="1.5"></circle>
              </svg>
            </button>

            {/* Content */}
            <div className="absolute bottom-0 left-0 right-0 p-5 flex flex-col gap-1.5">
              <h3 className="text-white text-[16px] font-bold">{item.title}</h3>
              <p className="text-white/70 text-[13px] line-clamp-2 leading-relaxed mb-1">{item.desc}</p>
              
              <div className="flex flex-col gap-2 mt-1">
                {item.promo && (
                  <button className="flex items-center gap-2 bg-white/15 hover:bg-white/25 backdrop-blur-md px-3 py-1.5 rounded-[8px] transition-colors w-fit group/btn">
                    <span className="text-white text-[12.5px] font-bold tracking-wide">{item.promo}</span>
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-white/70 group-hover/btn:text-white transition-colors">
                      <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg>
                  </button>
                )}
                {item.link && (
                  <a href="#" className="flex items-center gap-2 bg-white/15 hover:bg-white/25 backdrop-blur-md px-3 py-1.5 rounded-[8px] transition-colors w-fit max-w-[90%] group/btn">
                    <span className="text-white text-[12.5px] font-bold truncate">{item.link}</span>
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-white/70 group-hover/btn:text-white transition-colors flex-shrink-0">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                      <polyline points="15 3 21 3 21 9"></polyline>
                      <line x1="10" y1="14" x2="21" y2="3"></line>
                    </svg>
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
