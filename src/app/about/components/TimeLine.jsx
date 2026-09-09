import { MapPin, Briefcase, GraduationCap } from 'lucide-react'

const timeline = [
    {
        year: '2025 - Present',
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
function TimeLine() {
    return (
        < section className="px-6 py-20 border-b border-[var(--border)]" >
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
        </section >
    )
}

export default TimeLine