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
