'use client'

import { useRef, useState, useEffect } from 'react'
import { motion, useScroll, useTransform, useSpring } from 'framer-motion'
import { ArrowDown, ArrowUpRight, Github } from 'lucide-react'
import { Project, ProjectCategoryConfig } from '@/data/projects'

interface CategoryPinnedSectionProps {
  category: ProjectCategoryConfig
  projects: Project[]
  categoryIndex: number
  totalCategories: number
}

function ProjectImageContainer({ project }: { project: Project }) {
  return (
    <div className="relative h-[210px] sm:h-[225px] rounded-[22px] overflow-hidden border border-[var(--border)] group/img bg-[var(--bg-secondary)] flex-shrink-0">
      {project.image ? (
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover/img:scale-105"
        />
      ) : (
        <div className="w-full h-full flex items-center justify-center text-5xl">
          {project.emoji || '💻'}
        </div>
      )}

      {/* Dark gradient overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-black/10 pointer-events-none" />

      {/* Top Left Badge */}
      <span className="absolute top-3.5 left-3.5 px-3 py-1 rounded-full text-[10px] font-mono font-bold tracking-wider uppercase bg-black/60 backdrop-blur-md text-white border border-white/20 shadow-sm">
        {project.categoryLabel || project.category}
      </span>

      {/* Top Right External Link Button */}
      <a
        href={project.liveUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Open ${project.title} live demo`}
        className="absolute top-3.5 right-3.5 w-8 h-8 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-white flex items-center justify-center hover:bg-[var(--accent)] hover:border-[var(--accent)] transition-all duration-200"
      >
        <ArrowUpRight size={15} />
      </a>

      {/* Bottom Highlights Pills */}
      <div className="absolute bottom-3 left-3 right-3 flex flex-wrap gap-1.5 pointer-events-none">
        {(project.highlights || project.tech.slice(0, 3)).map((highlight, idx) => (
          <span
            key={idx}
            className="px-2.5 py-0.5 rounded-md text-[10px] font-mono text-white/90 bg-white/15 backdrop-blur-md border border-white/20 shadow-sm"
          >
            {highlight}
          </span>
        ))}
      </div>
    </div>
  )
}

function ProjectInfoContainer({ project, index }: { project: Project; index: number }) {
  const formattedIndex = String(index + 1).padStart(2, '0')

  return (
    <div className="flex flex-col justify-between flex-1 py-1">
      {/* Top row: Number on Left, Title & Subtitle on Right */}
      <div>
        <div className="flex items-start justify-between gap-3 mb-2.5">
          <span className="font-display font-extrabold text-3xl sm:text-4xl text-[var(--text-muted)] opacity-35 select-none leading-none">
            {formattedIndex}
          </span>
          <div className="text-right">
            <h3 className="font-display font-extrabold text-xl text-[var(--text-primary)] hover:text-[var(--accent)] transition-colors leading-tight">
              {project.title}
            </h3>
            <span className="font-mono text-xs text-[var(--accent)] font-semibold inline-block mt-0.5">
              {project.subtitle || project.category}
            </span>
          </div>
        </div>

        {/* Tools and features */}
        <div className="mt-2.5">
          <p className="font-mono text-[11px] font-bold uppercase tracking-wider text-[var(--text-muted)] mb-1">
            Tools and features
          </p>
          <p className="font-body text-xs sm:text-[13px] text-[var(--text-secondary)] leading-relaxed line-clamp-2">
            {project.tech.join(', ')}
          </p>
        </div>
      </div>

      {/* Bottom row: Direct link & Code */}
      <div className="flex items-center justify-between pt-3 border-t border-[var(--border)] mt-3">
        <a
          href={project.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 font-display font-bold text-xs sm:text-sm text-[var(--text-primary)] hover:text-[var(--accent)] transition-colors group/link"
        >
          <span>Direct link</span>
          <ArrowUpRight
            size={14}
            className="text-[var(--accent)] transition-transform duration-200 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5"
          />
        </a>

        <div className="flex items-center gap-2.5">
          {project.githubUrl && project.githubUrl !== '#' && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.title} GitHub repository`}
              className="text-[var(--text-muted)] hover:text-[var(--accent)] transition-colors"
            >
              <Github size={14} />
            </a>
          )}
          <span className="font-mono text-xs text-[var(--text-muted)] opacity-70">
            {project.code || `#P-${formattedIndex}`}
          </span>
        </div>
      </div>
    </div>
  )
}

function AlternatingProjectCard({ project, index }: { project: Project; index: number }) {
  // Alternating card layout:
  // Even index (0, 2): Image on TOP, Info on BOTTOM
  // Odd index (1, 3): Info on TOP, Image on BOTTOM
  const isImageTop = index % 2 === 0

  return (
    <div className="card-hover w-[320px] sm:w-[370px] md:w-[410px] h-[490px] sm:h-[515px] rounded-[30px] border border-[var(--border)] bg-[var(--bg-card)] p-5 sm:p-6 flex flex-col justify-between flex-shrink-0 shadow-sm hover:shadow-xl transition-all duration-300 relative">
      {isImageTop ? (
        <>
          <ProjectImageContainer project={project} />
          <div className="h-4" />
          <ProjectInfoContainer project={project} index={index} />
        </>
      ) : (
        <>
          <ProjectInfoContainer project={project} index={index} />
          <div className="h-4" />
          <ProjectImageContainer project={project} />
        </>
      )}
    </div>
  )
}

export default function CategoryPinnedSection({
  category,
  projects,
  categoryIndex,
  totalCategories,
}: CategoryPinnedSectionProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const trackRef = useRef<HTMLDivElement>(null)
  const [maxScroll, setMaxScroll] = useState(0)
  const [progressPercent, setProgressPercent] = useState(0)

  useEffect(() => {
    const calculateScroll = () => {
      if (!trackRef.current) return
      const trackWidth = trackRef.current.scrollWidth
      const viewportWidth = window.innerWidth
      const endPadding = viewportWidth > 768 ? 140 : 40
      const diff = Math.max(0, trackWidth - viewportWidth + endPadding)
      setMaxScroll(diff)
    }

    calculateScroll()
    window.addEventListener('resize', calculateScroll)
    return () => window.removeEventListener('resize', calculateScroll)
  }, [projects])

  // Height proportional to project cards count for smooth scrolling pace
  const sectionHeight = `${Math.max(170, projects.length * 80)}vh`

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  })

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 26,
    mass: 0.2,
    restDelta: 0.001,
  })

  const x = useTransform(smoothProgress, [0, 1], [0, -maxScroll])
  const progressWidth = useTransform(smoothProgress, [0, 1], ['0%', '100%'])

  useEffect(() => {
    return smoothProgress.on('change', (latest) => {
      setProgressPercent(Math.min(100, Math.max(0, Math.round(latest * 100))))
    })
  }, [smoothProgress])

  return (
    <section
      id={category.key.replace(/\s+/g, '-')}
      ref={containerRef}
      style={{ height: sectionHeight }}
      className="relative"
    >
      {/* Sticky Fullscreen Container */}
      <div className="sticky top-0 h-screen w-full flex flex-col justify-between overflow-hidden bg-[var(--bg-primary)] border-t border-[var(--border)] pt-[85px] pb-7 px-5 sm:px-10 lg:px-16 select-none">
        {/* Subtle Ambient Orb */}
        <div className="orb w-[500px] h-[500px] bg-[var(--accent)] -top-[200px] -right-[150px] opacity-[0.06] pointer-events-none" />

        {/* ─── CATEGORY HEADER BAR ─── */}
        <div className="w-full max-w-[1500px] mx-auto flex flex-col md:flex-row md:items-center justify-between gap-4 z-10">
          {/* Category Title */}
          <div className="flex items-center gap-3.5">
            <span className="w-3 h-3 rounded-full bg-[var(--accent)]" />
            <h2 className="font-display font-extrabold text-[clamp(32px,5vw,60px)] text-[var(--text-primary)] tracking-tight leading-none">
              {category.title}
            </h2>
            <span className="hidden sm:inline-flex px-3 py-1 rounded-full text-xs font-mono font-semibold text-[var(--accent)] bg-[rgba(56,82,180,0.1)] border border-[rgba(56,82,180,0.2)]">
              {projects.length} {projects.length === 1 ? 'Project' : 'Projects'}
            </span>
          </div>

          {/* Scroll progress bar & hint (matches reference design!) */}
          <div className="flex items-center gap-3 self-end md:self-auto">
            <span className="hidden sm:inline-flex items-center gap-1.5 font-mono text-xs text-[var(--text-muted)]">
              <ArrowDown size={14} className="text-[var(--accent)] animate-bounce" />
              Scroll down to slide projects
            </span>

            {/* Horizontal progress bar */}
            <div className="w-32 sm:w-48 h-2 sm:h-2.5 rounded-full bg-[var(--bg-secondary)] border border-[var(--border)] overflow-hidden p-0.5 relative">
              <motion.div
                style={{ width: progressWidth }}
                className="h-full rounded-full bg-[var(--accent)]"
              />
            </div>

            {/* Percentage indicator */}
            <span className="font-mono text-xs text-[var(--accent)] font-bold min-w-[36px] text-right tabular-nums">
              {progressPercent}%
            </span>
          </div>
        </div>

        {/* ─── HORIZONTAL CARDS TRACK ─── */}
        <div className="w-full overflow-hidden flex-1 flex items-center my-auto z-10 py-2">
          <motion.div
            ref={trackRef}
            style={{ x }}
            className="flex items-center gap-6 sm:gap-8 w-max pl-2 sm:pl-4 pr-12 sm:pr-24"
          >
            {projects.map((project, idx) => (
              <AlternatingProjectCard
                key={project.id}
                project={project}
                index={idx}
              />
            ))}
          </motion.div>
        </div>

        {/* ─── BOTTOM METADATA BAR ─── */}
        <div className="w-full max-w-[1500px] mx-auto flex items-center justify-between text-xs font-mono text-[var(--text-muted)] pt-3 border-t border-[var(--border)]/70 z-10">
          <span className="line-clamp-1 max-w-[700px] text-[var(--text-secondary)]">
            {category.desc}
          </span>
          <div className="flex items-center gap-2">
            <span className="text-[var(--accent)] font-bold">
              {category.badge}
            </span>
            <span>•</span>
            <span>Category {categoryIndex + 1} of {totalCategories}</span>
          </div>
        </div>
      </div>
    </section>
  )
}
