import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Education from './components/Education';
import Publications from './components/Publications';
import Projects from './components/Projects';
import Volunteering from './components/Volunteering';
import useScrollSpy from './hooks/useScrollSpy';

const App = () => {
  const { activeSection, scrolled } = useScrollSpy();

  return (
    <>
      <Navbar activeSection={activeSection} />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Education />
        <Publications />
        <Projects />
        <Volunteering />
      </main>
      <footer className="footer">
        <div className="container">© {new Date().getFullYear()} Shruti Wagle · Built with ♥ and deployed with React</div>
      </footer>
      <button
        className={`scroll-top${scrolled ? ' visible' : ''}`}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        title="Scroll to top"
        aria-label="Scroll to top"
      >
        ↑
      </button>
    </>
  );
};

export default App;
