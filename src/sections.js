import Skills from './components/Skills';
import Experience from './components/Experience';
import Education from './components/Education';
import Publications from './components/Publications';
import Projects from './components/Projects';
import Volunteering from './components/Volunteering';

// Section pages: drive the nav, the home-page cards and routing.
const sections = [
  {
    id: 'experience',
    label: 'Experience',
    icon: '💼',
    Component: Experience,
  },
  {
    id: 'projects',
    label: 'Projects',
    icon: '🛠️',
    Component: Projects,
  },
  {
    id: 'publications',
    label: 'Publications',
    icon: '📄',
    Component: Publications,
  },
  {
    id: 'skills',
    label: 'Skills',
    icon: '🧠',
    Component: Skills,
  },
  {
    id: 'education',
    label: 'Education',
    icon: '🎓',
    Component: Education,
  },
  {
    id: 'volunteering',
    label: 'Volunteering',
    icon: '🤝',
    Component: Volunteering,
  },
];

export default sections;
