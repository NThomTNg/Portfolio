import React, { useState, useEffect } from "react";
import Navbar from "./components/Layout/Navbar";
import Footer from "./components/Layout/Footer";
import Header from "./components/Header/Header";
import Socials from "./components/Socials";
import LoadingScreen from "./components/LoadingScreen";
import Tech from "./components/Tech";
import Experience from "./components/Experience";
import Projects from "./components/Projects";

function App() {
  const [loading, setLoading] = useState(true);
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 1550) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    const headerSection = document.getElementById('header-section');
    if (headerSection) {
      headerSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {loading && <LoadingScreen />}
      {!loading && (
        <>
          <Navbar />
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
          {showButton && (
            <button
              onClick={scrollToTop}
              className={`hidden md:block fixed bottom-4 left-1/2 transform -translate-x-1/2 p-3 mb-10 bg-amber-200 rounded-full shadow-lg hover:bg-amber-100 transition-opacity duration-300`}
            >
              ↑ Top
            </button>
          )}
        </>
      )}
    </>
  );
}

export default App;