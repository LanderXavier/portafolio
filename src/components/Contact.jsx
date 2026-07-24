import { motion } from 'framer-motion'
import { Mail, ArrowUpRight } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from './BrandIcons'
import SectionLabel from './SectionLabel'

export default function Contact() {
  return (
    <section id="contact" className="py-20 border-t" style={{ borderColor: 'var(--color-border-soft)' }}>
      <div className="max-w-6xl mx-auto px-6">
        <SectionLabel index="09" label="Contact" />

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl border p-9 sm:p-14 text-center"
          style={{ borderColor: 'var(--color-border)', backgroundColor: 'var(--color-surface)' }}
        >
          <h3 className="font-display text-3xl sm:text-5xl font-medium leading-tight max-w-2xl mx-auto">
            Building something with AI?
            <br />
            <span style={{ color: 'var(--color-accent)' }}>Let&apos;s talk.</span>
          </h3>
          <p className="text-text-dim mt-5 max-w-md mx-auto">
            Open to junior AI engineering and automation roles, collaborations, and interesting
            problems.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 mt-9">
            <a
              href="mailto:landerx345@gmail.com"
              className="inline-flex items-center gap-2 rounded-full px-6 py-3 font-mono text-sm font-medium text-bg"
              style={{ backgroundColor: 'var(--color-accent)' }}
            >
              <Mail size={15} /> landerx345@gmail.com
            </a>
          </div>

          <div className="flex items-center justify-center gap-6 mt-9">
            <a href="https://github.com/LanderXavier" target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 font-mono text-xs text-text-dim hover:text-text focus-ring">
              <GithubIcon size={16} /> GitHub <ArrowUpRight size={12} />
            </a>
            <a href="https://linkedin.com/in/lander-lliguicota" target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 font-mono text-xs text-text-dim hover:text-text focus-ring">
              <LinkedinIcon size={16} /> LinkedIn <ArrowUpRight size={12} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
