"use client";

import { useState } from "react";
import { ArrowIcon, CalendarIcon, MailIcon, PhoneIcon } from "@/components/icons";

const requestDetailsData = [
  { 
    id: 1, 
    name: "John Doe", 
    avatar: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&w=60&q=80",
    phone: "123-456-7890", 
    email: "email@example.com", 
    date: "Sat, Aug 15", 
    guide: "Zion Narrows Basecamp", 
    price: "$120.00", 
    status: "Paid" 
  },
  { 
    id: 2, 
    name: "Alice Smith", 
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=60&q=80",
    phone: "987-654-3210", 
    email: "alice@example.com", 
    date: "Sat, Aug 15", 
    guide: "Yosemite Valley Basecamp", 
    price: "$150.00", 
    status: "Not Paid" 
  },
  { 
    id: 3, 
    name: "Bob Johnson", 
    avatar: "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?auto=format&fit=crop&w=60&q=80",
    phone: "555-123-4567", 
    email: "", 
    date: "Sat, Aug 15", 
    guide: "Joshua Tree Retreat", 
    price: "$95.00", 
    status: "Not Paid" 
  }
];

export default function DashboardHome() {
  const [view, setView] = useState<"dashboard" | "all">("dashboard");
  const [requests, setRequests] = useState(requestDetailsData);
  const [openDropdownIndex, setOpenDropdownIndex] = useState<number | null>(null);

  const toggleDropdown = (index: number) => {
    setOpenDropdownIndex(openDropdownIndex === index ? null : index);
  };

  const handleMarkAsPaid = (index: number) => {
    const newRequests = [...requests];
    newRequests[index].status = "Paid";
    setRequests(newRequests);
    setOpenDropdownIndex(null);
  };

  if (view === "all") {
    return (
      <div className="p-5 md:p-10 w-full min-h-screen">
        <div className="mb-8">
          <button onClick={() => setView("dashboard")} className="flex items-center gap-3 text-[26px] font-bold text-[#111] hover:text-[#EA5E33] transition-colors">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 18l-6-6 6-6" />
            </svg>
            All Requests
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...requests, ...requests].map((req, index) => (
            <div key={`all-${index}`} className="bg-white border border-[#F0F0F0] rounded-[16px] shadow-[0_2px_12px_rgba(0,0,0,0.04)] flex flex-col overflow-hidden">
              <div className="mx-5 py-4 border-b border-[#F0F0F0] flex items-center gap-3">
                <img src={req.avatar} className="w-[32px] h-[32px] rounded-[8px] object-cover bg-gray-100" alt="Camp" />
                <span className="font-bold text-[14px] text-[#111]">{req.guide}</span>
              </div>
              
              <div className="p-5 flex flex-col gap-3.5">
                <div className="flex items-center gap-3 mb-1.5">
                  <img src={req.avatar} className="w-[28px] h-[28px] rounded-full object-cover bg-gray-100" alt={req.name} />
                  <span className="font-bold text-[15px] text-[#111]">{req.name}</span>
                </div>
                
                <div className="flex items-center gap-3 text-[#666]">
                  <PhoneIcon className="w-[18px] h-[18px]" />
                  <span className="text-[14px] font-medium">{req.phone}</span>
                </div>
                
                <div className="flex items-center gap-3 text-[#666]">
                  <CalendarIcon className="w-[18px] h-[18px]" />
                  <span className="text-[14px] font-medium">{req.date} (Today)</span>
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

  return (
    <div className="p-5 md:p-10 w-full">
      <div className="mb-10 md:mb-14">
        <h1 className="text-[24px] md:text-[28px] font-bold text-[#111] mb-4 md:mb-6 leading-tight">Let's build your world, Santanu</h1>

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

      <div className="mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <h2 className="text-[18px] md:text-[20px] font-bold text-[#111] flex items-center gap-2">
          New Requests <span className="text-[#999] font-medium">6</span>
        </h2>
        <button onClick={() => setView("all")} className="flex items-center gap-1.5 text-[14px] font-semibold text-[#111] bg-[#F5F5F5] hover:bg-[#E5E5E5] px-3.5 py-2 rounded-[10px] transition-colors">
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

      <div className="mt-10 md:mt-14">
        <h2 className="text-[22px] md:text-[26px] font-bold text-[#111] mb-6">Request Details</h2>
        <div className="bg-white border border-[#F0F0F0] rounded-[24px] shadow-[0_2px_12px_rgba(0,0,0,0.04)] overflow-hidden">
          <div className="overflow-x-auto pb-10 -mb-10">
            <table className="w-full text-left border-collapse min-w-[900px]">
            <thead>
              <tr className="border-b border-[#F0F0F0]">
                <th className="px-8 py-5 text-[15px] font-medium text-[#666] w-[60px]">#</th>
                <th className="px-8 py-5 text-[15px] font-medium text-[#666]">Customer Info</th>
                <th className="px-8 py-5 text-[15px] font-medium text-[#666]">Date of Request</th>
                <th className="px-8 py-5 text-[15px] font-medium text-[#666]">Service/Price</th>
                <th className="px-8 py-5 text-[15px] font-medium text-[#666]">Payment Status, Unlock Link</th>
                <th className="px-8 py-5 w-[60px]"></th>
              </tr>
            </thead>
            <tbody>
              {requests.map((row, index) => (
                <tr key={index} className={`border-[#F0F0F0] hover:bg-gray-50/50 transition-colors ${index !== requests.length - 1 ? 'border-b' : ''}`}>
                  <td className="px-8 py-6 align-top">
                    <span className="text-[15px] font-bold text-[#111]">{row.id}</span>
                  </td>
                  <td className="px-8 py-6 align-top">
                    <div className="flex flex-col gap-3">
                      <div className="flex items-center gap-3">
                        <img src={row.avatar} className="w-[28px] h-[28px] rounded-full object-cover bg-gray-100" alt={row.name} />
                        <span className="font-bold text-[15px] text-[#111]">{row.name}</span>
                      </div>
                      <div className="flex items-center gap-3 text-[#666]">
                        <PhoneIcon className="w-[18px] h-[18px]" />
                        <span className="text-[14px] font-medium">{row.phone}</span>
                      </div>
                      {row.email && (
                        <div className="flex items-center gap-3 text-[#666]">
                          <MailIcon className="w-[18px] h-[18px]" />
                          <span className="text-[14px] font-medium">{row.email}</span>
                        </div>
                      )}
                    </div>
                  </td>
                  <td className="px-8 py-6 align-top">
                    <div className="flex items-center gap-3 text-[#666]">
                      <CalendarIcon className="w-[18px] h-[18px]" />
                      <span className="text-[14px] font-medium">{row.date}</span>
                    </div>
                  </td>
                  <td className="px-8 py-6 align-top">
                    <div className="flex flex-col gap-2">
                      <span className="font-bold text-[15px] text-[#111]">{row.guide}</span>
                      <span className="text-[14px] font-medium text-[#666]">{row.price}</span>
                    </div>
                  </td>
                  <td className="px-8 py-6 align-top">
                    {row.status === "Paid" ? (
                      <div className="flex flex-col gap-3">
                        <div className="flex items-center gap-2 text-[#EA5E33] font-bold text-[14px]">
                          <img src="/home/tick-double.svg" alt="Paid" className="w-[16px] h-[16px]" />
                          Paid
                        </div>
                        <button className="flex items-center gap-2 text-[#EA5E33] font-bold text-[14px] underline hover:no-underline w-fit">
                          <img src="/home/copy.svg" alt="Copy" className="w-[16px] h-[16px]" />
                          Copy Unlock Token
                        </button>
                      </div>
                    ) : (
                      <div className="font-bold text-[15px] text-[#111] pt-1">
                        Not Paid
                      </div>
                    )}
                  </td>
                  <td className="px-8 py-6 align-top text-right relative">
                    <button onClick={() => toggleDropdown(index)} className="text-[#111] hover:bg-gray-100 p-1.5 rounded-lg transition-colors">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="1.5"></circle>
                        <circle cx="12" cy="5" r="1.5"></circle>
                        <circle cx="12" cy="19" r="1.5"></circle>
                      </svg>
                    </button>
                    {openDropdownIndex === index && (
                      <div className="absolute right-12 top-10 bg-white border border-[#F0F0F0] rounded-[14px] shadow-[0_4px_24px_rgba(0,0,0,0.08)] py-2 w-[180px] z-10 text-left">
                        <button onClick={() => handleMarkAsPaid(index)} className="w-full px-5 py-2.5 text-[14px] font-bold text-[#111] hover:bg-gray-50 flex items-center gap-3 transition-colors">
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                          Mark as Paid
                        </button>
                        <div className="h-[1px] bg-[#F0F0F0] my-1 mx-3"></div>
                        <button className="w-full px-5 py-2.5 text-[14px] font-bold text-[#E53935] hover:bg-gray-50 flex items-center gap-3 transition-colors">
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                          Reject Request
                        </button>
                      </div>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          </div>
        </div>
      </div>
    </div>
  );
}
