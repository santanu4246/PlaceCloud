import Link from "next/link";

export default function ForgotPasswordPage() {
  return (
    <div className="w-full flex flex-col">
      <div className="mb-6">
        <Link href="/sign-in" className="w-11 h-11 bg-[#F5F5F5] hover:bg-[#EAEAEA] transition-colors rounded-xl flex items-center justify-center">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#222" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M19 12H5M12 19l-7-7 7-7"/>
          </svg>
        </Link>
      </div>
      
      <h2 className="text-[32px] font-bold text-[#222] mb-1" style={{ fontFamily: 'Inter, sans-serif' }}>Forgot Password?</h2>
      <p className="text-[#444] text-[15px] mb-8" style={{ fontFamily: 'Inter, sans-serif' }}>Reset your password.</p>

      <form className="flex flex-col gap-8">
        <div className="flex flex-col gap-2">
          <label className="text-[13px] font-medium text-[#444]" style={{ fontFamily: 'Inter, sans-serif' }}>Email address</label>
          <input 
            type="email" 
            placeholder="example@gmail.com" 
            className="w-full bg-white border border-[#E5E5E5] rounded-xl px-4 py-3.5 text-[14px] text-[#222] placeholder:text-[#999] focus:ring-2 focus:ring-[#EA5E33] focus:border-[#EA5E33] outline-none transition-all"
            style={{ fontFamily: 'Inter, sans-serif' }}
          />
        </div>

        <button 
          className="text-white font-bold text-[15px] w-full py-4 rounded-xl hover:opacity-90 transition-opacity"
          style={{
            fontFamily: 'Inter, sans-serif',
            background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.45) 0%, rgba(255, 255, 255, 0) 65%), #EA5E33',
            boxShadow: 'inset 0 4px 10px rgba(255, 255, 255, 0.25), 8px 16px 8px 0 rgba(0, 0, 0, 0.00), 5px 10px 6px 0 rgba(0, 0, 0, 0.01), 3px 6px 4px 0 rgba(0, 0, 0, 0.04), 1px 3px 3px 0 rgba(0, 0, 0, 0.07), 1px 1px 2px 0 rgba(0, 0, 0, 0.08)'
          }}
        >
          Send Password Reset Link
        </button>
      </form>
    </div>
  );
}
