import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import office1 from '../assets/office1.jpg';
import { SiSvelte, SiDocker, SiAzuredevops, SiMicrosoftazure, SiDotnet } from 'react-icons/si';
import { TbApi } from 'react-icons/tb';

const Swipload: React.FC = () => {
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

      const handleBackClick = () => {
        navigate('/');
      };

    return (
        <div className='min-h-screen p-8 bg-gradient-to-b from-slate-900 via-slate-800 to-blue-950'>
            <div className='container mx-auto max-w-5xl'>
                <button 
                    onClick={handleBackClick} 
                    className="mb-8 px-6 py-3 bg-blue-700 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 transition duration-300 ease-in-out cursor-pointer"
                >
                    ← Back
                </button>
                <div className='p-6'>
                    <h1 className="text-3xl font-bold text-white mb-6 lg:ml-52">Internship with Swipload Technologies AS</h1>
                </div>
                <div className='p-4 mb-10'>
                    <p className='text-white text-lg leading-relaxed border rounded-lg p-4'>
                      I had my internship during the fall of 2024 at Swipload Technologies AS, a startup company that works in 
                      software development to streamline processes within logistics and transportation by eliminating manual interactions 
                      with carriers through tools like Excel. The main functions include freight order management, 
                      real-time freight status updates, delivery confirmation solutions, and data analysis reports.
                    </p>
                </div>

                <div className='mb-10'>
                    <img
                    src={office1}
                    alt='office'
                    />
                </div>

                <div className='p-4 mb-8'>
                    <h2 className='text-2xl font-bold text-white mb-6 text-center'>Technologies & Skills Learned</h2>
                    <div className='grid grid-cols-2 md:grid-cols-3 gap-6 text-white'>
                        <div className='flex items-center gap-3 bg-slate-900 p-4 rounded-lg'>
                            <SiSvelte className='text-3xl text-orange-500' />
                            <span>Svelte</span>
                        </div>
                        <div className='flex items-center gap-3 bg-slate-900 p-4 rounded-lg'>
                            <SiDocker className='text-3xl text-blue-500' />
                            <span>Docker</span>
                        </div>
                        <div className='flex items-center gap-3 bg-slate-900 p-4 rounded-lg'>
                            <SiAzuredevops className='text-3xl text-blue-400' />
                            <span>Azure DevOps</span>
                        </div>
                        <div className='flex items-center gap-3 bg-slate-900 p-4 rounded-lg'>
                            <TbApi className='text-3xl text-green-500' />
                            <span>API Integration</span>
                        </div>
                        <div className='flex items-center gap-3 bg-slate-900 p-4 rounded-lg'>
                            <SiDotnet className='text-3xl text-yellow-500' />
                            <span>.NET based backend
                            </span>
                        </div>
                        <div className='flex items-center gap-3 bg-slate-900 p-4 rounded-lg'>
                            <SiMicrosoftazure className='text-3xl text-blue-300' />
                            <span>Azure Database</span>
                        </div>
                    </div>
                </div>

                <div className='p-4 mb-8'>
                    <p className='text-white text-lg leading-relaxed border rounded-lg p-4'>
                      I started the internship with little expectations of what I would do and learn. After my time at the company,
                      I have learned an incredible amount about what it is like to work in a professional environment with other developers. I have gained a deeper understanding
                      of what it is like to work with a professional team, and gained a deeper appreciation for development work, especially when it comes to
                      structure, code quality, and testing. During the project, we mainly worked with Svelte as a front-end framework, which was new to me.
                      I have previously worked with React, so it was an interesting experience to work with a different framework.
                      I also gained valuable experience with Azure DevOps, Docker, API integration, and Azure Databases.
                      My internship experience at Swipload has been very positive, and I have learned a lot about what it is like to
                      be part of a professional development team.
                    </p>
                </div>

                <div className='p-4 mb-10'>
                    <p className='text-white text-lg leading-relaxed'>
                      For more detailed information about my time there, head over to our group's internship website.
                    </p>
                    <button 
                    onClick={() => window.open('https://nthomtng.github.io/PraksisNettSide/index.html')}
                    className="mt-4 px-6 py-3 bg-blue-700 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 transition duration-300 ease-in-out cursor-pointer"
                >
                    Internship website
                </button>
                </div>

            </div>
        </div>
    );
};

export default Swipload;