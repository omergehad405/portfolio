const tech = [
    {
        category: 'Frontend', items: ['Html ', 'Css ', 'JavaScript', ' React.js', 'Next.js', 'Tailwind CSS', 'Zustand', 'Framer Motion']
    },
    { category: 'Backend', items: ['Node.js', 'Express.js', 'REST API', 'JWT Auth', 'Socket.io'] },
    { category: 'Database', items: ['MongoDB', 'Mongoose', 'Firebase', 'Supabase'] },
    { category: 'Tools', items: ['Git', 'GitHub', 'Github actions', 'Postman', 'Figma', "Strapi CMS"] },
]
function TechStack() {
    return (
        < section className="px-6 py-20 bg-[var(--bg-secondary)] border-b border-[var(--border)]" >
            <div className="max-w-[1200px] mx-auto">
                <p className="section-tag">Tech Stack</p>
                <h2 className="font-['Syne'] font-extrabold text-[clamp(28px,4vw,48px)] text-[var(--text-primary)] mb-12">
                    Tools I Work With
                </h2>
                <div className="grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-6">
                    {tech.map(({ category, items }) => (
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
        </section >
    )

}

export default TechStack