import { ArrowRight } from 'lucide-react'
import { AREAS } from '../../data/siteData'
import { useScrollReveal } from '../../hooks/useScrollReveal'

export default function ResearchAreas() {
  const ref = useScrollReveal()

  return (
    <section id="areas" className="section bg-white dark:bg-surface-dark-2">
      <div className="wrap">

        <div ref={ref} className="reveal grid grid-cols-1 lg:grid-cols-3 gap-10 mb-14">
          <div>
            <div className="eyebrow mb-4">
              <span className="w-5 h-px bg-brand-green" /> Expertise
            </div>
            <h2 className="display-xl text-3xl lg:text-[44px] text-brand-purple dark:text-white leading-tight">
              Core Research<br />
              <span className="text-brand-green">Areas</span>
            </h2>
          </div>
          <div className="lg:col-span-2 flex items-center">
            <p className="muted text-[15px] leading-relaxed max-w-lg">
              We take complex research problems across diverse disciplines and turn them into clear,
              publishable, impactful results — grounded in authentic field data.
            </p>
          </div>
        </div>

        <div className="space-y-0 divide-y divide-brand-purple/6 dark:divide-white/5">
          {AREAS.map((a, i) => (
            <div key={i}
              className="group flex flex-col md:flex-row md:items-center gap-4 md:gap-10 py-6
                         hover:bg-brand-purple/[0.02] dark:hover:bg-white/[0.02]
                         rounded-xl px-4 -mx-4 transition-all duration-200 cursor-pointer">

              <div className="w-8 text-[11px] font-mono text-brand-purple/25 dark:text-white/20 shrink-0 select-none">
                0{i + 1}
              </div>

              <div className="flex-1">
                <h3 className="font-display font-bold text-[18px] text-brand-purple dark:text-white
                               group-hover:text-brand-green transition-colors mb-1">
                  {a.title}
                </h3>
                <p className="muted text-sm leading-relaxed">{a.body}</p>
              </div>

              <div className="flex items-center gap-1.5 text-[12px] font-semibold text-brand-purple/25 dark:text-white/20
                             group-hover:text-brand-green group-hover:gap-2.5 transition-all shrink-0">
                Explore <ArrowRight size={12} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
