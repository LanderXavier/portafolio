import { useState } from 'react'
import { ArrowUpRight, Check, Copy, Mail } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from './BrandIcons'
import { CANDIDATE, CONTACT_NOTE } from '../data.js'
import { Clausula } from './shared.jsx'

export default function Firma() {
  const [copied, setCopied] = useState(false)

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(CANDIDATE.email)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      setCopied(false)
    }
  }

  return (
    <Clausula n={4} name="Signature" job="Sign-off happens by email">
      <div className="bg-card border border-line-dark p-8 sm:p-10">
        <p className="font-display text-2xl sm:text-3xl font-extrabold tracking-tight leading-tight">
          {CANDIDATE.name}
        </p>
        <p className="font-mono text-[11px] text-faint mt-2 tnum">
          {CANDIDATE.title} · {CANDIDATE.location} · {CANDIDATE.email}
        </p>
        <p className="mt-4 max-w-md leading-relaxed">{CONTACT_NOTE}</p>

        <div className="mt-6 flex flex-wrap items-center gap-3">
          <a
            href={`mailto:${CANDIDATE.email}`}
            className="inline-flex items-center gap-2 rounded-md bg-seal px-5 py-2.5 text-sm font-semibold text-white hover:bg-seal-ink"
          >
            <Mail size={15} /> {CANDIDATE.email}
          </a>
          <button
            type="button"
            onClick={copyEmail}
            className="inline-flex items-center gap-2 rounded-md border border-line-dark bg-card px-4 py-2.5 text-sm font-medium text-ink hover:border-ink"
          >
            {copied ? <Check size={15} /> : <Copy size={15} />}
            {copied ? 'Copied' : 'Copy email'}
          </button>
        </div>

        <div className="mt-6 flex items-center gap-5">
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
    </Clausula>
  )
}
