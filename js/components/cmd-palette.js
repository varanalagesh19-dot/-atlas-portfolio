/**
 * ATLAS 2.0 — COMMAND PALETTE (CTRL+K / CMD+K) CONTROLLER
 * Premium interactive command palette supporting keyboard navigation,
 * route discovery, project case studies, developer tools, theme toggle, and resume access.
 */

import { PROJECTS_DATA } from '../data/projects.js';
import { toggleTheme } from './theme.js';
import { showToast } from './toast.js';

export function initCommandPalette(navigate) {
  const modal = document.getElementById('command-palette-modal');
  const triggerBtn = document.getElementById('cmd-palette-btn');
  const closeBtn = document.getElementById('cmd-palette-close-btn');
  const clearBtn = document.getElementById('cmd-palette-clear-btn');
  const backdrop = document.getElementById('cmd-palette-backdrop-dismiss');
  const input = document.getElementById('cmd-palette-input');
  const list = document.getElementById('cmd-palette-list');
  const statusAnnouncer = document.getElementById('cmd-palette-status');

  if (!modal || !input || !list) return;

  const nav = typeof navigate === 'function' ? navigate : (path) => {
    window.history.pushState({}, '', path);
    window.dispatchEvent(new PopStateEvent('popstate'));
  };

  let previousActiveElement = null;

  // Build authentic commands list strictly from existing routes and verified projects
  const COMMANDS = [
    // 1. Core Portfolio Routes
    { 
      id: 'nav-home',
      title: 'Home Overview', 
      subtitle: 'Flagship introduction and system telemetry', 
      category: 'Navigation', 
      icon: '▲', 
      keywords: 'home index start main overview',
      action: () => nav('/') 
    },
    { 
      id: 'nav-about',
      title: 'About Alagesh Varan', 
      subtitle: 'Biography, academic journey & engineering philosophy', 
      category: 'Navigation', 
      icon: '👤', 
      keywords: 'about biography background kathir anna university philosophy profile',
      action: () => nav('/about') 
    },
    { 
      id: 'nav-beyond-code',
      title: 'Beyond the Code (Creative Hobbies)', 
      subtitle: 'Chess, Photography, Wildlife, Videography, Drawing & Marvel Comics', 
      category: 'Navigation', 
      icon: '🎨', 
      keywords: 'beyond code hobbies chess photography wildlife videography drawing comics marvel avengers creative pursuits',
      action: () => nav('/about#beyond-the-code') 
    },
    { 
      id: 'nav-projects',
      title: 'Projects Showcase (8 Verified)', 
      subtitle: 'AI, systems heuristics, IoT & spatial WebGL repositories', 
      category: 'Navigation', 
      icon: '📂', 
      keywords: 'projects work gallery showcase case studies github repositories',
      action: () => nav('/projects') 
    },
    { 
      id: 'nav-project-lab',
      title: 'Interactive Project Lab', 
      subtitle: 'Sandboxed code playground & architecture explorer for projects', 
      category: 'Navigation', 
      icon: '🔬', 
      keywords: 'lab playground architecture interactive ner access linkedx demos sandbox',
      action: () => nav('/projects?tab=lab') 
    },
    { 
      id: 'nav-arch-explorer',
      title: 'Architecture Explorer (NER ACCESS & LINKEDX)', 
      subtitle: 'Deconstructed system pipelines and verified component relationships', 
      category: 'Navigation', 
      icon: '🏛️', 
      keywords: 'architecture explorer diagrams pipeline flow components ner linkedx',
      action: () => nav('/projects?tab=architecture') 
    },
    { 
      id: 'nav-skills',
      title: 'Technical Skills Matrix', 
      subtitle: 'Curated competencies backed by delivered GitHub code', 
      category: 'Navigation', 
      icon: '⚡', 
      keywords: 'skills tech stack languages python kotlin javascript c++ webgl rag ai docker',
      action: () => nav('/skills') 
    },
    { 
      id: 'nav-tools',
      title: 'Developer Tools & Workspace', 
      subtitle: 'Code playground, snippets library, utilities & terminal CLI', 
      category: 'Navigation', 
      icon: '🛠️', 
      keywords: 'tools lab playground snippets utilities terminal cli regex hash base64',
      action: () => nav('/tools') 
    },
    { 
      id: 'nav-contact',
      title: 'Contact & Transmissions', 
      subtitle: 'Direct email channel, transmission form & social links', 
      category: 'Navigation', 
      icon: '✉️', 
      keywords: 'contact message email inquiry hire transmission touch connect',
      action: () => nav('/contact') 
    },
    { 
      id: 'nav-resume',
      title: 'Curriculum Vitae & Resume Studio', 
      subtitle: 'ATS-friendly credentials, verified certifications & PDF export', 
      category: 'Navigation', 
      icon: '📄', 
      keywords: 'resume cv curriculum vitae qualifications experience education pdf print',
      action: () => nav('/resume') 
    },

    // 2. All 8 Verified Projects (Dynamically from PROJECTS_DATA with authentic titles)
    ...PROJECTS_DATA.map(p => {
      let displayTitle = p.name;
      if (p.slug === 'solvex-ner') {
        displayTitle = 'NER ACCESS (SOLVEX 2.0)';
      } else if (p.slug === 'linkx') {
        displayTitle = 'LINKEDX (LINKX)';
      }
      return {
        id: `proj-${p.slug}`,
        title: displayTitle,
        subtitle: `${p.category.split('/')[0].trim()} · ${p.stack.slice(0, 3).join(', ')}`,
        category: 'Projects Archive',
        icon: '💎',
        keywords: `${displayTitle} ${p.name} ${p.slug} ${p.category} ${p.stack.join(' ')} ${p.problem || ''} ${p.summary || ''}`,
        action: () => nav(`/projects/${p.slug}`)
      };
    }),

    // 3. Developer Tools Sub-Workspaces
    { 
      id: 'tool-playground',
      title: 'Tool: Live Code Playground', 
      subtitle: 'Interactive HTML, CSS & JavaScript sandbox', 
      category: 'Developer Tools', 
      icon: '⚡', 
      keywords: 'playground live code html css js editor sandbox',
      action: () => { 
        nav('/tools'); 
        setTimeout(() => { 
          const b = document.querySelector('[data-tool="playground"]'); 
          if (b) b.click(); 
        }, 120); 
      } 
    },
    { 
      id: 'tool-snippets',
      title: 'Tool: Algorithmic Snippets Library', 
      subtitle: 'Curated algorithms in Python, JS, C++ & GLSL', 
      category: 'Developer Tools', 
      icon: '📚', 
      keywords: 'snippets algorithms code library python js glsl c++',
      action: () => { 
        nav('/tools'); 
        setTimeout(() => { 
          const b = document.querySelector('[data-tool="snippets"]'); 
          if (b) b.click(); 
        }, 120); 
      } 
    },
    { 
      id: 'tool-utilities',
      title: 'Tool: Developer Utilities Suite (8 Tools)', 
      subtitle: 'Client-side encoders, hash generator, JSON, regex, UUID, etc.', 
      category: 'Developer Tools', 
      icon: '⚙️', 
      keywords: 'utilities hash sha256 base64 json format regex uuid timestamp url encode',
      action: () => { 
        nav('/tools'); 
        setTimeout(() => { 
          const b = document.querySelector('[data-tool="utilities"]'); 
          if (b) b.click(); 
        }, 120); 
      } 
    },
    { 
      id: 'tool-terminal',
      title: 'Tool: ATLAS Terminal CLI', 
      subtitle: 'Interactive retro terminal emulator with built-in commands', 
      category: 'Developer Tools', 
      icon: '💻', 
      keywords: 'terminal cli shell command prompt console bash emulator',
      action: () => { 
        nav('/tools'); 
        setTimeout(() => { 
          const b = document.querySelector('[data-tool="terminal"]'); 
          if (b) b.click(); 
        }, 120); 
      } 
    },

    // 4. System Actions
    { 
      id: 'act-monogram-reveal',
      title: 'Cinematic ATLAS Monogram Reveal', 
      subtitle: 'Play the animated letter A monogram and wordmark intro into About', 
      category: 'System Action', 
      icon: '✦', 
      keywords: 'atlas monogram reveal intro letter a logo brand animation cinematic about replay',
      action: () => nav('/about', true) 
    },
    { 
      id: 'act-theme',
      title: 'Toggle Light / Dark Theme', 
      subtitle: 'Switch between Warm Ivory and Obsidian Black themes', 
      category: 'System Action', 
      icon: '☼', 
      keywords: 'theme toggle light dark mode color obsidian ivory switch',
      action: () => toggleTheme() 
    },
    { 
      id: 'act-email',
      title: 'Copy Developer Email', 
      subtitle: 'Copy varanalagesh19@gmail.com to clipboard', 
      category: 'System Action', 
      icon: '📋', 
      keywords: 'copy email address contact varanalagesh19 gmail clipboard',
      action: () => {
        if (navigator.clipboard) {
          navigator.clipboard.writeText('varanalagesh19@gmail.com').then(() => {
            showToast('Copied varanalagesh19@gmail.com to clipboard!');
          });
        }
      } 
    },
    { 
      id: 'act-print-cv',
      title: 'Print / Export Curriculum Vitae (PDF)', 
      subtitle: 'Open clean print preview dialog for curriculum vitae', 
      category: 'System Action', 
      icon: '🖨️', 
      keywords: 'print export cv resume pdf download',
      action: () => {
        nav('/resume');
        setTimeout(() => window.print(), 350);
      } 
    }
  ];

  let selectedIdx = 0;
  let filteredCommands = [...COMMANDS];

  function openPalette() {
    previousActiveElement = document.activeElement;
    modal.classList.remove('cmd-palette-closing');
    modal.setAttribute('open', '');
    modal.style.display = 'flex';
    input.value = '';
    selectedIdx = 0;
    if (clearBtn) clearBtn.style.display = 'none';
    renderList('');
    
    // Focus after animation frame to ensure reliable browser focus
    requestAnimationFrame(() => {
      input.focus();
    });
    document.body.style.overflow = 'hidden';
  }

  function closePalette() {
    modal.classList.add('cmd-palette-closing');
    const isReduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    const completeClose = () => {
      modal.removeAttribute('open');
      modal.style.display = 'none';
      modal.classList.remove('cmd-palette-closing');
      document.body.style.overflow = '';
      if (previousActiveElement && typeof previousActiveElement.focus === 'function') {
        previousActiveElement.focus();
      }
    };

    if (isReduced) {
      completeClose();
    } else {
      setTimeout(completeClose, 140);
    }
  }

  function renderList(query) {
    const q = query.toLowerCase().trim();
    if (!q) {
      filteredCommands = [...COMMANDS];
    } else {
      filteredCommands = COMMANDS.filter(cmd => {
        const matchTitle = cmd.title.toLowerCase().includes(q);
        const matchSub = (cmd.subtitle || '').toLowerCase().includes(q);
        const matchCat = cmd.category.toLowerCase().includes(q);
        const matchKw = (cmd.keywords || '').toLowerCase().includes(q);
        return matchTitle || matchSub || matchCat || matchKw;
      });
    }

    if (statusAnnouncer) {
      statusAnnouncer.textContent = `${filteredCommands.length} command results available.`;
    }

    if (filteredCommands.length === 0) {
      list.innerHTML = `
        <div class="cmd-empty-state">
          <span class="cmd-empty-icon" aria-hidden="true">🔍</span>
          <p class="cmd-empty-title">No results found for "${escapeHtml(query)}"</p>
          <p class="cmd-empty-hint">Try searching for <strong>Projects</strong>, <strong>NER</strong>, <strong>LinkedX</strong>, <strong>Skills</strong>, <strong>Tools</strong>, or <strong>Theme</strong>.</p>
        </div>
      `;
      input.removeAttribute('aria-activedescendant');
      return;
    }

    if (selectedIdx >= filteredCommands.length) selectedIdx = 0;

    list.innerHTML = filteredCommands.map((cmd, idx) => {
      const isSelected = idx === selectedIdx;
      const optId = `cmd-opt-${idx}`;
      return `
        <div 
          id="${optId}"
          class="cmd-item ${isSelected ? 'is-selected' : ''}" 
          role="option" 
          aria-selected="${isSelected}" 
          data-cmd-idx="${idx}"
        >
          <span class="cmd-item-icon" aria-hidden="true">${cmd.icon}</span>
          <div class="cmd-item-info">
            <span class="cmd-item-title">${escapeHtml(cmd.title)}</span>
            <span class="cmd-item-sub">${escapeHtml(cmd.subtitle || cmd.category)}</span>
          </div>
          <span class="cmd-item-cat-badge">${escapeHtml(cmd.category)}</span>
          <span class="cmd-item-enter" aria-hidden="true" title="Press Enter to select">↵</span>
        </div>
      `;
    }).join('');

    input.setAttribute('aria-activedescendant', `cmd-opt-${selectedIdx}`);

    const selectedEl = list.querySelector('.is-selected');
    if (selectedEl) selectedEl.scrollIntoView({ block: 'nearest' });
  }

  function executeSelected() {
    if (filteredCommands[selectedIdx]) {
      const cmd = filteredCommands[selectedIdx];
      closePalette();
      cmd.action();
    }
  }

  // Input search handling
  input.addEventListener('input', () => {
    selectedIdx = 0;
    if (clearBtn) {
      clearBtn.style.display = input.value ? 'inline-flex' : 'none';
    }
    renderList(input.value);
  });

  if (clearBtn) {
    clearBtn.addEventListener('click', () => {
      input.value = '';
      clearBtn.style.display = 'none';
      selectedIdx = 0;
      renderList('');
      input.focus();
    });
  }

  // Keyboard navigation inside the palette
  input.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (filteredCommands.length > 0) {
        selectedIdx = (selectedIdx + 1) % filteredCommands.length;
        renderList(input.value);
      }
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (filteredCommands.length > 0) {
        selectedIdx = (selectedIdx - 1 + filteredCommands.length) % filteredCommands.length;
        renderList(input.value);
      }
    } else if (e.key === 'Enter') {
      e.preventDefault();
      executeSelected();
    } else if (e.key === 'Escape') {
      e.preventDefault();
      closePalette();
    } else if (e.key === 'Tab') {
      // Focus trap cycling between input and close button
      if (closeBtn) {
        e.preventDefault();
        closeBtn.focus();
      }
    }
  });

  if (closeBtn) {
    closeBtn.addEventListener('keydown', (e) => {
      if (e.key === 'Tab') {
        e.preventDefault();
        input.focus();
      } else if (e.key === 'Escape') {
        e.preventDefault();
        closePalette();
      }
    });
  }

  // Click on items to activate
  list.addEventListener('click', (e) => {
    const item = e.target.closest('[data-cmd-idx]');
    if (item) {
      selectedIdx = parseInt(item.getAttribute('data-cmd-idx'), 10);
      executeSelected();
    }
  });

  // Open triggers
  if (triggerBtn) triggerBtn.addEventListener('click', openPalette);
  if (closeBtn) closeBtn.addEventListener('click', closePalette);
  if (backdrop) backdrop.addEventListener('click', closePalette);

  // Close when clicking modal backdrop outside container
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      closePalette();
    }
  });

  // Global hotkey: Ctrl+K or Cmd+K
  // Requirement 9: Prevent the keyboard shortcut from interfering with typing in form fields or editable content.
  window.addEventListener('keydown', (e) => {
    if ((e.ctrlKey || e.metaKey) && (e.key === 'k' || e.key === 'K')) {
      const activeEl = document.activeElement;
      const isTypingInField = activeEl && (
        activeEl.isContentEditable ||
        activeEl.tagName === 'TEXTAREA' ||
        (activeEl.tagName === 'INPUT' && activeEl !== input && !['button', 'submit', 'reset', 'checkbox', 'radio'].includes(activeEl.type))
      );

      // If user is actively typing in a form input/textarea outside the modal, do not hijack typing
      if (isTypingInField && !modal.hasAttribute('open')) {
        return;
      }

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

function escapeHtml(str) {
  if (typeof str !== 'string') return '';
  return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}
