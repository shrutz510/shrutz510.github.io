import Section from './Section';
import TimelineCard from './TimelineCard';
import { volunteering } from '../data/portfolio';

const Volunteering = () => (
  <Section id="volunteering" label="Volunteering" title="Where I've contributed">
    {volunteering.map((vol) => (
      <TimelineCard
        key={vol.organization}
        logo={vol.logo}
        icon="🤝"
        title={vol.title}
        date={vol.period}
        subtitle={`${vol.organization} · ${vol.category}`}
        bullets={vol.details}
      />
    ))}
  </Section>
);

export default Volunteering;
