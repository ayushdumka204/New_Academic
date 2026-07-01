import { ArrowRight, Calendar, Tag } from 'lucide-react'
import { SAMPLES } from '../../data/siteData'
import { useScrollReveal } from '../../hooks/useScrollReveal'

export default function WorkSamples() {
  const ref = useScrollReveal()

  return (
    <section id="samples" className="section bg-surface-light dark:bg-surface-dark">
      <div className="wrap">
        <div ref={ref} className="reveal text-center mb-12">
          <div className="eyebrow justify-center mb-4">
            <span className="w-5 h-px bg-brand-green" /> Portfolio
            <span className="w-5 h-px bg-brand-green" />
          </div>
          <h2 className="display-xl text-3xl lg:text-[44px] text-brand-purple dark:text-white">
            Work Samples &{' '}
            <span className="text-brand-green">Case Studies</span>
          </h2>
          <p className="muted text-[15px] max-w-md mx-auto mt-3">
            High-quality research drafts and data analysis reports delivered to clients worldwide.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          {SAMPLES.map((s, i) => (
            <article key={i} className="card flex flex-col overflow-hidden group">
              {/* Color bar */}
              <div className="h-1 w-full" style={{ background: s.color }} />

              <div className="p-6 flex flex-col flex-1">
                <span className="inline-flex items-center gap-1.5 text-[10px] font-mono tracking-widest uppercase font-bold mb-5"
                  style={{ color: s.color }}>
                  <span className="w-1 h-1 rounded-full" style={{ background: s.color }} />
                  {s.badge}
                </span>

                <h3 className="font-display font-bold text-[17px] text-brand-purple dark:text-white leading-snug mb-3
                               group-hover:text-brand-green transition-colors">
                  {s.title}
                </h3>

                <p className="muted text-sm leading-relaxed mb-5 flex-1">{s.desc}</p>

                <div className="space-y-1.5 mb-5">
                  <div className="flex items-center gap-2 text-[11px] text-brand-purple/35 dark:text-white/30">
                    <Tag size={10} /> {s.tags.join(' · ')}
                  </div>
                  <div className="flex items-center gap-2 text-[11px] text-brand-purple/35 dark:text-white/30">
                    <Calendar size={10} /> {s.date} · NexGen Team
                  </div>
                </div>

                <a href="#" className="inline-flex items-center gap-1.5 text-[12px] font-semibold text-brand-green
                                       hover:gap-2.5 transition-all">
                  View Full Report <ArrowRight size={12} />
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-10">
          <a href="#contact" className="btn-ghost">
            Request Custom Samples <ArrowRight size={14} />
          </a>
        </div>
      </div>
    </section>
  )
}
