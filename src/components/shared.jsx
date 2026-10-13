const SEALED_PROOFS = ['Deployed', 'Paper', 'Award']

export function Sello({ text }) {
  if (!text) return null
  if (!SEALED_PROOFS.includes(text)) {
    return (
      <span className="inline-block font-mono text-[10px] font-medium uppercase tracking-[0.18em] text-muted">
        {text}
      </span>
    )
  }
  return (
    <span
      data-seal
      className="seal inline-block font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-seal-ink border-2 border-seal rounded-[3px] px-2.5 py-1 bg-seal-tint"
    >
      {text}
    </span>
  )
}

const NUMERALS = { 1: 'I', 2: 'II', 3: 'III', 4: 'IV', 5: 'V' }

export function Clausula({ n, name, job, children }) {
  return (
    <section aria-label={`Clause ${NUMERALS[n]}: ${name}`} className="mt-20 first:mt-0 scroll-mt-8">
      <div className="border-t-2 border-ink pt-4 mb-8">
        <h2 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight">
          {NUMERALS[n]}. {name}
        </h2>
        <p className="text-muted mt-2">{job}.</p>
      </div>
      {children}
    </section>
  )
}
