export default function Testimonials() {
  return (
    <section className="w-full pb-24 flex flex-col items-center justify-center relative z-10">
      <h2 
        className="mb-8"
        style={{
          color: '#222',
          textAlign: 'center',
          fontFamily: 'Inter, sans-serif',
          fontSize: '32px',
          fontStyle: 'normal',
          fontWeight: 700,
          lineHeight: '20px',
          letterSpacing: '-0.64px'
        }}
      >
        Trusted by 500+ Creators
      </h2>
      
      <div className="flex flex-col items-center gap-4 max-w-[1000px] mx-auto px-4">
        {/* Top Row */}
        <div className="flex flex-wrap justify-center items-center gap-3 sm:gap-4">
          <div className="flex items-center gap-2.5 p-1 pr-5 rounded-[1000px] border border-black/25 border-b-[3px] bg-[#FFF8D2]">
            <img src="/one.svg" alt="Avatar" className="w-[34px] h-[34px] rounded-full object-cover" />
            <span className="text-[14px] sm:text-[15px] font-medium text-[#222]" style={{ fontFamily: 'Inter, sans-serif' }}>“Loved it”</span>
          </div>
          <div className="flex items-center gap-2.5 p-1 pr-5 rounded-[1000px] border border-black/25 border-b-[3px] bg-[#C8F4FF]">
            <img src="/two.svg" alt="Avatar" className="w-[34px] h-[34px] rounded-full object-cover" />
            <span className="text-[14px] sm:text-[15px] font-medium text-[#222]" style={{ fontFamily: 'Inter, sans-serif' }}>“Really Useful”</span>
          </div>
          <div className="flex items-center gap-2.5 p-1 pr-5 rounded-[1000px] border border-black/25 border-b-[3px] bg-[#C5DCFF]">
            <img src="/three.svg" alt="Avatar" className="w-[34px] h-[34px] rounded-full object-cover" />
            <span className="text-[14px] sm:text-[15px] font-medium text-[#222]" style={{ fontFamily: 'Inter, sans-serif' }}>“Gamechanger”</span>
          </div>
          <div className="flex items-center gap-2.5 p-1 pr-5 rounded-[1000px] border border-black/25 border-b-[3px] bg-[#CAFFDE]">
            <img src="/four.svg" alt="Avatar" className="w-[34px] h-[34px] rounded-full object-cover" />
            <span className="text-[14px] sm:text-[15px] font-medium text-[#222]" style={{ fontFamily: 'Inter, sans-serif' }}>“Exactly what i needed”</span>
          </div>
        </div>
        
        {/* Bottom Row */}
        <div className="flex flex-wrap justify-center items-center gap-3 sm:gap-4">
          <div className="flex items-center gap-2.5 p-1 pr-5 rounded-[1000px] border border-black/25 border-b-[3px] bg-[#FFDDFE]">
            <img src="/three.svg" alt="Avatar" className="w-[34px] h-[34px] rounded-full object-cover" />
            <span className="text-[14px] sm:text-[15px] font-medium text-[#222]" style={{ fontFamily: 'Inter, sans-serif' }}>“Finally a solution to my problem 🔥”</span>
          </div>
          <div className="flex items-center gap-2.5 p-1 pr-5 rounded-[1000px] border border-black/25 border-b-[3px] bg-[#FFFAC9]">
            <img src="/four.svg" alt="Avatar" className="w-[34px] h-[34px] rounded-full object-cover" />
            <span className="text-[14px] sm:text-[15px] font-medium text-[#222]" style={{ fontFamily: 'Inter, sans-serif' }}>“Thankyou for this!!!!!”</span>
          </div>
        </div>
      </div>

      <div className="mt-8 text-center text-[#EA5E33] font-medium text-[16px] sm:text-[18px]" style={{ fontFamily: 'Inter, sans-serif' }}>
        and more...
      </div>
    </section>
  );
}
