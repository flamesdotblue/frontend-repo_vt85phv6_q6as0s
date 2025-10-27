import React from 'react';
import { Mail, Phone, MapPin, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="relative border-t border-white/10 bg-slate-950/70">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(99,102,241,0.08),transparent_60%)]" />
      <div className="relative mx-auto max-w-7xl px-6 py-14">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-2 text-white">
              <div className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-white/10">
                <Heart className="h-5 w-5" />
              </div>
              <span className="text-lg font-semibold">Deep Nepal</span>
            </div>
            <p className="mt-3 max-w-sm text-sm text-slate-300">
              A registered non‑profit working to ensure food, education, safety, and equality for every child and woman in Nepal.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white">Contact</h4>
            <ul className="mt-3 space-y-2 text-slate-300">
              <li className="flex items-center gap-2"><Mail className="h-4 w-4" /> info@deepnepal.org</li>
              <li className="flex items-center gap-2"><Phone className="h-4 w-4" /> +977 1 555 1234</li>
              <li className="flex items-center gap-2"><MapPin className="h-4 w-4" /> Kathmandu, Nepal</li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white">Follow</h4>
            <p className="mt-3 text-sm text-slate-300">Join our community and amplify change. Find us on social media @DeepNepal.</p>
            <a href="#" className="mt-4 inline-block rounded-lg bg-white/10 px-4 py-2 text-sm font-semibold text-white transition hover:bg-white/20">Get Updates</a>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 text-center text-xs text-slate-400">
          © {new Date().getFullYear()} Deep Nepal. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
