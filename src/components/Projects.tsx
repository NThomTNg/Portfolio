import React from 'react';
import p1 from '../assets/project1.jpg';
import p2 from '../assets/project2.jpg';
import p3 from '../assets/project3.jpg';
import p4 from '../assets/project4.jpg';

interface Project {
  id: number;
  name: string;
  description: string;
  imageUrl: string;
  githubUrl: string;
}

const projects: Project[] = [
  {
    id: 1,
    name: "Pc Parts Shop",
    description: "Buy cool pc componets for your build",
    imageUrl: p1,
    githubUrl: "https://nthomtng.github.io/ShoppingCart/"
  },
  {
    id: 2,
    name: "Vietnamese Resturante",
    description: "Visit a cozy and authentic Vietnamese resturante",
    imageUrl: p2,
    githubUrl: "https://nthomtng.github.io/Resturante-home-page/"
  },
  {
    id: 3,
    name: "Weather App",
    description: "Check out the weather in your city",
    imageUrl: p3,
    githubUrl: "https://nthomtng.github.io/Weather-app/"
  },
  {
    id: 4,
    name: "Java Game (Early development)",
    description: "A game reminiscent of the old 2d rpgs",
    imageUrl: p4,
    githubUrl: "https://media.tenor.com/fZa1K1ZUtscAAAAM/im-on-it-cats.gif"
  }
];

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => (
    <a href={project.githubUrl} target='_blank' rel="noopener noreferrer" className="block mb-3">
    <div className={`bg-gradient-to-br from-slate-500 to-teal-800 rounded-lg shadow-sm overflow-hidden transform duration-500 hover:scale-105`}>
    <img 
    src={project.imageUrl} 
    alt={project.name} 
    className={`w-full lg:h-80 h-auto object-cover ${project.id === 4 ? 'blur-sm' : ''}`} />
    <div className="p-4">
      <h3 className="text-xl text-white font-semibold mb-2">{project.name}</h3> 
      <p className="text-white mb-4">{project.description}</p>
    </div>
  </div>
  </a>
);

const Projects: React.FC = () => {
  return (
    <div id='projects' className="container mx-auto px-4 py-10">
      <h2 className="text-2xl text-white font-bold mb-6">My Projects</h2>
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:gap-10">
        {projects.map(project => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
