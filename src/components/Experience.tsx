type ExperienceItem = {
  position: string;
  company: string;
  period: string;
  work?: string;
  url: string;
};


const ExperienceItem = ({ position, company, period, work, url }: ExperienceItem) => (
  <>
  <a href={url} target='_blank' rel="noopener noreferrer" className="block mb-3">
  <div className="mb-6 p-6 bg-transparent rounded-lg shadow-md border border-white transform transition duration-300 hover:shadow-md hover:scale-105">
    <h3 className="text-2xl font-bold text-amber-100 mb-2">{position}</h3>
    <p className="text-lg text-white mb-1">{company}</p>
    <p className="text-sm text-white mb-3">{period}</p>
    {work && <p className="text-md text-white italic">{work}</p>}
  </div>
  </a>
  </>
);

const Experience = () => {
  const experiences = [
    { position: "Internship", company: "Swipload", period: "2024 Aug - 2024 Nov", work: "Svelte Application development", url: "https://nthomtng.github.io/PraksisNettSide/" },
    { position: "Groupmember", company: "UIA", period: "2023 Aug - 2023 Dec", work: ".NET application for Nøsted", url: "https://github.com/jonaslefdal/AdminDesk" },
  ];

  return (
    <div id='experience' className="lg:w-10/12 lg:ml-24 p-4">
      <h2 className="text-3xl font-bold text-white mb-6 border-b-2 border-amber-100 pb-2">Experience</h2>
      <div className="space-y-4">
        {experiences.map((exp, index) => (
          <ExperienceItem key={index} {...exp} />
        ))}
      </div>
    </div>
  );
};

export default Experience;