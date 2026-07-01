import { CheckCircle2, ArrowRight, Zap } from 'lucide-react'
import { WHY_US } from '../../data/siteData'
import { useScrollReveal } from '../../hooks/useScrollReveal'

export default function About() {
  const textRef = useScrollReveal()
  const cardsRef = useScrollReveal(120)

  return (
    <section id="about" className="section bg-white dark:bg-surface-dark-2">
      <div className="wrap">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-start">

          {/* Left */}
          <div ref={textRef} className="reveal">
            <div className="eyebrow mb-5">
              <span className="w-5 h-px bg-brand-green" /> About NexGen
            </div>

            <h2 className="display-xl text-3xl lg:text-[44px] text-brand-purple dark:text-white leading-tight mb-5">
              Your Dedicated
              <span className="block text-brand-green">Research Partner</span>
            </h2>

            <p className="muted text-[15px] leading-relaxed mb-4">
              NexGen Academic Research Services Pvt Ltd is a premier academic research partner with over{' '}
              <strong className="text-brand-purple dark:text-white font-semibold">20+ years of expertise</strong> in
              high-quality data collection, field surveys, and data analysis — helping researchers achieve academic
              excellence through innovative support.
            </p>
            <p className="muted text-[15px] leading-relaxed mb-8">
              From project inception to questionnaire design, field execution, and final analysis, we stand by you at
              every stage — ensuring your work meets international standards and is ready for publication.
            </p>

            {/* Feature tags */}
            <div className="flex flex-wrap gap-2 mb-8">
              {['2,000+ Field Experts', 'Expert Data Collection', 'Precise Field Surveys', 'Ethical Compliance', 'All Linguistic Support', 'On-Time Delivery'].map(t => (
                <span key={t}
                  className="px-3 py-1.5 text-xs font-mono tracking-wide rounded-full
                             bg-brand-purple-muted dark:bg-white/5
                             text-brand-purple dark:text-white/60
                             border border-brand-purple/10 dark:border-white/8">
                  {t}
                </span>
              ))}
            </div>

            <a href="#services" className="btn-ghost inline-flex group">
              Explore Services
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          {/* Right */}
          <div ref={cardsRef} className="reveal space-y-4">

            {/* 24x7 card */}
            <div className="card p-6 flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl shrink-0 flex items-center justify-center"
                style={{ background: 'linear-gradient(135deg, #2c1161, #6d3dbd)' }}>
                <Zap size={16} className="text-white" />
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-[11px] font-mono tracking-widest uppercase text-brand-green font-bold">
                    24 × 7 Expert Help
                  </span>
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-green animate-pulse-slow" />
                </div>
                <h3 className="font-display font-bold text-[17px] text-brand-purple dark:text-white mb-1">
                  Always On, Always Ready
                </h3>
                <p className="muted text-sm leading-relaxed">
                  Research problems don't wait for office hours. Our expert team is available around the clock to keep your project on track.
                </p>
              </div>
            </div>

            {/* Why us grid */}
            <div className="card p-6">
              <h3 className="font-display font-bold text-[16px] text-brand-purple dark:text-white mb-5">
                Why Researchers Choose NexGen
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {WHY_US.map(item => (
                  <div key={item} className="flex items-center gap-2.5">
                    <CheckCircle2 size={13} className="text-brand-green shrink-0" />
                    <span className="muted text-[13px]">{item}</span>
                  </div>
                ))}
              </div>
              <div className="mt-5 pt-4 border-t border-brand-purple/6 dark:border-white/5">
                <p className="muted text-xs leading-relaxed">
                  We don't just provide data — we give your research the quality and insights needed to meet international standards and get published.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
