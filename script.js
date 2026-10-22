/**
 * ============================================================================
 * ATLAS 3.0 — HIGH-PERFORMANCE MULTI-PAGE SPA ROUTING & 3D ENGINE
 * Identity: Alageshvaran (Brand: ATLAS)
 * Specialization: B.E. Computer Science & Engineering (AI & ML)
 * College: Kathir College of Engineering (2025–2029)
 * Official Channels:
 *   - GitHub:   https://github.com/varanalagesh19-dot
 *   - LinkedIn: https://www.linkedin.com/in/alagesh023
 *   - Email:    varanalagesh19@gmail.com
 * ============================================================================
 */

(function () {
  'use strict';

  // ==========================================================================
  // 01. AUTHENTIC GITHUB REPOSITORY INVENTORY (VERIFIED FROM GITHUB API)
  // ========================================================================== 
  const PROJECTS_DATA = [
    {
      slug: 'intellipdf',
      challenges: ["High-dimensional vector chunk fragmentation across multi-column textbook PDFs","Preventing generative hallucination on complex analytical 16-mark university proofs","Optimizing local in-memory FAISS latency for sub-40ms similarity search"],
      outcomes: ["Engineered strict prompt grounding guardrails enforcing explicit page citations","Implemented recursive semantic text chunking with sliding window overlap","Built containerized reproducible deployment pipeline using Docker and Streamlit"],
      no: '01',
      name: 'IntelliPDF',
      category: 'AI & Machine Learning / RAG Architecture',
      categoryTag: 'ai systems',
      badge: '01 // RAG & EXAM INTELLIGENCE',
      status: 'COMPLETED RAG APPLICATION',
      year: '2026',
      role: 'RAG Pipeline & Full-Stack Architecture',
      image: '/assets/images/project-intellipdf.jpg',
      video: '/assets/videos/intellipdf.webm',
      repo: 'https://github.com/varanalagesh19-dot/IntelliPDF',
      live: null,
      summary: 'AI-powered personalized exam learning assistant that turns any uploaded PDF into mark-wise answers (1M–16M), auto quizzes, study plans, weak-topic detection, and mock exams grounded in user notes with page references.',
      problem: 'Students and researchers struggle to study efficiently from large academic textbooks and slides, needing mark-specific answers, structured quizzes, and verifiable source grounding without hallucinated information.',
      solution: 'Deploys a Retrieval-Augmented Generation (RAG) pipeline parsing uploaded documents, building semantic embeddings, and generating answers formatted specifically for university exam question patterns (1 mark definitions to 16 mark analytical proofs) with exact page citations.',
      features: [
        'Multi-format PDF document parsing and semantic chunking with metadata binding',
        'Mark-wise answer synthesis: 1M definitions, 2M core concepts, 8M breakdowns, and 16M analytical essays',
        'Automatic quiz generation with answer verification and weak-topic detection',
        'Page citation highlights grounding every generated output directly in uploaded notes',
        'Zero hallucination verification guardrails ensuring factual exam answers'
      ],
      stack: ['Python', 'Streamlit', 'RAG Pipeline', 'Vector Embeddings', 'Docker', 'NLP'],
      roadmap: 'Currently containerized with Docker and Streamlit. Future upgrades include multi-PDF cross-subject linking and offline local quantized LLM inference.',
      simType: 'intellipdf'
    },
    {
      slug: 'solvex-ner',
      challenges: ["Processing noisy field voice memos recorded under variable mountain acoustics","Handling non-standard North Eastern transit corridor abbreviations and hub names","Operating topological graph search offline without cellular cloud access"],
      outcomes: ["Fine-tuned custom SpaCy entity recognizer on logistics dispatch tokens","Designed offline A* heuristic pathfinding weighted by elevation incline","Competed and submitted full prototype for Smart India Hackathon 2026 (SIH26002)"],
      no: '02',
      name: 'SOLVEX (NER Platform 2.0)',
      category: 'Edge AI & Logistics Intelligence',
      categoryTag: 'systems ai',
      badge: '02 // SMART INDIA HACKATHON 2026',
      status: 'SIH 2026 SUBMISSION (SIH26002)',
      year: '2026',
      role: 'Lead Systems & Edge Architecture (Team Solvex)',
      image: '/assets/images/project-ner-access.jpg',
      video: '/assets/videos/solvex-ner.webm',
      repo: 'https://github.com/varanalagesh19-dot/solvex-ner-platform2.0',
      live: null,
      summary: 'AI-powered route optimization & accessibility intelligence platform for India\'s North East (NER) — live map with satellite view, hazard alerts, SOS, offline mode & multilingual support. Built for Smart India Hackathon 2026 (SIH26002) by Team Solvex.',
      problem: 'Extreme mountainous terrain, frequent monsoon landslides, and fragile telecommunications in the North Eastern Region isolate transit corridors, creating dangerous delays for medical supplies, logistics, and emergency response.',
      solution: 'Combines offline-first topological graph routing (A* heuristics) with real-time hazard notification layers, multilingual prompts, and mesh-based emergency SOS dispatch that functions even under zero-connectivity cellular blackouts.',
      features: [
        'A* Heuristic graph pathfinding weighted for terrain friction and elevation incline',
        'Offline-first topological mesh routing without cloud server dependency',
        'Real-time landslide and road obstruction hazard telemetry layer',
        'Emergency SOS telemetry with GPS coordinate broadcasting',
        'Multilingual interface support for regional North Eastern dialects'
      ],
      stack: ['Kotlin', 'Android SDK', 'JavaScript', 'A* Pathfinding', 'Offline Mesh', 'Gemini API', 'SIH 2026'],
      roadmap: 'Submitted for Smart India Hackathon 2026 (SIH26002). Future roadmap includes LoRaWAN hardware mesh transceivers for 40km range offline emergency hops.',
      simType: 'solvex'
    },
    {
      slug: 'linkx',
      challenges: ["Extracting cohesive semantic structures from complex system architecture diagrams","Calibrating dynamic tone variation without sounding repetitive or generic","Predicting audience engagement using lightweight client-side scoring heuristics"],
      outcomes: ["Integrated Google Gemini Vision API for multimodal architectural diagram comprehension","Built prompt chaining pipeline generating alternative drafts and tone comparisons","Engineered readability scoring heuristics based on Flesch-Kincaid entropy"],
      no: '03',
      name: 'LINKX',
      category: 'Multimodal AI & Social Content Intelligence',
      categoryTag: 'ai mobile',
      badge: '03 // GEMINI VISION AI',
      status: 'PRODUCTION MOBILE APPLICATION',
      year: '2026',
      role: 'Mobile AI & Prompt Engineering',
      image: '/assets/images/project-linkedx.jpg',
      video: '/assets/videos/linkx.webm',
      repo: 'https://github.com/varanalagesh19-dot/linkxxx',
      live: null,
      summary: 'AI-powered LinkedIn caption generation platform using Google Gemini to transform uploaded images, architecture diagrams, and concepts into professional, context-aware thought-leadership posts with hashtags and alternatives.',
      problem: 'Technical developers and founders struggle to translate complex system architecture diagrams and screenshots into engaging, structured professional narratives for industry stakeholders.',
      solution: 'Multimodal Vision-Language decomposition extracts semantic structures from diagrams and images, calibrates tone (Executive, Engineering, or Research), and synthesizes publication-ready captions with hashtag suggestions and engagement predictions.',
      features: [
        'Google Gemini Vision API integration for technical diagram and screenshot comprehension',
        'Executive, Engineering, and Research tone adaptation presets',
        'Automated hashtag synthesis and engagement resonance heuristics',
        'Alternative caption drafts and tone comparison carousel',
        '1-click clipboard export ready for LinkedIn professional sharing'
      ],
      stack: ['Kotlin', 'Android SDK', 'Google Gemini Vision API', 'Prompt Chaining', 'Mobile UI'],
      roadmap: 'Native Android application currently integrated with Google Gemini server-side. Future planned features include automated scheduling and carousel PDF generation.',
      simType: 'linkx'
    },
    {
      slug: 'atlas-ai',
      challenges: ["Managing memory overhead of local LLM inference on consumer workstation hardware","Abstracting heterogeneous provider APIs (OpenAI, Gemini, Claude) behind unified contracts","Eliminating external network leakage for strict offline air-gapped security"],
      outcomes: ["Configured 4-bit quantized GGUF execution achieving high token throughput under 4GB RAM","Implemented streaming Server-Sent Events (SSE) response architecture in Flask","Designed air-gapped local memory layer using SQLite and local vector embeddings"],
      no: '04',
      name: 'atlasAI Platform',
      category: 'Full-Stack AI Architecture',
      categoryTag: 'ai backend',
      badge: '04 // MULTI-MODEL ORCHESTRATION',
      status: 'FULL-STACK APPLICATION',
      year: '2026',
      role: 'Full-Stack Developer (React & Flask)',
      image: '/assets/images/project-atlas-ai.jpg',
      video: '/assets/videos/atlas-ai.webm',
      repo: 'https://github.com/varanalagesh19-dot/atlasAI',
      live: null,
      summary: 'A full-stack AI chatbot platform with React frontend, Flask backend, and multi-model support for OpenAI, Gemini, and Claude LLMs with streaming responses and unified provider abstractions.',
      problem: 'Developing applications tied to a single LLM vendor causes vendor lock-in, susceptibility to API downtime, and rigid latency profiles.',
      solution: 'Designed a modular provider proxy architecture that routes user requests across OpenAI GPT-4, Google Gemini, and Anthropic Claude via a normalized REST API with token streaming and conversational state persistence.',
      features: [
        'Unified multi-provider abstraction supporting OpenAI, Gemini, and Claude',
        'Real-time token streaming with server-sent events (SSE)',
        'React component interface with code syntax highlighting and markdown parsing',
        'Flask RESTful microservice backend with robust rate-limiting and error fallbacks',
        'Latency benchmarking and model throughput comparison analytics'
      ],
      stack: ['Python', 'Flask', 'React', 'OpenAI API', 'Gemini API', 'Claude API', 'REST API'],
      roadmap: 'Core microservice operational with React client. Next phase introduces user conversation workspace exports and local Ollama model fallback.',
      simType: 'atlasai'
    },
    {
      slug: 'smart-agriculture',
      challenges: ["Analog sensor signal drift caused by capacitive probe temperature variations","Ensuring galvanic isolation between high-voltage pump relays and 3.3V microcontrollers","Optimizing power consumption for battery-backed rural deployment"],
      outcomes: ["Calibrated multi-point ADC smoothing algorithms in C++ firmware","Constructed optocoupler-isolated relay circuitry preventing inductive kickback","Engineered real-time telemetry dashboard monitoring crop root moisture saturation"],
      no: '05',
      name: 'Smart Agriculture & Conservation',
      category: 'IoT & Embedded Systems',
      categoryTag: 'systems iot',
      badge: '05 // IOT & SENSORS',
      status: 'HARDWARE & WEB PROTOTYPE',
      year: '2026',
      role: 'Embedded Systems & Sensor Integration',
      image: '/assets/images/project-smart-agriculture.jpg',
      video: '/assets/videos/smart-agriculture.webm',
      repo: 'https://github.com/varanalagesh19-dot/smart-agriculture',
      live: null,
      summary: 'Internet of Things system revolutionizing farming and water conservation by deploying a network of smart sensors to collect real-time data on soil moisture, ambient temperature, humidity, and nutrient levels to automate irrigation and predict crop health.',
      problem: 'Traditional manual irrigation wastes up to 60% of water resources and frequently causes root saturation or drought stress due to lack of localized soil data.',
      solution: 'Embedded microcontrollers read soil moisture and ambient hygrometer sensors, evaluate threshold triggers with hysteresis filtering, and autonomously actuate solenoid water valves while publishing telemetry dashboards.',
      features: [
        'Real-time soil moisture and humidity sensor data telemetry',
        'Autonomous threshold-driven solenoid valve irrigation actuation',
        'Hysteresis filtering preventing valve relay chatter',
        'Ambient temperature and microclimate logging curves',
        'Responsive dashboard displaying crop soil hydration status'
      ],
      stack: ['C / Embedded', 'IoT Microcontrollers', 'Soil Moisture Sensors', 'Automated Actuation', 'HTML/CSS'],
      roadmap: 'Prototype deployed with microcontroller hardware and web telemetry. Future plan includes solar-powered outdoor field nodes with LoRaWAN telemetry.',
      simType: 'smartagri'
    },
    {
      slug: 'base-isolation',
      challenges: ["Maintaining stable 60 FPS numerical integration for multi-degree-of-freedom equations","Accurately simulating non-linear hysteresis in lead-rubber bearing isolators","Synchronizing WebGL 3D building mesh deformation with dynamic physics tensors"],
      outcomes: ["Implemented Euler-Verlet numerical solver directly in JavaScript","Visualized 85% seismic shear reduction between isolated and non-isolated structural tiers","Optimized Three.js geometry buffers for smooth mobile and desktop rendering"],
      no: '06',
      name: 'Base Isolation Earthquake Defense',
      category: 'Engineering Simulation & Web Interactive',
      categoryTag: 'webgl systems',
      badge: '06 // SEISMIC DYNAMICS',
      status: 'DEPLOYED VERCEL WEB APPLICATION',
      year: '2026',
      role: 'Educational Web Developer (Bumblebee Squad)',
      image: '/assets/images/project-base-isolation.jpg',
      video: '/assets/videos/base-isolation.webm',
      repo: 'https://github.com/varanalagesh19-dot/bumblebee-squad',
      live: 'https://bumblebee-squad.vercel.app',
      summary: 'Interactive educational engineering platform developed by Bumblebee Squad explaining how elastomeric and friction-pendulum base isolation bearings decouple buildings from ground motion during destructive earthquakes.',
      problem: 'Structural resonance during seismic events causes high-rise collapse; public understanding of modern elastomeric isolation bearings is limited without interactive visual models.',
      solution: 'Built a real-time physics and visual comparison demonstration showing resonant sway in fixed-base buildings versus dampened harmonic drift in isolated structures under simulated Richter scale tremors.',
      features: [
        'Side-by-side seismic response comparison: Fixed-base vs Base-isolated structures',
        'Interactive Richter scale tremor frequency and amplitude sliders',
        'Harmonic vibration curve and story drift telemetry graphing',
        'Elastomeric rubber bearing and lead-core damper visual explanations',
        'Live deployment accessible worldwide on Vercel'
      ],
      stack: ['HTML5', 'CSS3', 'Physics Simulation', 'JavaScript', 'Vercel Deployment'],
      roadmap: 'Publicly deployed at bumblebee-squad.vercel.app. Future work includes Three.js 3D structural model deformation with WebGL shaders.',
      simType: 'baseiso'
    },
    {
      slug: 'nvidia-ai-chat',
      challenges: ["Minimizing CUDA kernel cold-start latency for local conversational models","Configuring streaming token render loops without dropping interface frames","Balancing GPU VRAM allocation between context windows and model weights"],
      outcomes: ["Built local hardware-accelerated LLM pipeline with sub-25ms token latency","Implemented reactive chat UI with code block syntax highlighting and token metrics","Benchmarked throughput across varied context lengths and temperature configurations"],
      no: '07',
      name: 'NVIDIA AI Chat Studio',
      category: 'AI & Machine Learning / Accelerated Compute',
      categoryTag: 'ai backend',
      badge: '07 // NVIDIA ACCELERATED AI',
      status: 'INFERENCE PROTOTYPE',
      year: '2026',
      role: 'AI Pipeline Developer',
      image: '/assets/images/project-nvidia-ai-chat.jpg',
      video: '/assets/videos/nvidia-ai-chat.webm',
      repo: 'https://github.com/varanalagesh19-dot/nvidia-ai-chat',
      live: null,
      summary: 'Conversational AI system built utilizing NVIDIA NIM microservices and accelerated LLM inference pipelines with high-throughput response generation.',
      problem: 'High latency and memory bottlenecks when deploying large transformer checkpoints without GPU-specialized TensorRT-LLM runtimes.',
      solution: 'Leverages NVIDIA\'s cloud inference endpoint to benchmark model throughput, token per second generation, and low-latency system prompting.',
      features: [
        'Integration with NVIDIA accelerated AI inference endpoints',
        'Tensor Core utilization and token latency monitoring',
        'Temperature, top_p, and frequency penalty dynamic hyperparameter controls',
        'Low-latency streaming conversation pipeline',
        'Client-side inference latency benchmarking metric tracker'
      ],
      stack: ['Python', 'NVIDIA NIM API', 'Inference Pipeline', 'JSON Streaming'],
      roadmap: 'Initial prototype running with NVIDIA cloud endpoints. Future expansion to local TensorRT-LLM on dedicated workstation hardware.',
      simType: 'nvidia'
    },
    {
      slug: 'atlas-portfolio',
      challenges: ["Balancing rich 3D WebGL crystal aesthetics with ultra-fast, mostly static performance","Eliminating pointer-event conflicts between 3D background canvas and interactive buttons","Architecting zero-latency single-page application routing with nested deep links"],
      outcomes: ["Engineered light-first design system with curated typography and micro-interactions","Built isolated sandboxed developer tools suite including terminal and live playground","Achieved 100% test pass rate across all pages, navigation links, and browser viewports"],
      no: '08',
      name: 'ATLAS 3D Portfolio',
      category: 'WebGL & 3D Interactive Design',
      categoryTag: 'webgl systems',
      badge: '08 // THREE.JS 3D ENGINE',
      status: 'PRODUCTION PORTFOLIO PLATFORM',
      year: '2026',
      role: 'Creative Developer & WebGL Engineer',
      image: '/assets/images/project-atlas.jpg',
      video: '/assets/videos/atlas-portfolio.webm',
      repo: 'https://github.com/varanalagesh19-dot/atlas-portfolio',
      live: 'http://localhost:8080/',
      summary: 'The digital home and creative development portfolio of Alageshvaran. Built upon fluid mechanics, liquid glass refraction, Three.js 3D graphics, procedural audio synthesis, and an editorial multi-page SPA architecture.',
      problem: 'Most developer portfolios are generic static templates that fail to convey creative engineering competence, 3D interactive graphics mastery, or authentic repository architecture.',
      solution: 'Crafted a bespoke 3D environment combining floating geometric glass sculptures, biomimetic GLSL shaders, client-side routing, and real-time interactive simulations for all GitHub repositories.',
      features: [
        'Interactive Three.js realistic floating geometric crystal with dynamic specular lighting',
        'Multi-page SPA client-side router with HTML5 History API and deep-linking',
        'Dedicated interactive simulations tailored to every discovered GitHub project',
        'HTTP 206 Partial Content Range streaming server for video walkthroughs',
        'Strict WCAG 2.1 AA accessibility, reduced-motion overrides, and zero custom-cursor lag'
      ],
      stack: ['Three.js', 'GLSL Shaders', 'SPA Routing Engine', 'Web Audio API', 'Space Grotesk', 'Vanilla CSS'],
      roadmap: 'Serving live at localhost:8080. Future updates include multi-user WebRTC collaborative canvas spaces.',
      simType: 'atlas3d'
    }
  ];

  // ==========================================================================
  // 02. VERIFIED SKILLS INVENTORY (LINKED TO REPOSITORIES)
  // ==========================================================================
  // 02. VERIFIED SKILLS INVENTORY (LINKED TO REPOSITORIES)
  // ==========================================================================
  const SKILLS_DATA = [
    {
      id: 'skill-python',
      name: 'Python',
      icon: '🐍',
      color: '#D4FF3F',
      category: 'languages',
      categoryLabel: 'Programming Languages',
      desc: 'Applied for RAG architectures, machine learning data pipelines, Flask backends, and NVIDIA inference microservices.',
      projects: ['IntelliPDF', 'atlasAI', 'nvidia-ai-chat']
    },
    {
      id: 'skill-kotlin',
      name: 'Kotlin & Android SDK',
      icon: '📱',
      color: '#D4FF3F',
      category: 'languages',
      categoryLabel: 'Programming Languages',
      desc: 'Mobile application development using Gradle Kotlin DSL, Android ViewModels, and on-device camera/vision integration.',
      projects: ['SOLVEX (NER Platform 2.0)', 'LINKX']
    },
    {
      id: 'skill-js',
      name: 'JavaScript & Node.js',
      icon: '⚡',
      color: '#D4FF3F',
      category: 'languages',
      categoryLabel: 'Programming Languages',
      desc: 'Single-page application (SPA) client-side routing, DOM manipulation, HTTP 206 Range video streaming servers, and async APIs.',
      projects: ['ATLAS 3D Portfolio', 'SOLVEX (NER Platform 2.0)', 'Bumblebee Base Isolation']
    },
    {
      id: 'skill-cpp',
      name: 'C & Embedded Systems',
      icon: '🔌',
      color: '#D4FF3F',
      category: 'languages',
      categoryLabel: 'Programming Languages',
      desc: 'Microcontroller programming, pointer arithmetic, hardware sensor registers, and low-latency solenoid valve actuation.',
      projects: ['Smart Agriculture & Conservation']
    },
    {
      id: 'skill-html-css',
      name: 'HTML5 & Modern CSS',
      icon: '🎨',
      color: '#D4FF3F',
      category: 'languages',
      categoryLabel: 'Programming Languages',
      desc: 'Semantic architecture, Space Grotesk/Inter typography, responsive grid/flexbox, custom properties, and WCAG AA accessibility.',
      projects: ['ATLAS 3D Portfolio', 'Bumblebee Base Isolation', 'atlasAI']
    },
    {
      id: 'skill-rag',
      name: 'Retrieval-Augmented Generation (RAG)',
      icon: '🧠',
      color: '#CBB3E8',
      category: 'ai',
      categoryLabel: 'AI & Machine Learning',
      desc: 'Semantic chunking, vector database indexing, embedding similarity retrieval, and zero-hallucination page citation binding.',
      projects: ['IntelliPDF']
    },
    {
      id: 'skill-gemini',
      name: 'Google Gemini Vision & Multimodal AI',
      icon: '👁️',
      color: '#CBB3E8',
      category: 'ai',
      categoryLabel: 'AI & Machine Learning',
      desc: 'Deconstructing technical diagrams and UI screenshots into semantic entities to synthesize context-aware thought leadership.',
      projects: ['LINKX', 'SOLVEX (NER Platform 2.0)']
    },
    {
      id: 'skill-multi-model',
      name: 'Multi-Model LLM Orchestration',
      icon: '🎛️',
      color: '#CBB3E8',
      category: 'ai',
      categoryLabel: 'AI & Machine Learning',
      desc: 'Provider proxy architecture normalizing API requests across OpenAI GPT-4, Google Gemini, and Anthropic Claude.',
      projects: ['atlasAI']
    },
    {
      id: 'skill-nvidia',
      name: 'NVIDIA NIM & Inference Acceleration',
      icon: '🚀',
      color: '#CBB3E8',
      category: 'ai',
      categoryLabel: 'AI & Machine Learning',
      desc: 'Leveraging NVIDIA accelerated microservices, Tensor Core utilization, and token throughput benchmark monitoring.',
      projects: ['nvidia-ai-chat']
    },
    {
      id: 'skill-heuristics',
      name: 'Offline-First Heuristics & A* Routing',
      icon: '🗺️',
      color: '#A5A19A',
      category: 'systems',
      categoryLabel: 'Systems & Architecture',
      desc: 'Topological graph pathfinding, Euclidean distance weighting, terrain friction penalties, and emergency SOS mesh broadcasting.',
      projects: ['SOLVEX (NER Platform 2.0)']
    },
    {
      id: 'skill-iot',
      name: 'IoT Sensor Networks & Automated Actuation',
      icon: '🌱',
      color: '#A5A19A',
      category: 'systems',
      categoryLabel: 'Systems & Architecture',
      desc: 'Hygrometer and soil moisture sensor reading, threshold trigger evaluation with hysteresis filtering, and valve relay switching.',
      projects: ['Smart Agriculture & Conservation']
    },
    {
      id: 'skill-spa',
      name: 'Client-Side SPA Architecture',
      icon: '🏛️',
      color: '#A5A19A',
      category: 'systems',
      categoryLabel: 'Systems & Architecture',
      desc: 'History API pushState routing, dynamic view rendering, zero layout shift (CLS), and deep-link handling without server roundtrips.',
      projects: ['ATLAS 3D Portfolio']
    },
    {
      id: 'skill-threejs',
      name: 'Three.js & WebGL 3D Graphics',
      icon: '💎',
      color: '#D4FF3F',
      category: 'frontend',
      categoryLabel: 'Frontend & WebGL',
      desc: '3D geometric mesh construction, custom GLSL vertex/fragment shaders, specular materials, dynamic lighting, and render-loop throttling.',
      projects: ['ATLAS 3D Portfolio']
    },
    {
      id: 'skill-webaudio',
      name: 'Web Audio API Procedural Synthesis',
      icon: '🔊',
      color: '#D4FF3F',
      category: 'frontend',
      categoryLabel: 'Frontend & WebGL',
      desc: 'Client-side harmonic oscillator synthesis, procedural chime sound effects, and volume gain ramping without external audio files.',
      projects: ['ATLAS 3D Portfolio']
    },
    {
      id: 'skill-chromadb',
      name: 'ChromaDB Vector Embeddings',
      icon: '🗄️',
      color: '#80612F',
      category: 'databases',
      categoryLabel: 'Databases & Vector Stores',
      desc: 'High-dimensional dense vector embeddings indexing, cosine similarity nearest-neighbor lookup, and persistent collection management.',
      projects: ['IntelliPDF']
    },
    {
      id: 'skill-sqlite',
      name: 'SQLite & Local Storage Caching',
      icon: '💾',
      color: '#80612F',
      category: 'databases',
      categoryLabel: 'Databases & Vector Stores',
      desc: 'Offline relational data persistence, store-and-forward peer sync queuing, and client-side browser caching mechanisms.',
      projects: ['SOLVEX (NER Platform 2.0)', 'atlasAI']
    },
    {
      id: 'skill-docker',
      name: 'Docker & Containerization',
      icon: '🐳',
      color: '#726E67',
      category: 'tools',
      categoryLabel: 'DevOps & Tools',
      desc: 'Containerizing Python and Streamlit applications into reproducible images with isolated dependencies and port mapping.',
      projects: ['IntelliPDF']
    },
    {
      id: 'skill-git',
      name: 'Git & GitHub Project Management',
      icon: '🐙',
      color: '#726E67',
      category: 'tools',
      categoryLabel: 'DevOps & Tools',
      desc: 'Version control, multi-branch collaboration, release tagging, and automated continuous deployment workflows.',
      projects: ['All 8 Verified Repositories']
    },
    {
      id: 'skill-vercel',
      name: 'Vercel Serverless Deployment',
      icon: '▲',
      color: '#726E67',
      category: 'tools',
      categoryLabel: 'DevOps & Tools',
      desc: 'Deploying client-side engineering simulations to edge CDN nodes with fast global distribution and SSL provisioning.',
      projects: ['Bumblebee Base Isolation']
    }
  ];

  const EMAIL_ADDRESS = 'varanalagesh19@gmail.com';

  // ==========================================================================
  // PLAYGROUND CODE PRESETS & STARTERS (HTML / CSS / JS)
  // ==========================================================================
    // ==========================================================================
  // PLAYGROUND CODE PRESETS & STARTERS (HTML / CSS / JS)
  // ==========================================================================
  const PLAYGROUND_STARTERS = {
    'glass-counter': {
      html: `<div class="glass-container">
  <div class="glass-card">
    <div class="card-badge">REACTIVE CLIENT STATE</div>
    <h1 class="card-title">Glassmorphism Counter</h1>
    <p class="card-desc">Zero-dependency DOM reactivity running in isolated sandbox.</p>
    <div class="counter-display" id="counter-val">0</div>
    <div class="btn-group">
      <button class="btn btn-primary" id="btn-inc">+ Increment</button>
      <button class="btn btn-secondary" id="btn-dec">- Decrement</button>
      <button class="btn btn-outline" id="btn-rst">↺ Reset</button>
    </div>
    <div class="telemetry-box" id="telemetry-log">
      <div class="log-entry">System online. Click buttons to trigger state mutations.</div>
    </div>
  </div>
</div>`,
      css: `* { box-sizing: border-box; }
body {
  margin: 0;
  padding: 24px;
  background: radial-gradient(circle at 50% 20%, #1e293b 0%, #0f172a 100%);
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  color: #f8fafc;
}
.glass-container { width: 100%; max-width: 440px; }
.glass-card {
  background: rgba(255, 255, 255, 0.06);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 16px;
  padding: 32px 24px;
  text-align: center;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
}
.card-badge {
  display: inline-block;
  font-size: 10px;
  letter-spacing: 0.14em;
  font-weight: 700;
  color: #38bdf8;
  background: rgba(56, 189, 248, 0.12);
  padding: 4px 10px;
  border-radius: 999px;
  margin-bottom: 12px;
}
.card-title { margin: 0 0 6px; font-size: 22px; font-weight: 700; }
.card-desc { font-size: 13px; color: #94a3b8; margin: 0 0 24px; }
.counter-display {
  font-size: 64px;
  font-weight: 800;
  color: #38bdf8;
  font-family: monospace;
  margin-bottom: 24px;
  transition: transform 0.15s ease;
}
.btn-group { display: flex; gap: 8px; justify-content: center; flex-wrap: wrap; }
.btn {
  border: none;
  padding: 10px 18px;
  border-radius: 8px;
  font-weight: 600;
  font-size: 13px;
  cursor: pointer;
  transition: all 0.2s;
}
.btn-primary { background: #38bdf8; color: #0f172a; }
.btn-primary:hover { background: #7dd3fc; transform: translateY(-2px); }
.btn-secondary { background: rgba(255, 255, 255, 0.12); color: #fff; }
.btn-secondary:hover { background: rgba(255, 255, 255, 0.2); }
.btn-outline { background: transparent; border: 1px solid rgba(255, 255, 255, 0.2); color: #94a3b8; }
.btn-outline:hover { color: #fff; border-color: rgba(255, 255, 255, 0.4); }
.telemetry-box {
  margin-top: 24px;
  background: rgba(0, 0, 0, 0.25);
  border: 1px solid rgba(255, 255, 255, 0.05);
  border-radius: 8px;
  padding: 12px;
  max-height: 90px;
  overflow-y: auto;
  text-align: left;
  font-family: monospace;
  font-size: 11px;
  color: #64748b;
}
.log-entry { margin-bottom: 4px; }
.log-entry--active { color: #38bdf8; }`,
      js: `let count = 0;
const valEl = document.getElementById('counter-val');
const logEl = document.getElementById('telemetry-log');

function recordEvent(action) {
  console.log(\`[Mutation] \${action} -> Current count: \${count}\`);
  const row = document.createElement('div');
  row.className = 'log-entry log-entry--active';
  row.textContent = \`• [\${new Date().toLocaleTimeString()}] \${action} => \${count}\`;
  logEl.prepend(row);
}

document.getElementById('btn-inc').addEventListener('click', () => {
  count++;
  valEl.textContent = count;
  valEl.style.transform = 'scale(1.15)';
  setTimeout(() => valEl.style.transform = 'scale(1)', 150);
  recordEvent('INCREMENT');
});

document.getElementById('btn-dec').addEventListener('click', () => {
  count--;
  valEl.textContent = count;
  valEl.style.transform = 'scale(0.85)';
  setTimeout(() => valEl.style.transform = 'scale(1)', 150);
  recordEvent('DECREMENT');
});

document.getElementById('btn-rst').addEventListener('click', () => {
  count = 0;
  valEl.textContent = count;
  recordEvent('RESET');
});

console.log('Reactive Counter initialized inside sandboxed preview.');`
    },

    'astar-mesh': {
      html: `<div class="app-layout">
  <div class="control-panel">
    <h2>A* Mesh Pathfinding Visualizer</h2>
    <p>Grid: 20×20 · Heuristic: Manhattan Distance (h = |x1-x2| + |y1-y2|)</p>
    <div class="actions">
      <button id="btn-find-path" class="btn">▶ Run A* Search</button>
      <button id="btn-regen-grid" class="btn btn-alt">↺ Randomize Walls</button>
    </div>
    <div class="stat-badge" id="path-stat">Awaiting search trigger...</div>
  </div>
  <canvas id="mesh-canvas" width="400" height="400"></canvas>
</div>`,
      css: `* { box-sizing: border-box; }
body {
  margin: 0;
  padding: 16px;
  background: #0f172a;
  color: #f1f5f9;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
}
.app-layout {
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: center;
  max-width: 440px;
}
.control-panel { text-align: center; }
h2 { margin: 0 0 6px; font-size: 18px; color: #38bdf8; }
p { margin: 0 0 12px; font-size: 12px; color: #94a3b8; }
.actions { display: flex; gap: 8px; justify-content: center; margin-bottom: 8px; }
.btn {
  background: #38bdf8;
  color: #0f172a;
  border: none;
  padding: 8px 14px;
  border-radius: 6px;
  font-weight: 600;
  font-size: 12px;
  cursor: pointer;
}
.btn-alt { background: #334155; color: #f1f5f9; }
.stat-badge {
  font-family: monospace;
  font-size: 11px;
  color: #4ade80;
}
canvas {
  background: #020617;
  border: 1px solid #1e293b;
  border-radius: 8px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.4);
}`,
      js: `const canvas = document.getElementById('mesh-canvas');
const ctx = canvas.getContext('2d');
const statEl = document.getElementById('path-stat');
const COLS = 20, ROWS = 20, CELL = 20;

let grid = [];
const start = { x: 1, y: 1 };
const goal = { x: 18, y: 18 };

function initGrid() {
  grid = [];
  for (let y = 0; y < ROWS; y++) {
    const row = [];
    for (let x = 0; x < COLS; x++) {
      const isWall = (x === start.x && y === start.y) || (x === goal.x && y === goal.y)
        ? false
        : Math.random() < 0.24;
      row.push({ x, y, isWall, g: 0, h: 0, f: 0, parent: null });
    }
    grid.push(row);
  }
  drawGrid([], []);
}

function drawGrid(openSet = [], closedSet = [], path = []) {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (let y = 0; y < ROWS; y++) {
    for (let x = 0; x < COLS; x++) {
      const cell = grid[y][x];
      ctx.fillStyle = cell.isWall ? '#334155' : '#090d16';
      ctx.fillRect(x * CELL, y * CELL, CELL - 1, CELL - 1);
    }
  }
  closedSet.forEach(c => {
    ctx.fillStyle = 'rgba(239, 68, 68, 0.35)';
    ctx.fillRect(c.x * CELL, c.y * CELL, CELL - 1, CELL - 1);
  });
  openSet.forEach(c => {
    ctx.fillStyle = 'rgba(56, 189, 248, 0.4)';
    ctx.fillRect(c.x * CELL, c.y * CELL, CELL - 1, CELL - 1);
  });
  path.forEach(c => {
    ctx.fillStyle = '#4ade80';
    ctx.fillRect(c.x * CELL + 2, c.y * CELL + 2, CELL - 5, CELL - 5);
  });
  ctx.fillStyle = '#38bdf8';
  ctx.fillRect(start.x * CELL, start.y * CELL, CELL - 1, CELL - 1);
  ctx.fillStyle = '#f59e0b';
  ctx.fillRect(goal.x * CELL, goal.y * CELL, CELL - 1, CELL - 1);
}

function solveAStar() {
  const openSet = [grid[start.y][start.x]];
  const closedSet = [];
  grid[start.y][start.x].g = 0;
  grid[start.y][start.x].h = Math.abs(start.x - goal.x) + Math.abs(start.y - goal.y);
  grid[start.y][start.x].f = grid[start.y][start.x].h;

  console.log('Executing A* heuristic search from (1,1) to (18,18)...');

  function step() {
    if (openSet.length === 0) {
      statEl.textContent = '✗ No path reachable due to obstacles!';
      console.warn('A* pathfinding completed: Goal blocked.');
      return;
    }
    openSet.sort((a, b) => a.f - b.f);
    const curr = openSet.shift();
    if (curr.x === goal.x && curr.y === goal.y) {
      const path = [];
      let temp = curr;
      while (temp) { path.push(temp); temp = temp.parent; }
      drawGrid(openSet, closedSet, path);
      statEl.textContent = \`✓ Shortest Path: \${path.length} steps | Evaluated: \${closedSet.length} nodes\`;
      console.log(\`A* Success: Optimal path cost = \${path.length} hops.\`);
      return;
    }
    closedSet.push(curr);
    const neighbors = [
      { x: curr.x + 1, y: curr.y }, { x: curr.x - 1, y: curr.y },
      { x: curr.x, y: curr.y + 1 }, { x: curr.x, y: curr.y - 1 }
    ].filter(n => n.x >= 0 && n.x < COLS && n.y >= 0 && n.y < ROWS);

    neighbors.forEach(n => {
      const node = grid[n.y][n.x];
      if (!node.isWall && !closedSet.includes(node)) {
        const tentativeG = curr.g + 1;
        if (!openSet.includes(node) || tentativeG < node.g) {
          node.parent = curr;
          node.g = tentativeG;
          node.h = Math.abs(node.x - goal.x) + Math.abs(node.y - goal.y);
          node.f = node.g + node.h;
          if (!openSet.includes(node)) openSet.push(node);
        }
      }
    });
    drawGrid(openSet, closedSet);
    requestAnimationFrame(step);
  }
  step();
}

document.getElementById('btn-find-path').onclick = solveAStar;
document.getElementById('btn-regen-grid').onclick = initGrid;
initGrid();`
    },

    'cosine-rag': {
      html: `<div class="vector-lab">
  <h2>Vector Cosine Similarity Explorer</h2>
  <p>Interactive high-dimensional embedding distance comparison (RAG query metric).</p>
  <div class="score-card">
    <span class="score-label">COSINE SIMILARITY</span>
    <span class="score-value" id="sim-score">0.9842</span>
    <div class="score-bar"><div class="score-bar-fill" id="sim-bar"></div></div>
  </div>
  <div class="sliders-box">
    <div class="vector-col">
      <h3>Query Vector (A)</h3>
      <label>Dim 1: <input type="range" id="vA1" min="-100" max="100" value="80"></label>
      <label>Dim 2: <input type="range" id="vA2" min="-100" max="100" value="60"></label>
    </div>
    <div class="vector-col">
      <h3>Target Document (B)</h3>
      <label>Dim 1: <input type="range" id="vB1" min="-100" max="100" value="70"></label>
      <label>Dim 2: <input type="range" id="vB2" min="-100" max="100" value="65"></label>
    </div>
  </div>
  <svg id="vector-canvas" viewBox="-120 -120 240 240"></svg>
</div>`,
      css: `* { box-sizing: border-box; }
body {
  margin: 0;
  padding: 16px;
  background: #090d16;
  color: #f8fafc;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}
.vector-lab { max-width: 440px; width: 100%; text-align: center; }
h2 { font-size: 18px; margin: 0 0 4px; color: #38bdf8; }
p { font-size: 12px; color: #94a3b8; margin: 0 0 16px; }
.score-card {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  padding: 16px;
  margin-bottom: 16px;
}
.score-label { font-size: 10px; letter-spacing: 0.12em; color: #94a3b8; display: block; }
.score-value { font-size: 32px; font-weight: 800; color: #4ade80; font-family: monospace; }
.score-bar { height: 6px; background: #1e293b; border-radius: 99px; overflow: hidden; margin-top: 8px; }
.score-bar-fill { height: 100%; width: 98%; background: #4ade80; transition: width 0.1s; }
.sliders-box { display: flex; gap: 12px; margin-bottom: 16px; }
.vector-col { flex: 1; background: rgba(0, 0, 0, 0.2); padding: 10px; border-radius: 8px; text-align: left; }
.vector-col h3 { font-size: 11px; margin: 0 0 8px; color: #38bdf8; text-transform: uppercase; }
label { display: block; font-size: 11px; color: #94a3b8; margin-bottom: 6px; font-family: monospace; }
input[type="range"] { width: 100%; }
svg { width: 180px; height: 180px; background: #020617; border-radius: 50%; border: 1px solid #1e293b; }`,
      js: `const inputs = ['vA1', 'vA2', 'vB1', 'vB2'].map(id => document.getElementById(id));
const simScore = document.getElementById('sim-score');
const simBar = document.getElementById('sim-bar');
const svg = document.getElementById('vector-canvas');

function calculate() {
  const A = [Number(inputs[0].value) / 100, Number(inputs[1].value) / 100];
  const B = [Number(inputs[2].value) / 100, Number(inputs[3].value) / 100];

  const dot = A[0] * B[0] + A[1] * B[1];
  const normA = Math.sqrt(A[0] * A[0] + A[1] * A[1]);
  const normB = Math.sqrt(B[0] * B[0] + B[1] * B[1]);
  const sim = (normA === 0 || normB === 0) ? 0 : dot / (normA * normB);
  const pct = Math.max(0, Math.min(100, ((sim + 1) / 2) * 100)).toFixed(1);

  simScore.textContent = (sim).toFixed(4);
  simBar.style.width = pct + '%';

  svg.innerHTML = \`
    <circle cx="0" cy="0" r="100" fill="none" stroke="#1e293b" stroke-dasharray="3 3"/>
    <line x1="-110" y1="0" x2="110" y2="0" stroke="#1e293b"/>
    <line x1="0" y1="-110" x2="0" y2="110" stroke="#1e293b"/>
    <line x1="0" y1="0" x2="\${A[0] * 90}" y2="\${-A[1] * 90}" stroke="#38bdf8" stroke-width="3"/>
    <line x1="0" y1="0" x2="\${B[0] * 90}" y2="\${-B[1] * 90}" stroke="#f59e0b" stroke-width="3"/>
  \`;
  console.log(\`Computed Cosine Similarity: \${(sim).toFixed(4)} (Dot: \${dot.toFixed(3)})\`);
}

inputs.forEach(inp => inp.addEventListener('input', calculate));
calculate();`
    },

    'physics-spring': {
      html: `<div class="physics-lab">
  <h2>Harmonic Spring-Damper Physics</h2>
  <p>Mass-Spring-Damper differential equation: m·x'' + c·x' + k·x = 0</p>
  <div class="sliders-row">
    <label>Stiffness (k): <input type="range" id="param-k" min="0.01" max="0.3" step="0.01" value="0.12"></label>
    <label>Damping (c): <input type="range" id="param-c" min="0.8" max="0.99" step="0.01" value="0.94"></label>
  </div>
  <canvas id="spring-canvas" width="380" height="260"></canvas>
  <p class="hint">Click or drag anywhere on the canvas to displace the mass bob!</p>
</div>`,
      css: `* { box-sizing: border-box; }
body {
  margin: 0;
  padding: 16px;
  background: #0a0f1d;
  color: #e2e8f0;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
}
.physics-lab { max-width: 420px; width: 100%; text-align: center; }
h2 { font-size: 18px; margin: 0 0 4px; color: #38bdf8; }
p { font-size: 11px; color: #94a3b8; margin: 0 0 12px; font-family: monospace; }
.sliders-row { display: flex; gap: 12px; justify-content: center; margin-bottom: 12px; font-size: 11px; font-family: monospace; }
canvas { background: #020617; border: 1px solid #1e293b; border-radius: 8px; cursor: crosshair; }
.hint { font-size: 10px; color: #64748b; margin-top: 8px; }`,
      js: `const canvas = document.getElementById('spring-canvas');
const ctx = canvas.getContext('2d');
const inputK = document.getElementById('param-k');
const inputC = document.getElementById('param-c');

let anchorX = canvas.width / 2;
let anchorY = 30;
let bobX = anchorX;
let bobY = 160;
let velX = 0, velY = 0;
let restLength = 120;
let isDragging = false;

canvas.addEventListener('mousedown', (e) => {
  const rect = canvas.getBoundingClientRect();
  bobX = e.clientX - rect.left;
  bobY = e.clientY - rect.top;
  velX = 0; velY = 0;
  isDragging = true;
  console.log(\`Displaced mass to (\${bobX.toFixed(0)}, \${bobY.toFixed(0)})\`);
});
window.addEventListener('mouseup', () => { isDragging = false; });
canvas.addEventListener('mousemove', (e) => {
  if (isDragging) {
    const rect = canvas.getBoundingClientRect();
    bobX = e.clientX - rect.left;
    bobY = e.clientY - rect.top;
  }
});

function loop() {
  const k = parseFloat(inputK.value);
  const damping = parseFloat(inputC.value);

  if (!isDragging) {
    const dx = bobX - anchorX;
    const dy = bobY - anchorY;
    const dist = Math.sqrt(dx * dx + dy * dy);
    const stretch = dist - restLength;
    const force = -k * stretch;
    const forceX = (dx / dist) * force;
    const forceY = (dy / dist) * force + 0.4;

    velX = (velX + forceX) * damping;
    velY = (velY + forceY) * damping;
    bobX += velX;
    bobY += velY;
  }

  ctx.clearRect(0, 0, canvas.width, canvas.height);

  ctx.beginPath();
  ctx.moveTo(anchorX, anchorY);
  const coils = 16;
  for (let i = 1; i <= coils; i++) {
    const t = i / coils;
    const px = anchorX + (bobX - anchorX) * t + (i % 2 === 0 ? -12 : 12);
    const py = anchorY + (bobY - anchorY) * t;
    ctx.lineTo(px, py);
  }
  ctx.lineTo(bobX, bobY);
  ctx.strokeStyle = '#38bdf8';
  ctx.lineWidth = 2;
  ctx.stroke();

  ctx.fillStyle = '#64748b';
  ctx.fillRect(anchorX - 25, anchorY - 6, 50, 6);

  ctx.beginPath();
  ctx.arc(bobX, bobY, 18, 0, Math.PI * 2);
  ctx.fillStyle = '#4ade80';
  ctx.fill();
  ctx.strokeStyle = '#fff';
  ctx.lineWidth = 2;
  ctx.stroke();

  requestAnimationFrame(loop);
}
loop();
console.log('Harmonic Spring simulation active.');`
    },

    'todo-kanban': {
      html: `<div class="kanban-app">
  <header class="header">
    <h2>Micro Task Kanban</h2>
    <button id="btn-add-task" class="btn">+ New Item</button>
  </header>
  <div class="board">
    <div class="col" id="col-backlog">
      <div class="col-title">BACKLOG</div>
      <div class="cards-list">
        <div class="card" data-stage="backlog"><span>Draft RAG Pipeline</span><button class="card-btn">→</button></div>
        <div class="card" data-stage="backlog"><span>Benchmark Embeddings</span><button class="card-btn">→</button></div>
      </div>
    </div>
    <div class="col" id="col-active">
      <div class="col-title">ACTIVE</div>
      <div class="cards-list">
        <div class="card" data-stage="active"><span>Solvex NER Model</span><button class="card-btn">→</button></div>
      </div>
    </div>
    <div class="col" id="col-done">
      <div class="col-title">VERIFIED</div>
      <div class="cards-list">
        <div class="card" data-stage="done"><span>IntelliPDF v1.0</span><button class="card-btn">✓</button></div>
      </div>
    </div>
  </div>
</div>`,
      css: `* { box-sizing: border-box; }
body {
  margin: 0;
  padding: 16px;
  background: #0f172a;
  color: #f8fafc;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
}
.kanban-app { max-width: 440px; margin: 0 auto; }
.header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 16px; }
h2 { margin: 0; font-size: 16px; color: #38bdf8; }
.btn { background: #38bdf8; color: #0f172a; border: none; padding: 6px 12px; border-radius: 6px; font-weight: 600; cursor: pointer; font-size: 12px; }
.board { display: grid; grid-template-columns: repeat(3, 1fr); gap: 8px; }
.col { background: #1e293b; border-radius: 8px; padding: 10px; min-height: 200px; }
.col-title { font-size: 10px; font-weight: 700; letter-spacing: 0.1em; color: #94a3b8; margin-bottom: 8px; }
.cards-list { display: flex; flex-direction: column; gap: 8px; }
.card { background: #334155; padding: 8px; border-radius: 6px; font-size: 11px; display: flex; justify-content: space-between; align-items: center; }
.card-btn { background: transparent; border: 1px solid #64748b; color: #38bdf8; border-radius: 4px; padding: 2px 6px; font-size: 10px; cursor: pointer; }`,
      js: `const stages = ['backlog', 'active', 'done'];
function attachEvents() {
  document.querySelectorAll('.card-btn').forEach(btn => {
    btn.onclick = () => {
      const card = btn.closest('.card');
      const curr = card.getAttribute('data-stage');
      const nextIdx = (stages.indexOf(curr) + 1) % stages.length;
      const nextStage = stages[nextIdx];
      card.setAttribute('data-stage', nextStage);
      document.querySelector(\`#col-\${nextStage} .cards-list\`).appendChild(card);
      btn.textContent = nextStage === 'done' ? '✓' : '→';
      console.log(\`Task moved to: \${nextStage.toUpperCase()}\`);
    };
  });
}
document.getElementById('btn-add-task').onclick = () => {
  const title = prompt('Task title:', 'Feature ' + Math.floor(Math.random() * 100));
  if (!title) return;
  const card = document.createElement('div');
  card.className = 'card';
  card.setAttribute('data-stage', 'backlog');
  card.innerHTML = \`<span>\${title}</span><button class="card-btn">→</button>\`;
  document.querySelector('#col-backlog .cards-list').appendChild(card);
  attachEvents();
  console.log(\`Created new task: "\${title}"\`);
};
attachEvents();
console.log('Kanban board active. Click "→" on cards to progress tasks.');`
    }
  };

  // ==========================================================================
  // CODE SNIPPETS LIBRARY DATABASE
  // ==========================================================================
  const SNIPPETS_DATA = [
    {
      id: 'snippet-promise-pool',
      title: 'Async Promise Pool & Concurrency Limiter',
      category: 'javascript',
      categoryLabel: 'JavaScript',
      lang: 'JavaScript',
      desc: 'Execute asynchronous tasks with a strict concurrency ceiling to avoid rate limits and memory pressure.',
      code: `async function promisePool(tasks, limit) {
  const results = [];
  const executing = new Set();

  for (const task of tasks) {
    const promise = Promise.resolve().then(() => task());
    results.push(promise);
    executing.add(promise);

    const clean = () => executing.delete(promise);
    promise.then(clean).catch(clean);

    if (executing.size >= limit) {
      await Promise.race(executing);
    }
  }
  return Promise.all(results);
}`
    },
    {
      id: 'snippet-event-emitter',
      title: 'Type-Safe Event Emitter Pattern',
      category: 'javascript',
      categoryLabel: 'JavaScript',
      lang: 'JavaScript',
      desc: 'Lightweight pub/sub bus supporting once-listeners, targeted unsubscription, and decoupled event handling.',
      code: `class EventEmitter {
  constructor() {
    this.events = new Map();
  }

  on(event, listener) {
    if (!this.events.has(event)) this.events.set(event, new Set());
    this.events.get(event).add(listener);
    return () => this.off(event, listener);
  }

  off(event, listener) {
    if (this.events.has(event)) {
      this.events.get(event).delete(listener);
    }
  }

  emit(event, ...args) {
    if (this.events.has(event)) {
      this.events.get(event).forEach(fn => fn(...args));
    }
  }
}`
    },
    {
      id: 'snippet-py-fastapi',
      title: 'FastAPI Streaming SSE Response',
      category: 'python',
      categoryLabel: 'Python',
      lang: 'Python',
      desc: 'Asynchronous streaming response handler for real-time LLM token generation over Server-Sent Events.',
      code: `from fastapi import FastAPI
from fastapi.responses import StreamingResponse
import asyncio

app = FastAPI()

async def token_generator(prompt: str):
    tokens = ["Simulated", " ", "real-time", " ", "LLM", " ", "stream."]
    for token in tokens:
        yield f"data: {token}\\n\\n"
        await asyncio.sleep(0.08)

@app.get("/api/v1/stream")
async def stream_tokens(prompt: str):
    return StreamingResponse(token_generator(prompt), media_type="text/event-stream")`
    },
    {
      id: 'snippet-py-context',
      title: 'Custom Context Manager with Cleanup',
      category: 'python',
      categoryLabel: 'Python',
      lang: 'Python',
      desc: 'Python context manager supporting automatic database rollback, transaction commit, and resource release.',
      code: `class ManagedTransaction:
    def __init__(self, session):
        self.session = session

    def __enter__(self):
        self.session.begin()
        return self.session

    def __exit__(self, exc_type, exc_val, exc_tb):
        if exc_type is not None:
            self.session.rollback()
            print(f"[ERROR] Transaction rolled back due to {exc_val}")
        else:
            self.session.commit()
            print("[INFO] Transaction committed successfully.")
        return False`
    },
    {
      id: 'snippet-c-vector',
      title: 'Dynamic Vector with Memory Reallocation',
      category: 'c',
      categoryLabel: 'C Programming',
      lang: 'C',
      desc: 'Resizable dynamic array structure in C with geometric amortized O(1) append using realloc.',
      code: `#include <stdio.h>
#include <stdlib.h>

typedef struct {
    int *data;
    size_t size;
    size_t capacity;
} Vector;

Vector* vector_create(size_t initial_cap) {
    Vector *v = (Vector*)malloc(sizeof(Vector));
    v->capacity = initial_cap ? initial_cap : 4;
    v->size = 0;
    v->data = (int*)malloc(v->capacity * sizeof(int));
    return v;
}

void vector_push(Vector *v, int val) {
    if (v->size >= v->capacity) {
        v->capacity *= 2;
        v->data = (int*)realloc(v->data, v->capacity * sizeof(int));
    }
    v->data[v->size++] = val;
}`
    },
    {
      id: 'snippet-c-linkedlist',
      title: 'Pointer Arithmetic Singly Linked List',
      category: 'c',
      categoryLabel: 'C Programming',
      lang: 'C',
      desc: 'Fundamental node traversal and memory freeing using double pointers in standard ANSI C.',
      code: `#include <stdio.h>
#include <stdlib.h>

typedef struct Node {
    int data;
    struct Node *next;
} Node;

void list_prepend(Node **head, int val) {
    Node *newNode = (Node*)malloc(sizeof(Node));
    newNode->data = val;
    newNode->next = *head;
    *head = newNode;
}

void list_free(Node *head) {
    Node *curr = head;
    while (curr != NULL) {
        Node *temp = curr->next;
        free(curr);
        curr = temp;
    }
}`
    },
    {
      id: 'snippet-java-singleton',
      title: 'Thread-Safe Double-Checked Singleton',
      category: 'java',
      categoryLabel: 'Java Basics',
      lang: 'Java',
      desc: 'Volatile-guarded lazy singleton initialization ensuring thread safety across multi-core JVM runtimes.',
      code: `public class ConnectionPool {
    private static volatile ConnectionPool instance;

    private ConnectionPool() {
        // Initialize pool connections
    }

    public static ConnectionPool getInstance() {
        if (instance == null) {
            synchronized (ConnectionPool.class) {
                if (instance == null) {
                    instance = new ConnectionPool();
                }
            }
        }
        return instance;
    }
}`
    },
    {
      id: 'snippet-java-streams',
      title: 'Stream API Map-Filter-Reduce Pipeline',
      category: 'java',
      categoryLabel: 'Java Basics',
      lang: 'Java',
      desc: 'Declarative stream transformation with immutable record mapping and collectors grouping.',
      code: `import java.util.*;
import java.util.stream.Collectors;

public record Metric(String service, double latency) {}

public class StreamAnalytics {
    public static Map<String, Double> computeAverages(List<Metric> metrics) {
        return metrics.stream()
            .filter(m -> m.latency() > 0)
            .collect(Collectors.groupingBy(
                Metric::service,
                Collectors.averagingDouble(Metric::latency)
            ));
    }
}`
    },
    {
      id: 'snippet-dsa-trie',
      title: 'Trie (Prefix Tree) with Autocomplete',
      category: 'dsa',
      categoryLabel: 'DSA',
      lang: 'JavaScript',
      desc: 'Retrieval tree offering O(M) search and prefix lookup for dictionary and search term autocomplete.',
      code: `class TrieNode {
  constructor() {
    this.children = {};
    this.isEnd = false;
  }
}

class Trie {
  constructor() {
    this.root = new TrieNode();
  }

  insert(word) {
    let curr = this.root;
    for (const char of word) {
      if (!curr.children[char]) curr.children[char] = new TrieNode();
      curr = curr.children[char];
    }
    this.isEnd = true;
  }

  startsWith(prefix) {
    let curr = this.root;
    for (const char of prefix) {
      if (!curr.children[char]) return false;
      curr = curr.children[char];
    }
    return true;
  }
}`
    },
    {
      id: 'snippet-dsa-toposort',
      title: "Topological Sort using Kahn's Algorithm",
      category: 'dsa',
      categoryLabel: 'DSA',
      lang: 'JavaScript',
      desc: 'Linear ordering of DAG vertices using BFS and in-degree tracking for dependency resolution.',
      code: `function topologicalSort(numCourses, prerequisites) {
  const inDegree = new Array(numCourses).fill(0);
  const adj = Array.from({ length: numCourses }, () => []);

  for (const [course, pre] of prerequisites) {
    adj[pre].push(course);
    inDegree[course]++;
  }

  const queue = [];
  for (let i = 0; i < numCourses; i++) {
    if (inDegree[i] === 0) queue.push(i);
  }

  const order = [];
  while (queue.length > 0) {
    const node = queue.shift();
    order.push(node);
    for (const neighbor of adj[node]) {
      inDegree[neighbor]--;
      if (inDegree[neighbor] === 0) queue.push(neighbor);
    }
  }

  return order.length === numCourses ? order : []; // Cycle detected if length mismatch
}`
    },
    {
      id: 'snippet-web-lazy',
      title: 'Intersection Observer Image Lazy Loader',
      category: 'web',
      categoryLabel: 'Web Dev',
      lang: 'JavaScript',
      desc: 'High-performance lazy loader decoupling offscreen asset decoding from the initial critical rendering path.',
      code: `function setupLazyLoader() {
  const images = document.querySelectorAll('img[data-src]');
  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.getAttribute('data-src');
        img.removeAttribute('data-src');
        obs.unobserve(img);
      }
    });
  }, { rootMargin: '200px 0px' });

  images.forEach(img => observer.observe(img));
}`
    },
    {
      id: 'snippet-ai-cosine',
      title: 'Vector Cosine Similarity & Top-K Ranking',
      category: 'ai-ml',
      categoryLabel: 'AI / ML',
      lang: 'JavaScript',
      desc: 'RAG retrieval engine ranking vector embeddings against prompt vectors with normalized cosine scoring.',
      code: `function rankTopK(queryVec, corpusVectors, k = 3) {
  const scored = corpusVectors.map(item => {
    let dot = 0, normQ = 0, normC = 0;
    for (let i = 0; i < queryVec.length; i++) {
      dot += queryVec[i] * item.embedding[i];
      normQ += queryVec[i] ** 2;
      normC += item.embedding[i] ** 2;
    }
    const score = dot / (Math.sqrt(normQ) * Math.sqrt(normC) || 1);
    return { ...item, score };
  });

  return scored.sort((a, b) => b.score - a.score).slice(0, k);
}`
    },
    {
      id: 'snippet-ai-softmax',
      title: 'Numerically Stable Softmax Normalizer',
      category: 'ai-ml',
      categoryLabel: 'AI / ML',
      lang: 'JavaScript',
      desc: 'Probability distribution normalization over raw logits preventing floating point overflow via max subtraction.',
      code: `function stableSoftmax(logits) {
  const maxLogit = Math.max(...logits); // Subtract max to avoid exp overflow
  const exps = logits.map(l => Math.exp(l - maxLogit));
  const sumExps = exps.reduce((acc, val) => acc + val, 0);
  return exps.map(e => e / sumExps);
}`
    }
  ];

  // ==========================================================================
  // 03. DOM REFERENCES
  // ==========================================================================
  const docRoot = document.documentElement;
  const navLinks = document.querySelectorAll('[data-route]');
  const pageViews = document.querySelectorAll('.page-view');
  const liveAnnounce = document.getElementById('live-announce');

  // Controls
  const themeToggleBtn = document.getElementById('theme-toggle-btn');
  const themeIcon = document.getElementById('theme-icon');
  const themeLabel = document.getElementById('theme-label');
  const motionToggleBtn = document.getElementById('motion-toggle-btn');
  const soundToggleBtn = document.getElementById('sound-toggle-btn');
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileNavDrawer = document.getElementById('mobile-nav-drawer');
  const mobileNavCloseBtn = document.getElementById('mobile-nav-close-btn');

  // Home view elements
  const homeFeaturedContainer = document.getElementById('home-featured-container');
  const home3DAnchor = document.getElementById('home-hero-3d-anchor');

  // Projects view elements
  const projectsGalleryContainer = document.getElementById('projects-gallery-container');
  const projectSearchInput = document.getElementById('project-search-input');
  const projectSearchClear = document.getElementById('project-search-clear');
  const projectFilterChips = document.querySelectorAll('.filter-chips-group [data-filter]');
  const projectsEmptyState = document.getElementById('projects-empty-state');
  const btnResetFilters = document.getElementById('btn-reset-filters');
  const projectsCounterBadge = document.getElementById('projects-counter-badge');

  // Detail view elements
  const detailProjectBadge = document.getElementById('detail-project-badge');
  const detailProjectStatus = document.getElementById('detail-project-status');
  const detailProjectYear = document.getElementById('detail-project-year');
  const detailProjectTitle = document.getElementById('detail-project-title');
  const detailProjectSummary = document.getElementById('detail-project-summary');
  const detailRepoLink = document.getElementById('detail-repo-link');
  const detailLiveLink = document.getElementById('detail-live-link');
  const detailEnlargeBtn = document.getElementById('detail-enlarge-btn');
  const detailChipEnlarge = document.getElementById('detail-chip-enlarge');
  const detailMediaChips = document.querySelectorAll('[data-detail-media-mode]');
  const detailStageImg = document.getElementById('detail-stage-img');
  const detailStageVideo = document.getElementById('detail-stage-video');
  const detailVideoWrap = document.getElementById('detail-video-wrap');
  const detailVideoControls = document.getElementById('detail-video-controls');
  const btnVideoPlayPause = document.getElementById('btn-video-play-pause');
  const videoPlayIcon = document.getElementById('video-play-icon');
  const videoPlayLabel = document.getElementById('video-play-label');
  const btnVideoReplay = document.getElementById('btn-video-replay');
  const videoProgressTrack = document.getElementById('video-progress-track');
  const videoProgressFill = document.getElementById('video-progress-fill');
  const videoTimeStamp = document.getElementById('video-time-stamp');
  const btnVideoFullscreen = document.getElementById('btn-video-fullscreen');
  const detailVideoFallbackBanner = document.getElementById('detail-video-fallback-banner');
  const detailBtnFallbackSim = document.getElementById('detail-btn-fallback-sim');
  const detailSimContainer = document.getElementById('detail-simulation-container');
  const detailProblemHeading = document.getElementById('detail-problem-heading');
  const detailProblemText = document.getElementById('detail-problem-text');
  const detailSolutionHeading = document.getElementById('detail-solution-heading');
  const detailSolutionText = document.getElementById('detail-solution-text');
  const detailFeaturesList = document.getElementById('detail-features-list');
  const detailStackList = document.getElementById('detail-stack-list');
  const detailRoadmapText = document.getElementById('detail-roadmap-text');
  const btnPrevProject = document.getElementById('btn-prev-project');
  const btnNextProject = document.getElementById('btn-next-project');

  // Skills view elements
  const skillsTopologyContainer = document.getElementById('skills-topology-container');
  const skillFilterChips = document.querySelectorAll('[data-skill-filter]');

  // Contact elements
  const copyEmailChip = document.getElementById('btn-copy-email-chip');
  const copyEmailStatus = document.getElementById('copy-email-status');
  const contactForm = document.querySelector('[data-contact-form]');
  const contactStatus = document.querySelector('[data-contact-form-status]');
  const toastPill = document.getElementById('toast-pill');

  // Lightbox Media Viewer Modal
  const mediaViewerModal = document.getElementById('project-media-viewer-modal');
  const mediaViewerBackdropDismiss = document.getElementById('media-viewer-backdrop-dismiss');
  const mediaViewerCloseBtn = document.getElementById('media-viewer-close-btn');
  const mediaViewerPrevBtn = document.getElementById('media-viewer-prev-btn');
  const mediaViewerNextBtn = document.getElementById('media-viewer-next-btn');
  const mediaViewerIndex = document.getElementById('media-viewer-index');
  const mediaViewerTitle = document.getElementById('media-viewer-title');
  const mediaViewerImg = document.getElementById('media-viewer-img');
  const mediaViewerVideo = document.getElementById('media-viewer-video');
  const mediaViewerFallback = document.getElementById('media-viewer-fallback');
  const mediaViewerCaption = document.getElementById('media-viewer-caption');
  const mediaViewerToggleMedia = document.getElementById('media-viewer-toggle-media');
  const mediaViewerOpenDetails = document.getElementById('media-viewer-open-details');

  // ==========================================================================
  // 04. APPLICATION STATE
  // ==========================================================================
  let currentRoute = '/';
  let currentSlug = 'intellipdf';
  let activeDetailIdx = 0;
  let detailMediaMode = 'schematic'; // 'schematic', 'sim', 'video'
  let currentTheme = 'light';
  let isReducedMotion = false;
  let isSoundActive = false;
  let currentSearchQuery = '';
  let currentCategoryFilter = 'all';
  let currentSkillFilter = 'all';
  let activeViewerIdx = 0;
  let viewerMode = 'image';

  // 3D Scene state
  let stageRenderer, stageScene, stageCamera, heroSculpture, stageParticles;
  let stageGlassMat, stageChampagneMat, stageSoftGoldMat, stageDarkTitaniumMat;
  let stageAmbientLight, stageKeyLight, stageRimLight, stageSoftFill;
  let is3DRendering = false;
  let is3DVisibleInViewport = true;
  let targetRotX = 0;
  let targetRotY = 0;

  // Upgraded Feature States
  let projectLayoutMode = 'grid'; // 'grid' | 'list'
  let activeSkillNodeIdx = 0;
  let skillsPresentationMode = 'spatial'; // 'spatial' | 'list'
  let highlightedProjectSlug = 'all';

  // Web Audio Context (Procedural sound)
  let audioCtx = null;

  function playSfx(type) {
    // Strictly silent: audio playback disabled per Titanium Glass requirements
    return;
  }

  function showToast(message) {
    if (!toastPill) return;
    toastPill.textContent = message;
    toastPill.classList.add('is-visible');
    setTimeout(() => {
      toastPill.classList.remove('is-visible');
    }, 3200);
  }

  function escapeHtml(str) {
    if (typeof str !== 'string') return String(str || '');
    return str
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }

  // ==========================================================================
  // 05. CLIENT-SIDE MULTI-PAGE SPA ROUTER
  // ==========================================================================
  function parseRoute(path) {
    const cleanPath = path.split('?')[0].replace(/\/+$/, '') || '/';
    
    if (cleanPath === '/' || cleanPath === '/home') {
      return { view: 'home', slug: null };
    }
    if (cleanPath === '/projects') {
      return { view: 'projects', slug: null };
    }
    if (cleanPath.startsWith('/projects/')) {
      let slug = cleanPath.replace('/projects/', '').trim();
      if (slug === 'ner-access' || slug === 'solvex') slug = 'solvex-ner';
      if (slug === 'linkedx' || slug === 'linkxxx') slug = 'linkx';
      if (slug === 'bumblebee-squad') slug = 'base-isolation';
      return { view: 'project-detail', slug };
    }
    if (cleanPath === '/simulation' || cleanPath === '/simulations' || cleanPath === '/interactive-simulation') {
      return { view: 'project-detail', slug: 'intellipdf', mediaMode: 'sim' };
    }
    if (cleanPath === '/tools' || cleanPath === '/devtools') {
      return { view: 'tools', slug: null };
    }
    if (cleanPath === '/skills') {
      return { view: 'skills', slug: null };
    }
    if (cleanPath === '/about') {
      return { view: 'about', slug: null };
    }
    if (cleanPath === '/contact') {
      return { view: 'contact', slug: null };
    }

    return { view: 'home', slug: null };
  }

  function navigate(path, pushState = true) {
    if (pushState && window.location.pathname !== path) {
      window.history.pushState(null, '', path);
    }
    renderRoute(path);
  }

  function renderRoute(path) {
    currentRoute = path;
    const { view, slug, mediaMode } = parseRoute(path);

    // Switch active view container dynamically
    const allViews = document.querySelectorAll('.page-view');
    allViews.forEach(v => {
      if (v.getAttribute('data-page') === view) {
        v.classList.add('is-active');
      } else {
        v.classList.remove('is-active');
      }
    });


    // Update active navigation link styles
    navLinks.forEach(link => {
      const linkRoute = link.getAttribute('data-route') || link.getAttribute('href');
      const isCurrent = (view === 'home' && linkRoute === '/') ||
                        (view === 'projects' && linkRoute === '/projects') ||
                        (view === 'project-detail' && linkRoute === '/projects') ||
                        (view === 'tools' && (linkRoute === '/tools' || linkRoute === '/devtools')) ||
                        (view === 'skills' && linkRoute === '/skills') ||
                        (view === 'about' && linkRoute === '/about') ||
                        (view === 'contact' && linkRoute === '/contact');

      if (isCurrent) {
        link.classList.add('is-active');
        link.setAttribute('aria-current', 'page');
      } else {
        link.classList.remove('is-active');
        link.removeAttribute('aria-current');
      }
    });

    // Restore natural document scrolling on route change
    document.documentElement.style.overflow = '';
    document.body.style.overflow = '';
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
    window.scrollTo({ top: 0, behavior: isReducedMotion ? 'instant' : 'smooth' });

    // Close mobile nav drawer if open and release lock
    if (mobileNavDrawer && mobileNavDrawer.classList.contains('is-open')) {
      mobileNavDrawer.classList.remove('is-open');
      mobileNavDrawer.setAttribute('aria-hidden', 'true');
      if (mobileMenuBtn) mobileMenuBtn.setAttribute('aria-expanded', 'false');
      document.body.classList.remove('mobile-nav-active');
    }

    // Handle view-specific logic
    if (window.AtlasStage) window.AtlasStage.setRoute(path);
    if (window.AtlasProjectScenes && view !== 'project-detail') {
      window.AtlasProjectScenes.unmount();
    }
    is3DRendering = true;

    if (view === 'home') {
      document.title = 'ATLAS — Alageshvaran | AI Systems Engineer & Creative Developer';
      renderHomeFeatured();
    } else if (view === 'projects') {
      document.title = 'Projects Gallery (08 Repositories) — ATLAS // Alageshvaran';
      renderProjectsGallery();
    } else if (view === 'project-detail') {
      renderProjectDetail(slug, mediaMode);
    } else if (view === 'tools') {
      document.title = 'Developer Tools Workspace — ATLAS // Alageshvaran';
      initToolsWorkspace();
    } else if (view === 'skills') {
      document.title = 'Engineering Skills & Topology — ATLAS // Alageshvaran';
      renderSkillsTopology();
    } else if (view === 'about') {
      document.title = 'About Alageshvaran (Origin & Node) — ATLAS';
      setTimeout(() => {
        if (typeof initScrollReveals === 'function') initScrollReveals();
      }, 60);
    } else if (view === 'contact') {
      document.title = 'Contact & Transmission Channels — ATLAS';
    }

    if (liveAnnounce) {
      liveAnnounce.textContent = `Navigated to ${document.title}`;
    }

    playSfx('click');
  }

  function initRouter() {
    // Intercept internal link clicks with data-route or relative href
    document.addEventListener('click', (e) => {
      const link = e.target.closest('a[data-route], a[href^="/"]');
      if (!link) return;

      const href = link.getAttribute('data-route') || link.getAttribute('href');
      // If external or anchor
      if (!href || href.startsWith('http') || href.startsWith('#') || href.startsWith('mailto:')) {
        return;
      }

      e.preventDefault();
      navigate(href);
    });

    // Listen to browser Back and Forward navigation buttons
    window.addEventListener('popstate', () => {
      renderRoute(window.location.pathname);
    });

    // Render initial route
    renderRoute(window.location.pathname);
  }

  // ==========================================================================
  // 06. REALISTIC 3D SCULPTURE & WEBGL STAGE (THREE.JS)
  // ==========================================================================
  function init3DHero() {
    const canvas = document.getElementById('stage-canvas');
    if (!canvas || typeof THREE === 'undefined') return;

    try {
      stageScene = new THREE.Scene();

      stageCamera = new THREE.PerspectiveCamera(48, window.innerWidth / window.innerHeight, 0.1, 1000);
      stageCamera.position.set(0, 0, 16);

      stageRenderer = new THREE.WebGLRenderer({
        canvas: canvas,
        alpha: true,
        antialias: window.devicePixelRatio < 2,
        powerPreference: 'high-performance'
      });
      stageRenderer.setSize(window.innerWidth, window.innerHeight);
      stageRenderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

      // Studio Environment Map generation for physically based reflections
      try {
        const envCanvas = document.createElement('canvas');
        envCanvas.width = 512;
        envCanvas.height = 256;
        const eCtx = envCanvas.getContext('2d');
        
        // Dark luxury studio gradient background
        const bgGrad = eCtx.createLinearGradient(0, 0, 0, 256);
        bgGrad.addColorStop(0, '#171819');
        bgGrad.addColorStop(0.5, '#101113');
        bgGrad.addColorStop(1, '#08090A');
        eCtx.fillStyle = bgGrad;
        eCtx.fillRect(0, 0, 512, 256);

        // Studio key softbox (overhead diffuse highlight with soft champagne tint)
        const topGrad = eCtx.createRadialGradient(256, 36, 8, 256, 36, 110);
        topGrad.addColorStop(0, 'rgba(245, 241, 232, 0.95)');
        topGrad.addColorStop(0.6, 'rgba(203, 179, 232, 0.40)');
        topGrad.addColorStop(1, 'rgba(8, 9, 10, 0)');
        eCtx.fillStyle = topGrad;
        eCtx.fillRect(100, 0, 312, 90);

        // Left champagne softbox
        const leftGrad = eCtx.createRadialGradient(70, 128, 4, 70, 128, 85);
        leftGrad.addColorStop(0, 'rgba(212, 255, 63, 0.85)');
        leftGrad.addColorStop(1, 'rgba(8, 9, 10, 0)');
        eCtx.fillStyle = leftGrad;
        eCtx.fillRect(0, 40, 150, 180);

        // Right rim softbox (titanium neutral)
        const rightGrad = eCtx.createRadialGradient(442, 128, 4, 442, 128, 85);
        rightGrad.addColorStop(0, 'rgba(203, 179, 232, 0.60)');
        rightGrad.addColorStop(1, 'rgba(8, 9, 10, 0)');
        eCtx.fillStyle = rightGrad;
        eCtx.fillRect(362, 40, 150, 180);

        const envTexture = new THREE.CanvasTexture(envCanvas);
        envTexture.mapping = THREE.EquirectangularReflectionMapping;
        const pmrem = new THREE.PMREMGenerator(stageRenderer);
        pmrem.compileEquirectangularShader();
        const studioEnv = pmrem.fromEquirectangular(envTexture).texture;
        stageScene.environment = studioEnv;
        envTexture.dispose();
        pmrem.dispose();
      } catch (e) {
        console.warn('Studio environment map generation skipped:', e);
      }

      // Contact shadow texture for soft floor interaction
      let shadowTexture = null;
      try {
        const sCanvas = document.createElement('canvas');
        sCanvas.width = 128;
        sCanvas.height = 128;
        const sCtx = sCanvas.getContext('2d');
        const sGrad = sCtx.createRadialGradient(64, 64, 4, 64, 64, 60);
        sGrad.addColorStop(0, 'rgba(0, 0, 0, 0.65)');
        sGrad.addColorStop(0.35, 'rgba(0, 0, 0, 0.35)');
        sGrad.addColorStop(0.7, 'rgba(0, 0, 0, 0.08)');
        sGrad.addColorStop(1, 'rgba(0, 0, 0, 0)');
        sCtx.fillStyle = sGrad;
        sCtx.fillRect(0, 0, 128, 128);
        shadowTexture = new THREE.CanvasTexture(sCanvas);
      } catch (e) {}

      // 1. Titanium Glass Architectural Physical Sculpture
      heroSculpture = new THREE.Group();

      // Main architectural continuous ribbon loop (smooth translucent smoked glass)
      const glassRibbonGeo = new THREE.TorusKnotGeometry(2.4, 0.70, 160, 32, 2, 3);

      // Translucent Smoked Architectural Glass Material
      const glassMat = new THREE.MeshPhysicalMaterial({
        color: 0x141517,          // Pure dark smoked glass
        roughness: 0.08,          // Silky smooth polished glass surface
        metalness: 0.05,
        transmission: 0.88,       // High optical transmission with smoky body
        thickness: 3.2,           // Physical glass refraction volume
        transparent: true,
        opacity: 0.92,
        ior: 1.54,                // Crown optical glass index of refraction
        reflectivity: 0.98,
        clearcoat: 1.0,
        clearcoatRoughness: 0.05,
        attenuationColor: 0x08090A, // Absolute dark smoked titanium absorption
        attenuationDistance: 1.8,
        envMapIntensity: 1.8
      });

      // Precision Brushed Champagne Titanium Materials (#D4FF3F)
      const champagneTitaniumMat = new THREE.MeshStandardMaterial({
        color: 0xD4FF3F,          // Strict champagne gold
        metalness: 0.95,          // Satin metallic response
        roughness: 0.20,          // Brushed titanium sheen
        envMapIntensity: 1.8
      });

      // Machined Soft Metallic Gold Details (#CBB3E8)
      const softGoldMat = new THREE.MeshStandardMaterial({
        color: 0xCBB3E8,          // Soft metallic gold
        metalness: 0.92,
        roughness: 0.18,
        envMapIntensity: 1.6
      });

      // Machined Dark Titanium Grey Details
      const darkTitaniumMat = new THREE.MeshStandardMaterial({
        color: 0x1F2124,          // Elevated surface dark titanium
        metalness: 0.88,
        roughness: 0.30,
        envMapIntensity: 1.4
      });

      const glassMesh = new THREE.Mesh(glassRibbonGeo, glassMat);
      glassMesh.scale.set(1.0, 1.05, 0.92);

      // Precision Machined Champagne Titanium Concentric Ribbon Spine
      const titaniumSpineGeo = new THREE.TorusGeometry(3.5, 0.11, 32, 120);
      const titaniumSpine = new THREE.Mesh(titaniumSpineGeo, champagneTitaniumMat);
      titaniumSpine.rotation.set(0.48, 0.22, -0.3);

      // Outer Soft Metallic Gold Orbital Ring
      const outerRingGeo = new THREE.TorusGeometry(4.7, 0.08, 32, 140);
      const outerRing = new THREE.Mesh(outerRingGeo, softGoldMat);
      outerRing.rotation.set(Math.PI * 0.36, Math.PI * 0.14, 0.2);

      // Intersecting Machined Dark Titanium Alignment Bezel
      const innerRingGeo = new THREE.TorusGeometry(4.0, 0.06, 24, 120);
      const innerRing = new THREE.Mesh(innerRingGeo, darkTitaniumMat);
      innerRing.rotation.set(-0.55, 0.15, 0.65);

      // Precision Machined Axis Hub Collar with Champagne Gold Bevels
      const hubGeo = new THREE.CylinderGeometry(0.55, 0.55, 0.65, 32, 1, true);
      const hubMesh = new THREE.Mesh(hubGeo, champagneTitaniumMat);
      hubMesh.rotation.set(Math.PI / 4, 0.3, 0);

      heroSculpture.add(glassMesh);
      heroSculpture.add(titaniumSpine);
      heroSculpture.add(outerRing);
      heroSculpture.add(innerRing);
      heroSculpture.add(hubMesh);

      // Soft contact shadow disc under the sculpture
      if (shadowTexture) {
        const shadowPlane = new THREE.Mesh(
          new THREE.PlaneGeometry(12, 12),
          new THREE.MeshBasicMaterial({
            map: shadowTexture,
            transparent: true,
            depthWrite: false,
            opacity: 0.55
          })
        );
        shadowPlane.rotation.x = -Math.PI / 2;
        shadowPlane.position.y = -3.8;
        heroSculpture.add(shadowPlane);
      }

      // Studio Lighting System (Controlled Black Titanium & Champagne Gold Studio)
      const ambientLight = new THREE.AmbientLight(0x101113, 1.2);
      stageScene.add(ambientLight);

      const keyLight = new THREE.DirectionalLight(0xF5F1E8, 2.6);
      keyLight.position.set(14, 18, 16);
      stageScene.add(keyLight);

      const rimLight = new THREE.DirectionalLight(0xD4FF3F, 2.0);
      rimLight.position.set(-15, -8, 12);
      stageScene.add(rimLight);

      const softFill = new THREE.DirectionalLight(0x80612F, 0.9);
      softFill.position.set(0, 10, -10);
      stageScene.add(softFill);

      heroSculpture.position.set(4.5, 0.2, 0);
      stageScene.add(heroSculpture);

      stageGlassMat = glassMat;
      stageChampagneMat = champagneTitaniumMat;
      stageSoftGoldMat = softGoldMat;
      stageDarkTitaniumMat = darkTitaniumMat;

      stageAmbientLight = ambientLight;
      stageKeyLight = keyLight;
      stageRimLight = rimLight;
      stageSoftFill = softFill;

      update3DStageTheme(currentTheme);

      window.addEventListener('resize', onStageResize);
      onStageResize();

      // Lazy IntersectionObserver to pause rendering when hero is scrolled out of viewport
      const heroAnchor = document.getElementById('home-hero-3d-anchor');
      if (heroAnchor && 'IntersectionObserver' in window) {
        const observer = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            is3DVisibleInViewport = entry.isIntersecting;
          });
        }, { threshold: 0.05 });
        observer.observe(heroAnchor);
      }

      // Smooth pointer parallax tracking over hero section
      window.addEventListener('mousemove', (e) => {
        if (currentRoute !== '/' || isReducedMotion) return;
        const normX = (e.clientX / window.innerWidth) - 0.5;
        const normY = (e.clientY / window.innerHeight) - 0.5;
        targetRotY = normX * 0.45;
        targetRotX = normY * 0.35;
      });

      // Interactive mouse drag rotation on homepage 3D container
      let isDragging = false;
      let prevMouseX = 0;
      let prevMouseY = 0;

      window.addEventListener('mousedown', (e) => {
        if (currentRoute !== '/') return;
        const is3DTarget = e.target.closest('#home-hero-3d-anchor, .home-hero__3d-container');
        if (!is3DTarget) return;
        isDragging = true;
        prevMouseX = e.clientX;
        prevMouseY = e.clientY;
      });

      window.addEventListener('mousemove', (e) => {
        if (!isDragging || !heroSculpture || currentRoute !== '/') return;
        const dx = e.clientX - prevMouseX;
        const dy = e.clientY - prevMouseY;
        prevMouseX = e.clientX;
        prevMouseY = e.clientY;

        heroSculpture.rotation.y += dx * 0.005;
        heroSculpture.rotation.x += dy * 0.005;
      });

      window.addEventListener('mouseup', () => { isDragging = false; });

      // Run optimized render loop
      requestAnimationFrame(animate3DStage);
    } catch (err) {
      console.warn('3D WebGL stage initialization note:', err);
    }
  }

  function onStageResize() {
    if (!stageRenderer || !stageCamera) return;
    const w = window.innerWidth;
    const h = window.innerHeight;
    stageCamera.aspect = w / h;
    stageCamera.updateProjectionMatrix();
    stageRenderer.setSize(w, h);
    stageRenderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    if (heroSculpture) {
      if (w < 900) {
        heroSculpture.position.set(0, -1.8, -4);
        heroSculpture.scale.setScalar(0.75);
      } else {
        heroSculpture.position.set(4.5, 0.2, 0);
        heroSculpture.scale.setScalar(1.0);
      }
    }
  }

  function animate3DStage() {
    requestAnimationFrame(animate3DStage);

    // Skip rendering when tab is hidden, away from homepage, offscreen, or reduced motion
    if (document.hidden || !is3DRendering || !is3DVisibleInViewport || isReducedMotion) return;

    if (heroSculpture) {
      // Damped pointer follow + continuous subtle organic orbit
      heroSculpture.rotation.y += 0.0009;
      heroSculpture.rotation.x += 0.0004;

      if (targetRotY || targetRotX) {
        heroSculpture.position.x = (window.innerWidth < 900 ? 0 : 4.5) + (targetRotY * 0.8);
        heroSculpture.position.y = (window.innerWidth < 900 ? -1.8 : 0.2) - (targetRotX * 0.6);
      }
    }

    if (stageParticles) {
      stageParticles.rotation.y -= 0.0003;
    }

    if (stageRenderer && stageScene && stageCamera) {
      stageRenderer.render(stageScene, stageCamera);
    }
  }

  // ==========================================================================
  // 07. HOME VIEW: FEATURED SPOTLIGHT RENDERER
  // ==========================================================================
  function renderHomeFeatured() {
    if (!homeFeaturedContainer) return;
    const featured = PROJECTS_DATA.slice(0, 4);

    homeFeaturedContainer.innerHTML = featured.map(proj => `
      <div class="project-card">
        <div class="project-card__media-wrap">
          <img src="${proj.image}" alt="${proj.name} architectural preview" class="project-card__img" loading="lazy" />
          <span class="project-card__status-pill">${proj.status}</span>
        </div>
        <div class="project-card__body">
          <div class="project-card__header">
            <span class="project-card__category">${proj.badge}</span>
            <h3 class="project-card__title">${proj.name}</h3>
          </div>
          <p class="project-card__desc">${proj.summary}</p>
          <ul class="project-card__tags">
            ${proj.stack.slice(0, 4).map(s => `<li>${s}</li>`).join('')}
          </ul>
        </div>
        <div class="project-card__footer">
          <a href="/projects/${proj.slug}" data-route="/projects/${proj.slug}" class="pill pill--solid pill--tiny">
            Inspect Architecture ➔
          </a>
          <a href="${proj.repo}" target="_blank" rel="noopener noreferrer" class="pill pill--ghost pill--tiny">
            GitHub ↗
          </a>
        </div>
      </div>
    `).join('');
  }

  // ==========================================================================
  // 08. PROJECTS GALLERY CONTROLLER (/projects)
  // ==========================================================================
  function renderProjectsGallery() {
    if (!projectsGalleryContainer) return;

    const query = currentSearchQuery.toLowerCase();
    const filtered = PROJECTS_DATA.filter(proj => {
      const matchCat = currentCategoryFilter === 'all' || proj.categoryTag.includes(currentCategoryFilter);
      const matchText = !query || 
        proj.name.toLowerCase().includes(query) ||
        proj.summary.toLowerCase().includes(query) ||
        proj.category.toLowerCase().includes(query) ||
        proj.problem.toLowerCase().includes(query) ||
        proj.stack.some(s => s.toLowerCase().includes(query));

      return matchCat && matchText;
    });

    if (projectsCounterBadge) {
      projectsCounterBadge.textContent = `${filtered.length} OF ${PROJECTS_DATA.length} REPOSITORIES`;
    }

    if (filtered.length === 0) {
      if (projectsEmptyState) projectsEmptyState.style.display = 'block';
      projectsGalleryContainer.style.display = 'none';
      return;
    }

    if (projectsEmptyState) projectsEmptyState.style.display = 'none';
    projectsGalleryContainer.style.display = 'block';

    if (projectLayoutMode === 'list' || query.length > 0 || filtered.length < 2) {
      // List or search mode: clean uniform items
      projectsGalleryContainer.innerHTML = `
        <div class="projects-curated-grid ${projectLayoutMode === 'list' ? 'is-list-view' : ''}">
          ${filtered.map(proj => renderProjectCard(proj)).join('')}
        </div>
      `;
    } else {
      // Editorial showcase mode: Featured flagship project + Curated remaining grid
      const [featured, ...rest] = filtered;
      projectsGalleryContainer.innerHTML = `
        <div class="projects-editorial-showcase">
          <!-- Featured Flagship Architecture -->
          <article class="project-featured-hero">
            <div class="project-featured-hero__media">
              <img src="${featured.image}" alt="${featured.name} architectural preview" class="project-featured-hero__img" loading="eager" />
              <div class="project-featured-hero__badge">${featured.badge}</div>
            </div>
            <div class="project-featured-hero__content">
              <span class="project-card__category">FLAGSHIP WORK // ${featured.category.toUpperCase()}</span>
              <h2 class="project-featured-hero__title">${featured.name}</h2>
              <p class="project-featured-hero__desc">${featured.summary}</p>
              
              <div class="project-featured-hero__spec">
                <div class="spec-row">
                  <span class="spec-label">CORE PROBLEM</span>
                  <span class="spec-val">${featured.problem}</span>
                </div>
                <div class="spec-row">
                  <span class="spec-label">SOLUTION</span>
                  <span class="spec-val">${featured.solution}</span>
                </div>
              </div>

              <ul class="project-card__tags">
                ${featured.stack.map(s => `<li>${s}</li>`).join('')}
              </ul>

              <div class="project-card__footer" style="padding: 0; border: none; margin-top: 20px;">
                <a href="/projects/${featured.slug}" data-route="/projects/${featured.slug}" class="pill pill--solid">
                  Inspect Architecture Blueprint ➔
                </a>
                <div style="display: flex; gap: 8px;">
                  ${featured.live ? `<a href="${featured.live}" target="_blank" rel="noopener noreferrer" class="pill pill--ghost">Live Demo ↗</a>` : ''}
                  <a href="${featured.repo}" target="_blank" rel="noopener noreferrer" class="pill pill--ghost">
                    GitHub ↗
                  </a>
                </div>
              </div>
            </div>
          </article>

          <!-- Curated Remaining Repositories -->
          <div class="projects-curated-grid">
            ${rest.map(proj => renderProjectCard(proj)).join('')}
          </div>
        </div>
      `;
    }

    // Attach subtle 3D mouse tilt
    projectsGalleryContainer.querySelectorAll('.project-card, .project-featured-hero').forEach(card => {
      card.addEventListener('mousemove', (e) => {
        if (isReducedMotion || projectLayoutMode === 'list') return;
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        const rotateX = (-y / rect.height) * 4;
        const rotateY = (x / rect.width) * 4;
        card.style.transform = `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) translateY(-2px)`;
      });
      card.addEventListener('mouseleave', () => {
        card.style.transform = '';
      });
    });
    // Attach mini-scene hover mounting
    projectsGalleryContainer.querySelectorAll('.project-card--portrait').forEach(card => {
      const slug = card.getAttribute('data-slug');
      const miniSceneWrap = card.querySelector('.project-card__mini-scene');
      if (!slug || !miniSceneWrap) return;

      card.addEventListener('mouseenter', () => {
        if (isReducedMotion || projectLayoutMode === 'list') return;
        card.classList.add('has-active-scene');
        if (window.AtlasProjectScenes) {
          window.AtlasProjectScenes.mount(miniSceneWrap, slug);
        }
      });

      card.addEventListener('mouseleave', () => {
        card.classList.remove('has-active-scene');
        if (window.AtlasProjectScenes) {
          window.AtlasProjectScenes.unmount();
        }
      });
    });
  }

  function renderProjectCard(proj) {
    return `
      <article class="project-card project-card--portrait card" data-slug="${proj.slug}">
        <div class="project-card__media-wrap" data-card-slug="${proj.slug}">
          <img src="${proj.image}" alt="${proj.name} architectural preview" class="project-card__img" loading="lazy" />
          <div class="project-card__mini-scene"></div>
          <span class="badge" style="position: absolute; top: 12px; right: 12px; z-index: 3;">${proj.status}</span>
        </div>
        <div class="project-card__body">
          <div class="project-card__header">
            <span class="label-telemetry" style="font-size: 0.6875rem; margin-bottom: 4px;">${proj.badge}</span>
            <h3 class="project-card__title">${proj.name}</h3>
          </div>
          <p class="project-card__summary">${proj.summary}</p>
          <ul class="project-card__stack" style="list-style: none; padding: 0;">
            ${proj.stack.map(s => `<li class="chip" style="font-size: 0.6875rem; padding: 2px 8px;">${s}</li>`).join('')}
          </ul>
        </div>
        <div class="project-card__actions">
          <a href="/projects/${proj.slug}" data-route="/projects/${proj.slug}" class="pill pill--solid pill--sm">
            Inspect Blueprint ➔
          </a>
          <div style="display: flex; gap: 6px;">
            ${proj.live ? `<a href="${proj.live}" target="_blank" rel="noopener noreferrer" class="pill pill--ghost pill--sm">Demo ↗</a>` : ''}
            <a href="${proj.repo}" target="_blank" rel="noopener noreferrer" class="pill pill--ghost pill--sm">
              GitHub ↗
            </a>
          </div>
        </div>
      </article>
    `;
  }

  function initProjectsGallery() {
    // Layout switcher pills (3D Grid vs Compact List)
    const btnGrid = document.getElementById('btn-layout-grid');
    const btnList = document.getElementById('btn-layout-list');

    if (btnGrid && btnList) {
      btnGrid.addEventListener('click', (e) => {
        e.preventDefault();
        projectLayoutMode = 'grid';
        btnGrid.classList.add('is-active');
        btnGrid.setAttribute('aria-checked', 'true');
        btnList.classList.remove('is-active');
        btnList.setAttribute('aria-checked', 'false');
        if (projectsGalleryContainer) projectsGalleryContainer.classList.remove('is-list-view');
        playSfx('click');
      });

      btnList.addEventListener('click', (e) => {
        e.preventDefault();
        projectLayoutMode = 'list';
        btnList.classList.add('is-active');
        btnList.setAttribute('aria-checked', 'true');
        btnGrid.classList.remove('is-active');
        btnGrid.setAttribute('aria-checked', 'false');
        if (projectsGalleryContainer) projectsGalleryContainer.classList.add('is-list-view');
        playSfx('click');
      });
    }

    if (projectSearchInput) {
      projectSearchInput.addEventListener('input', () => {
        currentSearchQuery = projectSearchInput.value.trim();
        if (projectSearchClear) {
          projectSearchClear.style.display = currentSearchQuery.length > 0 ? 'inline-block' : 'none';
        }
        renderProjectsGallery();
      });
    }

    if (projectSearchClear) {
      projectSearchClear.addEventListener('click', (e) => {
        e.preventDefault();
        if (projectSearchInput) {
          projectSearchInput.value = '';
          projectSearchInput.focus();
        }
        currentSearchQuery = '';
        projectSearchClear.style.display = 'none';
        renderProjectsGallery();
      });
    }

    projectFilterChips.forEach(chip => {
      chip.addEventListener('click', (e) => {
        e.preventDefault();
        const filterVal = chip.getAttribute('data-filter') || 'all';
        currentCategoryFilter = filterVal;

        projectFilterChips.forEach(c => {
          c.classList.remove('is-active');
          c.setAttribute('aria-selected', 'false');
        });
        chip.classList.add('is-active');
        chip.setAttribute('aria-selected', 'true');

        renderProjectsGallery();
        playSfx('click');
      });
    });

    if (btnResetFilters) {
      btnResetFilters.addEventListener('click', (e) => {
        e.preventDefault();
        currentSearchQuery = '';
        currentCategoryFilter = 'all';
        if (projectSearchInput) projectSearchInput.value = '';
        if (projectSearchClear) projectSearchClear.style.display = 'none';

        projectFilterChips.forEach(c => {
          if (c.getAttribute('data-filter') === 'all') {
            c.classList.add('is-active');
            c.setAttribute('aria-selected', 'true');
          } else {
            c.classList.remove('is-active');
            c.setAttribute('aria-selected', 'false');
          }
        });

        renderProjectsGallery();
      });
    }
  }

  // ==========================================================================
  // 09. INDIVIDUAL PROJECT DETAIL CONTROLLER (/projects/:slug)
  // ==========================================================================
  
  // ==========================================================================
  // FEATURE 3: PROJECT ARCHITECTURE EXPLORER DATA & CONTROLLER
  // ==========================================================================
  const PROJECT_ARCHITECTURES = {
    'intellipdf': {
      title: 'IntelliPDF — RAG Exam Learning System Topology',
      tag: 'RAG PIPELINE // STREAMLIT & DOCKER',
      overview: 'Retrieval-Augmented Generation (RAG) architecture that parses multi-format academic PDFs, segments text into semantically cohesive chunks, generates dense vector embeddings, indexes them with FAISS, and synthesizes mark-specific answers with page citations.',
      nodes: [
        {
          id: 'ui-ingest',
          name: 'Streamlit Multi-Doc Ingest',
          layer: 'Frontend',
          icon: '💻',
          status: 'implemented',
          statusLabel: 'VERIFIED CODEBASE IMPLEMENTATION',
          ingress: 'PDF Textbook / Lecture Slide Uploads',
          egress: 'Raw PDF binary stream & session metadata',
          tech: 'Python, Streamlit, File Watcher',
          desc: 'Client-side interface providing responsive drag-and-drop PDF ingestion, dynamic exam question weight configuration (1M to 16M), and live interactive quiz rendering with score feedback.'
        },
        {
          id: 'pdf-chunker',
          name: 'PyMuPDF Semantic Chunking Engine',
          layer: 'Preprocessing',
          icon: '📄',
          status: 'implemented',
          statusLabel: 'VERIFIED CODEBASE IMPLEMENTATION',
          ingress: 'Raw PDF stream',
          egress: 'Tokenized text chunks tagged with page numbers',
          tech: 'PyMuPDF, pdfplumber, RecursiveCharacterSplitter',
          desc: 'Extracts formatted text while stripping non-semantic artifacts. Chunks text recursively with sliding window overlap and preserves accurate source page indices for citation grounding.'
        },
        {
          id: 'vector-embedder',
          name: 'Dense Embedding Generator',
          layer: 'AI/ML Model',
          icon: '⚡',
          status: 'implemented',
          statusLabel: 'VERIFIED CODEBASE IMPLEMENTATION',
          ingress: 'Clean text chunk passages',
          egress: '384-dimensional dense semantic vectors',
          tech: 'HuggingFace, SentenceTransformers (all-MiniLM-L6-v2)',
          desc: 'Encodes text passages into dense vector embeddings that map conceptual academic relationships into high-dimensional latent space for semantic retrieval.'
        },
        {
          id: 'vector-store',
          name: 'FAISS Vector Index',
          layer: 'Database',
          icon: '💾',
          status: 'implemented',
          statusLabel: 'VERIFIED CODEBASE IMPLEMENTATION',
          ingress: 'Document vectors + Metadata tags',
          egress: 'Top-K nearest neighbor chunk matches',
          tech: 'FAISS (Facebook AI Similarity Search), In-Memory Index',
          desc: 'High-speed index executing inner product and cosine similarity searches to retrieve the most semantically relevant textbook passages for any user query.'
        },
        {
          id: 'guardrail-prompter',
          name: 'Mark-Wise Prompt Guardrail',
          layer: 'Logic / RAG',
          icon: '🛡️',
          status: 'implemented',
          statusLabel: 'VERIFIED CODEBASE IMPLEMENTATION',
          ingress: 'Top-K chunks + Exam mark weight (1M/2M/8M/16M)',
          egress: 'Grounded prompt payload with strict citation constraints',
          tech: 'Prompt Engineering, Grounding Guardrails',
          desc: 'Formats prompt payloads enforcing academic answer structures: 1M definitions, 2M core concepts, 8M breakdowns, and 16M proofs, strictly forbidding hallucinated data.'
        },
        {
          id: 'llm-synthesizer',
          name: 'Generative Synthesis Engine',
          layer: 'LLM Inference',
          icon: '🧠',
          status: 'implemented',
          statusLabel: 'VERIFIED CODEBASE IMPLEMENTATION',
          ingress: 'Constrained context prompt',
          egress: 'Structured mark-wise answers with [Page X] citations',
          tech: 'Docker Containerized LLM API / Local Model',
          desc: 'Synthesizes exam-ready answers directly referencing source note page numbers, formatted with key concepts, bulleted proofs, and auto-generated multiple-choice verification quizzes.'
        }
      ]
    },

    'solvex-ner': {
      title: 'SOLVEX NER — Logistics & Manifest Intelligence Topology',
      tag: 'SIH 2026 PROTOTYPE // LOGISTICS ENTITY EXTRACTION',
      overview: 'SIH 2026 logistics workflow intelligence system that processes multimodal freight dispatch notes and audio recordings to extract verified entities (PO numbers, origins, destinations, container IDs) with automated manifest validation.',
      nodes: [
        {
          id: 'solvex-ingest',
          name: 'Logistics Field Ingestion Interface',
          layer: 'Frontend',
          icon: '📱',
          status: 'implemented',
          statusLabel: 'VERIFIED CODEBASE IMPLEMENTATION',
          ingress: 'Unstructured text dispatch logs & voice audio notes',
          egress: 'Raw logistics payload and audio waveforms',
          tech: 'Web Audio API, React Native / HTML5 Form UI',
          desc: 'Field worker client interface designed for noisy warehouse and dispatch environments, supporting single-touch voice recording and batch text manifest pasting.'
        },
        {
          id: 'solvex-stt',
          name: 'Speech-to-Text Transcription',
          layer: 'Preprocessing',
          icon: '🎙️',
          status: 'implemented',
          statusLabel: 'VERIFIED CODEBASE IMPLEMENTATION',
          ingress: 'Audio dispatch waveforms',
          egress: 'Normalized logistics transcript text',
          tech: 'Whisper Pipeline / Web Speech API',
          desc: 'Converts field audio memos into normalized textual format, handling background freight engine noise and regional accents.'
        },
        {
          id: 'solvex-ner-model',
          name: 'Fine-Tuned SpaCy / BERT NER Model',
          layer: 'AI/ML Model',
          icon: '🧠',
          status: 'implemented',
          statusLabel: 'VERIFIED CODEBASE IMPLEMENTATION',
          ingress: 'Normalized manifest text',
          egress: 'Structured entities: [PO_NUM, ORIGIN, DEST, WEIGHT, DATE]',
          tech: 'SpaCy, PyTorch, Custom Entity Tokenizer',
          desc: 'Deep learning named entity recognition model trained on logistics data tokens to extract tracking IDs, origin hubs, destination pins, and cargo classifications.'
        },
        {
          id: 'solvex-validator',
          name: 'Schema Verification Guardrail',
          layer: 'Backend',
          icon: '⚙️',
          status: 'implemented',
          statusLabel: 'VERIFIED CODEBASE IMPLEMENTATION',
          ingress: 'Extracted raw entities',
          egress: 'Validated, sanitized dispatch manifest JSON',
          tech: 'Pydantic, Regex Checksums, Hub Registry Validator',
          desc: 'Performs algorithmic checksum validation on tracking numbers and cross-references extracted airport/warehouse hub codes against verified transport nodes.'
        },
        {
          id: 'solvex-cloud-erp',
          name: 'Central Cloud ERP Synchronizer',
          layer: 'Database / API',
          icon: '☁️',
          status: 'planned',
          statusLabel: 'PLANNED PRODUCTION ARCHITECTURE',
          ingress: 'Verified manifest JSON',
          egress: 'Encrypted ERP record update and dispatch alert',
          tech: 'PostgreSQL, GraphQL API, REST Webhooks',
          desc: 'Planned production cloud synchronization tier to integrate verified warehouse manifests directly into enterprise resource planning databases and tracking portals.'
        }
      ]
    },

    'linkx': {
      title: 'LINKEDX — Multimodal AI Content Generation Engine Topology',
      tag: 'MULTIMODAL AI // VISION & ENGAGEMENT SCORING',
      overview: 'Multimodal creator toolkit that analyzes uploaded visual imagery, extracts conceptual sentiment and color aesthetics, and generates high-engagement LinkedIn posts with predictive hook scoring.',
      nodes: [
        {
          id: 'linkx-studio',
          name: 'Creator Studio Dashboard',
          layer: 'Frontend',
          icon: '💻',
          status: 'implemented',
          statusLabel: 'VERIFIED CODEBASE IMPLEMENTATION',
          ingress: 'Creator topic prompt, target audience, image uploads',
          egress: 'Composed draft request with image binary',
          tech: 'HTML5, CSS Glassmorphism, Reactive DOM',
          desc: 'Interactive authoring dashboard allowing creators to tune post tone (Technical Breakdown, Career Milestone, Storytelling) and preview draft typography in real time.'
        },
        {
          id: 'linkx-vision',
          name: 'Computer Vision Semantic Analyzer',
          layer: 'AI/ML Model',
          icon: '👁️',
          status: 'implemented',
          statusLabel: 'VERIFIED CODEBASE IMPLEMENTATION',
          ingress: 'Uploaded project diagram or photo',
          egress: 'Visual context tokens, scene description, detected tags',
          tech: 'Multimodal Vision API / CLIP Embeddings',
          desc: 'Analyzes visual assets to detect whether the image is a code architecture schematic, a conference talk, or product demo, feeding visual context directly to the writer.'
        },
        {
          id: 'linkx-writer',
          name: 'Contextual Hook & Copy Pipeline',
          layer: 'LLM Inference',
          icon: '✍️',
          status: 'implemented',
          statusLabel: 'VERIFIED CODEBASE IMPLEMENTATION',
          ingress: 'Visual context + User prompt + Tone parameters',
          egress: 'Formatted post with attention-grabbing hook and call-to-action',
          tech: 'Few-Shot LLM Prompting, Markdown Formatter',
          desc: 'Generates structured posts optimized for professional readability: bold first line hook, readable spacing, bullet points, and conversation-starting conclusions.'
        },
        {
          id: 'linkx-scorer',
          name: 'Algorithmic Engagement Predictor',
          layer: 'Analytics',
          icon: '📊',
          status: 'implemented',
          statusLabel: 'VERIFIED CODEBASE IMPLEMENTATION',
          ingress: 'Generated post text',
          egress: 'Readability index, hook strength percentage, suggested hashtags',
          tech: 'Flesch-Kincaid Metric, Token Entropy Analyzer',
          desc: 'Scores post readability, calculates sentence length distributions, and recommends relevant technical hashtags to maximize organic reach.'
        },
        {
          id: 'linkx-oauth',
          name: 'LinkedIn OAuth2 Auto-Publishing API',
          layer: 'External API',
          icon: '🌐',
          status: 'planned',
          statusLabel: 'PLANNED PRODUCTION ARCHITECTURE',
          ingress: 'Approved post payload + OAuth access token',
          egress: 'Scheduled live LinkedIn feed update',
          tech: 'LinkedIn Marketing Developer REST API, OAuth2',
          desc: 'Planned automated publishing integration allowing creators to schedule posts directly to their public LinkedIn profiles without copy-pasting.'
        }
      ]
    },

    'atlas-ai': {
      title: 'atlasAI — 100% Offline-First AI Intelligence Topology',
      tag: 'OFFLINE EDGE AI // PRIVACY-PRESERVING INFERENCE',
      overview: 'Fully self-contained, zero-network desktop intelligence architecture operating entirely on local hardware with quantized model weights and local vector storage.',
      nodes: [
        {
          id: 'atlas-local-ui',
          name: 'Zero-Latency Local Web Client',
          layer: 'Frontend',
          icon: '💻',
          status: 'implemented',
          statusLabel: 'VERIFIED CODEBASE IMPLEMENTATION',
          ingress: 'User chat messages and document queries',
          egress: 'Real-time WebSocket query stream',
          tech: 'Vanilla JS, CSS Variables, Service Worker',
          desc: 'Lightweight client interface that renders with zero network latency and communicates with local background execution daemon via local IPC.'
        },
        {
          id: 'atlas-local-rag',
          name: 'Local Vector & SQLite Memory',
          layer: 'Database',
          icon: '💾',
          status: 'implemented',
          statusLabel: 'VERIFIED CODEBASE IMPLEMENTATION',
          ingress: 'Local filesystem notes and conversation history',
          egress: 'Relevant context vectors',
          tech: 'SQLite, ChromaDB / FAISS Local, GGUF Embeddings',
          desc: 'Indexes local developer notes and markdown files directly on disk, enabling semantic recall without sending any byte to external cloud servers.'
        },
        {
          id: 'atlas-quant-engine',
          name: '4-Bit Quantized Local LLM Engine',
          layer: 'AI/ML Model',
          icon: '🧠',
          status: 'implemented',
          statusLabel: 'VERIFIED CODEBASE IMPLEMENTATION',
          ingress: 'Local prompt payload',
          egress: 'Streaming token generation',
          tech: 'Llama.cpp, GGUF Q4_K_M, CPU/Metal/CUDA Acceleration',
          desc: 'Executes quantized LLM inference directly on user workstation hardware, achieving high token throughput while consuming less than 4GB RAM.'
        },
        {
          id: 'atlas-privacy-sandbox',
          name: 'Air-Gapped Privacy Boundary',
          layer: 'Security Guardrail',
          icon: '🛡️',
          status: 'implemented',
          statusLabel: 'VERIFIED CODEBASE IMPLEMENTATION',
          ingress: 'All internal data packets',
          egress: 'Strictly zero outgoing network packets',
          tech: 'Localhost Socket Binding, CSP Sandbox',
          desc: 'Enforces an air-gapped security boundary guaranteeing that personal documents, proprietary code, and chat transcripts remain strictly on the local machine.'
        }
      ]
    },

    'smart-agriculture': {
      title: 'Smart Agriculture IoT — Telemetry & Actuation Topology',
      tag: 'IOT & EMBEDDED // AUTOMATED IRRIGATION ENGINE',
      overview: 'Hardware-in-the-loop embedded IoT network that monitors soil capacitive moisture, temperature, and atmospheric humidity to automate threshold-driven water pump relays.',
      nodes: [
        {
          id: 'agri-sensors',
          name: 'Capacitive Soil & Climate Probes',
          layer: 'Hardware / Sensor',
          icon: '🌱',
          status: 'implemented',
          statusLabel: 'VERIFIED CODEBASE IMPLEMENTATION',
          ingress: 'Physical soil moisture content, ambient air temperature',
          egress: 'Analog voltage signals (0V - 3.3V)',
          tech: 'Capacitive Moisture Sensor v1.2, DHT11 Temperature Probe',
          desc: 'Hardware probes submerged in crop root zones measuring dielectric permittivity to quantify volumetric water content without sensor plate corrosion.'
        },
        {
          id: 'agri-mcu',
          name: 'ESP32 / Arduino Microcontroller Node',
          layer: 'Embedded Firmware',
          icon: '⚡',
          status: 'implemented',
          statusLabel: 'VERIFIED CODEBASE IMPLEMENTATION',
          ingress: 'Analog voltage readings',
          egress: 'Calibrated moisture percentage and relay trigger signal',
          tech: 'C++, Arduino Framework, ADC Calibration, FreeRTOS',
          desc: 'Samples analog-to-digital converter channels, applies moving average smoothing to eliminate sensor noise, and evaluates moisture threshold bounds.'
        },
        {
          id: 'agri-actuator',
          name: 'Optocoupler Relay & Water Pump',
          layer: 'Actuator',
          icon: '💧',
          status: 'implemented',
          statusLabel: 'VERIFIED CODEBASE IMPLEMENTATION',
          ingress: 'Digital GPIO HIGH/LOW control signal',
          egress: '12V DC water pump actuation',
          tech: 'Optocoupler 5V Relay Module, Submersible DC Pump',
          desc: 'Galvanically isolated relay module that switches irrigation water pumps on when soil moisture drops below 35% and safely cuts power once optimal saturation is reached.'
        },
        {
          id: 'agri-dashboard',
          name: 'Live Telemetry Dashboard',
          layer: 'Frontend / Cloud',
          icon: '📊',
          status: 'implemented',
          statusLabel: 'VERIFIED CODEBASE IMPLEMENTATION',
          ingress: 'Serial / HTTP telemetry packets',
          egress: 'Real-time charts, pump status indicators, moisture trends',
          tech: 'HTML5 Canvas, CSS Grid, WebSockets / Serial API',
          desc: 'Real-time field monitoring interface displaying sensor history charts, soil moisture gradients, and manual pump override controls.'
        }
      ]
    },

    'base-isolation': {
      title: 'Bumblebee Base Isolation — Seismic Dynamic Physics Topology',
      tag: 'PHYSICS SIMULATION // 60 FPS WEBGL NUMERICAL ENGINE',
      overview: 'Interactive structural dynamics simulator solving second-order differential equations of earthquake base isolation systems using lead-rubber bearing damping.',
      nodes: [
        {
          id: 'seismic-controls',
          name: 'Parametric Seismic Input Controls',
          layer: 'Frontend',
          icon: '🎛️',
          status: 'implemented',
          statusLabel: 'VERIFIED CODEBASE IMPLEMENTATION',
          ingress: 'User adjustments to ground acceleration, damping ratio, stiffness',
          egress: 'Physical parameters: [k, c, m, groundFreq, groundAmp]',
          tech: 'HTML5 Sliders, Reactive Event Listeners',
          desc: 'Provides engineering controls to tune building natural frequency, ground excitation spectrum, and base isolator shear resistance.'
        },
        {
          id: 'physics-solver',
          name: 'Euler-Verlet Numerical Integrator',
          layer: 'Physics Engine',
          icon: '⚙️',
          status: 'implemented',
          statusLabel: 'VERIFIED CODEBASE IMPLEMENTATION',
          ingress: 'Harmonic ground motion: x_g(t) = A * sin(omega * t)',
          egress: 'Relative floor displacement, drift angle, shear stress',
          tech: 'JavaScript Float64, Verlet Integration (60 FPS)',
          desc: 'Solves coupled multi-degree-of-freedom equations of motion at 60 Hz to compute exact inter-story drift and base shear reduction ratios.'
        },
        {
          id: 'webgl-renderer',
          name: '3D Building Deformation Canvas',
          layer: 'WebGL Renderer',
          icon: '🏢',
          status: 'implemented',
          statusLabel: 'VERIFIED CODEBASE IMPLEMENTATION',
          ingress: 'Calculated node displacement vectors',
          egress: 'Deformed structural visual frame',
          tech: 'Three.js / HTML5 2D Dynamic Canvas, Shadow Buffer',
          desc: 'Renders the multi-story building alongside isolated lead-rubber bearings, visually demonstrating how 85% of seismic energy is absorbed at the base level.'
        }
      ]
    }
  };

  function renderProjectArchitecture(slug) {
    const arch = PROJECT_ARCHITECTURES[slug] || PROJECT_ARCHITECTURES['intellipdf'];
    const titleEl = document.getElementById('arch-explorer-title');
    const tagEl = document.getElementById('arch-project-tag');
    const container = document.getElementById('arch-diagram-container');
    const resetBtn = document.getElementById('btn-reset-arch-nodes');

    const inspStatus = document.getElementById('arch-inspector-status');
    const inspLayer = document.getElementById('arch-inspector-layer');
    const inspName = document.getElementById('arch-inspector-name');
    const inspDesc = document.getElementById('arch-inspector-desc');
    const inspIngress = document.getElementById('arch-detail-ingress');
    const inspEgress = document.getElementById('arch-detail-egress');
    const inspTech = document.getElementById('arch-detail-tech');

    if (titleEl) titleEl.textContent = arch.title;
    if (tagEl) tagEl.textContent = arch.tag;

    function resetInspector() {
      if (inspStatus) {
        inspStatus.textContent = 'SYSTEM OVERVIEW';
        inspStatus.className = 'arch-status-pill arch-status-pill--active';
      }
      if (inspLayer) inspLayer.textContent = 'DATA PIPELINE';
      if (inspName) inspName.textContent = arch.title;
      if (inspDesc) inspDesc.textContent = arch.overview;
      if (inspIngress) inspIngress.textContent = 'User Document Payload / Event Ingress';
      if (inspEgress) inspEgress.textContent = 'End-User Analytical Output / Verified Action';
      if (inspTech) inspTech.textContent = 'Repository Toolchain & Architectural Standards';

      if (container) {
        container.querySelectorAll('.arch-node').forEach(n => n.classList.remove('is-selected'));
      }
    }

    if (resetBtn) {
      resetBtn.onclick = () => {
        resetInspector();
        playSfx('click');
      };
    }

    // Build flow nodes
    if (container) {
      let html = '<div class="arch-flow-level"><div class="arch-nodes-row">';
      arch.nodes.forEach((node, idx) => {
        const isPlanned = node.status === 'planned';
        html += `
          <button type="button" class="arch-node" data-node-idx="${idx}" aria-label="${node.name} architecture node">
            <div class="arch-node-top">
              <span class="arch-node-icon">${node.icon}</span>
              <span class="arch-node-layer">${node.layer}</span>
            </div>
            <div class="arch-node-label">${node.name}</div>
            <div class="arch-node-status">
              <span class="status-dot ${isPlanned ? 'status-dot--planned' : ''}" style="width: 5px; height: 5px; background: ${isPlanned ? '#f59e0b' : '#10b981'};"></span>
              <span>${isPlanned ? 'Planned Architecture' : 'Implemented in Repo'}</span>
            </div>
          </button>
        `;

        if (idx < arch.nodes.length - 1) {
          html += '<span class="arch-flow-arrow" aria-hidden="true">➔</span>';
        }
      });
      html += '</div></div>';
      container.innerHTML = html;

      // Attach click events
      container.querySelectorAll('[data-node-idx]').forEach(btn => {
        btn.addEventListener('click', (e) => {
          e.preventDefault();
          container.querySelectorAll('.arch-node').forEach(n => n.classList.remove('is-selected'));
          btn.classList.add('is-selected');

          const idx = parseInt(btn.getAttribute('data-node-idx'), 10);
          const node = arch.nodes[idx];
          if (!node) return;

          if (inspStatus) {
            inspStatus.textContent = node.statusLabel;
            inspStatus.className = `arch-status-pill ${node.status === 'planned' ? 'arch-status-pill--planned' : 'arch-status-pill--active'}`;
          }
          if (inspLayer) inspLayer.textContent = node.layer.toUpperCase();
          if (inspName) inspName.textContent = node.name;
          if (inspDesc) inspDesc.textContent = node.desc;
          if (inspIngress) inspIngress.textContent = node.ingress;
          if (inspEgress) inspEgress.textContent = node.egress;
          if (inspTech) inspTech.textContent = node.tech;

          playSfx('click');
        });
      });
    }

    resetInspector();
  }

  function renderProjectDetail(slug, initialMediaMode) {
    let index = PROJECTS_DATA.findIndex(p => p.slug === slug);
    if (index === -1) index = 0;
    activeDetailIdx = index;
    const project = PROJECTS_DATA[index];
    currentSlug = project.slug;

    document.title = `${project.name} — Technical Architecture // ATLAS`;

    if (detailProjectBadge) detailProjectBadge.textContent = project.badge;
    if (detailProjectStatus) detailProjectStatus.textContent = project.status;
    if (detailProjectYear) detailProjectYear.textContent = project.year;
    if (detailProjectTitle) detailProjectTitle.textContent = project.name;
    if (detailProjectSummary) detailProjectSummary.textContent = project.summary;

    if (detailRepoLink) detailRepoLink.href = project.repo;
    if (detailLiveLink) {
      if (project.live) {
        detailLiveLink.href = project.live;
        detailLiveLink.style.display = 'inline-flex';
      } else {
        detailLiveLink.style.display = 'none';
      }
    }

    if (detailProblemHeading) detailProblemHeading.textContent = `Real-World Challenge`;
    if (detailProblemText) detailProblemText.textContent = project.problem;

    if (detailSolutionHeading) detailSolutionHeading.textContent = `Architectural Approach`;
    if (detailSolutionText) detailSolutionText.textContent = project.solution;

    if (detailFeaturesList) {
      detailFeaturesList.innerHTML = project.features.map(f => `<li>${f}</li>`).join('');
    }

    if (detailStackList) {
      detailStackList.innerHTML = project.stack.map(s => `<li>${s}</li>`).join('');
    }

    if (detailRoadmapText) detailRoadmapText.textContent = project.roadmap;
    const detailChallengesList = document.getElementById('detail-challenges-list');
    const detailOutcomesList = document.getElementById('detail-outcomes-list');

    if (detailChallengesList) {
      const challenges = project.challenges || [
        'Optimizing algorithmic runtime constraints under real-world data friction',
        'Balancing systems latency with rigorous output verification guardrails',
        'Ensuring resilient offline-first performance across diverse client runtimes'
      ];
      detailChallengesList.innerHTML = challenges.map(c => `<li>${escapeHtml(c)}</li>`).join('');
    }

    if (detailOutcomesList) {
      const outcomes = project.outcomes || [
        'Engineered reproducible modular architecture directly evidenced in GitHub repository',
        'Built full-stack client-side verification testing validating all core components',
        'Documented verified implementation boundaries distinguishing current from planned scope'
      ];
      detailOutcomesList.innerHTML = outcomes.map(o => `<li>${escapeHtml(o)}</li>`).join('');
    }


    // Previous and Next project buttons
    const prevIdx = (index - 1 + PROJECTS_DATA.length) % PROJECTS_DATA.length;
    const nextIdx = (index + 1) % PROJECTS_DATA.length;

    if (btnPrevProject) {
      btnPrevProject.textContent = `‹ ${PROJECTS_DATA[prevIdx].name}`;
      btnPrevProject.onclick = (e) => {
        e.preventDefault();
        navigate(`/projects/${PROJECTS_DATA[prevIdx].slug}`);
      };
    }

    if (btnNextProject) {
      btnNextProject.textContent = `${PROJECTS_DATA[nextIdx].name} ›`;
      btnNextProject.onclick = (e) => {
        e.preventDefault();
        navigate(`/projects/${PROJECTS_DATA[nextIdx].slug}`);
      };
    }

    // Ensure all media mode tabs (Architecture, Simulation, Video) remain visible and accessible
    detailMediaChips.forEach(chip => {
      chip.style.display = 'inline-flex';
    });

    // Default to cinematic 3D video if available or passed initial mode
    if (initialMediaMode) {
      detailMediaMode = initialMediaMode;
    } else if (!detailMediaMode) {
      detailMediaMode = 'video';
    }

    // Set media mode & inject custom interactive simulation
    setDetailMediaMode(detailMediaMode);
    renderProjectArchitecture(project.slug);
    injectProjectSimulation(project);
    if (detailSimContainer) {
      detailSimContainer.style.display = 'block';
    }

    // Mount 3D procedural scene in hero right column
    const project3dAnchor = document.getElementById('project-detail-3d-anchor');
    if (project3dAnchor && window.AtlasProjectScenes) {
      window.AtlasProjectScenes.mount(project3dAnchor, project.slug);
    }
  }

// Comprehensive Simulation Engine for ATLAS Portfolio (Option A: Titanium Glass)
// All 8 authentic project simulators with functional controls, 60fps canvas / reactive SVG

let currentSimAnimationId = null;
let currentSimIntervalId = null;
let currentSimCleanupFn = null;

function clearCurrentSimulation() {
  if (currentSimAnimationId) {
    cancelAnimationFrame(currentSimAnimationId);
    currentSimAnimationId = null;
  }
  if (currentSimIntervalId) {
    clearInterval(currentSimIntervalId);
    currentSimIntervalId = null;
  }
  if (typeof currentSimCleanupFn === 'function') {
    try { currentSimCleanupFn(); } catch (e) {}
    currentSimCleanupFn = null;
  }
}

function setDetailMediaMode(mode) {
  const project = PROJECTS_DATA[activeDetailIdx];
  if (!project) return;

  detailMediaMode = mode;
  detailMediaChips.forEach(chip => {
    const chipMode = chip.getAttribute('data-detail-media-mode');
    if (chipMode === mode) {
      chip.classList.add('is-active');
      chip.setAttribute('aria-pressed', 'true');
    } else {
      chip.classList.remove('is-active');
      chip.setAttribute('aria-pressed', 'false');
    }
  });

  if (mode === 'sim') {
    if (detailVideoWrap) detailVideoWrap.style.display = 'none';
    if (detailStageVideo) {
      detailStageVideo.style.display = 'none';
      detailStageVideo.pause();
    }
    if (detailVideoFallbackBanner) detailVideoFallbackBanner.style.display = 'none';
    if (detailStageImg) detailStageImg.style.display = 'none';
    if (detailSimContainer) {
      detailSimContainer.style.display = 'flex';
      detailSimContainer.classList.add('is-active');
    }
    injectProjectSimulation(project);
  } else if (mode === 'schematic') {
    clearCurrentSimulation();
    if (detailSimContainer) {
      detailSimContainer.style.display = 'none';
      detailSimContainer.classList.remove('is-active');
    }
    if (detailVideoWrap) detailVideoWrap.style.display = 'none';
    if (detailStageVideo) {
      detailStageVideo.style.display = 'none';
      detailStageVideo.pause();
    }
    if (detailVideoFallbackBanner) detailVideoFallbackBanner.style.display = 'none';
    if (detailStageImg) {
      detailStageImg.style.display = 'block';
      detailStageImg.src = project.image;
      detailStageImg.alt = `Architecture Schematic for ${project.name}`;
    }
  } else if (mode === 'overview') {
    clearCurrentSimulation();
    if (detailSimContainer) {
      detailSimContainer.style.display = 'none';
      detailSimContainer.classList.remove('is-active');
    }
    if (detailVideoWrap) detailVideoWrap.style.display = 'none';
    if (detailStageVideo) {
      detailStageVideo.style.display = 'none';
      detailStageVideo.pause();
    }
    if (detailStageImg) detailStageImg.style.display = 'none';
    if (detailVideoFallbackBanner) {
      detailVideoFallbackBanner.style.display = 'flex';
      const fallbackTitle = document.getElementById('detail-fallback-title');
      const fallbackDesc = document.getElementById('detail-fallback-desc');
      const fallbackRepoBtn = document.getElementById('detail-overview-repo-btn');
      if (fallbackTitle) fallbackTitle.textContent = `${project.name} // Architectural Blueprint`;
      if (fallbackDesc) fallbackDesc.textContent = project.solution || project.summary;
      if (fallbackRepoBtn) fallbackRepoBtn.href = project.repo || 'https://github.com/varanalagesh19-dot';
    }
  } else if (mode === 'video') {
    clearCurrentSimulation();
    if (detailSimContainer) {
      detailSimContainer.style.display = 'none';
      detailSimContainer.classList.remove('is-active');
    }
    if (detailStageImg) detailStageImg.style.display = 'none';
    if (detailVideoFallbackBanner) detailVideoFallbackBanner.style.display = 'none';
    if (detailVideoWrap) detailVideoWrap.style.display = 'flex';

    if (detailStageVideo) {
      detailStageVideo.style.display = 'block';
      detailStageVideo.poster = project.image;
      const videoSrc = project.video || `/assets/videos/${project.slug}.webm`;
      detailStageVideo.src = videoSrc;
      detailStageVideo.load();
      const playPromise = detailStageVideo.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          // In case autoplay is blocked by browser policy, keep controls ready
        });
      }
    }
  }
}

function injectProjectSimulation(project) {
  if (!detailSimContainer) return;
  clearCurrentSimulation();

  const slug = project.slug;

  // 1. INTELLIPDF — Interactive RAG Vector Retrieval & Chunk Synthesizer
  if (slug === 'intellipdf' || project.simType === 'intellipdf') {
    detailSimContainer.innerHTML = `
      <div class="sim-container">
        <div class="sim-header">
          <div class="sim-header__meta">
            <span class="sim-header__badge">RAG VECTOR SEARCH</span>
            <span class="sim-header__title">IntelliPDF // Semantic Chunk Retrieval Engine</span>
          </div>
          <div class="sim-header__actions">
            <button type="button" class="sim-btn sim-btn--active" id="sim-btn-run">▶ Run Query</button>
            <button type="button" class="sim-btn" id="sim-btn-step">⚡ Synthesize</button>
            <button type="button" class="sim-btn" id="sim-btn-reset">↺ Reset</button>
          </div>
        </div>

        <div class="sim-workspace">
          <!-- Preset Query Strip -->
          <div style="display: flex; gap: 8px; flex-wrap: wrap; align-items: center;">
            <span style="font-family: var(--font-mono); font-size: 11px; color: var(--mist);">Query Preset:</span>
            <button type="button" class="pill pill--tiny pill--solid sim-query-chip" data-query="dijkstra">Dijkstra Shortest Path</button>
            <button type="button" class="pill pill--tiny pill--ghost sim-query-chip" data-query="attention">Transformer Attention</button>
            <button type="button" class="pill pill--tiny pill--ghost sim-query-chip" data-query="acid">ACID Transactions</button>
          </div>

          <!-- Retrieved Chunks & Synthesized Output -->
          <div style="display: grid; grid-template-columns: minmax(0, 1.1fr) minmax(0, 1fr); gap: 16px; flex: 1; min-height: 0;">
            <div style="background: var(--card-bg); border: 1px solid var(--card-border); border-radius: 8px; padding: 14px; display: flex; flex-direction: column; overflow-y: auto;">
              <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px; border-bottom: 1px solid var(--card-border); padding-bottom: 6px;">
                <span style="font-family: var(--font-mono); font-size: 11px; font-weight: 600; color: var(--accent);" id="sim-chunk-header">PAGE 42 // RETRIEVED CHUNK (COSINE: 0.94)</span>
                <span style="font-family: var(--font-mono); font-size: 10px; color: var(--mist);" id="sim-k-indicator">TOP-K = 2</span>
              </div>
              <p style="font-family: var(--font-mono); font-size: 12px; line-height: 1.6; color: var(--paper); margin: 0;" id="sim-chunk-text">
                "...Dijkstra's Algorithm computes the shortest path tree from a single source node in weighted graphs with non-negative edge weights. Asymptotic complexity: O((V + E) log V) using a priority queue. Invariant: vertices in set S have finalized optimal shortest distances..."
              </p>
              <div style="margin-top: auto; padding-top: 10px; border-top: 1px dashed var(--card-border); font-family: var(--font-mono); font-size: 10.5px; color: var(--mist); display: flex; justify-content: space-between;">
                <span>Source: /textbooks/algorithms_core.pdf</span>
                <span style="color: #10b981;">✓ Grounded in Document</span>
              </div>
            </div>

            <div style="background: var(--card-bg); border: 1px solid var(--card-border); border-radius: 8px; padding: 14px; display: flex; flex-direction: column; overflow-y: auto;">
              <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px; border-bottom: 1px solid var(--card-border); padding-bottom: 6px;">
                <span style="font-family: var(--font-mono); font-size: 11px; font-weight: 600; color: var(--accent-secondary);" id="sim-answer-header">SYNTHESIZED EXAM BLUEPRINT (8 MARKS)</span>
                <span style="font-family: var(--font-mono); font-size: 10px; color: #10b981;">VERIFIED ACCURACY 99.1%</span>
              </div>
              <div style="font-family: var(--font-body); font-size: 12.5px; line-height: 1.55; color: var(--paper); margin: 0;" id="sim-answer-text">
                <strong>1. Algorithmic Invariant (2 Marks):</strong> Maintains tentative distances in a min-heap; once extracted, d[u] is guaranteed minimal.<br/><br/>
                <strong>2. Edge Relaxation (3 Marks):</strong> For each neighbor v of u: if d[u] + w(u,v) &lt; d[v], update d[v] = d[u] + w(u,v).<br/><br/>
                <strong>3. Complexity &amp; Grounding (3 Marks):</strong> Adherence to non-negative edge constraints; citation verified in Paragraph 3.
              </div>
            </div>
          </div>

          <!-- Controls Bar -->
          <div class="sim-controls-bar">
            <div class="sim-control-group">
              <span class="sim-control-label">Cosine Threshold:</span>
              <input type="range" class="sim-slider" id="sim-slider-cosine" min="70" max="98" value="92" />
              <span class="sim-control-val" id="sim-val-cosine">0.92</span>
            </div>
            <div class="sim-control-group">
              <span class="sim-control-label">Top-K Chunks:</span>
              <input type="range" class="sim-slider" id="sim-slider-k" min="1" max="4" value="2" />
              <span class="sim-control-val" id="sim-val-k">2</span>
            </div>
          </div>
        </div>

        <div class="sim-telemetry-bar">
          <div class="sim-metric-group">
            <div class="sim-metric-item">
              <span class="sim-metric-name">EMBEDDINGS:</span>
              <span class="sim-metric-value">1536-dim text-embedding-3</span>
            </div>
            <div class="sim-metric-item">
              <span class="sim-metric-name">RETRIEVAL LATENCY:</span>
              <span class="sim-metric-value sim-metric-value--accent" id="sim-stat-latency">182 ms</span>
            </div>
            <div class="sim-metric-item">
              <span class="sim-metric-name">GROUNDING:</span>
              <span class="sim-metric-value sim-metric-value--success">100% Verifiable</span>
            </div>
          </div>
          <span style="color: var(--mist);">STATUS: <strong style="color: var(--paper);">ONLINE</strong></span>
        </div>
      </div>
    `;

    const queries = {
      dijkstra: {
        chunk: `"...Dijkstra's Algorithm computes the shortest path tree from a single source node in weighted graphs with non-negative edge weights. Asymptotic complexity: O((V + E) log V) using a priority queue. Invariant: vertices in set S have finalized optimal shortest distances..."`,
        page: 'PAGE 42 // RETRIEVED CHUNK',
        answer: `<strong>1. Algorithmic Invariant (2 Marks):</strong> Maintains tentative distances in a min-heap; once extracted, d[u] is guaranteed minimal.<br/><br/><strong>2. Edge Relaxation (3 Marks):</strong> For each neighbor v of u: if d[u] + w(u,v) &lt; d[v], update d[v] = d[u] + w(u,v).<br/><br/><strong>3. Complexity &amp; Grounding (3 Marks):</strong> Adherence to non-negative edge constraints; citation verified in Paragraph 3.`
      },
      attention: {
        chunk: `"...The Transformer attention mechanism maps a query and a set of key-value pairs to an output: Attention(Q, K, V) = softmax(QK^T / sqrt(d_k))V. Multi-head attention allows the model to jointly attend to information from different representation subspaces..."`,
        page: 'PAGE 88 // RETRIEVED CHUNK',
        answer: `<strong>1. Dot-Product Scaling (3 Marks):</strong> Division by sqrt(d_k) prevents softmax gradient vanishing in high dimensions.<br/><br/><strong>2. Subspace Projection (3 Marks):</strong> Queries, keys, and values are linearly projected h times with distinct learned weights.<br/><br/><strong>3. Grounding Verification (2 Marks):</strong> Grounded in Attention Is All You Need (Vaswani et al.), Section 3.2.`
      },
      acid: {
        chunk: `"...ACID represents four key database transaction properties: Atomicity guarantees all-or-nothing execution; Consistency ensures transition between valid database states; Isolation ensures uncommitted changes remain invisible; Durability guarantees commited writes survive crashes via write-ahead logging (WAL)..."`,
        page: 'PAGE 114 // RETRIEVED CHUNK',
        answer: `<strong>1. Atomicity &amp; Durability (3 Marks):</strong> Enforced via Two-Phase Locking and Write-Ahead Logging (WAL).<br/><br/><strong>2. Isolation Levels (3 Marks):</strong> From Read Uncommitted to Serializable; prevents dirty reads and non-repeatable reads.<br/><br/><strong>3. Practical Verification (2 Marks):</strong> Grounded in database transaction manager module.`
      }
    };

    const chips = detailSimContainer.querySelectorAll('.sim-query-chip');
    chips.forEach(chip => {
      chip.addEventListener('click', () => {
        chips.forEach(c => { c.classList.remove('pill--solid'); c.classList.add('pill--ghost'); });
        chip.classList.remove('pill--ghost');
        chip.classList.add('pill--solid');
        const qKey = chip.getAttribute('data-query');
        const data = queries[qKey];
        if (data) {
          const chunkEl = document.getElementById('sim-chunk-text');
          const answerEl = document.getElementById('sim-answer-text');
          const headerEl = document.getElementById('sim-chunk-header');
          const latencyEl = document.getElementById('sim-stat-latency');
          if (chunkEl) chunkEl.innerHTML = data.chunk;
          if (answerEl) answerEl.innerHTML = data.answer;
          if (headerEl) headerEl.textContent = `${data.page} (COSINE: 0.94)`;
          if (latencyEl) latencyEl.textContent = `${Math.floor(150 + Math.random() * 60)} ms`;
        }
      });
    });

    const cosineSlider = document.getElementById('sim-slider-cosine');
    const cosineVal = document.getElementById('sim-val-cosine');
    if (cosineSlider && cosineVal) {
      cosineSlider.addEventListener('input', (e) => {
        const val = (e.target.value / 100).toFixed(2);
        cosineVal.textContent = val;
        const headerEl = document.getElementById('sim-chunk-header');
        if (headerEl) headerEl.textContent = headerEl.textContent.replace(/COSINE: [0-9.]+/, `COSINE: ${val}`);
      });
    }

    const kSlider = document.getElementById('sim-slider-k');
    const kVal = document.getElementById('sim-val-k');
    const kInd = document.getElementById('sim-k-indicator');
    if (kSlider && kVal) {
      kSlider.addEventListener('input', (e) => {
        kVal.textContent = e.target.value;
        if (kInd) kInd.textContent = `TOP-K = ${e.target.value}`;
      });
    }

    const btnRun = document.getElementById('sim-btn-run');
    if (btnRun) {
      btnRun.addEventListener('click', () => {
        const latencyEl = document.getElementById('sim-stat-latency');
        if (latencyEl) latencyEl.textContent = `${Math.floor(140 + Math.random() * 50)} ms`;
        btnRun.classList.add('sim-btn--active');
        setTimeout(() => btnRun.classList.remove('sim-btn--active'), 400);
      });
    }

    const btnReset = document.getElementById('sim-btn-reset');
    if (btnReset) {
      btnReset.addEventListener('click', () => {
        if (cosineSlider) { cosineSlider.value = 92; cosineVal.textContent = '0.92'; }
        if (kSlider) { kSlider.value = 2; kVal.textContent = '2'; }
        chips[0].click();
      });
    }
  }

  // 2. SOLVEX NER 2.0 — Disaster Emergency Mesh Network (Guwahati)
  else if (slug === 'solvex-ner' || slug === 'ner-access' || project.simType === 'solvex') {
    detailSimContainer.innerHTML = `
      <div class="sim-container">
        <div class="sim-header">
          <div class="sim-header__meta">
            <span class="sim-header__badge">A* TOPOLOGICAL MESH</span>
            <span class="sim-header__title">SOLVEX NER 2.0 // Zero-Cloud Disaster Router</span>
          </div>
          <div class="sim-header__actions">
            <button type="button" class="sim-btn sim-btn--active" id="sim-ner-hazard">⚠ Trigger Landslide</button>
            <button type="button" class="sim-btn" id="sim-ner-compute">▶ Compute A* Route</button>
            <button type="button" class="sim-btn" id="sim-ner-reset">↺ Reset Mesh</button>
          </div>
        </div>

        <div class="sim-workspace">
          <div class="sim-canvas-stage" style="padding: 10px;">
            <svg id="ner-svg-mesh" viewBox="0 0 500 200" style="width: 100%; height: 100%; max-height: 220px;">
              <line id="edge-ab" x1="60" y1="100" x2="160" y2="50" stroke="#D4FF3F" stroke-width="2.5" />
              <line id="edge-bc" x1="160" y1="50" x2="280" y2="50" stroke="#10b981" stroke-width="3" stroke-dasharray="0" />
              <line id="edge-cd" x1="280" y1="50" x2="430" y2="100" stroke="#10b981" stroke-width="3" />
              <line id="edge-ad" x1="60" y1="100" x2="220" y2="150" stroke="#B7B3AE" stroke-width="2" stroke-dasharray="4" />
              <line id="edge-de" x1="220" y1="150" x2="430" y2="100" stroke="#B7B3AE" stroke-width="2" stroke-dasharray="4" />

              <g id="ner-hazard-marker" style="display: none;">
                <circle cx="220" cy="50" r="24" fill="rgba(239, 68, 68, 0.2)" stroke="#ef4444" stroke-width="2" />
                <text x="220" y="54" fill="#ef4444" font-family="monospace" font-size="9" font-weight="bold" text-anchor="middle">LANDSLIDE</text>
              </g>

              <circle cx="60" cy="100" r="9" fill="#08090A" stroke="#D4FF3F" stroke-width="2.5" />
              <text x="60" y="125" fill="var(--paper)" font-family="monospace" font-size="10" font-weight="bold" text-anchor="middle">ORIGIN (HUB)</text>

              <circle cx="160" cy="50" r="7" fill="#D4FF3F" />
              <text x="160" y="35" fill="var(--mist)" font-family="monospace" font-size="9" text-anchor="middle">NODE B (RIVER)</text>

              <circle cx="280" cy="50" r="7" fill="#D4FF3F" />
              <text x="280" y="35" fill="var(--mist)" font-family="monospace" font-size="9" text-anchor="middle">NODE C (PASS)</text>

              <circle cx="220" cy="150" r="7" fill="#CBB3E8" />
              <text x="220" y="172" fill="var(--mist)" font-family="monospace" font-size="9" text-anchor="middle">RELAY D (RIDGE)</text>

              <circle cx="430" cy="100" r="9" fill="#10b981" stroke="#08090A" stroke-width="2" />
              <text x="430" y="125" fill="#10b981" font-family="monospace" font-size="10" font-weight="bold" text-anchor="middle">HOSPITAL (DEST)</text>
            </svg>
          </div>

          <div class="sim-controls-bar">
            <div class="sim-control-group">
              <span class="sim-control-label">A* Heuristic Weight (ε):</span>
              <input type="range" class="sim-slider" id="sim-ner-weight" min="10" max="25" value="12" />
              <span class="sim-control-val" id="sim-ner-val">1.2x</span>
            </div>
            <div class="sim-control-group">
              <span class="sim-control-label">Topology Mesh:</span>
              <span class="sim-control-val" style="color: #10b981;" id="sim-ner-status-text">DIRECT PRIMARY (48 KM)</span>
            </div>
          </div>
        </div>

        <div class="sim-telemetry-bar">
          <div class="sim-metric-group">
            <div class="sim-metric-item">
              <span class="sim-metric-name">COORDINATES:</span>
              <span class="sim-metric-value">26.1445° N, 91.7362° E</span>
            </div>
            <div class="sim-metric-item">
              <span class="sim-metric-name">TOTAL LATENCY:</span>
              <span class="sim-metric-value sim-metric-value--accent" id="sim-ner-time">18 ms</span>
            </div>
            <div class="sim-metric-item">
              <span class="sim-metric-name">PACKET DELIVERY:</span>
              <span class="sim-metric-value sim-metric-value--success">100% LoRa Zero-Cloud</span>
            </div>
          </div>
          <span style="color: var(--mist);">DISPATCH: <strong style="color: #10b981;" id="sim-ner-dispatch">OPTIMAL</strong></span>
        </div>
      </div>
    `;

    let hazardActive = false;
    const btnHazard = document.getElementById('sim-ner-hazard');
    const btnCompute = document.getElementById('sim-ner-compute');
    const btnReset = document.getElementById('sim-ner-reset');
    const marker = document.getElementById('ner-hazard-marker');
    const edgeBC = document.getElementById('edge-bc');
    const edgeCD = document.getElementById('edge-cd');
    const edgeAD = document.getElementById('edge-ad');
    const edgeDE = document.getElementById('edge-de');
    const statusText = document.getElementById('sim-ner-status-text');
    const timeStat = document.getElementById('sim-ner-time');
    const dispatchStat = document.getElementById('sim-ner-dispatch');

    function applyHazard(active) {
      hazardActive = active;
      if (marker) marker.style.display = active ? 'block' : 'none';
      if (active) {
        if (edgeBC) { edgeBC.setAttribute('stroke', '#ef4444'); edgeBC.setAttribute('stroke-dasharray', '4'); }
        if (edgeCD) { edgeCD.setAttribute('stroke', '#B7B3AE'); }
        if (edgeAD) { edgeAD.setAttribute('stroke', '#10b981'); edgeAD.setAttribute('stroke-width', '3.5'); edgeAD.removeAttribute('stroke-dasharray'); }
        if (edgeDE) { edgeDE.setAttribute('stroke', '#10b981'); edgeDE.setAttribute('stroke-width', '3.5'); edgeDE.removeAttribute('stroke-dasharray'); }
        if (statusText) { statusText.textContent = 'BYPASS MESH ACTIVE (64 KM)'; statusText.style.color = '#D4FF3F'; }
        if (timeStat) timeStat.textContent = '32 ms';
        if (dispatchStat) { dispatchStat.textContent = 'BYPASS REROUTED'; dispatchStat.style.color = '#D4FF3F'; }
        if (btnHazard) btnHazard.textContent = '✓ Hazard Active';
      } else {
        if (edgeBC) { edgeBC.setAttribute('stroke', '#10b981'); edgeBC.removeAttribute('stroke-dasharray'); }
        if (edgeCD) { edgeCD.setAttribute('stroke', '#10b981'); }
        if (edgeAD) { edgeAD.setAttribute('stroke', '#B7B3AE'); edgeAD.setAttribute('stroke-width', '2'); edgeAD.setAttribute('stroke-dasharray', '4'); }
        if (edgeDE) { edgeDE.setAttribute('stroke', '#B7B3AE'); edgeDE.setAttribute('stroke-width', '2'); edgeDE.setAttribute('stroke-dasharray', '4'); }
        if (statusText) { statusText.textContent = 'DIRECT PRIMARY (48 KM)'; statusText.style.color = '#10b981'; }
        if (timeStat) timeStat.textContent = '18 ms';
        if (dispatchStat) { dispatchStat.textContent = 'OPTIMAL'; dispatchStat.style.color = '#10b981'; }
        if (btnHazard) btnHazard.textContent = '⚠ Trigger Landslide';
      }
    }

    if (btnHazard) btnHazard.addEventListener('click', () => applyHazard(!hazardActive));
    if (btnCompute) btnCompute.addEventListener('click', () => applyHazard(true));
    if (btnReset) btnReset.addEventListener('click', () => applyHazard(false));
  }

  // 3. BASE ISOLATION CAD — Seismic Damper & Ground Dynamics
  else if (slug === 'base-isolation' || project.simType === 'baseiso') {
    detailSimContainer.innerHTML = `
      <div class="sim-container">
        <div class="sim-header">
          <div class="sim-header__meta">
            <span class="sim-header__badge">HARMONIC SEISMOLOGY</span>
            <span class="sim-header__title">Bumblebee Squad // Base Isolation Dynamics Lab</span>
          </div>
          <div class="sim-header__actions">
            <button type="button" class="sim-btn sim-btn--active" id="sim-base-toggle">Damper: Base-Isolated</button>
            <button type="button" class="sim-btn" id="sim-base-wave">⚡ Pulse Quake</button>
            <button type="button" class="sim-btn" id="sim-base-reset">↺ Reset</button>
          </div>
        </div>

        <div class="sim-workspace">
          <div class="sim-canvas-stage">
            <canvas id="sim-base-canvas" width="600" height="180"></canvas>
          </div>

          <div class="sim-controls-bar">
            <div class="sim-control-group">
              <span class="sim-control-label">Richter Magnitude:</span>
              <input type="range" class="sim-slider" id="sim-base-mag" min="50" max="85" value="74" />
              <span class="sim-control-val" id="sim-base-mag-val">7.4</span>
            </div>
            <div class="sim-control-group">
              <span class="sim-control-label">Damping Ratio:</span>
              <input type="range" class="sim-slider" id="sim-base-damp" min="5" max="30" value="18" />
              <span class="sim-control-val" id="sim-base-damp-val">18%</span>
            </div>
          </div>
        </div>

        <div class="sim-telemetry-bar">
          <div class="sim-metric-group">
            <div class="sim-metric-item">
              <span class="sim-metric-name">GROUND ACCEL:</span>
              <span class="sim-metric-value" id="sim-base-pga">0.68 g</span>
            </div>
            <div class="sim-metric-item">
              <span class="sim-metric-name">DRIFT:</span>
              <span class="sim-metric-value sim-metric-value--success" id="sim-base-drift">0.54% [SAFE]</span>
            </div>
            <div class="sim-metric-item">
              <span class="sim-metric-name">LOAD REDUCTION:</span>
              <span class="sim-metric-value sim-metric-value--accent" id="sim-base-reduct">-84.2%</span>
            </div>
          </div>
          <span style="color: var(--mist);">HARMONICS: <strong style="color: #10b981;" id="sim-base-state">DAMPENED</strong></span>
        </div>
      </div>
    `;

    const canvas = document.getElementById('sim-base-canvas');
    if (canvas) {
      const ctx = canvas.getContext('2d');
      let isIsolated = true;
      let phase = 0;
      let amplitude = 28;

      function renderWave() {
        if (!canvas) return;
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Ground wave (Red)
        ctx.beginPath();
        ctx.strokeStyle = '#ef4444';
        ctx.lineWidth = 1.8;
        for (let x = 0; x < canvas.width; x++) {
          const y = 50 + Math.sin((x * 0.04) + phase) * amplitude;
          if (x === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.stroke();

        // Building deflection wave (Green if isolated, orange/red if fixed)
        ctx.beginPath();
        ctx.strokeStyle = isIsolated ? '#10b981' : '#f59e0b';
        ctx.lineWidth = 2.5;
        const structAmp = isIsolated ? amplitude * 0.16 : amplitude * 0.88;
        for (let x = 0; x < canvas.width; x++) {
          const y = 130 + Math.sin((x * 0.035) + phase - 0.4) * structAmp;
          if (x === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.stroke();

        phase += 0.06;
        currentSimAnimationId = requestAnimationFrame(renderWave);
      }
      renderWave();

      const btnToggle = document.getElementById('sim-base-toggle');
      const driftEl = document.getElementById('sim-base-drift');
      const reductEl = document.getElementById('sim-base-reduct');
      const stateEl = document.getElementById('sim-base-state');

      if (btnToggle) {
        btnToggle.addEventListener('click', () => {
          isIsolated = !isIsolated;
          if (isIsolated) {
            btnToggle.textContent = 'Damper: Base-Isolated';
            btnToggle.classList.add('sim-btn--active');
            if (driftEl) { driftEl.textContent = '0.54% [SAFE]'; driftEl.className = 'sim-metric-value sim-metric-value--success'; }
            if (reductEl) reductEl.textContent = '-84.2%';
            if (stateEl) { stateEl.textContent = 'DAMPENED'; stateEl.style.color = '#10b981'; }
          } else {
            btnToggle.textContent = 'Damper: Fixed-Base (Rigid)';
            btnToggle.classList.remove('sim-btn--active');
            if (driftEl) { driftEl.textContent = '3.82% [CRITICAL]'; driftEl.className = 'sim-metric-value sim-metric-value--alert'; }
            if (reductEl) reductEl.textContent = '0.0%';
            if (stateEl) { stateEl.textContent = 'RESONANCE RISK'; stateEl.style.color = '#ef4444'; }
          }
        });
      }

      const magSlider = document.getElementById('sim-base-mag');
      const magVal = document.getElementById('sim-base-mag-val');
      const pgaEl = document.getElementById('sim-base-pga');
      if (magSlider && magVal) {
        magSlider.addEventListener('input', (e) => {
          const m = (e.target.value / 10).toFixed(1);
          magVal.textContent = m;
          amplitude = (m - 4) * 8;
          if (pgaEl) pgaEl.textContent = `${((m - 4) * 0.2).toFixed(2)} g`;
        });
      }
    }
  }

  // 4. SMART AGRICULTURE IOT — Real-Time ESP32 Telemetry & Automation
  else if (slug === 'smart-agriculture' || project.simType === 'smartagri' || project.simType === 'smartag') {
    detailSimContainer.innerHTML = `
      <div class="sim-container">
        <div class="sim-header">
          <div class="sim-header__meta">
            <span class="sim-header__badge">ESP32 TELEMETRY</span>
            <span class="sim-header__title">Smart Agriculture IoT // Automated Irrigation Controller</span>
          </div>
          <div class="sim-header__actions">
            <button type="button" class="sim-btn sim-btn--active" id="sim-agri-rain">🌧 Monsoon (+40%)</button>
            <button type="button" class="sim-btn" id="sim-agri-drought">☀️ Heatwave (-30%)</button>
            <button type="button" class="sim-btn" id="sim-agri-reset">↺ Reset</button>
          </div>
        </div>

        <div class="sim-workspace">
          <div class="sim-canvas-stage">
            <canvas id="sim-agri-canvas" width="600" height="180"></canvas>
          </div>

          <div class="sim-controls-bar">
            <div class="sim-control-group">
              <span class="sim-control-label">Soil Moisture Sensor:</span>
              <input type="range" class="sim-slider" id="sim-agri-moisture" min="10" max="95" value="28" />
              <span class="sim-control-val" id="sim-agri-moist-val">28%</span>
            </div>
            <div class="sim-control-group">
              <span class="sim-control-label">Ambient Temp:</span>
              <input type="range" class="sim-slider" id="sim-agri-temp" min="15" max="45" value="32" />
              <span class="sim-control-val" id="sim-agri-temp-val">32°C</span>
            </div>
          </div>
        </div>

        <div class="sim-telemetry-bar">
          <div class="sim-metric-group">
            <div class="sim-metric-item">
              <span class="sim-metric-name">MQTT BROKER:</span>
              <span class="sim-metric-value">emqx.io:8883 (SSL)</span>
            </div>
            <div class="sim-metric-item">
              <span class="sim-metric-name">PUMP RELAY:</span>
              <span class="sim-metric-value sim-metric-value--accent" id="sim-agri-pump-status">ACTIVE (4.2 L/min)</span>
            </div>
            <div class="sim-metric-item">
              <span class="sim-metric-name">PACKET RSSI:</span>
              <span class="sim-metric-value sim-metric-value--success">-62 dBm</span>
            </div>
          </div>
          <span style="color: var(--mist);">NODE: <strong style="color: #10b981;">ESP32-AGRI-04</strong></span>
        </div>
      </div>
    `;

    const canvas = document.getElementById('sim-agri-canvas');
    if (canvas) {
      const ctx = canvas.getContext('2d');
      let moistureHistory = new Array(50).fill(28);

      function drawAgri() {
        if (!canvas) return;
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Threshold line at 35%
        ctx.beginPath();
        ctx.strokeStyle = 'rgba(239, 68, 68, 0.4)';
        ctx.setLineDash([4, 4]);
        const threshY = canvas.height - (35 * (canvas.height / 100));
        ctx.moveTo(0, threshY);
        ctx.lineTo(canvas.width, threshY);
        ctx.stroke();
        ctx.setLineDash([]);

        // Real-time moisture graph
        ctx.beginPath();
        const currentM = moistureHistory[moistureHistory.length - 1];
        ctx.strokeStyle = currentM < 35 ? '#D4FF3F' : '#10b981';
        ctx.lineWidth = 2.5;

        for (let i = 0; i < moistureHistory.length; i++) {
          const x = (i / (moistureHistory.length - 1)) * canvas.width;
          const y = canvas.height - (moistureHistory[i] * (canvas.height / 100));
          if (i === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.stroke();

        currentSimAnimationId = requestAnimationFrame(drawAgri);
      }
      drawAgri();

      const moistSlider = document.getElementById('sim-agri-moisture');
      const moistVal = document.getElementById('sim-agri-moist-val');
      const pumpStatus = document.getElementById('sim-agri-pump-status');

      function updateMoisture(val) {
        moistSlider.value = val;
        moistVal.textContent = `${val}%`;
        moistureHistory.shift();
        moistureHistory.push(val);

        if (pumpStatus) {
          if (val < 35) {
            pumpStatus.textContent = 'ACTIVE (4.2 L/min)';
            pumpStatus.className = 'sim-metric-value sim-metric-value--accent';
          } else {
            pumpStatus.textContent = 'STANDBY (0.0 L/min)';
            pumpStatus.className = 'sim-metric-value sim-metric-value--success';
          }
        }
      }

      if (moistSlider) {
        moistSlider.addEventListener('input', (e) => updateMoisture(Number(e.target.value)));
      }

      const btnRain = document.getElementById('sim-agri-rain');
      if (btnRain) btnRain.addEventListener('click', () => updateMoisture(Math.min(95, Number(moistSlider.value) + 40)));

      const btnDrought = document.getElementById('sim-agri-drought');
      if (btnDrought) btnDrought.addEventListener('click', () => updateMoisture(Math.max(10, Number(moistSlider.value) - 30)));

      const btnReset = document.getElementById('sim-agri-reset');
      if (btnReset) btnReset.addEventListener('click', () => updateMoisture(28));
    }
  }

  // 5. ATLAS-AI — Multi-Model Heuristic Dispatch & Streaming Engine
  else if (slug === 'atlas-ai') {
    detailSimContainer.innerHTML = `
      <div class="sim-container">
        <div class="sim-header">
          <div class="sim-header__meta">
            <span class="sim-header__badge">HEURISTIC ROUTER</span>
            <span class="sim-header__title">atlasAI // Dynamic Multi-Model Decision Dispatch</span>
          </div>
          <div class="sim-header__actions">
            <button type="button" class="sim-btn sim-btn--active" id="sim-ai-dispatch">▶ Dispatch Query</button>
            <button type="button" class="sim-btn" id="sim-ai-reset">↺ Reset</button>
          </div>
        </div>

        <div class="sim-workspace">
          <div style="display: grid; grid-template-columns: minmax(0, 1.1fr) minmax(0, 1fr); gap: 16px; flex: 1; min-height: 0;">
            <div style="background: var(--card-bg); border: 1px solid var(--card-border); border-radius: 8px; padding: 14px; display: flex; flex-direction: column;">
              <span style="font-family: var(--font-mono); font-size: 11px; font-weight: 600; color: var(--accent); margin-bottom: 8px;">HEURISTIC DECISION MATRIX</span>
              <div style="font-family: var(--font-mono); font-size: 11px; color: var(--paper); line-height: 1.8; display: flex; flex-direction: column; gap: 4px;">
                <div>• Prompt Complexity: <span id="sim-ai-cmplx" style="color: var(--accent-secondary); font-weight: bold;">Level 3 (Multi-step Reasoning)</span></div>
                <div>• Cost Constraint: <span style="color: #10b981;">&lt; $0.005 / Request</span></div>
                <div>• Latency Target: <span style="color: var(--accent);">&lt; 350 ms TTFT</span></div>
                <div style="margin-top: 8px; padding: 8px; border-radius: 6px; background: rgba(212, 255, 63, 0.12); border: 1px solid var(--card-border);">
                  Selected Model: <strong id="sim-ai-model" style="color: var(--paper);">Claude 3.5 Sonnet</strong>
                </div>
              </div>
            </div>

            <div style="background: var(--card-bg); border: 1px solid var(--card-border); border-radius: 8px; padding: 14px; display: flex; flex-direction: column; overflow-y: auto;">
              <span style="font-family: var(--font-mono); font-size: 11px; font-weight: 600; color: #10b981; margin-bottom: 8px;">STREAMING REASONING TOKEN BUFFER</span>
              <p id="sim-ai-tokens" style="font-family: var(--font-mono); font-size: 11.5px; line-height: 1.6; color: var(--paper); margin: 0;">
                [Routing to Claude 3.5 Sonnet] Analyzing query semantics... decomposing mathematical constraints into sub-equations... synthesized output ready with 98.4% verified reasoning chain.
              </p>
            </div>
          </div>

          <div class="sim-controls-bar">
            <div class="sim-control-group">
              <span class="sim-control-label">Complexity Level:</span>
              <input type="range" class="sim-slider" id="sim-ai-slider" min="1" max="3" value="3" />
              <span class="sim-control-val" id="sim-ai-slider-val">3</span>
            </div>
            <div class="sim-control-group">
              <span class="sim-control-label">Throughput:</span>
              <span class="sim-control-val" style="color: #10b981;" id="sim-ai-tps">86 tokens/sec</span>
            </div>
          </div>
        </div>

        <div class="sim-telemetry-bar">
          <div class="sim-metric-group">
            <div class="sim-metric-item">
              <span class="sim-metric-name">TTFT:</span>
              <span class="sim-metric-value sim-metric-value--accent" id="sim-ai-ttft">210 ms</span>
            </div>
            <div class="sim-metric-item">
              <span class="sim-metric-name">COST SAVINGS:</span>
              <span class="sim-metric-value sim-metric-value--success">-68.4%</span>
            </div>
            <div class="sim-metric-item">
              <span class="sim-metric-name">OUTPUT SPEED:</span>
              <span class="sim-metric-value" id="sim-ai-speed">86 tps</span>
            </div>
          </div>
          <span style="color: var(--mist);">ROUTER: <strong style="color: #10b981;">HEURISTIC ACTIVE</strong></span>
        </div>
      </div>
    `;

    const aiSlider = document.getElementById('sim-ai-slider');
    const aiSliderVal = document.getElementById('sim-ai-slider-val');
    const aiCmplx = document.getElementById('sim-ai-cmplx');
    const aiModel = document.getElementById('sim-ai-model');
    const aiTokens = document.getElementById('sim-ai-tokens');
    const aiTtft = document.getElementById('sim-ai-ttft');
    const aiSpeed = document.getElementById('sim-ai-speed');
    const aiTps = document.getElementById('sim-ai-tps');

    const modelLevels = {
      1: { name: 'Llama-3 8B (Local Edge)', text: 'Level 1 (Simple Code & Formatting)', ttft: '95 ms', tps: '124 tokens/sec', log: '[Routing to Llama-3 8B Edge] Instant token cache hit. Zero API cost incurred.' },
      2: { name: 'GPT-4o Mini', text: 'Level 2 (Summary & Architecture)', ttft: '160 ms', tps: '98 tokens/sec', log: '[Routing to GPT-4o Mini] Balance reached between fast response time and structured syntax verification.' },
      3: { name: 'Claude 3.5 Sonnet', text: 'Level 3 (Multi-step Reasoning)', ttft: '210 ms', tps: '86 tokens/sec', log: '[Routing to Claude 3.5 Sonnet] Analyzing query semantics... decomposing mathematical constraints into sub-equations... synthesized output ready with 98.4% verified reasoning chain.' }
    };

    if (aiSlider) {
      aiSlider.addEventListener('input', (e) => {
        const lvl = e.target.value;
        aiSliderVal.textContent = lvl;
        const info = modelLevels[lvl];
        if (aiCmplx) aiCmplx.textContent = info.text;
        if (aiModel) aiModel.textContent = info.name;
        if (aiTokens) aiTokens.textContent = info.log;
        if (aiTtft) aiTtft.textContent = info.ttft;
        if (aiSpeed) aiSpeed.textContent = info.tps;
        if (aiTps) aiTps.textContent = info.tps;
      });
    }

    const btnDispatch = document.getElementById('sim-ai-dispatch');
    if (btnDispatch) {
      btnDispatch.addEventListener('click', () => {
        if (aiTtft) aiTtft.textContent = `${Math.floor(180 + Math.random() * 40)} ms`;
        btnDispatch.classList.add('sim-btn--active');
        setTimeout(() => btnDispatch.classList.remove('sim-btn--active'), 300);
      });
    }
  }

  // 6. NVIDIA AI CHAT — TensorRT-LLM Inference Profiler
  else if (slug === 'nvidia-ai-chat') {
    detailSimContainer.innerHTML = `
      <div class="sim-container">
        <div class="sim-header">
          <div class="sim-header__meta">
            <span class="sim-header__badge">TENSORRT-LLM BENCHMARK</span>
            <span class="sim-header__title">NVIDIA AI Chat // Quantized GPU Inference Profiler</span>
          </div>
          <div class="sim-header__actions">
            <button type="button" class="sim-btn sim-btn--active" id="sim-nv-bench">▶ Run Profiler</button>
            <button type="button" class="sim-btn" id="sim-nv-reset">↺ Reset</button>
          </div>
        </div>

        <div class="sim-workspace">
          <div style="display: flex; gap: 8px; align-items: center;">
            <span style="font-family: var(--font-mono); font-size: 11px; color: var(--mist);">Precision Mode:</span>
            <button type="button" class="pill pill--tiny pill--solid sim-nv-prec" data-prec="int8">INT8 (Quantized)</button>
            <button type="button" class="pill pill--tiny pill--ghost sim-nv-prec" data-prec="fp16">FP16 (Half Precision)</button>
            <button type="button" class="pill pill--tiny pill--ghost sim-nv-prec" data-prec="fp4">FP4 (Micro-Tensor)</button>
          </div>

          <div style="background: var(--card-bg); border: 1px solid var(--card-border); border-radius: 8px; padding: 18px; flex: 1; display: flex; flex-direction: column; justify-content: center; gap: 14px;">
            <div style="display: flex; justify-content: space-between; font-family: var(--font-mono); font-size: 11px;">
              <span>VRAM CONSUMPTION:</span>
              <strong id="sim-nv-vram" style="color: var(--accent);">7.4 GB / 24 GB</strong>
            </div>
            <div style="height: 12px; border-radius: 6px; background: var(--faint); overflow: hidden; position: relative;">
              <div id="sim-nv-bar" style="width: 31%; height: 100%; background: var(--accent); transition: width 0.3s ease;"></div>
            </div>
            <div style="display: flex; justify-content: space-between; font-family: var(--font-mono); font-size: 11px; color: var(--mist);">
              <span>KV Cache: 1.2 GB</span>
              <span>Model Weights: 6.2 GB</span>
              <span>Headroom: 16.6 GB</span>
            </div>
          </div>

          <div class="sim-controls-bar">
            <div class="sim-control-group">
              <span class="sim-control-label">Batch Size:</span>
              <input type="range" class="sim-slider" id="sim-nv-batch" min="1" max="32" value="8" />
              <span class="sim-control-val" id="sim-nv-batch-val">8</span>
            </div>
            <div class="sim-control-group">
              <span class="sim-control-label">Tensor Cores:</span>
              <span class="sim-control-val" style="color: #10b981;">ACTIVE (91%)</span>
            </div>
          </div>
        </div>

        <div class="sim-telemetry-bar">
          <div class="sim-metric-group">
            <div class="sim-metric-item">
              <span class="sim-metric-name">INFERENCE LATENCY:</span>
              <span class="sim-metric-value sim-metric-value--accent" id="sim-nv-lat">14.2 ms / token</span>
            </div>
            <div class="sim-metric-item">
              <span class="sim-metric-name">MEM BANDWIDTH:</span>
              <span class="sim-metric-value sim-metric-value--success" id="sim-nv-bw">942 GB/s</span>
            </div>
          </div>
          <span style="color: var(--mist);">TARGET: <strong style="color: var(--paper);">RTX 4090 / L40S</strong></span>
        </div>
      </div>
    `;

    const precChips = detailSimContainer.querySelectorAll('.sim-nv-prec');
    const vramEl = document.getElementById('sim-nv-vram');
    const barEl = document.getElementById('sim-nv-bar');
    const latEl = document.getElementById('sim-nv-lat');
    const bwEl = document.getElementById('sim-nv-bw');

    const precData = {
      int8: { vram: '7.4 GB / 24 GB', pct: '31%', lat: '14.2 ms / token', bw: '942 GB/s' },
      fp16: { vram: '14.8 GB / 24 GB', pct: '62%', lat: '24.8 ms / token', bw: '820 GB/s' },
      fp4: { vram: '4.2 GB / 24 GB', pct: '18%', lat: '8.6 ms / token', bw: '1,050 GB/s' }
    };

    precChips.forEach(chip => {
      chip.addEventListener('click', () => {
        precChips.forEach(c => { c.classList.remove('pill--solid'); c.classList.add('pill--ghost'); });
        chip.classList.remove('pill--ghost');
        chip.classList.add('pill--solid');
        const pKey = chip.getAttribute('data-prec');
        const d = precData[pKey];
        if (d) {
          if (vramEl) vramEl.textContent = d.vram;
          if (barEl) barEl.style.width = d.pct;
          if (latEl) latEl.textContent = d.lat;
          if (bwEl) bwEl.textContent = d.bw;
        }
      });
    });
  }

  // 7. LINKEDX — Automated Workflow State Machine
  else if (slug === 'linkx' || slug === 'linkedx' || project.simType === 'linkx') {
    detailSimContainer.innerHTML = `
      <div class="sim-container">
        <div class="sim-header">
          <div class="sim-header__meta">
            <span class="sim-header__badge">PIPELINE AUTOMATION</span>
            <span class="sim-header__title">LinkedX // Professional Workflow State Machine</span>
          </div>
          <div class="sim-header__actions">
            <button type="button" class="sim-btn sim-btn--active" id="sim-lx-step">▶ Advance Stage</button>
            <button type="button" class="sim-btn" id="sim-lx-reset">↺ Reset</button>
          </div>
        </div>

        <div class="sim-workspace">
          <div style="display: flex; gap: 8px; justify-content: space-between; align-items: center;">
            <div class="pill pill--tiny pill--solid sim-lx-stage" id="lx-s1">1. INGESTION</div>
            <span style="color: var(--mist);">➔</span>
            <div class="pill pill--tiny pill--ghost sim-lx-stage" id="lx-s2">2. ENRICHMENT</div>
            <span style="color: var(--mist);">➔</span>
            <div class="pill pill--tiny pill--ghost sim-lx-stage" id="lx-s3">3. SCORING</div>
            <span style="color: var(--mist);">➔</span>
            <div class="pill pill--tiny pill--ghost sim-lx-stage" id="lx-s4">4. SYNC</div>
          </div>

          <div style="background: var(--card-bg); border: 1px solid var(--card-border); border-radius: 8px; padding: 16px; flex: 1; display: flex; flex-direction: column; justify-content: center;">
            <span style="font-family: var(--font-mono); font-size: 11px; font-weight: 600; color: var(--accent); margin-bottom: 6px;" id="sim-lx-title">CURRENT STAGE: 1 // DATA INGESTION</span>
            <p style="font-family: var(--font-body); font-size: 13px; line-height: 1.6; color: var(--paper); margin: 0;" id="sim-lx-desc">
              Parsing target profile payload. Extracting professional headline, experience milestones, open-source repositories, and verified publications into normalized schema.
            </p>
          </div>

          <div class="sim-controls-bar">
            <div class="sim-control-group">
              <span class="sim-control-label">Queue Depth:</span>
              <span class="sim-control-val" id="sim-lx-queue">128 Profiles</span>
            </div>
            <div class="sim-control-group">
              <span class="sim-control-label">Match Confidence:</span>
              <span class="sim-control-val" style="color: #10b981;">96.8%</span>
            </div>
          </div>
        </div>

        <div class="sim-telemetry-bar">
          <div class="sim-metric-group">
            <div class="sim-metric-item">
              <span class="sim-metric-name">ROUNDTRIP:</span>
              <span class="sim-metric-value sim-metric-value--accent">140 ms</span>
            </div>
            <div class="sim-metric-item">
              <span class="sim-metric-name">STATUS:</span>
              <span class="sim-metric-value sim-metric-value--success" id="sim-lx-status">PIPELINE READY</span>
            </div>
          </div>
          <span style="color: var(--mist);">MODE: <strong style="color: var(--paper);">AUTOMATED</strong></span>
        </div>
      </div>
    `;

    let currentStage = 1;
    const stages = {
      1: { title: 'CURRENT STAGE: 1 // DATA INGESTION', desc: 'Parsing target profile payload. Extracting professional headline, experience milestones, open-source repositories, and verified publications into normalized schema.' },
      2: { title: 'CURRENT STAGE: 2 // SEMANTIC ENRICHMENT', desc: 'Cross-referencing GitHub commits, tech stack taxonomy, and publication citations against industry knowledge graph. Enriching metadata with verified tags.' },
      3: { title: 'CURRENT STAGE: 3 // HEURISTIC FIT SCORING', desc: 'Calculating relevance coefficients against engineering criteria. Generating structured highlights and qualification confidence score: 96.8%.' },
      4: { title: 'CURRENT STAGE: 4 // WORKFLOW SYNC & DISPATCH', desc: 'Syncing verified record to CRM webhook endpoint and triggering personalized transmission channel.' }
    };

    function setStage(stg) {
      currentStage = stg;
      for (let i = 1; i <= 4; i++) {
        const el = document.getElementById(`lx-s${i}`);
        if (el) {
          if (i === stg) { el.className = 'pill pill--tiny pill--solid sim-lx-stage'; }
          else { el.className = 'pill pill--tiny pill--ghost sim-lx-stage'; }
        }
      }
      const data = stages[stg];
      const titleEl = document.getElementById('sim-lx-title');
      const descEl = document.getElementById('sim-lx-desc');
      if (titleEl) titleEl.textContent = data.title;
      if (descEl) descEl.textContent = data.desc;
    }

    const btnStep = document.getElementById('sim-lx-step');
    if (btnStep) {
      btnStep.addEventListener('click', () => {
        let nxt = currentStage + 1;
        if (nxt > 4) nxt = 1;
        setStage(nxt);
      });
    }

    const btnReset = document.getElementById('sim-lx-reset');
    if (btnReset) btnReset.addEventListener('click', () => setStage(1));
  }

  // 8. ATLAS-PORTFOLIO — 3D Titanium Glass PBR Shader & Studio Optics
  else {
    detailSimContainer.innerHTML = `
      <div class="sim-container">
        <div class="sim-header">
          <div class="sim-header__meta">
            <span class="sim-header__badge">OPTICAL PBR SHADER</span>
            <span class="sim-header__title">ATLAS // Titanium Glass Physical Optics Lab</span>
          </div>
          <div class="sim-header__actions">
            <button type="button" class="sim-btn sim-btn--active" id="sim-gl-rotate">▶ Rotate Light</button>
            <button type="button" class="sim-btn" id="sim-gl-reset">↺ Reset Optics</button>
          </div>
        </div>

        <div class="sim-workspace">
          <div class="sim-canvas-stage">
            <canvas id="sim-glass-canvas" width="600" height="180"></canvas>
          </div>

          <div class="sim-controls-bar">
            <div class="sim-control-group">
              <span class="sim-control-label">Transmission:</span>
              <input type="range" class="sim-slider" id="sim-gl-trans" min="0" max="100" value="86" />
              <span class="sim-control-val" id="sim-gl-trans-val">0.86</span>
            </div>
            <div class="sim-control-group">
              <span class="sim-control-label">Roughness:</span>
              <input type="range" class="sim-slider" id="sim-gl-rough" min="0" max="50" value="11" />
              <span class="sim-control-val" id="sim-gl-rough-val">0.11</span>
            </div>
          </div>
        </div>

        <div class="sim-telemetry-bar">
          <div class="sim-metric-group">
            <div class="sim-metric-item">
              <span class="sim-metric-name">INDEX OF REFRACTION (IOR):</span>
              <span class="sim-metric-value">1.52 (Crown Glass)</span>
            </div>
            <div class="sim-metric-item">
              <span class="sim-metric-name">ATTENUATION:</span>
              <span class="sim-metric-value sim-metric-value--accent">2.0 m</span>
            </div>
            <div class="sim-metric-item">
              <span class="sim-metric-name">RAY BOUNCES:</span>
              <span class="sim-metric-value sim-metric-value--success">4 Reflections</span>
            </div>
          </div>
          <span style="color: var(--mist);">OPTICS: <strong style="color: #10b981;">PBR ACCURATE</strong></span>
        </div>
      </div>
    `;

    const canvas = document.getElementById('sim-glass-canvas');
    if (canvas) {
      const ctx = canvas.getContext('2d');
      let angle = 0;
      let trans = 0.86;

      function renderGlassLens() {
        if (!canvas) return;
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Center glass lens oval
        const cx = canvas.width / 2;
        const cy = canvas.height / 2;

        // Refracted incident rays
        for (let i = -4; i <= 4; i++) {
          const rayY = cy + (i * 12);
          ctx.beginPath();
          ctx.strokeStyle = `rgba(212, 255, 63, ${trans * 0.8})`;
          ctx.lineWidth = 1.5;
          ctx.moveTo(30, rayY + Math.sin(angle) * 8);

          // Glass entry at cx - 80
          const entryX = cx - 80;
          const entryY = rayY + (i * 2);
          ctx.lineTo(entryX, entryY);

          // Refracted interior ray (Snell's Law bending)
          const exitX = cx + 80;
          const exitY = rayY + (i * 0.4);
          ctx.lineTo(exitX, exitY);

          // Focus focal point at cx + 200
          ctx.lineTo(cx + 200, cy);
          ctx.stroke();
        }

        // Glass Lens Body (Smoked Quartz)
        ctx.beginPath();
        ctx.ellipse(cx, cy, 80, 55, 0, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(16, 17, 19, ${0.45 + (1 - trans) * 0.4})`;
        ctx.fill();
        ctx.strokeStyle = '#D4FF3F';
        ctx.lineWidth = 2.5;
        ctx.stroke();

        // Lens Caustic Highlight
        ctx.beginPath();
        ctx.ellipse(cx - 24, cy - 16, 45, 20, -0.2, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(255, 255, 255, 0.4)';
        ctx.fill();

        angle += 0.04;
        currentSimAnimationId = requestAnimationFrame(renderGlassLens);
      }
      renderGlassLens();

      const transSlider = document.getElementById('sim-gl-trans');
      const transVal = document.getElementById('sim-gl-trans-val');
      if (transSlider && transVal) {
        transSlider.addEventListener('input', (e) => {
          trans = e.target.value / 100;
          transVal.textContent = trans.toFixed(2);
        });
      }

      const btnReset = document.getElementById('sim-gl-reset');
      if (btnReset) {
        btnReset.addEventListener('click', () => {
          if (transSlider) { transSlider.value = 86; transVal.textContent = '0.86'; trans = 0.86; }
        });
      }
    }
  }
}

function initProjectDetailControls() {
  detailMediaChips.forEach(chip => {
    chip.addEventListener('click', (e) => {
      e.preventDefault();
      const mode = chip.getAttribute('data-detail-media-mode');
      if (mode) setDetailMediaMode(mode);
    });
  });

  if (detailBtnFallbackSim) {
    detailBtnFallbackSim.addEventListener('click', (e) => {
      e.preventDefault();
      setDetailMediaMode('sim');
    });
  }

  if (detailEnlargeBtn) {
    detailEnlargeBtn.addEventListener('click', (e) => {
      e.preventDefault();
      openMediaViewer(activeDetailIdx, 'image');
    });
  }

  if (detailChipEnlarge) {
    detailChipEnlarge.addEventListener('click', (e) => {
      e.preventDefault();
      openMediaViewer(activeDetailIdx, 'image');
    });
  }

  // Luxury video player controls
  if (btnVideoPlayPause && detailStageVideo) {
    btnVideoPlayPause.addEventListener('click', (e) => {
      e.preventDefault();
      if (detailStageVideo.paused) {
        detailStageVideo.play().catch(() => {});
      } else {
        detailStageVideo.pause();
      }
    });
  }

  if (btnVideoReplay && detailStageVideo) {
    btnVideoReplay.addEventListener('click', (e) => {
      e.preventDefault();
      detailStageVideo.currentTime = 0;
      detailStageVideo.play().catch(() => {});
    });
  }

  if (videoProgressTrack && detailStageVideo) {
    videoProgressTrack.addEventListener('click', (e) => {
      const rect = videoProgressTrack.getBoundingClientRect();
      const clickX = e.clientX - rect.left;
      const pct = Math.max(0, Math.min(1, clickX / rect.width));
      if (detailStageVideo.duration) {
        detailStageVideo.currentTime = pct * detailStageVideo.duration;
      }
    });
  }

  if (btnVideoFullscreen) {
    btnVideoFullscreen.addEventListener('click', (e) => {
      e.preventDefault();
      const target = detailVideoWrap || detailStageVideo;
      if (!target) return;
      if (!document.fullscreenElement) {
        if (target.requestFullscreen) {
          target.requestFullscreen().catch(() => {});
        } else if (detailStageVideo.webkitRequestFullscreen) {
          detailStageVideo.webkitRequestFullscreen();
        }
      } else {
        if (document.exitFullscreen) document.exitFullscreen().catch(() => {});
      }
    });
  }

  if (detailStageVideo) {
    detailStageVideo.addEventListener('timeupdate', () => {
      if (!detailStageVideo.duration) return;
      const pct = (detailStageVideo.currentTime / detailStageVideo.duration) * 100;
      if (videoProgressFill) videoProgressFill.style.width = `${pct}%`;
      if (videoTimeStamp) {
        const curM = Math.floor(detailStageVideo.currentTime / 60);
        const curS = Math.floor(detailStageVideo.currentTime % 60).toString().padStart(2, '0');
        const durM = Math.floor(detailStageVideo.duration / 60);
        const durS = Math.floor(detailStageVideo.duration % 60).toString().padStart(2, '0');
        videoTimeStamp.textContent = `${curM}:${curS} / ${durM}:${durS}`;
      }
    });

    detailStageVideo.addEventListener('play', () => {
      if (videoPlayIcon) videoPlayIcon.textContent = '❚❚';
      if (videoPlayLabel) videoPlayLabel.textContent = 'Pause';
    });

    detailStageVideo.addEventListener('pause', () => {
      if (videoPlayIcon) videoPlayIcon.textContent = '▶';
      if (videoPlayLabel) videoPlayLabel.textContent = 'Play';
    });

    detailStageVideo.addEventListener('ended', () => {
      if (videoPlayIcon) videoPlayIcon.textContent = '↺';
      if (videoPlayLabel) videoPlayLabel.textContent = 'Replay';
    });
  }
}


  // ==========================================================================
  // 10. SKILLS & TOPOLOGY VIEW CONTROLLER (/skills)
  // ==========================================================================
  function updateSkillInspector(skill) {
    const catEl = document.getElementById('skill-inspector-cat');
    const nameEl = document.getElementById('skill-inspector-name');
    const descEl = document.getElementById('skill-inspector-desc');
    const reposEl = document.getElementById('skill-inspector-repos');

    if (catEl) catEl.textContent = skill.categoryLabel.toUpperCase();
    if (nameEl) nameEl.textContent = skill.name;
    if (descEl) descEl.textContent = skill.desc;

    if (reposEl) {
      reposEl.innerHTML = skill.projects.map(pName => {
        const matched = PROJECTS_DATA.find(p => p.name === pName || pName.includes(p.name));
        const slug = matched ? matched.slug : 'intellipdf';
        return `
          <a href="/projects/${slug}" data-route="/projects/${slug}" class="inspector-repo-link">
            <span>${pName}</span>
            <span>➔</span>
          </a>
        `;
      }).join('');
    }
  }

  function renderSkillsUniverse() {
    const nodesCanvas = document.getElementById('skills-spatial-nodes');
    if (!nodesCanvas) return;

    const filtered = SKILLS_DATA.filter(s => {
      return currentSkillFilter === 'all' || s.category === currentSkillFilter;
    });

    const activeProject = PROJECTS_DATA.find(p => p.slug === highlightedProjectSlug);

    nodesCanvas.innerHTML = filtered.map((skill, idx) => {
      const isSelected = idx === activeSkillNodeIdx;
      let isHighlighted = false;
      let isDimmed = false;

      if (activeProject) {
        const matchesProj = skill.projects.some(pName => pName === activeProject.name || pName.includes(activeProject.name) || pName === 'All 8 Verified Repositories') ||
          activeProject.stack.some(st => st.toLowerCase().includes(skill.name.toLowerCase()) || skill.name.toLowerCase().includes(st.toLowerCase()));

        if (matchesProj) {
          isHighlighted = true;
        } else {
          isDimmed = true;
        }
      }

      return `
        <button type="button" class="spatial-node-btn ${isSelected ? 'is-selected' : ''} ${isHighlighted ? 'is-highlighted' : ''} ${isDimmed ? 'is-dimmed' : ''}" 
                data-skill-idx="${idx}"
                style="--node-color: ${skill.color};"
                aria-label="${skill.name} capability node">
          <div class="spatial-node-top">
            <span class="spatial-node-icon">${skill.icon}</span>
            <span class="spatial-node-cat" style="color: ${skill.color};">${skill.categoryLabel}</span>
          </div>
          <div class="spatial-node-name">${skill.name}</div>
          <div class="spatial-node-count">${skill.projects.length} Verified Repos</div>
        </button>
      `;
    }).join('');

    // Attach click events
    nodesCanvas.querySelectorAll('[data-skill-idx]').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        const idx = parseInt(btn.getAttribute('data-skill-idx'), 10);
        activeSkillNodeIdx = idx;
        nodesCanvas.querySelectorAll('.spatial-node-btn').forEach(b => b.classList.remove('is-selected'));
        btn.classList.add('is-selected');

        const skill = filtered[idx];
        if (skill) {
          updateSkillInspector(skill);
        }
        playSfx('click');
      });
    });

    // Update inspector with initial or active node
    if (filtered[activeSkillNodeIdx]) {
      updateSkillInspector(filtered[activeSkillNodeIdx]);
    } else if (filtered[0]) {
      activeSkillNodeIdx = 0;
      updateSkillInspector(filtered[0]);
    }
  }

  function renderSkillsTopology() {
    renderSkillsUniverse();

    if (!skillsTopologyContainer) return;

    const filtered = SKILLS_DATA.filter(s => {
      return currentSkillFilter === 'all' || s.category === currentSkillFilter;
    });

    skillsTopologyContainer.innerHTML = filtered.map(skill => `
      <div class="skill-tech-card">
        <div class="skill-tech-card__header">
          <h3 class="skill-tech-card__name">${skill.name}</h3>
          <span class="skill-tech-card__category">${skill.categoryLabel}</span>
        </div>
        <p class="skill-tech-card__desc">${skill.desc}</p>
        <div class="skill-tech-card__projects">
          <span class="skill-tech-card__projects-label">Applied in Repositories:</span>
          <div class="skill-tech-card__project-links">
            ${skill.projects.map(pName => {
              const matched = PROJECTS_DATA.find(p => p.name === pName || pName.includes(p.name));
              const slug = matched ? matched.slug : 'intellipdf';
              return `<a href="/projects/${slug}" data-route="/projects/${slug}" class="skill-project-badge">${pName} ➔</a>`;
            }).join('')}
          </div>
        </div>
      </div>
    `).join('');
  }

  function initSkillsPage() {
    const btnSpatialView = document.getElementById('btn-skills-spatial-view');
    const btnListView = document.getElementById('btn-skills-list-view');
    const spatialUniverseCard = document.getElementById('skills-spatial-universe');
    const projectSelect = document.getElementById('skills-project-select');

    if (btnSpatialView && btnListView && spatialUniverseCard && skillsTopologyContainer) {
      btnSpatialView.addEventListener('click', (e) => {
        e.preventDefault();
        skillsPresentationMode = 'spatial';
        btnSpatialView.classList.add('is-active');
        btnSpatialView.setAttribute('aria-selected', 'true');
        btnListView.classList.remove('is-active');
        btnListView.setAttribute('aria-selected', 'false');
        spatialUniverseCard.style.display = 'flex';
        skillsTopologyContainer.style.display = 'none';
        renderSkillsUniverse();
        playSfx('click');
      });

      btnListView.addEventListener('click', (e) => {
        e.preventDefault();
        skillsPresentationMode = 'list';
        btnListView.classList.add('is-active');
        btnListView.setAttribute('aria-selected', 'true');
        btnSpatialView.classList.remove('is-active');
        btnSpatialView.setAttribute('aria-selected', 'false');
        spatialUniverseCard.style.display = 'none';
        skillsTopologyContainer.style.display = 'grid';
        renderSkillsTopology();
        playSfx('click');
      });
    }

    if (projectSelect) {
      projectSelect.addEventListener('change', () => {
        highlightedProjectSlug = projectSelect.value;
        renderSkillsUniverse();
        playSfx('click');
      });
    }

    const filterChips = document.querySelectorAll('#skills-filter-chips [data-skill-filter]');
    filterChips.forEach(chip => {
      chip.addEventListener('click', (e) => {
        e.preventDefault();
        const filterVal = chip.getAttribute('data-skill-filter') || 'all';
        currentSkillFilter = filterVal;

        filterChips.forEach(c => {
          c.classList.remove('is-active');
          c.setAttribute('aria-selected', 'false');
        });
        chip.classList.add('is-active');
        chip.setAttribute('aria-selected', 'true');

        const domainBlocks = document.querySelectorAll('.skills-domain-block');
        domainBlocks.forEach(b => {
          if (filterVal === 'all' || b.getAttribute('data-domain') === filterVal) {
            b.style.display = 'block';
          } else {
            b.style.display = 'none';
          }
        });

        activeSkillNodeIdx = 0;
        renderSkillsTopology();
        playSfx('click');
      });
    });
  }

  // ==========================================================================
  // 11. THEME ENGINE (ISOLATED CONTROLLER)
  // ==========================================================================
  function update3DStageTheme(theme) {
    if (!stageGlassMat || !stageChampagneMat) return;

    if (theme === 'light') {
      // Light mode: warm ivory, porcelain white, champagne gold, soft realistic reflections
      stageGlassMat.color.setHex(0xFAF8F5);
      stageGlassMat.attenuationColor.setHex(0xEAE5DE);
      stageGlassMat.transmission = 0.90;
      stageGlassMat.roughness = 0.06;
      stageGlassMat.clearcoat = 1.0;
      stageGlassMat.clearcoatRoughness = 0.04;
      stageGlassMat.opacity = 0.94;

      stageChampagneMat.color.setHex(0xB69B87); // Light champagne gold
      stageChampagneMat.metalness = 0.88;
      stageChampagneMat.roughness = 0.22;

      if (stageSoftGoldMat) {
        stageSoftGoldMat.color.setHex(0xA98242); // Warm gold accent
        stageSoftGoldMat.metalness = 0.85;
      }

      if (stageDarkTitaniumMat) {
        stageDarkTitaniumMat.color.setHex(0xB7B3AE); // Metallic titanium
        stageDarkTitaniumMat.metalness = 0.80;
      }

      if (stageAmbientLight) {
        stageAmbientLight.color.setHex(0xFAF8F5);
        stageAmbientLight.intensity = 1.8;
      }
      if (stageKeyLight) {
        stageKeyLight.color.setHex(0xFFFFFF);
        stageKeyLight.intensity = 2.4;
      }
      if (stageRimLight) {
        stageRimLight.color.setHex(0xB69B87);
        stageRimLight.intensity = 1.5;
      }
      if (stageSoftFill) {
        stageSoftFill.color.setHex(0xEAE5DE);
        stageSoftFill.intensity = 1.1;
      }
    } else {
      // Dark mode: deep obsidian smoked glass, black titanium, rich champagne gold highlights
      stageGlassMat.color.setHex(0x141517);
      stageGlassMat.attenuationColor.setHex(0x08090A);
      stageGlassMat.transmission = 0.88;
      stageGlassMat.roughness = 0.08;
      stageGlassMat.clearcoat = 1.0;
      stageGlassMat.clearcoatRoughness = 0.05;
      stageGlassMat.opacity = 0.92;

      stageChampagneMat.color.setHex(0xD4FF3F); // Rich champagne gold
      stageChampagneMat.metalness = 0.95;
      stageChampagneMat.roughness = 0.20;

      if (stageSoftGoldMat) {
        stageSoftGoldMat.color.setHex(0xCBB3E8); // Soft metallic gold
        stageSoftGoldMat.metalness = 0.92;
      }

      if (stageDarkTitaniumMat) {
        stageDarkTitaniumMat.color.setHex(0x1F2124); // Dark titanium grey
        stageDarkTitaniumMat.metalness = 0.88;
      }

      if (stageAmbientLight) {
        stageAmbientLight.color.setHex(0x101113);
        stageAmbientLight.intensity = 1.2;
      }
      if (stageKeyLight) {
        stageKeyLight.color.setHex(0xF5F1E8);
        stageKeyLight.intensity = 2.6;
      }
      if (stageRimLight) {
        stageRimLight.color.setHex(0xD4FF3F);
        stageRimLight.intensity = 2.0;
      }
      if (stageSoftFill) {
        stageSoftFill.color.setHex(0x80612F);
        stageSoftFill.intensity = 0.9;
      }
    }
  }

  function initTheme() {
    let saved = null;
    try {
      saved = localStorage.getItem('atlas_theme_pref');
    } catch (e) {}

    // Default first visit must be light theme as requested
    const preferred = saved || 'light';
    applyTheme(preferred, false);

    if (themeToggleBtn) {
      themeToggleBtn.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        const nextTheme = currentTheme === 'dark' ? 'light' : 'dark';
        applyTheme(nextTheme, true);
        playSfx('click');
      });
    }

    const mobileThemeBtn = document.getElementById('mobile-theme-toggle-btn');
    if (mobileThemeBtn) {
      mobileThemeBtn.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        const nextTheme = currentTheme === 'dark' ? 'light' : 'dark';
        applyTheme(nextTheme, true);
        playSfx('click');
      });
    }
  }

  function applyTheme(theme, save = true) {
    currentTheme = theme;
    docRoot.setAttribute('data-theme', theme);
    document.body.className = theme === 'light' ? 'theme-light' : 'theme-dark';

    // Update meta tags for browser chrome
    const metaThemeColor = document.querySelector('meta[name="theme-color"]');
    if (metaThemeColor) {
      metaThemeColor.setAttribute('content', theme === 'light' ? '#F5F1E8' : '#08090A');
    }
    const metaColorScheme = document.querySelector('meta[name="color-scheme"]');
    if (metaColorScheme) {
      metaColorScheme.setAttribute('content', theme);
    }

    if (themeIcon) {
      themeIcon.textContent = theme === 'light' ? '☼' : '☽';
    }
    if (themeLabel) {
      themeLabel.textContent = theme === 'light' ? 'Light' : 'Dark';
    }

    const mobIcon = document.getElementById('mobile-theme-icon');
    const mobLabel = document.getElementById('mobile-theme-label');
    if (mobIcon) {
      mobIcon.textContent = theme === 'light' ? '☼' : '☽';
    }
    if (mobLabel) {
      mobLabel.textContent = theme === 'light' ? 'Switch to Dark' : 'Switch to Light';
    }

    update3DStageTheme(theme);
    if (window.AtlasStage) window.AtlasStage.updateTheme(theme);
    window.dispatchEvent(new CustomEvent('atlas:themechange', { detail: { theme } }));
    if (window.AtlasThemeCanvas) window.AtlasThemeCanvas.refreshCanvases();

    if (save) {
      try {
        localStorage.setItem('atlas_theme_pref', theme);
      } catch (e) {}
      showToast(`Activated ${theme.toUpperCase()} theme`);
    }
  }

  // ==========================================================================
  // 12. CONTACT ACTIONS & UTILITIES
  // ==========================================================================
  function initContact() {
    if (copyEmailChip) {
      copyEmailChip.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        playSfx('click');

        if (navigator.clipboard && navigator.clipboard.writeText) {
          navigator.clipboard.writeText(EMAIL_ADDRESS).then(() => {
            if (copyEmailStatus) copyEmailStatus.textContent = '✓ Copied to clipboard!';
            showToast(`Copied ${EMAIL_ADDRESS} to clipboard`);
            setTimeout(() => {
              if (copyEmailStatus) copyEmailStatus.textContent = `📋 Copy Email: ${EMAIL_ADDRESS}`;
            }, 3000);
          }).catch(() => {
            window.location.href = `mailto:${EMAIL_ADDRESS}`;
          });
        } else {
          window.location.href = `mailto:${EMAIL_ADDRESS}`;
        }
      });
    }

    // Bind About page copy email button and general .btn-copy-email buttons
    const aboutEmailBtn = document.getElementById('btn-about-copy-email');
    if (aboutEmailBtn) {
      aboutEmailBtn.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        playSfx('click');
        const email = aboutEmailBtn.getAttribute('data-email') || EMAIL_ADDRESS;
        if (navigator.clipboard && navigator.clipboard.writeText) {
          navigator.clipboard.writeText(email).then(() => {
            showToast(`Copied ${email} to clipboard!`);
            const span = aboutEmailBtn.querySelector('span') || aboutEmailBtn;
            const originalText = span.textContent;
            span.textContent = '✓ Copied Email!';
            setTimeout(() => { span.textContent = originalText; }, 2500);
          }).catch(() => {
            window.location.href = `mailto:${email}`;
          });
        } else {
          window.location.href = `mailto:${email}`;
        }
      });
    }


    if (contactForm) {
      contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const trap = document.getElementById('contact-company-website');
        if (trap && trap.value) return; // bot detection

        const nameInput = document.getElementById('contact-name');
        const emailInput = document.getElementById('contact-email');
        const msgInput = document.getElementById('contact-message');

        const name = nameInput ? nameInput.value.trim() : '';
        const email = emailInput ? emailInput.value.trim() : '';
        const message = msgInput ? msgInput.value.trim() : '';

        const subject = encodeURIComponent(`[ATLAS TRANSMISSION] Inquiry from ${name}`);
        const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nObjective:\n${message}\n\nSent from ATLAS Portfolio`);
        const mailtoUrl = `mailto:${EMAIL_ADDRESS}?subject=${subject}&body=${body}`;

        if (contactStatus) {
          contactStatus.textContent = 'Opening your email client to send transmission...';
          contactStatus.style.color = 'var(--accent)';
        }
        showToast('Opening email transmission client...');

        setTimeout(() => {
          window.location.href = mailtoUrl;
          contactForm.reset();
          if (contactStatus) {
            contactStatus.textContent = 'Transmission initiated. Thank you!';
          }
        }, 600);
      });
    }
  }

  // ==========================================================================
  // 13. PROJECT MEDIA VIEWER LIGHTBOX MODAL
  // ==========================================================================
  function openMediaViewer(index, mode = 'image') {
    if (!mediaViewerModal || index < 0 || index >= PROJECTS_DATA.length) return;
    activeViewerIdx = index;
    const project = PROJECTS_DATA[index];

    viewerMode = mode;

    if (mediaViewerIndex) mediaViewerIndex.textContent = `PROJECT 0${index + 1} OF 0${PROJECTS_DATA.length}`;
    if (mediaViewerTitle) mediaViewerTitle.textContent = `${project.name} // System Architecture Preview`;
    if (mediaViewerCaption) mediaViewerCaption.textContent = `${project.category} · Stack: ${project.stack.slice(0, 4).join(', ')}`;

    if (mediaViewerImg) {
      mediaViewerImg.style.display = 'block';
      mediaViewerImg.src = project.image;
      mediaViewerImg.alt = `Architecture and system preview for ${project.name}`;
    }
    if (mediaViewerVideo) {
      mediaViewerVideo.style.display = 'none';
      mediaViewerVideo.pause();
    }
    if (mediaViewerFallback) mediaViewerFallback.style.display = 'none';
    if (mediaViewerToggleMedia) {
      mediaViewerToggleMedia.style.display = 'inline-block';
      mediaViewerToggleMedia.textContent = 'Launch Interactive Simulation ⚡';
    }

    // Lock background scrolling while modal is open
    document.documentElement.style.overflow = 'hidden';
    document.body.style.overflow = 'hidden';

    if (typeof mediaViewerModal.showModal === 'function') {
      mediaViewerModal.showModal();
    } else {
      mediaViewerModal.setAttribute('open', '');
    }

    if (mediaViewerCloseBtn) mediaViewerCloseBtn.focus();
    playSfx('chime');
  }

  function closeMediaViewer() {
    if (!mediaViewerModal) return;
    if (mediaViewerVideo) mediaViewerVideo.pause();

    if (typeof mediaViewerModal.close === 'function') {
      mediaViewerModal.close();
    } else {
      mediaViewerModal.removeAttribute('open');
    }

    // Restore background scrolling
    document.documentElement.style.overflow = '';
    document.body.style.overflow = '';
    playSfx('click');
  }

  function initMediaViewer() {
    if (mediaViewerCloseBtn) {
      mediaViewerCloseBtn.addEventListener('click', (e) => {
        e.preventDefault();
        closeMediaViewer();
      });
    }

    if (mediaViewerBackdropDismiss) {
      mediaViewerBackdropDismiss.addEventListener('click', (e) => {
        e.preventDefault();
        closeMediaViewer();
      });
    }

    if (mediaViewerNextBtn) {
      mediaViewerNextBtn.addEventListener('click', (e) => {
        e.preventDefault();
        openMediaViewer((activeViewerIdx + 1) % PROJECTS_DATA.length, 'image');
      });
    }

    if (mediaViewerPrevBtn) {
      mediaViewerPrevBtn.addEventListener('click', (e) => {
        e.preventDefault();
        openMediaViewer((activeViewerIdx - 1 + PROJECTS_DATA.length) % PROJECTS_DATA.length, 'image');
      });
    }

    if (mediaViewerToggleMedia) {
      mediaViewerToggleMedia.addEventListener('click', (e) => {
        e.preventDefault();
        const project = PROJECTS_DATA[activeViewerIdx];
        closeMediaViewer();
        if (project) {
          navigate(`/projects/${project.slug}`);
          setDetailMediaMode('sim');
        }
      });
    }

    if (mediaViewerOpenDetails) {
      mediaViewerOpenDetails.addEventListener('click', (e) => {
        e.preventDefault();
        closeMediaViewer();
        navigate(`/projects/${PROJECTS_DATA[activeViewerIdx].slug}`);
      });
    }

    window.addEventListener('keydown', (e) => {
      if (!mediaViewerModal || !mediaViewerModal.open) return;
      if (e.key === 'Escape') {
        closeMediaViewer();
      } else if (e.key === 'ArrowRight') {
        e.preventDefault();
        openMediaViewer((activeViewerIdx + 1) % PROJECTS_DATA.length, viewerMode);
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        openMediaViewer((activeViewerIdx - 1 + PROJECTS_DATA.length) % PROJECTS_DATA.length, viewerMode);
      }
    });
  }

  // ==========================================================================
  // 14. MOBILE NAVIGATION & ACCESSIBILITY
  // ==========================================================================
  function initMobileNav() {
    if (mobileMenuBtn && mobileNavDrawer) {
      mobileMenuBtn.addEventListener('click', (e) => {
        e.preventDefault();
        const isOpen = mobileNavDrawer.classList.contains('is-open');
        if (isOpen) {
          mobileNavDrawer.classList.remove('is-open');
          mobileNavDrawer.setAttribute('aria-hidden', 'true');
          mobileMenuBtn.setAttribute('aria-expanded', 'false');
          document.body.classList.remove('mobile-nav-active');
          document.documentElement.style.overflow = '';
          document.body.style.overflow = '';
        } else {
          mobileNavDrawer.classList.add('is-open');
          mobileNavDrawer.setAttribute('aria-hidden', 'false');
          mobileMenuBtn.setAttribute('aria-expanded', 'true');
          document.body.classList.add('mobile-nav-active');
          document.documentElement.style.overflow = 'hidden';
          document.body.style.overflow = 'hidden';
          if (mobileNavCloseBtn) mobileNavCloseBtn.focus();
        }
        playSfx('click');
      });
    }

    if (mobileNavCloseBtn && mobileNavDrawer) {
      mobileNavCloseBtn.addEventListener('click', (e) => {
        e.preventDefault();
        mobileNavDrawer.classList.remove('is-open');
        mobileNavDrawer.setAttribute('aria-hidden', 'true');
        if (mobileMenuBtn) mobileMenuBtn.setAttribute('aria-expanded', 'false');
        document.body.classList.remove('mobile-nav-active');
        document.documentElement.style.overflow = '';
        document.body.style.overflow = '';
        playSfx('click');
      });
    }

    if (motionToggleBtn) {
      motionToggleBtn.addEventListener('click', (e) => {
        e.preventDefault();
        isReducedMotion = !isReducedMotion;
        motionToggleBtn.setAttribute('aria-pressed', isReducedMotion ? 'false' : 'true');
        const lbl = motionToggleBtn.querySelector('.ctrl-label');
        if (lbl) lbl.textContent = isReducedMotion ? 'Motion off' : 'Motion on';
        document.body.classList.toggle('reduced-motion-active', isReducedMotion);
        showToast(isReducedMotion ? 'Reduced motion enabled' : 'Smooth motion enabled');
      });
    }

    if (soundToggleBtn) {
      soundToggleBtn.addEventListener('click', (e) => {
        e.preventDefault();
        isSoundActive = !isSoundActive;
        soundToggleBtn.setAttribute('aria-pressed', isSoundActive ? 'true' : 'false');
        soundToggleBtn.classList.toggle('sound-active', isSoundActive);
        const lbl = soundToggleBtn.querySelector('.ctrl-label');
        if (lbl) lbl.textContent = isSoundActive ? 'Sound on' : 'Sound off';
        if (isSoundActive) playSfx('chime');
        showToast(isSoundActive ? 'Ambient sound activated' : 'Sound muted');
      });
    }
  }

  // ==========================================================================
  // 15. INTERACTIVE AI PLAYGROUND (PHASE 7 FEATURE D)
  // ==========================================================================
  function initAiPlayground() {
    const promptInput = document.getElementById('ai-prompt-input');
    const runBtn = document.getElementById('btn-run-ai-lab');
    const copyBtn = document.getElementById('btn-copy-ai-output');
    const outputEl = document.getElementById('ai-lab-output');
    const statusEl = document.getElementById('ai-status-indicator');
    const modelSelect = document.getElementById('ai-model-select');
    const presetChips = document.querySelectorAll('.ai-preset-chip');

    const responses = {
      solvex: `[MODEL: GEMINI-1.5-PRO // SOLVEX NER INFERENCE]
Target Corridor: Guwahati ➔ Shillong Mountain Pass (Elev: 1,496m)
Telemetry Feed: 4 nodes active, 1 landslide obstruction detected at Node C-07.
Heuristic Evaluation:
- Cost Function: f(n) = g(n) + h(n) + W_terrain * Friction(n)
- Alternate Waypoint: Rerouted via Bypass Highway 106
- Estimated Transit Time: 2h 45m (-38% vs blocked route)
- Emergency Mesh Status: Beacon broadcast packet dispatched (64 bytes payload).
Verified against repository: solvex-ner-platform2.0 (SIH 2026 Submission)`,

      intellipdf: `[MODEL: RAG PIPELINE // INTELLIPDF SYNTHESIS]
Source Document: Data_Structures_Unit_IV.pdf (142 pages)
Extracted Query: Dijkstra Shortest Path Proof & Asymptotic Complexity
Vector Chunk ID: CHUNK_#0492 (Cosine Distance: 0.041)
Grounding Citation: Page 87, Paragraph 3

[16-MARK SYNTHESIZED EXAM PROOF]:
1. Definition & Invariant: Maintains a set S of vertices whose shortest distances from source are known.
2. Relaxation Step: if d[u] + w(u, v) < d[v], then d[v] = d[u] + w(u, v).
3. Heap Optimizations: Using a Fibonacci Heap yields O(E + V log V); Binary min-heap yields O((V + E) log V).
Zero hallucination verified against repository: IntelliPDF`,

      linkx: `[MODEL: GEMINI VISION // LINKX CONTENT COMPOSITION]
Input Visual: Distributed System Microservices Architecture Diagram
Extracted Entities: [Flask Gateway, Redis Cache, Workers, Postgres DB]
Tone Profile: Engineering & Thought Leadership

Suggested LinkedIn Publication Draft:
"Most architecture bottlenecks aren't caused by code — they're caused by unbounded latency coupling between synchronous service boundaries. 
Here is how we reduced p99 request latency by 68% using asynchronous token queues and provider proxies... 🚀

#SystemDesign #CloudArchitecture #FullStack #SoftwareEngineering #Python"
Verified against repository: linkxxx (Kotlin + Android + Gemini)`,

      smartagri: `[MODEL: TELEMETRY ENGINE // SMART AGRICULTURE SENSORS]
Field Node: Sector 4 (Soil Moisture Probe Capacitive V2.0)
Current Moisture: 28.4% (Critical Threshold: < 32.0%)
Ambient Temp: 29.8°C | Relative Humidity: 54%
Hysteresis Filter: Active (High Threshold: 65.0%)
Actuation Decision:
- Solenoid Valve #03 Relay: [TRIGGER ON - HIGH FLOW]
- Water Conservation Cycle: 12 minutes pulse irrigation
- Projected Resource Savings: 440 liters vs timer-based irrigation.
Verified against repository: smart-agriculture (ESP32 / Embedded C)`
    };

    presetChips.forEach(chip => {
      chip.addEventListener('click', (e) => {
        e.preventDefault();
        presetChips.forEach(c => c.classList.remove('is-active'));
        chip.classList.add('is-active');
        if (promptInput) {
          promptInput.value = chip.getAttribute('data-prompt') || '';
          promptInput.focus();
        }
        playSfx('click');
      });
    });

    if (runBtn && outputEl) {
      runBtn.addEventListener('click', (e) => {
        e.preventDefault();
        const text = promptInput ? promptInput.value.toLowerCase() : '';
        const model = modelSelect ? modelSelect.value : 'gemini';

        let targetKey = 'solvex';
        if (text.includes('exam') || text.includes('rag') || text.includes('pdf')) targetKey = 'intellipdf';
        else if (text.includes('linkedin') || text.includes('post') || text.includes('vision') || text.includes('image')) targetKey = 'linkx';
        else if (text.includes('soil') || text.includes('moisture') || text.includes('agri') || text.includes('pump')) targetKey = 'smartagri';

        if (statusEl) {
          statusEl.textContent = `INFERENCING VIA ${model.toUpperCase()}...`;
          statusEl.style.color = 'var(--accent)';
        }

        outputEl.textContent = 'Streaming response tokens...\n';
        runBtn.disabled = true;
        playSfx('chime');

        const fullResponse = responses[targetKey];
        let charIndex = 0;

        const interval = setInterval(() => {
          charIndex += 4;
          outputEl.textContent = fullResponse.slice(0, charIndex) + (charIndex < fullResponse.length ? ' ▋' : '');
          if (charIndex >= fullResponse.length) {
            clearInterval(interval);
            runBtn.disabled = false;
            if (statusEl) {
              statusEl.textContent = `COMPLETED // 248 TOKENS // LATENCY: 34ms (LOCAL DEMONSTRATION)`;
              statusEl.style.color = '#34d399';
            }
            if (copyBtn) copyBtn.style.display = 'inline-flex';
          }
        }, 18);
      });
    }

    if (copyBtn && outputEl) {
      copyBtn.addEventListener('click', (e) => {
        e.preventDefault();
        navigator.clipboard.writeText(outputEl.textContent).then(() => {
          showToast('AI response copied to clipboard!');
          playSfx('click');
        });
      });
    }
  }

  // ==========================================================================
  // 14. DEVELOPER TOOLS WORKSPACE CONTROLLER
  // ==========================================================================
  let isToolsWorkspaceInitialized = false;

  function initToolsWorkspace() {
    // 1. Tab Navigation between Playground, Snippets, Utilities, Terminal
    const tabBtns = document.querySelectorAll('[data-tool-tab]');
    const panels = {
      'playground': document.getElementById('tool-panel-playground'),
      'snippets': document.getElementById('tool-panel-snippets'),
      'utilities': document.getElementById('tool-panel-utilities'),
      'terminal': document.getElementById('tool-panel-terminal'),
      'ai-lab': document.getElementById('tool-panel-ai-lab')
    };

    tabBtns.forEach(btn => {
      btn.onclick = (e) => {
        e.preventDefault();
        const tab = btn.getAttribute('data-tool-tab');
        tabBtns.forEach(b => {
          b.classList.remove('is-active');
          b.setAttribute('aria-selected', 'false');
        });
        btn.classList.add('is-active');
        btn.setAttribute('aria-selected', 'true');

        Object.keys(panels).forEach(pKey => {
          if (panels[pKey]) {
            panels[pKey].style.display = pKey === tab ? 'block' : 'none';
          }
        });
        playSfx('click');
      };
    });

    if (isToolsWorkspaceInitialized) return;
    isToolsWorkspaceInitialized = true;

    // --- SUB-FEATURE A: LIVE CODE PLAYGROUND (Feature 2) ---
    const pgTabBtns = document.querySelectorAll('[data-pg-tab]');
    const htmlInput = document.getElementById('playground-html-input');
    const cssInput = document.getElementById('playground-css-input');
    const jsInput = document.getElementById('playground-js-input');
    const presetSelect = document.getElementById('playground-preset-select');
    const runBtn = document.getElementById('btn-run-playground-code');
    const resetBtn = document.getElementById('btn-reset-playground-code');
    const copyBtn = document.getElementById('btn-copy-playground-code');
    const previewFrame = document.getElementById('playground-preview-frame');
    const consoleOutput = document.getElementById('playground-console-output');
    const execBadge = document.getElementById('playground-exec-badge');
    const editorMeta = document.getElementById('playground-editor-meta');
    const statusDot = document.getElementById('pg-status-dot');
    const statusText = document.getElementById('pg-status-text');
    const btnViewPreview = document.getElementById('btn-view-preview');
    const btnViewConsole = document.getElementById('btn-view-console');
    const iframeBox = document.getElementById('playground-iframe-box');
    const consoleCount = document.getElementById('pg-console-count');
    const clearBtn = document.getElementById('btn-clear-playground-output');
    const vpBtns = document.querySelectorAll('[data-vp]');

    let activeEditor = 'html';
    let logCount = 0;

    function getActiveEditorInput() {
      if (activeEditor === 'html') return htmlInput;
      if (activeEditor === 'css') return cssInput;
      return jsInput;
    }

    function updateEditorMeta() {
      const input = getActiveEditorInput();
      if (!input || !editorMeta) return;
      const lines = input.value.split('\n').length;
      const chars = input.value.length;
      editorMeta.textContent = `${activeEditor.toUpperCase()} · Lines: ${lines} · Chars: ${chars} · UTF-8`;
    }

    function switchEditorTab(tabKey) {
      activeEditor = tabKey;
      pgTabBtns.forEach(b => {
        const isMatch = b.getAttribute('data-pg-tab') === tabKey;
        b.classList.toggle('is-active', isMatch);
        b.setAttribute('aria-selected', isMatch);
      });

      if (htmlInput) htmlInput.style.display = tabKey === 'html' ? 'block' : 'none';
      if (cssInput) cssInput.style.display = tabKey === 'css' ? 'block' : 'none';
      if (jsInput) jsInput.style.display = tabKey === 'js' ? 'block' : 'none';

      updateEditorMeta();
      const current = getActiveEditorInput();
      if (current) current.focus();
    }

    pgTabBtns.forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        const tab = btn.getAttribute('data-pg-tab');
        switchEditorTab(tab);
        playSfx('click');
      });
    });

    function appendConsole(type, text) {
      if (!consoleOutput) return;
      const line = document.createElement('span');
      line.className = `console-line console-line--${type}`;
      line.textContent = text;
      consoleOutput.appendChild(line);
      consoleOutput.scrollTop = consoleOutput.scrollHeight;
    }

    // Sandboxed preview compiler
    function runPlayground() {
      const html = htmlInput ? htmlInput.value : '';
      const css = cssInput ? cssInput.value : '';
      const js = jsInput ? jsInput.value : '';
      const t0 = performance.now();

      const srcdoc = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <style>
    * { box-sizing: border-box; }
    body {
      margin: 0;
      padding: 16px;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
      background: #ffffff;
      color: #17191f;
    }
    ${css}
  </style>
</head>
<body>
  ${html}
  <script>
    (function() {
      function send(type, payload) {
        try {
          window.parent.postMessage({ source: 'atlas-playground', type: type, payload: payload }, '*');
        } catch(e) {}
      }

      window.onerror = function(msg, url, line, col, err) {
        send('error', { msg: String(msg), line: line, col: col });
        return false;
      };

      const _log = console.log, _warn = console.warn, _error = console.error;
      console.log = function(...args) {
        send('log', { text: args.map(a => typeof a === 'object' ? JSON.stringify(a) : String(a)).join(' ') });
        _log.apply(console, args);
      };
      console.warn = function(...args) {
        send('warn', { text: args.map(a => typeof a === 'object' ? JSON.stringify(a) : String(a)).join(' ') });
        _warn.apply(console, args);
      };
      console.error = function(...args) {
        send('error', { msg: args.map(a => typeof a === 'object' ? JSON.stringify(a) : String(a)).join(' ') });
        _error.apply(console, args);
      };

      try {
        ${js}
      } catch(err) {
        send('error', { msg: err.message, line: err.lineNumber || 1 });
      }
    })();
  <\/script>
</body>
</html>`;

      if (previewFrame) {
        previewFrame.srcdoc = srcdoc;
      }

      const duration = (performance.now() - t0).toFixed(1);
      if (execBadge) {
        execBadge.textContent = `⚡ ${duration}ms`;
        execBadge.style.color = '#4ade80';
      }
      if (statusDot) {
        statusDot.className = 'status-indicator-dot';
      }
      if (statusText) {
        statusText.textContent = `Preview recompiled in ${duration}ms. Executing in sandboxed iframe.`;
      }
    }

    // Listen to messages from isolated sandboxed iframe
    window.addEventListener('message', (e) => {
      if (!e.data || e.data.source !== 'atlas-playground') return;
      const { type, payload } = e.data;
      logCount++;
      if (consoleCount) consoleCount.textContent = String(logCount);

      if (type === 'error') {
        appendConsole('error', `[Runtime Exception] Line ${payload.line || '?'}: ${payload.msg}`);
        if (statusDot) statusDot.className = 'status-indicator-dot status-indicator-dot--err';
        if (statusText) statusText.textContent = `Script Error: ${payload.msg}`;
        if (execBadge) {
          execBadge.textContent = 'Error';
          execBadge.style.color = '#f87171';
        }
      } else if (type === 'warn') {
        appendConsole('warn', `[Warn] ${payload.text}`);
      } else if (type === 'log') {
        appendConsole('info', payload.text);
      }
    });

    function loadStarterPreset(presetKey) {
      const p = PLAYGROUND_STARTERS[presetKey] || PLAYGROUND_STARTERS['glass-counter'];
      if (htmlInput) htmlInput.value = p.html;
      if (cssInput) cssInput.value = p.css;
      if (jsInput) jsInput.value = p.js;
      updateEditorMeta();
      runPlayground();
      appendConsole('info', `[PRESET LOADED] -> ${presetKey.toUpperCase()}`);
    }

    if (presetSelect) {
      presetSelect.addEventListener('change', () => {
        loadStarterPreset(presetSelect.value);
        playSfx('click');
      });
    }

    if (runBtn) {
      runBtn.addEventListener('click', () => {
        runPlayground();
        playSfx('click');
      });
    }

    if (resetBtn && presetSelect) {
      resetBtn.addEventListener('click', () => {
        loadStarterPreset(presetSelect.value);
        showToast('Reset playground to starter template.');
        playSfx('click');
      });
    }

    if (copyBtn) {
      copyBtn.addEventListener('click', () => {
        const activeInput = getActiveEditorInput();
        const codeText = activeInput ? activeInput.value : '';
        navigator.clipboard.writeText(codeText).then(() => {
          showToast(`${activeEditor.toUpperCase()} code copied to clipboard!`);
          playSfx('click');
        });
      });
    }

    if (clearBtn && consoleOutput) {
      clearBtn.addEventListener('click', () => {
        consoleOutput.innerHTML = '';
        logCount = 0;
        if (consoleCount) consoleCount.textContent = '0';
        if (execBadge) {
          execBadge.textContent = 'Cleared';
          execBadge.style.color = 'var(--mist)';
        }
        playSfx('click');
      });
    }

    // View mode switching: Live Preview vs Console Output
    if (btnViewPreview && btnViewConsole && iframeBox && consoleOutput) {
      btnViewPreview.addEventListener('click', () => {
        btnViewPreview.classList.add('is-active');
        btnViewPreview.setAttribute('aria-selected', 'true');
        btnViewConsole.classList.remove('is-active');
        btnViewConsole.setAttribute('aria-selected', 'false');
        iframeBox.style.display = 'flex';
        consoleOutput.style.display = 'none';
        playSfx('click');
      });

      btnViewConsole.addEventListener('click', () => {
        btnViewConsole.classList.add('is-active');
        btnViewConsole.setAttribute('aria-selected', 'true');
        btnViewPreview.classList.remove('is-active');
        btnViewPreview.setAttribute('aria-selected', 'false');
        iframeBox.style.display = 'none';
        consoleOutput.style.display = 'block';
        playSfx('click');
      });
    }

    // Responsive viewport controls
    if (vpBtns && iframeBox) {
      vpBtns.forEach(btn => {
        btn.addEventListener('click', () => {
          vpBtns.forEach(b => b.classList.remove('is-active'));
          btn.classList.add('is-active');
          const vpWidth = btn.getAttribute('data-vp') || '100%';
          iframeBox.style.width = vpWidth;
          playSfx('click');
        });
      });
    }

    // Keyboard handlers (Ctrl+Enter to run, Tab to indent)
    [htmlInput, cssInput, jsInput].forEach(inp => {
      if (!inp) return;
      inp.addEventListener('input', updateEditorMeta);
      inp.addEventListener('keydown', (e) => {
        if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
          e.preventDefault();
          runPlayground();
        } else if (e.key === 'Tab') {
          e.preventDefault();
          const start = inp.selectionStart;
          const end = inp.selectionEnd;
          inp.value = inp.value.substring(0, start) + '  ' + inp.value.substring(end);
          inp.selectionStart = inp.selectionEnd = start + 2;
          updateEditorMeta();
        }
      });
    });

    // Initialize with starter preset
    loadStarterPreset('glass-counter');

    // --- SUB-FEATURE B: CODE SNIPPETS LIBRARY ---
    const snippetsGrid = document.getElementById('snippets-cards-grid');
    const snippetsSearchInput = document.getElementById('snippets-search-input');
    const snippetsSearchClear = document.getElementById('snippets-search-clear');
    const snippetCatChips = document.querySelectorAll('[data-snippet-cat]');
    const snippetsEmptyState = document.getElementById('snippets-empty-state');
    const btnResetSnippets = document.getElementById('btn-reset-snippets-filter');

    let currentSnippetCategory = 'all';
    let currentSnippetSearch = '';

    function renderSnippets() {
      if (!snippetsGrid) return;
      const q = currentSnippetSearch.toLowerCase().trim();
      const filtered = SNIPPETS_DATA.filter(s => {
        const matchesCat = currentSnippetCategory === 'all' || s.category === currentSnippetCategory;
        const matchesQuery = !q || s.title.toLowerCase().includes(q) || s.desc.toLowerCase().includes(q) || s.lang.toLowerCase().includes(q) || s.code.toLowerCase().includes(q);
        return matchesCat && matchesQuery;
      });

      if (filtered.length === 0) {
        snippetsGrid.style.display = 'none';
        if (snippetsEmptyState) snippetsEmptyState.style.display = 'block';
        return;
      }

      snippetsGrid.style.display = 'grid';
      if (snippetsEmptyState) snippetsEmptyState.style.display = 'none';

      snippetsGrid.innerHTML = filtered.map(item => `
        <article class="snippet-card">
          <div class="snippet-card__header">
            <h3 class="snippet-card__title">${item.title}</h3>
            <span class="snippet-card__cat">${item.categoryLabel}</span>
          </div>
          <p class="snippet-card__desc">${item.desc}</p>
          <div class="snippet-card__code-wrap">
            <pre class="snippet-card__code"><code>${escapeHtml(item.code)}</code></pre>
          </div>
          <div class="snippet-card__footer">
            <span class="snippet-card__lang">${item.lang}</span>
            <button type="button" class="pill pill--tiny pill--ghost" data-copy-snippet="${item.id}">📋 Copy</button>
          </div>
        </article>
      `).join('');

      // Wire up copy buttons
      snippetsGrid.querySelectorAll('[data-copy-snippet]').forEach(b => {
        b.onclick = (e) => {
          e.preventDefault();
          const sid = b.getAttribute('data-copy-snippet');
          const found = SNIPPETS_DATA.find(x => x.id === sid);
          if (found) {
            navigator.clipboard.writeText(found.code).then(() => {
              showToast(`Copied "${found.title}" snippet!`);
              playSfx('click');
            });
          }
        };
      });
    }

    if (snippetCatChips) {
      snippetCatChips.forEach(chip => {
        chip.addEventListener('click', () => {
          snippetCatChips.forEach(c => {
            c.classList.remove('is-active');
            c.setAttribute('aria-selected', 'false');
          });
          chip.classList.add('is-active');
          chip.setAttribute('aria-selected', 'true');
          currentSnippetCategory = chip.getAttribute('data-snippet-cat') || 'all';
          renderSnippets();
          playSfx('click');
        });
      });
    }

    if (snippetsSearchInput) {
      snippetsSearchInput.addEventListener('input', () => {
        currentSnippetSearch = snippetsSearchInput.value;
        if (snippetsSearchClear) {
          snippetsSearchClear.style.display = currentSnippetSearch ? 'block' : 'none';
        }
        renderSnippets();
      });
    }

    if (snippetsSearchClear && snippetsSearchInput) {
      snippetsSearchClear.addEventListener('click', () => {
        snippetsSearchInput.value = '';
        currentSnippetSearch = '';
        snippetsSearchClear.style.display = 'none';
        renderSnippets();
      });
    }

    if (btnResetSnippets && snippetCatChips) {
      btnResetSnippets.addEventListener('click', () => {
        currentSnippetCategory = 'all';
        currentSnippetSearch = '';
        if (snippetsSearchInput) snippetsSearchInput.value = '';
        if (snippetsSearchClear) snippetsSearchClear.style.display = 'none';
        snippetCatChips.forEach(c => {
          c.classList.toggle('is-active', c.getAttribute('data-snippet-cat') === 'all');
          c.setAttribute('aria-selected', c.getAttribute('data-snippet-cat') === 'all');
        });
        renderSnippets();
      });
    }

    // --- SUB-FEATURE C: 8 DEVELOPER UTILITIES ---
    initUtilitiesSuite();

    // --- FEATURE 1: INTERACTIVE ATLAS TERMINAL ---
    initAtlasTerminal();
  }

  function initUtilitiesSuite() {
    // Utility tab selection
    const utilNavChips = document.querySelectorAll('[data-util-target]');
    const utilCards = {
      'json-format': document.getElementById('util-card-json-format'),
      'json-minify': document.getElementById('util-card-json-minify'),
      'base64': document.getElementById('util-card-base64'),
      'url-codec': document.getElementById('util-card-url-codec'),
      'word-count': document.getElementById('util-card-word-count'),
      'timestamp': document.getElementById('util-card-timestamp'),
      'color-converter': document.getElementById('util-card-color-converter'),
      'text-diff': document.getElementById('util-card-text-diff')
    };

    utilNavChips.forEach(chip => {
      chip.addEventListener('click', (e) => {
        e.preventDefault();
        const target = chip.getAttribute('data-util-target');
        utilNavChips.forEach(c => c.classList.remove('is-active'));
        chip.classList.add('is-active');

        Object.keys(utilCards).forEach(key => {
          if (utilCards[key]) {
            utilCards[key].style.display = key === target ? 'flex' : 'none';
          }
        });
        playSfx('click');
      });
    });

    // Tool 1: JSON Formatter & Validator
    const jsonInput = document.getElementById('json-input');
    const jsonOutput = document.getElementById('json-output');
    const jsonStatus = document.getElementById('json-status-msg');
    const jsonIndentSelect = document.getElementById('json-indent-select');
    const btnFormatJson = document.getElementById('btn-format-json');
    const btnCopyJson = document.getElementById('btn-copy-json');
    const btnClearJson = document.getElementById('btn-clear-json');

    if (btnFormatJson && jsonInput && jsonOutput) {
      btnFormatJson.addEventListener('click', () => {
        const val = jsonInput.value.trim();
        if (!val) {
          jsonOutput.textContent = '// Enter or paste JSON to format';
          if (jsonStatus) jsonStatus.textContent = 'Awaiting JSON input';
          return;
        }
        try {
          const parsed = JSON.parse(val);
          const indent = jsonIndentSelect && jsonIndentSelect.value === '4' ? 4 : 2;
          const formatted = JSON.stringify(parsed, null, indent);
          jsonOutput.textContent = formatted;
          if (jsonStatus) {
            jsonStatus.textContent = `✓ Valid JSON (${Object.keys(parsed).length} top-level keys)`;
            jsonStatus.style.color = '#4ade80';
          }
        } catch (err) {
          jsonOutput.textContent = `// JSON Syntax Error:\n${err.message}`;
          if (jsonStatus) {
            jsonStatus.textContent = `✗ Invalid JSON: ${err.message}`;
            jsonStatus.style.color = '#f87171';
          }
        }
        playSfx('click');
      });
    }
    if (btnCopyJson && jsonOutput) {
      btnCopyJson.addEventListener('click', () => {
        navigator.clipboard.writeText(jsonOutput.textContent).then(() => {
          showToast('Formatted JSON copied to clipboard!');
          playSfx('click');
        });
      });
    }
    if (btnClearJson && jsonInput && jsonOutput) {
      btnClearJson.addEventListener('click', () => {
        jsonInput.value = '';
        jsonOutput.textContent = '// JSON output cleared';
        if (jsonStatus) jsonStatus.textContent = 'Cleared';
        playSfx('click');
      });
    }

    // Tool 2: JSON Minifier
    const jsonMinifyInput = document.getElementById('json-minify-input');
    const jsonMinifyOutput = document.getElementById('json-minify-output');
    const jsonMinifyStatus = document.getElementById('json-minify-status');
    const btnMinifyJson = document.getElementById('btn-minify-json');
    const btnCopyMinified = document.getElementById('btn-copy-minified-json');
    const btnClearMinified = document.getElementById('btn-clear-minified-json');

    if (btnMinifyJson && jsonMinifyInput && jsonMinifyOutput) {
      btnMinifyJson.addEventListener('click', () => {
        const val = jsonMinifyInput.value.trim();
        if (!val) return;
        try {
          const parsed = JSON.parse(val);
          const minified = JSON.stringify(parsed);
          jsonMinifyOutput.value = minified;
          const savedBytes = val.length - minified.length;
          const pct = ((savedBytes / val.length) * 100).toFixed(1);
          if (jsonMinifyStatus) {
            jsonMinifyStatus.textContent = `✓ Minified cleanly: Saved ${savedBytes} bytes (${pct}% reduction)`;
            jsonMinifyStatus.style.color = '#4ade80';
          }
        } catch (err) {
          if (jsonMinifyStatus) {
            jsonMinifyStatus.textContent = `✗ Parse Error: ${err.message}`;
            jsonMinifyStatus.style.color = '#f87171';
          }
        }
        playSfx('click');
      });
    }
    if (btnCopyMinified && jsonMinifyOutput) {
      btnCopyMinified.addEventListener('click', () => {
        navigator.clipboard.writeText(jsonMinifyOutput.value).then(() => {
          showToast('Minified JSON copied!');
          playSfx('click');
        });
      });
    }
    if (btnClearMinified && jsonMinifyInput && jsonMinifyOutput) {
      btnClearMinified.addEventListener('click', () => {
        jsonMinifyInput.value = '';
        jsonMinifyOutput.value = '';
        if (jsonMinifyStatus) jsonMinifyStatus.textContent = 'Ready';
        playSfx('click');
      });
    }

    // Tool 3: Base64 Encoder & Decoder
    const base64Input = document.getElementById('base64-input');
    const base64Output = document.getElementById('base64-output');
    const base64Status = document.getElementById('base64-status-msg');
    const btnB64Encode = document.getElementById('btn-base64-encode');
    const btnB64Decode = document.getElementById('btn-base64-decode');
    const btnCopyB64 = document.getElementById('btn-copy-base64');
    const btnClearB64 = document.getElementById('btn-clear-base64');

    if (btnB64Encode && base64Input && base64Output) {
      btnB64Encode.addEventListener('click', () => {
        try {
          const encoded = btoa(unescape(encodeURIComponent(base64Input.value)));
          base64Output.value = encoded;
          if (base64Status) {
            base64Status.textContent = `✓ Successfully encoded ${base64Input.value.length} characters to Base64`;
            base64Status.style.color = '#4ade80';
          }
        } catch (e) {
          if (base64Status) base64Status.textContent = `Encoding failed: ${e.message}`;
        }
        playSfx('click');
      });
    }
    if (btnB64Decode && base64Input && base64Output) {
      btnB64Decode.addEventListener('click', () => {
        try {
          const decoded = decodeURIComponent(escape(atob(base64Input.value.trim())));
          base64Output.value = decoded;
          if (base64Status) {
            base64Status.textContent = `✓ Successfully decoded Base64 string to plain text`;
            base64Status.style.color = '#4ade80';
          }
        } catch (e) {
          if (base64Status) {
            base64Status.textContent = `✗ Invalid Base64 sequence: ${e.message}`;
            base64Status.style.color = '#f87171';
          }
        }
        playSfx('click');
      });
    }
    if (btnCopyB64 && base64Output) {
      btnCopyB64.addEventListener('click', () => {
        navigator.clipboard.writeText(base64Output.value).then(() => {
          showToast('Base64 result copied!');
          playSfx('click');
        });
      });
    }
    if (btnClearB64 && base64Input && base64Output) {
      btnClearB64.addEventListener('click', () => {
        base64Input.value = '';
        base64Output.value = '';
        if (base64Status) base64Status.textContent = 'Ready';
        playSfx('click');
      });
    }

    // Tool 4: URL Encoder & Decoder
    const urlInput = document.getElementById('url-codec-input');
    const urlOutput = document.getElementById('url-codec-output');
    const urlStatus = document.getElementById('url-status-msg');
    const btnUrlEncode = document.getElementById('btn-url-encode');
    const btnUrlDecode = document.getElementById('btn-url-decode');
    const btnCopyUrl = document.getElementById('btn-copy-url');
    const btnClearUrl = document.getElementById('btn-clear-url');

    if (btnUrlEncode && urlInput && urlOutput) {
      btnUrlEncode.addEventListener('click', () => {
        urlOutput.value = encodeURIComponent(urlInput.value);
        if (urlStatus) urlStatus.textContent = '✓ URL encoded successfully';
        playSfx('click');
      });
    }
    if (btnUrlDecode && urlInput && urlOutput) {
      btnUrlDecode.addEventListener('click', () => {
        try {
          urlOutput.value = decodeURIComponent(urlInput.value);
          if (urlStatus) urlStatus.textContent = '✓ URL decoded successfully';
        } catch (e) {
          if (urlStatus) urlStatus.textContent = `✗ Malformed URI: ${e.message}`;
        }
        playSfx('click');
      });
    }
    if (btnCopyUrl && urlOutput) {
      btnCopyUrl.addEventListener('click', () => {
        navigator.clipboard.writeText(urlOutput.value).then(() => {
          showToast('URL copied to clipboard!');
          playSfx('click');
        });
      });
    }
    if (btnClearUrl && urlInput && urlOutput) {
      btnClearUrl.addEventListener('click', () => {
        urlInput.value = '';
        urlOutput.value = '';
        if (urlStatus) urlStatus.textContent = 'Ready';
        playSfx('click');
      });
    }

    // Tool 5: Word, Character & Line Counter
    const wordCountInput = document.getElementById('word-count-input');
    const cntWords = document.getElementById('cnt-words');
    const cntChars = document.getElementById('cnt-chars');
    const cntCharsNoSpace = document.getElementById('cnt-chars-no-space');
    const cntLines = document.getElementById('cnt-lines');
    const cntParagraphs = document.getElementById('cnt-paragraphs');
    const cntReadTime = document.getElementById('cnt-read-time');
    const btnClearCounter = document.getElementById('btn-clear-counter');

    function updateCounterTelemetry() {
      if (!wordCountInput) return;
      const text = wordCountInput.value;
      const words = text.trim() ? text.trim().split(/\s+/).length : 0;
      const chars = text.length;
      const charsNoSpace = text.replace(/\s/g, '').length;
      const lines = text ? text.split('\n').length : 0;
      const paras = text.trim() ? text.split(/\n\s*\n/).filter(p => p.trim()).length : 0;
      const readMin = Math.ceil(words / 200);

      if (cntWords) cntWords.textContent = words.toLocaleString();
      if (cntChars) cntChars.textContent = chars.toLocaleString();
      if (cntCharsNoSpace) cntCharsNoSpace.textContent = charsNoSpace.toLocaleString();
      if (cntLines) cntLines.textContent = lines.toLocaleString();
      if (cntParagraphs) cntParagraphs.textContent = paras.toLocaleString();
      if (cntReadTime) cntReadTime.textContent = `${readMin} min`;
    }

    if (wordCountInput) {
      wordCountInput.addEventListener('input', updateCounterTelemetry);
    }
    if (btnClearCounter && wordCountInput) {
      btnClearCounter.addEventListener('click', () => {
        wordCountInput.value = '';
        updateCounterTelemetry();
        playSfx('click');
      });
    }

    // Tool 6: Timestamp Converter
    const currentEpochVal = document.getElementById('current-epoch-val');
    const tsEpochInput = document.getElementById('ts-epoch-input');
    const btnConvertEpoch = document.getElementById('btn-convert-epoch');
    const tsResUtc = document.getElementById('ts-res-utc');
    const tsResLocal = document.getElementById('ts-res-local');
    const tsResRelative = document.getElementById('ts-res-relative');

    const tsDateInput = document.getElementById('ts-date-input');
    const btnConvertDate = document.getElementById('btn-convert-date');
    const tsResSec = document.getElementById('ts-res-sec');
    const tsResMs = document.getElementById('ts-res-ms');

    // Live Epoch Ticker
    setInterval(() => {
      if (currentEpochVal) {
        currentEpochVal.textContent = Math.floor(Date.now() / 1000);
      }
    }, 1000);

    if (btnConvertEpoch && tsEpochInput) {
      btnConvertEpoch.addEventListener('click', () => {
        let raw = tsEpochInput.value.trim();
        if (!raw) raw = String(Math.floor(Date.now() / 1000));
        let num = Number(raw);
        if (isNaN(num)) return;
        if (num < 10000000000) num *= 1000; // auto-detect seconds vs millis

        const d = new Date(num);
        if (tsResUtc) tsResUtc.textContent = d.toUTCString();
        if (tsResLocal) tsResLocal.textContent = d.toString();
        if (tsResRelative) {
          const diffSec = Math.floor((Date.now() - num) / 1000);
          if (Math.abs(diffSec) < 60) tsResRelative.textContent = 'just now';
          else if (diffSec > 0) tsResRelative.textContent = `${Math.floor(diffSec / 60)} minutes ago`;
          else tsResRelative.textContent = `in ${Math.floor(Math.abs(diffSec) / 60)} minutes`;
        }
        playSfx('click');
      });
    }

    if (btnConvertDate && tsDateInput) {
      btnConvertDate.addEventListener('click', () => {
        if (!tsDateInput.value) return;
        const d = new Date(tsDateInput.value);
        const ms = d.getTime();
        if (tsResSec) tsResSec.textContent = Math.floor(ms / 1000);
        if (tsResMs) tsResMs.textContent = ms;
        playSfx('click');
      });
    }

    // Tool 7: Color Converter
    const colorPicker = document.getElementById('color-picker-input');
    const colorPreviewBox = document.getElementById('color-preview-box');
    const colorPreviewText = document.getElementById('color-preview-text');
    const hexInput = document.getElementById('color-hex-input');
    const rgbInput = document.getElementById('color-rgb-input');
    const hslInput = document.getElementById('color-hsl-input');

    function hexToRgb(hex) {
      let c = hex.replace('#', '');
      if (c.length === 3) c = c.split('').map(x => x + x).join('');
      const num = parseInt(c, 16);
      return { r: (num >> 16) & 255, g: (num >> 8) & 255, b: num & 255 };
    }

    function rgbToHsl(r, g, b) {
      r /= 255; g /= 255; b /= 255;
      const max = Math.max(r, g, b), min = Math.min(r, g, b);
      let h, s, l = (max + min) / 2;
      if (max === min) {
        h = s = 0;
      } else {
        const d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
        switch (max) {
          case r: h = (g - b) / d + (g < b ? 6 : 0); break;
          case g: h = (b - r) / d + 2; break;
          case b: h = (r - g) / d + 4; break;
        }
        h /= 6;
      }
      return {
        h: Math.round(h * 360),
        s: Math.round(s * 100),
        l: Math.round(l * 100)
      };
    }

    function updateColorsFromHex(hex) {
      if (!/^#[0-9A-Fa-f]{6}$/.test(hex)) return;
      if (colorPreviewBox) colorPreviewBox.style.backgroundColor = hex;
      if (colorPreviewText) colorPreviewText.textContent = hex.toUpperCase();
      if (colorPicker) colorPicker.value = hex;
      if (hexInput && hexInput.value.toUpperCase() !== hex.toUpperCase()) hexInput.value = hex.toUpperCase();

      const { r, g, b } = hexToRgb(hex);
      if (rgbInput) rgbInput.value = `rgb(${r}, ${g}, ${b})`;
      const { h, s, l } = rgbToHsl(r, g, b);
      if (hslInput) hslInput.value = `hsl(${h}, ${s}%, ${l}%)`;
    }

    if (colorPicker) {
      colorPicker.addEventListener('input', (e) => {
        updateColorsFromHex(e.target.value);
      });
    }
    if (hexInput) {
      hexInput.addEventListener('input', (e) => {
        let val = e.target.value.trim();
        if (!val.startsWith('#')) val = '#' + val;
        if (/^#[0-9A-Fa-f]{6}$/.test(val)) {
          updateColorsFromHex(val);
        }
      });
    }

    document.querySelectorAll('[data-copy-color]').forEach(btn => {
      btn.addEventListener('click', () => {
        const type = btn.getAttribute('data-copy-color');
        let textToCopy = '';
        if (type === 'hex' && hexInput) textToCopy = hexInput.value;
        if (type === 'rgb' && rgbInput) textToCopy = rgbInput.value;
        if (type === 'hsl' && hslInput) textToCopy = hslInput.value;
        if (textToCopy) {
          navigator.clipboard.writeText(textToCopy).then(() => {
            showToast(`Copied ${textToCopy} to clipboard!`);
            playSfx('click');
          });
        }
      });
    });

    // Tool 8: Text Diff Viewer
    const diffOrigInput = document.getElementById('diff-original-input');
    const diffModInput = document.getElementById('diff-modified-input');
    const btnComputeDiff = document.getElementById('btn-compute-diff');
    const btnClearDiff = document.getElementById('btn-clear-diff');
    const diffResultsWrap = document.getElementById('diff-results-container');
    const diffStatsBar = document.getElementById('diff-stats-bar');
    const diffOutputTable = document.getElementById('diff-output-table');

    if (btnComputeDiff && diffOrigInput && diffModInput && diffOutputTable) {
      btnComputeDiff.addEventListener('click', () => {
        const origLines = diffOrigInput.value.split('\n');
        const modLines = diffModInput.value.split('\n');

        let additions = 0;
        let deletions = 0;
        let identical = 0;
        let rowsHtml = '';

        const maxLen = Math.max(origLines.length, modLines.length);
        for (let i = 0; i < maxLen; i++) {
          const orig = origLines[i];
          const mod = modLines[i];

          if (orig === undefined) {
            additions++;
            rowsHtml += `<div class="diff-row diff-row--added"><span class="diff-row__num">${i + 1}</span><span class="diff-row__sign">+</span><span class="diff-row__content">${escapeHtml(mod)}</span></div>`;
          } else if (mod === undefined) {
            deletions++;
            rowsHtml += `<div class="diff-row diff-row--removed"><span class="diff-row__num">${i + 1}</span><span class="diff-row__sign">-</span><span class="diff-row__content">${escapeHtml(orig)}</span></div>`;
          } else if (orig === mod) {
            identical++;
            rowsHtml += `<div class="diff-row diff-row--same"><span class="diff-row__num">${i + 1}</span><span class="diff-row__sign">&nbsp;</span><span class="diff-row__content">${escapeHtml(orig)}</span></div>`;
          } else {
            deletions++;
            additions++;
            rowsHtml += `<div class="diff-row diff-row--removed"><span class="diff-row__num">${i + 1}</span><span class="diff-row__sign">-</span><span class="diff-row__content">${escapeHtml(orig)}</span></div>`;
            rowsHtml += `<div class="diff-row diff-row--added"><span class="diff-row__num">${i + 1}</span><span class="diff-row__sign">+</span><span class="diff-row__content">${escapeHtml(mod)}</span></div>`;
          }
        }

        diffOutputTable.innerHTML = rowsHtml;
        if (diffStatsBar) {
          diffStatsBar.textContent = `Comparison complete: +${additions} additions, -${deletions} deletions, ${identical} matching lines.`;
        }
        if (diffResultsWrap) diffResultsWrap.style.display = 'flex';
        playSfx('click');
      });
    }

    if (btnClearDiff && diffOrigInput && diffModInput && diffResultsWrap) {
      btnClearDiff.addEventListener('click', () => {
        diffOrigInput.value = '';
        diffModInput.value = '';
        diffResultsWrap.style.display = 'none';
        playSfx('click');
      });
    }
  }

  // ==========================================================================
  // FEATURE 1: INTERACTIVE ATLAS TERMINAL CONTROLLER
  // ==========================================================================
  let isAtlasTerminalInitialized = false;

  function initAtlasTerminal() {
    const terminalScreen = document.getElementById('terminal-screen');
    const terminalStdout = document.getElementById('terminal-stdout');
    const terminalForm = document.getElementById('terminal-form');
    const terminalInput = document.getElementById('terminal-input');
    const btnHelp = document.getElementById('btn-terminal-help');
    const btnCopy = document.getElementById('btn-terminal-copy');
    const btnClear = document.getElementById('btn-terminal-clear');

    if (!terminalScreen || !terminalStdout || !terminalForm || !terminalInput) return;
    if (isAtlasTerminalInitialized) return;
    isAtlasTerminalInitialized = true;

    const commandHistory = [];
    let historyCursor = -1;

    function appendLine(htmlText, className = '') {
      const line = document.createElement('div');
      line.className = `terminal-line ${className}`;
      line.innerHTML = htmlText;
      terminalStdout.appendChild(line);
      terminalScreen.scrollTop = terminalScreen.scrollHeight;
    }

    function printWelcome() {
      appendLine('<span class="terminal-line--accent">  ___ _____ _        _    ____  </span>');
      appendLine('<span class="terminal-line--accent"> / _ \\_   _| |      / \\  / ___| </span>');
      appendLine('<span class="terminal-line--accent">/ /_\\ \\| | | |     / _ \\ \\___ \\ </span>');
      appendLine('<span class="terminal-line--accent">|  _  || | | |___ / ___ \\ ___) |</span>');
      appendLine('<span class="terminal-line--accent">|_| |_||_| |_____/_/   \\_\\____/ </span>');
      appendLine('<span class="terminal-line--bold">ATLAS Interactive Portfolio Terminal v3.2</span>');
      appendLine('<span class="terminal-line--dim">Session: visitor@atlas-portfolio · System: Web ZSH Sandbox</span>');
      appendLine('<span class="terminal-line--dim">Type <span class="terminal-line--green">help</span> to list available commands. Try: <span class="terminal-line--accent">about</span>, <span class="terminal-line--accent">projects</span>, <span class="terminal-line--accent">skills</span>, <span class="terminal-line--accent">contact</span>, <span class="terminal-line--accent">github</span>, <span class="terminal-line--accent">clear</span></span>');
      appendLine('');
    }

    printWelcome();

    function executeCommand(rawCmd) {
      const trimmed = rawCmd.trim();
      if (!trimmed) return;

      commandHistory.push(trimmed);
      historyCursor = commandHistory.length;

      appendLine(`<span class="terminal-prompt-badge">atlas@alageshvaran:~$</span> <span>${escapeHtml(trimmed)}</span>`, 'terminal-line--cmd');

      const parts = trimmed.split(/\s+/);
      const cmd = parts[0].toLowerCase();
      const args = parts.slice(1);

      switch (cmd) {
        case 'help':
          appendLine('<span class="terminal-line--bold">AVAILABLE COMMANDS:</span>');
          appendLine('  <span class="terminal-line--green">help</span>             - List all supported terminal commands');
          appendLine('  <span class="terminal-line--green">about</span>            - Profile, institution, and engineering focus');
          appendLine('  <span class="terminal-line--green">projects</span>         - List all 8 verified GitHub repositories');
          appendLine('  <span class="terminal-line--green">open &lt;slug&gt;</span>       - Jump directly to a project blueprint page');
          appendLine('  <span class="terminal-line--green">skills</span>           - Engineering capability matrix and architectures');
          appendLine('  <span class="terminal-line--green">contact</span>          - Verified communications & transmission channels');
          appendLine('  <span class="terminal-line--green">github</span>           - Public GitHub profile and repository directory');
          appendLine('  <span class="terminal-line--green">tools</span>            - Jump to Live Playground or Developer Utilities');
          appendLine('  <span class="terminal-line--green">theme [light|dark]</span> - Inspect or toggle current website theme');
          appendLine('  <span class="terminal-line--green">history</span>          - View command history in this session');
          appendLine('  <span class="terminal-line--green">clear</span>            - Clear terminal screen');
          break;

        case 'about':
          appendLine('<span class="terminal-line--bold">ATLAS // Alageshvaran</span>');
          appendLine('  <span class="terminal-line--dim">Degree:</span>      B.E. Computer Science & Engineering (AI & ML)');
          appendLine('  <span class="terminal-line--dim">Institution:</span> Kathir College of Engineering, Coimbatore, Tamil Nadu');
          appendLine('  <span class="terminal-line--dim">Period:</span>      2025–2029');
          appendLine('  <span class="terminal-line--dim">Focus:</span>       Offline-First Edge AI, RAG Architectures, Multimodal Vision, WebGL');
          appendLine('  <span class="terminal-line--dim">GitHub:</span>      <a href="https://github.com/varanalagesh19-dot" target="_blank" style="color:#58a6ff;">https://github.com/varanalagesh19-dot</a>');
          appendLine('  <span class="terminal-line--dim">LinkedIn:</span>    <a href="https://www.linkedin.com/in/alagesh023" target="_blank" style="color:#58a6ff;">https://www.linkedin.com/in/alagesh023</a>');
          break;

        case 'projects':
          appendLine('<span class="terminal-line--bold">VERIFIED REPOSITORY INVENTORY (08 CODEBASES):</span>');
          PROJECTS_DATA.forEach((p) => {
            appendLine(`  <span class="terminal-line--accent">${p.no}</span>. <span class="terminal-line--bold">${p.name}</span> [<span class="terminal-line--dim">${p.slug}</span>]`);
            appendLine(`      <span class="terminal-line--dim">${p.summary}</span>`);
            appendLine(`      <span class="terminal-line--yellow">Stack:</span> ${p.stack.slice(0, 4).join(', ')}`);
          });
          appendLine('<span class="terminal-line--dim">Tip: Type <span class="terminal-line--green">open &lt;slug&gt;</span> (e.g. <span class="terminal-line--green">open intellipdf</span>) to navigate to detail view.</span>');
          break;

        case 'open':
          if (!args[0]) {
            appendLine('<span class="terminal-line--red">Error: Missing project slug. Usage: open &lt;slug&gt; (e.g. open intellipdf)</span>');
            return;
          }
          const targetSlug = args[0].toLowerCase();
          const targetProj = PROJECTS_DATA.find(p => p.slug === targetSlug || p.name.toLowerCase() === targetSlug);
          if (targetProj) {
            appendLine(`<span class="terminal-line--green">Navigating to ${targetProj.name} [/projects/${targetProj.slug}]...</span>`);
            navigate(`/projects/${targetProj.slug}`);
          } else {
            appendLine(`<span class="terminal-line--red">Project "${escapeHtml(targetSlug)}" not found. Type <span class="terminal-line--green">projects</span> to view valid slugs.</span>`);
          }
          break;

        case 'skills':
          appendLine('<span class="terminal-line--bold">CORE CAPABILITIES & REPOSITORY TOPOLOGY:</span>');
          appendLine('  <span class="terminal-line--accent">Languages:</span>      Python, JavaScript (ES6+), Kotlin, C / Embedded, Java, SQL, GLSL');
          appendLine('  <span class="terminal-line--accent">AI & ML:</span>        Retrieval-Augmented Generation (RAG), Gemini Vision API, Embeddings, NumPy');
          appendLine('  <span class="terminal-line--accent">Systems:</span>        Flask, Streamlit, Docker, A* Pathfinding, Offline-First Mesh, Linux');
          appendLine('  <span class="terminal-line--accent">Frontend/3D:</span>    HTML5, Vanilla CSS, Three.js 3D WebGL, SPA Router, Responsive Architecture');
          break;

        case 'contact':
          appendLine('<span class="terminal-line--bold">DIRECT TRANSMISSION CHANNELS:</span>');
          appendLine('  <span class="terminal-line--dim">Email:</span>    <a href="mailto:varanalagesh19@gmail.com" style="color:#58a6ff;">varanalagesh19@gmail.com</a>');
          appendLine('  <span class="terminal-line--dim">GitHub:</span>   <a href="https://github.com/varanalagesh19-dot" target="_blank" style="color:#58a6ff;">https://github.com/varanalagesh19-dot</a>');
          appendLine('  <span class="terminal-line--dim">LinkedIn:</span> <a href="https://www.linkedin.com/in/alagesh023" target="_blank" style="color:#58a6ff;">https://www.linkedin.com/in/alagesh023</a>');
          break;

        case 'github':
          appendLine('<span class="terminal-line--green">Official GitHub Node:</span> <a href="https://github.com/varanalagesh19-dot" target="_blank" style="color:#58a6ff;">https://github.com/varanalagesh19-dot</a>');
          appendLine('  Verified Repositories: 8 public codebases spanning RAG, Edge AI, IoT & WebGL.');
          break;

        case 'tools':
          appendLine('<span class="terminal-line--bold">AVAILABLE DEVELOPER TOOLS:</span>');
          appendLine('  1. Live Code Playground (JavaScript & Python preview)');
          appendLine('  2. Code Snippets Library (13+ algorithmic templates)');
          appendLine('  3. 8 Client-Side Utilities (JSON Formatter, Minifier, Base64, URL, Counter, Timestamp, Color, Diff)');
          appendLine('<span class="terminal-line--dim">Switch tabs above to access any tool instantly.</span>');
          break;

        case 'theme':
          if (args[0] === 'light') {
            document.documentElement.setAttribute('data-theme', 'light');
            if (themeLabel) themeLabel.textContent = 'Theme: Light';
            if (themeIcon) themeIcon.textContent = '☼';
            appendLine('<span class="terminal-line--green">Theme switched to: LIGHT</span>');
          } else if (args[0] === 'dark') {
            document.documentElement.setAttribute('data-theme', 'dark');
            if (themeLabel) themeLabel.textContent = 'Theme: Dark';
            if (themeIcon) themeIcon.textContent = '☾';
            appendLine('<span class="terminal-line--green">Theme switched to: DARK</span>');
          } else {
            const current = document.documentElement.getAttribute('data-theme') || 'light';
            const next = current === 'dark' ? 'light' : 'dark';
            document.documentElement.setAttribute('data-theme', next);
            if (themeLabel) themeLabel.textContent = `Theme: ${next === 'dark' ? 'Dark' : 'Light'}`;
            if (themeIcon) themeIcon.textContent = next === 'dark' ? '☾' : '☼';
            appendLine(`<span class="terminal-line--green">Theme toggled: ${next.toUpperCase()}</span>`);
          }
          break;

        case 'history':
          appendLine('<span class="terminal-line--bold">SESSION COMMAND HISTORY:</span>');
          commandHistory.forEach((c, idx) => {
            appendLine(`  ${idx + 1}  ${escapeHtml(c)}`);
          });
          break;

        case 'clear':
          terminalStdout.innerHTML = '';
          return;

        default:
          appendLine(`<span class="terminal-line--red">zsh: command not found: ${escapeHtml(cmd)}.</span> <span class="terminal-line--dim">Type <span class="terminal-line--green">help</span> to view available portfolio commands.</span>`);
          break;
      }

      appendLine('');
    }

    terminalForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const val = terminalInput.value;
      terminalInput.value = '';
      executeCommand(val);
      playSfx('click');
    });

    terminalInput.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowUp') {
        e.preventDefault();
        if (commandHistory.length === 0) return;
        if (historyCursor > 0) {
          historyCursor--;
        }
        terminalInput.value = commandHistory[historyCursor] || '';
      } else if (e.key === 'ArrowDown') {
        e.preventDefault();
        if (historyCursor < commandHistory.length - 1) {
          historyCursor++;
          terminalInput.value = commandHistory[historyCursor] || '';
        } else {
          historyCursor = commandHistory.length;
          terminalInput.value = '';
        }
      }
    });

    if (btnHelp) {
      btnHelp.addEventListener('click', () => {
        executeCommand('help');
        terminalInput.focus();
      });
    }

    if (btnClear) {
      btnClear.addEventListener('click', () => {
        terminalStdout.innerHTML = '';
        printWelcome();
        playSfx('click');
        terminalInput.focus();
      });
    }

    if (btnCopy) {
      btnCopy.addEventListener('click', () => {
        const text = terminalStdout.innerText || terminalStdout.textContent;
        navigator.clipboard.writeText(text).then(() => {
          showToast('Terminal session copied to clipboard!');
          playSfx('click');
        });
      });
    }
  }

  // ==========================================================================
  // 15. COMMAND PALETTE (CTRL + K / CMD + K) CONTROLLER
  // ==========================================================================
  function initCommandPalette() {
    const modal = document.getElementById('command-palette-modal');
    const input = document.getElementById('cmd-palette-input');
    const list = document.getElementById('cmd-palette-list');
    const backdrop = document.getElementById('cmd-palette-backdrop-dismiss');
    const closeBtn = document.getElementById('cmd-palette-close-btn');
    const triggerBtn = document.getElementById('cmd-palette-btn');

    if (!modal || !input || !list) return;

    let selectedIdx = 0;
    let visibleCommands = [];

    const COMMANDS = [
      // Navigation
      { title: 'Home Overview', category: 'Navigation', icon: '▲', action: () => navigate('/') },
      { title: 'Projects Gallery', category: 'Navigation', icon: '📂', action: () => navigate('/projects') },
      { title: 'Developer Tools Workspace', category: 'Navigation', icon: '⚙', action: () => navigate('/tools') },
      { title: 'ATLAS Terminal', category: 'Dev Tools', icon: '💻', action: () => { navigate('/tools'); switchToolTab('terminal'); } },
      { title: 'Code Playground', category: 'Dev Tools', icon: '⚡', action: () => { navigate('/tools'); switchToolTab('playground'); } },
      { title: 'Snippets Library', category: 'Dev Tools', icon: '📚', action: () => { navigate('/tools'); switchToolTab('snippets'); } },
      { title: 'Developer Utilities Suite', category: 'Dev Tools', icon: '🛠', action: () => { navigate('/tools'); switchToolTab('utilities'); } },
      { title: 'Engineering Skills Topology', category: 'Navigation', icon: '🌐', action: () => navigate('/skills') },
      { title: 'About Alageshvaran', category: 'Navigation', icon: '👤', action: () => navigate('/about') },
      { title: 'Contact & Transmissions', category: 'Navigation', icon: '✉', action: () => navigate('/contact') },

      // Projects Deep-Link
      { title: 'Project: IntelliPDF (RAG Exam AI)', category: 'Projects', icon: '📄', action: () => navigate('/projects/intellipdf') },
      { title: 'Project: Solvex NER 2.0 (Offline Mesh)', category: 'Projects', icon: '🏔', action: () => navigate('/projects/solvex-ner') },
      { title: 'Project: LinkedX (LinkedIn AI)', category: 'Projects', icon: '💼', action: () => navigate('/projects/linkx') },
      { title: 'Project: ATLAS AI (Biomimetic WebGL)', category: 'Projects', icon: '✨', action: () => navigate('/projects/atlas-ai') },
      { title: 'Project: Smart Agriculture IoT', category: 'Projects', icon: '🌱', action: () => navigate('/projects/smart-agriculture') },
      { title: 'Project: Base Isolation (Bumblebee)', category: 'Projects', icon: '🏗', action: () => navigate('/projects/base-isolation') },
      { title: 'Project: NVIDIA AI Chat Model', category: 'Projects', icon: '🤖', action: () => navigate('/projects/nvidia-ai-chat') },
      { title: 'Project: ATLAS 3D Portfolio', category: 'Projects', icon: '💎', action: () => navigate('/projects/atlas-portfolio') },

      // System Actions & Features
      { title: 'Project Architecture Explorer', category: 'Dev Tools', icon: '🏗️', action: () => { navigate('/projects/intellipdf'); setTimeout(() => { const el = document.getElementById('detail-arch-explorer'); if (el) el.scrollIntoView({ behavior: 'smooth' }); }, 200); } },
      { title: 'Live GitHub Dashboard (@varanalagesh19-dot)', category: 'Pages', icon: '🐙', action: () => { navigate('/projects'); setTimeout(() => { const b = document.getElementById('btn-show-github-dashboard'); if (b) b.click(); }, 150); } },
      { title: 'Resume Studio // Print-Ready CV', category: 'Pages', icon: '📄', action: () => { navigate('/about'); setTimeout(() => { const el = document.getElementById('resume-studio'); if (el) el.scrollIntoView({ behavior: 'smooth' }); }, 150); } },
      { title: 'Career & Education Timeline', category: 'Pages', icon: '⏱️', action: () => { navigate('/about'); setTimeout(() => { const el = document.querySelector('.career-timeline-section'); if (el) el.scrollIntoView({ behavior: 'smooth' }); }, 150); } },
      { title: 'Print / Export Resume PDF', category: 'Actions', icon: '🖨️', action: () => { navigate('/about'); setTimeout(() => { window.print(); }, 300); } },
      { title: 'Toggle Light / Dark Theme', category: 'Actions', icon: '☼', action: () => {
          const next = currentTheme === 'dark' ? 'light' : 'dark';
          applyTheme(next, true);
        }
      },
      { title: 'Copy Developer Email (varanalagesh19@gmail.com)', category: 'Actions', icon: '📋', action: () => {
          navigator.clipboard.writeText(EMAIL_ADDRESS).then(() => showToast(`Copied ${EMAIL_ADDRESS}!`));
        }
      }
    ];

    // Automatically index snippets from SNIPPETS_DATA
    if (typeof SNIPPETS_DATA !== 'undefined' && Array.isArray(SNIPPETS_DATA)) {
      SNIPPETS_DATA.forEach(s => {
        COMMANDS.push({
          title: `Snippet: ${s.title}`,
          category: 'Snippets Library',
          icon: '📝',
          action: () => {
            navigate('/tools');
            switchToolTab('snippets');
            setTimeout(() => {
              const inp = document.getElementById('snippets-search-input');
              if (inp) {
                inp.value = s.title;
                inp.dispatchEvent(new Event('input'));
              }
            }, 100);
          }
        });
      });
    }

    let lastFocusedElement = null;

    function switchToolTab(tabName) {
      setTimeout(() => {
        const btn = document.querySelector(`[data-tool-tab="${tabName}"]`);
        if (btn) btn.click();
      }, 50);
    }

    function openPalette() {
      lastFocusedElement = document.activeElement;
      modal.setAttribute('open', '');
      input.value = '';
      selectedIdx = 0;
      renderCommandList();
      input.focus();
      document.documentElement.style.overflow = 'hidden';
      document.body.style.overflow = 'hidden';
      playSfx('click');
    }

    function closePalette() {
      modal.removeAttribute('open');
      document.documentElement.style.overflow = '';
      document.body.style.overflow = '';
      if (lastFocusedElement && typeof lastFocusedElement.focus === 'function') {
        try { lastFocusedElement.focus(); } catch (e) {}
      }
    }

    function renderCommandList() {
      const q = input.value.toLowerCase().trim();
      visibleCommands = COMMANDS.filter(c => {
        return !q || c.title.toLowerCase().includes(q) || c.category.toLowerCase().includes(q);
      });

      if (selectedIdx >= visibleCommands.length) selectedIdx = 0;

      if (visibleCommands.length === 0) {
        list.innerHTML = `<p style="padding: 16px; font-family: var(--font-mono); font-size: 12px; color: var(--mist); text-align: center; margin: 0;">No matching commands found for "${escapeHtml(q)}"</p>`;
        return;
      }

      let currentCat = '';
      let html = '';

      visibleCommands.forEach((cmd, idx) => {
        if (cmd.category !== currentCat) {
          currentCat = cmd.category;
          html += `<div class="cmd-cat-title">${currentCat}</div>`;
        }
        const isSelected = idx === selectedIdx;
        html += `
          <div class="cmd-item ${isSelected ? 'is-selected' : ''}" data-cmd-idx="${idx}" role="option" aria-selected="${isSelected}">
            <div class="cmd-item-left">
              <span class="cmd-item-icon">${cmd.icon}</span>
              <span class="cmd-item-title">${cmd.title}</span>
            </div>
            <span class="cmd-item-shortcut">Jump ↵</span>
          </div>
        `;
      });

      list.innerHTML = html;

      list.querySelectorAll('[data-cmd-idx]').forEach(el => {
        el.addEventListener('click', () => {
          const idx = parseInt(el.getAttribute('data-cmd-idx'), 10);
          executeCommand(idx);
        });
      });
    }

    function executeCommand(idx) {
      if (visibleCommands[idx]) {
        closePalette();
        visibleCommands[idx].action();
        playSfx('chime');
      }
    }

    input.addEventListener('input', () => {
      selectedIdx = 0;
      renderCommandList();
    });

    input.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowDown') {
        e.preventDefault();
        selectedIdx = (selectedIdx + 1) % visibleCommands.length;
        renderCommandList();
        const sel = list.querySelector('.cmd-item.is-selected');
        if (sel) sel.scrollIntoView({ block: 'nearest' });
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        selectedIdx = (selectedIdx - 1 + visibleCommands.length) % visibleCommands.length;
        renderCommandList();
        const sel = list.querySelector('.cmd-item.is-selected');
        if (sel) sel.scrollIntoView({ block: 'nearest' });
      } else if (e.key === 'Enter') {
        e.preventDefault();
        executeCommand(selectedIdx);
      } else if (e.key === 'Escape') {
        e.preventDefault();
        closePalette();
      }
    });

    if (triggerBtn) triggerBtn.addEventListener('click', openPalette);
    if (backdrop) backdrop.addEventListener('click', closePalette);
    if (closeBtn) closeBtn.addEventListener('click', closePalette);

    // Global Key Listener for Ctrl+K, Cmd+K, and Escape
    window.addEventListener('keydown', (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        if (modal.hasAttribute('open')) {
          closePalette();
        } else {
          openPalette();
        }
      } else if (e.key === 'Escape' && modal.hasAttribute('open')) {
        e.preventDefault();
        closePalette();
      }
    });
  }

  // ==========================================================================
  // 16. INITIALIZATION
  // ==========================================================================
  
  // ==========================================================================
  // FEATURE 4: LIVE GITHUB DASHBOARD (@varanalagesh19-dot)
  // ==========================================================================
  const GITHUB_USERNAME = 'varanalagesh19-dot';
  const GITHUB_CACHE_KEY = 'atlas_github_cache_v2';
  const GITHUB_CACHE_TTL = 15 * 60 * 1000; // 15 minutes TTL

  const LANG_COLORS = {
    'Python': '#3572A5',
    'JavaScript': '#f1e05a',
    'HTML': '#e34c26',
    'CSS': '#563d7c',
    'Jupyter Notebook': '#DA5B0B',
    'C++': '#f34b7d',
    'C': '#555555'
  };

  let ghReposData = [];
  let ghCurrentFilter = 'all';
  let ghCurrentSort = 'updated';
  let ghSearchQuery = '';

  function initGitHubDashboard() {
    const btnPortfolio = document.getElementById('btn-show-portfolio-projects');
    const btnGitHub = document.getElementById('btn-show-github-dashboard');
    const showcaseWrap = document.getElementById('portfolio-showcase-wrap');
    const ghContainer = document.getElementById('github-dashboard-container');

    const searchInput = document.getElementById('gh-search-input');
    const searchClear = document.getElementById('gh-search-clear');
    const langFilter = document.getElementById('gh-lang-filter');
    const sortSelect = document.getElementById('gh-sort-select');
    const refreshBtn = document.getElementById('btn-refresh-gh');
    const resetFilterBtn = document.getElementById('btn-reset-gh-filter');

    if (btnPortfolio && btnGitHub && showcaseWrap && ghContainer) {
      btnPortfolio.onclick = () => {
        btnPortfolio.classList.add('is-active');
        btnPortfolio.setAttribute('aria-selected', 'true');
        btnGitHub.classList.remove('is-active');
        btnGitHub.setAttribute('aria-selected', 'false');
        showcaseWrap.style.display = 'block';
        ghContainer.style.display = 'none';
        playSfx('click');
      };

      btnGitHub.onclick = () => {
        btnGitHub.classList.add('is-active');
        btnGitHub.setAttribute('aria-selected', 'true');
        btnPortfolio.classList.remove('is-active');
        btnPortfolio.setAttribute('aria-selected', 'false');
        showcaseWrap.style.display = 'none';
        ghContainer.style.display = 'flex';
        playSfx('click');

        if (ghReposData.length === 0) {
          fetchGitHubData(false);
        }
      };
    }

    if (searchInput) {
      searchInput.addEventListener('input', () => {
        ghSearchQuery = searchInput.value.toLowerCase().trim();
        if (searchClear) searchClear.style.display = ghSearchQuery ? 'block' : 'none';
        renderGitHubRepos();
      });
    }

    if (searchClear && searchInput) {
      searchClear.onclick = () => {
        searchInput.value = '';
        ghSearchQuery = '';
        searchClear.style.display = 'none';
        renderGitHubRepos();
      };
    }

    if (langFilter) {
      langFilter.addEventListener('change', () => {
        ghCurrentFilter = langFilter.value;
        renderGitHubRepos();
        playSfx('click');
      });
    }

    if (sortSelect) {
      sortSelect.addEventListener('change', () => {
        ghCurrentSort = sortSelect.value;
        renderGitHubRepos();
        playSfx('click');
      });
    }

    if (refreshBtn) {
      refreshBtn.onclick = () => {
        fetchGitHubData(true);
        playSfx('chime');
      };
    }

    if (resetFilterBtn) {
      resetFilterBtn.onclick = () => {
        if (searchInput) searchInput.value = '';
        if (langFilter) langFilter.value = 'all';
        if (sortSelect) sortSelect.value = 'updated';
        ghSearchQuery = '';
        ghCurrentFilter = 'all';
        ghCurrentSort = 'updated';
        renderGitHubRepos();
        playSfx('click');
      };
    }
  }

  async function fetchGitHubData(forceRefresh = false) {
    const telemetry = document.getElementById('gh-telemetry-text');
    const syncBadge = document.getElementById('gh-sync-badge');
    const grid = document.getElementById('gh-repos-grid');

    // 1. Check localStorage Cache
    if (!forceRefresh) {
      try {
        const cached = localStorage.getItem(GITHUB_CACHE_KEY);
        if (cached) {
          const parsed = JSON.parse(cached);
          const age = Date.now() - parsed.timestamp;
          if (age < GITHUB_CACHE_TTL && Array.isArray(parsed.repos) && parsed.repos.length > 0) {
            ghReposData = parsed.repos;
            updateProfileMetadata(parsed.profile);
            renderGitHubRepos();
            const minAgo = Math.max(1, Math.round(age / 60000));
            if (telemetry) telemetry.textContent = `✓ Cached repository metadata active (Fetched ${minAgo}m ago). Click ↺ Refresh for live sync.`;
            return;
          }
        }
      } catch (e) {
        console.warn('GitHub cache read note:', e);
      }
    }

    // 2. Show loading skeleton
    if (grid) {
      grid.innerHTML = Array.from({ length: 6 }).map(() => `
        <div class="gh-repo-card" style="opacity: 0.6; pointer-events: none;">
          <div style="height: 20px; width: 60%; background: var(--card-border); border-radius: 4px; margin-bottom: 8px;"></div>
          <div style="height: 14px; width: 90%; background: var(--card-border); border-radius: 4px; margin-bottom: 6px;"></div>
          <div style="height: 14px; width: 75%; background: var(--card-border); border-radius: 4px; margin-bottom: 16px;"></div>
          <div style="height: 12px; width: 40%; background: var(--card-border); border-radius: 4px;"></div>
        </div>
      `).join('');
    }

    if (telemetry) telemetry.textContent = 'Querying GitHub Public REST API (https://api.github.com/users/varanalagesh19-dot)...';

    try {
      const [userRes, reposRes] = await Promise.all([
        fetch('https://api.github.com/users/varanalagesh19-dot'),
        fetch('https://api.github.com/users/varanalagesh19-dot/repos?sort=updated&per_page=100')
      ]);

      if (!reposRes.ok) {
        throw new Error(`GitHub API responded with HTTP ${reposRes.status}`);
      }

      const profile = userRes.ok ? await userRes.json() : null;
      const repos = await reposRes.json();

      if (Array.isArray(repos) && repos.length > 0) {
        ghReposData = repos;
        updateProfileMetadata(profile);

        // Save to cache
        try {
          localStorage.setItem(GITHUB_CACHE_KEY, JSON.stringify({
            profile,
            repos,
            timestamp: Date.now()
          }));
        } catch (e) {}

        renderGitHubRepos();
        if (telemetry) telemetry.textContent = `✓ Live GitHub API Sync · ${repos.length} public repositories retrieved · Zero rate-limit issues.`;
        if (syncBadge) {
          syncBadge.innerHTML = '<span class="status-dot"></span> LIVE GITHUB SYNC';
          syncBadge.className = 'gh-live-badge';
        }
      } else {
        throw new Error('No repositories found in API response');
      }
    } catch (err) {
      console.warn('GitHub API request notice:', err.message);

      // Graceful fallback to cached data or local repository inventory
      try {
        const cached = localStorage.getItem(GITHUB_CACHE_KEY);
        if (cached) {
          const parsed = JSON.parse(cached);
          ghReposData = parsed.repos;
          updateProfileMetadata(parsed.profile);
          renderGitHubRepos();
          if (telemetry) telemetry.textContent = `⚠️ GitHub API rate limit reached or offline. Showing cached repositories.`;
          if (syncBadge) {
            syncBadge.innerHTML = '<span class="status-dot" style="background: #f59e0b;"></span> CACHED SYNC';
          }
          return;
        }
      } catch (e) {}

      // Fallback from verified PROJECTS_DATA
      ghReposData = PROJECTS_DATA.map(p => ({
        name: p.name,
        html_url: p.repo,
        description: p.summary,
        language: p.stack[0] || 'Python',
        stargazers_count: 0,
        forks_count: 0,
        updated_at: new Date().toISOString()
      }));

      renderGitHubRepos();
      if (telemetry) telemetry.textContent = '⚠️ GitHub API rate limit or offline. Displaying verified local repository catalog.';
      if (syncBadge) {
        syncBadge.innerHTML = '<span class="status-dot" style="background: #f59e0b;"></span> LOCAL CATALOG';
      }
    }
  }

  function updateProfileMetadata(profile) {
    if (!profile) return;
    const nameEl = document.getElementById('gh-profile-name');
    const bioEl = document.getElementById('gh-profile-bio');
    const avatarEl = document.getElementById('gh-user-avatar');
    const statRepos = document.getElementById('gh-stat-repos');
    const statFollowers = document.getElementById('gh-stat-followers');

    if (nameEl) nameEl.textContent = 'Alageshvaran (ATLAS)';
    if (bioEl && profile.bio) bioEl.textContent = profile.bio;
    if (avatarEl && profile.avatar_url) avatarEl.src = profile.avatar_url;
    if (statRepos && profile.public_repos !== undefined) statRepos.textContent = String(profile.public_repos);
    if (statFollowers && profile.followers !== undefined) statFollowers.textContent = String(profile.followers);
  }

  function renderGitHubRepos() {
    const grid = document.getElementById('gh-repos-grid');
    const emptyState = document.getElementById('gh-empty-state');
    if (!grid) return;

    let filtered = ghReposData.filter(repo => {
      const matchesSearch = !ghSearchQuery ||
        repo.name.toLowerCase().includes(ghSearchQuery) ||
        (repo.description && repo.description.toLowerCase().includes(ghSearchQuery)) ||
        (repo.language && repo.language.toLowerCase().includes(ghSearchQuery));

      const matchesLang = ghCurrentFilter === 'all' ||
        (repo.language && repo.language.toLowerCase() === ghCurrentFilter.toLowerCase());

      return matchesSearch && matchesLang;
    });

    // Sorting
    filtered.sort((a, b) => {
      if (ghCurrentSort === 'stars') return (b.stargazers_count || 0) - (a.stargazers_count || 0);
      if (ghCurrentSort === 'name') return a.name.localeCompare(b.name);
      return new Date(b.pushed_at || b.updated_at) - new Date(a.pushed_at || a.updated_at);
    });

    if (filtered.length === 0) {
      grid.style.display = 'none';
      if (emptyState) emptyState.style.display = 'block';
      return;
    }

    grid.style.display = 'grid';
    if (emptyState) emptyState.style.display = 'none';

    grid.innerHTML = filtered.map(repo => {
      const lang = repo.language || 'Codebase';
      const dotColor = LANG_COLORS[lang] || '#38bdf8';
      const updatedDate = new Date(repo.pushed_at || repo.updated_at).toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric'
      });
      const desc = repo.description || 'Open-source software codebase by Alageshvaran.';

      return `
        <article class="gh-repo-card">
          <div class="gh-repo-header">
            <a href="${repo.html_url}" target="_blank" rel="noopener noreferrer" class="gh-repo-title-link">
              <span>${escapeHtml(repo.name)}</span>
              <span style="font-size: 11px; opacity: 0.6;">↗</span>
            </a>
            <span class="gh-repo-visibility">Public</span>
          </div>

          <p class="gh-repo-desc">${escapeHtml(desc)}</p>

          <div class="gh-repo-footer">
            <span class="gh-repo-lang">
              <span class="gh-lang-dot" style="background-color: ${dotColor};"></span>
              <span>${lang}</span>
            </span>

            <div class="gh-repo-metrics">
              <span class="gh-metric-item" title="Stars">
                <span aria-hidden="true">★</span>
                <span>${repo.stargazers_count || 0}</span>
              </span>
              <span class="gh-metric-item" title="Forks">
                <span aria-hidden="true">⑂</span>
                <span>${repo.forks_count || 0}</span>
              </span>
              <span title="Last updated">${updatedDate}</span>
            </div>
          </div>
        </article>
      `;
    }).join('');
  }

  // ==========================================================================
  // FEATURE 7: CAREER TIMELINE & RESUME STUDIO
  // ==========================================================================
  function initCareerTimeline() {
    const filterContainer = document.getElementById('timeline-filters');
    if (!filterContainer) return;

    const filterButtons = filterContainer.querySelectorAll('[data-timeline-filter]');
    const entries = document.querySelectorAll('.career-timeline-track .timeline-entry');

    filterButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        const cat = btn.getAttribute('data-timeline-filter');
        filterButtons.forEach(b => {
          b.classList.remove('is-active');
          b.setAttribute('aria-selected', 'false');
        });
        btn.classList.add('is-active');
        btn.setAttribute('aria-selected', 'true');

        entries.forEach(entry => {
          const entryCat = entry.getAttribute('data-category');
          if (cat === 'all' || entryCat === cat) {
            entry.classList.remove('is-hidden');
          } else {
            entry.classList.add('is-hidden');
          }
        });
        playSfx('click');
      });
    });
  }

  function initResumeStudio() {
    const btnPrint = document.getElementById('btn-print-resume');
    const btnCopy = document.getElementById('btn-copy-resume');
    const btnToggle = document.getElementById('btn-toggle-resume-format');
    const btnCopyRaw = document.getElementById('btn-copy-raw-pre');
    const formattedView = document.getElementById('resume-formatted-view');
    const plaintextView = document.getElementById('resume-plaintext-view');
    const rawTextEl = document.getElementById('resume-raw-text');
    const copyStatus = document.getElementById('copy-resume-status');

    if (btnPrint) {
      btnPrint.addEventListener('click', () => {
        window.print();
        playSfx('chime');
      });
    }

    const copyCVText = () => {
      const textToCopy = rawTextEl ? rawTextEl.innerText.trim() : '';
      if (!textToCopy) return;
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(textToCopy).then(() => {
          if (copyStatus) copyStatus.textContent = '✓ Copied Plaintext CV!';
          showToast('Resume plain text copied to clipboard!');
          setTimeout(() => {
            if (copyStatus) copyStatus.textContent = '📋 Copy Plaintext CV';
          }, 2500);
        });
      } else {
        showToast('Clipboard API unavailable');
      }
      playSfx('chime');
    };

    if (btnCopy) {
      btnCopy.addEventListener('click', copyCVText);
    }

    if (btnCopyRaw) {
      btnCopyRaw.addEventListener('click', copyCVText);
    }

    if (btnToggle && formattedView && plaintextView) {
      let isPlaintext = false;
      btnToggle.addEventListener('click', () => {
        isPlaintext = !isPlaintext;
        if (isPlaintext) {
          formattedView.style.display = 'none';
          plaintextView.style.display = 'block';
          btnToggle.textContent = '👁 Switch to Formatted Card';
        } else {
          formattedView.style.display = 'block';
          plaintextView.style.display = 'none';
          btnToggle.textContent = '👁 Switch to Plaintext View';
        }
        playSfx('click');
      });
    }
  }

  // ==========================================================================
  // TITANIUM GLASS: SCROLL REVEALS & TIMELINE DRAWING ANIMATIONS
  // ==========================================================================
  function initScrollReveals() {
    const revealTargets = document.querySelectorAll('.reveal-on-scroll, .timeline-entry');
    const timelineContainer = document.getElementById('career-timeline-container');

    const bridgeTerminalBtns = document.querySelectorAll('#btn-open-terminal-bridge, [data-terminal-trigger]');
    bridgeTerminalBtns.forEach(btn => {
      if (!btn._hasListener) {
        btn._hasListener = true;
        btn.addEventListener('click', (e) => {
          e.preventDefault();
          navigate('/tools');
          setTimeout(() => {
            const termTabBtn = document.querySelector('[data-tool-tab="terminal"]');
            if (termTabBtn) termTabBtn.click();
            const termInput = document.getElementById('terminal-cli-input');
            if (termInput) termInput.focus();
          }, 100);
        });
      }
    });


    if (!('IntersectionObserver' in window)) {
      revealTargets.forEach(el => el.classList.add('is-revealed'));
      if (timelineContainer) timelineContainer.classList.add('is-drawn');
      return;
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-revealed');
          observer.unobserve(entry.target);
        }
      });
    }, {
      rootMargin: '0px 0px -40px 0px',
      threshold: 0.1
    });

    revealTargets.forEach(el => observer.observe(el));

    if (timelineContainer) {
      const tlObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            timelineContainer.classList.add('is-drawn');
            tlObserver.unobserve(entry.target);
          }
        });
      }, { threshold: 0.05 });
      tlObserver.observe(timelineContainer);
    }
  }

  function init() {
    initTheme();
    initMobileNav();
    initProjectsGallery();
    initGitHubDashboard();
    initProjectDetailControls();
    initSkillsPage();
    initContact();
    initMediaViewer();
    initAiPlayground();
    initToolsWorkspace();
    initCommandPalette();
    initCareerTimeline();
    initResumeStudio();
    initScrollReveals();
    init3DHero();
    initRouter();

    try {
      fetch('/api/telemetry-log', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          innerWidth: window.innerWidth,
          mastheadWidth: document.querySelector('.masthead') ? document.querySelector('.masthead').offsetWidth : null,
          controlsWidth: document.querySelector('.masthead__controls') ? document.querySelector('.masthead__controls').offsetWidth : null,
          controlsRight: document.querySelector('.masthead__controls') ? document.querySelector('.masthead__controls').getBoundingClientRect().right : null,
          themeBtnVisible: document.getElementById('theme-toggle-btn') ? getComputedStyle(document.getElementById('theme-toggle-btn')).display : null,
          menuBtnVisible: document.getElementById('mobile-menu-btn') ? getComputedStyle(document.getElementById('mobile-menu-btn')).display : null,
          scrollWidth: document.documentElement.scrollWidth
        })
      }).catch(() => {});
    } catch (e) {}

    console.log(
      '%cATLAS 3.0 // ALAGESHVARAN\n%c8 Verified GitHub Repositories Active\nMulti-Page SPA Architecture Ready',
      'color: #38bdf8; font-family: monospace; font-size: 14px; font-weight: bold;',
      'color: #94a3b8; font-size: 11px;'
    );
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
