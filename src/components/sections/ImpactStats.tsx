import { useScrollReveal } from '../../hooks/useScrollReveal'
import { IMPACT } from '../../data/siteData'

export default function ImpactStats() {
  const ref = useScrollReveal()

  return (
    <section className="py-20 relative overflow-hidden bg-brand-purple dark:bg-surface-dark">
      {/* Subtle green grid overlay */}
      <div className="absolute inset-0 mesh-grid opacity-20" />

      {/* Glow */}
      <div className="absolute right-0 top-0 w-[500px] h-[500px] glow-green opacity-20 pointer-events-none" />

      <div className="wrap relative z-10">
        <div ref={ref} className="reveal text-center mb-14">
          <div className="eyebrow justify-center mb-4">
            <span className="w-5 h-px bg-brand-green" />
            Our Research Impact
            <span className="w-5 h-px bg-brand-green" />
          </div>
          <h2 className="display-xl text-3xl lg:text-5xl text-white">
            Numbers That Speak
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-5 gap-0 divide-x divide-y lg:divide-y-0 divide-white/8 border border-white/8 rounded-2xl overflow-hidden">
          {IMPACT.map((s, i) => (
            <div key={i} className="text-center py-10 px-4 hover:bg-white/4 transition-colors group">
              <div className="font-display font-extrabold text-4xl lg:text-5xl text-brand-green mb-2 leading-none
                              group-hover:scale-105 transition-transform origin-center">
                {s.value}
              </div>
              <div className="text-white/40 text-[11px] font-mono tracking-[0.15em] uppercase">{s.label}</div>
            </div>
          ))}
        </div>

        <p className="text-center text-white/25 text-sm mt-8 font-mono">
          Every number represents a researcher who trusted us — and succeeded.
        </p>
      </div>
    </section>
  )
}
