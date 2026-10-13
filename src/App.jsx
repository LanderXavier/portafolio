import Masthead from './components/Masthead'
import Antecedentes from './components/Antecedentes'
import Sistemas from './components/Sistemas'
import Historial from './components/Historial'
import Firma from './components/Firma'
import { CANDIDATE } from './data.js'

export default function App() {
  return (
    <div className="min-h-screen bg-paper text-ink">
      <main className="max-w-3xl mx-auto px-4 sm:px-8 pt-8 pb-16">
        <Masthead />
        <Antecedentes />
        <Sistemas />
        <Historial />
        <Firma />
      </main>
      <footer className="border-t-2 border-ink">
        <div className="max-w-3xl mx-auto px-4 sm:px-8 py-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
          <span className="font-mono text-[11px] text-faint tnum">
            File closed · {new Date().getFullYear()} · {CANDIDATE.name}
          </span>
          <span className="font-mono text-[11px] text-faint">
            built with react + tailwind
          </span>
        </div>
      </footer>
    </div>
  )
}
