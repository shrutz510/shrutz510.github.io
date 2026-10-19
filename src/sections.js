import Skills from './components/Skills';
import Experience from './components/Experience';
import Education from './components/Education';
import Publications from './components/Publications';
import Projects from './components/Projects';
import Volunteering from './components/Volunteering';
import { experience, education, publications, projects, skills, volunteering } from './data/portfolio';

// Section pages: drive the nav, the home-page cards and routing.
const sections = [
  {
    id: 'experience',
    label: 'Experience',
    icon: '💼',
    summary: `${experience.length} roles`,
    Component: Experience,
  },
  {
    id: 'projects',
    label: 'Projects',
    icon: '🛠️',
    summary: `${projects.length} projects`,
    Component: Projects,
  },
  {
    id: 'publications',
    label: 'Publications',
    icon: '📄',
    summary: `${publications.length} papers`,
    Component: Publications,
  },
  {
    id: 'skills',
    label: 'Skills',
    icon: '🧠',
    summary: `${skills.length} areas`,
    Component: Skills,
  },
  {
    id: 'education',
    label: 'Education',
    icon: '🎓',
    summary: `${education.length} degrees`,
    Component: Education,
  },
  {
    id: 'volunteering',
    label: 'Volunteering',
    icon: '🤝',
    summary: `${volunteering.length} roles`,
    Component: Volunteering,
  },
];

export default sections;
