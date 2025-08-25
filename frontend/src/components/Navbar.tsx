import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-[#FFF8F0] shadow-md px-6 py-4 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">

        {/* Left Section: Logo + Nav Links */}
        <div className="flex items-center gap-8">
          {/* Logo */}
          <div className="text-2xl font-extrabold text-[#C0392B] tracking-wide">
            Dil-Ki-Baat
          </div>

          {/* Navigation Links */}
          <div className="flex gap-6 text-[#2C3E50] text-[18px] font-medium">
            <Link to="/write" className="hover:text-[#C0392B] transition">Write Shayari</Link>
            <Link to="/posts" className="hover:text-[#C0392B] transition">Read Shayari</Link>
            <Link to="/about" className="hover:text-[#C0392B] transition">About Us</Link>
          </div>
        </div>

        {/* Right Section: Register & Login Buttons */}
        <div className="flex gap-3">
          {/* Navigation Links */}
          <div className="flex gap-6 items-center text-[#2C3E50] text-base font-medium">
            <Link
              to="/login"
              className="border-2 border-[#C0392B] text-[#C0392B] px-5 py-2 rounded-full font-semibold hover:bg-[#C0392B] hover:text-white transition-all duration-300"
            >
              Login
            </Link>
            <Link
              to="/register"
              className="bg-[#C0392B] text-white px-5 py-2 rounded-full font-semibold shadow-md hover:bg-[#a93226] hover:shadow-lg transition-all duration-300"
            >
              Register
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;