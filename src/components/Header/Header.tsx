import Bilde from '../../assets/Bilde.jpg';
import './Header.css';
import BoxReveal from "../@/components/box-reveal";

function Header() {
  return (
    <BoxReveal>
    <header 
      id='header-section'
      className="w-full mt-16 p-8 flex flex-col md:flex-row items-center justify-center">
      <img 
        src={Bilde} 
        alt="Bilde"
        className="md:w-3/12 md:h-auto w-60 h-80 mb-24 md:mr-8 md:ml-40 shadow rounded-lg"
      />
      <div className="text-center md:text-left md:pb-8 md:w-3/5 space-y-6">
        <div className='hidden md:block'>
        <div className="content md:w-5/12 md:ml-52 md:mt-10 ">
          <div className="content__container">
            <p className="content__container__text">Hello</p>
              <ul className="content__container__list">
              <li className="content__container__list__item">world!</li>
              <li className="content__container__list__item">stranger!</li>
              <li className="content__container__list__item">user!</li>
              <li className="content__container__list__item">everybody!</li>
            </ul>
          </div>
        </div>
      </div>

        <div className='bg-white bg-opacity-10 rounded-lg p-6 shadow-lg md:w-4/5'>
          <p className="text-white text-sm md:text-lg leading-relaxed border rounded-lg p-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non 
            proident, sunt in culpa qui officia deserunt.
          </p>
        </div>
        <div className='bg-white bg-opacity-10 rounded-lg p-6 shadow-lg md:w-4/5'>
          <p className="text-white text-sm md:text-lg leading-relaxed border rounded-lg p-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non 
            proident, sunt in culpa qui officia deserunt.
          </p>    
        </div>      
      </div>
    </header>
    </BoxReveal>
  );
}

export default Header;
