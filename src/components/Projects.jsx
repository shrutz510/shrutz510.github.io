import Section from './Section';
import Tags from './Tags';
import { projects } from '../data/portfolio';

const Projects = () => (
  <Section id="projects" label="Projects" title="Things I've built">
    <div className="projects-grid">
      {projects.map((project) => (
        <a
          key={project.title}
          className="card project-card"
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="project-thumb">
            <img src={project.image} alt="" loading="lazy" />
          </div>
          <div className="project-body">
            <h3>
              {project.title} <span className="project-arrow">↗</span>
            </h3>
            <p>{project.description}</p>
            <Tags items={project.tags} />
          </div>
        </a>
      ))}
    </div>
  </Section>
);

export default Projects;
