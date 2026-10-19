import Section from './Section';
import TimelineCard from './TimelineCard';
import Tags from './Tags';
import { education } from '../data/portfolio';

const Education = () => (
  <Section id="education" label="Education" title="Where I studied">
    {education.map((edu) => (
      <TimelineCard
        key={edu.degree}
        logo={edu.logo}
        icon="🎓"
        title={edu.degree}
        date={edu.period}
        subtitle={`${edu.school} · ${edu.location}`}
      >
        <p className="card-text">{edu.details}</p>
        <Tags items={edu.badges} />
      </TimelineCard>
    ))}
  </Section>
);

export default Education;
