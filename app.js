// Projects Database with Verified Live Netlify & Streamlit URLs
const projectsData = [
  {
    id: "gcp-pmle-quiz",
    title: "GCP PMLE Quiz App",
    category: "ai",
    status: "Live App",
    badgeClass: "badge-live",
    image: "assets/gcp_quiz_preview_1784976001989.jpg",
    description: "Streamlit application built for Google Cloud Professional Machine Learning Engineer (PMLE) exam prep featuring ~850 questions, error tracking, and NotebookLM markdown exports.",
    tech: ["Python", "Streamlit", "Docker", "uv", "Google Cloud", "NotebookLM"],
    githubUrl: "https://github.com/Abdulla4akash/gcp-pmle-quiz",
    liveUrl: "https://gcp-pmle-quiz.streamlit.app",
    details: "Includes full quiz engine, spaced retries for wrong answers, dashboard knowledge gap visualizer, and progress backup/restore capabilities via JSON."
  },
  {
    id: "notesx",
    title: "NotesX Reader",
    category: "web",
    status: "Live Netlify",
    badgeClass: "badge-live",
    image: "assets/notesx_preview_1784976016462.jpg",
    description: "Static Astro web application for reading academic subject notes with seamless English and Bengali language switching, PDF integration, and Pagefind search.",
    tech: ["Astro", "TypeScript", "Markdown", "Netlify", "Pagefind", "CSS3"],
    githubUrl: "https://github.com/Abdulla4akash/notesx",
    liveUrl: "https://notesx.netlify.app",
    details: "Configured with netlify.toml for fast edge deployment. Uses content collections, custom chapter routing, and offline client-side full-text search indexing."
  },
  {
    id: "paperstackv3",
    title: "Paperstack Engine",
    category: "tools",
    status: "Live Netlify",
    badgeClass: "badge-live",
    image: "assets/paperstack_preview_1784976034218.jpg",
    description: "Academic paper manager, citation tracker, and research reading workflow tool stack built for high-throughput paper cataloging.",
    tech: ["TypeScript", "Node.js", "Netlify", "Citation Parser", "Markdown"],
    githubUrl: "https://github.com/Abdulla4akash/paperstackv3",
    liveUrl: "https://paperstack.netlify.app",
    details: "Engineered for organizing research bibliographies, extracting reference metadata, managing reading queues, and cross-referencing citations across version iterations."
  },
  {
    id: "vocab-app",
    title: "maXvocab (Vocab App)",
    category: "web",
    status: "Live Netlify",
    badgeClass: "badge-live",
    image: "assets/notesx_preview_1784976016462.jpg",
    description: "maXvocab interactive vocabulary builder and flashcard application designed to accelerate word mastery with custom wordlists, active recall, and SRS.",
    tech: ["JavaScript", "HTML5", "CSS3", "Netlify", "Local Storage", "Web Audio"],
    githubUrl: "https://github.com/Abdulla4akash/vocab-app",
    liveUrl: "https://maxvocab.netlify.app/",
    details: "Features active recall flashcards, custom wordlists, pronunciation playback, and SRS (Spaced Repetition System) progress tracking."
  },
  {
    id: "traffictwin",
    title: "TrafficTwin Platform",
    category: "research",
    status: "Research Prototype",
    badgeClass: "badge-research",
    image: "assets/traffictwin_preview_1784975987284.jpg",
    description: "Deterministic what-if experimentation and decision-support research platform for traffic and vehicular edge-computing (VEC) analysis.",
    tech: ["Python 3.11+", "Streamlit", "SUMO 1.27.x", "TOST Equivalence", "Docker", "RO-Crate"],
    githubUrl: "https://github.com/Abdulla4akash/traffictwin",
    liveUrl: "https://github.com/Abdulla4akash/traffictwin",
    details: "Features declarative YAML rules, provenance exploration, paired Student-t TOST equivalence testing, versioned regression gates, and standalone Netlify HTML report export."
  },
  {
    id: "f2e",
    title: "F2E Fullstack Platform",
    category: "tools",
    status: "Repository",
    badgeClass: "badge-public",
    image: "assets/paperstack_preview_1784976034218.jpg",
    description: "Front-end to back-end engineering workspace and utility library for streamlining API contract validation and UI integration.",
    tech: ["TypeScript", "Node.js", "REST APIs", "JSON Schema"],
    githubUrl: "https://github.com/Abdulla4akash/f2e",
    liveUrl: "https://github.com/Abdulla4akash/f2e",
    details: "Provides shared schemas, interface mocks, and contract testing utilities for full-stack web application development."
  },
  {
    id: "loop",
    title: "Loop Habit & Task Tracker",
    category: "web",
    status: "Repository",
    badgeClass: "badge-public",
    image: "assets/gcp_quiz_preview_1784976001989.jpg",
    description: "Habit loop tracker and continuous personal productivity management app with visual streaks and completion telemetry.",
    tech: ["JavaScript", "CSS3", "PWA", "Service Workers"],
    githubUrl: "https://github.com/Abdulla4akash/loop",
    liveUrl: "https://github.com/Abdulla4akash/loop",
    details: "Designed as a lightweight progressive web app for tracking daily habit loops, visual weekly heatmaps, and streak reminders."
  },
  {
    id: "soft-illusion",
    title: "Soft Illusion Mechanisms",
    category: "tools",
    status: "Live YouTube & Code",
    badgeClass: "badge-public",
    image: "assets/traffictwin_preview_1784975987284.jpg",
    description: "Engineering and mechanical physics mechanism simulations developed for the Soft Illusion technical video channel.",
    tech: ["Python", "Physics Simulation", "CAD", "Mechanisms"],
    githubUrl: "https://github.com/Abdulla4akash/Soft_illusion",
    liveUrl: "https://www.youtube.com/c/softillusion",
    details: "Contains code scripts, physics engine calculations, and dynamic simulations for mechanical linkages and automated mechanisms."
  }
];

// DOM Elements
const projectsGrid = document.getElementById('projectsGrid');
const filterTabs = document.getElementById('filterTabs');
const projectSearch = document.getElementById('projectSearch');
const clearSearch = document.getElementById('clearSearch');
const projectModal = document.getElementById('projectModal');
const modalClose = document.getElementById('modalClose');
const modalBody = document.getElementById('modalBody');

let currentFilter = 'all';
let searchQuery = '';

// Render Projects
function renderProjects() {
  const filtered = projectsData.filter(project => {
    const matchesFilter = currentFilter === 'all' || project.category === currentFilter;
    const matchesSearch = searchQuery === '' || 
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.tech.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
    
    return matchesFilter && matchesSearch;
  });

  if (filtered.length === 0) {
    projectsGrid.innerHTML = `
      <div style="grid-column: 1/-1; text-align: center; padding: 60px 20px;" class="glass">
        <i class="fa-solid fa-folder-open" style="font-size: 3rem; color: var(--text-dim); margin-bottom: 16px;"></i>
        <h3 style="font-size: 1.25rem; font-weight: 700; margin-bottom: 8px;">No projects found</h3>
        <p style="color: var(--text-muted);">Try adjusting your search query or filter tab.</p>
      </div>
    `;
    return;
  }

  projectsGrid.innerHTML = filtered.map(project => `
    <article class="project-card glass" onclick="openModal('${project.id}')">
      <div class="card-img-wrapper">
        <img src="${project.image}" alt="${project.title} Preview" loading="lazy">
        <span class="card-badge ${project.badgeClass}">${project.status}</span>
      </div>
      <div class="card-content">
        <div class="card-header">
          <h2 class="card-title">
            ${project.title}
            <i class="fa-solid fa-chevron-right" style="font-size: 0.9rem; color: var(--primary);"></i>
          </h2>
        </div>
        <p class="card-desc">${project.description}</p>
        
        <div class="tech-tags">
          ${project.tech.slice(0, 4).map(t => `<span class="tag">${t}</span>`).join('')}
          ${project.tech.length > 4 ? `<span class="tag">+${project.tech.length - 4}</span>` : ''}
        </div>

        <div class="card-footer" onclick="event.stopPropagation()">
          <a href="${project.liveUrl}" target="_blank" rel="noopener" class="btn-card btn-card-primary">
            <i class="fa-solid fa-rocket"></i> Live Application
          </a>
          <a href="${project.githubUrl}" target="_blank" rel="noopener" class="btn-card btn-card-secondary">
            <i class="fa-brands fa-github"></i> Code
          </a>
        </div>
      </div>
    </article>
  `).join('');
}

// Modal Trigger
function openModal(id) {
  const project = projectsData.find(p => p.id === id);
  if (!project) return;

  modalBody.innerHTML = `
    <div style="margin-bottom: 20px;">
      <span class="card-badge ${project.badgeClass}" style="position: relative; top: 0; right: 0; display: inline-block; margin-bottom: 12px;">${project.status}</span>
      <h2 style="font-family: var(--font-heading); font-size: 2rem; font-weight: 800; margin-bottom: 8px;">${project.title}</h2>
      <p style="color: var(--text-muted); font-size: 1.05rem;">${project.description}</p>
    </div>

    <img src="${project.image}" alt="${project.title}" style="width: 100%; border-radius: 12px; margin-bottom: 24px; border: 1px solid var(--border-glass);">

    <div style="margin-bottom: 24px;">
      <h4 style="font-size: 1rem; font-weight: 700; margin-bottom: 10px; color: var(--text-main);">Technical Overview</h4>
      <p style="color: var(--text-muted); font-size: 0.95rem; line-height: 1.6;">${project.details}</p>
    </div>

    <div style="margin-bottom: 28px;">
      <h4 style="font-size: 1rem; font-weight: 700; margin-bottom: 10px; color: var(--text-main);">Technologies & Tools</h4>
      <div class="tech-tags">
        ${project.tech.map(t => `<span class="tag" style="padding: 6px 12px; font-size: 0.85rem;">${t}</span>`).join('')}
      </div>
    </div>

    <div style="display: flex; gap: 14px; flex-wrap: wrap;">
      <a href="${project.liveUrl}" target="_blank" rel="noopener" class="btn-card btn-card-primary" style="padding: 12px 24px; font-size: 1rem;">
        <i class="fa-solid fa-rocket"></i> Open Live Application
      </a>
      <a href="${project.githubUrl}" target="_blank" rel="noopener" class="btn-card btn-card-secondary" style="padding: 12px 24px; font-size: 1rem;">
        <i class="fa-brands fa-github"></i> View GitHub Repository
      </a>
    </div>
  `;

  projectModal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  projectModal.classList.remove('active');
  document.body.style.overflow = 'auto';
}

// Event Listeners
filterTabs.addEventListener('click', (e) => {
  if (e.target.classList.contains('tab-btn')) {
    document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
    e.target.classList.add('active');
    currentFilter = e.target.getAttribute('data-filter');
    renderProjects();
  }
});

projectSearch.addEventListener('input', (e) => {
  searchQuery = e.target.value.trim();
  clearSearch.style.display = searchQuery ? 'block' : 'none';
  renderProjects();
});

clearSearch.addEventListener('click', () => {
  projectSearch.value = '';
  searchQuery = '';
  clearSearch.style.display = 'none';
  renderProjects();
});

modalClose.addEventListener('click', closeModal);
projectModal.addEventListener('click', (e) => {
  if (e.target === projectModal) closeModal();
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && projectModal.classList.contains('active')) closeModal();
});

// Initial Render
renderProjects();
