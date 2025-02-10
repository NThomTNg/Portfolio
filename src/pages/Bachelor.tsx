import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { SiNextdotjs, SiTypescript, SiJira} from 'react-icons/si';
import { FaPython } from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";
import { AiOutlineOpenAI } from "react-icons/ai";
import bachelor from '../assets/bachelor.jpg';
import kickoff from '../assets/kickoff.jpg';
import group from '../assets/group.jpg';

const Bachelor: React.FC = () => {
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
        <div className='min-h-screen p-8 bg-gradient-to-b from-gray-500 to-teal-900'>
            <div className='container mx-auto max-w-5xl'>
                <button 
                    onClick={handleBackClick} 
                    className="mb-8 px-6 py-3 bg-green-600 text-white font-semibold rounded-lg shadow-md hover:bg-green-700 transition duration-300 ease-in-out cursor-pointer"
                >
                    ← Back
                </button>
                
                <div className='p-6'>
                    <h1 className="text-3xl font-bold text-white text-center mb-6">Bachelor Thesis</h1>
                    <h2 className="text-2xl font-medium text-white text-center mb-6">In collaboration with Kristiansand Kommune, Kartverket and Norkart</h2>
                </div>

                <div className='p-4 mb-10'>
                    <p className='text-white text-lg leading-relaxed border rounded-lg p-4'>
                        LUL
                    </p>
                </div>

                <div className='mb-10'>
                    <Slider {...settings}>
                        <div className='px-2'>
                            <h3 className='text-white font-semibold text-center mb-4'>
                                Cover page for our bachelor thesis
                            </h3>
                            <div className="w-full h-[750px] mx-auto">
                                <img
                                    src={bachelor}
                                    alt='home'
                                    className='w-full h-full object-cover object-center rounded-lg shadow-lg'
                                />
                            </div>
                        </div>
                        <div className='px-2'>
                            <h3 className='text-white font-semibold text-center mb-4'>
                                The bachelor group with our supervisor + others
                            </h3>
                            <div className="w-full h-[750px] mx-auto">
                                <img
                                    src={group}
                                    alt='login'
                                    className='w-full h-full object-cover object-center rounded-lg shadow-lg'
                                />
                            </div>
                        </div>
                        <div className='px-2'>
                            <h3 className='text-white font-semibold text-center mb-4'>
                                Kickoff day with Kartverket, Norkart and Kristiansand Kommune
                            </h3>
                            <div className="w-full h-[750px] mx-auto">
                                <img
                                    src={kickoff}
                                    alt='oversikt'
                                    className='w-full h-full object-cover object-center rounded-lg shadow-lg'
                                />
                            </div>
                        </div>
                    </Slider>

                    <div className='p-4 mt-20 mb-8'>
                        <h2 className='text-2xl font-bold text-white mb-6 text-center'>Technologies & Skills Learned</h2>
                            <div className='grid grid-cols-2 md:grid-cols-3 gap-6 text-white'>
                                <div className='flex items-center gap-3 bg-slate-900 p-4 rounded-lg'>
                                    <SiNextdotjs className='text-3xl text-white' />
                                    <span>Next.js</span>
                                </div>
                                <div className='flex items-center gap-3 bg-slate-900 p-4 rounded-lg'>
                                    <SiTypescript className='text-3xl text-blue-600' />
                                    <span>Typescript</span>
                                </div>
                                <div className='flex items-center gap-3 bg-slate-900 p-4 rounded-lg'>
                                    <FaPython className='text-3xl text-yellow-300' />
                                    <span>Python</span>
                                </div>
                                <div className='flex items-center gap-3 bg-slate-900 p-4 rounded-lg'>
                                    <BiLogoPostgresql className='text-3xl text-blue-500' />
                                    <span>Postgresql</span>
                                </div>
                                <div className='flex items-center gap-3 bg-slate-900 p-4 rounded-lg'>
                                    <AiOutlineOpenAI className='text-3xl text-green-700' />
                                    <span>OpenAI</span>
                                </div>
                                <div className='flex items-center gap-3 bg-slate-900 p-4 rounded-lg'>
                                    <SiJira className='text-3xl text-blue-600' />
                                    <span>Jira</span>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Bachelor;