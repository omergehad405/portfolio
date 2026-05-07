'use client'

import Link from 'next/link'
import { Github, Linkedin, ExternalLink } from 'lucide-react'

const socials = [
  { icon: Github, href: 'https://github.com/omergehad405/omergehad405', label: 'GitHub' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/omar-gehad-214302291/', label: 'LinkedIn' },
]

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="border-t border-[var(--border)] bg-[var(--bg-secondary)] px-6 py-12">
      <div className="max-w-[1200px] mx-auto">
        <div className="flex flex-wrap items-center justify-between gap-6">
          {/* Brand */}
          <div>
            <div className="font-['Syne'] font-extrabold text-xl text-[var(--text-primary)] mb-1.5">
              Omar Gehad
            </div>
            <p className="text-[var(--text-muted)] text-sm font-['DM_Sans']">
              MERN Stack Developer · Available for freelance
            </p>
          </div>

          {/* Links */}
          <nav className="flex gap-6">
            {['/', '/about', '/projects', '/contact'].map((href, i) => (
              <Link
                key={href}
                href={href}
                className="text-[var(--text-muted)] no-underline text-sm font-['DM_Sans'] transition-colors duration-200 hover:text-[var(--accent)]"
              >
                {['Home', 'About', 'Projects', 'Contact'][i]}
              </Link>
            ))}
          </nav>

          {/* Socials */}
          <div className="flex gap-3">
            {socials.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="w-10 h-10 rounded-xl border border-[var(--border)] flex items-center justify-center text-[var(--text-muted)] no-underline transition-all duration-200 hover:border-[var(--accent)] hover:text-[var(--accent)] hover:bg-[rgba(56,82,180,0.08)]"
              >
                <Icon size={17} />
              </a>
            ))}
            {/* Khamsat */}
            <a
              href="https://khamsat.com/user/omer_gehad"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Khamsat"
              className="w-10 h-10 rounded-xl border border-[var(--border)] flex items-center justify-center text-[var(--text-muted)] no-underline text-[11px] font-['Syne'] font-bold transition-all duration-200 hover:border-[var(--accent)] hover:text-[var(--accent)] hover:bg-[rgba(56,82,180,0.08)]"
            >
              KH
            </a>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-[var(--border)] flex flex-wrap justify-between gap-3">
          <p className="text-[var(--text-muted)] text-[13px] font-['JetBrains_Mono']">
            © {year} Omar Gehad. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
