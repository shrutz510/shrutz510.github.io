import Section from './Section';
import ShowMore from './ShowMore';
import TimelineCard from './TimelineCard';
import { experience } from '../data/portfolio';

const Experience = () => (
  <Section id="experience" label="Work Experience" title="Where I've worked">
    <ShowMore items={experience} limit={4} noun="roles">
      {(job) => (
        <TimelineCard
          key={`${job.company}-${job.period}`}
          logo={job.logo}
          icon="🚀"
          title={job.title}
          date={job.period}
          subtitle={`${job.company} · ${job.location}`}
          bullets={job.details}
        />
      )}
    </ShowMore>
  </Section>
);

export default Experience;
