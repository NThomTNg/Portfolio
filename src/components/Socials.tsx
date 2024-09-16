import React from 'react';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';
import BoxReveal from "../components/@/components/box-reveal";


interface SocialsProps {
  githubUrl?: string;
  linkedinUrl?: string;
  gmailUrl?: string;
  instagramUrl?: string;
}

const Socials: React.FC<SocialsProps> = ({
  githubUrl = 'https://github.com/NThomTNg',
  linkedinUrl = 'https://www.linkedin.com/in/nhan-thomas-nguyen-024860253/',
  gmailUrl = 'mailto:nt.thom.ng@gmail.com',
  instagramUrl = 'https://www.instagram.com/nthomnt/',
}) => {
  return (
    <div className="flex justify-center items-center gap-4 h-40 mx-auto space-x-2 w-full md:space-x-10 ">
        <BoxReveal>
      <a
        href={githubUrl}
        className="flex items-center justify-center w-16 h-16 lg:w-24 lg:h-24 md:w-20 md:h-20 rounded-lg bg-gray-800 text-white hover:bg-slate-200 hover:text-black transition-colors"
        aria-label="GitHub"
      >
        <FaGithub className="lg:w-20 lg:h-20 md:w-16 md:h-16 w-14 h-14"/> 
      </a>
      </BoxReveal>
      <BoxReveal>
      <a
        href={linkedinUrl}
        className="flex items-center justify-center w-16 h-16 lg:w-24 lg:h-24 md:w-20 md:h-20 rounded-lg bg-gray-800 text-white hover:bg-slate-200 hover:text-black transition-colors"
        aria-label="LinkedIn"
      >
        <FaLinkedin className="lg:w-20 lg:h-20 md:w-16 md:h-16 w-14 h-14" /> 
      </a>
      </BoxReveal>
      <BoxReveal>
      <a
        href={gmailUrl}
        className="flex items-center justify-center w-16 h-16 lg:w-24 lg:h-24 md:w-20 md:h-20 rounded-lg bg-gray-800 text-white hover:bg-slate-200  hover:text-black transition-colors"
        aria-label="Gmail"
      >
        <SiGmail className="lg:w-20 lg:h-20 md:w-16 md:h-16 w-14 h-14" /> 
      </a>
      </BoxReveal>
      <BoxReveal>
      <a
        href={instagramUrl}
        className="flex items-center justify-center w-16 h-16 lg:w-24 lg:h-24 md:w-20 md:h-20 rounded-lg bg-gray-800 text-white hover:bg-slate-200  hover:text-black transition-colors"
        aria-label="Instagram"
      >
        <FaInstagram className="lg:w-20 lg:h-20 md:w-16 md:h-16 w-14 h-14" />
      </a>
      </BoxReveal>
    </div>
  );
};

export default Socials;
