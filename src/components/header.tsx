import React from "react";

const Header = () => {
  return (
    <nav className="fixed  mx-auto max-w-7xl top-4 left-4 right-4 z-50">
      <div className="bg-white/80 backdrop-blur-md shadow-lg rounded-2xl px-6 py-4">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          {/* Logo */}
          <div className="flex items-center">
            <div className="bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] w-8 h-8 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">C</span>
            </div>
            <span className="ml-2 text-xl font-bold text-gray-900">
              CasperAI
            </span>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="/tweet"
              className="text-gray-700 hover:text-gray-900  hover:font-bold hover:underline  font-medium transition-colors"
            >
              Tweet
            </a>
            <a
              href="#pricing"
              className="text-gray-700 hover:text-gray-900 hover:font-bold hover:underline  font-medium transition-colors"
            >
              Meme
            </a>
            <a
              href="#about"
              className="text-gray-700 hover:text-gray-900  hover:font-bold hover:underline font-medium transition-colors"
            >
              Character
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button className="text-gray-700 hover:text-gray-900">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
