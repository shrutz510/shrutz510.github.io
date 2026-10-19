import Section from './Section';
import Tags from './Tags';
import { skills } from '../data/portfolio';

const Skills = () => (
  <Section id="skills" label="Skills" title="What I work with" wide>
    <div className="skills-grid">
      {skills.map((skill) => (
        <div key={skill.title} className="skill-card">
          <div className="skill-icon">{skill.icon}</div>
          <h3>{skill.title}</h3>
          <p>{skill.description}</p>
          <Tags items={skill.tags} />
        </div>
      ))}
    </div>
  </Section>
);

export default Skills;
