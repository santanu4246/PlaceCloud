"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { HouseIcon, MapTrifoldIcon, UsersIcon, ChartIcon, SettingIcon, GearListIcon, SubscriptionIcon, PageCustomizationIcon } from "./icons";

export default function Sidebar() {
  const pathname = usePathname();
  const router = useRouter();
  
  const [pendingRoute, setPendingRoute] = useState<string | null>(null);

  useEffect(() => {
    setPendingRoute(null);
  }, [pathname]);

  const isActive = (href: string) => {
    if (pendingRoute) return pendingRoute === href;
    return pathname === href;
  };
  
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);
  
  // Hardcoded for now since Supabase is removed
  const userName = "Santanu";
  const userInitial = "S";
  const userPlan = "pro"; // Enable pro features for now

  const handleLogout = () => {
    // Just navigate back to sign-in
    router.push('/sign-in');
  };

  const navItems = [
    { label: "Home", href: "/dashboard", Icon: HouseIcon },
    { label: "Equipment", href: "/gear-list", Icon: GearListIcon },
    { label: "Resources", href: "/guides", Icon: MapTrifoldIcon },
    { label: "Clients", href: "/customers", Icon: UsersIcon },
  ];

  return (
    <aside 
      className={`relative h-screen bg-white border-r border-[#E5E5E5] transition-[width] duration-300 ease-in-out flex flex-col flex-shrink-0 ${isCollapsed ? 'w-[72px]' : 'w-64'}`}
    >
      <div className="flex flex-col h-full overflow-hidden whitespace-nowrap">
        {/* Header */}
        <div className="h-16 relative flex items-center border-b border-[#E5E5E5] flex-shrink-0">
          <div className={`absolute left-6 whitespace-nowrap transition-opacity duration-300 ${isCollapsed ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
            <span className="text-xl font-extrabold text-[#222]">PlaceCloud.</span>
          </div>
          <button 
            onClick={() => setIsCollapsed(!isCollapsed)}
            className={`absolute flex items-center justify-center p-1.5 rounded hover:bg-gray-100 text-[#444] transition-all duration-300 ${isCollapsed ? 'left-1/2 -translate-x-1/2' : 'right-4'}`}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 12h18M3 6h18M3 18h18" />
            </svg>
          </button>
        </div>

        {/* Main Navigation */}
        <nav className={`flex-1 py-6 flex flex-col gap-2 ${isCollapsed ? 'px-3 overflow-hidden' : 'px-4 overflow-y-auto'}`}>
          {navItems.map((item) => {
            const active = isActive(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                onPointerDown={() => setPendingRoute(item.href)}
                className={`flex items-center px-3 h-10 text-[16px] font-semibold rounded-md ${
                  active 
                    ? "bg-[#EA5E33] text-white" 
                    : "text-[#171717] hover:bg-[#F7F7F7]"
                }`}
              >
                <div className="flex-shrink-0 w-6 h-6 flex items-center justify-center">
                  <item.Icon className={active ? "text-white" : "text-inherit"} />
                </div>
                <span className={`transition-[max-width,opacity,margin] duration-300 overflow-hidden whitespace-nowrap ${isCollapsed ? 'max-w-0 opacity-0 ml-0' : 'max-w-[200px] opacity-100 ml-3'}`}>
                  {item.label}
                </span>
              </Link>
            );
          })}

          {/* Analytics - Pro Only */}
          {userPlan === 'pro' ? (
            <Link
              href="/analytics"
              onPointerDown={() => setPendingRoute('/analytics')}
              className={`flex items-center px-3 h-10 text-[16px] font-semibold rounded-md ${
                isActive("/analytics")
                  ? "bg-[#EA5E33] text-white" 
                  : "text-[#171717] hover:bg-[#F7F7F7]"
              }`}
            >
              <div className="flex-shrink-0 w-6 h-6 flex items-center justify-center">
                <ChartIcon className={isActive("/analytics") ? "text-white" : "text-inherit"} />
              </div>
              <span className={`transition-[max-width,opacity,margin] duration-300 overflow-hidden whitespace-nowrap ${isCollapsed ? 'max-w-0 opacity-0 ml-0' : 'max-w-[200px] opacity-100 ml-3'}`}>
                Analytics
              </span>
            </Link>
          ) : (
            <div className="flex items-center justify-between px-3 h-10 rounded-md cursor-not-allowed text-[#999]">
              <div className="flex items-center">
                <div className="flex-shrink-0 w-6 h-6 flex items-center justify-center opacity-60">
                  <ChartIcon />
                </div>
                <span className={`font-semibold text-[16px] transition-all duration-300 overflow-hidden whitespace-nowrap ${isCollapsed ? 'max-w-0 opacity-0 ml-0' : 'max-w-[200px] opacity-100 ml-3'}`}>
                  Analytics
                </span>
              </div>
              <span 
                className={`text-[12px] font-bold py-1 text-black whitespace-nowrap transition-[max-width,opacity,padding] duration-300 overflow-hidden ${isCollapsed ? 'max-w-0 opacity-0 px-0' : 'max-w-[100px] opacity-100 px-3'}`}
                style={{
                  borderRadius: '100px',
                  background: 'linear-gradient(180deg, #93F477 0%, #53E927 100%)'
                }}
              >
                Pro only
              </span>
            </div>
          )}
        </nav>

        {/* Footer Navigation */}
        <div className={`py-4 flex flex-col gap-2 flex-shrink-0 ${isCollapsed ? 'px-3' : 'px-4'}`}>
          <div className="w-full h-px bg-[#E5E5E5] mb-2"></div>
          
          <Link
            href="/subscription"
            onPointerDown={() => setPendingRoute('/subscription')}
            className={`flex items-center px-3 h-10 text-[16px] font-semibold rounded-md ${
              isActive("/subscription")
                ? "bg-[#EA5E33] text-white" 
                : "text-[#171717] hover:bg-[#F7F7F7]"
            }`}
          >
            <div className="flex-shrink-0 w-6 h-6 flex items-center justify-center">
              <SubscriptionIcon className={isActive("/subscription") ? "text-white" : "text-inherit"} />
            </div>
            <span className={`transition-[max-width,opacity,margin] duration-300 overflow-hidden whitespace-nowrap ${isCollapsed ? 'max-w-0 opacity-0 ml-0' : 'max-w-[200px] opacity-100 ml-3'}`}>
              Subscription
            </span>
          </Link>

          <Link
            href="/page-customization"
            onPointerDown={() => setPendingRoute('/page-customization')}
            className={`flex items-center px-3 h-10 text-[16px] font-semibold rounded-md ${
              isActive("/page-customization")
                ? "bg-[#EA5E33] text-white" 
                : "text-[#171717] hover:bg-[#F7F7F7]"
            }`}
          >
            <div className="flex-shrink-0 w-6 h-6 flex items-center justify-center">
              <PageCustomizationIcon className={isActive("/page-customization") ? "text-white" : "text-inherit"} />
            </div>
            <span className={`transition-[max-width,opacity,margin] duration-300 overflow-hidden whitespace-nowrap ${isCollapsed ? 'max-w-0 opacity-0 ml-0' : 'max-w-[200px] opacity-100 ml-3'}`}>
              Appearance
            </span>
          </Link>

          <Link
            href="/settings"
            onPointerDown={() => setPendingRoute('/settings')}
            className={`flex items-center px-3 h-10 text-[16px] font-semibold rounded-md ${
              isActive("/settings")
                ? "bg-[#EA5E33] text-white" 
                : "text-[#171717] hover:bg-[#F7F7F7]"
            }`}
          >
            <div className="flex-shrink-0 w-6 h-6 flex items-center justify-center">
              <SettingIcon className={isActive("/settings") ? "text-white" : "text-inherit"} />
            </div>
            <span className={`transition-[max-width,opacity,margin] duration-300 overflow-hidden whitespace-nowrap ${isCollapsed ? 'max-w-0 opacity-0 ml-0' : 'max-w-[200px] opacity-100 ml-3'}`}>
              Settings
            </span>
          </Link>

          {/* User Profile */}
          <div className="relative mt-2">
            <button 
              onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
              className="w-full flex items-center justify-between px-3 h-10 rounded-md hover:bg-[#F7F7F7] transition-colors overflow-hidden"
            >
              <div className="flex items-center">
                <div className="w-6 h-6 rounded-full bg-[#EA5E33]/10 flex items-center justify-center text-sm font-bold text-[#EA5E33] flex-shrink-0">
                  {userInitial}
                </div>
                <span className={`font-bold text-base text-[#171717] truncate transition-[max-width,opacity,margin] duration-300 overflow-hidden whitespace-nowrap ${isCollapsed ? 'max-w-0 opacity-0 ml-0' : 'max-w-[120px] opacity-100 ml-3'}`}>
                  {userName}
                </span>
              </div>
              <svg 
                width="20" 
                height="20" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                className={`text-[#171717] transition-all duration-300 flex-shrink-0 ${isUserMenuOpen ? 'rotate-180' : ''} ${isCollapsed ? 'max-w-0 opacity-0 ml-0' : 'max-w-[20px] opacity-100 ml-2'}`}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {/* User Menu Dropdown */}
            {isUserMenuOpen && (
              <div className="absolute bottom-full left-0 mb-2 w-full bg-white border border-[#E5E5E5] rounded-xl shadow-lg p-1 z-50">
                <button
                  onClick={handleLogout}
                  className={`w-full flex items-center h-10 rounded-lg text-[14px] font-semibold text-[#FF4B4B] hover:bg-[#FFF5F5] transition-colors ${isCollapsed ? 'justify-center px-0' : 'px-3'}`}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="flex-shrink-0">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                  </svg>
                  <span className={`transition-[max-width,opacity,margin] duration-300 overflow-hidden whitespace-nowrap ${isCollapsed ? 'max-w-0 opacity-0 ml-0' : 'max-w-[120px] opacity-100 ml-2'}`}>
                    Log out
                  </span>
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </aside>
  );
}
