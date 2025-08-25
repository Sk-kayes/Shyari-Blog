'use client';

import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-[#FFF8F0] shadow-md px-6 py-4 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Left Section */}
        <div className="flex items-center gap-8">
          <Link href="/" className="text-2xl font-extrabold text-[#C0392B] tracking-wide">
            Dil-Ki-Baat
          </Link>
          <div className="hidden md:flex gap-6 text-[#2C3E50] text-[18px] font-medium">
            <Link href="/write" className="hover:text-[#C0392B] transition">Write Shayari</Link>
            <Link href="/posts" className="hover:text-[#C0392B] transition">Read Shayari</Link>
            <Link href="/about" className="hover:text-[#C0392B] transition">About Us</Link>
          </div>
        </div>

        {/* Right Section */}
        <div className="hidden md:flex gap-3">
          <Link
            href="/login"
            className="border-2 border-[#C0392B] text-[#C0392B] px-5 py-2 rounded-full font-semibold hover:bg-[#C0392B] hover:text-white transition"
          >
            Login
          </Link>
          <Link
            href="/register"
            className="bg-[#C0392B] text-white px-5 py-2 rounded-full font-semibold shadow-md hover:bg-[#a93226] transition"
          >
            Register
          </Link>
        </div>
      </div>
    </nav>
  );
}