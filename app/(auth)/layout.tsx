import Image from "next/image";
import Link from "next/link";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen w-full bg-white text-gray-900">
      {/* Left Side - Image */}
      <div className="hidden lg:flex lg:w-1/2 relative bg-white overflow-hidden items-center justify-center lg:justify-end p-12 lg:pr-8">
        <div className="relative w-full h-full max-w-[800px] max-h-[800px]">
          <Image
            src="/onboarding/auth-bg.png"
            alt="Auth Image"
            fill
            className="object-contain"
            priority
          />
        </div>
      </div>

      {/* Right Side - Form */}
      <div className="w-full lg:w-1/2 flex flex-col relative bg-white">
        {/* Top Right Logo */}
        <div className="absolute top-8 right-8 z-10 flex items-center gap-1">
          <Link href="/" className="text-gray-900 font-bold text-[18px] tracking-tight flex items-center gap-1.5" style={{ fontFamily: 'var(--font-outfit), sans-serif' }}>
            PlaceCloud
            <Image src="/logo.png" alt="PlaceCloud Logo Icon" width={28} height={28} className="object-contain mix-blend-multiply" priority />
          </Link>
        </div>

        {/* Form Container */}
        <div className="flex-1 flex items-center justify-center lg:justify-start px-6 sm:px-12 lg:px-8 w-full max-w-[480px] mx-auto lg:mx-0 lg:ml-12">
          {children}
        </div>
      </div>
    </div>
  );
}
