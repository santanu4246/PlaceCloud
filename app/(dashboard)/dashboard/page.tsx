import { NoRequestIcon, ArrowIcon } from "@/components/icons";

export default function DashboardHome() {
  return (
    <div className="p-10 max-w-5xl">
      <div className="mb-14">
        <h1 className="text-[28px] font-bold text-[#111] mb-6">Good Morning John</h1>
        
        <div className="flex items-center gap-3">
          <div className="inline-flex items-center gap-2 bg-[#EA5E33]/10 px-3 py-1.5 rounded-lg border border-[#EA5E33]/20">
            <div className="w-1.5 h-1.5 rounded-full bg-[#EA5E33]"></div>
            <span className="text-sm font-semibold pr-1 text-black">placecloud.com/johndoe123</span>
            <ArrowIcon className="h-[18px] w-auto text-black" />
          </div>
          
          <button className="text-[#666] hover:text-[#111] transition-colors" title="Copy link">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
              <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
            </svg>
          </button>
        </div>
      </div>

      <div className="mb-10 flex items-center gap-4">
        <h2 className="text-[20px] font-bold text-[#111] flex items-center gap-2">
          Requests <span className="text-[#999] font-medium">0</span>
        </h2>
      </div>

      <div className="flex flex-col items-center justify-center py-20 mt-10">
        <NoRequestIcon className="w-12 h-12 text-[#EA5E33] mb-6" />
        <h3 className="text-[22px] font-bold text-[#111] mb-2">No Requests</h3>
        <p className="text-[#666] text-center max-w-sm text-[15px]">
          Share your PlaceCloud link — turn your audience into explorers.
        </p>
      </div>
    </div>
  );
}
