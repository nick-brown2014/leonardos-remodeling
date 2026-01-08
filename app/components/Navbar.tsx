'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="w-full p-6 bg-[var(--background)] text-[var(--foreground)] border-b border-[var(--accent)]/20">
      <div className="flex justify-between items-center">
        <div className="text-xl font-bold tracking-wider">
          <Link href="/" className="hover:text-[var(--accent)] transition-colors" onClick={closeMenu}>
            LEONARDO'S REMODELING
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-8">
          <Link href="/services" className="hover:text-[var(--accent)] transition-colors text-sm uppercase tracking-widest">
            Services
          </Link>
          <Link href="/contact" className="hover:text-[var(--accent)] transition-colors text-sm uppercase tracking-widest">
            Contact
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden flex flex-col gap-1.5 w-8 h-8 justify-center items-center focus:outline-none"
          aria-label="Toggle menu"
        >
          <span
            className={`block w-6 h-0.5 bg-[var(--foreground)] transition-all duration-300 ${
              isMenuOpen ? 'rotate-45 translate-y-2' : ''
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-[var(--foreground)] transition-all duration-300 ${
              isMenuOpen ? 'opacity-0' : ''
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-[var(--foreground)] transition-all duration-300 ${
              isMenuOpen ? '-rotate-45 -translate-y-2' : ''
            }`}
          />
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? 'max-h-48 opacity-100 mt-6' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="flex flex-col gap-4 py-4 border-t border-[var(--accent)]/20">
          <Link
            href="/services"
            className="hover:text-[var(--accent)] transition-colors text-sm uppercase tracking-widest"
            onClick={closeMenu}
          >
            Services
          </Link>
          <Link
            href="/contact"
            className="hover:text-[var(--accent)] transition-colors text-sm uppercase tracking-widest"
            onClick={closeMenu}
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}