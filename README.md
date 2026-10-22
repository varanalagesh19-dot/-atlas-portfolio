# ATLAS — Personal Developer Portfolio & AI Systems Showcase

> **ATLAS** — Digital portfolio, engineering case studies, and creative development showcase of **Alageshvaran**.  
> An editorial, high-performance web platform featuring a 3D WebGL spatial universe, authentic GitHub project architectures, an offline-first logistics case study, a multimodal vision AI case study, interactive developer tools, and Netlify-powered contact transmission.

---

## 1. Profile Overview

- **Name:** Alageshvaran
- **Portfolio Identity:** ATLAS
- **Headline:** *Building intelligent ideas into real experiences.*
- **Education:** Bachelor of Engineering (B.E.) — Computer Science & Engineering (AI & ML), Kathir College of Engineering (affiliated with Anna University, Chennai), 2025–2029
- **Location:** Coimbatore / Chennai, Tamil Nadu, India (IST · UTC+5:30)
- **Verified Links:**
  - **GitHub:** [https://github.com/varanalagesh19-dot](https://github.com/varanalagesh19-dot)
  - **LinkedIn:** [https://www.linkedin.com/in/alagesh023](https://www.linkedin.com/in/alagesh023)
  - **Email:** [varanalagesh19@gmail.com](mailto:varanalagesh19@gmail.com)

---

## 2. Page Structure & Features

The portfolio is structured as a client-side Single Page Application (SPA) with dedicated deep routes:

| Route | Page | Key Features |
|---|---|---|
| `/` | **Home** | Fullscreen Three.js 3D crystal stage, verified metrics, featured project cards, and compact *"More Than Code."* personality introduction. |
| `/about` | **About** | Academic timeline (B.E. CSE AIML, 2025–2029), technical interests, interactive ATS curriculum vitae (live Print/Export PDF and plaintext download), and *"Beyond the Code"* creative hobbies gallery (Chess, Photography, Wildlife Photography, Videography, Drawing, Avengers Comics). |
| `/projects` | **Projects Directory** | Searchable repository index, category filters (AI Systems, Systems AI, IoT, WebGL), grid/list views, and **Project Lab** interactive simulators. |
| `/projects/:slug` | **Project Case Studies** | Deep architectural case studies featuring problem statements, engineered solutions, stakeholder roles, data workflows, transparent implementation status matrices, screenshot galleries, and live simulator links. Dedicated models for **NER ACCESS** (`solvex-ner`) and **LINKEDX** (`linkx`). |
| `/skills` | **Skills & Competencies** | Clear separation between Technical Skills (AI/ML, Kotlin, Android SDK, Three.js, Python, Flask, C/Embedded) and Creative Skills & Interests without artificial percentage bars. |
| `/tools` | **Developer Tools** | Interactive Code Playground with live sandboxed preview, in-browser Terminal with command parsing, and Prompt Lab with token estimations. |
| `/contact` | **Contact & Collaboration** | Direct verified channels, copy-email action, and an asynchronous transmission form powered by **Netlify Forms** with anti-spam honeypot and mailto fallback. |

---

## 3. Brand Identity & Design System

The visual language follows a curated creative agency aesthetic with strict contrast fidelity across light and dark modes:

- **Jet Black (`#0B0B0B`)** & **Charcoal (`#151515`)**: Atmospheric depth and dark theme canvas.
- **Warm White (`#F8F7F4`)**: Light theme canvas with high-contrast charcoal typography.
- **Lavender (`#CBB3E8`)**: Surfaces, translucent panels, and subtle ambient glows.
- **Chartreuse (`#D4FF3F`)**: Interactive controls, chips, and accent highlights with dedicated high-contrast text (`--accent-ink: #3D5800`) on light mode.
- **Hot Pink (`#FF2DAB`)** & **Tomato Red (`#E34234`)**: Signature accents, status badges, and error boundaries.

---

## 4. Technologies Actually Used

- **Core Structure:** Semantic HTML5, HTML5 History API for SPA client-side routing.
- **Styling:** Vanilla CSS with custom design tokens, responsive CSS Grid, Flexbox, glassmorphism filters, and `@media (prefers-reduced-motion)` overrides. Zero Tailwind dependency.
- **Client-Side Logic:** Native JavaScript ES Modules (`import`/`export`) without heavy bundler abstractions.
- **3D Graphics Engine:** [Three.js](https://threejs.org/) (r128) WebGL spatial scene, orbital camera controllers, custom specular lighting, and particle systems.
- **Audio Synthesis:** Web Audio API for procedural sound effects (synthesized harmonic ambient swells without external audio files).
- **Local Server:** Lightweight Node.js server (`server.js`) supporting MIME types, HTTP 206 Partial Content Range video streaming, GitHub API in-memory caching proxy, and SPA URL fallback.
- **Form Delivery:** Netlify Forms static discovery with asynchronous URL-encoded POST submissions.

---

## 5. Contact Form Architecture (Netlify Forms)

The contact form is architected specifically for static-discovered Single Page Applications:

1. **Static Discovery (`index.html`):**  
   Contains a hidden static HTML form with matching field names (`name`, `email`, `subject`, `message`, `bot-field`, `form-name`). Netlify detects this at build time without requiring serverless functions.
2. **Dynamic SPA Submission (`js/pages/contact.js`):**  
   The visible form intercepts submission, verifies client-side field requirements, checks the anti-spam honeypot, and dispatches URL-encoded data to `/`:
   ```javascript
   fetch('/', {
     method: 'POST',
     headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
     body: new URLSearchParams(formData).toString()
   });
   ```
3. **Truthful Feedback & Input Preservation:**  
   A confirmation state is displayed only when Netlify acknowledges receipt with HTTP 200. On network failure or local testing, the user's typed name, email, and message are completely preserved, and a direct pre-filled `mailto:` client fallback link is generated.

---

## 6. Local Setup & Execution

### Prerequisites
- [Node.js](https://nodejs.org/) (v16+ recommended). Zero third-party npm package installations required.

### Running Locally
1. Clone or open the repository:
   ```bash
   cd atlas_portfolio
   ```
2. Start the local server:
   ```bash
   node server.js
   ```
3. Open your browser:
   ```
   http://localhost:8080/
   ```

---

## 7. Deployment Instructions (Netlify)

This repository is pre-configured for Netlify hosting:

- **SPA Routing Rule (`_redirects`):**
  ```
  /*    /index.html   200
  ```
  Ensures direct browser navigation to nested routes (`/about`, `/projects`, `/projects/solvex-ner`, etc.) resolves to `index.html` without 404s.

### Deploy Steps:
1. **Option A (Netlify Drop — Instant):**
   - Log into [Netlify Drop](https://app.netlify.com/drop).
   - Drag and drop the repository folder.
2. **Option B (GitHub Continuous Deployment):**
   - Push this repository to GitHub.
   - Link the repository in the Netlify Dashboard.
   - **Build command:** *(leave empty)*
   - **Publish directory:** `.` (root)
3. **Form Notifications (One-time setup in Netlify dashboard):**
   - Navigate to **Site configuration &rarr; Forms &rarr; Form notifications**.
   - Click **Add notification &rarr; Email notification**.
   - Select form `contact` and enter `varanalagesh19@gmail.com`.

---

## 8. Verified GitHub Projects Inventory

All projects showcased in ATLAS correspond to authentic repositories:

- [IntelliPDF](https://github.com/varanalagesh19-dot/IntelliPDF) — RAG document analysis & exam intelligence.
- [NER ACCESS (SOLVEX 2.0)](https://github.com/varanalagesh19-dot/solvex-ner-platform2.0) — Offline-first logistics & A* elevation pathfinding (Smart India Hackathon 2026 / SIH26002).
- [LINKEDX](https://github.com/varanalagesh19-dot/linkxxx) — Multimodal Gemini Vision diagram analysis & LinkedIn content intelligence.
- [atlasAI Platform](https://github.com/varanalagesh19-dot/atlasAI) — Multi-model LLM orchestration gateway.
- [Smart Agriculture & Conservation](https://github.com/varanalagesh19-dot/smart-agriculture) — Embedded IoT soil moisture telemetry & automated irrigation.
- [Base Isolation Earthquake Defense](https://github.com/varanalagesh19-dot/bumblebee-squad) — Seismic dynamic isolation simulation ([Live Vercel Demo](https://bumblebee-squad.vercel.app)).
- [NVIDIA AI Chat Studio](https://github.com/varanalagesh19-dot/nvidia-ai-chat) — Accelerated inference pipeline & token metrics.
- [ATLAS 3D Portfolio](https://github.com/varanalagesh19-dot/atlas-portfolio) — Creative WebGL engine & spatial portfolio platform.

---

## 9. License

Personal portfolio and creative codebase &copy; 2026 Alageshvaran. All rights reserved.
