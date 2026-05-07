'use client'

import { useState } from 'react'
import { Send, Github, Linkedin, ExternalLink, Mail, MapPin, Clock, MessageCircle } from 'lucide-react'

const contactLinks = [
  {
    label: 'GitHub',
    value: 'github.com/omergehad405',
    href: 'https://github.com/omergehad405/omergehad405',
    icon: Github,
    desc: 'Check out my code',
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/omar-gehad',
    href: 'https://www.linkedin.com/in/omar-gehad-214302291/',
    icon: Linkedin,
    desc: 'Connect professionally',
  },
  {
    label: 'Khamsat',
    value: 'khamsat.com/user/omer_gehad',
    href: 'https://khamsat.com/user/omer_gehad',
    icon: ExternalLink,
    desc: 'Hire me on Khamsat',
  },
  {
    label: 'Upwork',
    value: 'upwork.com',
    href: 'https://www.upwork.com',
    icon: ExternalLink,
    desc: 'Hire me on Upwork',
  },
]

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')
    // Simulate send (replace with your EmailJS / Formspree / API call)
    await new Promise(r => setTimeout(r, 1500))
    setStatus('sent')
    setForm({ name: '', email: '', subject: '', message: '' })
  }

  return (
    <div className="bg-[var(--bg-primary)] pt-[70px]">
      {/* ─── HEADER ─── */}
      <section className="px-6 py-20 border-b border-[var(--border)] relative overflow-hidden md:pb-[60px]">
        <div className="absolute -top-[200px] -right-[200px] w-[500px] h-[500px] bg-[var(--accent)] rounded-full blur-[120px] opacity-[0.07]" />
        <div className="max-w-[1200px] mx-auto">
          <p className="section-tag">Contact</p>
          <h1 className="font-display font-extrabold text-[clamp(40px,6vw,80px)] text-[var(--text-primary)] leading-[1.05] mb-5">
            Let's build<br />something great.
          </h1>
          <p className="text-[var(--text-secondary)] text-[17px] leading-[1.7] max-w-[520px]">
            Have a project in mind? I'd love to hear about it. Send me a message and I'll get back to you within 24 hours.
          </p>
        </div>
      </section>

      {/* ─── CONTENT ─── */}
      <section className="px-6 py-20 pb-[100px]">
        <div className="max-w-[1200px] mx-auto grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-15 items-start lg:gap-[60px]">
          {/* Left: info */}
          <div>
            <h2 className="font-display font-bold text-[28px] text-[var(--text-primary)] mb-8">
              Get in Touch
            </h2>

            {/* Quick info */}
            <div className="flex flex-col gap-5 mb-10">
              {[
                { icon: Mail, label: 'Email', value: 'omergehad593@gmail.com', desc: 'Best way to reach me', href: 'mailto:omergehad593@gmail.com' },
                { icon: MessageCircle, label: 'WhatsApp', value: '01115926334', desc: 'Chat with me directly', href: 'https://wa.me/201115926334' },
                { icon: MapPin, label: 'Location', value: 'Egypt', desc: 'Available worldwide' },
                { icon: Clock, label: 'Response Time', value: 'Within 24 hours', desc: 'Usually much faster' },
              ].map(({ icon: Icon, label, value, desc, href }) => (
                <div
                  key={label}
                  onClick={() => href && window.open(href, '_blank')}
                  className={`flex gap-4 items-start transition-transform duration-200 ${href ? 'cursor-pointer hover:translate-x-1' : 'cursor-default'}`}
                >
                  <div className="w-11 h-11 rounded-xl border border-[var(--border)] bg-[var(--bg-card)] flex items-center justify-center text-[var(--accent)] shrink-0">
                    <Icon size={18} />
                  </div>
                  <div>
                    <div className="font-display font-semibold text-[15px] text-[var(--text-primary)] mb-0.5">
                      {value}
                    </div>
                    <div className="font-mono text-[12px] text-[var(--text-muted)]">
                      {desc}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <h3 className="font-display font-bold text-xl text-[var(--text-primary)] mb-5">
              Find Me Online
            </h3>
            <div className="flex flex-col gap-3">
              {contactLinks.map(({ label, value, href, icon: Icon, desc }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3.5 p-4 px-5 rounded-2xl border border-[var(--border)] bg-[var(--bg-card)] no-underline transition-all duration-200 hover:border-[var(--accent)] hover:bg-[rgba(232,98,42,0.05)]"
                >
                  <div className="w-9 h-9 rounded-xl bg-[rgba(56,82,180,0.1)] flex items-center justify-center text-[var(--accent)] shrink-0">
                    <Icon size={17} />
                  </div>
                  <div className="grow">
                    <div className="font-display font-semibold text-sm text-[var(--text-primary)]">
                      {label}
                    </div>
                    <div className="font-mono text-[11px] text-[var(--text-muted)]">
                      {desc}
                    </div>
                  </div>
                  <ExternalLink size={14} className="text-[var(--text-muted)]" />
                </a>
              ))}
            </div>
          </div>

          {/* Right: form */}
          <div>
            <div className="p-10 rounded-[20px] border border-[var(--border)] bg-[var(--bg-card)]">
              <h2 className="font-display font-bold text-2xl text-[var(--text-primary)] mb-8">
                Send a Message
              </h2>

              {status === 'sent' ? (
                <div className="p-10 rounded-2xl bg-[rgba(34,197,94,0.08)] border border-[rgba(34,197,94,0.3)] text-center">
                  <div className="text-[48px] mb-4">✅</div>
                  <h3 className="font-display font-bold text-[22px] text-[var(--text-primary)] mb-2">
                    Message Sent!
                  </h3>
                  <p className="text-[var(--text-secondary)] text-[15px]">
                    Thanks for reaching out. I'll get back to you within 24 hours.
                  </p>
                  <button
                    onClick={() => setStatus('idle')}
                    className="mt-5 px-6 py-2.5 rounded-lg border border-[var(--border)] bg-transparent text-[var(--text-secondary)] font-body text-sm cursor-pointer hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors"
                  >
                    Send another
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div>
                      <label className="block font-body text-sm font-medium text-[var(--text-secondary)] mb-2" htmlFor="name">
                        Your Name *
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Omar Ahmed"
                        className="w-full px-4 py-3.5 rounded-xl border border-[var(--border)] bg-[var(--bg-secondary)] text-[var(--text-primary)] font-body text-[15px] outline-none transition-all focus:border-[var(--accent)]"
                      />
                    </div>
                    <div>
                      <label className="block font-body text-sm font-medium text-[var(--text-secondary)] mb-2" htmlFor="email">
                        Email Address *
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={form.email}
                        onChange={handleChange}
                        placeholder="you@example.com"
                        className="w-full px-4 py-3.5 rounded-xl border border-[var(--border)] bg-[var(--bg-secondary)] text-[var(--text-primary)] font-body text-[15px] outline-none transition-all focus:border-[var(--accent)]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block font-body text-sm font-medium text-[var(--text-secondary)] mb-2" htmlFor="subject">
                      Subject *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      required
                      value={form.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3.5 rounded-xl border border-[var(--border)] bg-[var(--bg-secondary)] text-[var(--text-primary)] font-body text-[15px] outline-none transition-all focus:border-[var(--accent)] cursor-pointer"
                    >
                      <option value="">Select a subject</option>
                      <option value="fullstack">Full-Stack Project</option>
                      <option value="frontend">Frontend Development</option>
                      <option value="backend">Backend / API</option>
                      <option value="ecommerce">E-Commerce</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block font-body text-sm font-medium text-[var(--text-secondary)] mb-2" htmlFor="message">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Tell me about your project, timeline, and budget..."
                      className="w-full px-4 py-3.5 rounded-xl border border-[var(--border)] bg-[var(--bg-secondary)] text-[var(--text-primary)] font-body text-[15px] outline-none transition-all focus:border-[var(--accent)] resize-vertical min-h-[140px]"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={status === 'sending'}
                    className={`flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-body font-semibold text-base transition-all duration-200 ${
                      status === 'sending'
                        ? 'bg-[var(--text-muted)] cursor-not-allowed'
                        : 'bg-[var(--accent)] text-white hover:bg-[var(--accent-light)]'
                    }`}
                  >
                    {status === 'sending' ? (
                      <>Sending...</>
                    ) : (
                      <>
                        <Send size={17} /> Send Message
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
