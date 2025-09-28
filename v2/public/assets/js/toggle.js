const STORAGE_KEY = 'theme';

function getStoredTheme() {
  try {
    return localStorage.getItem(STORAGE_KEY);
  } catch (_) {
    return null;
  }
}

function storeTheme(value) {
  try {
    localStorage.setItem(STORAGE_KEY, value);
  } catch (_) {
    /* no-op */
  }
}

function applyTheme(isLight) {
  document.body.classList.toggle('light-mode', isLight);
  document.documentElement.setAttribute('data-theme', isLight ? 'light' : 'dark');
}

function computeInitialPreference() {
  const stored = getStoredTheme();
  if (stored === 'light' || stored === 'dark') {
    return stored === 'light';
  }

  const prefersLight = window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches;
  if (prefersLight) {
    return true;
  }

  const hours = new Date().getHours();
  return hours > 7 && hours < 20;
}

function initToggle() {
  const toggle = document.querySelector('.toggle');
  if (!toggle) return;

  const initialIsLight = computeInitialPreference();
  toggle.checked = initialIsLight;
  applyTheme(toggle.checked);

  toggle.addEventListener('change', () => {
    const isLight = toggle.checked;
    applyTheme(isLight);
    storeTheme(isLight ? 'light' : 'dark');
  });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initToggle);
} else {
  initToggle();
}
