import React from 'react';
import { motion } from 'framer-motion';
import { Heart, GraduationCap, Shield, Users } from 'lucide-react';

const items = [
  {
    icon: Heart,
    title: 'Food Security',
    desc:
      'Nutritious daily meals and emergency relief to ensure no child sleeps hungry.',
    color: 'from-rose-500/20 to-rose-500/0',
  },
  {
    icon: GraduationCap,
    title: 'Education Access',
    desc:
      'Scholarships, school supplies, and community learning centers for lifelong opportunity.',
    color: 'from-indigo-500/20 to-indigo-500/0',
  },
  {
    icon: Shield,
    title: 'Anti‑Trafficking',
    desc:
      'Prevention, awareness, legal support, and survivor-centered rehabilitation.',
    color: 'from-emerald-500/20 to-emerald-500/0',
  },
  {
    icon: Users,
    title: 'Women Empowerment',
    desc:
      'Skills training, rights advocacy, and leadership programs that uplift communities.',
    color: 'from-amber-500/20 to-amber-500/0',
  },
];

const Mission = () => {
  return (
    <section className="relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(236,72,153,0.08),transparent_60%)]" />
      <div className="relative mx-auto max-w-7xl px-6 py-20">
        <div className="mx-auto max-w-3xl text-center">
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold sm:text-4xl"
          >
            Our Mission
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-4 text-slate-300"
          >
            We work at the intersection of nourishment, learning, safety, and dignity. Every program is designed with communities and for communities across Nepal.
          </motion.p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur"
            >
              <div className={`pointer-events-none absolute inset-0 bg-gradient-to-b ${card.color}`} />
              <card.icon className="h-8 w-8 text-white" />
              <h3 className="mt-4 text-lg font-semibold text-white">{card.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-300">{card.desc}</p>
              <div className="mt-6 h-1 w-12 rounded-full bg-gradient-to-r from-white/60 to-white/0 transition-all group-hover:w-20" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Mission;
