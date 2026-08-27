"use client";

import React, { useState, useEffect, useRef } from "react";
import { PhoneIcon } from "@/components/icons";

const initialClients = [
  {
    id: 1,
    name: "Customer Name",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=60&q=80",
    phone: "123-456-7890",
    purchases: []
  },
  {
    id: 2,
    name: "Customer Name",
    avatar: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&w=60&q=80",
    phone: "123-456-7890",
    purchases: []
  },
  {
    id: 3,
    name: "Customer Name",
    avatar: "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?auto=format&fit=crop&w=60&q=80",
    phone: "123-456-7890",
    purchases: []
  },
  {
    id: 4,
    name: "Customer Name",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=60&q=80",
    phone: "123-456-7890",
    purchases: [
      { name: "George Everest Peak", price: "$10" },
      { name: "Atutu Valley", price: "$10" },
      { name: "George Everest Peak", price: "$10" },
      { name: "Nag Tibba Trek Trail", price: "$10" },
    ]
  },
  {
    id: 5,
    name: "Customer Name",
    avatar: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&w=60&q=80",
    phone: "123-456-7890",
    purchases: [
      { name: "George Everest Peak", price: "$10" },
      { name: "Atutu Valley", price: "$10" },
      { name: "George Everest Peak", price: "$10" },
      { name: "Nag Tibba Trek Trail", price: "$10" },
    ]
  },
  {
    id: 6,
    name: "Customer Name",
    avatar: "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?auto=format&fit=crop&w=60&q=80",
    phone: "123-456-7890",
    purchases: []
  }
];

export default function DashboardClients() {
  const [clients, setClients] = useState(initialClients);
  const [openDropdown, setOpenDropdown] = useState<number | null>(null);
  const [expandedCards, setExpandedCards] = useState<Record<number, boolean>>({
    4: true,
    5: true
  });
  
  // Modal state
  const [renameModalOpen, setRenameModalOpen] = useState<number | null>(null);
  const [renameValue, setRenameValue] = useState("");

  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setOpenDropdown(null);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleDropdown = (id: number, e: React.MouseEvent) => {
    e.stopPropagation();
    setOpenDropdown(openDropdown === id ? null : id);
  };

  const toggleAccordion = (id: number) => {
    setExpandedCards(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const openRenameModal = (id: number, currentName: string) => {
    setRenameValue(currentName);
    setRenameModalOpen(id);
    setOpenDropdown(null);
  };

  const handleRenameSave = () => {
    if (renameModalOpen !== null && renameValue.trim() !== "") {
      setClients(clients.map(client => 
        client.id === renameModalOpen 
          ? { ...client, name: renameValue.trim() }
          : client
      ));
    }
    setRenameModalOpen(null);
  };

  return (
    <div className="p-5 md:p-10 w-full min-h-screen bg-[#FAFAFA]">
      <div className="mb-10 w-full flex items-center relative">
        <h1 className="text-[28px] font-bold text-[#111] bg-[#FAFAFA] pr-6 relative z-10">Clients</h1>
        <div className="absolute left-0 right-0 h-[1px] bg-[#E5E5E5] top-1/2 -translate-y-1/2 z-0"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-[1200px]">
        {clients.map((client) => {
          const isExpanded = expandedCards[client.id];
          const hasPurchases = client.purchases.length > 0;
          
          return (
            <div key={client.id} className="bg-white border border-[#E5E5E5] rounded-[16px] overflow-visible shadow-[0_2px_10px_rgba(0,0,0,0.02)] h-fit">
              <div className="p-5">
                {/* Header */}
                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center gap-3">
                    <img src={client.avatar} alt="Avatar" className="w-[30px] h-[30px] rounded-full object-cover bg-gray-100" />
                    <span className="font-bold text-[15.5px] text-[#111]">{client.name}</span>
                  </div>
                  
                  <div className="relative" ref={openDropdown === client.id ? dropdownRef : null}>
                    <button 
                      onClick={(e) => toggleDropdown(client.id, e)}
                      className="p-1 hover:bg-gray-100 rounded-lg transition-colors text-[#666]"
                    >
                      <img src="/locations/threedot.svg" alt="Options" className="w-[18px] h-[18px] opacity-80" />
                    </button>

                    {openDropdown === client.id && (
                      <div className="absolute right-0 top-8 bg-white border border-[#F0F0F0] rounded-[14px] shadow-[0_4px_24px_rgba(0,0,0,0.08)] py-2 w-[180px] z-10 text-left">
                        <button 
                          onClick={() => openRenameModal(client.id, client.name)}
                          className="w-full px-5 py-2.5 text-[13.5px] font-bold text-[#111] hover:bg-gray-50 flex items-center gap-3 transition-colors"
                        >
                          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg>
                          Rename Client
                        </button>
                        <div className="h-[1px] bg-[#F0F0F0] my-1 mx-3"></div>
                        <button className="w-full px-5 py-2.5 text-[13.5px] font-bold text-[#E53935] hover:bg-gray-50 flex items-center gap-3 transition-colors">
                          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 6h18"></path><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path></svg>
                          Remove Client
                        </button>
                      </div>
                    )}
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-center gap-3 text-[#666] mb-5">
                  <PhoneIcon className="w-[18px] h-[18px]" />
                  <span className="text-[14px] font-medium">{client.phone}</span>
                </div>

                {/* Accordion Toggle */}
                <button 
                  onClick={() => toggleAccordion(client.id)}
                  className="w-full flex items-center justify-between text-[#888] hover:text-[#444] transition-colors"
                >
                  <span className="text-[14px] font-semibold text-inherit">Past Purchased Locations</span>
                  <svg 
                    width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" 
                    className={`transition-transform duration-200 ${isExpanded ? 'rotate-90' : 'rotate-0'}`}
                  >
                    <polyline points="9 18 15 12 9 6"></polyline>
                  </svg>
                </button>
              </div>

              {/* Accordion Content */}
              {isExpanded && hasPurchases && (
                <div className="px-5 pb-5 pt-1 flex flex-col gap-2.5">
                  {client.purchases.map((purchase, idx) => (
                    <div key={idx} className="flex items-center justify-between">
                      <div className="flex items-center gap-2.5">
                        <div className="w-[4px] h-[4px] rounded-full bg-[#333]"></div>
                        <span className="text-[14px] font-bold text-[#333]">{purchase.name}</span>
                      </div>
                      <span className="text-[14px] font-bold text-[#EA5E33]">{purchase.price}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Rename Modal */}
      {renameModalOpen !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-[2px] p-4">
          <div className="bg-white rounded-[24px] p-8 max-w-[400px] w-full flex flex-col items-center shadow-2xl animate-in fade-in zoom-in duration-200">
            <div className="w-16 h-16 bg-[#FFF4F0] rounded-[16px] flex items-center justify-center mb-5">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#EA5E33" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg>
            </div>
            
            <h2 className="text-[22px] font-bold text-[#111] mb-2">Rename Client</h2>
            
            <p className="text-[#666] text-[15px] leading-relaxed text-center mb-6 px-1">
              Enter the new name for this client below.
            </p>

            <input 
              type="text" 
              value={renameValue}
              onChange={(e) => setRenameValue(e.target.value)}
              placeholder="Client Name"
              className="w-full h-[48px] mb-8 bg-white border border-[#E5E5E5] rounded-[12px] px-4 outline-none focus:border-[#EA5E33] focus:ring-1 focus:ring-[#EA5E33] transition-all text-[#111] text-[15px] font-medium"
              autoFocus
            />
            
            <div className="flex w-full gap-3">
              <button 
                onClick={() => setRenameModalOpen(null)}
                className="flex-1 py-3.5 rounded-xl font-bold text-[15px] text-[#111] bg-[#F5F5F5] hover:bg-[#EAEAEA] transition-colors"
              >
                Cancel
              </button>
              <button 
                onClick={handleRenameSave}
                className="flex-1 py-3.5 rounded-xl font-bold text-[15px] text-white bg-[#EA5E33] hover:bg-[#D5522B] transition-colors shadow-sm"
              >
                Save Name
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
