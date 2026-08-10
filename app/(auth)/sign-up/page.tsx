"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function SignUpPage() {
  const [agreed, setAgreed] = useState(false);
  return (
    <div className="w-full flex flex-col">
      <h2 className="text-[32px] font-bold text-[#222] mb-1" style={{ fontFamily: 'Inter, sans-serif' }}>Sign Up</h2>
      <p className="text-[#666] text-[15px] mb-8" style={{ fontFamily: 'Inter, sans-serif' }}>Sign Up to access features of PlaceCloud</p>

      <button className="w-full flex items-center justify-center gap-3 bg-[#F7F7F7] border border-[#F0F0F0] hover:bg-[#EAEAEA] transition-colors text-[#222] font-semibold py-3.5 px-4 rounded-xl mb-8">
        <svg viewBox="0 0 24 24" width="20" height="20" xmlns="http://www.w3.org/2000/svg">
          <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
          <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
          <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
          <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
        </svg>
        <span className="text-[14px]" style={{ fontFamily: 'Inter, sans-serif' }}>Continue with Google</span>
      </button>

      <div className="flex items-center gap-4 mb-8">
        <div className="flex-1 h-px bg-[#E5E5E5]"></div>
        <span className="text-[#999] text-[13px] font-medium" style={{ fontFamily: 'Inter, sans-serif' }}>Or Continue with Email</span>
        <div className="flex-1 h-px bg-[#E5E5E5]"></div>
      </div>

      <form className="flex flex-col gap-5">
        <div className="flex flex-col gap-2">
          <label className="text-[13px] font-medium text-[#444]" style={{ fontFamily: 'Inter, sans-serif' }}>Email address</label>
          <input 
            type="email" 
            placeholder="example@gmail.com" 
            className="w-full bg-white border border-[#E5E5E5] rounded-xl px-4 py-3.5 text-[14px] text-[#222] placeholder:text-[#999] focus:ring-2 focus:ring-[#EA5E33] focus:border-[#EA5E33] outline-none transition-all"
            style={{ fontFamily: 'Inter, sans-serif' }}
          />
        </div>
        
        <div className="flex flex-col gap-2">
          <label className="text-[13px] font-medium text-[#444]" style={{ fontFamily: 'Inter, sans-serif' }}>Create Password</label>
          <div className="relative">
            <input 
              type="password" 
              placeholder="••••••••••" 
              className="w-full bg-white border border-[#E5E5E5] rounded-xl pl-4 pr-11 py-3.5 text-[14px] text-[#222] placeholder:text-[#999] focus:ring-2 focus:ring-[#EA5E33] focus:border-[#EA5E33] outline-none transition-all"
              style={{ fontFamily: 'Inter, sans-serif' }}
            />
            <button type="button" className="absolute right-4 top-1/2 -translate-y-1/2 hover:opacity-75 transition-opacity">
              <Image src="/onboarding/EyeClosed.svg" width={20} height={20} alt="Toggle Password Visibility" />
            </button>
          </div>
        </div>

        <div className="flex items-start gap-3 mt-2 mb-2">
          <div className="pt-0.5" onClick={() => setAgreed(!agreed)}>
            <div className={`w-[18px] h-[18px] rounded-[4px] flex items-center justify-center cursor-pointer transition-colors border ${agreed ? 'bg-[#EA5E33] border-[#EA5E33]' : 'bg-white border-[#E5E5E5]'}`}>
              {agreed && (
                <svg width="10" height="8" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 9.4L0 5.4L1.4 4L4 6.6L10.6 0L12 1.4L4 9.4Z" fill="white"/>
                </svg>
              )}
            </div>
          </div>
          <p className="text-[13px] text-[#666] leading-[1.4]" style={{ fontFamily: 'Inter, sans-serif' }}>
            By clicking you agree to our <Link href="#" className="underline underline-offset-4 decoration-[#E5E5E5] hover:decoration-[#222] transition-colors">Terms of Service</Link> and <Link href="#" className="underline underline-offset-4 decoration-[#E5E5E5] hover:decoration-[#222] transition-colors">Privacy Policy</Link>.
          </p>
        </div>

        <button 
          className="text-white font-bold text-[15px] w-full py-4 rounded-xl hover:opacity-90 transition-opacity mt-2"
          style={{
            fontFamily: 'Inter, sans-serif',
            background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.45) 0%, rgba(255, 255, 255, 0) 65%), #EA5E33',
            boxShadow: 'inset 0 4px 10px rgba(255, 255, 255, 0.25), 8px 16px 8px 0 rgba(0, 0, 0, 0.00), 5px 10px 6px 0 rgba(0, 0, 0, 0.01), 3px 6px 4px 0 rgba(0, 0, 0, 0.04), 1px 3px 3px 0 rgba(0, 0, 0, 0.07), 1px 1px 2px 0 rgba(0, 0, 0, 0.08)'
          }}
        >
          Create Account
        </button>
      </form>

      <p className="text-center text-[14px] text-[#666] mt-8" style={{ fontFamily: 'Inter, sans-serif' }}>
        Already have an account? <Link href="/sign-in" className="text-[#222] font-bold underline underline-offset-4 decoration-[#E5E5E5] hover:decoration-[#222] transition-colors">Sign In</Link>
      </p>
    </div>
  );
}
