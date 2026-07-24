export default function SectionLabel({ index, label }) {
  return (
    <div className="flex items-center gap-3 mb-5">
      <span className="font-mono text-xs text-accent tracking-widest">{index}</span>
      <span className="h-px w-8 bg-border-soft" style={{ backgroundColor: 'var(--color-accent-soft)' }} />
      <span className="font-mono text-xs text-text-dim uppercase tracking-[0.2em]">{label}</span>
    </div>
  )
}
