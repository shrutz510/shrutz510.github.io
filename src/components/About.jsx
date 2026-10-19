import Section from './Section';
import { profile } from '../data/portfolio';

const facts = [
  { label: 'Focus Area', value: profile.focus },
  { label: 'GitHub', value: profile.github.replace('https://', ''), link: profile.github },
  { label: 'LinkedIn', value: profile.linkedin.replace('https://www.', ''), link: profile.linkedin },
];

const About = () => (
  <Section id="about" label="About Me" title="Passionate about data-driven solutions" tinted>
    <div className="about-grid">
      <div className="about-text">
        <p>
          I'm a Software Developer and AI Engineer with a passion for building intelligent applications that solve
          real-world problems. I enjoy the full journey — from architecture and design to development, deployment, and
          optimization of production systems.
        </p>
        <p>
          I thrive at the intersection of software engineering and AI, creating systems that are not just powerful but
          scalable, maintainable, and user-centric. I'm always learning, whether it's cutting-edge AI techniques or best
          practices in full-stack development.
        </p>
        <p>
          Outside of work, you'll find me exploring AI advancements, contributing to open-source projects, or building
          side projects that push my technical boundaries.
        </p>
      </div>
      <div className="facts">
        {facts.map((fact) => (
          <div key={fact.label} className="fact">
            <div className="fact-label">{fact.label}</div>
            <div className="fact-value">
              {fact.link ? (
                <a href={fact.link} target="_blank" rel="noopener noreferrer">
                  {fact.value}
                </a>
              ) : (
                fact.value
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  </Section>
);

export default About;
