import { Database, BarChart3, FileText, PenLine, ArrowRight } from 'lucide-react'
import { SERVICES } from '../../data/siteData'
import { useScrollReveal } from '../../hooks/useScrollReveal'

const ICONS: Record<string, React.ElementType> = {
  Database, BarChart3, FileText, PenLine,
}

export default function Services() {
  const ref = useScrollReveal()

  return (
    <section id="services" className="section bg-surface-light dark:bg-surface-dark">
      <div className="wrap">
        <div ref={ref} className="reveal flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <div>
            <div className="eyebrow mb-4">
              <span className="w-5 h-px bg-brand-green" /> What We Do
            </div>
            <h2 className="display-xl text-3xl lg:text-[44px] text-brand-purple dark:text-white leading-tight">
              Expert Research<br />
              <span className="text-brand-green">Support Services</span>
            </h2>
          </div>
          <p className="muted text-sm max-w-xs leading-relaxed lg:pb-1.5">
            We bridge the gap between raw data and scientific insights — supporting scholars from project inception to publication.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {SERVICES.map((s, i) => {
            const Icon = ICONS[s.icon]
            return (
              <div key={i} className="card p-7 group cursor-pointer">
                <div className="flex items-start justify-between mb-6">
                  <div className="w-10 h-10 rounded-xl border border-brand-purple/12 dark:border-white/8
                                  flex items-center justify-center
                                  group-hover:border-brand-green/40 group-hover:bg-brand-green/8 transition-all">
                    <Icon size={17} className="text-brand-purple dark:text-brand-green" />
                  </div>
                  <span className="text-[10px] font-mono tracking-widest uppercase text-brand-purple/35 dark:text-white/25">
                    {s.eyebrow}
                  </span>
                </div>

                <h3 className="font-display font-bold text-xl text-brand-purple dark:text-white mb-2
                               group-hover:text-brand-green transition-colors">
                  {s.title}
                </h3>
                <p className="muted text-sm leading-relaxed mb-5">{s.body}</p>

                <div className="flex flex-wrap gap-1.5 mb-6">
                  {s.tags.map(t => (
                    <span key={t}
                      className="text-[10px] font-mono px-2 py-1 rounded-full
                                 bg-brand-purple/5 dark:bg-white/5
                                 text-brand-purple/60 dark:text-white/40
                                 border border-brand-purple/8 dark:border-white/6">
                      {t}
                    </span>
                  ))}
                </div>

                <span className="inline-flex items-center gap-1.5 text-[12px] font-semibold text-brand-green
                                 group-hover:gap-2.5 transition-all">
                  Explore Service <ArrowRight size={12} />
                </span>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
