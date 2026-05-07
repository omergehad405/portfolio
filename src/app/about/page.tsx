'use client'

import Link from 'next/link'
import { ArrowRight, Download, MapPin, Briefcase, GraduationCap, Heart } from 'lucide-react'

const techStack = [
  { category: 'Frontend', items: ['React.js', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Redux', 'Framer Motion'] },
  { category: 'Backend', items: ['Node.js', 'Express.js', 'REST API', 'JWT Auth', 'Socket.io'] },
  { category: 'Database', items: ['MongoDB', 'Mongoose', 'Firebase', 'Supabase'] },
  { category: 'Tools', items: ['Git', 'GitHub', 'Postman', 'Figma', "Strapi CMS"] },
]

const timeline = [
  {
    year: 'March 2026 – Present',
    title: 'Frontend Developer',
    place: 'Go.GO.Grow as a Frontend Developer',
    desc: 'Working as a frontend developer at Go.GO.Grow. and developing many projects.',
    icon: Briefcase,
  },
  {
    year: '2025',
    title: 'MERN stack Developer',
    place: 'Freelance',
    desc: 'Freelance MERN stack Developer.',
    icon: Briefcase,
  },
  {
    year: '2024',
    title: 'freelance Web Developer',
    place: 'Freelance',
    desc: 'Built 10+ website and web apps for many clients.',
    icon: Briefcase,
  },
  {
    year: '2022 – 2023',
    title: 'Started Frontend Journey',
    place: 'Self-taught & Online Courses',
    desc: 'Mastered HTML, CSS, JavaScript and React.js. Built multiple personal projects.',
    icon: GraduationCap,
  },
]

const values = [
  { emoji: '⚡', title: 'Performance First', desc: 'Every app I build is optimized for speed and efficiency.' },
  { emoji: '🎨', title: 'Clean Code', desc: 'Readable, maintainable, and well-documented codebases.' },
  { emoji: '🤝', title: 'Client Communication', desc: 'Clear updates, on-time delivery, and transparent process.' },
  { emoji: '🚀', title: 'Continuous Learning', desc: 'Always upskilling with the latest tools and best practices.' },
]

export default function AboutPage() {
  return (
    <div className="bg-[var(--bg-primary)] pt-[70px]">
      {/* ─── HEADER ─── */}
      <section className="px-6 py-20 border-b border-[var(--border)] relative overflow-hidden md:pb-[60px]">
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
      </section>

      {/* ─── BIO ─── */}
      <section className="px-6 py-20 border-b border-[var(--border)]">
        <div className="max-w-[1200px] mx-auto grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-15 items-center lg:gap-[60px]">
          {/* Avatar */}
          <div className="relative">
            <div className="w-full max-w-[380px] aspect-square rounded-3xl bg-[var(--bg-secondary)] border border-[var(--border)] flex items-center justify-center relative overflow-hidden">
              <div className="font-['Syne'] font-extrabold text-[120px] text-[rgba(232,98,42,0.12)] select-none leading-none">
                OG
              </div>
              <div className="absolute bottom-8 left-8 right-8 p-5 rounded-2xl bg-[var(--bg-card)] border border-[var(--border)]">
                <div className="font-['Syne'] font-bold text-xl text-[var(--text-primary)] mb-1">
                  Omar Gehad
                </div>
                <div className="font-['JetBrains_Mono'] text-[12px] text-[var(--accent)]">
                  MERN Stack Developer
                </div>
              </div>
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 rounded-2xl bg-[rgba(232,98,42,0.15)] border border-[rgba(56,82,180,0.3)] flex items-center justify-center font-['Syne'] font-extrabold text-[28px] text-[var(--accent)]">
              10+
            </div>
          </div>

          {/* Bio text */}
          <div>
            <h2 className="font-['Syne'] font-bold text-[clamp(24px,3vw,36px)] text-[var(--text-primary)] mb-5">
              Passionate about building things that matter.
            </h2>
            <p className="text-[var(--text-secondary)] text-base leading-[1.8] mb-4">
              I'm Omar Gehad, a MERN Stack Developer based in Egypt with over 2 years of freelance experience building and shipping production-ready full-stack applications.
            </p>
            <p className="text-[var(--text-secondary)] text-base leading-[1.8] mb-4">
              I specialize in React.js, Node.js, REST API design, and responsive UI development — with a track record of 10+ delivered projects across e-commerce, landing pages, and content platforms.
            </p>
            <p className="text-[var(--text-secondary)] text-base leading-[1.8] mb-8">
              I'm passionate about clean code, performance optimization, and turning ideas into polished digital products. When I'm not coding, I'm leveling up my skills and exploring new technologies.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[var(--accent)] text-white font-['DM_Sans'] font-semibold text-[15px] no-underline transition-all duration-200 hover:bg-[var(--accent-light)]"
              >
                Work With Me <ArrowRight size={16} />
              </Link>
              <a
                href="https://drive.google.com/file/d/1Aj6BXq1NHRCgLnoZxe7Ji_2slawAdT49/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-[var(--border)] text-[var(--text-primary)] font-['DM_Sans'] font-semibold text-[15px] no-underline transition-all duration-200 hover:border-[var(--accent)] hover:text-[var(--accent)]"
              >
                <Download size={16} /> Download CV
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ─── TECH STACK ─── */}
      <section className="px-6 py-20 bg-[var(--bg-secondary)] border-b border-[var(--border)]">
        <div className="max-w-[1200px] mx-auto">
          <p className="section-tag">Tech Stack</p>
          <h2 className="font-['Syne'] font-extrabold text-[clamp(28px,4vw,48px)] text-[var(--text-primary)] mb-12">
            Tools I Work With
          </h2>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-6">
            {techStack.map(({ category, items }) => (
              <div
                key={category}
                className="p-7 rounded-2xl border border-[var(--border)] bg-[var(--bg-card)]"
              >
                <h3 className="font-['Syne'] font-bold text-base text-[var(--accent)] mb-4 italic">
                  {category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {items.map(item => (
                    <span key={item} className="tech-badge">{item}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── TIMELINE ─── */}
      <section className="px-6 py-20 border-b border-[var(--border)]">
        <div className="max-w-[1200px] mx-auto">
          <p className="section-tag">Experience</p>
          <h2 className="font-['Syne'] font-extrabold text-[clamp(28px,4vw,48px)] text-[var(--text-primary)] mb-12">
            My Journey
          </h2>
          <div className="flex flex-col gap-0">
            {timeline.map(({ year, title, place, desc, icon: Icon }, i) => (
              <div key={title} className="flex gap-6 relative">
                {/* Line + dot */}
                <div className="flex flex-col items-center flex-shrink-0">
                  <div className="w-11 h-11 rounded-xl border-2 border-[var(--accent)] bg-[rgba(56,82,180,0.1)] flex items-center justify-center text-[var(--accent)] flex-shrink-0">
                    <Icon size={18} />
                  </div>
                  {i < timeline.length - 1 && (
                    <div className="w-[2px] grow bg-[var(--border)] my-2" />
                  )}
                </div>
                {/* Content */}
                <div className={`${i < timeline.length - 1 ? 'pb-10' : 'pb-0'} grow`}>
                  <span className="font-['JetBrains_Mono'] text-[12px] text-[var(--accent)] block mb-1.5">
                    {year}
                  </span>
                  <h3 className="font-['Syne'] font-bold text-xl text-[var(--text-primary)] mb-1">
                    {title}
                  </h3>
                  <div className="font-['DM_Sans'] text-sm text-[var(--accent)] mb-2.5">
                    {place}
                  </div>
                  <p className="text-[var(--text-secondary)] text-[15px] leading-[1.7]">
                    {desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── VALUES ─── */}
      <section className="px-6 py-20 bg-[var(--bg-secondary)]">
        <div className="max-w-[1200px] mx-auto">
          <p className="section-tag">Values</p>
          <h2 className="font-['Syne'] font-extrabold text-[clamp(28px,4vw,48px)] text-[var(--text-primary)] mb-12">
            How I Work
          </h2>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-5">
            {values.map(({ emoji, title, desc }) => (
              <div
                key={title}
                className="card-hover p-7 rounded-2xl border border-[var(--border)] bg-[var(--bg-card)]"
              >
                <div className="text-[32px] mb-4">{emoji}</div>
                <h3 className="font-['Syne'] font-bold text-[17px] text-[var(--text-primary)] mb-2">
                  {title}
                </h3>
                <p className="text-[var(--text-secondary)] text-sm leading-[1.6]">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
