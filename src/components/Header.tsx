import React, { useState } from 'react';
import { MenuIcon, X } from 'lucide-react';
export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <h1 className="text-2xl font-bold text-blue-800">
            Lynda Bookkeeping
          </h1>
        </div>
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <a href="#home" className="text-gray-700 hover:text-blue-600 font-medium">
            Home
          </a>
          <a href="#services" className="text-gray-700 hover:text-blue-600 font-medium">
            Services
          </a>
          <a href="#about" className="text-gray-700 hover:text-blue-600 font-medium">
            About
          </a>
          <a href="#testimonials" className="text-gray-700 hover:text-blue-600 font-medium">
            Testimonials
          </a>
          <a href="#book-online" className="text-gray-700 hover:text-blue-600 font-medium">
            Book Online
          </a>
          <a href="#contact" className="text-gray-700 hover:text-blue-600 font-medium">
            Contact
          </a>
        </nav>
        {/* Mobile menu button */}
        <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={24} /> : <MenuIcon size={24} />}
        </button>
      </div>
      {/* Mobile Navigation */}
      {isMenuOpen && <div className="md:hidden bg-white px-4 py-2 shadow-md">
          <nav className="flex flex-col space-y-3 pb-3">
            <a href="#home" className="text-gray-700 hover:text-blue-600 font-medium" onClick={() => setIsMenuOpen(false)}>
              Home
            </a>
            <a href="#services" className="text-gray-700 hover:text-blue-600 font-medium" onClick={() => setIsMenuOpen(false)}>
              Services
            </a>
            <a href="#about" className="text-gray-700 hover:text-blue-600 font-medium" onClick={() => setIsMenuOpen(false)}>
              About
            </a>
            <a href="#testimonials" className="text-gray-700 hover:text-blue-600 font-medium" onClick={() => setIsMenuOpen(false)}>
              Testimonials
            </a>
            <a href="#book-online" className="text-gray-700 hover:text-blue-600 font-medium" onClick={() => setIsMenuOpen(false)}>
              Book Online
            </a>
            <a href="#contact" className="text-gray-700 hover:text-blue-600 font-medium" onClick={() => setIsMenuOpen(false)}>
              Contact
            </a>
          </nav>
        </div>}
    </header>;
};