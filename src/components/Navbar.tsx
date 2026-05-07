'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, Sun, Moon } from 'lucide-react'
import { useTheme } from './ThemeProvider'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/projects', label: 'Projects' },
  { href: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()
  const { theme, toggleTheme } = useTheme()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-[1000] transition-all duration-300 ${
        scrolled
          ? 'bg-[var(--bg-primary)] border-b border-[var(--border)] backdrop-blur-xl'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="flex items-center justify-between h-[70px]">
          {/* Logo */}
          <Link href="/" className="no-underline">
            <div className="flex items-center gap-[10px]">
              <div className="w-9 h-9 bg-[var(--accent)] rounded-lg flex items-center justify-center font-['Syne'] font-extrabold text-base text-white">
                OG
              </div>
              <span className="font-['Syne'] font-bold text-[18px] text-[var(--text-primary)]">
                Omar Gehad
              </span>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-4 py-2 rounded-lg font-['DM_Sans'] font-medium text-[15px] no-underline transition-all duration-200 ${
                  pathname === link.href
                    ? 'text-[var(--accent)] bg-[rgba(56,82,180,0.1)]'
                    : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-secondary)]'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right side */}
          <div className="flex items-center gap-3">
            {/* Theme toggle */}
            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="w-10 h-10 rounded-xl border border-[var(--border)] bg-[var(--bg-card)] cursor-pointer flex items-center justify-center text-[var(--text-secondary)] transition-all duration-200 hover:border-[var(--accent)] hover:text-[var(--accent)]"
            >
              {theme === 'dark' ? <Sun size={17} /> : <Moon size={17} />}
            </button>

            {/* CTA */}
            <Link
              href="/contact"
              className="hidden lg:block px-5 py-[10px] rounded-xl bg-[var(--accent)] text-white font-['DM_Sans'] font-semibold text-sm no-underline transition-all duration-200 hover:bg-[var(--accent-light)]"
            >
              Hire Me
            </Link>

            {/* Mobile menu toggle */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden w-10 h-10 rounded-xl border border-[var(--border)] bg-[var(--bg-card)] cursor-pointer flex items-center justify-center text-[var(--text-primary)]"
            >
              {menuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="lg:hidden bg-[var(--bg-primary)] border-t border-[var(--border)] px-6 pt-4 pb-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className={`block px-4 py-[14px] rounded-xl font-['DM_Sans'] font-medium text-base no-underline mb-1 ${
                pathname === link.href
                  ? 'text-[var(--accent)] bg-[rgba(56,82,180,0.1)]'
                  : 'text-[var(--text-primary)] hover:bg-[var(--bg-secondary)]'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setMenuOpen(false)}
            className="block mt-3 px-4 py-[14px] rounded-xl bg-[var(--accent)] text-white font-['DM_Sans'] font-semibold text-base no-underline text-center hover:bg-[var(--accent-light)]"
          >
            Hire Me
          </Link>
        </div>
      )}
    </header>
  )
}
