import React, { useEffect, useRef } from 'react';
import { 
  FaJs, 
  FaReact, 
  FaNodeJs, 
  FaPython, 
  FaCss3, 
  FaHtml5, 
  FaDocker, 
  FaAws 
} from 'react-icons/fa';
import { SiTypescript } from 'react-icons/si';

const technologies = [
  { name: "JavaScript", icon: <FaJs /> },
  { name: "TypeScript", icon: <SiTypescript /> },
  { name: "React", icon: <FaReact /> },
  { name: "Node.js", icon: <FaNodeJs /> },
  { name: "Python", icon: <FaPython /> },
  { name: "CSS", icon: <FaCss3 /> },
  { name: "HTML", icon: <FaHtml5 /> },
  { name: "Docker", icon: <FaDocker /> },
  { name: "AWS", icon: <FaAws /> }
];

const Tech: React.FC = () => {
    const carouselRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
      const carousel = carouselRef.current;
      if (!carousel) return;
    
      const totalWidth = carousel.scrollWidth;
      let currentPosition = 0;
    
      const animate = () => {
        currentPosition += 2;
        if (currentPosition >= totalWidth / 3) {
          currentPosition = 0;
        }
        carousel.style.transform = `translateX(-${currentPosition}px)`;
        requestAnimationFrame(animate);
      };
    
      animate();
    }, []);
    
    return (
      <div className="flex justify-center items-center m-20 w-2/6 overflow-hidden p-4 rounded-lg shadow-lg border-2 ml-auto">
        <div
          ref={carouselRef}
          className="flex"
          style={{ width: `${technologies.length * 10}%` }}
        >
          {[...technologies, ...technologies, ...technologies].map((tech, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center flex-shrink-0 w-1/3 text-center text-white p-4 space-y-2"
            >
              <div className="text-7xl">{tech.icon}</div>
              <div className="font-bold">{tech.name}</div>
            </div>
          ))}
        </div>
      </div>
    );
};

export default Tech;