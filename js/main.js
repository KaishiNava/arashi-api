(() => {
  const html = document.documentElement;
  const saved = localStorage.getItem('arashi-theme');
  const preferred = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  html.dataset.theme = saved || preferred;
  document.querySelectorAll('.theme-toggle').forEach(btn => btn.addEventListener('click', () => {
    html.dataset.theme = html.dataset.theme === 'dark' ? 'light' : 'dark';
    localStorage.setItem('arashi-theme', html.dataset.theme);
  }));
  const sidebar = document.querySelector('.sidebar');
  const scrim = document.querySelector('.scrim');
  const open = () => { sidebar?.classList.add('open'); scrim?.classList.add('show'); };
  const close = () => { sidebar?.classList.remove('open'); scrim?.classList.remove('show'); };
  document.querySelector('.menu-toggle')?.addEventListener('click', open);
  document.querySelector('.close-menu')?.addEventListener('click', close);
  scrim?.addEventListener('click', close);
  document.addEventListener('keydown', e => { if (e.key === 'Escape') close(); });
  document.querySelectorAll('.copy-btn').forEach(btn => btn.addEventListener('click', async () => {
    try { await navigator.clipboard.writeText(btn.dataset.copy); btn.textContent = 'Copied!'; setTimeout(() => btn.textContent = 'Copy', 1300); }
    catch { btn.textContent = 'Unavailable'; }
  }));
})();
