import Section from './Section';
import ShowMore from './ShowMore';
import TimelineCard from './TimelineCard';
import { volunteering } from '../data/portfolio';

const Volunteering = () => (
  <Section id="volunteering" label="Volunteering" title="Where I've contributed">
    <ShowMore items={volunteering} limit={2} noun="roles">
      {(vol) => (
        <TimelineCard
          key={vol.organization}
          logo={vol.logo}
          icon="🤝"
          title={vol.title}
          date={vol.period}
          subtitle={`${vol.organization} · ${vol.category}`}
          bullets={vol.details}
        />
      )}
    </ShowMore>
  </Section>
);

export default Volunteering;
