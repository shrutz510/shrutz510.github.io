import Section from './Section';
import TimelineCard from './TimelineCard';
import { experience } from '../data/portfolio';

const Experience = () => (
  <Section id="experience" label="Work Experience" title="Where I've worked">
    {experience.map((job) => (
      <TimelineCard
        key={`${job.company}-${job.period}`}
        logo={job.logo}
        icon="🚀"
        title={job.title}
        date={job.period}
        subtitle={`${job.company} · ${job.location}`}
        bullets={job.details}
      />
    ))}
  </Section>
);

export default Experience;
