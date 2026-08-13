import Link from "next/link";
import Image from "next/image";

export default function ProfileReadyPage() {
  return (
    <div className="w-full flex flex-col items-center justify-center pt-8 text-center">

      {/* Double Tick Icon */}
      <div className="mb-8 flex items-center justify-center w-28 h-28 bg-[#EA5E33]/25 rounded-full">
        <svg width="72" height="72" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M6 26.6666C6 26.6666 9 28 13 34C13 34 13.5697 33.0384 14.6427 31.5052M34 12C29.417 14.2915 24.6238 19.1036 20.7758 23.6446" stroke="#EA5E33" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M16 26.6666C16 26.6666 19 28 23 34C23 34 34 17 44 12" stroke="#EA5E33" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>

      <h2 className="text-[26px] font-bold text-[#222] mb-2" style={{ fontFamily: 'Inter, sans-serif' }}>
        Your Profile Link is Ready
      </h2>
      <p className="text-[#666] text-[15px] mb-8 font-medium" style={{ fontFamily: 'Inter, sans-serif' }}>
        You can share it with people now!
      </p>

      {/* Copy Link Section */}
      <div className="flex items-center gap-3 mb-8 w-full max-w-[320px]">
        {/* Link Box */}
        <div className="flex-1 bg-[#F5F5F5] rounded-xl px-5 py-3.5 flex items-center justify-center gap-6">
          <span className="text-[14px] text-[#222] font-semibold tracking-tight" style={{ fontFamily: 'Inter, sans-serif' }}>
            placecloud.com/Santanudoe123
          </span>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#222" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="7" y1="17" x2="17" y2="7"></line>
            <polyline points="7 7 17 7 17 17"></polyline>
          </svg>
        </div>
        {/* Copy Button */}
        <button className="w-[52px] h-[52px] bg-[#F5F5F5] hover:bg-[#EAEAEA] transition-colors rounded-xl flex items-center justify-center shrink-0">
          <Image src="/onboarding/copy.svg" alt="Copy Link" width={22} height={22} className="opacity-80" />
        </button>
      </div>

      <Link
        href="/"
        className="text-white font-bold text-[15px] w-full max-w-[320px] py-4 rounded-xl hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
        style={{
          fontFamily: 'Inter, sans-serif',
          background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.45) 0%, rgba(255, 255, 255, 0) 65%), #EA5E33',
          boxShadow: 'inset 0 4px 10px rgba(255, 255, 255, 0.25), 8px 16px 8px 0 rgba(0, 0, 0, 0.00), 5px 10px 6px 0 rgba(0, 0, 0, 0.01), 3px 6px 4px 0 rgba(0, 0, 0, 0.04), 1px 3px 3px 0 rgba(0, 0, 0, 0.07), 1px 1px 2px 0 rgba(0, 0, 0, 0.08)'
        }}
      >
        Let&apos;s Explore Now
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="9 18 15 12 9 6"></polyline>
        </svg>
      </Link>
    </div>
  );
}
