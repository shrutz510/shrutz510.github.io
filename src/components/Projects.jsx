import Section from './Section';
import Tags from './Tags';
import { projects } from '../data/portfolio';

const Projects = () => (
  <Section id="projects" label="Projects" title="Things I've built">
    {projects.map((project) => (
      <div key={project.title} className="card project-card">
        <a className="project-thumb" href={project.link} target="_blank" rel="noopener noreferrer" tabIndex={-1}>
          <img src={project.image} alt={`${project.title} preview`} loading="lazy" />
        </a>
        <div>
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          <Tags items={project.tags} />
        </div>
        <a className="project-link" href={project.link} target="_blank" rel="noopener noreferrer">
          View ↗
        </a>
      </div>
    ))}
  </Section>
);

export default Projects;
