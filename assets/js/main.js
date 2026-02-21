/* ─────────────────────────────────────────
   ANTONIO ROMEO — main.js
   ───────────────────────────────────────── */

document.addEventListener('DOMContentLoaded', () => {

  // ─── Nav shadow on scroll
  const nav = document.getElementById('nav');
  if (nav) {
    window.addEventListener('scroll', () => {
      nav.style.boxShadow = window.scrollY > 40
        ? '0 4px 30px rgba(20,18,16,0.08)' : 'none';
    }, { passive: true });
  }

  // ─── Reveal on scroll
  const reveals = document.querySelectorAll('.reveal');
  if (reveals.length) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((e, i) => {
        if (e.isIntersecting) {
          setTimeout(() => e.target.classList.add('visible'), i * 80);
          observer.unobserve(e.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
    reveals.forEach(el => observer.observe(el));
  }

  // ─── Newsletter form
  const nlForm = document.querySelector('.nl-form');
  if (nlForm) {
    nlForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const input = nlForm.querySelector('.nl-input');
      if (input.value && input.value.includes('@')) {
        input.value = '';
        input.placeholder = '✓ ¡Apuntado! Te escribiremos pronto.';
        input.style.color = 'rgba(185,151,106,0.9)';
      }
    });
  }

  // ─── Hemeroteca filters (only runs on hemeroteca page)
  const filterBtns = document.querySelectorAll('.filter-btn');
  const cronicaItems = document.querySelectorAll('.cronica-item');
  if (filterBtns.length && cronicaItems.length) {
    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const filter = btn.dataset.filter;

        // Active state
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        // Show/hide
        cronicaItems.forEach(item => {
          const match = filter === 'all' || item.dataset.tematica === filter;
          item.style.display = match ? 'block' : 'none';
          if (match) {
            item.style.opacity = '0';
            item.style.transform = 'translateY(12px)';
            setTimeout(() => {
              item.style.opacity = '1';
              item.style.transform = 'translateY(0)';
            }, 50);
          }
        });

        // Update count
        const visible = document.querySelectorAll('.cronica-item[style*="block"]').length;
        const counter = document.querySelector('.results-count');
        if (counter) counter.textContent = `${filter === 'all' ? cronicaItems.length : visible} crónicas`;
      });
    });
  }

});
