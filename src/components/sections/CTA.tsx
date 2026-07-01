import { ChevronRight, Mail } from 'lucide-react'

export default function CTA() {
  return (
    <section id="contact" className="py-28 relative overflow-hidden bg-brand-purple dark:bg-surface-dark-2">

      {/* Grid */}
      <div className="absolute inset-0 mesh-grid opacity-30" />

      {/* Glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[700px] h-[300px] glow-green opacity-20" />
      </div>

      <div className="wrap relative z-10 text-center">
        <div className="eyebrow justify-center mb-6">
          <span className="w-5 h-px bg-brand-green" /> Start Today
          <span className="w-5 h-px bg-brand-green" />
        </div>

        <h2 className="display-xl text-4xl lg:text-6xl text-white mb-5 leading-tight">
          Ready to Elevate Your<br />
          <span className="text-brand-green">Research Quality?</span>
        </h2>

        <p className="text-white/50 text-lg max-w-md mx-auto mb-10 font-light leading-relaxed">
          Book a free consultation with our research experts — no commitment required,
          just clarity on how we can support your academic goals.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-3 mb-14">
          <a href="mailto:research@nexgen.ac.in"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-sm
                       bg-brand-green text-white hover:bg-green-400 transition-all active:scale-95">
            Book Free Consultation <ChevronRight size={15} />
          </a>
          <a href="mailto:research@nexgen.ac.in"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-sm
                       border border-white/20 text-white hover:bg-white/8 transition-all active:scale-95">
            <Mail size={14} /> Email Our Team
          </a>
        </div>

        {/* Trust signals */}
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2">
          {['No commitment required', 'Response within 24 hours', 'NDA on every project', '20+ years of expertise'].map(t => (
            <span key={t} className="flex items-center gap-2 text-[11px] font-mono text-white/25 tracking-wide uppercase">
              <span className="w-1 h-1 rounded-full bg-brand-green/50" /> {t}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
