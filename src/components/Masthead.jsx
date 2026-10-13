import { ArrowUpRight, Mail } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from './BrandIcons'
import { CANDIDATE } from '../data.js'

export default function Masthead() {
  return (
    <header id="top">
      <div className="border-b-2 border-ink pb-4 flex flex-wrap items-end justify-between gap-3">
        <p className="font-display text-sm font-extrabold uppercase tracking-[0.2em]">
          Receiving file
        </p>
        <dl className="flex flex-wrap gap-x-6 gap-y-1 font-mono text-[11px] text-muted tnum">
          <div className="flex gap-2">
            <dt className="text-faint">Folio</dt>
            <dd>Nº 2026-001</dd>
          </div>
          <div className="flex gap-2">
            <dt className="text-faint">Issued</dt>
            <dd>October 2026</dd>
          </div>
          <div className="flex gap-2">
            <dt className="text-faint">Place</dt>
            <dd>Quito, Ecuador</dd>
          </div>
        </dl>
      </div>

      <div className="pt-10 flex flex-col sm:flex-row gap-6 sm:gap-8">
        <figure className="shrink-0">
          <img
            src={CANDIDATE.photo}
            alt={CANDIDATE.name}
            className="w-28 h-36 sm:w-36 sm:h-44 object-cover border border-line-dark"
          />
          <figcaption className="font-mono text-[10px] text-faint mt-1.5">
            ID photo · the subject
          </figcaption>
        </figure>

        <div className="min-w-0">
          <h1 className="font-display text-4xl sm:text-6xl font-extrabold tracking-tight leading-[1.0] mt-2">
            {CANDIDATE.name}
          </h1>
          <p className="text-lg text-muted mt-3">
            {CANDIDATE.title} · {CANDIDATE.location}
          </p>
          <p className="mt-4 max-w-xl leading-relaxed">{CANDIDATE.statement}</p>

          <ul className="mt-5 max-w-xl border-t border-line">
            {CANDIDATE.signals.map((s) => (
              <li key={s} className="py-2 border-b border-line text-[15px] font-medium">
                {s}
              </li>
            ))}
          </ul>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <a
              href={`mailto:${CANDIDATE.email}`}
              className="inline-flex items-center gap-2 rounded-md bg-seal px-5 py-2.5 text-sm font-semibold text-white hover:bg-seal-ink"
            >
              <Mail size={15} /> Email Lander
            </a>
            <a
              href={CANDIDATE.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-ink hover:underline"
            >
              <GithubIcon size={15} /> GitHub <ArrowUpRight size={13} />
            </a>
            <a
              href={CANDIDATE.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-ink hover:underline"
            >
              <LinkedinIcon size={15} /> LinkedIn <ArrowUpRight size={13} />
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}
