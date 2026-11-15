'use client'

import Link from 'next/link'
import { ArrowRight, Layers, ArrowDown } from 'lucide-react'
import { projects, projectCategories } from '@/data/projects'
import CategoryPinnedSection from './components/CategoryPinnedSection'

export default function ProjectsPage() {
  const scrollToCategory = (key: string) => {
    const el = document.getElementById(key.replace(/\s+/g, '-'))
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="bg-[var(--bg-primary)] pt-[70px]">
      {/* ─── HERO HEADER ─── */}
      <section className="px-6 py-20 border-b border-[var(--border)] relative overflow-hidden md:pb-[70px]">
        {/* Background Ambient Orb */}
        <div className="orb w-[600px] h-[600px] bg-[var(--accent)] -top-[250px] -left-[150px] opacity-[0.07] pointer-events-none" />

        <div className="max-w-[1200px] mx-auto relative z-10">
          <p className="section-tag">Portfolio</p>
          <h1 className="font-display font-extrabold text-[clamp(42px,6.5vw,84px)] text-[var(--text-primary)] leading-[1.05] mb-5 tracking-tight">
            Selected <span className="text-[var(--accent)]">Works.</span>
          </h1>
          <p className="text-[var(--text-secondary)] text-[clamp(16px,2vw,19px)] leading-[1.7] max-w-[620px] mb-10">
            A curated showcase of real-world full-stack platforms, interactive web templates, e-commerce solutions, and high-converting landing pages.
          </p>

          {/* Quick-jump category pills */}
          <div className="flex flex-wrap items-center gap-2.5 pt-2">
            <span className="font-mono text-xs text-[var(--text-muted)] mr-2 flex items-center gap-1.5">
              <Layers size={14} className="text-[var(--accent)]" /> Quick Jump:
            </span>
            {projectCategories.map((cat) => {
              const count = projects.filter((p) => p.category === cat.key).length
              return (
                <button
                  key={cat.key}
                  onClick={() => scrollToCategory(cat.key)}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[var(--border)] bg-[var(--bg-card)] hover:border-[var(--accent)] hover:text-[var(--accent)] text-[var(--text-primary)] font-body font-medium text-xs sm:text-sm transition-all duration-200 cursor-pointer shadow-sm hover:-translate-y-0.5"
                >
                  <span>{cat.shortTitle}</span>
                  <span className="w-5 h-5 rounded-full bg-[var(--bg-secondary)] text-[var(--accent)] font-mono text-[11px] font-bold flex items-center justify-center">
                    {count}
                  </span>
                </button>
              )
            })}
          </div>
        </div>
      </section>

      {/* ─── PINNED HORIZONTAL SCROLL SECTIONS ─── */}
      <div className="relative">
        {projectCategories.map((cat, index) => {
          const categoryProjects = projects.filter((p) => p.category === cat.key)
          if (categoryProjects.length === 0) return null

          return (
            <CategoryPinnedSection
              key={cat.key}
              category={cat}
              projects={categoryProjects}
              categoryIndex={index}
              totalCategories={projectCategories.length}
            />
          )
        })}
      </div>

      {/* ─── CTA BANNER ─── */}
      <section className="px-6 py-24 bg-[var(--bg-secondary)] border-t border-[var(--border)] text-center relative overflow-hidden">
        <div className="orb w-[500px] h-[500px] bg-[var(--accent)] -bottom-[200px] left-1/2 -translate-x-1/2 opacity-[0.06] pointer-events-none" />

        <div className="max-w-[700px] mx-auto relative z-10">
          <p className="section-tag justify-center">Start a Collaboration</p>
          <h2 className="font-display font-extrabold text-[clamp(30px,4.5vw,50px)] text-[var(--text-primary)] mb-4">
            Have a project in mind?
          </h2>
          <p className="text-[var(--text-secondary)] text-base sm:text-lg leading-[1.7] mb-9 max-w-[560px] mx-auto">
            Whether you need a full-stack platform, an e-commerce store, or a high-converting web presence, let's build something exceptional together.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-[var(--accent)] text-white font-body font-semibold text-base no-underline transition-all duration-200 hover:bg-[var(--accent-light)] shadow-md hover:shadow-lg hover:-translate-y-0.5"
            >
              Start a Project <ArrowRight size={18} />
            </Link>
            <a
              href="https://github.com/omergehad405/omergehad405"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl border border-[var(--border)] bg-[var(--bg-card)] text-[var(--text-primary)] font-body font-semibold text-base no-underline transition-all duration-200 hover:border-[var(--accent)] hover:text-[var(--accent)] hover:-translate-y-0.5"
            >
              Explore GitHub
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
