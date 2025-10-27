import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Heart, Shield, Users, ArrowRight } from 'lucide-react';

const programs = [
  {
    icon: Heart,
    title: 'Community Kitchens',
    body:
      'Mobile kitchens and school lunch partnerships deliver consistent nutrition to children and families in need.',
    tag: 'Food & Nutrition',
  },
  {
    icon: GraduationCap,
    title: 'Bridge-to-School',
    body:
      'Preparatory classes, tutoring, and scholarships that help children re-enter and thrive in school.',
    tag: 'Education',
  },
  {
    icon: Shield,
    title: 'Safeguard Nepal',
    body:
      'Awareness campaigns, border-monitoring partners, legal aid, and survivor support to fight trafficking.',
    tag: 'Anti‑Trafficking',
  },
  {
    icon: Users,
    title: 'Women Rise',
    body:
      'Vocational training, micro‑grants, and leadership circles to advance women’s rights and independence.',
    tag: 'Empowerment',
  },
];

const Programs = () => {
  return (
    <section id="programs" className="relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(99,102,241,0.07),transparent_60%)]" />
      <div className="relative mx-auto max-w-7xl px-6 py-20">
        <div className="mx-auto max-w-3xl text-center">
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold sm:text-4xl"
          >
            Programs that Create Lasting Change
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-4 text-slate-300"
          >
            Your support fuels grassroots programs led by local leaders, educators, and advocates.
          </motion.p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
          {programs.map((p, idx) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-white/10 to-white/[0.03] p-6 shadow-2xl backdrop-blur"
            >
              <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" style={{background: 'radial-gradient(1200px 200px at 0% 0%, rgba(255,255,255,0.06), transparent)'}} />
              <div className="flex items-center gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white/10">
                  <p.icon className="h-5 w-5" />
                </span>
                <div className="text-xs uppercase tracking-wider text-slate-300">{p.tag}</div>
              </div>
              <h3 className="mt-4 text-xl font-semibold text-white">{p.title}</h3>
              <p className="mt-2 text-slate-300">{p.body}</p>
              <a
                href="#donate"
                className="mt-6 inline-flex items-center gap-2 rounded-lg bg-indigo-500/90 px-4 py-2 text-sm font-semibold text-white transition hover:bg-indigo-400/90"
              >
                Support this program
                <ArrowRight className="h-4 w-4" />
              </a>
            </motion.div>
          ))}
        </div>

        <div id="donate" className="mt-16 grid grid-cols-1 gap-6 lg:grid-cols-3">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5 }}
            className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur"
          >
            <h4 className="text-lg font-semibold text-white">Donate Monthly</h4>
            <p className="mt-2 text-sm text-slate-300">Create steady impact with a monthly gift that powers meals, classes, and protection.</p>
            <a href="#" className="mt-4 inline-block rounded-lg bg-rose-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-rose-400">Give Monthly</a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur"
          >
            <h4 className="text-lg font-semibold text-white">Become a Volunteer</h4>
            <p className="mt-2 text-sm text-slate-300">Give time and skills: community outreach, teaching, campaigns, and events.</p>
            <a href="#" className="mt-4 inline-block rounded-lg bg-emerald-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-emerald-400">Join Us</a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur"
          >
            <h4 className="text-lg font-semibold text-white">Partner with Us</h4>
            <p className="mt-2 text-sm text-slate-300">NGOs, schools, and businesses: collaborate on research, programs, and advocacy.</p>
            <a href="#" className="mt-4 inline-block rounded-lg bg-indigo-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-indigo-400">Start a Partnership</a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Programs;
