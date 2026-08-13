import Link from "next/link";
import Image from "next/image";

export default function CreateProfilePage() {
  return (
    <div className="w-full flex flex-col pt-4">

      <h2 className="text-[28px] font-bold text-[#222] mb-8" style={{ fontFamily: 'Inter, sans-serif' }}>
        Let&apos;s Create Your Profile
      </h2>

      <form className="flex flex-col gap-6">
        {/* Name Fields */}
        <div className="flex gap-4">
          <div className="flex flex-col gap-2 flex-1">
            <label className="text-[13px] font-medium text-[#222]" style={{ fontFamily: 'Inter, sans-serif' }}>First Name</label>
            <input
              type="text"
              placeholder="Santanu"
              className="w-full bg-white border border-[#E5E5E5] rounded-xl px-4 py-3 text-[14px] text-[#222] placeholder:text-[#999] focus:ring-2 focus:ring-[#EA5E33] focus:border-[#EA5E33] outline-none transition-all"
              style={{ fontFamily: 'Inter, sans-serif' }}
            />
          </div>
          <div className="flex flex-col gap-2 flex-1">
            <label className="text-[13px] font-medium text-[#222]" style={{ fontFamily: 'Inter, sans-serif' }}>Last Name</label>
            <input
              type="text"
              placeholder="Doe"
              className="w-full bg-white border border-[#E5E5E5] rounded-xl px-4 py-3 text-[14px] text-[#222] placeholder:text-[#999] focus:ring-2 focus:ring-[#EA5E33] focus:border-[#EA5E33] outline-none transition-all"
              style={{ fontFamily: 'Inter, sans-serif' }}
            />
          </div>
        </div>

        {/* About You Field */}
        <div className="flex flex-col gap-2">
          <label className="text-[13px] font-medium text-[#222]" style={{ fontFamily: 'Inter, sans-serif' }}>About you</label>
          <textarea
            placeholder="A brief introduction about you..."
            className="w-full bg-white border border-[#E5E5E5] rounded-xl px-4 py-3 text-[14px] text-[#222] placeholder:text-[#999] focus:ring-2 focus:ring-[#EA5E33] focus:border-[#EA5E33] outline-none transition-all resize-none h-32"
            style={{ fontFamily: 'Inter, sans-serif' }}
          ></textarea>
        </div>

        {/* Social Media Links */}
        <div className="flex flex-col gap-4 mt-2">
          <label className="text-[14px] font-medium text-[#222]" style={{ fontFamily: 'Inter, sans-serif' }}>Your Social Media Links</label>

          {/* Instagram */}
          <div className="relative">
            <input
              type="text"
              placeholder="@username"
              className="w-full bg-white border border-[#E5E5E5] rounded-xl pl-4 pr-11 py-3.5 text-[14px] text-[#222] placeholder:text-[#999] focus:ring-2 focus:ring-[#EA5E33] focus:border-[#EA5E33] outline-none transition-all"
              style={{ fontFamily: 'Inter, sans-serif' }}
            />
            <div className="absolute right-4 top-1/2 -translate-y-1/2">
              <Image src="/onboarding/insta.svg" alt="Instagram" width={20} height={20} />
            </div>
          </div>

          {/* Snapchat */}
          <div className="relative">
            <input
              type="text"
              placeholder="@username"
              className="w-full bg-white border border-[#E5E5E5] rounded-xl pl-4 pr-11 py-3.5 text-[14px] text-[#222] placeholder:text-[#999] focus:ring-2 focus:ring-[#EA5E33] focus:border-[#EA5E33] outline-none transition-all"
              style={{ fontFamily: 'Inter, sans-serif' }}
            />
            <div className="absolute right-4 top-1/2 -translate-y-1/2">
              <Image src="/onboarding/snapchat.png" alt="Snapchat" width={20} height={20} className="object-contain" />
            </div>
          </div>



          {/* Facebook */}
          <div className="relative">
            <input
              type="text"
              placeholder="@username"
              className="w-full bg-white border border-[#E5E5E5] rounded-xl pl-4 pr-11 py-3.5 text-[14px] text-[#222] placeholder:text-[#999] focus:ring-2 focus:ring-[#EA5E33] focus:border-[#EA5E33] outline-none transition-all"
              style={{ fontFamily: 'Inter, sans-serif' }}
            />
            <div className="absolute right-4 top-1/2 -translate-y-1/2">
              <Image src="/onboarding/fb.png" alt="Facebook" width={20} height={20} className="object-contain" />
            </div>
          </div>

          {/* X / Twitter */}
          <div className="relative">
            <input
              type="text"
              placeholder="@username"
              className="w-full bg-white border border-[#E5E5E5] rounded-xl pl-4 pr-11 py-3.5 text-[14px] text-[#222] placeholder:text-[#999] focus:ring-2 focus:ring-[#EA5E33] focus:border-[#EA5E33] outline-none transition-all"
              style={{ fontFamily: 'Inter, sans-serif' }}
            />
            <div className="absolute right-4 top-1/2 -translate-y-1/2">
              <Image src="/onboarding/x_logo.svg" alt="X" width={20} height={20} className="object-contain" />
            </div>
          </div>
        </div>

        <Link href="/create-profile-2"
          className="text-white font-bold text-[15px] w-full py-4 rounded-xl hover:opacity-90 transition-opacity mt-4 flex items-center justify-center"
          style={{
            fontFamily: 'Inter, sans-serif',
            background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.45) 0%, rgba(255, 255, 255, 0) 65%), #EA5E33',
            boxShadow: 'inset 0 4px 10px rgba(255, 255, 255, 0.25), 8px 16px 8px 0 rgba(0, 0, 0, 0.00), 5px 10px 6px 0 rgba(0, 0, 0, 0.01), 3px 6px 4px 0 rgba(0, 0, 0, 0.04), 1px 3px 3px 0 rgba(0, 0, 0, 0.07), 1px 1px 2px 0 rgba(0, 0, 0, 0.08)'
          }}
        >
          Continue
        </Link>
      </form>
    </div>
  );
}
