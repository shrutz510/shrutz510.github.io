import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import sections from './sections';
import useHashRoute from './hooks/useHashRoute';

const App = () => {
  const route = useHashRoute();
  const current = sections.find((section) => section.id === route);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 400);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <Navbar active={current?.id} />
      <main>{current ? <current.Component /> : <Home />}</main>
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
