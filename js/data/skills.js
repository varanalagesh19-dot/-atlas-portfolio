/**
 * ATLAS — VERIFIED TECHNICAL SKILLS & REPOSITORY ATTRIBUTION
 * Strictly categorized into 4 verified domains:
 * 1. Programming Languages
 * 2. Web Development
 * 3. AI / Machine Learning
 * 4. Tools and Platforms
 * 
 * Backed by actual delivered repositories under @varanalagesh19-dot.
 * Zero invented percentages, vanity rankings, or unverified claims.
 */

export const SKILLS_CATEGORIES = {
  'languages': {
    id: 'languages',
    label: 'Programming',
    icon: '💻',
    desc: 'Core languages utilized for system algorithms, microservices, native Android, and client interfaces'
  },
  'web': {
    id: 'web',
    label: 'Web Development',
    icon: '🌐',
    desc: 'Modern web architectures, spatial Three.js WebGL scenes, responsive layouts, and procedural audio'
  },
  'ai': {
    id: 'ai',
    label: 'AI/ML',
    icon: '🧠',
    desc: 'Retrieval-Augmented Generation, Gemini multimodal vision, multi-model orchestration, and edge heuristics'
  },
  'tools': {
    id: 'tools',
    label: 'Developer Tools',
    icon: '🛠️',
    desc: 'Containerization, edge cloud deployment, version control, embedded hardware, and vector databases'
  }
};

export const SKILLS_DATA = [
  // 1. Programming Languages
  {
    id: 'skill-python',
    name: 'Python',
    icon: '🐍',
    color: '#D4FF3F',
    category: 'languages',
    categoryLabel: 'Programming Languages',
    desc: 'Applied for RAG pipelines, Streamlit interfaces, Flask microservices, and NVIDIA accelerated inference.',
    projects: ['IntelliPDF', 'atlasAI', 'nvidia-ai-chat']
  },
  {
    id: 'skill-kotlin',
    name: 'Kotlin & Android SDK',
    icon: '📱',
    color: '#D4FF3F',
    category: 'languages',
    categoryLabel: 'Programming Languages',
    desc: 'Native mobile engineering using Android ViewModels, background services, and on-device camera/vision APIs.',
    projects: ['NER ACCESS (SOLVEX 2.0)', 'LINKEDX']
  },
  {
    id: 'skill-js',
    name: 'JavaScript & Node.js',
    icon: '⚡',
    color: '#D4FF3F',
    category: 'languages',
    categoryLabel: 'Programming Languages',
    desc: 'Client-side SPA architecture, DOM manipulation, HTTP 206 Partial Content video streaming, and async APIs.',
    projects: ['ATLAS 3D Portfolio', 'NER ACCESS (SOLVEX 2.0)', 'Bumblebee Base Isolation']
  },
  {
    id: 'skill-cpp',
    name: 'C & Embedded Systems',
    icon: '🔌',
    color: '#D4FF3F',
    category: 'languages',
    categoryLabel: 'Programming Languages',
    desc: 'Microcontroller firmware, hardware sensor registers, ADC calibration, and low-latency solenoid valve actuation.',
    projects: ['Smart Agriculture & Conservation']
  },

  // 2. Web Development
  {
    id: 'skill-html-css',
    name: 'HTML5 & Modern CSS',
    icon: '🎨',
    color: '#CBB3E8',
    category: 'web',
    categoryLabel: 'Web Development',
    desc: 'Semantic architecture, Space Grotesk/Inter typography, responsive grid/flexbox, custom properties, and WCAG AA accessibility.',
    projects: ['ATLAS 3D Portfolio', 'Bumblebee Base Isolation', 'atlasAI']
  },
  {
    id: 'skill-spa',
    name: 'Client-Side SPA Architecture',
    icon: '🏛️',
    color: '#CBB3E8',
    category: 'web',
    categoryLabel: 'Web Development',
    desc: 'History API pushState router, dynamic view rendering, zero layout shift (CLS), and deep-link handling without server roundtrips.',
    projects: ['ATLAS 3D Portfolio']
  },
  {
    id: 'skill-threejs',
    name: 'Three.js & WebGL 3D Graphics',
    icon: '💎',
    color: '#CBB3E8',
    category: 'web',
    categoryLabel: 'Web Development',
    desc: 'Interactive 3D geometric meshes, custom GLSL shaders, specular lighting materials, and render-loop throttling.',
    projects: ['ATLAS 3D Portfolio']
  },
  {
    id: 'skill-webaudio',
    name: 'Web Audio API Procedural Synthesis',
    icon: '🔊',
    color: '#CBB3E8',
    category: 'web',
    categoryLabel: 'Web Development',
    desc: 'Client-side harmonic oscillator synthesis, procedural chime sound effects, and volume gain ramping without external audio files.',
    projects: ['ATLAS 3D Portfolio']
  },

  // 3. AI / Machine Learning
  {
    id: 'skill-rag',
    name: 'Retrieval-Augmented Generation (RAG)',
    icon: '🧠',
    color: '#D4AF37',
    category: 'ai',
    categoryLabel: 'AI / Machine Learning',
    desc: 'Semantic document chunking, vector embeddings, similarity retrieval, and zero-hallucination page citation binding.',
    projects: ['IntelliPDF']
  },
  {
    id: 'skill-gemini',
    name: 'Google Gemini Vision & Multimodal AI',
    icon: '👁️',
    color: '#D4AF37',
    category: 'ai',
    categoryLabel: 'AI / Machine Learning',
    desc: 'Deconstructing technical diagrams and UI screenshots into semantic entities to synthesize context-aware structured content.',
    projects: ['LINKEDX', 'NER ACCESS (SOLVEX 2.0)']
  },
  {
    id: 'skill-multi-model',
    name: 'Multi-Model LLM Orchestration',
    icon: '🎛️',
    color: '#D4AF37',
    category: 'ai',
    categoryLabel: 'AI / Machine Learning',
    desc: 'Provider proxy architecture normalizing API requests across OpenAI GPT-4, Google Gemini, and Anthropic Claude.',
    projects: ['atlasAI']
  },
  {
    id: 'skill-nvidia',
    name: 'NVIDIA NIM & Inference Acceleration',
    icon: '🚀',
    color: '#D4AF37',
    category: 'ai',
    categoryLabel: 'AI / Machine Learning',
    desc: 'Leveraging NVIDIA accelerated microservices, Tensor Core utilization, and token throughput benchmark monitoring.',
    projects: ['nvidia-ai-chat']
  },
  {
    id: 'skill-heuristics',
    name: 'Offline-First Heuristics & A* Routing',
    icon: '🗺️',
    color: '#D4AF37',
    category: 'ai',
    categoryLabel: 'AI / Machine Learning',
    desc: 'Topological graph pathfinding, elevation incline weighting, terrain friction penalties, and emergency SOS broadcasting.',
    projects: ['NER ACCESS (SOLVEX 2.0)']
  },

  // 4. Tools and Platforms
  {
    id: 'skill-docker',
    name: 'Docker & Containerization',
    icon: '🐳',
    color: '#A5A19A',
    category: 'tools',
    categoryLabel: 'Tools and Platforms',
    desc: 'Containerizing Python and Streamlit applications into reproducible images with isolated dependencies and port mapping.',
    projects: ['IntelliPDF']
  },
  {
    id: 'skill-git',
    name: 'Git & GitHub Project Management',
    icon: '🐙',
    color: '#A5A19A',
    category: 'tools',
    categoryLabel: 'Tools and Platforms',
    desc: 'Version control, multi-branch collaboration, release tagging, and automated continuous deployment workflows.',
    projects: ['All 8 Verified Repositories']
  },
  {
    id: 'skill-vercel',
    name: 'Vercel Serverless Deployment',
    icon: '▲',
    color: '#A5A19A',
    category: 'tools',
    categoryLabel: 'Tools and Platforms',
    desc: 'Deploying client-side engineering simulations to edge CDN nodes with fast global distribution and SSL provisioning.',
    projects: ['Bumblebee Base Isolation']
  },
  {
    id: 'skill-sqlite-chroma',
    name: 'SQLite & ChromaDB Vector Stores',
    icon: '💾',
    color: '#A5A19A',
    category: 'tools',
    categoryLabel: 'Tools and Platforms',
    desc: 'Offline relational data persistence, dense vector embeddings indexing, and client-side browser caching mechanisms.',
    projects: ['IntelliPDF', 'NER ACCESS (SOLVEX 2.0)', 'atlasAI']
  },
  {
    id: 'skill-iot',
    name: 'IoT Sensor Networks & Hardware Actuation',
    icon: '🌱',
    color: '#A5A19A',
    category: 'tools',
    categoryLabel: 'Tools and Platforms',
    desc: 'Hygrometer and soil moisture sensor reading, threshold trigger evaluation with hysteresis filtering, and valve relay switching.',
    projects: ['Smart Agriculture & Conservation']
  }
];

/**
 * ATLAS — CREATIVE SKILLS & PERSONAL INTERESTS
 * Genuine personal pursuits, creative mediums, and strategic interests.
 * Kept completely distinct from technical competencies.
 * Zero invented ratings, fake certifications, or exaggerated proficiency.
 */
export const CREATIVE_INTERESTS_DATA = [
  {
    id: 'interest-photography',
    name: 'Photography',
    icon: '📷',
    category: 'Creative Interest',
    typeBadge: 'Photography',
    badgeClass: 'badge-photography',
    desc: 'Exploring composition, natural lighting, shadow contrast, and visual storytelling across everyday streetscapes and architectural forms.',
    focusAreas: ['Composition', 'Natural Light', 'Visual Storytelling', 'Street Perspectives'],
    note: 'A creative medium for observant seeing and moment capture.'
  },
  {
    id: 'interest-wildlife',
    name: 'Wildlife Photography',
    icon: '🦌',
    category: 'Creative Interest',
    typeBadge: 'Photography',
    badgeClass: 'badge-photography',
    desc: 'An appreciation for the natural world and animal behavior. Grounded in patience, stillness, and observing wildlife respectfully without disrupting habitats.',
    focusAreas: ['Animal Behavior', 'Natural Habitats', 'Patience & Fieldcraft', 'Conservation Respect'],
    note: 'Pursued with deep respect for natural ecosystems and ethical observation.'
  },
  {
    id: 'interest-videography',
    name: 'Videography',
    icon: '🎥',
    category: 'Creative Interest',
    typeBadge: 'Film',
    badgeClass: 'badge-film',
    desc: 'Visual storytelling through intentional camera movement, cinematic b-roll framing, sequence pacing, and rhythmic editing.',
    focusAreas: ['Cinematic Framing', 'Camera Movement', 'Sequence Pacing', 'Rhythmic Editing'],
    note: 'Visual narrative medium exploring movement, tempo, and atmosphere.'
  },
  {
    id: 'interest-drawing',
    name: 'Drawing & Sketching',
    icon: '✏️',
    category: 'Creative Interest',
    typeBadge: 'Art',
    badgeClass: 'badge-art',
    desc: 'Creative expression through graphite and ink sketches. Used for observation, perspective studies, and visualizing abstract concepts by hand.',
    focusAreas: ['Freehand Sketching', 'Perspective Studies', 'Visual Ideation', 'Creative Expression'],
    note: 'An analog sandbox for visual imagination and spatial thinking.'
  },
  {
    id: 'interest-chess',
    name: 'Chess',
    icon: '♟️',
    category: 'Strategy-Based Interest',
    typeBadge: 'Strategy',
    badgeClass: 'badge-strategy',
    desc: 'A strategy-based personal interest focused on quiet concentration, calculating tactical lines, positional structure, and problem-solving under pressure.',
    focusAreas: ['Tactical Patterns', 'Forward Calculation', 'Positional Play', 'Endgame Strategy'],
    note: 'Strategic game enjoyed for mental discipline and rigorous foresight.'
  },
  {
    id: 'interest-comics',
    name: 'Marvel Comics & Avengers Lore',
    icon: '⚡',
    category: 'Reading & Narrative Interest',
    typeBadge: 'Comics & Lore',
    badgeClass: 'badge-comics',
    desc: 'An avid reader of Marvel comic books, especially Avengers storylines, multi-character team dynamics, and expansive fictional multiverse lore.',
    focusAreas: ['Avengers Story Arcs', 'Multiverse Lore', 'Character Arcs', 'Graphic Worldbuilding'],
    note: 'Personal reading hobby centered on narrative worldbuilding and graphic literature.'
  }
];
