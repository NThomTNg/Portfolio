"use client";
import Icon from "../../assets/Icon.png";
import CV from "../../assets/Cv.pdf";
import { useState, useEffect, useRef } from "react";

const Navbar = () => {
  const [activeItem, setActiveItem] = useState<number | null>(null);
  const navItemRefs = useRef<(HTMLButtonElement | HTMLAnchorElement | null)[]>(
    []
  );
  const underlineRef = useRef<HTMLDivElement>(null);
  const navContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (
      activeItem !== null &&
      underlineRef.current &&
      navItemRefs.current[activeItem] &&
      navContainerRef.current
    ) {
      const navItem = navItemRefs.current[activeItem];
      const navContainer = navContainerRef.current;

      if (navItem) {
        const itemRect = navItem.getBoundingClientRect();
        const containerRect = navContainer.getBoundingClientRect();

        const leftPosition = itemRect.left - containerRect.left;
        underlineRef.current.style.width = `${itemRect.width}px`;
        underlineRef.current.style.left = `${leftPosition}px`;
        underlineRef.current.style.opacity = "1";
      }
    } else if (underlineRef.current) {
      underlineRef.current.style.opacity = "0";
    }
  }, [activeItem]);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="w-full py-4 px-6 transition-all duration-300 z-50">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <img
              src={Icon}
              alt="icon"
              className="md:w-16 md:h-16 w-10 h-10 cursor-pointer"
              onClick={() => scrollToSection("header-section")}
            />
          </div>

          <div
            ref={navContainerRef}
            className="flex items-center space-x-2 sm:space-x-4 md:space-x-8 relative"
          >
            <div
              ref={underlineRef}
              className="absolute bottom-0 h-0.5 bg-white transition-all duration-250 opacity-0"
              style={{
                height: "2px",
              }}
            />

            <button
              ref={(el) => (navItemRefs.current[0] = el)}
              onMouseEnter={() => setActiveItem(0)}
              onMouseLeave={() => setActiveItem(null)}
              onClick={() => scrollToSection("header-section")}
              className="text-amber-200 hover:text-white transition-colors text-base md:text-lg py-1 whitespace-nowrap"
            >
              About
            </button>

            <button
              ref={(el) => (navItemRefs.current[1] = el)}
              onMouseEnter={() => setActiveItem(1)}
              onMouseLeave={() => setActiveItem(null)}
              onClick={() => scrollToSection("experience")}
              className="text-amber-200 hover:text-white transition-colors text-base md:text-lg py-1 whitespace-nowrap"
            >
              Experience
            </button>

            <button
              ref={(el) => (navItemRefs.current[2] = el)}
              onMouseEnter={() => setActiveItem(2)}
              onMouseLeave={() => setActiveItem(null)}
              onClick={() => scrollToSection("projects")}
              className="text-amber-200 hover:text-white transition-colors text-base md:text-lg py-1 whitespace-nowrap"
            >
              Projects
            </button>

            <a
              ref={(el) => (navItemRefs.current[3] = el)}
              onMouseEnter={() => setActiveItem(3)}
              onMouseLeave={() => setActiveItem(null)}
              href={CV}
              download="Cv.pdf"
              className="text-amber-200 hover:text-white transition-colors text-base md:text-lg py-1 whitespace-nowrap"
            >
              My CV
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
