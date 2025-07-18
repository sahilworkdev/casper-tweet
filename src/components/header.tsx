"use client";
import Link from "next/link";
import React, { useState } from "react";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed mx-auto max-w-7xl top-4 left-4 right-4 z-50">
      <div className="bg-white/80 backdrop-blur-md shadow-lg rounded-2xl px-6 py-4">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          {/* Logo */}
          <div className="flex items-center">
            <div className="bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] w-8 h-8 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">C</span>
            </div>
            <Link href="/" className="ml-2 text-xl font-bold text-gray-900">
              CasperAI
            </Link>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/tweet"
              className="text-gray-700 hover:text-gray-900 hover:font-bold hover:underline font-medium transition-colors"
            >
              Tweet
            </Link>
            <Link
              href="#"
              className="text-gray-700 hover:text-gray-900 hover:font-bold hover:underline font-medium transition-colors"
            >
              Meme
            </Link>
            <Link
              href="#a"
              className="text-gray-700 hover:text-gray-900 hover:font-bold hover:underline font-medium transition-colors"
            >
              Character
            </Link>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-700 hover:text-gray-900 focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 flex flex-col space-y-4">
            <Link
              href="/tweet"
              className="text-gray-700 hover:text-gray-900 font-medium transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Tweet
            </Link>
            <Link
              href="#pricing"
              className="text-gray-700 hover:text-gray-900 font-medium transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Meme
            </Link>
            <Link
              href="#about"
              className="text-gray-700 hover:text-gray-900 font-medium transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Character
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Header;
