import { motion } from 'framer-motion'
import { BrainCircuit, Search, Workflow, LineChart, Database, FlaskConical } from 'lucide-react'
import SectionLabel from './SectionLabel'

const AREAS = [
  {
    icon: BrainCircuit,
    title: 'Artificial Intelligence',
    desc: 'Machine Learning, Generative AI, LLMs and AI applications.',
    tech: ['Python', 'PyTorch', 'Gemini', 'DeepSeek'],
  },
  {
    icon: Search,
    title: 'RAG Systems',
    desc: 'Retrieval-Augmented Generation, embeddings, vector search and semantic retrieval.',
    tech: ['Pinecone', 'Qdrant', 'Cohere', 'LangChain'],
  },
  {
    icon: Workflow,
    title: 'AI Automation',
    desc: 'AI agents, Intelligent workflows, APIs and intelligent process automation.',
    tech: ['Langchain', 'n8n', 'AI Agents', 'REST APIs', 'Webhooks'],
  },
  {
    icon: LineChart,
    title: 'Python & Data',
    desc: 'Python programming, Pandas, Matplotlib and data analysis.',
    tech: ['Python', 'Pandas', 'Matplotlib', 'NumPy','Data Analysis','EDA'],
  },
   {
    icon:  FlaskConical,
    title: 'Software Development',
    desc: 'End-to-end development of responsive web applications, cross-platform mobile apps, and robust backend systems.',
    tech: ['React', 'React Native', 'Flutter', 'Node.js',' FastAPI','Backend'],
  },
  {
    icon: Database,
    title: 'Databases',
    desc: 'Supabase, PostgreSQL concepts and vector databases.',
    tech: ['MySQL', 'PostgreSQL', 'MongoDB', 'Vector DBs'],
  }
 
]

export default function Expertise() {
  return (
    <section id="expertise" className="py-20 border-t" style={{ borderColor: 'var(--color-border-soft)' }}>
      <div className="max-w-6xl mx-auto px-6">
        <SectionLabel index="02" label="Areas of Expertise" />
        <h3 className="font-display text-3xl sm:text-4xl font-medium mb-14 max-w-xl">
          Where AI research meets shipped systems.
        </h3>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {AREAS.map((a, i) => (
            <motion.div
              key={a.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="card-hover rounded-2xl border p-6"
              style={{ borderColor: 'var(--color-border)', backgroundColor: 'var(--color-surface)' }}
            >
              <a.icon size={22} style={{ color: 'var(--color-accent)' }} strokeWidth={1.6} />
              <h4 className="font-display text-lg font-medium mt-4">{a.title}</h4>
              <p className="text-text-dim text-sm leading-relaxed mt-2">{a.desc}</p>
              <div className="flex flex-wrap gap-2 mt-5">
                {a.tech.map((t) => (
                  <span
                    key={t}
                    className="font-mono text-[10px] px-2 py-1 rounded-md text-text-dim"
                    style={{ backgroundColor: 'var(--color-surface-raised)' }}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
