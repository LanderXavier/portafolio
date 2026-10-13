import heroPhoto from './assets/hero.png'

const collect = (pattern) =>
  Object.entries(pattern)
    .sort(([a], [b]) => a.localeCompare(b, undefined, { numeric: true }))
    .map(([, url]) => url)

const dentalImages = collect(import.meta.glob('./assets/dental/*', { eager: true, import: 'default' }))
const ragImages = collect(import.meta.glob('./assets/rag/*', { eager: true, import: 'default' }))
const ventasImages = collect(import.meta.glob('./assets/ventas/*', { eager: true, import: 'default' }))
const moodImages = collect(import.meta.glob('./assets/moodmirror/*', { eager: true, import: 'default' }))
const farmImages = collect(import.meta.glob('./assets/farm/*', { eager: true, import: 'default' }))
const kichwaImages = collect(import.meta.glob('./assets/kichwa/*', { eager: true, import: 'default' }))

const certImages = Object.fromEntries(
  Object.entries(import.meta.glob('./assets/cert/*', { eager: true, import: 'default' })).map(
    ([path, url]) => [path.split('/').pop().replace(/\.[^.]+$/, '').toLowerCase(), url],
  ),
)

export const CANDIDATE = {
  name: 'Lander Lliguicota',
  title: 'AI & Automation Engineer',
  location: 'Quito, Ecuador',
  email: 'landerx345@gmail.com',
  github: 'https://github.com/LanderXavier',
  linkedin: 'https://linkedin.com/in/lander-lliguicota',
  photo: heroPhoto,
  statement:
    'I ship client systems that run in production, from clinic scheduling to sales registration, and I research RAG architectures.',
  signals: ['Client systems live in production'],
}

export const SCREEN_CHECKS = [
  { check: 'Scope', detail: 'AI engineering and automation roles: RAG, agents, backends, data.' },
  { check: 'Proof rule', detail: 'Every claim below carries its evidence: deployed system, paper, award, or repo.' },
  { check: 'Stack under review', detail: 'Python · LangChain · LangGraph · FastAPI · PostgreSQL · n8n · Qdrant.' },
]

export const AREAS = [
  { title: 'Artificial Intelligence', desc: 'Machine Learning, Generative AI, LLMs and AI applications.', stack: 'Python · PyTorch · Gemini · DeepSeek' },
  { title: 'RAG Systems', desc: 'Retrieval-Augmented Generation, embeddings, vector search and semantic retrieval.', stack: 'Qdrant · Cohere · LangChain' },
  { title: 'AI Automation', desc: 'AI agents, intelligent workflows, APIs and intelligent process automation.', stack: 'LangChain · LangGraph · n8n · REST APIs · Webhooks' },
  { title: 'Python & Data', desc: 'Python programming, Pandas, Matplotlib and data analysis.', stack: 'Python · Pandas · NumPy · EDA' },
  { title: 'Software Development', desc: 'Responsive web apps, cross-platform mobile apps, and robust backend systems.', stack: 'React · React Native · Flutter · Node.js · FastAPI' },
  { title: 'Databases', desc: 'Relational, document and vector databases.', stack: 'PostgreSQL · MySQL · MongoDB · Vector DBs' },
]

export const PROJECTS = [
  {
    id: 'crm-agent',
    title: 'Intelligent CRM & Scheduling Agent',
    oneLiner: 'Multi-agent assistant for clinic communication and appointment scheduling.',
    desc: "Developed as a freelance client solution, this intelligent conversational system automates patient registration, appointment scheduling, clinic information retrieval, and treatment-related queries. It was deployed locally on n8n via Docker to accommodate the client's requirement to avoid host costs.",
    stack: 'n8n · Qdrant · Telegram · Supabase · Docker',
    proof: 'Deployed',
    features: [
      'Patient registration & Telegram ID identification',
      'Conversational state management across sessions',
      'Appointment scheduling with day/time selection',
      'RAG-based treatment, price and duration queries',
      'On-premise local deployment to eliminate hosting expenses',
    ],
    images: dentalImages,
  },
  {
    id: 'galapagos-rag',
    title: 'Galapagos Legal Assistant',
    oneLiner: 'RAG system for regional special-regime legislation. TITEC 2026 paper co-author.',
    desc: 'A Retrieval-Augmented Generation (RAG) chatbot designed to answer complex legal questions. Initially prototyped with n8n for rapid testing, the final system was developed entirely in pure LangChain to ensure precise token management, advanced system prompting, and robust performance.',
    stack: 'Gemini · Qdrant · n8n · LangChain · RAG',
    proof: 'Paper',
    features: [
      'Specialized RAG pipeline over the Galápagos legal framework',
      'Visual n8n prototype to validate data flow before coding',
      'Pure LangChain architecture for token control and system prompts',
      'Qdrant vector search with cost-effective inference',
    ],
    images: ragImages,
  },
  {
    id: 'sales-assistant',
    title: 'Conversational Sales Registration Assistant',
    oneLiner: 'Messaging sales automation with AI extraction and PostgreSQL.',
    desc: 'Developed as a freelance client solution, this conversational assistant lets salespeople register sales by text message and receipt photos. A state machine merges multi-message drafts, an interchangeable LLM extracts amount, payment method, customer and reference, and everything is stored idempotently in PostgreSQL with owner reports and automatic notifications.',
    stack: 'FastAPI · PostgreSQL · Gemini · WhatsApp · Docker · LangChain · LangGraph',
    proof: 'Deployed',
    features: [
      'Conversational sales registration via text and receipt photos',
      'Automatic extraction of amount, method, customer and reference',
      'Draft merging across messages, asking only for missing data',
      'Idempotency plus logical duplicate detection by reference',
      'Daily totals, per-seller reports, review queue and owner alerts',
    ],
    images: ventasImages,
    github: 'https://github.com/LanderXavier/bot_ventas',
  },
  {
    id: 'mood-mirror',
    title: 'Mood Mirror',
    oneLiner: 'Flutter mobile app for sentiment analysis and facial emotion recognition.',
    desc: 'A mobile journaling application built with Flutter and connected to FastAPI for sentiment analysis and facial emotion recognition, helping users track emotional well-being over time.',
    stack: 'Flutter · FastAPI · Sentiment Analysis · Facial Emotion Recognition',
    proof: 'Built',
    features: [
      'Analyzes sentiment in daily journal entries',
      'Recognizes facial emotions from user-submitted photos',
      'Connects a Flutter mobile experience to a FastAPI backend',
      'Visualizes mood evolution over time',
    ],
    images: moodImages,
  },
  {
    id: 'farmville',
    title: 'Farmville YT',
    oneLiner: 'IoT telemetry system. 3rd place at Comufest 2026.',
    desc: 'An IoT telemetry system using a Raspberry Pi with the PREEMPT_RT kernel, Arduino sensors, and React Native dashboards for real-time agricultural monitoring. Awarded 3rd place at Comufest 2026.',
    stack: 'Raspberry Pi · Linux PREEMPT_RT · Arduino · React Native · FastAPI',
    proof: 'Award',
    features: [
      'Collects real-time environmental telemetry from Arduino sensors',
      'Uses a low-latency Raspberry Pi runtime with PREEMPT_RT',
      'Displays live metrics through a React Native application',
      'Won 3rd place at the Comufest 2026 innovation contest',
    ],
    images: farmImages,
  },
  {
    id: 'kichwa',
    title: 'Kiwcha APP',
    oneLiner: 'Gamified, Duolingo-style mobile app for interactive Kichwa learning.',
    desc: 'A Duolingo-style mobile application designed for learning the Kichwa language. Developed as a community outreach (vinculación) project at Yachay Tech, utilizing local JSON files for lightweight, offline data storage.',
    stack: 'Flutter · Dart · JSON · Mobile Development',
    proof: 'Outreach',
    features: [
      'Interactive Kichwa learning experience inspired by Duolingo',
      'Responsive, cross-platform mobile interface in Flutter',
      'Local JSON-based database architecture for offline content',
      'Core programmer on a Yachay Tech outreach initiative',
    ],
    images: kichwaImages,
  },
]

export const EXPERIENCES = [
  {
    role: 'Freelance AI Automation Engineer',
    company: 'Independent / Remote',
    period: 'May 2026 - Present',
    location: 'Ecuador',
    type: 'Freelance',
    current: true,
    highlights: [
      'Designs and deploys custom RAG pipelines for real-world automation workflows.',
      'Builds backend microservices with FastAPI and integrates APIs, databases, and cloud services.',
      'Develops AI agents for structured information extraction and operational processes.',
    ],
  },
  {
    role: 'Automation Developer & AI Advisor',
    company: 'National Police of Ecuador',
    period: 'Nov 2025 - Dec 2025',
    location: 'Ecuador',
    type: 'Temporary Contract',
    highlights: [
      'Designed and implemented automated workflows in n8n for institutional data extraction, transformation, and integration.',
      'Built AI agents for structured information extraction from legal documents with JSON outputs.',
      'Integrated APIs, databases, and cloud services to optimize operational processes.',
      'Delivered a technical training session on data automation and workflow design to National Police personnel.',
    ],
  },
  {
    role: 'Data Analyst Intern',
    company: 'Yachay Tech University, Directorate of Accreditation and Quality Assurance (DAAC)',
    period: 'Oct 2025 - Jan 2026',
    location: 'Quito, Ecuador',
    type: 'Pre-professional Internship',
    highlights: [
      'Developed and maintained interactive dashboards for academic and institutional quality indicators.',
      'Collected, cleaned, and analyzed data from multiple university departments.',
      'Automated reports and KPI tracking to support accreditation and decision-making.',
      'Presented analytical insights to academic and administrative authorities.',
    ],
  },
  {
    role: 'Information Technology Engineering',
    company: 'Yachay Tech University',
    period: '2021 - 2026',
    location: 'Ecuador',
    type: 'Education',
    highlights: [
      'Thesis: Hyperparameter optimization in RAG architectures and comparative analysis of orchestration frameworks (LangChain vs. n8n).',
    ],
  },
]

export const CERTS = [
  { title: 'Scrum Foundation Professional Certification', issuer: 'Agile / Scrum methodology · 2024', image: certImages.scrum },
  { title: 'Python and Artificial Intelligence', issuer: 'Samsung Innovation Campus · 200 hours · 2025', image: certImages.ia },
  { title: 'AI Agents Fundamentals', issuer: 'Hugging Face · Aug 2026', image: null },
  { title: 'Introduction to Model Context Protocol (MCP)', issuer: 'Anthropic · Sep 2026', image: null },
  { title: 'Claude Code in Action', issuer: 'Anthropic · Sep 2026', image: null },
]

export const CONTACT_NOTE =
  'Open to junior AI engineering and automation roles, collaborations, and interesting problems.'
