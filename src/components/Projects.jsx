import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowUpRight, ChevronLeft, ChevronRight } from 'lucide-react'
import { GithubIcon } from './BrandIcons'
import SectionLabel from './SectionLabel'

const dentalImages = Object.entries(
  import.meta.glob('../assets/dental/*', { eager: true, import: 'default' })
)
  .sort(([leftPath], [rightPath]) => leftPath.localeCompare(rightPath, undefined, { numeric: true }))
  .map(([, imageUrl]) => imageUrl)

const RagImages = Object.entries(
  import.meta.glob('../assets/rag/*', { eager: true, import: 'default' })
)
  .sort(([leftPath], [rightPath]) => leftPath.localeCompare(rightPath, undefined, { numeric: true }))
  .map(([, imageUrl]) => imageUrl)
const KichwaImages = Object.entries(
  import.meta.glob('../assets/kichwa/*', { eager: true, import: 'default' })
)
  .sort(([leftPath], [rightPath]) => leftPath.localeCompare(rightPath, undefined, { numeric: true }))
  .map(([, imageUrl]) => imageUrl)
const MoodImages = Object.entries(
  import.meta.glob('../assets/moodmirror/*', { eager: true, import: 'default' })
)
  .sort(([leftPath], [rightPath]) => leftPath.localeCompare(rightPath, undefined, { numeric: true }))
  .map(([, imageUrl]) => imageUrl)
const FarmvilleImages = Object.entries(
  import.meta.glob('../assets/farm/*', { eager: true, import: 'default' })
)
  .sort(([leftPath], [rightPath]) => leftPath.localeCompare(rightPath, undefined, { numeric: true }))
  .map(([, imageUrl]) => imageUrl)





const PROJECTS = [
  {
    number: '01',
    title: 'AI Dental Assistant',
    subtitle: 'AI-powered conversational assistant for dental clinic automation.',
    desc: 'Developed as a freelance client solution, this intelligent conversational system automates patient registration, appointment scheduling, clinic information retrieval, and treatment-related queries. It was deployed locally on n8n via Docker to accommodate the client\'s requirement to avoid Host costs.',
    tech: ['Telegram', 'n8n (Local)', 'DeepSeek', 'Supabase', 'Qdrant Cloud', 'RAG', 'AI Agents', 'Docker'],
    features: [
      'Patient registration & Telegram ID identification',
      'Conversational state management across sessions',
      'Appointment scheduling with day/time selection',
      'RAG-based treatment, price and duration queries',
      'On-premise local deployment to eliminate VPN expenses',
    ],
    images: dentalImages,
  },
  {
    number: '02',
    title: 'RAG Legal Chatbot — Galápagos',
    subtitle: 'Legal consultation chatbot for the Galápagos special regime.',
    desc: 'A Retrieval-Augmented Generation (RAG) chatbot designed to answer complex legal questions. Initially prototyped with n8n for rapid testing, the final system was developed entirely in pure LangChain to ensure precise token management, advanced system prompting, and robust performance.',
    tech: ['LangChain', 'DeepSeek', 'Qdrant', 'n8n', 'RAG'],
    features: [
      'Developed a specialized RAG pipeline to accurately query and interpret the Galápagos legal framework',
      'Built an initial visual prototype using n8n to validate the data flow and orchestration logic before coding',
      'Migrated to a pure LangChain architecture to achieve fine-grained control over token usage and complex system prompts',
      'Integrated Qdrant as the vector database and DeepSeek as the core LLM for efficient, cost-effective inference',
    ],
    images: RagImages,
  },
  {
    number: '03',
    title: 'Kiwcha APP',
    subtitle: 'Gamified, Duolingo-style mobile app for interactive Kichwa learning.',
    desc: 'A Duolingo-style mobile application designed for learning the Kichwa language. Developed as a community outreach (vinculación) project at Yachay Tech, utilizing local JSON files for lightweight, offline data storage.',
    tech: ['Flutter', 'Dart', 'JSON', 'Mobile Development'],
    features: [
      'Developed an interactive Kichwa language learning experience inspired by Duolingo',
      'Built a responsive, cross-platform mobile interface using the Flutter framework',
      'Implemented a local JSON-based database architecture for offline content management',
      'Contributed as a core programmer for a university outreach (vinculación) initiative at Yachay Tech',
    ],
    images: KichwaImages,
  },
  {
    number: '04',
    title: 'Mood Mirror',
    subtitle: 'AI-powered smart diary & mood tracker.',
    desc: 'An intelligent daily journaling application that combines text sentiment analysis and facial emotion recognition to track mental well-being over time. It features visual dashboards and automatically suggests support contacts when distress is detected.',
    tech: ['Flutter', 'FastAPI', 'SQLite', 'Applied AI Models'],
    features: [
      'Smart journaling system with text-based sentiment analysis for daily mood tracking',
      'Facial emotion recognition using AI models to analyze user-submitted daily photos',
      'Interactive visual dashboards to monitor mood evolution and well-being patterns',
      'Automated safety feature that provides emergency contact numbers during critical situations',
      'Dual-backend architecture utilizing local SQLite for fast data storage and FastAPI for AI model inference',
    ],
    images: MoodImages,
  },
 {
    number: '05',
    title: 'Farmville YT',
    subtitle: 'Functional IoT plant monitoring prototype.',
    desc: 'A fully functional physical and software prototype of an IoT-based smart agricultural system designed to monitor and automate plant care. Showcased as a working live demo, it was awarded 3rd place at the Comufest 2026 competition at Yachay Tech.',
    tech: ['React Native', 'FastAPI', 'Raspberry Pi', 'Arduino', 'IoT'],
    features: [
      'Developed a fully working physical hardware demo and a functional mobile app prototype',
      'Integrated Arduino with environmental sensors (soil moisture, air humidity, temperature, pH) to monitor small-scale crops',
      'Automated hardware actuators, including irrigation systems and ventilation, based on real-time sensor readings',
      'Developed a lightweight FastAPI backend hosted on a Raspberry Pi to collect and process telemetry data',
      'Built a cross-platform mobile frontend using React Native to display real-time metrics on interactive dashboards',
      'Secured 3rd place at the Yachay Tech Comufest 2026 innovation contest through a successful live demonstration',
    ],
    images: FarmvilleImages,
  },
]

function ProjectCard({ project, onOpen }) {
  const coverImage = project.images?.[0] ?? '/images/profile-placeholder.svg'

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.55 }}
      className="card-hover rounded-3xl border overflow-hidden"
      style={{ borderColor: 'var(--color-border)', backgroundColor: 'var(--color-surface)' }}
    >
      <button
        type="button"
        onClick={() => onOpen(project.number)}
        className="group w-full text-left"
        aria-label={`Open details for ${project.title}`}
      >
        <div className="relative overflow-hidden" style={{ borderColor: 'var(--color-border)' }}>
          <div className="h-52 bg-bg flex items-center justify-center p-4 border-b" style={{ borderColor: 'var(--color-border)' }}>
            <img
              src={coverImage}
              alt={`${project.title} preview`}
              className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-[1.03]"
            />
          </div>

          <div className="absolute inset-0 bg-gradient-to-t from-[#0b0e13] via-[#0b0e13]/45 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

          <div className="absolute left-4 right-4 bottom-4 flex flex-wrap gap-2 opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
            {project.tech.map((tech) => (
              <span
                key={tech}
                className="font-mono text-[10px] px-2.5 py-1 rounded-full border backdrop-blur-sm text-white"
                style={{ borderColor: 'rgba(255,255,255,0.16)', backgroundColor: 'rgba(11,14,19,0.68)' }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="p-6 sm:p-7 flex flex-col gap-3">
          <div className="flex items-start justify-between gap-4">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <span className="font-mono text-sm" style={{ color: 'var(--color-accent)' }}>
                  {project.number}
                </span>
                <h4 className="font-display text-2xl font-medium leading-tight">{project.title}</h4>
              </div>
              <p className="font-mono text-xs text-white/70">{project.subtitle}</p>
            </div>

            <span
              className="font-mono text-[10px] px-2.5 py-1 rounded-full border text-white/80 shrink-0"
              style={{ borderColor: 'var(--color-border)' }}
            >
              view
            </span>
          </div>
        </div>
      </button>
    </motion.article>
  )
}

function ProjectModal({ project, activeIndex, onClose, onPrevious, onNext, onSelectImage }) {
  const images = project.images?.length ? project.images : ['/images/profile-placeholder.svg']
  const activeImage = images[activeIndex] ?? images[0]
  const [isZoomed, setIsZoomed] = useState(false)
  const [pan, setPan] = useState({ x: 0, y: 0 })
  const [isDragging, setIsDragging] = useState(false)
  const dragStartRef = useRef(null)

  useEffect(() => {
    setIsZoomed(false)
    setPan({ x: 0, y: 0 })
    setIsDragging(false)
    dragStartRef.current = null
  }, [activeImage])

  const handlePointerDown = (event) => {
    if (!isZoomed || event.button !== 0) return

    dragStartRef.current = {
      x: event.clientX,
      y: event.clientY,
      panX: pan.x,
      panY: pan.y,
    }
    setIsDragging(true)
    event.currentTarget.setPointerCapture(event.pointerId)
  }

  const handlePointerMove = (event) => {
    if (!isDragging || !dragStartRef.current) return

    const nextX = dragStartRef.current.panX + (event.clientX - dragStartRef.current.x)
    const nextY = dragStartRef.current.panY + (event.clientY - dragStartRef.current.y)

    setPan({ x: nextX, y: nextY })
  }

  const handlePointerUp = (event) => {
    if (isDragging) {
      setIsDragging(false)
      dragStartRef.current = null
    }

    event.currentTarget.releasePointerCapture(event.pointerId)
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4 py-8">
      <button
        type="button"
        className="absolute inset-0 bg-[#0b0e13]/80 backdrop-blur-sm"
        aria-label="Close project modal"
        onClick={onClose}
      />

      <motion.div
        initial={{ opacity: 0, scale: 0.96, y: 12 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.22 }}
        className="relative z-10 w-full max-w-5xl h-[88vh] overflow-hidden rounded-[2rem] border shadow-2xl"
        style={{ borderColor: 'var(--color-border)', backgroundColor: 'var(--color-surface)' }}
      >
        <div className="flex h-full flex-col md:grid md:grid-cols-[0.95fr_1.05fr]">
          <div className="flex-[1.35] bg-bg p-5 sm:p-6 border-b md:border-b-0 md:border-r min-h-0 flex flex-col" style={{ borderColor: 'var(--color-border)' }}>
            <div className="relative flex-1 min-h-0 flex items-center justify-center rounded-2xl overflow-hidden border bg-[#0b0e13] p-4 sm:p-6" style={{ borderColor: 'var(--color-border)' }}>
              <div
                className="relative flex h-full w-full min-h-0 min-w-0 items-center justify-center"
                style={{ touchAction: 'none', cursor: isZoomed ? (isDragging ? 'grabbing' : 'grab') : 'zoom-in' }}
                onPointerDown={handlePointerDown}
                onPointerMove={handlePointerMove}
                onPointerUp={handlePointerUp}
                onPointerCancel={handlePointerUp}
                onDoubleClick={() => {
                  setIsZoomed((current) => {
                    const nextZoom = !current
                    if (!nextZoom) setPan({ x: 0, y: 0 })
                    return nextZoom
                  })
                }}
              >
                <img
                  src={activeImage}
                  alt={`${project.title} preview ${activeIndex + 1}`}
                  className="block max-h-[calc(88vh-8rem)] max-w-full w-auto h-auto object-contain transition-transform duration-300 select-none"
                  draggable="false"
                  style={{
                    transformOrigin: 'center center',
                    transform: isZoomed ? `translate3d(${pan.x}px, ${pan.y}px, 0) scale(3)` : 'translate3d(0, 0, 0) scale(1)',
                  }}
                />
              </div>

              <span className="absolute left-4 top-4 rounded-full border px-3 py-1 font-mono text-[10px] uppercase tracking-[0.24em] text-white/70 bg-[#0b0e13]/65 backdrop-blur-sm" style={{ borderColor: 'rgba(255,255,255,0.16)' }}>
                double click to zoom · drag to move
              </span>

              {images.length > 1 ? (
                <>
                  <button
                    type="button"
                    onClick={onPrevious}
                    className="absolute left-3 top-1/2 -translate-y-1/2 inline-flex items-center justify-center w-11 h-11 rounded-full border text-white bg-[#0b0e13]/80 backdrop-blur-sm transition-all hover:bg-red-600 hover:scale-105"
                    style={{ borderColor: 'rgba(255,255,255,0.22)' }}
                    aria-label="Previous image"
                  >
                    <ChevronLeft size={18} />
                  </button>
                  <button
                    type="button"
                    onClick={onNext}
                    className="absolute right-3 top-1/2 -translate-y-1/2 inline-flex items-center justify-center w-11 h-11 rounded-full border text-white bg-[#0b0e13]/80 backdrop-blur-sm transition-all hover:bg-red-600 hover:scale-105"
                    style={{ borderColor: 'rgba(255,255,255,0.22)' }}
                    aria-label="Next image"
                  >
                    <ChevronRight size={18} />
                  </button>
                </>
              ) : null}
            </div>

            {images.length > 1 ? (
              <div className="mt-4 flex items-center justify-center gap-2 flex-wrap shrink-0">
                <div className="font-mono text-[10px] uppercase tracking-[0.24em] text-white/60 mr-2">
                  {activeIndex + 1} / {images.length}
                </div>
                {images.map((imageUrl, imageIndex) => (
                  <button
                    key={imageUrl}
                    type="button"
                    onClick={() => onSelectImage(imageIndex)}
                    className={`h-2.5 rounded-full transition-all duration-200 ${imageIndex === activeIndex ? 'w-7 bg-[color:var(--color-accent)]' : 'w-2.5 bg-white/35 hover:bg-white/55'
                      }`}
                    aria-label={`Show image ${imageIndex + 1}`}
                    aria-pressed={imageIndex === activeIndex}
                  />
                ))}
              </div>
            ) : null}
          </div>

          <div className="flex-[0.95] min-h-0 overflow-y-auto p-6 sm:p-8 md:max-h-[88vh]">
            <div className="sticky top-0 z-20 flex items-start justify-between gap-4 mb-5 pb-4" style={{ backgroundColor: 'var(--color-surface)' }}>
              <div>
                <span className="font-mono text-xs uppercase tracking-[0.24em]" style={{ color: 'var(--color-accent)' }}>
                  project window
                </span>
                <h4 className="font-display text-2xl sm:text-3xl font-medium mt-2">{project.title}</h4>
              </div>

              <button
                type="button"
                onClick={onClose}
                className="font-mono text-[10px] px-4 py-2 rounded-full border text-white/80 shrink-0 min-h-10 min-w-10 transition-colors duration-200 hover:text-red-500"
                style={{ borderColor: 'var(--color-border)', backgroundColor: 'rgba(255,255,255,0.03)' }}
              >
                close
              </button>
            </div>

            <p className="text-white/80 leading-relaxed mb-6">{project.desc}</p>

            <ul className="space-y-2 mb-6">
              {project.features.map((feature) => (
                <li key={feature} className="flex gap-2 text-sm text-white/90 leading-snug">
                  <span className="mt-2 w-1 h-1 rounded-full shrink-0" style={{ backgroundColor: 'var(--color-accent)' }} />
                  {feature}
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-2 mb-7">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="font-mono text-[10px] px-2.5 py-1 rounded-md border text-white"
                  style={{ borderColor: 'rgba(255,255,255,0.15)', backgroundColor: 'rgba(255,255,255,0.04)' }}
                >
                  {tech}
                </span>
              ))}
            </div>

          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null)
  const [activeImageIndex, setActiveImageIndex] = useState(0)

  const selectedProjectData = PROJECTS.find((project) => project.number === selectedProject) ?? null
  const selectedImages = selectedProjectData?.images?.length ? selectedProjectData.images : ['/images/profile-placeholder.svg']

  useEffect(() => {
    if (!selectedProject) return undefined

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setSelectedProject(null)
        return
      }

      if (event.key === 'ArrowLeft' && selectedImages.length > 1) {
        event.preventDefault()
        setActiveImageIndex((current) => (current - 1 + selectedImages.length) % selectedImages.length)
        return
      }

      if (event.key === 'ArrowRight' && selectedImages.length > 1) {
        event.preventDefault()
        setActiveImageIndex((current) => (current + 1) % selectedImages.length)
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    document.body.style.overflow = 'hidden'

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = ''
    }
  }, [selectedProject, selectedImages.length])

  useEffect(() => {
    setActiveImageIndex(0)
  }, [selectedProject])

  const openProject = (projectNumber) => {
    setSelectedProject(projectNumber)
  }

  const goToPreviousImage = () => {
    setActiveImageIndex((current) => (current - 1 + selectedImages.length) % selectedImages.length)
  }

  const goToNextImage = () => {
    setActiveImageIndex((current) => (current + 1) % selectedImages.length)
  }

  return (
    <section id="projects" className="py-20 border-t" style={{ borderColor: 'var(--color-border-soft)' }}>
      <div className="max-w-6xl mx-auto px-6">
        <SectionLabel index="03" label="Featured Projects" />
        <h3 className="font-display text-3xl sm:text-4xl font-medium mb-14 max-w-xl">
          Systems built, not just prototyped.
        </h3>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3 items-stretch auto-rows-fr">
          {PROJECTS.map((project, index) => (
            <ProjectCard key={project.number} project={project} index={index} onOpen={openProject} />
          ))}
        </div>
      </div>

      {selectedProjectData ? (
        <ProjectModal
          project={selectedProjectData}
          activeIndex={activeImageIndex}
          onClose={() => setSelectedProject(null)}
          onPrevious={goToPreviousImage}
          onNext={goToNextImage}
          onSelectImage={setActiveImageIndex}
        />
      ) : null}
    </section>
  )
}
