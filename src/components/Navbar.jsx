import { profile } from '../data/portfolio';

const LINKS = ['about', 'experience', 'education', 'publications', 'projects', 'volunteering'];

const Navbar = ({ activeSection }) => (
  <nav className="navbar">
    <div className="container navbar-inner">
      <button className="navbar-brand" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
        {profile.name}
      </button>
      <ul className="navbar-links">
        {LINKS.map((id) => (
          <li key={id}>
            <a href={`#${id}`} className={`navbar-link${activeSection === id ? ' active' : ''}`}>
              {id.charAt(0).toUpperCase() + id.slice(1)}
            </a>
          </li>
        ))}
      </ul>
    </div>
  </nav>
);

export default Navbar;
