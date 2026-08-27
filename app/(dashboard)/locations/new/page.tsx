"use client";

import React, { useState } from "react";
import Link from "next/link";
import { MapTrifoldIcon } from "@/components/icons";

export default function AddNewLocation() {
  const [isLocked, setIsLocked] = useState(true);

  return (
    <div className="p-5 md:p-10 w-full min-h-screen bg-white">
      <div className="max-w-[1000px]">
        {/* Header */}
        <div className="mb-10">
          <Link href="/locations" className="flex items-center gap-3 text-[24px] font-bold text-[#111] hover:text-[#EA5E33] transition-colors w-fit">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 18l-6-6 6-6" />
            </svg>
            Add New Location
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-x-14 gap-y-10">
          
          {/* Left Column (Form) */}
          <div className="flex flex-col gap-6">
            
            <div className="flex flex-col gap-2.5">
              <label className="text-[14.5px] font-medium text-[#444]">Location Name</label>
              <input 
                type="text" 
                placeholder="Name of Your Location" 
                className="w-full h-[46px] bg-white border border-[#E5E5E5] rounded-[10px] px-4 outline-none focus:border-[#EA5E33] focus:ring-1 focus:ring-[#EA5E33] transition-all text-[#111] text-[15px]"
              />
            </div>

            <div className="flex flex-col gap-2.5">
              <label className="text-[14.5px] font-medium text-[#444]">Description about your location</label>
              <textarea 
                placeholder="Describe Your Location" 
                className="w-full h-[180px] bg-white border border-[#E5E5E5] rounded-[10px] p-4 outline-none focus:border-[#EA5E33] focus:ring-1 focus:ring-[#EA5E33] transition-all text-[#111] text-[15px] resize-none"
              ></textarea>
            </div>

            <div className="flex flex-col gap-2.5 mt-2">
              <div className="relative flex items-center w-full h-[46px] bg-white border border-[#E5E5E5] rounded-[10px] focus-within:border-[#EA5E33] focus-within:ring-1 focus-within:ring-[#EA5E33] transition-all overflow-hidden">
                <div className="pl-4 pr-2 flex items-center justify-center">
                  <img src="/locations/location.svg" alt="Location" className="w-[18px] h-[18px] opacity-60" />
                </div>
                <input 
                  type="text" 
                  placeholder="Location" 
                  className="flex-1 h-full bg-transparent outline-none text-[#111] text-[15px]"
                />
              </div>
            </div>

            <div className="flex flex-col gap-2.5 mt-2">
              <label className="text-[14.5px] font-medium text-[#444]">Describe Location</label>
              <textarea 
                placeholder="Location Description" 
                className="w-full h-[120px] bg-white border border-[#E5E5E5] rounded-[10px] p-4 outline-none focus:border-[#EA5E33] focus:ring-1 focus:ring-[#EA5E33] transition-all text-[#111] text-[15px] resize-none"
              ></textarea>
            </div>

            <div className="flex flex-col gap-2.5 mt-2">
              <label className="text-[14.5px] font-medium text-[#444]">GPX / Map / Google Pin</label>
              <button className="w-full h-[60px] bg-white border-2 border-dashed border-[#E5E5E5] rounded-[10px] flex items-center justify-center gap-3 hover:bg-[#F5F5F5] transition-colors">
                <img src="/locations/upload.svg" alt="Upload File" className="w-[20px] h-[20px]" />
                <span className="text-[14.5px] font-bold text-[#111]">Click to upload GPX or Google Pin Files</span>
              </button>
            </div>

            <div className="flex items-center justify-start lg:justify-end gap-4 mt-6">
              <button className="px-8 py-3.5 bg-[#F5F5F5] hover:bg-[#EAEAEA] rounded-[10px] text-[15px] font-bold text-[#111] transition-colors">
                Save as Draft
              </button>
              <button className="px-8 py-3.5 bg-[#EA5E33] hover:bg-[#D5522B] text-white rounded-[10px] text-[15px] font-bold flex items-center gap-2 shadow-sm transition-colors">
                <MapTrifoldIcon className="w-[18px] h-[18px] text-white" />
                Add New Location
              </button>
            </div>

          </div>

          {/* Right Column (Image & Settings) */}
          <div className="flex flex-col gap-8">
            
            {/* Upload Images Box */}
            <button className="w-full h-[200px] bg-[#FAFAFA] border-2 border-dashed border-[#E5E5E5] rounded-[16px] flex flex-col items-center justify-center gap-3 hover:bg-[#F5F5F5] transition-colors">
              <img src="/locations/photoupload.svg" alt="Upload" className="w-[20px] h-[20px]" />
              <span className="text-[14px] font-semibold text-[#666]">Upload Location Images</span>
            </button>

            {/* Co-ordinates Visibility */}
            <div className="flex flex-col gap-3 -mt-2">
              <div className="flex items-center gap-2">
                <span className="text-[14.5px] font-medium text-[#444]">Co-ordinates Visibility</span>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#666]">
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="12" y1="16" x2="12" y2="12"></line>
                  <line x1="12" y1="8" x2="12.01" y2="8"></line>
                </svg>
              </div>
              
              <button 
                onClick={() => setIsLocked(!isLocked)}
                className={`w-full flex items-center justify-between px-4 py-3 rounded-[12px] transition-colors ${
                  isLocked 
                    ? 'bg-[#EA5E33]/15 text-[#EA5E33]' 
                    : 'bg-gray-100 text-gray-600'
                }`}
              >
                <div className="flex items-center gap-2.5 font-bold text-[14px]">
                  {isLocked ? (
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
                  ) : (
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 9.9-1"></path></svg>
                  )}
                  {isLocked ? 'Locked (Paywalled)' : 'Unlocked (Free)'}
                </div>
                
                <div className={`w-[38px] h-[22px] rounded-full p-[2px] transition-colors ${isLocked ? 'bg-[#EA5E33]' : 'bg-gray-300'}`}>
                  <div className={`w-[18px] h-[18px] bg-white rounded-full shadow-sm transition-transform ${isLocked ? 'translate-x-[16px]' : 'translate-x-0'}`}></div>
                </div>
              </button>
            </div>

            {/* Location Price */}
            <div className="flex flex-col gap-2.5">
              <label className="text-[14.5px] font-medium text-[#444]">Location Price</label>
              <div className="relative flex items-center w-full h-[46px] bg-white border border-[#E5E5E5] rounded-[10px] overflow-hidden focus-within:border-[#EA5E33] focus-within:ring-1 focus-within:ring-[#EA5E33] transition-all">
                <span className="pl-4 pr-2 text-[#999] font-semibold text-[15px]">$</span>
                <input 
                  type="text" 
                  placeholder="10" 
                  className="flex-1 h-full bg-transparent outline-none text-[#111] font-semibold text-[15px]"
                />
                <div className="h-full flex items-center bg-[#F7F7F7] border-l border-[#E5E5E5] px-3 gap-1.5 cursor-pointer hover:bg-[#EAEAEA] transition-colors">
                  <span className="text-[13px] font-bold text-[#111]">USD</span>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-[#666]">
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </div>
              </div>
            </div>
            
          </div>

        </div>
      </div>
    </div>
  );
}
