'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { ArrowRight, Download, Github, Linkedin, ExternalLink, Code2, Zap, Layers, Globe } from 'lucide-react'

const skills = [
  'React.js', 'Node.js', 'MongoDB', 'Express.js', 'TypeScript', 'Next.js',
  'REST APIs', 'Tailwind CSS', 'Redux', 'JWT Auth', 'Docker', 'Git',
  'React.js', 'Node.js', 'MongoDB', 'Express.js', 'TypeScript', 'Next.js',
  'REST APIs', 'Tailwind CSS', 'Redux', 'JWT Auth', 'Docker', 'Git',
]

const stats = [
  { value: '3+', label: 'Years Experience' },
  { value: '10+', label: 'Projects Delivered' },
  { value: '100%', label: 'Client Satisfaction' },
  { value: '3', label: 'Platforms Active' },
]

const services = [
  {
    icon: Code2,
    title: 'Full-Stack Development',
    desc: 'End-to-end MERN applications from database design to deployment.',
  },
  {
    icon: Globe,
    title: 'E-commerce Solutions',
    desc: 'Feature-rich stores with payments, admin panels, and user auth.',
  },
  {
    icon: Layers,
    title: 'REST API Design',
    desc: 'Clean, scalable, and well-documented APIs for any product.',
  },
  {
    icon: Zap,
    title: 'Performance & UI',
    desc: 'Responsive, fast, and pixel-perfect interfaces users love.',
  },
]

function TypeWriter({ texts }: { texts: string[] }) {
  const [index, setIndex] = useState(0)
  const [text, setText] = useState('')
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = texts[index % texts.length]
    const speed = deleting ? 50 : 100
    const timeout = setTimeout(() => {
      if (!deleting && text === current) {
        setTimeout(() => setDeleting(true), 1500)
        return
      }
      if (deleting && text === '') {
        setDeleting(false)
        setIndex(i => i + 1)
        return
      }
      setText(prev => deleting ? prev.slice(0, -1) : current.slice(0, prev.length + 1))
    }, speed)
    return () => clearTimeout(timeout)
  }, [text, deleting, index, texts])

  return (
    <span className="text-[var(--accent)]">
      {text}<span className="cursor">|</span>
    </span>
  )
}

export default function HomePage() {
  const heroRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const hero = heroRef.current
    if (!hero) return
    const handleMouse = (e: MouseEvent) => {
      const rect = hero.getBoundingClientRect()
      const x = ((e.clientX - rect.left) / rect.width - 0.5) * 20
      const y = ((e.clientY - rect.top) / rect.height - 0.5) * 20
      const orbs = hero.querySelectorAll<HTMLElement>('.orb-interactive')
      orbs.forEach((orb, i) => {
        const factor = (i + 1) * 0.4
        orb.style.transform = `translate(${x * factor}px, ${y * factor}px)`
      })
    }
    hero.addEventListener('mousemove', handleMouse)
    return () => hero.removeEventListener('mousemove', handleMouse)
  }, [])

  return (
    <div className="bg-[var(--bg-primary)] overflow-x-hidden">
      {/* ─── HERO ─── */}
      <section
        ref={heroRef}
        className="min-h-screen flex items-center relative overflow-hidden pt-[70px]"
      >
        {/* Orbs */}
        <div className="orb orb-interactive w-[600px] h-[600px] bg-[var(--accent)] -top-[200px] -right-[100px] transition-transform duration-300 ease-out" />
        <div className="orb orb-interactive w-[400px] h-[400px] bg-[#3B82F6] -bottom-[100px] -left-[100px] transition-transform duration-500 ease-out" />

        <div className="max-w-[1200px] mx-auto px-6 py-20 w-full relative z-10">
          {/* Available badge */}
          <div className="flex items-center gap-3 mb-6">
            <span className="flex h-2 w-2 rounded-full bg-green-500 animate-pulse-custom" />
            <span className="font-mono text-[12px] text-[var(--text-secondary)]">
              Available for new projects
            </span>
          </div>

          {/* Main heading */}
          <h1 className="font-display font-extrabold text-[clamp(48px,7vw,90px)] leading-[1.05] text-[var(--text-primary)] mb-6 max-w-[900px]">
            Building Digital<br />
            <span className="text-[var(--accent)]">Experiences</span> that Matter.
          </h1>

          <p className="font-body text-[clamp(16px,2vw,19px)] text-[var(--text-secondary)] leading-[1.7] max-w-[580px] mb-10">
            Freelance Full-Stack Developer specializing in high-performance web applications and beautiful user interfaces.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-wrap gap-4 mb-14">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-[var(--accent)] text-white font-body font-semibold text-base no-underline transition-all duration-200 hover:bg-[var(--accent-light)] hover:-translate-y-0.5"
            >
              View My Work <ArrowRight size={18} />
            </Link>

            <Link
              href="/about"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl border border-[var(--border)] bg-[var(--bg-card)] text-[var(--text-primary)] font-body font-semibold text-base no-underline transition-all duration-200 hover:border-[var(--accent)] hover:text-[var(--accent)]"
            >
              <Download size={18} /> Download CV
            </Link>
          </div>

          {/* Social links */}
          <div className="flex items-center gap-4 mt-12 opacity-60">
            <span className="text-[var(--text-muted)] text-[13px] font-mono">
              Expert in:
            </span>
            {[
              { icon: Github, href: 'https://github.com/omergehad405/omergehad405', label: 'GitHub' },
              { icon: Linkedin, href: 'https://www.linkedin.com/in/omar-gehad-214302291/', label: 'LinkedIn' },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="w-10 h-10 rounded-xl border border-[var(--border)] flex items-center justify-center text-[var(--text-muted)] no-underline transition-all duration-200 hover:border-[var(--accent)] hover:text-[var(--accent)]"
              >
                <Icon size={17} />
              </a>
            ))}
            {[
              { label: 'KH', href: 'https://khamsat.com/user/omer_gehad', title: 'Khamsat' },
              { label: 'UP', href: 'https://www.upwork.com', title: 'Upwork' },
            ].map(({ label, href, title }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={title}
                className="w-10 h-10 rounded-xl border border-[var(--border)] flex items-center justify-center text-[var(--text-muted)] no-underline text-[11px] font-display font-bold transition-all duration-200 hover:border-[var(--accent)] hover:text-[var(--accent)]"
              >
                {label}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ─── STATS ─── */}
      <section className="px-6 py-20 border-t border-[var(--border)] bg-[var(--bg-secondary)]">
        <div className="max-w-[1200px] mx-auto grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-8">
          {stats.map(({ value, label }) => (
            <div key={label} className="text-center">
              <div className="font-display font-extrabold text-[56px] text-[var(--accent)] leading-none mb-2">
                {value}
              </div>
              <div className="font-body text-[var(--text-muted)] text-[15px]">
                {label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ─── SKILLS MARQUEE ─── */}
      <section className="py-12 border-t border-b border-[var(--border)] overflow-hidden relative">
        <div className="flex animate-marquee w-max">
          {[...Array(2)].map((_, i) => (
            <span key={i} className="inline-flex items-center gap-2 px-8 font-mono text-sm text-[var(--text-muted)] whitespace-nowrap">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)]" />
              {skills.map((skill, j) => (
                <span key={j} className="flex items-center gap-2">
                  {skill} {j < skills.length - 1 && <span className="text-[var(--accent)] text-[18px]">·</span>}
                </span>
              ))}
            </span>
          ))}
        </div>
      </section>

      {/* ─── SERVICES ─── */}
      <section className="px-6 py-[100px] bg-[var(--bg-primary)]">
        <div className="max-w-[1200px] mx-auto">
          <p className="section-tag">Solutions</p>
          <h2 className="font-display font-extrabold text-[clamp(32px,4vw,52px)] text-[var(--text-primary)] mb-4">
            My Services
          </h2>
          <p className="text-[var(--text-secondary)] text-[17px] leading-[1.7] max-w-[520px] mb-14">
            From concept to launch — I handle the full development lifecycle.
          </p>

          <div className="grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))] gap-6">
            {services.map(({ icon: Icon, title, desc }, i) => (
              <div key={i} className="group p-8 rounded-3xl border border-[var(--border)] bg-[var(--bg-card)] hover:border-[var(--accent)] transition-all duration-300 hover:-translate-y-2">
                <div className="w-12 h-12 rounded-2xl bg-[rgba(232,98,42,0.1)] flex items-center justify-center text-[var(--accent)] mb-6 group-hover:scale-110 transition-transform">
                  <Icon size={24} />
                </div>
                <h3 className="font-display font-bold text-[19px] text-[var(--text-primary)] mb-2.5">
                  {title}
                </h3>
                <p className="text-[var(--text-secondary)] text-[15px] leading-[1.6]">
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FREELANCE PLATFORMS ─── */}
      <section className="px-6 py-20 bg-[var(--bg-secondary)] border-t border-[var(--border)]">
        <div className="max-w-[1200px] mx-auto">
          <p className="section-tag">Ecosystem</p>
          <h2 className="font-display font-extrabold text-[clamp(28px,4vw,48px)] text-[var(--text-primary)] mb-10">
            Platforms I Use
          </h2>
          <div className="flex flex-wrap gap-4">
            {[
              { name: 'Khamsat', href: 'https://khamsat.com/user/omer_gehad', desc: 'Arabic freelance marketplace' },
              { name: 'Upwork', href: 'https://www.upwork.com', desc: 'Global freelance platform' },
              { name: 'GitHub', href: 'https://github.com/omergehad405/omergehad405', desc: 'Open source & portfolio' },
              { name: 'LinkedIn', href: 'https://www.linkedin.com/in/omar-gehad-214302291/', desc: 'Professional network' },
            ].map(({ name, href, desc }) => (
              <a
                key={name}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="card-hover flex items-center gap-4 p-5 px-7 rounded-[14px] border border-[var(--border)] bg-[var(--bg-card)] no-underline flex-1 min-w-[220px]"
              >
                <div className="font-display font-extrabold text-[18px] text-[var(--text-primary)] flex-grow">
                  {name}
                  <div className="font-body font-normal text-[13px] text-[var(--text-muted)] mt-[3px]">
                    {desc}
                  </div>
                </div>
                <ExternalLink size={16} className="text-[var(--text-muted)]" />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA BANNER ─── */}
      <section className="px-6 py-[100px] bg-[var(--bg-primary)] border-t border-[var(--border)]">
        <div className="max-w-[800px] mx-auto text-center">
          <div className="inline-block px-15 py-25 rounded-3xl border border-[var(--border)] bg-[var(--bg-card)] relative overflow-hidden md:px-[60px] md:py-[100px]">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-[var(--accent)] rounded-full blur-[100px] opacity-[0.06] pointer-events-none" />
            <h2 className="font-display font-extrabold text-[clamp(28px,4vw,52px)] text-[var(--text-primary)] mb-4 relative z-10">
              Got a project in mind?
            </h2>
            <p className="text-[var(--text-secondary)] text-[17px] leading-[1.7] mb-9 relative z-10">
              Let's turn your idea into a polished digital product. I'm available for freelance projects right now.
            </p>
            <div className="flex flex-wrap justify-center gap-4 relative z-10">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-[var(--accent)] text-white font-body font-semibold text-base no-underline transition-all duration-200 hover:bg-[var(--accent-light)]"
              >
                Let's Talk <ArrowRight size={18} />
              </Link>
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl border border-[var(--border)] bg-[var(--bg-card)] text-[var(--text-primary)] font-body font-semibold text-base no-underline transition-all duration-200 hover:border-[var(--accent)] hover:text-[var(--accent)]"
              >
                View Portfolio
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
