import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { ArrowRight, Eye, Github } from 'lucide-react';
import { Logo } from '@/components/Logo';
import { navItems, projects } from '@/lib/tevexxo-data';

export function generateStaticParams() {
  return projects.map(project => ({ slug: project.slug }));
}

export default function ProjectDetail({ params }: { params: { slug: string } }) {
  const project = projects.find(item => item.slug === params.slug);
  if (!project) notFound();

  return <div className="min-h-screen bg-[#f7f6f2]">
    <header className="border-b border-slate-200 bg-white"><div className="container-shell flex h-[76px] items-center justify-between gap-6"><Link href="/" aria-label="Tevexxo home"><Logo compact /></Link><nav className="hidden items-center gap-7 lg:flex" aria-label="Primary navigation">{navItems.map(item => <Link key={item.href} href={item.href} className="text-sm text-slate-600 transition hover:text-[#ff5a00]">{item.label}</Link>)}</nav><Link href="/contact" className="rounded-full bg-[#ff5a00] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#ff6e21]">Get started</Link></div></header>
    <section className="container-shell py-20">
      <Link href="/projects" className="text-sm font-semibold text-[#ff5a00]">← Back to projects</Link>
      <div className="mt-8 grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
        <div><p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#ff5a00]">{project.type}</p><h1 className="mt-4 font-display text-5xl font-bold tracking-[-0.04em]">{project.title}</h1><p className="mt-6 max-w-xl text-lg text-slate-500">{project.description}</p><div className="mt-8 flex flex-wrap gap-3"><a href="https://example.com" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-[#ff5a00] px-6 py-3 font-semibold text-white transition hover:bg-[#ff6e21]">Live demo <ArrowRight size={16} /></a><a href="https://github.com" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-slate-300 px-6 py-3 font-semibold transition hover:border-[#ff5a00] hover:text-[#ff5a00]"><Github size={16} /> Source code</a></div><div className="mt-12"><h2 className="font-display text-2xl font-bold">Tech stack</h2><div className="mt-4 flex flex-wrap gap-2">{project.tags.map(tag => <span key={tag} className="rounded-full bg-white px-4 py-2 text-sm font-medium shadow-sm">{tag}</span>)}</div></div></div>
        <div><div className="relative h-80 overflow-hidden rounded-3xl bg-slate-100"><Image src={project.image} alt={project.title} fill sizes="(max-width: 1024px) 100vw, 520px" className="object-cover" /></div><p className="mt-4 flex items-center gap-2 text-sm text-slate-500"><Eye size={16} /> {project.views} views</p></div>
      </div>
    </section>
  </div>;
}
