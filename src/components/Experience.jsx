import { motion } from 'framer-motion'
import SectionLabel from './SectionLabel'

const EXPERIENCES = [
  {
    role: 'Freelance AI Automation Engineer',
    company: 'Independent / Remote',
    period: 'May 2026 - Present',
    location: 'Ecuador',
    type: 'Freelance',
    highlights: [
      'Designs and deploys custom RAG pipelines for real-world automation workflows.',
      'Builds backend microservices with FastAPI and integrates APIs, databases, and cloud services.',
      'Develops AI agents for structured information extraction and operational processes.',
    ],
  },
  {
    role: 'Automation Developer & AI Advisor',
    company: 'National Police of Ecuador',
    period: 'Nov 2025 - Dec 2025',
    location: 'Ecuador',
    type: 'Temporary Contract',
    highlights: [
      'Designed and implemented automated workflows in n8n for institutional data extraction, transformation, and integration.',
      'Built AI agents for structured information extraction from legal documents with JSON outputs.',
      'Integrated APIs, databases, and cloud services to optimize operational processes.',
      'Delivered a technical training session on data automation and workflow design to National Police personnel.',
    ],
  },
  {
    role: 'Data Analyst Intern',
    company: 'Yachay Tech University, Directorate of Accreditation and Quality Assurance (DAAC)',
    period: 'Oct 2025 - Jan 2026',
    location: 'Quito, Ecuador',
    type: 'Pre-professional Internship',
    highlights: [
      'Developed and maintained interactive dashboards for academic and institutional quality indicators.',
      'Collected, cleaned, and analyzed data from multiple university departments.',
      'Automated reports and KPI tracking to support accreditation and decision-making processes.',
      'Presented analytical insights to academic and administrative authorities.',
    ],
  },
  {
    role: 'Information Technology Engineering',
    company: 'Yachay Tech University',
    period: '2021 - 2026',
    location: 'Ecuador',
    type: 'Education',
    highlights: [
      'Thesis: Hyperparameter optimization in RAG architectures and comparative analysis of orchestration frameworks (LangChain vs. n8n).',
    ],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="py-20 border-t" style={{ borderColor: 'var(--color-border-soft)' }}>
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl"
        >
          <SectionLabel index="06" label="Professional Experience" />
          <h3 className="font-display text-3xl sm:text-4xl font-medium mb-6 max-w-lg">
            Experience across data, automation, and AI delivery.
          </h3>
          <p className="text-text-dim leading-relaxed mb-4 max-w-lg">
            A focused timeline of AI automation, data analysis, and software engineering work.
          </p>
          <p className="text-text-dim leading-relaxed max-w-lg">
            Experience and education across research, backend systems, and applied AI.
          </p>
        </motion.div>

        <div className="mt-12 relative space-y-5">
          <div
            className="absolute left-4 top-1 bottom-1 w-px hidden sm:block"
            style={{ background: 'linear-gradient(to bottom, transparent, var(--color-accent-soft), transparent)' }}
          />

          {EXPERIENCES.map((experience, index) => (
            <motion.article
              key={`${experience.role}-${experience.company}`}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.55, delay: index * 0.06 }}
              className="relative sm:pl-14"
            >
              <div
                className="hidden sm:block absolute left-[14px] top-8 h-4 w-4 rounded-full border-4"
                style={{ borderColor: 'var(--color-bg)', backgroundColor: 'var(--color-accent)' }}
              />

              <div
                className="rounded-2xl border p-5 sm:p-6 transition-all duration-200 hover:-translate-y-1 hover:border-[color:var(--color-accent-soft)] hover:bg-[color:var(--color-surface-raised)] hover:shadow-[0_18px_32px_rgba(0,0,0,0.28)]"
                style={{ borderColor: 'var(--color-border)', backgroundColor: 'var(--color-surface)' }}
              >
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <div className="flex flex-wrap items-center gap-3">
                      <span
                        className="font-mono text-[10px] px-2.5 py-1 rounded-full border text-white/80"
                        style={{ borderColor: 'var(--color-border)' }}
                      >
                        {experience.period}
                      </span>
                      <span
                        className="font-mono text-[10px] px-2.5 py-1 rounded-full border text-white/70"
                        style={{ borderColor: 'rgba(255,255,255,0.08)' }}
                      >
                        {experience.type}
                      </span>
                    </div>

                    <h4 className="font-display text-xl sm:text-2xl font-medium mt-3">{experience.role}</h4>
                    <p className="mt-1 text-sm sm:text-base text-text-dim">{experience.company}</p>
                    <p className="font-mono text-[11px] text-text-faint mt-1">{experience.location}</p>
                  </div>

                  {experience.type === 'Freelance' ? (
                    <span
                      className="font-mono text-[10px] px-3 py-1.5 rounded-full border text-bg self-start"
                      style={{ borderColor: 'transparent', backgroundColor: 'var(--color-accent)' }}
                    >
                      current
                    </span>
                  ) : null}
                </div>

                <ul className="mt-5 space-y-3">
                  {experience.highlights.map((highlight) => (
                    <li key={highlight} className="flex gap-3 text-sm sm:text-[15px] leading-relaxed text-text-dim">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full shrink-0" style={{ backgroundColor: 'var(--color-accent)' }} />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
