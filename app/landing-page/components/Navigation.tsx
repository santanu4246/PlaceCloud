import Link from "next/link";

export default function Navigation() {
  return (
    <header className="flex items-center justify-between px-4 sm:px-8 py-4 sm:py-6 w-[95%] mx-auto relative z-10">
      <div className="flex items-center gap-2">
        <span 
          className="text-[22px] font-bold tracking-tight text-gray-900"
          style={{ fontFamily: 'var(--font-outfit), sans-serif' }}
        >
          PlaceCloud
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
          href="/sign-up" 
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
  );
}
