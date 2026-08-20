export type Course = {
  slug: string;
  title: string;
  description: string;
  icon: string;
  tags: string[];
  duration: string;
  level: string;
  rating: string;
  reviews: string;
  color: string;
};

export type Project = {
  slug: string;
  title: string;
  description: string;
  tags: string[];
  type: string;
  featured?: boolean;
  views: string;
  accent: string;
  image: string;
};

export const courses: Course[] = [
  { slug: 'ai-machine-learning', title: 'AI & Machine Learning', description: 'Build intelligent products with Python, data, and modern AI workflows.', icon: '✦', tags: ['Python', 'TensorFlow', 'NLP'], duration: '16 weeks', level: 'Advanced', rating: '4.9', reviews: '2.4k', color: 'orange' },
  { slug: 'data-analytics', title: 'Data Analytics', description: 'Turn complex datasets into clear decisions and measurable business impact.', icon: '◫', tags: ['SQL', 'Power BI', 'Excel'], duration: '12 weeks', level: 'Intermediate', rating: '4.8', reviews: '1.8k', color: 'blue' },
  { slug: 'full-stack-development', title: 'Full Stack Development', description: 'Design and ship fast, accessible web experiences from idea to production.', icon: '⌘', tags: ['React', 'Node.js', 'Postgres'], duration: '20 weeks', level: 'Beginner friendly', rating: '4.9', reviews: '3.1k', color: 'yellow' },
  { slug: 'cyber-security', title: 'Cyber Security', description: 'Learn to protect systems, investigate threats, and secure digital businesses.', icon: '⌁', tags: ['Ethical Hacking', 'SOC', 'Cloud'], duration: '14 weeks', level: 'Intermediate', rating: '4.8', reviews: '1.5k', color: 'red' },
  { slug: 'cloud-devops', title: 'Cloud & DevOps', description: 'Automate delivery and operate resilient infrastructure at scale.', icon: '☁', tags: ['AWS', 'Docker', 'Kubernetes'], duration: '14 weeks', level: 'Intermediate', rating: '4.9', reviews: '1.2k', color: 'cyan' },
  { slug: 'ui-ux-design', title: 'UI/UX Design', description: 'Create thoughtful interfaces grounded in research, systems, and craft.', icon: '✧', tags: ['Figma', 'Research', 'Prototyping'], duration: '10 weeks', level: 'Beginner friendly', rating: '4.9', reviews: '980', color: 'pink' },
];

export const projects: Project[] = [
  { slug: 'shopwise-ecommerce-platform', title: 'Shopwise E-commerce Platform', description: 'A high-converting commerce experience with smart search, analytics, and a clean admin cockpit.', tags: ['Next.js', 'Stripe', 'Postgres'], type: 'Product Design & Development', featured: true, views: '12.8k', accent: 'orange', image: '/projects/ecommerce.svg' },
  { slug: 'careconnect-ai-complaint-system', title: 'CareConnect AI Complaint System', description: 'An AI-assisted workflow that helps teams understand, route, and resolve customer concerns faster.', tags: ['Python', 'OpenAI', 'Dashboard'], type: 'AI & Automation', views: '8.4k', accent: 'blue', image: '/projects/ai-complaint.svg' },
  { slug: 'sentinel-security-monitor', title: 'Sentinel Security Monitor', description: 'A focused threat intelligence dashboard for seeing incidents clearly and acting with confidence.', tags: ['React', 'Charts', 'Security'], type: 'Cyber Security', views: '6.1k', accent: 'red', image: '/projects/security.svg' },
];

export const testimonials = [
  { name: 'Aarav Mehta', role: 'Product Analyst at Novus', quote: 'Tevexxo gave me the confidence and portfolio to move into a role I had been working toward for years.', initials: 'AM' },
  { name: 'Maya Shah', role: 'Frontend Engineer at Loop', quote: 'The projects feel real, the mentors are generous with feedback, and every week has a clear outcome.', initials: 'MS' },
  { name: 'Rohan Kapoor', role: 'Security Associate at Cobalt', quote: 'I stopped watching tutorials and started building. That shift changed the way I learn technology.', initials: 'RK' },
];

export const navItems = [
  { label: 'Home', href: '/' }, { label: 'Courses', href: '/courses' }, { label: 'Programs', href: '/programs' }, { label: 'Projects', href: '/projects' }, { label: 'Why Tevexxo', href: '/about' }, { label: 'Contact', href: '/contact' },
];
