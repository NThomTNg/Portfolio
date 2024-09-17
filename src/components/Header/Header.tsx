import React from 'react';
import Bilde from '../../assets/Bilde.jpg';
import './Header.css';
import BoxReveal from "../@/components/box-reveal";

const Header = () => (
  <div id="header-section" className="relative sm:pt-12 sm:pb-8 pb-8 mx-auto">
    <div className="relative flex flex-col lg:gap-16 gap-4 items-center justify-center lg:justify-normal lg:flex-row lg:flex-nowrap max-w-screen-xl mx-auto mt-10 md:py-0">
    <div className='flex flex-col md:flex-row w-full'>
    <div className='flex justify-center items-center h-auto w-1/2 ml-24 md:w-1/3 xl:w-2/5 xl:ml-0'>
    <BoxReveal>
    <img 
      src={Bilde} 
      alt="Bilde"
      className="shadow rounded-lg w-full"
    />
    </BoxReveal>
  </div>
  <div className='flex flex-col w-full px-3 md:w-4/6 xl:w-4/5 xl:space-x-5'>
    <BoxReveal>
      <div className="hidden md:block content relative w-full mt-20 xl:pl-0 xl:w-5/6 xl:ml-80">
        <div className="content__container">
          <p className="content__container__text">Hello</p>
          <ul className="content__container__list">
            <li className="content__container__list__item">world!</li>
            <li className="content__container__list__item">stranger!</li>
            <li className="content__container__list__item">user!</li>
            <li className="content__container__list__item">bạn</li>
          </ul>
        </div>
      </div>
    </BoxReveal>
    <BoxReveal>
      <h1 className='block lg:hidden text-3xl font-bold pl-16 py-10 text-white'>Nice to meet you!</h1>
    </BoxReveal>
    <BoxReveal>
      <div className='flex bg-white bg-opacity-10 rounded-lg p-6 shadow-lg w-full mt-3'>
        <p className="text-left md:text-lg text-white leading-relaxed border rounded-lg p-3">
          Hello, nice to meet you! My name is Nhan Thomas. I'm a 22 year old IT student from Trondheim, currently
          attending the University of Agder. I'm working on my skills to become a skilled fullstack developer. My passion
          lies in developing web applications and learning new technologies. Right now I'm trying to learn Svelte and 
          object-based programming in Java.
        </p>
      </div>
    </BoxReveal>
    <BoxReveal>
      <div className='flex bg-white bg-opacity-10 rounded-lg p-6 shadow-lg w-full mt-3'>
        <p className="text-left md:text-lg text-white leading-relaxed border rounded-lg p-3">
          As I have been working with multiple different projects, I have accumulated a lot of experience in different technologies. Currently I am
          working on a digital online store that simulates the process of buying and placing a order. I am also currently dipping my toes in 
          game development as a means to better my understanding of working with Java. Another goal I have set for myself is to learn and start using
          Next.js, a React framework that I have heard a lot of good things about.
        </p>
      </div>
    </BoxReveal>
  </div>
</div>
    </div>
  </div>
);

export default Header;