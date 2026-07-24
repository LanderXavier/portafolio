import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from './BrandIcons'
import heroImage from '../assets/hero.png'

const INDICATORS = ['AI & LLMs', 'RAG Systems', 'AI Automation', 'Python','Data Science']

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.08 * i, duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  }),
}

export default function Hero() {
  return (
    <section id="home" className="relative pt-40 pb-20 md:pt-48 md:pb-28 overflow-hidden grain-bg">
      {/* signal trace background */}
      <svg
        className="pointer-events-none absolute inset-0 w-full h-full opacity-[0.35]"
        viewBox="0 0 1200 700"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          d="M-50 520 C 150 480, 250 600, 420 540 S 700 380, 900 430 S 1150 300, 1260 340"
          fill="none"
          stroke="url(#traceGrad)"
          strokeWidth="1.4"
        />
        <path
          d="M-50 160 C 200 220, 300 90, 520 150 S 820 260, 980 180 S 1150 90, 1260 130"
          fill="none"
          stroke="url(#traceGrad2)"
          strokeWidth="1"
        />
        <defs>
          <linearGradient id="traceGrad" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#4CE0C7" stopOpacity="0" />
            <stop offset="50%" stopColor="#4CE0C7" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#4CE0C7" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="traceGrad2" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#6C7CF0" stopOpacity="0" />
            <stop offset="50%" stopColor="#6C7CF0" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#6C7CF0" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>

      <div className="relative max-w-6xl mx-auto px-6 grid md:grid-cols-[1.15fr_0.85fr] gap-16 items-center">
        <div>
          <motion.p
            initial="hidden"
            animate="show"
            custom={0}
            variants={fadeUp}
            className="font-mono text-xs uppercase tracking-[0.25em] mb-6"
            style={{ color: 'var(--color-accent)' }}
          >
            [ ai_engineer.init ]
          </motion.p>

          <motion.h1
            initial="hidden"
            animate="show"
            custom={1}
            variants={fadeUp}
            className="font-display font-semibold text-5xl sm:text-6xl lg:text-[4.2rem] leading-[1.03] tracking-tight text-glow"
          >
            Lander
            <br />
            Lliguicota
          </motion.h1>

          <motion.h2
            initial="hidden"
            animate="show"
            custom={2}
            variants={fadeUp}
            className="font-mono text-base sm:text-lg text-text-dim mt-5"
          >
            AI Engineer · AI Automation · RAG Developer
          </motion.h2>

          <motion.p
            initial="hidden"
            animate="show"
            custom={3}
            variants={fadeUp}
            className="text-text-dim mt-6 max-w-lg leading-relaxed"
          >
            I build intelligent solutions by combining Artificial Intelligence, Large Language
            Models, RAG systems, automation, and software development.
          </motion.p>

          <motion.div
            initial="hidden"
            animate="show"
            custom={4}
            variants={fadeUp}
            className="flex flex-wrap items-center gap-4 mt-9"
          >
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full px-6 py-3 font-mono text-sm font-medium text-bg transition-transform hover:-translate-y-0.5 focus-ring"
              style={{ backgroundColor: 'var(--color-accent)' }}
            >
              View Projects <ArrowRight size={15} />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full px-6 py-3 font-mono text-sm border text-text hover:border-text-dim transition-colors focus-ring"
              style={{ borderColor: 'var(--color-border)' }}
            >
              Contact Me
            </a>
          </motion.div>

          <motion.div
            initial="hidden"
            animate="show"
            custom={5}
            variants={fadeUp}
            className="flex items-center gap-5 mt-8"
          >
            <a href="https://github.com/LanderXavier" target="_blank" rel="noreferrer" aria-label="GitHub" className="text-text-dim hover:text-text transition-colors focus-ring">
              <GithubIcon size={19} />
            </a>
            <a href="https://linkedin.com/in/lander-lliguicota" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="text-text-dim hover:text-text transition-colors focus-ring">
              <LinkedinIcon size={19} />
            </a>
          </motion.div>

          <motion.div
            initial="hidden"
            animate="show"
            custom={6}
            variants={fadeUp}
            className="flex flex-wrap gap-2.5 mt-12"
          >
            {INDICATORS.map((ind) => (
              <span
                key={ind}
                className="font-mono text-[11px] px-3 py-1.5 rounded-full border text-text-dim"
                style={{ borderColor: 'var(--color-border)' }}
              >
                {ind}
              </span>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          className="relative mx-auto"
        >
          <div
            className="absolute -inset-6 rounded-[2rem] blur-2xl opacity-40"
            style={{ background: 'radial-gradient(circle, rgba(76,224,199,0.35), transparent 70%)' }}
            aria-hidden="true"
          />
          <div
            className="relative w-64 h-80 sm:w-72 sm:h-96 rounded-[1.75rem] border overflow-hidden"
            style={{ borderColor: 'var(--color-accent-soft)' }}
          >
            <img
                src={heroImage}
              alt="Lander Lliguicota"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0" style={{ boxShadow: 'inset 0 0 60px rgba(11,14,19,0.55)' }} />
          </div>
          <span className="absolute -top-3 -right-3 w-3 h-3 rounded-full" style={{ backgroundColor: 'var(--color-accent)' }} aria-hidden="true" />
          <span
            className="absolute bottom-4 -left-4 font-mono text-[10px] px-2.5 py-1 rounded-full border bg-bg"
            style={{ borderColor: 'var(--color-border)', color: 'var(--color-text-dim)' }}
          >
            status: building
          </span>
        </motion.div>
      </div>
    </section>
  )
}
