import Section from './Section';
import TimelineCard from './TimelineCard';
import { publications } from '../data/portfolio';

const Publications = () => (
  <Section id="publications" label="Publications" title="Research & Papers" tinted>
    {publications.map((pub) => (
      <TimelineCard
        key={pub.title}
        logo={pub.logo}
        icon="📄"
        title={pub.title}
        link={pub.link}
        date={pub.year}
        subtitle={pub.venue}
      >
        <p className="card-text">{pub.authors}</p>
        {pub.abstract && (
          <details className="abstract">
            <summary>Abstract</summary>
            <p className="card-text">{pub.abstract}</p>
          </details>
        )}
      </TimelineCard>
    ))}
  </Section>
);

export default Publications;
