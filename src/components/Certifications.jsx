import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Award } from 'lucide-react'
import SectionLabel from './SectionLabel'

const certImages = Object.fromEntries(
  Object.entries(import.meta.glob('../assets/cert/*', { eager: true, import: 'default' })).map(([path, imageUrl]) => [
    path.split('/').pop().replace(/\.[^.]+$/, '').toLowerCase(),
    imageUrl,
  ])
)

const CERTS = [
  {
    title: 'Scrum Foundation Professional Certification',
    issuer: 'Agile / Scrum methodology · 2024',
    image: certImages.scrum,
  },
  {
    title: 'Python and Artificial Intelligence',
    issuer: 'Samsung Innovation Campus · 200 hours · 2025',
    image: certImages.ia,
  },
  {
    title: 'AI Agents Fundamentals',
    issuer: 'Hugging Face · Ago 2026',
    image: null,
  },
  {
    title: 'Introduction to Model Context Protocol (MCP)',
    issuer: 'Anthropic · Sep 2026',
    image: null,
  },
  {
    title: 'Claude Code in Action',
    issuer: 'Anthropic · Sep 2026',
    image: null,
  },
]

export default function Certifications() {
  const [selectedCert, setSelectedCert] = useState(null)

  useEffect(() => {
    if (!selectedCert) return undefined

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') setSelectedCert(null)
    }

    window.addEventListener('keydown', handleKeyDown)
    document.body.style.overflow = 'hidden'

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = ''
    }
  }, [selectedCert])

  return (
    <section id="certifications" className="py-20 border-t" style={{ borderColor: 'var(--color-border-soft)' }}>
      <div className="max-w-6xl mx-auto px-6">
        <SectionLabel index="07" label="Certifications" />
        <h3 className="font-display text-3xl sm:text-4xl font-medium mb-14 max-w-xl">
          Credentials.
        </h3>

        <div className="grid gap-5 sm:grid-cols-2">
          {CERTS.map((c, i) => (
            <motion.button
              key={c.title}
              type="button"
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="card-hover flex w-full items-center gap-4 rounded-2xl border px-5 py-4 text-left transition-all duration-200 focus-visible:border-[color:var(--color-accent)] hover:border-[color:var(--color-accent)] hover:bg-[color:var(--color-surface-raised)] hover:shadow-[0_18px_35px_rgba(0,0,0,0.32)] hover:-translate-y-1 focus-visible:bg-[color:var(--color-surface-raised)] focus-visible:shadow-[0_0_0_1px_var(--color-accent)]"
              style={{ borderColor: 'var(--color-border)', backgroundColor: 'var(--color-surface)' }}
              onClick={() => setSelectedCert(c)}
            >
              <Award size={20} className="shrink-0 transition-colors duration-200" style={{ color: 'var(--color-accent)' }} strokeWidth={1.6} />
              <div>
                <div className="font-display text-base sm:text-lg font-medium leading-tight">{c.title}</div>
                <div className="font-mono text-[11px] sm:text-[12px] text-text-dim mt-0.5">{c.issuer}</div>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      {selectedCert ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4 py-8">
          <button
            type="button"
            className="absolute inset-0 bg-[#0b0e13]/85 backdrop-blur-sm"
            aria-label="Close certificate preview"
            onClick={() => setSelectedCert(null)}
          />

          <div
            className="relative z-10 w-full max-w-5xl max-h-[90vh] overflow-hidden rounded-[2rem] border shadow-2xl bg-[color:var(--color-surface)]"
            style={{ borderColor: 'var(--color-border)' }}
          >
            <div className="flex items-center justify-between gap-4 px-5 py-4 border-b" style={{ borderColor: 'var(--color-border)' }}>
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.24em]" style={{ color: 'var(--color-accent)' }}>
                  certificate preview
                </p>
                <h4 className="font-display text-xl sm:text-2xl font-medium mt-1">{selectedCert.title}</h4>
              </div>

              <button
                type="button"
                onClick={() => setSelectedCert(null)}
                className="font-mono text-[10px] px-4 py-2 rounded-full border text-white/80 shrink-0 min-h-10 min-w-10 transition-colors duration-200 hover:text-red-500"
                style={{ borderColor: 'var(--color-border)', backgroundColor: 'rgba(255,255,255,0.03)' }}
              >
                close
              </button>
            </div>

            <div className="flex items-center justify-center p-4 sm:p-6 bg-[#0b0e13]">
              {selectedCert.image ? (
              <img
                src={selectedCert.image}
                alt={selectedCert.title}
                className="block max-h-[calc(90vh-8rem)] max-w-full w-auto h-auto object-contain"
                draggable="false"
              />
              ) : (
                <p className="font-mono text-sm text-white/60 px-6 py-10 text-center">
                  Certificado sin imagen — pendiente de subir el PDF/diploma.
                </p>
              )}
            </div>
          </div>
        </div>
      ) : null}
    </section>
  )
}
