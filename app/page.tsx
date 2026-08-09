"use client";

import Image from "next/image";
import { useRef } from "react";
import { 
  ChevronDown, 
  MapPin, 
  Check, 
  ArrowRight,
  ArrowLeft,
  Star,
  Share2,
  BarChart2,
  Globe,
  Bookmark,
  Link as LinkIcon,
  Plane,
  Smartphone,
  Wallet,
  LayoutDashboard,
  Book,
  Diamond,
  Martini,
  Coffee,
  Camera,
  Bed
} from "lucide-react";
import Link from "next/link";

export default function Home() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = 300; // width of one card + gap
      scrollContainerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth"
      });
    }
  };

  return (
    <div className="min-h-screen bg-[#FAFAFA] font-sans text-gray-900 relative overflow-x-hidden">
      {/* Navigation */}
      <header className="flex items-center justify-between px-8 py-6 max-w-[1200px] mx-auto relative z-10">
        <div className="flex items-center gap-2">
          <span 
            className="text-[22px] font-bold tracking-tight text-gray-900"
            style={{ fontFamily: 'var(--font-outfit), sans-serif' }}
          >
            PlateMap
          </span>
        </div>
        
        <nav 
          className="hidden md:flex items-center gap-10 text-[16px] font-medium"
          style={{ fontFamily: 'var(--font-outfit), sans-serif', color: '#000', lineHeight: '18px' }}
        >
          <Link href="#" className="hover:opacity-75 transition-opacity">Features</Link>
          <Link href="#" className="hover:opacity-75 transition-opacity">Examples</Link>
          <Link href="#" className="hover:opacity-75 transition-opacity">Pricing</Link>
        </nav>

        <div className="flex items-center">
          <Link 
            href="#" 
            className="text-white text-[15px] font-bold px-8 py-3"
            style={{
              fontFamily: 'var(--font-outfit), sans-serif',
              borderRadius: '100px',
              background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.45) 0%, rgba(255, 255, 255, 0) 65%), #EA5E33',
              boxShadow: 'inset 0 4px 10px rgba(255, 255, 255, 0.25), 8px 16px 8px 0 rgba(0, 0, 0, 0.00), 5px 10px 6px 0 rgba(0, 0, 0, 0.01), 3px 6px 4px 0 rgba(0, 0, 0, 0.04), 1px 3px 3px 0 rgba(0, 0, 0, 0.07), 1px 1px 2px 0 rgba(0, 0, 0, 0.08)'
            }}
          >
            Try Now
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <main className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 mb-24 relative z-10">
        <div 
          className="relative w-full rounded-b-[40px] rounded-t-none overflow-hidden flex flex-col items-center pt-10 pb-40 px-4"
          style={{
            backgroundImage: 'url(/heroImage.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          {/* Top Pill */}
          <div 
            className="mb-6 px-5 py-2 text-[15px] font-semibold tracking-wide"
            style={{
              borderRadius: '100px',
              background: 'rgba(255, 110, 53, 0.25)',
              color: '#222'
            }}
          >
            The Ultimate Link In Bio for Creators
          </div>

          {/* Main Titles */}
          <div className="flex flex-col items-center gap-1 mb-8 mt-2">
            <h1 
              style={{
                color: '#222',
                fontFamily: 'Inter, sans-serif',
                fontSize: '74px',
                fontWeight: 500,
                lineHeight: '74px',
                letterSpacing: '-2.96px'
              }}
              className="text-center"
            >
              Your Places, Your Video
            </h1>

            {/* One Link Pill */}
            <div className="bg-white rounded-2xl px-8 py-1 flex items-center justify-center mt-2 mx-4 inline-flex">
              <span 
                style={{
                  color: '#222',
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '64px',
                  fontWeight: 700,
                  lineHeight: '74px',
                  letterSpacing: '-2.56px'
                }}
              >
                One Link
              </span>
              <span className="text-[64px] ml-3 leading-[74px]">🔗</span>
            </div>
          </div>

          {/* Subtitle */}
          <p 
            className="max-w-[680px] mb-10"
            style={{
              color: '#222',
              textAlign: 'center',
              fontFamily: 'Inter, sans-serif',
              fontSize: '20px',
              fontWeight: 400,
              lineHeight: '36px',
              letterSpacing: '0.4px'
            }}
          >
            Turn every spot from your videos into a shareable monetizable city guide. Stop answering &ldquo;Where is this?&rdquo; in your DMs
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-4 mb-10">
            {/* Try It Now Button */}
            <button 
              className="text-white font-bold text-[17px]"
              style={{
                display: 'flex',
                width: '237px',
                height: '56px',
                padding: '12px',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '8px',
                borderRadius: '100px',
                background: 'linear-gradient(180deg, #414141 0%, #131313 100%)',
                boxShadow: 'inset 0 4px 10px rgba(255, 255, 255, 0.25), 8px 16px 8px 0 rgba(0, 0, 0, 0.00), 5px 10px 6px 0 rgba(0, 0, 0, 0.01), 3px 6px 4px 0 rgba(0, 0, 0, 0.04), 1px 3px 3px 0 rgba(0, 0, 0, 0.07), 1px 1px 2px 0 rgba(0, 0, 0, 0.08)'
              }}
            >
              Try It Now
            </button>

            {/* Become a Creator Button (iOS 26 Glass Effect) */}
            <div 
              className="relative flex items-center justify-center cursor-pointer" 
              style={{ 
                height: '56px',
                padding: '0 32px',
                borderRadius: '100px',
                backgroundColor: 'rgba(255, 255, 255, 0.15)', 
                backdropFilter: 'blur(2px)',
                WebkitBackdropFilter: 'blur(2px)',
              }}
            >
              <div className="absolute inset-0 rounded-[100px] overflow-hidden pointer-events-none">
                {/* Top-Left Border */}
                <div 
                  className="absolute"
                  style={{
                    top: -1,
                    left: -1,
                    width: '270px',
                    height: '50%',
                    borderTopWidth: 2,
                    borderLeftWidth: 2,
                    borderColor: 'rgba(255, 255, 255, 0.9)',
                    borderTopLeftRadius: '100px',
                  }}
                />
                {/* Bottom-Right Border */}
                <div 
                  className="absolute"
                  style={{
                    bottom: -1,
                    right: -1,
                    width: '270px',
                    height: '50%',
                    borderBottomWidth: 2,
                    borderRightWidth: 2,
                    borderColor: 'rgba(255, 255, 255, 0.9)',
                    borderBottomRightRadius: '100px',
                  }}
                />
              </div>

              <span className="relative font-bold text-[17px] text-[#222] z-10 flex items-center justify-center">
                Become a Creator
              </span>
            </div>
          </div>

          {/* Bottom Features */}
          <div 
            className="flex items-center gap-4 text-center text-[#222] font-medium text-[16px] leading-[20px]"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            <span>No Credit Card Required</span>
            <span className="text-[#222] font-black text-lg leading-none mt-[-2px]">|</span>
            <span>Free Forever Plan</span>
            <span className="text-[#222] font-black text-lg leading-none mt-[-2px]">|</span>
            <span>Creator & Brand Friendly</span>
          </div>

        </div>
      </main>


      




      <style dangerouslySetInnerHTML={{__html: `
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}} />
    </div>
  );
}

// Custom Icons
function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function YoutubeIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
      <polygon fill="white" points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
    </svg>
  );
}

// SidebarItem Component
function SidebarItem({ icon, title, count }: { icon: React.ReactNode, title: string, count: string }) {
  return (
    <button className="flex items-center gap-4 px-4 py-[10px] rounded-[14px] text-gray-600 hover:bg-gray-50 hover:text-gray-900 w-full text-left transition-colors group">
      <div className="text-gray-400 group-hover:text-gray-600 transition-colors">
        {icon}
      </div>
      <div className="flex-1">
        <div className="font-bold text-[14.5px] text-gray-800">{title}</div>
        <div className="text-[12.5px] text-gray-400 font-medium">{count}</div>
      </div>
    </button>
  );
}
