import Image from "next/image";
import { 
  ChevronDown, 
  MapPin, 
  Check, 
  ArrowRight,
  Star,
  Share2,
  BarChart2,
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
  return (
    <div className="min-h-screen bg-[#FAFAFA] font-sans text-gray-900 relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-0 right-0 w-2/3 h-2/3 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 pointer-events-none" />
      <div className="absolute top-40 left-10 w-64 h-64 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10 pointer-events-none" />

      {/* Navigation */}
      <header className="flex items-center justify-between px-8 py-6 max-w-7xl mx-auto relative z-10">
        <div className="flex items-center gap-2">
          <Image src="/logo.png" alt="PlateMap Logo" width={32} height={32} className="object-contain" />
          <span className="text-xl font-bold tracking-tight text-gray-900">PlateMap</span>
        </div>
        
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
          <Link href="#" className="hover:text-gray-900">Features</Link>
          <Link href="#" className="hover:text-gray-900">Examples</Link>
          <Link href="#" className="hover:text-gray-900">Pricing</Link>
          <Link href="#" className="hover:text-gray-900">Creators</Link>
          <Link href="#" className="flex items-center gap-1 hover:text-gray-900">
            Resources <ChevronDown className="w-4 h-4" />
          </Link>
        </nav>

        <div className="flex items-center">
          <Link href="#" className="text-sm font-medium bg-[#FF552E] text-white px-5 py-2.5 rounded-xl hover:bg-[#E04825] transition-colors shadow-sm">
            Get Started
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <main className="max-w-7xl mx-auto px-8 pt-12 pb-24 grid lg:grid-cols-[1fr_1.1fr] gap-16 items-center relative z-10">
        
        {/* Left Column */}
        <div className="flex flex-col items-start space-y-8 relative z-20">
          <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-[#FFF0EB] text-[#FF552E] text-sm font-semibold">
            The ultimate link-in-bio for creators
          </div>
          
          <h1 className="text-[3.5rem] sm:text-7xl font-extrabold tracking-tight leading-[1.05]">
            <span className="block text-gray-900">Your places.</span>
            <span className="block text-gray-900">Your videos.</span>
            <span className="block text-[#FF552E]">One link.</span>
          </h1>

          <p className="text-lg sm:text-xl text-gray-500 max-w-lg leading-relaxed">
            Turn every spot from your videos into a shareable, monetizable city guide. Stop answering "Where is this?" in your DMs.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto pt-2">
            <Link href="#" className="flex items-center justify-center gap-2 w-full sm:w-auto bg-[#FF552E] text-white px-8 py-4 rounded-xl text-lg font-bold hover:bg-[#E04825] transition-colors shadow-[0_8px_20px_-6px_rgba(255,85,46,0.5)]">
              Start Building Free <ArrowRight className="w-5 h-5" />
            </Link>
          </div>

          <div className="flex flex-wrap items-center gap-6 text-sm text-gray-500 font-semibold pt-2">
            <div className="flex items-center gap-2">
              <div className="bg-[#FFF0EB] p-0.5 rounded-full text-[#FF552E]">
                <Check className="w-3.5 h-3.5" strokeWidth={3} />
              </div>
              No credit card required
            </div>
            <div className="flex items-center gap-2">
              <div className="bg-[#FFF0EB] p-0.5 rounded-full text-[#FF552E]">
                <Check className="w-3.5 h-3.5" strokeWidth={3} />
              </div>
              Free forever plan
            </div>
          </div>

          {/* Trusted by section */}
          <div className="pt-2 flex flex-col gap-4 relative">
            <div className="text-xs font-bold text-gray-400 tracking-[0.2em] uppercase">Trusted by 500+ creators</div>
            <div className="flex items-center gap-4">
              <div className="flex -space-x-3">
                <img src="https://i.pravatar.cc/100?img=1" alt="Creator" className="w-10 h-10 rounded-full border-2 border-white object-cover shadow-sm" />
                <img src="https://i.pravatar.cc/100?img=2" alt="Creator" className="w-10 h-10 rounded-full border-2 border-white object-cover shadow-sm" />
                <img src="https://i.pravatar.cc/100?img=3" alt="Creator" className="w-10 h-10 rounded-full border-2 border-white object-cover shadow-sm" />
                <img src="https://i.pravatar.cc/100?img=4" alt="Creator" className="w-10 h-10 rounded-full border-2 border-white object-cover shadow-sm" />
                <img src="https://i.pravatar.cc/100?img=5" alt="Creator" className="w-10 h-10 rounded-full border-2 border-white object-cover shadow-sm" />
                <div className="w-10 h-10 rounded-full border-2 border-white bg-gray-50 flex items-center justify-center text-xs font-bold text-gray-500 shadow-sm z-10">
                  +500
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Wayn Profile Mockup (Populated & Compact) */}
        <div className="relative w-full h-[640px] mt-12 lg:mt-0">
          {/* Main Card */}
          <div className="absolute inset-0 bg-[#F7F7F8] rounded-[32px] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] border border-gray-100 overflow-hidden flex flex-col relative z-20">
            
            <div className="overflow-y-auto custom-scrollbar p-5 flex flex-col gap-4 h-full">
              {/* Header Section */}
              <div>
                {/* Cover Photo */}
                <div className="w-full h-[120px] rounded-[20px] shadow-sm overflow-hidden relative">
                  <img src="https://images.unsplash.com/photo-1506929562872-bb421503ef21?w=800&q=80" className="w-full h-full object-cover" alt="Cover" />
                </div>
                
                <div className="px-2 flex justify-between items-start">
                  <div className="flex gap-4">
                    {/* Avatar */}
                    <div className="w-[72px] h-[72px] rounded-full border-[4px] border-[#F7F7F8] -mt-[36px] shrink-0 shadow-sm overflow-hidden bg-white relative z-10">
                      <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80" className="w-full h-full object-cover" alt="Profile" />
                    </div>
                    
                    {/* Name & Handle */}
                    <div className="pt-2">
                      <div className="flex items-center gap-1 mb-0.5">
                        <h3 className="font-extrabold text-[18px] text-gray-900 tracking-tight">Santanu</h3>
                        <svg className="w-[14px] h-[14px] text-[#FF552E]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                          <polyline points="22 4 12 14.01 9 11.01"></polyline>
                        </svg>
                        <span className="text-[12px] text-gray-500 font-medium ml-1">@santanu</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Share Icon */}
                  <button className="pt-3 text-gray-400 hover:text-gray-900 transition-colors">
                    <Share2 className="w-[16px] h-[16px]" />
                  </button>
                </div>

                {/* Bio Section */}
                <div className="px-2 mt-4">
                  <p className="text-[13px] text-gray-600 font-medium">Food & travel filmmaker. Catching the best spots around the globe. 🌍🍝</p>
                </div>
              </div>

              {/* Guides Section */}
              <div className="px-2 mt-2 shrink-0">
                <div className="flex items-center gap-3 mb-3">
                  <h4 className="font-extrabold text-[16px] text-gray-900 flex gap-1.5 items-center tracking-tight">
                    Spot Lists <span className="text-gray-400">2</span>
                  </h4>
                  <div className="flex-1 h-px bg-gray-200 mt-0.5"></div>
                </div>
                
                <div className="grid grid-cols-2 gap-3">
                  {/* Guide 1 */}
                  <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden flex flex-col group cursor-pointer hover:shadow-md transition-all">
                    <div className="h-[90px] w-full relative overflow-hidden">
                      <img src="https://images.unsplash.com/photo-1544644181-1484b3fdfc62?w=600&q=80" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt="Bali" />
                      <div className="absolute bottom-2 left-2 bg-black/60 backdrop-blur-md px-2 py-0.5 rounded text-white text-[10px] font-bold">8 Spots</div>
                    </div>
                    <div className="p-2.5">
                      <h4 className="font-bold text-gray-900 text-[13px] leading-tight mb-1">Ultimate Bali Guide</h4>
                      <p className="text-[11px] text-gray-500 font-medium">Cafes & Beaches</p>
                    </div>
                  </div>

                  {/* Guide 2 */}
                  <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden flex flex-col group cursor-pointer hover:shadow-md transition-all">
                    <div className="h-[90px] w-full relative overflow-hidden">
                      <img src="https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=600&q=80" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt="Paris" />
                      <div className="absolute bottom-2 left-2 bg-black/60 backdrop-blur-md px-2 py-0.5 rounded text-white text-[10px] font-bold">12 Spots</div>
                    </div>
                    <div className="p-2.5">
                      <h4 className="font-bold text-gray-900 text-[13px] leading-tight mb-1">Paris Hidden Gems</h4>
                      <p className="text-[11px] text-gray-500 font-medium">Pastries & Views</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* My Gear List Section */}
              <div className="px-2 mt-2 shrink-0">
                <div className="flex items-center gap-3 mb-3">
                  <h4 className="font-extrabold text-[16px] text-gray-900 tracking-tight">Creator Kit</h4>
                  <div className="flex-1 h-px bg-gray-200 mt-0.5"></div>
                </div>
                
                <div className="flex gap-3">
                  {/* Gear 1 */}
                  <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-2 flex items-center gap-3 w-full">
                    <div className="w-12 h-12 rounded-lg bg-gray-50 overflow-hidden shrink-0 border border-gray-100">
                      <img src="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=400&q=80" alt="Camera" className="w-full h-full object-cover p-1 mix-blend-multiply" />
                    </div>
                    <div>
                      <div className="font-bold text-[12px] text-gray-900">Sony A7IV</div>
                      <div className="text-[10px] text-gray-500 font-medium">Main Camera</div>
                    </div>
                  </div>
                  {/* Gear 2 */}
                  <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-2 flex items-center gap-3 w-full">
                    <div className="w-12 h-12 rounded-lg bg-gray-50 overflow-hidden shrink-0 border border-gray-100">
                      <img src="https://images.unsplash.com/photo-1550837368-6538b35ce8f9?w=400&q=80" alt="Lens" className="w-full h-full object-cover p-1 mix-blend-multiply" />
                    </div>
                    <div>
                      <div className="font-bold text-[12px] text-gray-900">24-70mm f/2.8</div>
                      <div className="text-[10px] text-gray-500 font-medium">Everyday Lens</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Upsell Banner (Compact) */}
              <div className="w-full rounded-2xl overflow-hidden relative shadow-sm mt-auto shrink-0 h-[70px] flex items-center px-4">
                <div className="absolute inset-0 bg-[#2D3748]">
                  <img src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&q=80" alt="Mountains" className="w-full h-full object-cover opacity-60 mix-blend-overlay" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/20"></div>
                
                <div className="relative z-10 flex items-center justify-between w-full">
                  <div>
                    <h2 className="text-[15px] font-extrabold text-white leading-tight tracking-tight">Monetize Your Map.</h2>
                    <p className="text-gray-300 font-medium text-[11px]">Turn your favorite spots into paid city guides.</p>
                  </div>
                  <button className="bg-[#FF552E] hover:bg-[#E04825] text-white font-extrabold text-[12px] px-4 py-1.5 rounded-lg flex items-center gap-1 transition-colors shadow-sm">
                    Claim Profile <svg className="w-3 h-3 ml-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
                  </button>
                </div>
              </div>

            </div>
          </div>
        </div>
      </main>


      
      {/* Decorative dashed path spanning left to right */}
      <div className="absolute bottom-4 left-0 w-full h-40 opacity-60 pointer-events-none hidden md:block overflow-hidden">
        <svg viewBox="0 0 1440 150" preserveAspectRatio="xMidYMid slice" fill="none" className="w-full h-full text-[#FF552E]">
          <path d="M -50 120 Q 360 180, 720 90 T 1500 30" stroke="currentColor" strokeWidth="2.5" strokeDasharray="8 8" />
          <circle cx="150" cy="133" r="5" fill="currentColor" />
          <circle cx="1250" cy="46" r="4" fill="currentColor" />
        </svg>
        <Plane className="w-7 h-7 text-[#FF552E] absolute transform rotate-[25deg]" style={{ top: '15px', right: '12%'}} />
      </div>

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
