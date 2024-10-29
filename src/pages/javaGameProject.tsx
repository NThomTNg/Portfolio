import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import screenshot1 from '../assets/gm.jpg';
import screenshot2 from '../assets/gm2.jpg';
import titleScreen from '../assets/titleScreen.jpg'
import demoVideo from '../assets/gameDemo.mp4';
import './javeGameProject.css';

const JavaGameProject: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleBackClick = () => {
    navigate('/');
  };

  return (
    <div className="container mx-auto p-8 max-w-3xl">
      <button 
        onClick={handleBackClick} 
        className="mb-8 px-6 py-3 bg-teal-700 text-white font-semibold rounded-lg shadow-md hover:bg-teal-500 transition duration-300 ease-in-out"
      >
        ← Back
      </button>

      <div className="p-6 rounded-lg">
        <h1 className="text-4xl font-bold text-white mb-6">Java Game Project</h1>
        <img 
        src={titleScreen} 
        alt="titleScreen" 
        className="rounded-lg shadow-2xl md:max-w-2xl md:max-h-96 mb-5"
      />
        <p className="text-lg text-white mb-8">
          Enter the world of Andaren as Yoren, the green boy.
        </p>
      </div>
      
      <div className="p-6 rounded-lg mb-5">
        <h2 className="text-3xl font-semibold text-white mb-4">Project Overview</h2>
        <p className="text-white leading-relaxed">
          This project is an early development of a Java-based game that brings back the nostalgia of old 2D RPGs.
          The idea is to create a game in the classic pixel style, where the player can move around in a world and go on adventures in a foreign land.
          The game is built using Java and is a project that I have been working on to better my understanding of object-based programming in a fun way.
        </p>
      </div>

      <div className="p-6 rounded-lg mb-3">
        <h2 className="text-3xl font-semibold text-white mb-4">Roadmap</h2>
        <ul>
          <li className="text-white mb-2">
          - Add npcs and enemies
          </li>
          <li className="text-white mb-2">
          - Implement a combat system where the player can fight monsters
          </li>
          <li className="text-white mb-2">
           - Add objects that the player can interact with
          </li>
          <li className="text-white mb-2">
           - Add UI
          </li>
          <li className="text-white mb-2">
           - Make it fun and playable
          </li>
        </ul>
      </div>

  <div className="bg-transparent p-6 rounded-lg mb-8">
  <h2 className="text-3xl font-semibold text-white">Screenshots</h2>
  <div className="grid grid-cols-1 sm:grid-cols-2 md:gap-96 md:justify-items-start">
    <a 
      href={screenshot1} 
      target="_blank" 
      rel="noopener noreferrer" 
      className="md:-ml-16"
    >
      <img 
        src={screenshot1} 
        alt="Screenshot 1" 
        className="rounded-lg shadow-2xl md:max-w-2xl md:max-h-96 img-3d-effect"
      />
    </a>
    <a href={screenshot2} target="_blank" rel="noopener noreferrer">
      <img 
        src={screenshot2} 
        alt="Screenshot 2" 
        className="rounded-lg shadow-2xl md:max-w-2xl md:max-h-96 img-3d-effect"
      />
    </a>
  </div>
</div>

<div className="bg-transparent p-6 rounded-lg mb-8">
  <h2 className="text-3xl font-semibold text-white mb-4">Demo Video</h2>
  <div className="aspect-w-16 aspect-h-9">
    <video 
      className="w-full h-full rounded-lg shadow-2xl"
      controls
    >
      <source src={demoVideo} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  </div>
</div>
      
      <div className="p-6 rounded-lg">
        <h2 className="text-3xl font-semibold text-white mb-4">Download All Files</h2>
          <p className='text-lg text-white my-6'>
            Download the Java files and try it out yourself. Be warned that it is still incredible early so dont expect too much! (you will need a Java IDE to test run it) ｡◕‿◕｡
          </p>
        <a 
          href="/gameCode.zip" 
          download 
          className="inline-block px-6 py-3 bg-teal-700 text-white font-semibold rounded-lg shadow-md hover:bg-teal-500  transition duration-300 ease-in-out"
        >
          Download ZIP
        </a>
      </div>
    </div>
  );
};

export default JavaGameProject;
