import { useEffect, useState } from 'react';

// "#/projects" (or legacy "#projects") -> "projects"; anything else -> "".
const readRoute = () => window.location.hash.replace(/^#\/?/, '');

const useHashRoute = () => {
  const [route, setRoute] = useState(readRoute);

  useEffect(() => {
    const onChange = () => {
      setRoute(readRoute());
      window.scrollTo(0, 0);
    };
    window.addEventListener('hashchange', onChange);
    return () => window.removeEventListener('hashchange', onChange);
  }, []);

  return route;
};

export default useHashRoute;
