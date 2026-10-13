import { AREAS, SCREEN_CHECKS } from '../data.js'
import { Clausula } from './shared.jsx'

export default function Antecedentes() {
  return (
    <Clausula n={1} name="Background" job="Scope and signals on record">
      <ul className="max-w-2xl border-t border-line">
        {SCREEN_CHECKS.map((s) => (
          <li
            key={s.check}
            className="grid sm:grid-cols-[190px_1fr] gap-1 sm:gap-6 py-4 border-b border-line"
          >
            <div className="font-semibold">{s.check}</div>
            <p className="text-muted text-[15px] leading-relaxed">{s.detail}</p>
          </li>
        ))}
      </ul>

      <h3 className="font-display text-xl font-bold tracking-tight mt-12 mb-2">
        Areas on record
      </h3>
      <ul className="border-t border-line">
        {AREAS.map((a) => (
          <li
            key={a.title}
            className="grid sm:grid-cols-[220px_1fr] gap-1 sm:gap-6 py-4 border-b border-line"
          >
            <div className="font-semibold">{a.title}</div>
            <div>
              <p className="text-muted text-[15px] leading-relaxed">{a.desc}</p>
              <p className="font-mono text-[11px] text-faint mt-1.5">{a.stack}</p>
            </div>
          </li>
        ))}
      </ul>
    </Clausula>
  )
}
