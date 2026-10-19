import { useEffect, useState } from 'react';

const media = window.matchMedia('(prefers-color-scheme: dark)');

const readSaved = () => {
  try {
    const saved = localStorage.getItem('theme');
    return saved === 'light' || saved === 'dark' ? saved : null;
  } catch {
    return null;
  }
};

// Follows the OS setting until the visitor picks a theme, then remembers their choice.
const useTheme = () => {
  const [saved, setSaved] = useState(readSaved);
  const [systemDark, setSystemDark] = useState(media.matches);

  useEffect(() => {
    const onChange = (e) => setSystemDark(e.matches);
    media.addEventListener('change', onChange);
    return () => media.removeEventListener('change', onChange);
  }, []);

  const theme = saved ?? (systemDark ? 'dark' : 'light');

  const toggleTheme = () => {
    const next = theme === 'dark' ? 'light' : 'dark';
    setSaved(next);
    document.documentElement.dataset.theme = next;
    try {
      localStorage.setItem('theme', next);
    } catch {
      // Storage can be blocked (private mode); the choice still applies for this visit.
    }
  };

  return { theme, toggleTheme };
};

export default useTheme;
