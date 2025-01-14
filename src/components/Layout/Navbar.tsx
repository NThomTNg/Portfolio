import Icon from '../../assets/Icon.png';
import CV from '../../assets/Cv.pdf';

const Navbar = () => {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <nav className="w-full p-3 bg-transparent">
      <div className="container mx-auto">
        <div className="flex justify-center items-center md:mr-10">
          <div className="flex flex-row justify-center items-center space-x-6 pt-3 mr-10 md:mr-40 md:space-x-16">
            <img 
              src={Icon} 
              alt="icon"
              className='md:w-20 md:h-20 md:mr-32 w-10 h-10'/>
            <button
              onClick={() => scrollToSection('header-section')}
              className="text-amber-200 hover:text-white transition-colors text-lg lg:text-xl pb-1 whitespace-nowrap relative after:absolute after:w-0 after:h-0.5 after:bottom-0 after:left-1/2 after:bg-white hover:after:w-full hover:after:left-0 after:transition-all after:duration-300"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('experience')}
              className="text-amber-200 hover:text-white transition-colors text-lg lg:text-xl pb-1 whitespace-nowrap relative after:absolute after:w-0 after:h-0.5 after:bottom-0 after:left-1/2 after:bg-white hover:after:w-full hover:after:left-0 after:transition-all after:duration-300"
            >
              Experience
            </button>
            <button
              onClick={() => scrollToSection('projects')}
              className="text-amber-200 hover:text-white transition-colors text-lg lg:text-xl pb-1 whitespace-nowrap relative after:absolute after:w-0 after:h-0.5 after:bottom-0 after:left-1/2 after:bg-white hover:after:w-full hover:after:left-0 after:transition-all after:duration-300"
            >
              Projects
            </button>
            <a
              href={CV}
              download="Cv.pdf"
              className="text-amber-200 hover:text-white transition-colors text-lg lg:text-xl pb-1 whitespace-nowrap relative after:absolute after:w-0 after:h-0.5 after:bottom-0 after:left-1/2 after:bg-white hover:after:w-full hover:after:left-0 after:transition-all after:duration-300"
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