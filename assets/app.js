// year
document.querySelectorAll('#year').forEach(el => el.textContent = new Date().getFullYear());

// simple tabs on Home page demo block
const tabs = document.querySelectorAll('.tab');
if (tabs.length) {
  tabs.forEach(btn => {
    btn.addEventListener('click', () => {
      tabs.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      document.querySelectorAll('.pane').forEach(p => p.style.display = 'none');
      const target = document.querySelector(btn.dataset.target);
      if (target) target.style.display = 'block';
    });
  });
}

// smooth scroll for in-page anchors
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const id = a.getAttribute('href');
    if (id.length > 1) {
      const el = document.querySelector(id);
      if (el) {
        e.preventDefault();
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        history.replaceState(null, "", id);
      }
    }
  });
});

// copy-to-clipboard for code blocks
document.querySelectorAll('[data-copy]').forEach(btn => {
  btn.addEventListener('click', () => {
    const sel = btn.getAttribute('data-copy');
    const el = document.querySelector(sel);
    if (!el) return;
    const text = el.textContent;
    navigator.clipboard.writeText(text).then(() => {
      const prev = btn.textContent;
      btn.textContent = 'Copied!';
      setTimeout(() => (btn.textContent = prev), 1200);
    });
  });
});

