'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { Logo } from '@/components/Logo';
import { navItems, projects, type Project } from '@/lib/tevexxo-data';

function ProjectVisual({ project }: { project: Project }) { return <div className="relative h-56 overflow-hidden rounded-2xl bg-slate-100"><Image src={project.image} alt={project.title} fill sizes="(max-width: 1024px) 100vw, 360px" className="object-cover" /></div>; }

export default function ProjectsPage() {
  return <div className="min-h-screen bg-[#f7f6f2]"><header className="border-b border-slate-200 bg-white"><div className="container-shell flex h-[76px] items-center justify-between gap-6"><Link href="/" aria-label="Tevexxo home"><Logo compact /></Link><nav className="hidden items-center gap-7 lg:flex" aria-label="Primary navigation">{navItems.map(item => <Link key={item.href} href={item.href} className="text-sm text-slate-600 transition hover:text-[#ff5a00]">{item.label}</Link>)}</nav><Link href="/contact" className="rounded-full bg-[#ff5a00] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#ff6e21]">Get started</Link></div></header>
    <section className="container-shell py-20"><p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#ff5a00]">Projects</p><h1 className="mt-4 max-w-3xl font-display text-5xl font-bold tracking-[-0.04em]">Real work, built by real learners.</h1><p className="mt-6 max-w-2xl text-lg text-slate-500">Each project is a portfolio piece, reviewed by mentors and modeled on a real industry brief.</p>
      <div className="mt-14 grid gap-6 lg:grid-cols-3">{projects.map(project => <article key={project.slug} className="rounded-3xl border border-slate-200 bg-white p-4 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"><ProjectVisual project={project} /><div className="p-3"><div className="flex items-center justify-between gap-3"><span className="text-xs font-semibold uppercase tracking-[0.15em] text-[#ff5a00]">{project.type}</span>{project.featured && <span className="rounded-full bg-orange-100 px-3 py-1 text-xs font-semibold text-[#d84700]">Featured</span>}</div><h2 className="mt-3 font-display text-xl font-bold">{project.title}</h2><p className="mt-2 text-sm leading-6 text-slate-500">{project.description}</p><Link href={`/projects/${project.slug}`} className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#ff5a00]">View case study <ArrowRight size={16} /></Link></div></article>)}</div>
    </section></div>;
}
