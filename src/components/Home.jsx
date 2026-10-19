import { profile } from '../data/portfolio';
import sections from '../sections';

const Home = () => (
  <section className="home">
    <div className="container">
      <p className="hero-eyebrow">{profile.role}</p>
      <h1 className="hero-title">Hi, I'm {profile.name} 👋</h1>
      <p className="hero-tagline">{profile.tagline}</p>
      <div className="button-group">
        <a className="button" href={profile.github} target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
        <a className="button" href={profile.linkedin} target="_blank" rel="noopener noreferrer">
          LinkedIn
        </a>
      </div>

      <div className="section-cards">
        {sections.map((section) => (
          <a key={section.id} className="card section-card" href={`#/${section.id}`}>
            <span className="section-card-icon" aria-hidden="true">
              {section.icon}
            </span>
            <span className="section-card-title">
              {section.label} <span className="section-card-arrow">→</span>
            </span>
            <span className="section-card-summary">{section.summary}</span>
          </a>
        ))}
      </div>
    </div>
  </section>
);

export default Home;
