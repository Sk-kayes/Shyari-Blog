import React from 'react';
import { Link } from 'react-router-dom'; // Assuming you'll use react-router-dom for navigation

const Footer = () => {
  return (
    <footer className="bg-[#FDF1E8] text-[#2C3E50] py-8 px-6 md:px-10 lg:px-16 rounded-t-xl">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-center md:text-left">
        {/* Brand/Copyright Info */}
        <div className="mb-6 md:mb-0">
          <h3 className="text-2xl font-bold text-[#2C3E50] mb-2">Dil-Ki-Baat</h3>
          <p className="text-sm text-[#5a6a7a]">&copy; {new Date().getFullYear()} Dil-Ki-Baat. Sabhi Adhikar Surakshit.</p>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-col sm:flex-row gap-4 md:gap-8 mb-6 md:mb-0 text-base font-medium">
          <Link to="/privacy" className="hover:text-[#C0392B] transition">Privacy Policy</Link>
          <Link to="/terms" className="hover:text-[#C0392B] transition">Terms of Service</Link>
          <Link to="/contact" className="hover:text-[#C0392B] transition">Contact Us</Link>
        </div>

        {/* Social Media Icons (Placeholder SVGs) */}
        <div className="flex space-x-5">
          {/* Facebook Icon */}
          <a href="#" className="text-[#2C3E50] hover:text-[#C0392B] transition" aria-label="Facebook">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33V22C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
            </svg>
          </a>
          {/* Twitter Icon */}
          <a href="#" className="text-[#2C3E50] hover:text-[#C0392B] transition" aria-label="Twitter">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8.29 20.25c-2.13 0-3.87-1.74-3.87-3.87s1.74-3.87 3.87-3.87 3.87 1.74 3.87 3.87-1.74 3.87-3.87 3.87zm0-6.74c-1.57 0-2.87 1.29-2.87 2.87s1.29 2.87 2.87 2.87 2.87-1.29 2.87-2.87-1.29-2.87-2.87-2.87zM12 4c-4.41 0-8 3.59-8 8s3.59 8 8 8 8-3.59 8-8-3.59-8-8-8zm0 14c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6z" />
            </svg>
          </a>
          {/* Instagram Icon */}
          <a href="#" className="text-[#2C3E50] hover:text-[#C0392B] transition" aria-label="Instagram">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm3.5 10.5h-3v3h-2v-3h-3v-2h3v-3h2v3h3v2z" clipRule="evenodd" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
