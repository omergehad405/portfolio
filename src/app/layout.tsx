import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { ThemeProvider } from '@/components/ThemeProvider'

export const metadata: Metadata = {
  title: 'Omar Gehad — MERN Stack Developer',
  description: 'MERN Stack Developer with 2+ years of freelance experience building production-ready full-stack applications.',
  keywords: ['Omar Gehad', 'MERN Stack', 'Full Stack Developer', 'React', 'Node.js', 'Freelance Developer'],
  authors: [{ name: 'Omar Gehad' }],
  openGraph: {
    title: 'Omar Gehad — MERN Stack Developer',
    description: 'Building fast, beautiful, production-ready web applications.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="noise">
        <ThemeProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
