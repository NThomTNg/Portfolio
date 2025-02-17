import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Navbar from "./components/Layout/Navbar";
import Footer from "./components/Layout/Footer";
import Header from "./components/Header/Header";
import Socials from "./components/Socials";
import LoadingScreen from "./components/LoadingScreen";
import Tech from "./components/Tech";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import JavaGameProject from "./pages/javaGameProject";
import Swipload from './pages/Swipload';
import Nosted from './pages/Nosted';
import Bachelor from './pages/Bachelor';

const AppContent = () => {
  const location = useLocation();
  const [loading, setLoading] = useState(true);
  const [_showButton, setShowButton] = useState(false);

  useEffect(() => {
    setTimeout(() => setLoading(false), 2000);
    
    const handleScroll = () => {
      setShowButton(window.scrollY > 300);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const shouldShowNavbar = location.pathname !== '/java-game-project' && location.pathname !=='/nosted' && location.pathname !== '/swipload' && location.pathname !== '/bachelor';

  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <>
      {shouldShowNavbar && <Navbar />}
      <Routes>
        <Route path="/java-game-project" element={<JavaGameProject />} />
        <Route path="/swipload" element={<Swipload />} />
        <Route path="/nosted" element={<Nosted />} />
        <Route path="/bachelor" element={<Bachelor />} />
        <Route
          path="/"
          element={
            <>
              <Header />
              <Socials />
              <main className="container mx-auto px-4 flex flex-col items-center">
                <div className="flex flex-col gap-8 lg:pb-10 w-full">
                  <div className="w-full flex justify-center">
                    <Experience />
                  </div>
                  <div className="w-full flex justify-center">
                    <Tech />
                  </div>
                </div>
                <Projects />
              </main>
              <Footer />
            </>
          }
        />
        <Route path="*" element={<div>404 - Not Found</div>} />
      </Routes>
    </>
  );
};

const App = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  );
};

export default App;