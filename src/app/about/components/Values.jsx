const values = [
    { emoji: '⚡', title: 'Performance First', desc: 'Every app I build is optimized for speed and efficiency.' },
    { emoji: '🎨', title: 'Clean Code', desc: 'Readable, maintainable, and well-documented codebases.' },
    { emoji: '🤝', title: 'Client Communication', desc: 'Clear updates, on-time delivery, and transparent process.' },
    { emoji: '🚀', title: 'Continuous Learning', desc: 'Always upskilling with the latest tools and best practices.' },
]

function Values() {
    return (
        < section className="px-6 py-20 bg-[var(--bg-secondary)]" >
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
        </section >
    )
}

export default Values