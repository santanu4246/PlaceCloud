"use client";

import React, { useState } from "react";
import { MapTrifoldIcon } from "@/components/icons";

function GlassPill({ children }: { children: React.ReactNode }) {
  return (
    <div 
      className="relative flex items-center justify-center px-3 py-1 rounded-[100px]" 
      style={{ 
        backgroundColor: 'rgba(255, 255, 255, 0.15)', 
        backdropFilter: 'blur(2px)', 
        WebkitBackdropFilter: 'blur(2px)' 
      }}
    >
       <div 
        className="absolute inset-0 rounded-[100px] pointer-events-none"
        style={{
          boxShadow: 'inset 1px 1px 1px rgba(255, 255, 255, 0.8), inset -1px -1px 1px rgba(255, 255, 255, 0.3)'
        }}
       ></div>
       <span className="relative z-10 text-white font-semibold text-[13px] flex items-center gap-1.5 tracking-wide">
         {children}
       </span>
    </div>
  );
}

export default function DashboardGuides() {
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  return (
    <div className="p-10 w-full min-h-screen bg-[#FAFAFA]">
      <div className="flex items-center justify-between mb-10 w-full">
        <div className="flex items-center gap-4">
          <h1 className="text-[28px] font-bold text-[#111] whitespace-nowrap">Your Locations</h1>
          <span className="text-[28px] font-bold text-[#D0D0D0]">0</span>
        </div>
        <button className="bg-[#EA5E33] hover:bg-[#D5522B] text-white px-5 py-2.5 rounded-[12px] font-bold text-[15px] flex items-center gap-2 transition-colors whitespace-nowrap shadow-sm">
          <div className="relative flex items-center justify-center w-5 h-5">
            <MapTrifoldIcon className="w-5 h-5 text-white" />
            <div className="absolute -top-1 -right-1.5 bg-[#EA5E33] text-white text-[12px] leading-none font-black">+</div>
          </div>
          Add New Location
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {[
          { id: 1, title: "Zion Narrows Basecamp", location: "Zion National Park, Utah", price: "$120" },
          { id: 2, title: "Coastal Camp at Moon Bay", location: "Big Sur, California", price: "$150" },
          { id: 3, title: "Joshua Tree Retreat", location: "Joshua Tree, California", price: "$95" }
        ].map((guide) => (
          <div key={guide.id} className="flex flex-col gap-3">
            <div 
              className="relative h-[250px] w-full p-4 flex flex-col justify-between rounded-[20px] overflow-hidden shadow-sm" 
              style={{ 
                backgroundImage: 'url(/home/secenry.png)', 
                backgroundSize: 'cover', 
                backgroundPosition: 'center' 
              }}
            >
              {/* Dark overlay for bottom text */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent pointer-events-none"></div>

              {/* Top Pills */}
              <div className="relative z-10 flex items-center gap-2">
                <GlassPill>
                  <img src="/home/gallery.svg" alt="Gallery" className="w-[14px] h-[14px]" />
                  +12
                </GlassPill>
                <GlassPill>
                  Published
                </GlassPill>
              </div>
              
              {/* Bottom Text and Price */}
              <div className="relative z-10 flex justify-between items-end">
                <div>
                  <h3 className="text-white font-bold text-[17px] mb-0.5">{guide.title}</h3>
                  <p className="text-white/80 text-[13.5px] font-medium">{guide.location}</p>
                </div>
                <div className="text-[#EA5E33] font-black text-[22px] drop-shadow-md">{guide.price}</div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3">
              <button className="flex-1 bg-[#F5F5F5] hover:bg-[#EAEAEA] py-2.5 rounded-[12px] flex items-center justify-center gap-2 text-[13.5px] font-bold text-[#111] transition-colors">
                <img src="/home/edit.svg" alt="Edit" className="w-[18px] h-[18px]" />
                Edit Location
              </button>
              <button 
                onClick={() => setIsDeleteModalOpen(true)}
                className="flex-1 bg-[#FFEBEB] hover:bg-[#FFD6D6] py-2.5 rounded-[12px] flex items-center justify-center gap-2 text-[13.5px] font-bold text-[#E53935] transition-colors"
              >
                <img src="/home/delete.svg" alt="Delete" className="w-[18px] h-[18px]" />
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Delete Confirmation Modal */}
      {isDeleteModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-[2px] p-4">
          <div className="bg-white rounded-[24px] p-8 max-w-[380px] w-full flex flex-col items-center shadow-2xl animate-in fade-in zoom-in duration-200">
            <div className="w-16 h-16 bg-[#FFEBEB] rounded-[16px] flex items-center justify-center mb-5">
              <img src="/home/delete.svg" alt="Delete" className="w-7 h-7" />
            </div>
            
            <h2 className="text-[22px] font-bold text-[#111] mb-2">Delete Location</h2>
            
            <p className="text-[#666] text-[15px] leading-relaxed text-center mb-8 px-1">
              By Deleting your location you lose all location information, Do you want to proceed?
            </p>
            
            <div className="flex w-full gap-3">
              <button 
                onClick={() => setIsDeleteModalOpen(false)}
                className="flex-1 py-3.5 rounded-xl font-bold text-[15px] text-[#111] bg-[#F5F5F5] hover:bg-[#EAEAEA] transition-colors"
              >
                Cancel
              </button>
              <button 
                onClick={() => setIsDeleteModalOpen(false)}
                className="flex-1 py-3.5 rounded-xl font-bold text-[15px] text-white bg-[#E53935] hover:bg-[#D32F2F] transition-colors shadow-sm"
              >
                Delete Location
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
