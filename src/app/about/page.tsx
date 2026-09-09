'use client'
import { MapPin } from 'lucide-react'
import Bio from "./components/Bio"
import TechStack from "./components/TechStack"
import TimeLine from "./components/TimeLine"
import Values from "./components/Values"

export default function AboutPage() {
  return (
    <div className="bg-[var(--bg-primary)] pt-[70px]" >
      {/* ─── HEADER ─── */}
      < section className="px-6 py-20 border-b border-[var(--border)] relative overflow-hidden md:pb-[60px]" >
        <div className="absolute -top-[200px] -right-[200px] w-[500px] h-[500px] bg-[var(--accent)] rounded-full blur-[120px] opacity-[0.07]" />
        <div className="max-w-[1200px] mx-auto">
          <p className="section-tag">About Me</p>
          <h1 className="font-['Syne'] font-extrabold text-[clamp(40px,6vw,80px)] text-[var(--text-primary)] leading-[1.05] mb-6 max-w-[800px]">
            The developer<br />behind the code.
          </h1>
          <div className="flex items-center gap-2 text-[var(--text-muted)]">
            <MapPin size={16} className="text-[var(--accent)]" />
            <span className="font-['JetBrains_Mono'] text-sm">
              Egypt · Available Worldwide
            </span>
          </div>
        </div>
      </section >
      {/* ─── BIO ─── */}
      <Bio />
      {/* ─── TECH STACK ─── */}
      <TechStack />
      {/* ─── TIMELINE ─── */}
      <TimeLine />
      {/* ─── VALUES ─── */}
      <Values />
    </div >
  )
}
