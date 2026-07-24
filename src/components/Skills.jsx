import { motion } from 'framer-motion'
import SectionLabel from './SectionLabel'

const GROUPS = [
  {
    title: 'AI & LLMs',
    items: ['LLMs', 'RAG', 'AI Agents', 'LangChain', 'Machine Learning', 'Deep Learning', 'Training Models'],
  },
  {
    title: 'Automation',
    items: ['n8n', 'Webhooks', 'REST APIs', 'Bots', 'Langchain Agents'],
  },
  {
    title: 'Languages & Frameworks',
    items: ['Python', 'JavaScript', 'C++', 'Flutter', 'React', 'Node.js', 'FastAPI', 'Backend Development'],
  },
  {
    title: 'Databases & Vector Stores',
    items: ['MySQL', 'PostgreSQL', 'Pinecone', 'MongoDB', 'Supabase'],
  },
  {
    title: 'Infra, Tools & Process',
    items: ['Docker', 'Kubernetes', 'Git', 'Linux Expertise', 'Scrum'], 
  },
  {
    title: 'Data Analysis',
    items: ['EDA', 'Data Analysis', 'Data Visualization', 'Pandas', 'Matplotlib', 'R', 'Data cleaning and extraction'], 
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 border-t" style={{ borderColor: 'var(--color-border-soft)' }}>
      <div className="max-w-6xl mx-auto px-6">
        <SectionLabel index="05" label="Technical Skills" />
        <h3 className="font-display text-3xl sm:text-4xl font-medium mb-14 max-w-xl">
          The stack behind the systems.
        </h3>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-10">
          {GROUPS.map((g, i) => (
            <motion.div
              key={g.title}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
            >
              <h4 className="font-mono text-xs uppercase tracking-widest text-text-dim mb-4 pb-3 border-b" style={{ borderColor: 'var(--color-border-soft)' }}>
                {g.title}
              </h4>
              <ul className="flex flex-col gap-2.5">
                {g.items.map((it) => (
                  <li key={it} className="flex items-center gap-2.5 text-sm text-text">
                    <span className="w-1 h-1 rounded-full shrink-0" style={{ backgroundColor: 'var(--color-accent)' }} />
                    {it}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
