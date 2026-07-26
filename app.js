const categoryMeta = {
  all: 'All work',
  ai: 'AI & learning',
  web: 'Web & EdTech',
  research: 'Research',
  tools: 'Tools'
};

const projectsData = [
  {
    id: 'notesx',
    title: 'NotesX Reader',
    category: 'web',
    categoryLabel: 'Web · Education',
    status: 'Live',
    statusClass: 'live',
    image: 'assets/notesx_preview_1784976016462.jpg',
    icon: 'fa-book-open',
    accent: '#4f7cff',
    highlighted: true,
    description: 'A bilingual academic reading experience with fast search, structured subjects, and seamless English–Bengali switching.',
    details: 'NotesX is a static Astro application designed around focused academic reading. Content collections power structured chapter routes, Pagefind provides fast local search, and language switching keeps English and Bengali material within one coherent experience.',
    tech: ['Astro', 'TypeScript', 'Markdown', 'Pagefind', 'Netlify', 'CSS'],
    githubUrl: 'https://github.com/Abdulla4akash/notesx',
    liveUrl: 'https://akash-notex.netlify.app',
    liveLabel: 'Open NotesX'
  },
  {
    id: 'traffictwin',
    title: 'TrafficTwin Platform',
    category: 'research',
    categoryLabel: 'Research · Simulation',
    status: 'Research demo',
    statusClass: 'research',
    image: 'assets/traffictwin_preview_1784975987284.jpg',
    icon: 'fa-road',
    accent: '#15b8a6',
    highlighted: true,
    description: 'A deterministic decision-support platform for traffic and vehicular edge-computing what-if experiments.',
    details: 'TrafficTwin combines declarative YAML rules, provenance exploration, paired Student-t TOST equivalence testing, versioned regression gates, and portable report exports. The result is a research workflow built to make scenario comparisons reproducible and inspectable.',
    tech: ['Python 3.11+', 'Streamlit', 'SUMO', 'TOST', 'Docker', 'RO-Crate'],
    githubUrl: 'https://github.com/Abdulla4akash/traffictwin',
    liveUrl: 'https://traffictwin-research-demo.netlify.app',
    liveLabel: 'Open research demo'
  },
  {
    id: 'gcp-pmle-quiz',
    title: 'GCP PMLE Quiz',
    category: 'ai',
    categoryLabel: 'AI · Learning',
    status: 'Live',
    statusClass: 'live',
    image: 'assets/gcp_quiz_preview_1784976001989.jpg',
    icon: 'fa-brain',
    accent: '#6d8cff',
    description: 'An exam-prep engine with around 850 questions, targeted retries, knowledge-gap analytics, and portable progress backups.',
    details: 'Built for Google Cloud Professional Machine Learning Engineer exam preparation, the app supports full practice sessions, spaced retries for missed questions, dashboard-level knowledge-gap analysis, and JSON backup and restore for learning progress.',
    tech: ['Python', 'Streamlit', 'Docker', 'uv', 'Google Cloud', 'NotebookLM'],
    githubUrl: 'https://github.com/Abdulla4akash/gcp-pmle-quiz',
    liveUrl: 'https://gcp-pmle-quiz.streamlit.app',
    liveLabel: 'Start practising'
  },
  {
    id: 'paperstackv3',
    title: 'Paperstack Engine',
    category: 'tools',
    categoryLabel: 'Tooling · Research',
    status: 'Live',
    statusClass: 'live',
    image: 'assets/paperstack_preview_1784976034218.jpg',
    icon: 'fa-layer-group',
    accent: '#a47cff',
    description: 'A focused research-paper manager for reading queues, citation tracking, and high-throughput bibliography workflows.',
    details: 'Paperstack is designed for researchers who need more than a folder of PDFs. It organises bibliographies, extracts reference metadata, manages reading queues, and makes it easier to cross-reference citations across evolving research iterations.',
    tech: ['TypeScript', 'Node.js', 'Netlify', 'Citation parser', 'Markdown'],
    githubUrl: 'https://github.com/Abdulla4akash/paperstackv3',
    liveUrl: 'https://paperstack.netlify.app',
    liveLabel: 'Open Paperstack'
  },
  {
    id: 'vocab-app',
    title: 'maXvocab',
    category: 'web',
    categoryLabel: 'Web · Learning',
    status: 'Live',
    statusClass: 'live',
    image: null,
    visualCode: 'WORD / RECALL',
    icon: 'fa-language',
    accent: '#f48b56',
    description: 'An active-recall vocabulary builder with custom wordlists, pronunciation playback, and spaced repetition.',
    details: 'maXvocab turns vocabulary practice into a lightweight daily loop. Learners can create focused wordlists, practise with active-recall flashcards, hear pronunciations, and use spaced repetition to revisit words at the right time.',
    tech: ['JavaScript', 'HTML', 'CSS', 'Web Audio', 'Local storage', 'Netlify'],
    githubUrl: 'https://github.com/Abdulla4akash/vocab-app',
    liveUrl: 'https://maxvocab.netlify.app/',
    liveLabel: 'Open maXvocab'
  },
  {
    id: 'f2e',
    title: 'F2E Platform',
    category: 'tools',
    categoryLabel: 'Tooling · Full stack',
    status: 'Open source',
    statusClass: 'open',
    image: null,
    visualCode: 'UI ⇄ API',
    icon: 'fa-code-branch',
    accent: '#43a9f2',
    description: 'A front-end to back-end workspace for shared schemas, contract validation, mocks, and reliable UI integration.',
    details: 'F2E brings API contracts and interface work into the same engineering loop. Shared schemas, interface mocks, and contract tests help teams find integration mismatches before they become expensive application bugs.',
    tech: ['TypeScript', 'Node.js', 'REST APIs', 'JSON Schema'],
    githubUrl: 'https://github.com/Abdulla4akash/f2e',
    liveUrl: null,
    liveLabel: null
  },
  {
    id: 'loop',
    title: 'Loop Habit Tracker',
    category: 'web',
    categoryLabel: 'Web · Productivity',
    status: 'Open source',
    statusClass: 'open',
    image: null,
    visualCode: 'LOOP / 07',
    icon: 'fa-arrows-rotate',
    accent: '#e6b64e',
    description: 'A lightweight habit and task tracker built around streak visibility, weekly rhythm, and low-friction check-ins.',
    details: 'Loop is a progressive web app for maintaining daily habits without turning tracking into another chore. It combines quick completion logging, weekly heatmaps, streak feedback, and service-worker support in a compact experience.',
    tech: ['JavaScript', 'CSS', 'PWA', 'Service workers'],
    githubUrl: 'https://github.com/Abdulla4akash/loop',
    liveUrl: null,
    liveLabel: null
  },
  {
    id: 'soft-illusion',
    title: 'Soft Illusion',
    category: 'tools',
    categoryLabel: 'Simulation · Mechanics',
    status: 'Video + code',
    statusClass: 'media',
    image: null,
    visualCode: 'MOTION / LAB',
    icon: 'fa-gears',
    accent: '#e76b8a',
    description: 'Mechanical-physics simulations and engineering visualisations created for a technical video channel.',
    details: 'Soft Illusion explores mechanical linkages and automated mechanisms through code, calculation, CAD, and motion. The repository collects the scripts and physics logic behind visual technical demonstrations.',
    tech: ['Python', 'Physics simulation', 'CAD', 'Mechanisms'],
    githubUrl: 'https://github.com/Abdulla4akash/Soft_illusion',
    liveUrl: 'https://www.youtube.com/c/softillusion',
    liveLabel: 'Watch the channel'
  }
];

const projectsGrid = document.getElementById('projectsGrid');
const filterTabs = document.getElementById('filterTabs');
const projectSearch = document.getElementById('projectSearch');
const clearSearch = document.getElementById('clearSearch');
const resultsCount = document.getElementById('resultsCount');
const projectModal = document.getElementById('projectModal');
const modalCard = projectModal.querySelector('.modal-card');
const modalClose = document.getElementById('modalClose');
const modalBody = document.getElementById('modalBody');
const themeToggle = document.getElementById('themeToggle');
const themeColorMeta = document.querySelector('meta[name="theme-color"]');

let currentFilter = 'all';
let searchQuery = '';
let lastFocusedElement = null;
let modalHideTimer = null;

function escapeHTML(value) {
  const entities = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;'
  };

  return String(value).replace(/[&<>"']/g, character => entities[character]);
}

function escapeAttribute(value) {
  return escapeHTML(value).replace(/`/g, '&#096;');
}

function getPrimaryAction(project) {
  if (project.liveUrl) {
    return {
      url: project.liveUrl,
      label: project.liveLabel || 'Open live project',
      icon: project.id === 'soft-illusion' ? 'fa-play' : 'fa-arrow-up-right-from-square'
    };
  }

  return {
    url: project.githubUrl,
    label: 'View source code',
    icon: 'fa-github',
    brandIcon: true
  };
}

function renderProjectVisual(project, context = 'card') {
  const title = escapeHTML(project.title);

  if (project.image) {
    const loading = context === 'modal' ? 'eager' : 'lazy';
    return `<img src="${escapeAttribute(project.image)}" alt="${title} interface preview" width="1376" height="768" loading="${loading}" decoding="async">`;
  }

  return `
    <span class="project-visual project-visual--${escapeAttribute(project.id)}" aria-label="${title} project artwork" role="img">
      <span class="project-visual__grid" aria-hidden="true"></span>
      <span class="project-visual__icon" aria-hidden="true"><i class="fa-solid ${escapeAttribute(project.icon)}"></i></span>
      <span class="project-visual__code" aria-hidden="true">${escapeHTML(project.visualCode)}</span>
      <span class="project-visual__line" aria-hidden="true"></span>
    </span>
  `;
}

function renderFilters() {
  filterTabs.innerHTML = Object.entries(categoryMeta).map(([key, label]) => {
    const count = key === 'all'
      ? projectsData.length
      : projectsData.filter(project => project.category === key).length;
    const isActive = key === currentFilter;

    return `
      <button class="filter-button${isActive ? ' is-active' : ''}" type="button" data-filter="${key}" aria-pressed="${isActive}">
        <span>${escapeHTML(label)}</span>
        <span class="filter-count" aria-hidden="true">${count}</span>
      </button>
    `;
  }).join('');
}

function getFilteredProjects() {
  const normalisedQuery = searchQuery.toLocaleLowerCase();

  return projectsData.filter(project => {
    const matchesFilter = currentFilter === 'all' || project.category === currentFilter;
    const searchableText = [
      project.title,
      project.categoryLabel,
      project.description,
      project.details,
      ...project.tech
    ].join(' ').toLocaleLowerCase();
    const matchesSearch = !normalisedQuery || searchableText.includes(normalisedQuery);

    return matchesFilter && matchesSearch;
  });
}

function renderProjectCard(project, index) {
  const primaryAction = getPrimaryAction(project);
  const hasSeparateLiveAction = Boolean(project.liveUrl);
  const cardClass = project.highlighted ? ' project-card--highlighted' : '';

  return `
    <article class="project-card${cardClass}" style="--project-accent: ${escapeAttribute(project.accent)}; --card-delay: ${Math.min(index * 45, 270)}ms;">
      <div class="card-media">
        <button class="card-preview project-open" type="button" data-project-id="${escapeAttribute(project.id)}" aria-label="View ${escapeAttribute(project.title)} details">
          ${renderProjectVisual(project)}
          <span class="card-preview__overlay" aria-hidden="true">
            <span>View details</span>
            <i class="fa-solid fa-arrow-right"></i>
          </span>
        </button>
        <span class="status-badge status-badge--${escapeAttribute(project.statusClass)}">
          <span class="status-badge__dot" aria-hidden="true"></span>
          ${escapeHTML(project.status)}
        </span>
        <span class="card-number" aria-hidden="true">${String(index + 1).padStart(2, '0')}</span>
      </div>

      <div class="card-body">
        <p class="card-kicker">${escapeHTML(project.categoryLabel)}</p>
        <button class="card-title project-open" type="button" data-project-id="${escapeAttribute(project.id)}">
          ${escapeHTML(project.title)}
          <i class="fa-solid fa-arrow-right" aria-hidden="true"></i>
        </button>
        <p class="card-description">${escapeHTML(project.description)}</p>

        <ul class="tech-list" aria-label="Technologies used">
          ${project.tech.slice(0, 4).map(item => `<li>${escapeHTML(item)}</li>`).join('')}
          ${project.tech.length > 4 ? `<li aria-label="${project.tech.length - 4} more technologies">+${project.tech.length - 4}</li>` : ''}
        </ul>

        <div class="card-actions">
          <a class="card-action card-action--primary" href="${escapeAttribute(primaryAction.url)}" target="_blank" rel="noopener">
            <i class="${primaryAction.brandIcon ? 'fa-brands' : 'fa-solid'} ${primaryAction.icon}" aria-hidden="true"></i>
            <span>${escapeHTML(primaryAction.label)}</span>
          </a>
          ${hasSeparateLiveAction ? `
            <a class="card-action card-action--icon" href="${escapeAttribute(project.githubUrl)}" target="_blank" rel="noopener" aria-label="View ${escapeAttribute(project.title)} source code on GitHub">
              <i class="fa-brands fa-github" aria-hidden="true"></i>
            </a>
          ` : ''}
        </div>
      </div>
    </article>
  `;
}

function updateResultsLabel(filteredProjects) {
  const total = filteredProjects.length;
  const category = categoryMeta[currentFilter];

  if (searchQuery) {
    resultsCount.textContent = `${total} ${total === 1 ? 'project' : 'projects'} found for “${searchQuery}”`;
  } else if (currentFilter !== 'all') {
    resultsCount.textContent = `${total} ${category.toLocaleLowerCase()} ${total === 1 ? 'project' : 'projects'}`;
  } else {
    resultsCount.textContent = `Showing all ${total} projects`;
  }
}

function renderProjects() {
  const filteredProjects = getFilteredProjects();
  updateResultsLabel(filteredProjects);

  if (!filteredProjects.length) {
    projectsGrid.innerHTML = `
      <div class="empty-state">
        <span class="empty-state__icon" aria-hidden="true"><i class="fa-regular fa-folder-open"></i></span>
        <p class="section-label">No matches</p>
        <h3>Nothing fits that search—yet.</h3>
        <p>Try another keyword or clear the active filters to see the complete project index.</p>
        <button class="button button--primary" id="resetFilters" type="button">Reset project index</button>
      </div>
    `;
    return;
  }

  projectsGrid.innerHTML = filteredProjects.map(renderProjectCard).join('');
}

function renderModal(project) {
  const primaryAction = getPrimaryAction(project);

  modalBody.innerHTML = `
    <div class="modal-visual" style="--project-accent: ${escapeAttribute(project.accent)};">
      ${renderProjectVisual(project, 'modal')}
      <span class="status-badge status-badge--${escapeAttribute(project.statusClass)}">
        <span class="status-badge__dot" aria-hidden="true"></span>
        ${escapeHTML(project.status)}
      </span>
    </div>

    <div class="modal-content">
      <p class="card-kicker">${escapeHTML(project.categoryLabel)}</p>
      <h2 id="modalTitle">${escapeHTML(project.title)}</h2>
      <p class="modal-lead">${escapeHTML(project.description)}</p>

      <div class="modal-details">
        <p class="modal-section-label">Project overview</p>
        <p>${escapeHTML(project.details)}</p>
      </div>

      <div class="modal-stack">
        <p class="modal-section-label">Built with</p>
        <ul class="tech-list" aria-label="Technologies used">
          ${project.tech.map(item => `<li>${escapeHTML(item)}</li>`).join('')}
        </ul>
      </div>

      <div class="modal-actions">
        <a class="button button--primary" href="${escapeAttribute(primaryAction.url)}" target="_blank" rel="noopener">
          ${escapeHTML(primaryAction.label)}
          <i class="${primaryAction.brandIcon ? 'fa-brands' : 'fa-solid'} ${primaryAction.icon}" aria-hidden="true"></i>
        </a>
        ${project.liveUrl ? `
          <a class="button button--quiet" href="${escapeAttribute(project.githubUrl)}" target="_blank" rel="noopener">
            <i class="fa-brands fa-github" aria-hidden="true"></i>
            Source code
          </a>
        ` : ''}
      </div>
    </div>
  `;
}

function openModal(projectId) {
  const project = projectsData.find(item => item.id === projectId);
  if (!project) return;

  clearTimeout(modalHideTimer);
  lastFocusedElement = document.activeElement;
  renderModal(project);
  projectModal.hidden = false;
  document.body.classList.add('modal-open');

  requestAnimationFrame(() => {
    projectModal.classList.add('is-active');
    modalClose.focus();
  });
}

function closeModal() {
  if (projectModal.hidden) return;

  projectModal.classList.remove('is-active');
  document.body.classList.remove('modal-open');

  const finishClosing = () => {
    projectModal.hidden = true;
    modalBody.innerHTML = '';
    if (lastFocusedElement && typeof lastFocusedElement.focus === 'function') {
      lastFocusedElement.focus();
    }
  };

  if (matchMedia('(prefers-reduced-motion: reduce)').matches) {
    finishClosing();
  } else {
    modalHideTimer = setTimeout(finishClosing, 220);
  }
}

function trapModalFocus(event) {
  if (event.key !== 'Tab' || projectModal.hidden) return;

  const focusableElements = [...modalCard.querySelectorAll(
    'a[href], button:not([disabled]), input:not([disabled]), [tabindex]:not([tabindex="-1"])'
  )].filter(element => !element.hidden);

  if (!focusableElements.length) return;

  const firstElement = focusableElements[0];
  const lastElement = focusableElements[focusableElements.length - 1];

  if (event.shiftKey && document.activeElement === firstElement) {
    event.preventDefault();
    lastElement.focus();
  } else if (!event.shiftKey && document.activeElement === lastElement) {
    event.preventDefault();
    firstElement.focus();
  }
}

function resetProjectIndex() {
  currentFilter = 'all';
  searchQuery = '';
  projectSearch.value = '';
  clearSearch.hidden = true;
  renderFilters();
  renderProjects();
  projectSearch.focus();
}

function readSavedTheme() {
  try {
    return localStorage.getItem('portfolio-theme');
  } catch (error) {
    return null;
  }
}

function updateThemeInterface() {
  const currentTheme = document.documentElement.dataset.theme || 'dark';
  const nextTheme = currentTheme === 'dark' ? 'light' : 'dark';
  themeToggle.setAttribute('aria-label', `Switch to ${nextTheme} theme`);
  themeToggle.title = `Switch to ${nextTheme} theme`;
  themeColorMeta.content = currentTheme === 'dark' ? '#0b0d12' : '#f3f1eb';
}

function setTheme(theme, persist = true) {
  document.documentElement.dataset.theme = theme;

  if (persist) {
    try {
      localStorage.setItem('portfolio-theme', theme);
    } catch (error) {
      // Theme still applies for the current visit when storage is unavailable.
    }
  }

  updateThemeInterface();
}

function updatePortfolioMetrics() {
  const liveProjects = projectsData.filter(project => Boolean(project.liveUrl)).length;
  const technologyTotal = new Set(projectsData.flatMap(project => project.tech.map(item => item.toLocaleLowerCase()))).size;

  document.getElementById('projectCount').textContent = String(projectsData.length).padStart(2, '0');
  document.getElementById('liveCount').textContent = String(liveProjects).padStart(2, '0');
  document.getElementById('technologyCount').textContent = `${technologyTotal}+`;
}

filterTabs.addEventListener('click', event => {
  const filterButton = event.target.closest('[data-filter]');
  if (!filterButton) return;

  currentFilter = filterButton.dataset.filter;
  filterTabs.querySelectorAll('[data-filter]').forEach(button => {
    const isActive = button.dataset.filter === currentFilter;
    button.classList.toggle('is-active', isActive);
    button.setAttribute('aria-pressed', String(isActive));
  });
  renderProjects();
});

projectSearch.addEventListener('input', event => {
  searchQuery = event.target.value.trim();
  clearSearch.hidden = !searchQuery;
  renderProjects();
});

clearSearch.addEventListener('click', () => {
  searchQuery = '';
  projectSearch.value = '';
  clearSearch.hidden = true;
  renderProjects();
  projectSearch.focus();
});

projectsGrid.addEventListener('click', event => {
  const projectOpener = event.target.closest('.project-open');
  if (projectOpener) {
    openModal(projectOpener.dataset.projectId);
    return;
  }

  if (event.target.closest('#resetFilters')) {
    resetProjectIndex();
  }
});

document.querySelector('.spotlight').addEventListener('click', event => {
  const projectOpener = event.target.closest('.project-open');
  if (projectOpener) openModal(projectOpener.dataset.projectId);
});

modalClose.addEventListener('click', closeModal);
projectModal.addEventListener('click', event => {
  if (event.target === projectModal) closeModal();
});

document.addEventListener('keydown', event => {
  if (!projectModal.hidden) {
    if (event.key === 'Escape') closeModal();
    trapModalFocus(event);
    return;
  }

  const activeTag = document.activeElement?.tagName;
  const isTyping = activeTag === 'INPUT' || activeTag === 'TEXTAREA' || document.activeElement?.isContentEditable;
  if (event.key === '/' && !isTyping && !event.metaKey && !event.ctrlKey && !event.altKey) {
    event.preventDefault();
    projectSearch.focus();
  }
});

themeToggle.addEventListener('click', () => {
  const currentTheme = document.documentElement.dataset.theme || 'dark';
  setTheme(currentTheme === 'dark' ? 'light' : 'dark');
});

const colourScheme = matchMedia('(prefers-color-scheme: light)');
colourScheme.addEventListener('change', event => {
  if (!readSavedTheme()) setTheme(event.matches ? 'light' : 'dark', false);
});

const siteHeader = document.querySelector('.site-header');
function updateHeaderState() {
  siteHeader.classList.toggle('is-scrolled', window.scrollY > 12);
}

window.addEventListener('scroll', updateHeaderState, { passive: true });

renderFilters();
renderProjects();
updatePortfolioMetrics();
updateThemeInterface();
updateHeaderState();
