import { motion } from 'framer-motion'
import SectionLabel from './SectionLabel'

const STATS = [
  { value: '3+', label: 'AI & RAG Research Projects' },
  { value: '2', label: 'AI Automation Projects' },
  { value: '200+', label: 'Hours of AI Training' },
  { value: 'Scrum', label: 'Certified' },
]

export default function About() {
  return (
    <section id="about" className="py-20 border-t" style={{ borderColor: 'var(--color-border-soft)' }}>
      <div className="max-w-6xl mx-auto px-6">
        <SectionLabel index="01" label="About" />

        <div className="grid md:grid-cols-[1.3fr_1fr] gap-14 items-start">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="font-display text-3xl sm:text-4xl font-medium leading-tight mb-6">
              Research meets production engineering.
            </h3>
            <p className="text-text-dim leading-relaxed mb-4">
              I am a technology-focused professional in training with experience in Artificial
              Intelligence, Generative AI, RAG systems, automation, data analysis, and software
              development.
            </p>
            <p className="text-text-dim leading-relaxed mb-4">
              My work combines research and practical development, allowing me to design and
              build intelligent solutions that integrate large language models, vector databases,
              APIs, automation platforms, and traditional software technologies.
            </p>
            <p className="text-text-dim leading-relaxed">
              I am particularly interested in solving real-world problems through AI-powered
              systems and automation.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="grid grid-cols-2 gap-4"
          >
            {STATS.map((s) => (
              <div
                key={s.label}
                className="rounded-2xl border p-6"
                style={{ borderColor: 'var(--color-border)', backgroundColor: 'var(--color-surface)' }}
              >
                <div className="font-display text-2xl sm:text-3xl font-semibold" style={{ color: 'var(--color-accent)' }}>
                  {s.value}
                </div>
                <div className="font-mono text-[11px] text-text-dim mt-2 leading-snug">{s.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
