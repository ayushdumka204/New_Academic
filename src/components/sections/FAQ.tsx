import { useState } from 'react'
import { Plus, Minus, MessageCircle } from 'lucide-react'
import { FAQS } from '../../data/siteData'
import { useScrollReveal } from '../../hooks/useScrollReveal'

function FAQItem({ q, a, open, onToggle }: { q: string; a: string; open: boolean; onToggle: () => void }) {
  return (
    <div className={`card overflow-hidden transition-all duration-300 ${open ? 'border-brand-green/30 dark:border-brand-green/25' : ''}`}>
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
      >
        <span className={`font-semibold text-[14px] lg:text-[15px] transition-colors leading-snug
                          ${open ? 'text-brand-green' : 'text-brand-purple dark:text-white'}`}>
          {q}
        </span>
        <span className={`shrink-0 w-7 h-7 rounded-lg border flex items-center justify-center transition-all
                          ${open
                            ? 'border-brand-green bg-brand-green/10'
                            : 'border-brand-purple/15 dark:border-white/10'}`}>
          {open
            ? <Minus size={13} className="text-brand-green" />
            : <Plus size={13} className="text-brand-purple/50 dark:text-white/40" />}
        </span>
      </button>
      <div className={`faq-answer ${open ? 'open' : ''}`}>
        <p className="px-6 pb-6 text-[13px] muted leading-relaxed border-t border-brand-purple/6 dark:border-white/5 pt-4">
          {a}
        </p>
      </div>
    </div>
  )
}

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(0)
  const ref = useScrollReveal()

  return (
    <section id="faqs" className="section bg-surface-light dark:bg-surface-dark">
      <div className="wrap">
        <div ref={ref} className="reveal text-center mb-12">
          <div className="eyebrow justify-center mb-4">
            <span className="w-5 h-px bg-brand-green" /> FAQ
            <span className="w-5 h-px bg-brand-green" />
          </div>
          <h2 className="display-xl text-3xl lg:text-[44px] text-brand-purple dark:text-white">
            Frequently Asked{' '}
            <span className="text-brand-green">Questions</span>
          </h2>
        </div>

        <div className="max-w-2xl mx-auto space-y-2 mb-8">
          {FAQS.map((f, i) => (
            <FAQItem
              key={i} q={f.q} a={f.a}
              open={openIdx === i}
              onToggle={() => setOpenIdx(openIdx === i ? null : i)}
            />
          ))}
        </div>

        {/* Support nudge */}
        <div className="max-w-2xl mx-auto">
          <div className="card p-6 flex flex-col sm:flex-row items-center gap-5 text-center sm:text-left">
            <div className="w-11 h-11 rounded-xl border border-brand-purple/12 dark:border-white/8 flex items-center justify-center shrink-0"
              style={{ background: 'linear-gradient(135deg, #2c1161, #6d3dbd)' }}>
              <MessageCircle size={18} className="text-white" />
            </div>
            <div className="flex-1">
              <h4 className="font-display font-bold text-[15px] text-brand-purple dark:text-white mb-0.5">
                Still have questions?
              </h4>
              <p className="muted text-sm">Our support team is ready 24/7 to help you navigate your research journey.</p>
            </div>
            <a href="#contact" className="btn-primary shrink-0 text-[13px] px-5 py-2.5">
              Contact Support
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
