import React, { useEffect, useRef } from 'react';
import {
  FaJs,
  FaReact,
  FaNodeJs,
  FaPython,
  FaJava,
  FaDocker,
  FaBootstrap,
  FaPhp 
} from 'react-icons/fa';
import { RiTailwindCssFill, RiSvelteFill } from "react-icons/ri";
import { SiTypescript, SiDotnet } from 'react-icons/si';

const frontendTechnologies = [
  { name: "JavaScript", icon: <FaJs /> },
  { name: "TypeScript", icon: <SiTypescript /> },
  { name: "React", icon: <FaReact /> },
  { name: "Svelte", icon: <RiSvelteFill /> },
  { name: "Tailwind", icon: <RiTailwindCssFill /> },
  { name: "Bootstrap", icon: <FaBootstrap /> },
];

const backendTechnologies = [
  { name: "Python", icon: <FaPython /> },
  { name: "Java", icon: <FaJava /> },
  { name: "PHP", icon: <FaPhp /> },
  { name: ".NET", icon: <SiDotnet /> },
  { name: "Node.js", icon: <FaNodeJs /> },
  { name: "Docker", icon: <FaDocker /> },
];

interface Technology {
  name: string;
  icon: JSX.Element;
}

const TechCarousel: React.FC<{ technologies: Technology[], title: string }> = ({ technologies, title }) => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const isPaused = useRef(false);

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    const totalWidth = carousel.scrollWidth;
    let currentPosition = 0;

    const animate = () => {
    if (!isPaused.current) {
      currentPosition += 2.0;
      if (currentPosition >= totalWidth / 3) {
        currentPosition = 0;
      }
      carousel.style.transform = `translateX(-${currentPosition}px)`;
    }
    requestAnimationFrame(animate);
  };

    const handleMouseEnter = () => {
      isPaused.current = true;
    };

    const handleMouseLeave = () => {
      isPaused.current = false;
    };

    carousel.addEventListener("mouseenter", handleMouseEnter);
    carousel.addEventListener("mouseleave", handleMouseLeave);  

    animate();
  }, []);

  return (
    <div className="max-w-4xl">
      <h2 className="text-2xl font-bold text-white mb-4">{title}</h2>
      <div className="overflow-hidden p-4 rounded-lg shadow-lg border">
        <div
          ref={carouselRef}
          className="flex"
          style={{ width: `${technologies.length * 35}%` }}
        >
          {[...technologies, ...technologies, ...technologies].map((tech, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center flex-shrink-0 w-1/3 sm:w-1/4 md:w-1/6 text-center text-white p-4 space-y-2"
            >
              <div className="text-5xl md:text-6xl">{tech.icon}</div>
              <div className="font-bold text-sm md:text-base">{tech.name}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const Tech: React.FC = () => {
  return (
    <div className="w-full max-w mx-auto p-4 mt-10">
      <div className="w-72">
        <h2 className="text-3xl font-bold text-white mb-6 border-b-2 border-amber-100 pb-2">Technologies</h2>
      </div>
      <div className="flex flex-col md:flex-row gap-6 mt-10">
        <div className="w-full md:w-1/2">
          <TechCarousel technologies={frontendTechnologies} title="Frontend Technologies" />
        </div>
        <div className="w-full md:w-1/2">
          <TechCarousel technologies={backendTechnologies} title="Backend Technologies" />
        </div>
      </div>
    </div>
  );
};

export default Tech;