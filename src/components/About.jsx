import Section from './Section';
import { profile } from '../data/portfolio';

const facts = [
  { label: 'Currently', value: 'ML Engineer at a stealth AI startup' },
  { label: 'Education', value: 'M.S. Computer Engineering, NYU' },
  { label: 'GitHub', value: profile.github.replace('https://', ''), link: profile.github },
  { label: 'LinkedIn', value: profile.linkedin.replace('https://www.', ''), link: profile.linkedin },
];

const About = () => (
  <Section id="about" label="About Me" title="From research papers to production systems" tinted>
    <div className="about-grid">
      <div className="about-text">
        <p>
          I'm a Machine Learning Engineer at a stealth AI startup, where I work on language models. Before that, I was a
          research associate at George Mason University and NYU, working on synthetic iris generation with Stable
          Diffusion, anomaly detection in hyperspectral fingerprints, and how generative attribute editing breaks face
          recognition.
        </p>
        <p>
          That research has turned into papers at The Web Conference, IJCB and <em>Scientific Reports</em>. I also like
          building the systems around models: WavePulse transcribes and analyzes live radio from nearly 400 stations,
          and my recent projects include a RAG system over SEC filings and a computer-use agent that learns tasks in
          legacy web apps and replays them without an LLM in the loop.
        </p>
        <p>
          I care about ML that holds up outside a notebook: measurable, reproducible, and safe to run in production.
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
