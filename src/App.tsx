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
    <div className="flex flex-col min-h-screen">
      {loading && <LoadingScreen />}
      {!loading && (
        <>
          <Navbar />
          <main className="flex-grow">
            <Header />
            <Socials />
            <Tech />
            <Experience />
            <Projects />
          </main>
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;