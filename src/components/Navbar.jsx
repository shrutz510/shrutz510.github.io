import { useEffect, useState } from 'react';
import { profile } from '../data/portfolio';
import useTheme from '../hooks/useTheme';

const LINKS = ['about', 'skills', 'experience', 'education', 'publications', 'projects', 'volunteering'];

const Navbar = ({ activeSection }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

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
        <button className="navbar-brand" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          {profile.name}
        </button>
        <ul id="nav-links" className="navbar-links">
          {LINKS.map((id) => (
            <li key={id}>
              <a
                href={`#${id}`}
                className={`navbar-link${activeSection === id ? ' active' : ''}`}
                onClick={() => setMenuOpen(false)}
              >
                {id.charAt(0).toUpperCase() + id.slice(1)}
              </a>
            </li>
          ))}
        </ul>
        <div className="navbar-actions">
          <button
            className="icon-button"
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
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
