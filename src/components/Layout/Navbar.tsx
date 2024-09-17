import Icon from '../../assets/Icon.png';

const Navbar = () => {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <nav className="w-full p-4 bg-transparent">
      <div className="container mx-auto">
        <div className="flex justify-center items-center">
          <div className="flex flex-row justify-center items-center space-x-10 pt-5 mr-10 md:pt-10 md:mr-40 md:space-x-32">
          <img 
              src={Icon} 
              alt="icon"
              className='md:w-20 md:h-20 w-10 h-10'/>
            <button
              onClick={() => scrollToSection('header-section')}
              className="text-amber-200 hover:text-white transition-colors text-base sm:text-lg md:text-2xl whitespace-nowrap"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('experience')}
              className="text-amber-200 hover:text-white transition-colors text-base sm:text-lg md:text-2xl whitespace-nowrap"
            >
              Experience
            </button>
            <button
              onClick={() => scrollToSection('projects')}
              className="text-amber-200 hover:text-white transition-colors text-base sm:text-lg md:text-2xl whitespace-nowrap"
            >
              Projects
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;