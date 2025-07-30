import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-[#FFF8F0] shadow-md px-6 py-4 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-bold text-[#C0392B]">
          Dil-Ki-Baat
        </div>

        {/* Navigation Links */}
        <div className="flex gap-6 items-center text-[#2C3E50] text-base font-medium">
          <Link to="/write" className="hover:text-[#C0392B] transition">Shyari Likho</Link>
          <Link to="/posts" className="hover:text-[#C0392B] transition">Read Shayari</Link>
          <Link to="/about" className="hover:text-[#C0392B] transition">About Us</Link>
          <Link
            to="/login"
            className="bg-[#C0392B] text-white px-4 py-1.5 rounded-full hover:bg-[#a93226] transition"
          >
            Register / Login
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
