import { useEffect, useState } from 'react';
import { profile } from '../data/portfolio';
import sections from '../sections';
import useTheme from '../hooks/useTheme';

const Navbar = ({ active }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const nextTheme = theme === 'dark' ? 'light' : 'dark';

  // Close the mobile menu on Escape.
  useEffect(() => {
    if (!menuOpen) return undefined;
    const onKey = (e) => e.key === 'Escape' && setMenuOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [menuOpen]);

  return (
    <nav className={`navbar${menuOpen ? ' menu-open' : ''}`}>
      <div className="container navbar-inner">
        <a className="navbar-brand" href="#/" onClick={() => setMenuOpen(false)}>
          {profile.name}
        </a>
        <ul id="nav-links" className="navbar-links">
          {sections.map(({ id, label }) => (
            <li key={id}>
              <a
                href={`#/${id}`}
                className={`navbar-link${active === id ? ' active' : ''}`}
                aria-current={active === id ? 'page' : undefined}
                onClick={() => setMenuOpen(false)}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
        <div className="navbar-actions">
          <button
            className="icon-button"
            onClick={toggleTheme}
            aria-label={`Switch to ${nextTheme} mode`}
            title={`Switch to ${nextTheme} mode`}
          >
            {theme === 'dark' ? '☀' : '☾'}
          </button>
          <button
            className="icon-button menu-button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-expanded={menuOpen}
            aria-controls="nav-links"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          >
            {menuOpen ? '✕' : '☰'}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
