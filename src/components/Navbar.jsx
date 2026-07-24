import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'

const LINKS = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#projects', label: 'Projects' },
  { href: '#research', label: 'Research' },
  { href: '#skills', label: 'Skills' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${
        scrolled ? 'bg-bg/85 backdrop-blur-md border-b border-border-soft' : 'bg-transparent'
      }`}
      style={{ backgroundColor: scrolled ? 'rgba(11,14,19,0.85)' : 'transparent' }}
    >
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#home" className="font-display font-semibold tracking-tight text-text focus-ring">
          LANDER<span style={{ color: 'var(--color-accent)' }}>.</span>LLIGUICOTA
        </a>

        <ul className="hidden md:flex items-center gap-8">
          {LINKS.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="font-mono text-[13px] text-text-dim hover:text-text transition-colors focus-ring"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="hidden md:inline-flex items-center gap-2 border font-mono text-[13px] px-4 py-2 rounded-full text-text hover:text-bg transition-colors focus-ring"
          style={{ borderColor: 'var(--color-accent-soft)' }}
          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'var(--color-accent)')}
          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
        >
          Let&apos;s Connect
        </a>

        <button
          className="md:hidden text-text focus-ring"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden border-t border-border-soft bg-bg">
          <ul className="flex flex-col px-6 py-4 gap-4">
            {LINKS.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="font-mono text-sm text-text-dim hover:text-text"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="font-mono text-sm text-center border rounded-full px-4 py-2 mt-2"
              style={{ borderColor: 'var(--color-accent-soft)', color: 'var(--color-accent)' }}
            >
              Let&apos;s Connect
            </a>
          </ul>
        </div>
      )}
    </header>
  )
}
