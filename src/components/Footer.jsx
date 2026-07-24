export default function Footer() {
  return (
    <footer className="border-t py-10" style={{ borderColor: 'var(--color-border-soft)' }}>
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <span className="font-mono text-xs text-text-faint">
          © {new Date().getFullYear()} Lander Lliguicota
        </span>
        <span className="font-mono text-xs text-text-faint">
          built with react · tailwind · framer-motion
        </span>
      </div>
    </footer>
  )
}
