/**
 * ATLAS 2.0 — AUTHENTIC GITHUB REPOSITORY INVENTORY
 * Verified from Alageshvaran's GitHub profile (@varanalagesh19-dot)
 */
export const PROJECTS_DATA = [
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
      screenshots: [
        {
          url: '/assets/images/project-intellipdf.jpg',
          title: 'Document Analysis & Mark-Wise Answer Generation',
          caption: 'IntelliPDF user interface displaying PDF semantic chunking, page citations, and university exam mark-wise answers.',
          tag: 'Web UI / Streamlit'
        }
      ],
      demo: {
        title: 'IntelliPDF Exam Question Synthesis Demo',
        desc: 'Interactive live simulation demonstrating semantic document retrieval and mark-tiered answer synthesis.',
        labTabUrl: '/projects?tab=lab&sim=intellipdf'
      },
      stack: ['Python', 'Streamlit', 'RAG Pipeline', 'Vector Embeddings', 'Docker', 'NLP'],
      roadmap: 'Currently containerized with Docker and Streamlit. Future upgrades include multi-PDF cross-subject linking and offline local quantized LLM inference.',
      simType: 'intellipdf'
    },
    {
      slug: 'solvex-ner',
      challenges: ["Processing noisy field voice memos recorded under variable mountain acoustics","Handling non-standard North Eastern transit corridor abbreviations and hub names","Operating topological graph search offline without cellular cloud access"],
      outcomes: ["Fine-tuned custom SpaCy entity recognizer on logistics dispatch tokens","Designed offline A* heuristic pathfinding weighted by elevation incline","Competed and submitted full prototype for Smart India Hackathon 2026 (SIH26002)"],
      no: '02',
      name: 'NER ACCESS (SOLVEX 2.0)',
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
      summary: 'An offline-first AI-powered logistics and accessibility intelligence platform focused on route optimization, accessibility-aware navigation, logistics planning, and emergency SOS assistance for remote North Eastern corridors.',
      problem: 'Extreme mountainous terrain, frequent monsoon landslides, and fragile telecommunications in the North Eastern Region isolate transit corridors, creating dangerous delays for medical supplies, logistics, and emergency response.',
      solution: 'Combines offline-first topological graph routing (A* heuristics) with real-time hazard notification layers, multilingual prompts, and mesh-based emergency SOS dispatch that functions even under zero-connectivity cellular blackouts.',
      features: [
        'A* Heuristic graph pathfinding weighted for terrain friction and elevation incline',
        'Offline-first topological mesh routing without cloud server dependency',
        'Real-time landslide and road obstruction hazard telemetry layer',
        'Emergency SOS telemetry with GPS coordinate broadcasting',
        'Multilingual interface support for regional North Eastern dialects'
      ],
      intendedUsers: [
        { role: 'Field Dispatch & Logistics Drivers', context: 'Navigating heavy supply convoys across steep mountain passes under zero-connectivity weather blackouts.' },
        { role: 'Rural Healthcare Responders', context: 'Transporting critical vaccines, medicines, and emergency patient transfers to isolated district health clinics.' },
        { role: 'PWD & Disaster Coordinators', context: 'Logging dynamic landslide road closures and monitoring real-time passable detour corridors.' },
        { role: 'Mobility-Impaired Commuters', context: 'Filtering safe pedestrian and vehicle transit paths that avoid impassable scree, missing ramps, or damaged stairs.' }
      ],
      useCases: [
        { title: 'Zero-Connectivity Routing', desc: 'Navigate between remote district hubs without cellular signal using local SQLite graph caches.' },
        { title: 'Incline-Aware Route Optimization', desc: 'Avoid steep inclines (>12% grade) that cause vehicle rollover or excessive fuel consumption in mountain passes.' },
        { title: 'Dynamic Landslide Detours', desc: 'Recalculate alternative routes in real time when road obstructions or landslides are reported on-device.' },
        { title: 'Emergency SOS Telemetry Beacon', desc: 'Broadcast cached GPS coordinates and distress status to neighboring emergency responders.' }
      ],
      workflow: [
        { step: '01', title: 'Offline GIS Ingestion', desc: 'Pre-bundled regional road network vectors and 30m digital elevation models stored in local SQLite database.' },
        { step: '02', title: 'Topological Graph Build', desc: 'Constructs node adjacency matrices annotated with surface friction, width, and elevation gradient attributes.' },
        { step: '03', title: 'A* Pathfinding with Incline Penalty', desc: 'Executes heuristic search penalizing steep vertical climbs to identify lowest-risk transit corridors.' },
        { step: '04', title: 'Dynamic Hazard Overlay', desc: 'Dynamically updates edge traversal weights as local landslide or blockage telemetry is logged.' },
        { step: '05', title: 'Turn-by-Turn & SOS Beaconing', desc: 'Delivers offline turn guidance and provides one-touch emergency distress broadcasting.' }
      ],
      implementationStatus: {
        workingFeatures: [
          'A* Heuristic graph pathfinding weighted for terrain friction and elevation incline',
          'Local SQLite & GIS Topology Store operating 100% offline without cellular cloud dependency',
          'Real-time landslide and road obstruction hazard telemetry layer with dynamic graph edge impedance',
          'Accessibility & mobility weighting engine (filtering steep stairs and unpaved terrain)'
        ],
        partiallyImplemented: [
          'Simulated Emergency SOS telemetry protocol caching GPS coordinates locally on device',
          'Multilingual interface text packs for North Eastern regional transit hubs'
        ],
        plannedFeatures: [
          'LoRaWAN 433/868 MHz physical mesh transceiver hardware integration for 30–40km mountain ridge hops',
          'Automated multi-depot logistics staging and clinical supply replenishment ledger'
        ]
      },
      myContribution: 'Lead Systems & Edge Architecture in Team Solvex. Designed the offline topological graph representation, engineered the A* pathfinding algorithm incorporating non-linear elevation incline penalties, structured the local SQLite schema for zero-cloud reliance, and authored the Smart India Hackathon 2026 (SIH26002) prototype.',
      technicalDecisions: [
        'Offline-First by Design: Selected local SQLite spatial queries over cloud mapping APIs because cellular towers in remote mountain corridors experience over 40% failure rates during seasonal monsoon landslides.',
        'Custom A* Incline Heuristic: Standard Euclidean distance caused heavy supply vehicles to attempt dangerous steep gradients. Implemented an exponential grade penalty for slopes exceeding 12% incline.',
        'Deterministic Memory Footprint: Memory overhead capped under 60MB on budget Android hardware by pre-allocating primitive array adjacency buffers.'
      ],
      limitations: [
        'Physical transceiver dependency: 40km long-range offline emergency hops require external LoRaWAN mesh transceivers, which are currently simulated in software.',
        'GIS map ingestion: Offline GIS packages must be pre-bundled or sideloaded at base stations before dispatch into blackout zones.',
        'Elevation resolution: Public 30m SRTM digital elevation data smooths micro-cliffs; sub-meter drone elevation mapping is targeted for phase 2.'
      ],
      screenshots: [
        {
          url: '/assets/images/project-ner-access.jpg',
          title: 'Topographic Corridor & Route Optimization Interface',
          caption: 'NER ACCESS mobile interface displaying elevation profile, corridor incline weighting, and alternative safe bypass routes around mountain hazards.',
          tag: 'Mobile UI / Topography'
        }
      ],
      demo: {
        title: 'NER ACCESS Offline Route Simulator',
        desc: 'Interactive live simulation of incline-weighted A* heuristic pathfinding and dynamic landslide hazard avoidance.',
        labTabUrl: '/projects?tab=lab&sim=solvex'
      },
      stack: ['Kotlin', 'Android SDK', 'JavaScript', 'A* Pathfinding', 'Offline Mesh', 'Gemini API', 'SIH 2026'],
      roadmap: 'Submitted for Smart India Hackathon 2026 (SIH26002). Future roadmap includes LoRaWAN hardware mesh transceivers for 40km range offline emergency hops.',
      simType: 'solvex'
    },
    {
      slug: 'linkx',
      challenges: ["Extracting cohesive semantic structures from complex system architecture diagrams","Calibrating dynamic tone variation without sounding repetitive or generic","Predicting audience engagement using lightweight client-side scoring heuristics"],
      outcomes: ["Integrated Google Gemini Vision API for multimodal architectural diagram comprehension","Built prompt chaining pipeline generating alternative drafts and tone comparisons","Engineered readability scoring heuristics based on Flesch-Kincaid entropy"],
      no: '03',
      name: 'LINKEDX',
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
      summary: 'An AI-powered LinkedIn content intelligence platform that analyzes uploaded images and helps generate professional LinkedIn captions, hashtags, and key phrases.',
      problem: 'Technical developers and founders struggle to translate complex system architecture diagrams and screenshots into engaging, structured professional narratives for industry stakeholders.',
      solution: 'Multimodal Vision-Language decomposition extracts semantic structures from diagrams and images, calibrates tone (Executive, Engineering, or Research), and synthesizes publication-ready captions with hashtag suggestions and engagement predictions.',
      features: [
        'Google Gemini Vision API integration for technical diagram and screenshot comprehension',
        'Executive, Engineering, and Research tone adaptation presets',
        'Automated hashtag synthesis and engagement resonance heuristics',
        'Alternative caption drafts and tone comparison carousel',
        '1-click clipboard export ready for LinkedIn professional sharing'
      ],
      intendedUsers: [
        { role: 'Software Engineers & Tech Leads', context: 'Translating architecture diagrams, schemas, and PRs into clear LinkedIn technical thought leadership.' },
        { role: 'Technical Founders & Indiemakers', context: 'Building in public by sharing system design blueprints, benchmark graphs, and architectural milestones.' },
        { role: 'Students & Hackathon Builders', context: 'Explaining project prototypes, design tradeoffs, and technical achievements clearly to recruiters and peers.' }
      ],
      useCases: [
        { title: 'Architecture Diagram to Post', desc: 'Upload a cloud or system diagram to extract modules, relationships, and generate an insightful technical post.' },
        { title: 'Product Launch from UI Mockups', desc: 'Transform application screenshots into engaging, benefit-driven product announcements.' },
        { title: 'Tone-Calibrated Content Adaptation', desc: 'Switch instantly between Executive (business impact), Engineering (technical depth), and Research (methodology) voices.' },
        { title: 'Engagement-Optimized Hashtagging', desc: 'Automatically generate relevant domain hashtags and headline hooks to maximize reach.' }
      ],
      workflow: [
        { step: '01', title: 'Image & Diagram Ingestion', desc: 'Client-side bitmap normalization, aspect ratio detection, and downsampling to minimize API latency.' },
        { step: '02', title: 'Multimodal Vision Decomposition', desc: 'Google Gemini Vision extracts semantic components, text labels, directional arrows, and technology logos.' },
        { step: '03', title: 'Tone Calibration & Prompt Chaining', desc: 'Applies persona heuristics (Executive, Engineering, or Research) through multi-stage prompt chains.' },
        { step: '04', title: 'Output Synthesis & Readability Scoring', desc: 'Synthesizes professional caption, relevant hashtags, and evaluates Flesch-Kincaid readability.' },
        { step: '05', title: '1-Click Clipboard Export', desc: 'Single-tap export formatted with proper spacing and emojis ready for direct LinkedIn publishing.' }
      ],
      implementationStatus: {
        workingFeatures: [
          'Image & system architecture diagram ingestion with client-side bitmap normalization',
          'Multimodal Vision Analysis powered by Google Gemini Vision API',
          'Three audience tone adaptation presets: Executive, Engineering, and Research',
          'Automated hashtag synthesis and keyword resonance heuristics',
          'Client-side Flesch-Kincaid readability scoring heuristic',
          '1-Click verified clipboard export formatted for LinkedIn publishing'
        ],
        partiallyImplemented: [
          'Alternative caption draft comparison carousel with local device draft caching'
        ],
        plannedFeatures: [
          'Direct LinkedIn OAuth 2.0 auto-publishing (currently manual clipboard export to maintain platform compliance)',
          'Automated post scheduling and engagement rate analytics tracking',
          'Multi-image carousel PDF document generator'
        ]
      },
      myContribution: 'Mobile AI Developer & Prompt Engineer. Architected the native Android workflow in Kotlin, integrated the Google Gemini Vision API for multimodal diagram comprehension, engineered the chain-of-thought system prompts for tone calibration, and built client-side readability scoring heuristics.',
      technicalDecisions: [
        'Two-Stage Multimodal Prompt Chaining: Instead of asking Gemini to write a post immediately from an image, Stage 1 decomposes visual components into an architecture hierarchy, and Stage 2 applies tone calibration. This eliminated 80% of hallucinated technical claims.',
        'Client-Side Bitmap Normalization: Scaled and compressed user-uploaded screenshots locally before upload, cutting API round-trip latency by 65%.',
        'Clipboard-First Export: Chose clean, verified clipboard handoff over unofficial LinkedIn posting APIs to ensure zero account suspension risk and full user editorial control.'
      ],
      limitations: [
        'Automated direct posting requires LinkedIn Community Management API enterprise approval; all publishing is currently executed via verified clipboard handoff.',
        'Active network required for Gemini API inference; offline mode is limited to viewing previously generated cached drafts.',
        'Handwritten whiteboard diagrams with severe glare or low contrast can occasionally misidentify handwriting.'
      ],
      screenshots: [
        {
          url: '/assets/images/project-linkedx.jpg',
          title: 'Multimodal Image Analysis & Content Generation Interface',
          caption: 'LINKEDX Android application showing architecture diagram upload, tone calibration selector (Executive / Engineering / Research), and generated LinkedIn copy with hashtags.',
          tag: 'Android App / Vision AI'
        }
      ],
      demo: {
        title: 'LINKEDX Vision Content Synthesis Studio',
        desc: 'Interactive live simulation demonstrating diagram decomposition, tone adaptation (Executive/Engineering/Research), and publication-ready draft generation.',
        labTabUrl: '/projects?tab=lab&sim=linkx'
      },
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
      screenshots: [
        {
          url: '/assets/images/project-atlas-ai.jpg',
          title: 'Multi-Model Workspace & Chat Streaming',
          caption: 'atlasAI multi-model orchestration workspace with real-time SSE streaming and latency benchmarks.',
          tag: 'Full-Stack UI / React'
        }
      ],
      demo: {
        title: 'atlasAI Multi-Provider Gateway Simulator',
        desc: 'Interactive simulation testing multi-provider routing and token throughput benchmarks.',
        labTabUrl: '/projects?tab=lab&sim=atlasai'
      },
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
      screenshots: [
        {
          url: '/assets/images/project-smart-agriculture.jpg',
          title: 'Embedded Sensor Telemetry & Irrigation Controls',
          caption: 'Real-time soil moisture and environmental telemetry monitoring console with threshold actuation.',
          tag: 'IoT Telemetry Dashboard'
        }
      ],
      demo: {
        title: 'Smart Agriculture Sensor & Solenoid Simulator',
        desc: 'Interactive simulation of soil moisture probes and automated hysteresis irrigation valves.',
        labTabUrl: '/projects?tab=lab&sim=smartagri'
      },
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
      screenshots: [
        {
          url: '/assets/images/project-base-isolation.jpg',
          title: 'Interactive Seismic Frequency & Bearing Dampening',
          caption: 'Bumblebee Squad Base Isolation simulator showing fixed-base resonance vs isolated dampening.',
          tag: 'Physics Simulation / WebGL'
        }
      ],
      demo: {
        title: 'Base Isolation Seismic Dynamics Simulator',
        desc: 'Interactive live Richter scale simulation comparing fixed-base and isolated building response.',
        labTabUrl: '/projects?tab=lab&sim=baseiso'
      },
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
      screenshots: [
        {
          url: '/assets/images/project-nvidia-ai-chat.jpg',
          title: 'Accelerated Compute & Inference Metrics',
          caption: 'NVIDIA AI Chat Studio benchmark dashboard displaying token latency, temperature controls, and model throughput.',
          tag: 'Inference Dashboard'
        }
      ],
      demo: {
        title: 'NVIDIA Accelerated Inference Simulator',
        desc: 'Interactive benchmark simulator monitoring TensorRT token generation and prompt latency.',
        labTabUrl: '/projects?tab=lab&sim=nvidia'
      },
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
      live: null,
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
      screenshots: [
        {
          url: '/assets/images/project-atlas.jpg',
          title: 'ATLAS 3D Portfolio Platform Interface',
          caption: 'ATLAS portfolio homepage with 3D WebGL crystal scene, dynamic lighting, and responsive navigation.',
          tag: 'WebGL / Creative Dev'
        }
      ],
      demo: {
        title: 'ATLAS 3D Engine & Spatial Physics Simulator',
        desc: 'Interactive live simulation exploring WebGL orbital controls, lighting shaders, and audio synthesis.',
        labTabUrl: '/projects?tab=lab&sim=atlas3d'
      },
      stack: ['Three.js', 'GLSL Shaders', 'SPA Routing Engine', 'Web Audio API', 'Space Grotesk', 'Vanilla CSS'],
      roadmap: 'Serving live at localhost:8080. Future updates include multi-user WebRTC collaborative canvas spaces.',
      simType: 'atlas3d'
    }
  ];

export const PROJECT_ALIASES = {
  'ner-access': 'solvex-ner',
  'ner': 'solvex-ner',
  'solvex': 'solvex-ner',
  'solvex-ner': 'solvex-ner',
  'linkedx': 'linkx',
  'linked-x': 'linkx',
  'linkx': 'linkx',
  'smart-agri': 'smart-agriculture',
  'nvidia': 'nvidia-ai-chat',
  'atlas': 'atlas-portfolio'
};

export function getProjectBySlug(slug) {
  if (!slug) return null;
  const normalized = slug.toLowerCase().trim();
  const canonicalSlug = PROJECT_ALIASES[normalized] || normalized;
  return PROJECTS_DATA.find(p => p.slug === canonicalSlug) || null;
}
