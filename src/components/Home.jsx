import About from './About';
import { profile } from '../data/portfolio';
import sections from '../sections';

const Home = () => (
  <section className="home">
    <div className="container">
      <h1 className="hero-title">Hi, I'm {profile.name} 👋</h1>
      <About />

      <div className="section-cards">
        {sections.map((section) => (
          <a key={section.id} className="card section-card" href={`#/${section.id}`}>
            <span className="section-card-title">
              <span aria-hidden="true">{section.icon}</span>
              {section.label}
              <span className="section-card-arrow">→</span>
            </span>
          </a>
        ))}
      </div>
    </div>
  </section>
);

export default Home;
