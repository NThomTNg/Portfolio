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

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading && <LoadingScreen />}
      {!loading && (
        <>
          <Navbar />
          <Header />
          <Socials />
          <main className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row gap-8">
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
      )}
    </>
  );
}

export default App;