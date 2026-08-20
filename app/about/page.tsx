'use client';

import Link from 'next/link';
import { Award, Compass, HandHeart, Sparkles, Target, Users } from 'lucide-react';
import { Logo } from '@/components/Logo';
import { navItems } from '@/lib/tevexxo-data';

const pillars = [
  { title: 'Industry-aligned curriculum', description: 'Courses designed with the roles, tools, and expectations hiring teams actually use.', icon: Target },
  { title: 'Hands-on projects', description: 'Every track is anchored by projects you build, explain, and ship.', icon: Sparkles },
  { title: 'Expert mentors & guidance', description: 'Learn from practitioners who review your work and unblock you.', icon: Compass },
  { title: 'Certification & placement support', description: 'Verifiable certificates plus resume and interview prep that moves you forward.', icon: Award },
  { title: 'Flexible learning options', description: 'Self-paced lessons, live sessions, and formats that fit your week.', icon: HandHeart },
  { title: 'Community & networking', description: 'A supportive community of learners and alumni building interesting things.', icon: Users },
];

export default function AboutPage() {
  return <div className="min-h-screen bg-[#f7f6f2]"><header className="border-b border-slate-200 bg-white"><div className="container-shell flex h-[76px] items-center justify-between gap-6"><Link href="/" aria-label="Tevexxo home"><Logo compact /></Link><nav className="hidden items-center gap-7 lg:flex" aria-label="Primary navigation">{navItems.map(item => <Link key={item.href} href={item.href} className="text-sm text-slate-600 transition hover:text-[#ff5a00]">{item.label}</Link>)}</nav><Link href="/contact" className="rounded-full bg-[#ff5a00] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#ff6e21]">Get started</Link></div></header>
    <section className="container-shell py-20"><p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#ff5a00]">Why Tevexxo</p><h1 className="mt-4 max-w-3xl font-display text-5xl font-bold tracking-[-0.04em]">Built for people who learn by building.</h1><p className="mt-6 max-w-2xl text-lg text-slate-500">We combine structure, mentorship, and real projects so learning leads to outcomes you can point to.</p>
      <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">{pillars.map(pillar => { const Icon = pillar.icon; return <div key={pillar.title} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"><div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-50 text-[#ff5a00]"><Icon size={24} /></div><h2 className="mt-6 font-display text-xl font-bold">{pillar.title}</h2><p className="mt-3 text-sm leading-6 text-slate-500">{pillar.description}</p></div>; })}</div>
    </section></div>;
}
