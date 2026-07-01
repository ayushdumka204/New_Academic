import { Shield, Check } from 'lucide-react'
import { COMMITMENTS } from '../../data/siteData'
import { useScrollReveal } from '../../hooks/useScrollReveal'

export default function Commitment() {
  const ref = useScrollReveal()

  return (
    <section className="section bg-white dark:bg-surface-dark-2 relative overflow-hidden">
      {/* Watermark */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none opacity-[0.018] dark:opacity-[0.025]">
        <span className="font-display font-extrabold text-[15vw] text-brand-purple dark:text-brand-green whitespace-nowrap">
          EXCELLENCE
        </span>
      </div>

      <div className="wrap relative z-10">
        <div ref={ref} className="reveal grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">

          <div>
            <div className="eyebrow mb-4">
              <span className="w-5 h-px bg-brand-green" /> Our Promise
            </div>
            <h2 className="display-xl text-3xl lg:text-[44px] text-brand-purple dark:text-white leading-tight mb-5">
              Our Commitment<br />
              <span className="text-brand-green">to Excellence</span>
            </h2>
            <p className="muted text-[15px] leading-relaxed mb-8">
              Every engagement is backed by a full suite of guarantees — tailored to your unique needs and designed to exceed academic expectations.
            </p>

            {/* NDA badge */}
            <div className="inline-flex items-center gap-3 px-5 py-3.5 rounded-xl
                            border border-brand-purple/15 dark:border-brand-green/20
                            bg-brand-purple-muted dark:bg-brand-green/5">
              <Shield size={18} className="text-brand-purple dark:text-brand-green shrink-0" />
              <div>
                <div className="text-[11px] font-mono tracking-widest uppercase font-bold text-brand-purple dark:text-brand-green">
                  NDA Signed on Every Project
                </div>
                <div className="muted text-xs mt-0.5">Your data, methodology, and findings are always protected.</div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {COMMITMENTS.map((c, i) => (
              <div key={i}
                className="card p-4 flex items-center gap-3 hover:border-brand-green/30 group">
                <div className="w-6 h-6 rounded-lg bg-brand-green/10 flex items-center justify-center shrink-0
                               group-hover:bg-brand-green/20 transition-colors">
                  <Check size={12} className="text-brand-green" />
                </div>
                <span className="text-[13px] font-medium text-brand-purple dark:text-white/70">{c}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
