import { useEffect, useState } from 'react';

// Tracks which section is in view and whether the page has scrolled past the hero.
const useScrollSpy = (offset = 80) => {
  const [activeSection, setActiveSection] = useState('');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 300);

      let current = '';
      document.querySelectorAll('section[id]').forEach((section) => {
        if (window.scrollY >= section.offsetTop - offset) current = section.id;
      });
      setActiveSection(current);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [offset]);

  return { activeSection, scrolled };
};

export default useScrollSpy;
