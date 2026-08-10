import Link from "next/link";

export default function Hero() {
  return (
    <main className="w-[95%] mx-auto mb-12 relative z-10">
      <div 
        className="relative w-full rounded-b-[40px] rounded-t-none overflow-hidden flex flex-col items-center pt-4 sm:pt-14 pb-32 sm:pb-36 px-4"
        style={{
          backgroundImage: 'url(/heroImage.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          minHeight: 'min(85vh, 800px)'
        }}
      >
        {/* Top Pill */}
        <div 
          className="mb-6 px-4 py-2 text-[12px] sm:text-[15px] font-semibold tracking-wide text-center"
          style={{
            borderRadius: '100px',
            background: 'rgba(255, 110, 53, 0.25)',
            color: '#222'
          }}
        >
          The Ultimate Link In Bio for Creators
        </div>

        {/* Main Titles */}
        <div className="flex flex-col items-center gap-1 mb-6 mt-2 px-4 max-w-full">
          <h1 
            style={{
              color: '#222',
              fontFamily: 'Inter, sans-serif',
              fontWeight: 500,
              letterSpacing: '-0.04em'
            }}
            className="text-center text-[30px] sm:text-[54px] md:text-[74px] leading-[36px] sm:leading-[58px] md:leading-[74px]"
          >
            Your Places,<br className="sm:hidden" /> Your Video
          </h1>

          {/* One Link Pill */}
          <div className="bg-white rounded-2xl px-6 sm:px-8 py-1.5 flex items-center justify-center mt-2 mx-4 inline-flex max-w-full">
            <span 
              style={{
                color: '#222',
                fontFamily: 'Inter, sans-serif',
                fontWeight: 700,
                letterSpacing: '-0.04em'
              }}
              className="text-[24px] sm:text-[48px] md:text-[64px] leading-[30px] sm:leading-[58px] md:leading-[74px]"
            >
              One Link
            </span>
            <span className="text-[24px] sm:text-[48px] md:text-[64px] ml-2 leading-[30px] sm:leading-[58px] md:leading-[74px]">🔗</span>
          </div>
        </div>

        {/* Subtitle */}
        <p 
          className="max-w-[680px] mb-10 text-center px-6 text-[14px] sm:text-[18px] md:text-[20px] leading-[22px] sm:leading-[32px] md:leading-[36px]"
          style={{
            color: '#222',
            fontFamily: 'Inter, sans-serif',
            fontWeight: 400,
            letterSpacing: '0.4px'
          }}
        >
          Turn every spot from your videos into a shareable monetizable city guide. Stop answering &ldquo;Where is this?&rdquo; in your DMs
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4 mb-10">
          {/* Try It Now Button */}
          <Link 
            href="/sign-up"
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
              boxShadow: 'inset 0 5px 12px rgba(255, 255, 255, 0.45), 8px 16px 8px 0 rgba(0, 0, 0, 0.00), 5px 10px 6px 0 rgba(0, 0, 0, 0.01), 3px 6px 4px 0 rgba(0, 0, 0, 0.04), 1px 3px 3px 0 rgba(0, 0, 0, 0.07), 1px 1px 2px 0 rgba(0, 0, 0, 0.08)'
            }}
          >
            Try It Now
          </Link>

          {/* Become a Creator Button (iOS 26 Glass Effect) */}
          <Link 
            href="/sign-up"
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
          </Link>
        </div>

        {/* Bottom Features */}
        <div 
          className="flex flex-wrap justify-center items-center gap-x-4 gap-y-2 text-center text-[#222] font-medium text-[14px] sm:text-[16px] leading-[20px] px-4"
          style={{ fontFamily: 'Inter, sans-serif' }}
        >
          <span>No Credit Card Required</span>
          <span className="hidden sm:inline text-[#222] font-black text-lg leading-none mt-[-2px]">|</span>
          <span>Free Forever Plan</span>
          <span className="hidden sm:inline text-[#222] font-black text-lg leading-none mt-[-2px]">|</span>
          <span>Creator & Brand Friendly</span>
        </div>

      </div>
    </main>
  );
}
