import { profile } from '../data/portfolio';

const Hero = () => (
  <section id="hero" className="section hero">
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
    </div>
  </section>
);

export default Hero;
