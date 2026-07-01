/**
 * sidebar.js — Toggle do sidebar mobile com overlay e animação
 */

export function initSidebar() {
  const sidebar  = document.getElementById('sidebar');
  const overlay  = document.getElementById('sidebar-overlay');
  const btnOpen  = document.getElementById('btn-hamburger');

  if (!sidebar || !overlay || !btnOpen) return;

  btnOpen.addEventListener('click', openSidebar);
  overlay.addEventListener('click', closeSidebar);

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeSidebar();
  });

  function openSidebar() {
    sidebar.classList.add('is-open');
    overlay.classList.add('is-visible');
    document.body.style.overflow = 'hidden';
    btnOpen.setAttribute('aria-expanded', 'true');
  }

  function closeSidebar() {
    sidebar.classList.remove('is-open');
    overlay.classList.remove('is-visible');
    document.body.style.overflow = '';
    btnOpen.setAttribute('aria-expanded', 'false');
  }
}
