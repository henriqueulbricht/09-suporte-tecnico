/**
 * app.js — Ponto de entrada: inicializa todos os módulos
 */

import { initSidebar } from './sidebar.js';
import { initFilters } from './filters.js';
import { METRICS, CATEGORIES } from './data.js';

document.addEventListener('DOMContentLoaded', () => {
  renderMetrics();
  renderFilterChips();
  initSidebar();
  initFilters();
  initRouter();
});

function initRouter() {
  const navItems = document.querySelectorAll('.sidebar__nav .nav-item');
  const pages = document.querySelectorAll('.page-view');

  navItems.forEach(item => {
    item.addEventListener('click', (e) => {
      e.preventDefault();
      
      // Atualizar link ativo na sidebar
      navItems.forEach(nav => nav.classList.remove('is-active'));
      item.classList.add('is-active');

      // Descobrir qual página mostrar
      const targetId = item.id.replace('nav-', 'page-');
      
      // Esconder todas e mostrar a alvo
      pages.forEach(page => {
        if (page.id === targetId) {
          page.style.display = 'block';
        } else {
          page.style.display = 'none';
        }
      });
      
      // No mobile, fechar o sidebar após clicar
      if (window.innerWidth < 768) {
        document.querySelector('.sidebar-overlay').click();
      }
    });
  });
}

function renderMetrics() {
  const grid = document.getElementById('metrics-grid');
  if (!grid) return;

  grid.innerHTML = METRICS.map(m => `
    <div class="metric-card">
      <div>
        <p class="metric-card__label">${m.label}</p>
        <p class="metric-card__value">${m.value}</p>
      </div>
      <div class="metric-card__icon ${m.iconVariant}">
        <span class="material-symbols-outlined"
          style="${m.iconFill ? "font-variation-settings:'FILL' 1" : ''}"
          aria-hidden="true">${m.icon}</span>
      </div>
    </div>
  `).join('');
}

function renderFilterChips() {
  const container = document.getElementById('filters-container');
  if (!container) return;

  container.innerHTML = CATEGORIES.map((cat, i) => `
    <button
      class="filter-chip ${i === 0 ? 'is-active' : ''}"
      data-filter="${cat.id}"
      aria-pressed="${i === 0}"
      id="filter-${cat.id}"
    >${cat.label}</button>
  `).join('');
}
