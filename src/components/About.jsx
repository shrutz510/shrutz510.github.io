import { profile } from '../data/portfolio';

const facts = [
  { label: 'Currently', value: 'ML Engineer at a stealth AI startup' },
  { label: 'Education', value: 'M.S. Computer Engineering, NYU' },
  { label: 'GitHub', value: profile.github.replace('https://', ''), link: profile.github },
  { label: 'LinkedIn', value: profile.linkedin.replace('https://www.', ''), link: profile.linkedin },
];

const About = () => (
  <div className="about-grid">
    <div className="about-text">
      <p>
        I'm a Machine Learning Engineer at a stealth AI startup in New York, building the next generation of language
        models.
      </p>
      <p>
        Before that, I took ML systems from idea to production. I built WavePulse, a platform that streamed, transcribed
        and analyzed 480,000 hours of radio from 396 stations with 99.7% availability. At George Mason University I
        architected a synthetic iris generation pipeline with Stable Diffusion 3.5, DreamBooth and LoRA, and built a
        state-of-the-art anomaly detector for hyperspectral fingerprints. At UBS I shipped internal platforms that cut
        device downtime by 75% and were rolled out across divisions worldwide.
      </p>
      <p>
        That work has been published at The Web Conference, IJCB and Scientific Reports. Lately I've been building LLM
        agents, including a computer-use system that learns tasks in legacy web apps and replays them safely without a
        model in the loop.
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
);

export default About;
