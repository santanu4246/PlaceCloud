"use client";

import React from "react";
import Link from "next/link";

export default function AddEquipment() {
  return (
    <div className="p-5 md:p-10 w-full min-h-screen bg-[#FAFAFA]">
      {/* Header */}
      <div className="mb-10 w-full">
        <Link href="/equipment" className="flex items-center gap-2 text-[22px] font-bold text-[#111] mb-2 hover:text-[#EA5E33] transition-colors w-fit">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M15 18l-6-6 6-6" />
          </svg>
          Add Equipment Item
        </Link>
        <p className="text-[#666] text-[15px] font-medium pl-[32px]">
          Manage your affiliate items, attach promo codes, and export engagement data.
        </p>
      </div>

      {/* Main Card */}
      <div className="max-w-[650px] mx-auto bg-white rounded-[24px] shadow-[0_4px_24px_rgba(0,0,0,0.02)] border border-[#E5E5E5] p-8 md:p-10">
        <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
          
          {/* Image Upload Area */}
          <div className="w-full h-[180px] rounded-[16px] border-2 border-dashed border-[#D0D0D0] bg-[#FAFAFA] flex flex-col items-center justify-center gap-3 cursor-pointer hover:bg-gray-50 hover:border-[#EA5E33] transition-colors group">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#666] group-hover:text-[#EA5E33] transition-colors">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
              <polyline points="17 8 12 3 7 8"></polyline>
              <line x1="12" y1="3" x2="12" y2="15"></line>
            </svg>
            <span className="text-[#666] font-semibold text-[15px] group-hover:text-[#EA5E33] transition-colors">
              Upload Equipment Image
            </span>
          </div>

          {/* Product Title */}
          <div className="flex flex-col gap-2">
            <label className="text-[14px] font-bold text-[#333]">Product title</label>
            <input 
              type="text" 
              placeholder="e.g. Tripod"
              className="w-full h-[48px] bg-white border border-[#E5E5E5] rounded-[12px] px-4 outline-none focus:border-[#EA5E33] focus:ring-1 focus:ring-[#EA5E33] transition-all text-[#111] text-[15px] font-medium placeholder:text-[#999]"
            />
          </div>

          {/* Product Detail */}
          <div className="flex flex-col gap-2">
            <label className="text-[14px] font-bold text-[#333]">Product detail</label>
            <textarea 
              placeholder="Describe your equipment"
              className="w-full min-h-[120px] bg-white border border-[#E5E5E5] rounded-[12px] p-4 outline-none focus:border-[#EA5E33] focus:ring-1 focus:ring-[#EA5E33] transition-all text-[#111] text-[15px] font-medium resize-y placeholder:text-[#999]"
            ></textarea>
          </div>

          {/* Product Link */}
          <div className="flex flex-col gap-2">
            <label className="text-[14px] font-bold text-[#333]">Product link (Optional)</label>
            <input 
              type="text" 
              placeholder="Paste retailer/product link"
              className="w-full h-[48px] bg-white border border-[#E5E5E5] rounded-[12px] px-4 outline-none focus:border-[#EA5E33] focus:ring-1 focus:ring-[#EA5E33] transition-all text-[#111] text-[15px] font-medium placeholder:text-[#999]"
            />
          </div>

          {/* Affiliate / Promo Code */}
          <div className="flex flex-col gap-2">
            <label className="text-[14px] font-bold text-[#333]">Affiliate / Promo Code (Optional)</label>
            <input 
              type="text" 
              placeholder="e.g. Wayn10"
              className="w-full h-[48px] bg-white border border-[#E5E5E5] rounded-[12px] px-4 outline-none focus:border-[#EA5E33] focus:ring-1 focus:ring-[#EA5E33] transition-all text-[#111] text-[15px] font-medium placeholder:text-[#999]"
            />
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-4 mt-2">
            <button 
              type="button"
              className="flex-1 h-[52px] rounded-[12px] bg-[#F5F5F5] hover:bg-[#EAEAEA] text-[#111] font-bold text-[15px] transition-colors"
            >
              Save as Draft
            </button>
            <button 
              type="button"
              className="flex-1 h-[52px] rounded-[12px] bg-[#EA5E33] hover:bg-[#D5522B] text-white font-bold text-[15px] transition-colors shadow-sm"
            >
              Add Equipment
            </button>
          </div>
          
        </form>
      </div>
    </div>
  );
}
