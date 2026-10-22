/**
 * ATLAS 3.0 — VERIFIED ALGORITHMIC SNIPPETS LIBRARY
 * Comprehensive developer catalog across:
 * - JavaScript & TypeScript
 * - Python & FastAPIs
 * - HTML5 & Modern CSS
 * - AI / Machine Learning (RAG, Vector Retrieval, Softmax)
 * - Data Structures & Algorithms (Trie, TopoSort, LRU Cache, Promise Pool)
 * - API & Network Architecture
 * - Three.js & WebGL GLSL
 */

export const SNIPPETS_DATA = [
  {
    id: 'js-promise-pool',
    title: 'Async Promise Pool & Concurrency Limiter',
    language: 'JavaScript',
    category: 'javascript',
    categoryLabel: 'JavaScript / Node.js',
    description: 'Execute asynchronous tasks with a strict concurrency ceiling to avoid rate limits and memory pressure.',
    keywords: 'async await promise pool concurrency rate limit throttle queue',
    code: `/**
 * Executes an array of async task functions with a maximum concurrency limit.
 * @param {Array<() => Promise<any>>} tasks
 * @param {number} limit Max concurrent executions
 * @returns {Promise<Array<any>>}
 */
async function promisePool(tasks, limit = 4) {
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
    id: 'js-event-emitter',
    title: 'Type-Safe Event Emitter Pattern',
    language: 'JavaScript',
    category: 'javascript',
    categoryLabel: 'JavaScript / Node.js',
    description: 'Lightweight pub/sub bus supporting once-listeners, targeted unsubscription, and decoupled event handling.',
    keywords: 'pub sub event emitter listener bus observer pattern',
    code: `class EventEmitter {
  constructor() {
    this.events = new Map();
  }

  on(event, listener) {
    if (!this.events.has(event)) this.events.set(event, new Set());
    this.events.get(event).add(listener);
    return () => this.off(event, listener); // Unsubscribe closure
  }

  once(event, listener) {
    const unsubscribe = this.on(event, (...args) => {
      unsubscribe();
      listener(...args);
    });
    return unsubscribe;
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
    id: 'py-fastapi-sse',
    title: 'FastAPI Streaming SSE Token Response',
    language: 'Python',
    category: 'python',
    categoryLabel: 'Python / Backend',
    description: 'Asynchronous streaming response handler for real-time LLM token generation over Server-Sent Events.',
    keywords: 'python fastapi streaming sse llm tokens generator server sent events',
    code: `from fastapi import FastAPI
from fastapi.responses import StreamingResponse
import asyncio

app = FastAPI()

async def llm_token_generator(prompt: str):
  """Simulate streaming LLM token generation with yield."""
  tokens = ["Engineered", " ", "with", " ", "zero-latency", " ", "streaming", "."]
  for token in tokens:
    yield f"data: {token}\\n\\n"
    await asyncio.sleep(0.04)
  yield "data: [DONE]\\n\\n"

@app.get("/api/v1/stream")
async def stream_endpoint(prompt: str):
  return StreamingResponse(
    llm_token_generator(prompt), 
    media_type="text/event-stream",
    headers={"Cache-Control": "no-cache", "X-Accel-Buffering": "no"}
  )`
  },
  {
    id: 'py-context-manager',
    title: 'Atomic Context Manager with Rollback',
    language: 'Python',
    category: 'python',
    categoryLabel: 'Python / Backend',
    description: 'Python context manager supporting automatic database rollback, transaction commit, and resource release.',
    keywords: 'python context manager enter exit rollback transaction atomicity',
    code: `class AtomicTransaction:
  """Guarantees commit on success and automatic rollback on exception."""
  def __init__(self, session):
    self.session = session

  def __enter__(self):
    self.session.begin()
    return self.session

  def __exit__(self, exc_type, exc_val, exc_tb):
    if exc_type is not None:
      self.session.rollback()
      print(f"[ERROR] Transaction rolled back: {exc_val}")
      return False  # Propagate exception
    else:
      self.session.commit()
      print("[INFO] Transaction committed successfully.")
      return True`
  },
  {
    id: 'ai-cosine-sim',
    title: 'Vector Cosine Similarity & Top-K Ranking',
    language: 'JavaScript',
    category: 'ai-ml',
    categoryLabel: 'AI / Machine Learning',
    description: 'RAG retrieval engine ranking vector embeddings against prompt vectors with normalized cosine scoring.',
    keywords: 'ai ml rag vector cosine similarity embeddings ranking semantic search',
    code: `/**
 * Computes cosine similarity between query embedding and corpus vector chunks.
 * @param {Float32Array|number[]} queryVec Query embedding vector
 * @param {Array<{id: string, text: string, embedding: number[]}>} corpus
 * @param {number} k Top results to return
 */
function rankTopK(queryVec, corpus, k = 3) {
  const scored = corpus.map(item => {
    let dot = 0, normQ = 0, normC = 0;
    for (let i = 0; i < queryVec.length; i++) {
      const q = queryVec[i];
      const c = item.embedding[i];
      dot += q * c;
      normQ += q * q;
      normC += c * c;
    }
    const score = dot / (Math.sqrt(normQ) * Math.sqrt(normC) || 1e-9);
    return { ...item, score };
  });

  return scored.sort((a, b) => b.score - a.score).slice(0, k);
}`
  },
  {
    id: 'ai-softmax',
    title: 'Numerically Stable Softmax Normalizer',
    language: 'JavaScript',
    category: 'ai-ml',
    categoryLabel: 'AI / Machine Learning',
    description: 'Probability distribution normalization over raw logits preventing floating point overflow via max subtraction.',
    keywords: 'ai ml softmax logits numerical stability probability classification',
    code: `/**
 * Converts raw logit scores into probabilities using numerically stable softmax.
 * @param {number[]} logits
 * @returns {number[]} Probabilities summing to 1.0
 */
function stableSoftmax(logits) {
  // Subtract maximum value to prevent Math.exp() from overflowing to Infinity
  const maxLogit = Math.max(...logits);
  const exps = logits.map(l => Math.exp(l - maxLogit));
  const sumExps = exps.reduce((acc, val) => acc + val, 0);
  return exps.map(e => e / (sumExps || 1));
}`
  },
  {
    id: 'dsa-trie-autocomplete',
    title: 'Trie (Prefix Tree) with Autocomplete',
    language: 'JavaScript',
    category: 'dsa',
    categoryLabel: 'Data Structures & Algorithms',
    description: 'Retrieval tree offering O(M) search and prefix lookup for dictionary and search term autocomplete.',
    keywords: 'dsa trie tree prefix autocomplete search graph algorithms',
    code: `class TrieNode {
  constructor() {
    this.children = new Map();
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
      if (!curr.children.has(char)) {
        curr.children.set(char, new TrieNode());
      }
      curr = curr.children.get(char);
    }
    curr.isEnd = true;
  }

  startsWith(prefix) {
    let curr = this.root;
    for (const char of prefix) {
      if (!curr.children.has(char)) return false;
      curr = curr.children.get(char);
    }
    return true;
  }
}`
  },
  {
    id: 'dsa-toposort',
    title: "Topological Sort using Kahn's Algorithm",
    language: 'JavaScript',
    category: 'dsa',
    categoryLabel: 'Data Structures & Algorithms',
    description: 'Linear ordering of DAG vertices using BFS and in-degree tracking for dependency resolution.',
    keywords: 'dsa graph topological sort kahn bfs dag dependencies',
    code: `/**
 * Computes topological order of tasks with prerequisites.
 * Returns empty array if a cyclic dependency is detected.
 */
function topologicalSort(numTasks, prerequisites) {
  const inDegree = new Array(numTasks).fill(0);
  const adj = Array.from({ length: numTasks }, () => []);

  for (const [task, prereq] of prerequisites) {
    adj[prereq].push(task);
    inDegree[task]++;
  }

  const queue = [];
  for (let i = 0; i < numTasks; i++) {
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

  return order.length === numTasks ? order : [];
}`
  },
  {
    id: 'three-studio-setup',
    title: 'Three.js Responsive Studio Stage Boilerplate',
    language: 'JavaScript',
    category: 'threejs',
    categoryLabel: 'Three.js & 3D WebGL',
    description: 'Production setup with ACESFilmic tone mapping, studio lighting, resize observer, and clean disposal.',
    keywords: 'threejs webgl 3d perspective camera lighting renderer resize disposal',
    code: `import * as THREE from 'three';

export function createStudioStage(canvasElement) {
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 100);
  camera.position.set(0, 0, 10);

  const renderer = new THREE.WebGLRenderer({
    canvas: canvasElement,
    alpha: true,
    antialias: true
  });
  renderer.setSize(canvasElement.clientWidth, canvasElement.clientHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.3;

  // Luminous Studio Lighting
  const amb = new THREE.AmbientLight(0xF5F3EE, 2.0);
  scene.add(amb);

  const keyLight = new THREE.DirectionalLight(0xFFFFFF, 2.5);
  keyLight.position.set(8, 12, 10);
  scene.add(keyLight);

  const rimLight = new THREE.DirectionalLight(0xD4FF3F, 3.0);
  rimLight.position.set(-10, -6, 6);
  scene.add(rimLight);

  return { scene, camera, renderer };
}`
  },
  {
    id: 'three-radial-shader',
    title: 'GLSL Radial Gold Sheen Shader Material',
    language: 'Three.js',
    category: 'threejs',
    categoryLabel: 'Three.js & 3D WebGL',
    description: 'Custom WebGL GLSL fragment shader simulating a radiant champagne-gold Fresnel aura.',
    keywords: 'threejs glsl shader vertex fragment material fresnel glow',
    code: `const vertexShader = \`
  varying vec3 vNormal;
  varying vec3 vViewPosition;
  void main() {
    vNormal = normalize(normalMatrix * normal);
    vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
    vViewPosition = -mvPosition.xyz;
    gl_Position = projectionMatrix * mvPosition;
  }
\`;

const fragmentShader = \`
  uniform vec3 uGoldColor;
  varying vec3 vNormal;
  varying vec3 vViewPosition;
  void main() {
    vec3 normal = normalize(vNormal);
    vec3 viewDir = normalize(vViewPosition);
    float fresnel = pow(1.0 - max(dot(normal, viewDir), 0.0), 3.0);
    gl_FragColor = vec4(uGoldColor * fresnel, fresnel * 0.85);
  }
\`;

const shaderMat = new THREE.ShaderMaterial({
  vertexShader,
  fragmentShader,
  uniforms: {
    uGoldColor: { value: new THREE.Color(0xD4FF3F) }
  },
  transparent: true,
  blending: THREE.AdditiveBlending
});`
  },
  {
    id: 'css-tokens-glass',
    title: 'Light-First Glassmorphism Token Architecture',
    language: 'CSS',
    category: 'css',
    categoryLabel: 'HTML & CSS Architecture',
    description: 'High-contrast frosted glass tokens using subtle Champagne borders, backdrop blur, and natural elevation.',
    keywords: 'css glassmorphism tokens variables backdrop filter design system',
    code: `:root {
  /* Warm Ivory Light Theme Defaults */
  --bg-porcelain: #F5F3EE;
  --surface-white: #FFFFFF;
  --charcoal-heading: #202124;
  --muted-text: #696969;
  --champagne-gold: #D4FF3F;

  /* Frosted Glassmorphism Tokens */
  --glass-surface: rgba(255, 255, 255, 0.85);
  --glass-border: rgba(203, 179, 232, 0.28);
  --glass-blur: blur(16px) saturate(140%);
  --shadow-elevation: 0 10px 30px -5px rgba(32, 33, 36, 0.06);
}

.luxury-glass-panel {
  background: var(--glass-surface);
  backdrop-filter: var(--glass-blur);
  -webkit-backdrop-filter: var(--glass-blur);
  border: 1px solid var(--glass-border);
  border-radius: 14px;
  box-shadow: var(--shadow-elevation);
}`
  },
  {
    id: 'api-resilient-fetch',
    title: 'Resilient Fetch with Exponential Backoff',
    language: 'JavaScript',
    category: 'api',
    categoryLabel: 'API & Networking',
    description: 'Production network fetch wrapper handling transient HTTP 429/503 errors with jittered backoff retry.',
    keywords: 'api fetch retry exponential backoff jitter network resilience',
    code: `async function fetchWithRetry(url, options = {}, retries = 3, backoff = 300) {
  try {
    const res = await fetch(url, options);
    if (!res.ok && (res.status === 429 || res.status >= 500)) {
      throw new Error(\`Transient Server Error: \${res.status}\`);
    }
    return res;
  } catch (err) {
    if (retries <= 0) throw err;
    // Add randomized jitter to avoid thundering herd problem
    const delay = backoff * Math.pow(2, 3 - retries) + Math.random() * 100;
    await new Promise(r => setTimeout(r, delay));
    return fetchWithRetry(url, options, retries - 1, backoff);
  }
}`
  }
];
