import Section from './Section';
import TimelineCard from './TimelineCard';
import { publications } from '../data/portfolio';

const Publications = () => (
  <Section id="publications" label="Publications" title="Research & Papers" tinted>
    {publications.map((pub) => (
      <TimelineCard key={pub.title} icon="📄" title={pub.title} link={pub.link} date={pub.year} subtitle={pub.venue}>
        <p className="card-text">{pub.authors}</p>
        {pub.abstract && <p className="card-text">{pub.abstract}</p>}
      </TimelineCard>
    ))}
  </Section>
);

export default Publications;
