import { useEffect, useRef, useState } from 'react'
import { ArrowUpRight, Check, Minus, Plus } from 'lucide-react'
import { GithubIcon } from './BrandIcons'
import { PROJECTS } from '../data.js'
import { Clausula, Sello } from './shared.jsx'

function Acta({ project, index }) {
  const [open, setOpen] = useState(index === 0)
  const [img, setImg] = useState(0)
  const rootRef = useRef(null)
  const images = project.images?.length ? project.images : []
  const panelId = `acta-${project.id}`
  const folio = `ACTA-${String(index + 1).padStart(2, '0')}`

  useEffect(() => {
    const root = rootRef.current
    if (!root) return undefined
    const seals = root.querySelectorAll('[data-seal]')
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add('sealed')
            observer.unobserve(entry.target)
          }
        }
      },
      { threshold: 0.4 },
    )
    seals.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [open])

  return (
    <article ref={rootRef} className="bg-card border border-line-dark">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls={panelId}
        aria-label={`${open ? 'Hide' : 'Show'} record: ${project.title}`}
        className="w-full text-left px-5 sm:px-6 py-5 flex items-start gap-4 hover:bg-paper"
      >
        <span className="font-mono text-[11px] tnum text-faint pt-1.5 w-16 shrink-0">
          {folio}
        </span>
        <span className="min-w-0 flex-1">
          <span className="flex flex-wrap items-center gap-x-3 gap-y-2">
            <span className="font-display text-lg sm:text-xl font-bold tracking-tight">
              {project.title}
            </span>
            <Sello text={project.proof} />
          </span>
          <span className="block text-muted text-[15px] mt-1">{project.oneLiner}</span>
          <span className="block font-mono text-[11px] text-faint mt-2">{project.stack}</span>
        </span>
        <span
          aria-hidden="true"
          className={`mt-1 w-8 h-8 shrink-0 inline-flex items-center justify-center border ${
            open ? 'bg-seal text-white border-seal' : 'border-line-dark text-muted'
          }`}
        >
          {open ? <Minus size={15} /> : <Plus size={15} />}
        </span>
      </button>

      <div id={panelId} className={`grid ${open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
        <div className="overflow-hidden">
          <div className="px-5 sm:px-6 pb-6 pt-1 border-t border-line">
            {images.length ? (
              <figure className="mt-5">
                <img
                  src={images[img]}
                  alt={`${project.title} evidence ${img + 1} of ${images.length}`}
                  className="w-full max-h-96 object-contain bg-paper border border-line"
                  loading="lazy"
                />
                <figcaption className="mt-2 font-mono text-[10px] text-faint tnum">
                  Exhibit {img + 1} / {images.length} · project captures, author's own work
                </figcaption>
                {images.length > 1 ? (
                  <div className="mt-3 flex items-center gap-2 flex-wrap">
                    {images.map((src, i) => (
                      <button
                        key={src}
                        type="button"
                        onClick={() => setImg(i)}
                        aria-label={`Show exhibit ${i + 1} of ${project.title}`}
                        aria-pressed={i === img}
                        className="min-w-6 min-h-6 inline-flex items-center justify-center"
                      >
                        <span
                          aria-hidden="true"
                          className={`block h-2.5 rounded-full ${
                            i === img ? 'w-7 bg-seal' : 'w-2.5 bg-line-dark hover:bg-faint'
                          }`}
                        />
                      </button>
                    ))}
                  </div>
                ) : null}
              </figure>
            ) : null}

            <p className="mt-5 leading-relaxed text-ink/90 max-w-2xl">{project.desc}</p>

            <ul className="mt-4 max-w-2xl border-t border-line">
              {project.features.map((f) => (
                <li
                  key={f}
                  className="flex gap-2.5 py-2 border-b border-line text-[15px] text-ink/90"
                >
                  <Check size={15} aria-hidden="true" className="mt-1 text-seal shrink-0" />
                  {f}
                </li>
              ))}
            </ul>

            {project.github ? (
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-seal-ink hover:underline"
              >
                <GithubIcon size={15} /> Review the repository <ArrowUpRight size={13} />
              </a>
            ) : null}
          </div>
        </div>
      </div>
    </article>
  )
}

export default function Sistemas() {
  return (
    <Clausula n={2} name="Systems delivered" job="Four sealed records, two filed">
      <div className="space-y-5">
        {PROJECTS.map((p, i) => (
          <Acta key={p.id} project={p} index={i} />
        ))}
      </div>
    </Clausula>
  )
}
