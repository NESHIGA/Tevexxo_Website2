'use client';

import Link from 'next/link';
import { ArrowRight, Award, Briefcase, GraduationCap, HandHeart, Sparkles, Users } from 'lucide-react';
import { Logo } from '@/components/Logo';
import { navItems } from '@/lib/tevexxo-data';

const programs = [
  { title: 'Certification Programs', description: 'Structured tracks with graded assessments and a verifiable certificate.', icon: Award, points: ['12 tracks', 'Capstone graded by mentors'] },
  { title: 'Industry Projects', description: 'Build end-to-end products modeled on real company briefs.', icon: Briefcase, points: ['60+ project briefs', 'Code reviewed by practitioners'] },
  { title: 'Internships', description: 'Apply your skills inside a guided 8-week engagement with a partner team.', icon: GraduationCap, points: ['8 weeks', 'Mentor + manager support'] },
  { title: 'Workshops', description: 'Live, focused sessions on the tools and ideas shaping the industry.', icon: Sparkles, points: ['Weekly live sessions', 'Hands-on labs'] },
  { title: 'Career Support', description: 'Resume reviews, mock interviews, and referral-ready positioning.', icon: HandHeart, points: ['1:1 reviews', 'Interview practice'] },
  { title: 'Community & Networking', description: 'Learn alongside peers and alumni building interesting things.', icon: Users, points: ['Active community', 'Alumni network'] },
];

export default function ProgramsPage() {
  return <div className="min-h-screen bg-[#f7f6f2]"><header className="border-b border-slate-200 bg-white"><div className="container-shell flex h-[76px] items-center justify-between gap-6"><Link href="/" aria-label="Tevexxo home"><Logo compact /></Link><nav className="hidden items-center gap-7 lg:flex" aria-label="Primary navigation">{navItems.map(item => <Link key={item.href} href={item.href} className="text-sm text-slate-600 transition hover:text-[#ff5a00]">{item.label}</Link>)}</nav><Link href="/contact" className="rounded-full bg-[#ff5a00] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#ff6e21]">Get started</Link></div></header>
    <section className="container-shell py-20"><p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#ff5a00]">Programs</p><h1 className="mt-4 max-w-3xl font-display text-5xl font-bold tracking-[-0.04em]">Programs that fit where you are.</h1><p className="mt-6 max-w-2xl text-lg text-slate-500">From first exposure to job-ready portfolios, there&apos;s a format designed for your next step.</p>
      <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">{programs.map(program => { const Icon = program.icon; return <div key={program.title} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"><div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-50 text-[#ff5a00]"><Icon size={24} /></div><h2 className="mt-6 font-display text-xl font-bold">{program.title}</h2><p className="mt-3 text-sm leading-6 text-slate-500">{program.description}</p><ul className="mt-5 grid gap-2 text-sm text-slate-600">{program.points.map(point => <li key={point} className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-[#ff5a00]" /> {point}</li>)}</ul><Link href="/contact" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#ff5a00]">Talk to an advisor <ArrowRight size={16} /></Link></div>; })}</div>
    </section></div>;
}
