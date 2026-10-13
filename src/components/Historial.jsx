import { useState } from 'react'
import { Award, Minus, Plus } from 'lucide-react'
import { CERTS, EXPERIENCES } from '../data.js'
import { Clausula } from './shared.jsx'

function CertRow({ cert }) {
  const [open, setOpen] = useState(false)
  if (!cert.image) {
    return (
      <li className="flex items-center gap-3 py-3.5 border-b border-line">
        <Award size={17} className="text-faint shrink-0" />
        <div>
          <div className="font-semibold text-[15px] leading-snug">{cert.title}</div>
          <div className="font-mono text-[11px] text-faint mt-0.5">{cert.issuer}</div>
        </div>
      </li>
    )
  }

  const panelId = `diploma-${cert.title.replace(/[^a-z0-9]+/gi, '-').toLowerCase()}`
  return (
    <li className="border-b border-line">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls={panelId}
        aria-label={`${open ? 'Hide' : 'Show'} diploma: ${cert.title}`}
        className="w-full flex items-center gap-3 py-3.5 text-left hover:bg-paper px-1"
      >
        <Award size={17} className="text-seal shrink-0" />
        <span className="flex-1">
          <span className="block font-semibold text-[15px] leading-snug">{cert.title}</span>
          <span className="block font-mono text-[11px] text-faint mt-0.5">{cert.issuer}</span>
        </span>
        <span aria-hidden="true" className="text-faint">
          {open ? <Minus size={15} /> : <Plus size={15} />}
        </span>
      </button>
      <div id={panelId} className={`grid ${open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
        <div className="overflow-hidden">
          <figure className="mb-4">
            <img
              src={cert.image}
              alt={cert.title}
              loading="lazy"
              className="w-full max-h-80 object-contain bg-paper border border-line"
            />
            <figcaption className="font-mono text-[10px] text-faint mt-2">
              Diploma scan · author's credential
            </figcaption>
          </figure>
        </div>
      </div>
    </li>
  )
}

export default function Historial() {
  return (
    <Clausula n={3} name="Record" job="Work history and credentials">
      <ol className="border-t border-line">
        {EXPERIENCES.map((e) => (
          <li
            key={`${e.role}-${e.company}`}
            className="grid sm:grid-cols-[190px_1fr] gap-1 sm:gap-6 py-5 border-b border-line"
          >
            <div className="font-mono text-[11px] text-faint tnum">
              {e.period}
              <span className="block mt-1 text-muted">{e.type}</span>
              {e.current ? (
                <span className="mt-2 inline-block font-mono text-[10px] font-medium uppercase tracking-[0.12em] px-2 py-0.5 rounded-[3px] border border-line-dark text-muted bg-card">
                  Current
                </span>
              ) : null}
            </div>
            <div>
              <div className="font-display text-lg font-bold tracking-tight">{e.role}</div>
              <div className="text-muted text-[15px] mt-0.5">
                {e.company} · {e.location}
              </div>
              <ul className="mt-3 space-y-1.5">
                {e.highlights.map((h) => (
                  <li key={h} className="flex gap-2.5 text-[15px] text-ink/90 leading-relaxed">
                    <span aria-hidden="true" className="text-seal font-bold">
                      ·
                    </span>
                    {h}
                  </li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ol>

      <h3 className="font-display text-xl font-bold tracking-tight mt-12 mb-2">Credentials</h3>
      <ul className="border-t border-line">
        {CERTS.map((c) => (
          <CertRow key={c.title} cert={c} />
        ))}
      </ul>
    </Clausula>
  )
}
