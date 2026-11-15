export interface Project {
  id: number
  title: string
  category: 'fullStack' | 'website' | 'e-commerce' | 'landing page' | string
  categoryLabel?: string
  subtitle?: string
  desc: string
  tech: string[]
  highlights?: string[]
  image?: string
  liveUrl: string
  githubUrl: string
  featured?: boolean
  color?: string
  emoji?: string
  code?: string
}

export interface ProjectCategoryConfig {
  key: string
  title: string
  shortTitle: string
  desc: string
  badge: string
}

export const projectCategories: ProjectCategoryConfig[] = [
  {
    key: 'fullStack',
    title: 'Full-Stack Applications',
    shortTitle: 'Full-Stack',
    desc: 'End-to-end applications with secure auth, database design, REST APIs, and reactive interfaces.',
    badge: 'MERN & Next.js',
  },
  {
    key: 'website',
    title: 'Websites & Platforms',
    shortTitle: 'Websites',
    desc: 'High-performance interactive web platforms, publication engines, and business intelligence solutions.',
    badge: 'Interactive Web',
  },
  {
    key: 'e-commerce',
    title: 'E-Commerce Solutions',
    shortTitle: 'E-Commerce',
    desc: 'Modern online storefronts with cart flows, responsive catalogs, and customer checkouts.',
    badge: 'Online Stores',
  },
  {
    key: 'landing page',
    title: 'Landing Pages',
    shortTitle: 'Landing Pages',
    desc: 'Pixel-perfect, fast-loading marketing landing pages crafted for high engagement and conversions.',
    badge: 'Conversion UI',
  },
]

export const projects: Project[] = [
  // ─── FULL-STACK ───
  {
    id: 1,
    title: 'Codeya',
    category: 'fullStack',
    categoryLabel: 'Enterprise Agency',
    subtitle: 'Agency Platform',
    desc: "A full-stack software agency that delivers end-to-end web solutions for clients. Built the agency's official website.",
    tech: ['React.js', 'Tailwind CSS', 'Node.js', 'Express', 'MongoDB'],
    highlights: ['MERN Architecture', 'Client Ingestion', 'Responsive UI'],
    image: '/Projects/codeya.png',
    liveUrl: 'https://www.codeya.io/',
    githubUrl: '#',
    featured: true,
    color: '#F59E0B',
    emoji: '💻',
    code: '#FS-01',
  },
  {
    id: 2,
    title: 'EduMaster',
    category: 'fullStack',
    categoryLabel: 'AI Education',
    subtitle: 'AI EdTech Platform',
    desc: 'AI-powered education platform with structured learning tracks, automated quiz generation from notes, and adaptive level testing.',
    tech: ['React.js', 'Tailwind CSS', 'Node.js', 'Express', 'MongoDB', 'Framer Motion'],
    highlights: ['AI Quiz Engine', 'Adaptive Tests', 'Track Analytics'],
    image: '/Projects/edumaster.png',
    liveUrl: 'https://edu-master-five.vercel.app/',
    githubUrl: '#',
    featured: true,
    color: '#10B981',
    emoji: '🎓',
    code: '#FS-02',
  },
  {
    id: 3,
    title: 'Khadamati',
    category: 'fullStack',
    categoryLabel: 'Marketplace',
    subtitle: 'Service Marketplace',
    desc: 'Full-stack service marketplace connecting clients with skilled professionals with seamless onboarding.',
    tech: ['React.js', 'Tailwind CSS', 'Node.js', 'Express', 'MongoDB'],
    highlights: ['Service Listings', 'Booking Engine', 'Verified Pros'],
    image: '/Projects/khadamati.png',
    liveUrl: 'https://khdmaaty.com/',
    githubUrl: '#',
    featured: true,
    color: '#EC4899',
    emoji: '🎙️',
    code: '#FS-03',
  },
  {
    id: 4,
    title: 'FreshEat',
    category: 'fullStack',
    categoryLabel: 'Food Ordering',
    subtitle: 'Online Delivery Platform',
    desc: 'Full-stack online food delivery application allowing customers to browse dishes and order online.',
    tech: ['React.js', 'Tailwind CSS', 'Firebase', 'REST APIs'],
    highlights: ['Live Order Flow', 'Menu Filtering', 'Cart Checkout'],
    image: '/Projects/freshEat.png',
    liveUrl: 'https://fresh-heat.vercel.app/',
    githubUrl: 'https://github.com/omergehad405/FreshHeat',
    featured: false,
    color: '#E8622A',
    emoji: '🍔',
    code: '#FS-04',
  },

  // ─── WEBSITES ───
  {
    id: 5,
    title: 'GrowthifyPulse',
    category: 'website',
    categoryLabel: 'Market Intelligence',
    subtitle: 'Analytics & Strategy',
    desc: 'Growthifypulse company helps organizations unlock growth through deep market intelligence and analytics.',
    tech: ['React.js', 'Tailwind CSS', 'Framer Motion', 'Next.js'],
    highlights: ['Dynamic Charts', 'SaaS Showcase', 'Modern UI'],
    image: '/Projects/growthifypulse.png',
    liveUrl: 'https://growthifypulse.com/',
    githubUrl: '#',
    featured: false,
    color: '#E8622A',
    emoji: '📈',
    code: '#WB-01',
  },
  {
    id: 6,
    title: 'Fyrre Magazine',
    category: 'website',
    categoryLabel: 'Interactive Media',
    subtitle: 'Editorial Publication',
    desc: 'Editorial web template for an interactive digital magazine, articles publication, and podcast stream.',
    tech: ['Next.js', 'Tailwind CSS', 'TypeScript'],
    highlights: ['Podcast Player', 'Editorial Layout', 'Dark & Light Mode'],
    image: '/Projects/fyrre-magazine.png',
    liveUrl: 'https://fyrre-magazine-nine.vercel.app/',
    githubUrl: 'https://github.com/omergehad405/fyrreMagazine',
    featured: false,
    color: '#EC4899',
    emoji: '🎙️',
    code: '#WB-02',
  },

  // ─── E-COMMERCE ───
  {
    id: 7,
    title: 'flower.',
    category: 'e-commerce',
    categoryLabel: 'Floral Boutique',
    subtitle: 'Online Florist',
    desc: 'Elegant e-commerce storefront for flower arrangements, bouquets, and occasion gifts.',
    tech: ['React.js', 'SCSS', 'Context API'],
    highlights: ['Occasion Filters', 'Custom Bouquets', 'Quick Checkout'],
    image: '/Projects/flower-shop.png',
    liveUrl: 'https://omergehad405.github.io/Flower_shop/',
    githubUrl: 'https://github.com/omergehad405/Flower_shop',
    featured: false,
    color: '#8B5CF6',
    emoji: '🌸',
    code: '#EC-01',
  },
  {
    id: 8,
    title: 'Organic Store',
    category: 'e-commerce',
    categoryLabel: 'Health & Market',
    subtitle: 'Organic Grocery',
    desc: 'Modern organic grocery and health foods e-commerce shop with cart and checkout flows.',
    tech: ['React.js', 'Tailwind CSS', 'Local State'],
    highlights: ['Nutrition Badges', 'Cart Drawer', 'Smart Search'],
    image: '/Projects/organic-store.png',
    liveUrl: 'https://organic-store-tan.vercel.app/',
    githubUrl: 'https://github.com/omergehad405/Organic_Store.git',
    featured: false,
    color: '#10B981',
    emoji: '🥑',
    code: '#EC-02',
  },
  {
    id: 9,
    title: 'Shoe Shop',
    category: 'e-commerce',
    categoryLabel: 'Footwear & Apparel',
    subtitle: 'Sneakers Store',
    desc: 'Interactive sneakers storefront with custom product filtering, gallery previews, and cart management.',
    tech: ['React.js', 'Tailwind CSS', 'Context API'],
    highlights: ['Size Selector', 'Filter Matrix', 'Responsive Grid'],
    image: '/Projects/shoe-shop.png',
    liveUrl: 'https://omergehad405.github.io/Flower_shop/',
    githubUrl: '#',
    featured: false,
    color: '#F59E0B',
    emoji: '👟',
    code: '#EC-03',
  },

  // ─── LANDING PAGES ───
  {
    id: 10,
    title: 'Afaq Altareq',
    category: 'landing page',
    categoryLabel: 'Fleet Agency',
    subtitle: 'Car Rental Agency',
    desc: 'Modern, high-converting landing page for Afaq Altareq, a premium car rental and fleet agency.',
    tech: ['HTML 5', 'CSS 3', 'JavaScript'],
    highlights: ['Car Fleet Slider', 'Fast Booking', 'SEO Optimized'],
    image: '/Projects/afaqaltareq.png',
    liveUrl: 'https://afaqaltariq.sa/',
    githubUrl: '#',
    featured: false,
    color: '#E8622A',
    emoji: '🚗',
    code: '#LP-01',
  },
  {
    id: 11,
    title: 'Petra Mix',
    category: 'landing page',
    categoryLabel: 'Industrial Solutions',
    subtitle: 'Concrete & Heavy Supply',
    desc: 'Corporate high-converting landing page for Petra Mix Ready Concrete solutions, projects, and supplies.',
    tech: ['HTML 5', 'CSS 3', 'JavaScript'],
    highlights: ['Project Showcase', 'Corporate Specs', 'Contact Quotes'],
    image: '/Projects/Petra-Mix.png',
    liveUrl: 'https://afaqaltariq.sa/',
    githubUrl: '#',
    featured: false,
    color: '#3B82F6',
    emoji: '🏗️',
    code: '#LP-02',
  },
]
