import { Route, BrowserRouter as Router, Routes, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { ActiveRouteProvider } from './components/context/ActiveRouteContext/ActiveRouteContext';
import { forceChakraDarkTheme } from './utils/utils';

import DisplayHeader from './components/landing/DisplayHeader/DisplayHeader';
import LandingPage from './pages/LandingPage';
import ShowcasePage from './pages/ShowcasePage';

function AppContent() {
  const location = useLocation();

  const getActiveItem = () => {
    if (location.pathname === '/') return 'home';
    if (location.pathname === '/showcase') return 'showcase';
    return null;
  };

  const isCategoryPage = location.pathname.match(/^\/[^/]+\/[^/]+$/);

  return (
    <>
      {!isCategoryPage && <DisplayHeader activeItem={getActiveItem()} />}
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route exact path="/showcase" element={<ShowcasePage />} />
      </Routes>
    </>
  );
}

export default function App() {
  useEffect(() => {
    forceChakraDarkTheme();
  }, []);

  return (
    <Router>
      <ActiveRouteProvider>
        <AppContent />
      </ActiveRouteProvider>
    </Router>
  );
}
