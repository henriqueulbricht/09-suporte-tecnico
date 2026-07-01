/**
 * filters.js — Filtro por categoria e pesquisa de chamados
 */

import { TICKETS, CATEGORY_CONFIG, PRIORITY_CONFIG, STATUS_CONFIG } from './data.js';

const ROWS_PER_PAGE = 8;

let activeCategory = 'all';
let searchQuery    = '';
let currentPage    = 1;

export function initFilters() {
  const chips     = document.querySelectorAll('[data-filter]');
  const searchEl  = document.getElementById('search-input');

  chips.forEach(chip => {
    chip.addEventListener('click', () => {
      activeCategory = chip.dataset.filter;
      currentPage = 1;
      updateActiveChip(chips, chip);
      renderTable();
    });
  });

  if (searchEl) {
    searchEl.addEventListener('input', (e) => {
      searchQuery = e.target.value.trim().toLowerCase();
      currentPage = 1;
      renderTable();
    });
  }

  renderTable();
  initPagination();
}

function updateActiveChip(chips, activeChip) {
  chips.forEach(c => c.classList.remove('is-active'));
  activeChip.classList.add('is-active');
}

function getFilteredTickets() {
  return TICKETS.filter(ticket => {
    const matchCategory = activeCategory === 'all' || ticket.category === activeCategory;
    const matchSearch   = !searchQuery
      || ticket.id.toLowerCase().includes(searchQuery)
      || ticket.subject.toLowerCase().includes(searchQuery);
    return matchCategory && matchSearch;
  });
}

function renderTable() {
  const tbody       = document.getElementById('tickets-tbody');
  const countLabel  = document.getElementById('page-label');
  if (!tbody) return;

  const filtered    = getFilteredTickets();
  const totalPages  = Math.max(1, Math.ceil(filtered.length / ROWS_PER_PAGE));
  currentPage       = Math.min(currentPage, totalPages);

  const start       = (currentPage - 1) * ROWS_PER_PAGE;
  const pageTickets = filtered.slice(start, start + ROWS_PER_PAGE);

  if (countLabel) {
    countLabel.textContent = `Página ${currentPage} de ${totalPages}`;
  }

  updatePaginationButtons(currentPage, totalPages);

  if (pageTickets.length === 0) {
    tbody.innerHTML = `<tr><td colspan="6" class="table-empty">Nenhum chamado encontrado.</td></tr>`;
    return;
  }

  tbody.innerHTML = pageTickets.map(buildRow).join('');
}

function buildRow(ticket) {
  const cat      = CATEGORY_CONFIG[ticket.category] ?? { label: ticket.category, badgeClass: '' };
  const priority = PRIORITY_CONFIG[ticket.priority] ?? { label: ticket.priority, dotClass: '', labelClass: '' };
  const status   = STATUS_CONFIG[ticket.status]     ?? { label: ticket.status,   badgeClass: '' };
  const accent   = ticket.hasAccent ? 'has-accent' : '';

  return `
    <tr class="${accent}">
      <td class="ticket-id">${ticket.id}</td>
      <td>${ticket.subject}</td>
      <td>
        <span class="badge ${cat.badgeClass}">${cat.label}</span>
      </td>
      <td>
        <span class="priority">
          <span class="priority__dot ${priority.dotClass}"></span>
          <span class="${priority.labelClass}">${priority.label}</span>
        </span>
      </td>
      <td>
        <span class="status-badge ${status.badgeClass}">${status.label}</span>
      </td>
      <td class="align-right">
        <span class="table-actions">
          <button class="btn-icon" title="Visualizar chamado ${ticket.id}" aria-label="Visualizar ${ticket.id}">
            <span class="material-symbols-outlined" aria-hidden="true">visibility</span>
          </button>
          <button class="btn-icon" title="Atribuir chamado ${ticket.id}" aria-label="Atribuir ${ticket.id}">
            <span class="material-symbols-outlined" aria-hidden="true">person_add</span>
          </button>
        </span>
      </td>
    </tr>`;
}

function initPagination() {
  const btnPrev = document.getElementById('btn-prev-page');
  const btnNext = document.getElementById('btn-next-page');

  btnPrev?.addEventListener('click', () => {
    if (currentPage > 1) { currentPage--; renderTable(); }
  });

  btnNext?.addEventListener('click', () => {
    const total = Math.ceil(getFilteredTickets().length / ROWS_PER_PAGE);
    if (currentPage < total) { currentPage++; renderTable(); }
  });
}

function updatePaginationButtons(page, totalPages) {
  const btnPrev = document.getElementById('btn-prev-page');
  const btnNext = document.getElementById('btn-next-page');
  if (btnPrev) btnPrev.disabled = page <= 1;
  if (btnNext) btnNext.disabled = page >= totalPages;
}
