import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Education from './components/Education';
import Publications from './components/Publications';
import Projects from './components/Projects';
import Volunteering from './components/Volunteering';
import { experience, education, publications, projects, skills, volunteering } from './data/portfolio';

// Every page of the site: drives the nav, the home-page cards and routing.
const sections = [
  {
    id: 'about',
    label: 'About',
    icon: '👋',
    summary: 'ML Engineer building language models, agents and production ML systems.',
    Component: About,
  },
  {
    id: 'experience',
    label: 'Experience',
    icon: '💼',
    summary: `${experience.length} roles · ${experience[0].title} at a stealth AI startup`,
    Component: Experience,
  },
  {
    id: 'projects',
    label: 'Projects',
    icon: '🛠️',
    summary: `${projects.length} projects · ${projects[0].title}, ${projects[1].title} and more`,
    Component: Projects,
  },
  {
    id: 'publications',
    label: 'Publications',
    icon: '📄',
    summary: `${publications.length} papers · Scientific Reports, The Web Conference, IJCB`,
    Component: Publications,
  },
  {
    id: 'skills',
    label: 'Skills',
    icon: '🧠',
    summary: `${skills.length} areas · ${skills.map((s) => s.title).slice(0, 3).join(', ')}`,
    Component: Skills,
  },
  {
    id: 'education',
    label: 'Education',
    icon: '🎓',
    summary: education.map((e) => `${e.degree.split(' ')[0]} ${e.school.split(',')[0]}`).join(' · '),
    Component: Education,
  },
  {
    id: 'volunteering',
    label: 'Volunteering',
    icon: '🤝',
    summary: `${volunteering.length} roles · ${volunteering.map((v) => v.organization.split(' - ')[0]).slice(0, 3).join(', ')}`,
    Component: Volunteering,
  },
];

export default sections;
