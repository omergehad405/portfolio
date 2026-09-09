import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Download } from 'lucide-react'


function Bio() {
    return (
        < section className="px-6 py-20 border-b border-[var(--border)]" >
            <div className="max-w-[1200px] mx-auto grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-15 items-center lg:gap-[60px]">
                {/* Avatar */}
                <div className="relative">
                    <div className="w-full max-w-[380px] aspect-square rounded-3xl bg-[var(--bg-secondary)] border border-[var(--border)] flex items-center justify-center relative overflow-hidden">
                        <Image src="/omer.jpeg" alt="Omar Gehad" width={380} height={380} className="rounded-3xl" />
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
                            href="https://drive.google.com/file/d/1m-l4FWWarG3LYhoqrSovhWDFcAwbAHU6/view?usp=sharing"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-[var(--border)] text-[var(--text-primary)] font-['DM_Sans'] font-semibold text-[15px] no-underline transition-all duration-200 hover:border-[var(--accent)] hover:text-[var(--accent)]"
                        >
                            <Download size={16} /> Open CV
                        </a>
                    </div>
                </div>
            </div>
        </section >
    )
}

export default Bio