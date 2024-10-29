import React, { useState, useEffect } from 'react';
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

const AppContent = () => {
  const location = useLocation();
  const [loading, setLoading] = useState(true);
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    setTimeout(() => setLoading(false), 2000);
    window.addEventListener('scroll', () => {
      setShowButton(window.scrollY > 300);
    });
  }, []);

  const shouldShowNavbar = location.pathname !== '/java-game-project';

  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <>
      {shouldShowNavbar && <Navbar />}
      <Routes>
        <Route path="/java-game-project" element={<JavaGameProject />} />
        <Route
          path="/"
          element={
            <>
              <Header />
              <Socials />
              <main className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row gap-8 lg:pb-10">
                  <div className="lg:w-1/2 lg:mt-11">
                    <Experience />
                  </div>
                  <div className="lg:w-1/2 lg:mt-9">
                    <Tech />
                  </div>
                </div>
                <Projects />
              </main>
              <Footer />
            </>
          }
        />
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