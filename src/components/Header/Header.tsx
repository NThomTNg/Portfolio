import React from 'react';
import Bilde from '../../assets/Bilde.jpg';
import './Header.css';
import BoxReveal from "../@/components/box-reveal";

const Header = () => (
  <div id="header-section" className="relative sm:pt-12 sm:pb-8 pb-8 mx-auto">
    <div className="relative flex flex-col lg:gap-16 gap-4 items-center justify-center lg:justify-normal lg:flex-row lg:flex-nowrap max-w-screen-xl mx-auto mt-10 md:py-0">
    <div className='flex flex-col md:flex-row w-full'>
  <div className='flex justify-center items-center h-auto w-1/2 ml-24 md:w-1/3 xl:w-2/5 xl:ml-0'>
    <img 
      src={Bilde} 
      alt="Bilde"
      className="shadow rounded-lg w-full"
    />
  </div>
  <div className='flex flex-col w-full px-3 md:w-4/6 xl:w-4/5 xl:space-x-5'>
    <BoxReveal>
      <div className="content relative w-full mt-20 xl:pl-0 xl:w-5/6 xl:ml-80">
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
    </BoxReveal>
    <BoxReveal>
      <div className='flex bg-white bg-opacity-10 rounded-lg p-6 shadow-lg w-full mt-6'>
        <p className="text-left md:text-lg text-white leading-relaxed border rounded-lg p-3">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt.
        </p>
      </div>
    </BoxReveal>
    <BoxReveal>
      <div className='flex bg-white bg-opacity-10 rounded-lg p-6 shadow-lg w-full mt-6'>
        <p className="text-left md:text-lg text-white leading-relaxed border rounded-lg p-3">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt.
        </p>
      </div>
    </BoxReveal>
  </div>
</div>
    </div>
  </div>
);

export default Header;