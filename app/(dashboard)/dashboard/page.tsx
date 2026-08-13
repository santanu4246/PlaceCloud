import { ArrowIcon, CalendarIcon, MailIcon, PhoneIcon } from "@/components/icons";

export default function DashboardHome() {
  return (
    <div className="p-10 w-full">
      <div className="mb-14">
        <h1 className="text-[28px] font-bold text-[#111] mb-6">Let's build your world, Santanu</h1>

        <div className="flex items-center gap-3">
          <div className="inline-flex items-center gap-2 bg-[#EA5E33]/10 px-3 py-1.5 rounded-lg border border-[#EA5E33]/20">
            <div className="w-1.5 h-1.5 rounded-full bg-[#EA5E33]"></div>
            <span className="text-sm font-semibold pr-1 text-black">placecloud.com/santanu</span>
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

      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-[20px] font-bold text-[#111] flex items-center gap-2">
          New Requests <span className="text-[#999] font-medium">6</span>
        </h2>
        <button className="flex items-center gap-1.5 text-[14px] font-semibold text-[#111] bg-[#F5F5F5] hover:bg-[#E5E5E5] px-3.5 py-2 rounded-[10px] transition-colors">
          All Requests 
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14m-7-7 7 7-7 7"/>
          </svg>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {[
          { id: 1, camp: "Zion Narrows Basecamp", user: "John Doe", phone: "123-456-7890", email: "email@example.com", date: "Tue, Oct 15 (Today)" },
          { id: 2, camp: "Yosemite Valley Basecamp", user: "Alice Smith", phone: "987-654-3210", email: "alice@example.com", date: "Wed, Oct 16" },
          { id: 3, camp: "Joshua Tree Retreat", user: "Bob Johnson", phone: "555-123-4567", date: "Thu, Oct 17" },
        ].map((req) => (
          <div key={req.id} className="bg-white border border-[#F0F0F0] rounded-[16px] shadow-[0_2px_12px_rgba(0,0,0,0.04)] flex flex-col overflow-hidden">
            <div className="mx-5 py-3.5 border-b border-[#F0F0F0] flex items-center gap-3">
              <img src="https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=150&q=80" className="w-[30px] h-[30px] rounded-[8px] object-cover" alt="Camp" />
              <span className="font-bold text-[14px] text-[#111]">{req.camp}</span>
            </div>
            
            <div className="p-5 flex flex-col gap-3.5">
              <div className="flex items-center gap-2.5 mb-1.5">
                <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${req.user}`} className="w-[26px] h-[26px] rounded-full bg-gray-100" alt={req.user} />
                <span className="font-bold text-[15px] text-[#111]">{req.user}</span>
              </div>
              
              <div className="flex items-center gap-3 text-[#666]">
                <PhoneIcon className="w-[18px] h-[18px]" />
                <span className="text-[14px] font-medium">{req.phone}</span>
              </div>
              
              {req.email && (
                <div className="flex items-center gap-3 text-[#666]">
                  <MailIcon className="w-[18px] h-[18px]" />
                  <span className="text-[14px] font-medium">{req.email}</span>
                </div>
              )}
              
              <div className="flex items-center gap-3 text-[#666]">
                <CalendarIcon className="w-[18px] h-[18px]" />
                <span className="text-[14px] font-medium">{req.date}</span>
              </div>
            </div>
            
            <div className="p-5 pt-1 mt-auto flex items-center gap-3">
              <button className="flex-1 bg-[#F5F5F5] hover:bg-[#EAEAEA] text-[#111] font-bold text-[14px] py-2.5 rounded-[10px] transition-colors flex items-center justify-center gap-1.5">
                <svg width="12" height="12" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M13 1L1 13M1 1l12 12"/></svg>
                Decline
              </button>
              <button className="flex-1 bg-[#EA5E33] hover:bg-[#D5522B] text-white font-bold text-[14px] py-2.5 rounded-[10px] transition-colors flex items-center justify-center gap-1.5 shadow-sm">
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M13.3333 4L5.99996 11.3333L2.66663 8"/></svg>
                Confirm
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
