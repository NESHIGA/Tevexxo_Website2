'use client';

import Link from 'next/link';
import { ArrowRight, Star } from 'lucide-react';
import { Logo } from '@/components/Logo';
import { courses, navItems, type Course } from '@/lib/tevexxo-data';

const iconMap = { 'AI & Machine Learning': '✦', 'Data Analytics': '◫', 'Full Stack Development': '⌘', 'Cyber Security': '⌁', 'Cloud & DevOps': '☁', 'UI/UX Design': '✧' };

export default function CoursesPage() {
  return <div className="min-h-screen bg-[#f7f6f2]"><header className="border-b border-slate-200 bg-white"><div className="container-shell flex h-[76px] items-center justify-between gap-6"><Link href="/" aria-label="Tevexxo home"><Logo compact /></Link><nav className="hidden items-center gap-7 lg:flex" aria-label="Primary navigation">{navItems.map(item => <Link key={item.href} href={item.href} className="text-sm text-slate-600 transition hover:text-[#ff5a00]">{item.label}</Link>)}</nav><Link href="/contact" className="rounded-full bg-[#ff5a00] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#ff6e21]">Get started</Link></div></header>
    <section className="container-shell py-20"><p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#ff5a00]">Explore courses</p><h1 className="mt-4 max-w-3xl font-display text-5xl font-bold tracking-[-0.04em]">A track for every kind of builder.</h1><p className="mt-6 max-w-2xl text-lg text-slate-500">Each course blends structured lessons, mentor feedback, and a capstone you can share with hiring teams.</p>
      <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">{courses.map((course: Course) => <div key={course.slug} className="flex flex-col rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"><div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-50 text-2xl text-[#ff5a00]">{iconMap[course.title as keyof typeof iconMap]}</div><h2 className="mt-6 font-display text-xl font-bold">{course.title}</h2><p className="mt-3 flex-1 text-sm leading-6 text-slate-500">{course.description}</p><div className="mt-5 flex flex-wrap gap-2">{course.tags.map(tag => <span key={tag} className="rounded-full bg-slate-100 px-3 py-1 text-xs text-slate-600">{tag}</span>)}</div><div className="mt-6 flex items-center justify-between border-t border-slate-100 pt-4 text-xs text-slate-500"><span>{course.duration} · {course.level}</span><span className="flex items-center gap-1 font-semibold text-slate-700"><Star size={13} fill="#ff5a00" className="text-[#ff5a00]" /> {course.rating}</span></div><Link href="/contact" className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#ff5a00]">Enroll now <ArrowRight size={16} /></Link></div>)}</div>
    </section></div>;
}
