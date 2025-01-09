import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import home from '../assets/home.jpg';
import login from '../assets/login.jpg';
import oversikt from '../assets/oversikt.jpg';
import rapport from '../assets/rapport.jpg';
import roles from '../assets/roles.jpg';
import { SiDocker, SiMariadbfoundation, SiMysql, SiDotnet } from 'react-icons/si';
import { TbBrandCSharp } from "react-icons/tb";
import { FaBootstrap } from "react-icons/fa";

const Nosted: React.FC = () => {
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

      const handleBackClick = () => {
        navigate('/');
      };

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        arrows: true,
    };

    return (
        <div className='min-h-screen p-8 bg-gradient-to-b from-slate-800 via-slate-500 to-zinc-500'>
            <div className='container mx-auto max-w-5xl'>
                <button 
                    onClick={handleBackClick} 
                    className="mb-8 px-6 py-3 bg-orange-400 text-white font-semibold rounded-lg shadow-md hover:bg-orange-500 transition duration-300 ease-in-out cursor-pointer"
                >
                    ← Back
                </button>
                
                <div className='p-6'>
                    <h1 className="text-3xl font-bold text-white mb-6 lg:ml-52">School project | Cooperation with Nøsted</h1>
                </div>

                <div className='p-4 mb-10'>
                    <p className='text-white text-lg leading-relaxed border rounded-lg p-4'>
                      I worked on a school project in a group of students on the first semester of my second year. The project was a cooperation with Nøsted,
                      a company specializing in the design, production, and delivery of chains, forestry tracks, tractor implements, and lifting and mooring equipment.
                      Operating under the brands TRYGG, IGLAND, and FRAM, the company offers a diverse range of products and services. Our role was to help them 
                      develop a a digital solution for them to process service orders from their customers. Before they had to do this manually, by phone or email.
                      We developed a web application that allows their customers to create service orders, and Nøsted to administrate and process these orders.
                    </p>
                </div>

                <div className='mb-10'>
                    <Slider {...settings}>
                        <div className='px-2'>
                            <h3 className='text-white font-semibold text-center mb-4'>
                                Home Page - Landing page for users
                            </h3>
                            <img
                                src={home}
                                alt='home'
                                className='max-w-[800px] w-full mx-auto shadow-lg rounded-lg'
                            />
                        </div>
                        <div className='px-2'>
                            <h3 className='text-white font-semibold text-center mb-4'>
                                Login Page
                            </h3>
                            <img
                                src={login}
                                alt='login'
                                className='max-w-[800px] w-full mx-auto shadow-lg rounded-lg'
                            />
                        </div>
                        <div className='px-2'>
                            <h3 className='text-white font-semibold text-center mb-4'>
                                Overview - Service order management dashboard
                            </h3>
                            <img
                                src={oversikt}
                                alt='oversikt'
                                className='max-w-[800px] w-full mx-auto shadow-lg rounded-lg'
                            />
                        </div>
                        <div className='px-2'>
                            <h3 className='text-white font-semibold text-center mb-4'>
                                Reports - Detailed service documentation
                            </h3>
                            <img
                                src={rapport}
                                alt='rapport'
                                className='max-w-[800px] w-full mx-auto shadow-lg rounded-lg'
                            />
                        </div>
                        <div className='px-2'>
                            <h3 className='text-white font-semibold text-center mb-4'>
                                User Roles - Access user control management
                            </h3>
                            <img
                                src={roles}
                                alt='roles'
                                className='max-w-[800px] w-full mx-auto shadow-lg rounded-lg'
                            />
                        </div>
                    </Slider>

                    <div className='p-4 mt-20 mb-8'>
                        <h2 className='text-2xl font-bold text-white mb-6 text-center'>Technologies & Skills Learned</h2>
                            <div className='grid grid-cols-2 md:grid-cols-3 gap-6 text-white'>
                                <div className='flex items-center gap-3 bg-slate-900 p-4 rounded-lg'>
                                    <TbBrandCSharp className='text-3xl text-green-700' />
                                    <span>C#</span>
                                </div>
                                <div className='flex items-center gap-3 bg-slate-900 p-4 rounded-lg'>
                                    <FaBootstrap className='text-3xl text-purple-600' />
                                    <span>Bootstrap</span>
                                </div>
                                <div className='flex items-center gap-3 bg-slate-900 p-4 rounded-lg'>
                                    <SiMariadbfoundation className='text-3xl text-red-500' />
                                    <span>MariaDb</span>
                                </div>
                                <div className='flex items-center gap-3 bg-slate-900 p-4 rounded-lg'>
                                    <SiMysql className='text-3xl text-blue-500' />
                                    <span>MySql</span>
                                </div>
                                <div className='flex items-center gap-3 bg-slate-900 p-4 rounded-lg'>
                                    <SiDotnet className='text-3xl text-purple-600' />
                                    <span>.NET and MVC Framework</span>
                                </div>
                                <div className='flex items-center gap-3 bg-slate-900 p-4 rounded-lg'>
                                    <SiDocker className='text-3xl text-blue-500' />
                                    <span>Docker</span>
                                </div>
                        </div>

                    <div className='p-4 mt-10'>
                        <p className='text-white text-lg leading-relaxed border rounded-lg p-4'>
                            This was the first real project I worked on with a group of students where we had to not only think about the technical aspects of the project,
                            but also the design, user experience, and system architecture. We also had a close dialouge with the company, keeping them frequently updated on our progress.
                            This project was a great learning experience for me, where I learned alot about working with C# and .NET which I was not familiar with before. I also got to use
                            Docker in practise for the first time, which helped me grasp how to work with containers and how to deploy applications in a more efficient way. During
                            the projects time, I got to develop my backend skills alot, and it was fun learning how to set up, and inject data into a database. Working with
                            fellow students was a great experience, as we all had different skills and knowledge that we could share with each other.
                        </p>
                    </div>

                    <div className='p-4 mb-10'>
                    <p className='text-white text-lg leading-relaxed'>
                      Our group's code repository can be found on GitHub.
                    </p>
                    <button 
                    onClick={() => window.open('https://github.com/jonaslefdal/AdminDesk')}
                    className="mt-4 px-6 py-3 bg-orange-400 text-white font-semibold rounded-lg shadow-md hover:bg-orange-500 transition duration-300 ease-in-out cursor-pointer"
                >
                    View on GitHub
                </button>
                </div>

                    </div>
                </div>
            </div>
        </div>
    );

};


export default Nosted;