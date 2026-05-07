'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ExternalLink, Github, ArrowRight } from 'lucide-react'

const projects = [
  {
    id: 1,
    title: 'afaq altareq',
    category: 'landing page',
    desc: 'landing page for afaq altareq company which is a company for car rent',
    tech: ['html 5', 'css 3', 'javascript'],
    image: '/Projects/afaqaltareq.png',
    liveUrl: 'https://afaqaltariq.sa/',
    githubUrl: '#',
    featured: true,
    color: '#E8622A',
    emoji: '🚗',
  },
  {
    id: 2,
    title: 'flower.',
    category: 'e-commerce',
    desc: 'flower. is a e-commerce website for flower shop',
    tech: ['reactJS', 'scss'],
    image: '/Projects/flower-shop.png',
    liveUrl: 'https://omergehad405.github.io/Flower_shop/',
    githubUrl: 'https://github.com/omergehad405/Flower_shop',
    featured: false,
    color: '#8B5CF6',
    emoji: '🌸',
  },
  {
    id: 3,
    title: 'Codeya',
    category: 'fullStack',
    desc: "a fullStack software agency that delivers full-stack web solutions for clients. built the agency's official website.",
    tech: ['React.js', 'Tailwind css', 'node.js', 'express', 'MongoDB'],
    image: '/Projects/codeya.png',
    liveUrl: 'https://www.codeya.tech/',
    githubUrl: '#',
    featured: false,
    color: '#F59E0B',
    emoji: '💻',
  },
  {
    id: 4,
    title: 'EduMaster',
    category: 'fullStack',
    desc: 'AI-powered education platform with structured learning tracks, automated quiz generation from notes, and adaptive level testing.',
    tech: ['React.js', 'Tailwind', 'Node.js', 'Express', 'MongoDB', 'Framer Motion'],
    image: '/Projects/edumaster.png',
    liveUrl: 'https://edu-master-five.vercel.app/',
    githubUrl: '#',
    featured: false,
    color: '#10B981',
    emoji: '🎓',
  },
  {
    id: 5,
    title: 'FreshEat',
    category: 'fullStack',
    desc: 'FreshEat is a fullstack project that allows users to order food online',
    tech: ['react', 'tailwind', 'firebase'],
    image: '/Projects/freshEat.png',
    liveUrl: 'https://fresh-heat.vercel.app/',
    githubUrl: 'https://github.com/omergehad405/FreshHeat',
    featured: false,
    color: '#E8622A',
    emoji: '🍔',
  },
  {
    id: 6,
    title: 'Khadamati',
    category: 'fullStack',
    desc: 'Khadamati is a Full-stack service marketplace connecting clients with professionals.',
    tech: ['React.js', 'tailwind', 'node.js', 'express', 'MongoDB'],
    image: '/Projects/khadamati.png',
    liveUrl: 'https://khdmaaty.com/',
    githubUrl: '#',
    featured: false,
    color: '#EC4899',
    emoji: '🎙️',
  },
  {
    id: 7,
    title: 'Fyrre Magazine',
    category: 'website',
    desc: 'Next.js Site Template for interactive magazine & podcast platform',
    tech: ['Next.js', 'tailwind'],
    image: '/Projects/fyrre-magazine.png',
    liveUrl: 'https://fyrre-magazine-nine.vercel.app/',
    githubUrl: 'https://github.com/omergehad405/fyrreMagazine',
    featured: false,
    color: '#EC4899',
    emoji: '🎙️',
  },
  {
    id: 8,
    title: 'Organic-store',
    category: 'e-commerce',
    desc: 'Organic Store is a E-commerce project that allows users to order organic products online',
    tech: ['react', 'tailwind'],
    image: '/Projects/organic-store.png',
    liveUrl: 'https://organic-store-tan.vercel.app/',
    githubUrl: 'https://github.com/omergehad405/Organic_Store.git',
    featured: false,
    color: '#EC4899',
    emoji: '🎙️',
  },
]

const categories = ['All', 'landing page', 'e-commerce', 'website', 'fullStack']

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState('All')

  const filtered = activeFilter === 'All'
    ? projects
    : projects.filter(p => p.category === activeFilter)

  return (
    <div className="bg-[var(--bg-primary)] pt-[70px]">
      {/* ─── HEADER ─── */}
      <section className="px-6 py-20 border-b border-[var(--border)] relative overflow-hidden md:pb-[60px]">
        <div className="absolute -top-[200px] -left-[100px] w-[500px] h-[500px] bg-[#3B82F6] rounded-full blur-[120px] opacity-[0.06]" />
        <div className="max-w-[1200px] mx-auto">
          <p className="section-tag">Portfolio</p>
          <h1 className="font-['Syne'] font-extrabold text-[clamp(40px,6vw,80px)] text-[var(--text-primary)] leading-[1.05] mb-5">
            My Projects
          </h1>
          <p className="text-[var(--text-secondary)] text-[17px] leading-[1.7] max-w-[560px]">
            A selection of real-world applications I've designed and built — from full-stack platforms to frontend experiences and APIs.
          </p>
        </div>
      </section>

      {/* ─── FILTER ─── */}
      <section className="px-6 pt-10 bg-[var(--bg-primary)]">
        <div className="max-w-[1200px] mx-auto">
          <div className="flex gap-2 flex-wrap">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-5 py-2 rounded-full border transition-all duration-200 cursor-pointer font-['DM_Sans'] font-medium text-sm ${
                  activeFilter === cat
                    ? 'border-[var(--accent)] bg-[rgba(232,98,42,0.12)] text-[var(--accent)]'
                    : 'border-[var(--border)] bg-transparent text-[var(--text-secondary)] hover:border-[var(--accent)] hover:text-[var(--accent)]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ─── PROJECTS GRID ─── */}
      <section className="px-6 py-12 pb-[100px]">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-[repeat(auto-fill,minmax(340px,1fr))] gap-6">
            {filtered.map((project) => (
              <div
                key={project.id}
                className="card-hover rounded-[20px] border border-[var(--border)] bg-[var(--bg-card)] overflow-hidden flex flex-col"
              >
                {/* Project visual */}
                <div 
                  className="h-[180px] border-b border-[var(--border)] flex items-center justify-center relative overflow-hidden"
                  style={{ background: `${project.color}15` }}
                >
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="project-image w-full h-full object-cover transition-transform duration-500 ease-out"
                    />
                  ) : (
                    <>
                      <div 
                        className="absolute -top-10 -right-10 w-40 h-40 rounded-full opacity-10"
                        style={{ background: project.color }}
                      />
                      <span className="text-[64px]">{project.emoji}</span>
                    </>
                  )}
                  {project.featured && (
                    <div 
                      className="absolute top-4 left-4 px-3 py-1 rounded-full text-white text-[11px] font-['JetBrains_Mono'] font-medium z-[2]"
                      style={{ background: project.color }}
                    >
                      Featured
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-6 grow flex flex-col">
                  <div className="font-['JetBrains_Mono'] text-[11px] text-[var(--text-muted)] mb-2 uppercase tracking-[0.1em]">
                    {project.category}
                  </div>
                  <h3 className="font-['Syne'] font-bold text-xl text-[var(--text-primary)] mb-2.5">
                    {project.title}
                  </h3>
                  <p className="text-[var(--text-secondary)] text-sm leading-[1.6] mb-5 grow">
                    {project.desc}
                  </p>

                  {/* Tech */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {project.tech.map(t => (
                      <span key={t} className="tech-badge">{t}</span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-2.5">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[var(--accent)] text-white font-['DM_Sans'] font-semibold text-[13px] no-underline transition-all duration-200 hover:bg-[var(--accent-light)] flex-1 justify-center"
                    >
                      <ExternalLink size={14} /> Live Demo
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg border border-[var(--border)] text-[var(--text-secondary)] font-['DM_Sans'] font-semibold text-[13px] no-underline transition-all duration-200 hover:border-[var(--accent)] hover:text-[var(--accent)]"
                    >
                      <Github size={14} />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="px-6 py-20 bg-[var(--bg-secondary)] border-t border-[var(--border)] text-center">
        <div className="max-w-[600px] mx-auto">
          <h2 className="font-['Syne'] font-extrabold text-[clamp(28px,4vw,44px)] text-[var(--text-primary)] mb-4">
            Want to build something?
          </h2>
          <p className="text-[var(--text-secondary)] text-base leading-[1.7] mb-8">
            These are placeholder examples. Let's talk about your project and build something real together.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-[var(--accent)] text-white font-['DM_Sans'] font-semibold text-base no-underline transition-all duration-200 hover:bg-[var(--accent-light)]"
          >
            Start a Project <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  )
}
