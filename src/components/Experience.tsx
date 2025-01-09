import { useNavigate } from 'react-router-dom';

type ExperienceItemProps = {
  position: string;
  company: string;
  period: string;
  work?: string;
  url: string;
  onClick: () => void;
};

const ExperienceItem = ({ position, company, period, work, onClick }: ExperienceItemProps) => (
  <>
  <div className="block mb-3 cursor-pointer" onClick={onClick}>
    <div className="mb-6 p-6 bg-transparent rounded-lg shadow-md border border-white transform transition duration-300 hover:shadow-md hover:scale-105">
      <h3 className="text-2xl font-bold text-amber-100 mb-2">{position}</h3>
      <p className="text-lg text-white mb-1">{company}</p>
      <p className="text-sm text-white mb-3">{period}</p>
      {work && <p className="text-md text-white italic">{work}</p>}
    </div>
  </div>
  </>
);

const Experience = () => {
  const navigate = useNavigate();
  const experiences = [
    { id: 1, position: "Internship", company: "Swipload", period: "2024 - 2024", work: "Svelte Application development", url: "" },
    { id: 2, position: "Groupmember", company: "UIA", period: "2023 - 2023", work: "Application for Nøsted", url: "" },
  ];

  const handleClick = (id: number) => {
    if (id === 1) {
      navigate('/swipload');
    } else if (id === 2) {
      navigate('/nosted');
    } else {
      window.open(experiences.find(exp => exp.id === id)?.url, '_blank');
    }
  };

  return (
    <div id='experience' className="lg:w-10/12 lg:ml-24 p-4">
      <h2 className="text-3xl font-bold text-white mb-6 border-b-2 border-amber-100 pb-2">Experience</h2>
      <div className="space-y-4">
        {experiences.map((exp, index) => (
          <ExperienceItem key={index} {...exp} onClick={() => handleClick(exp.id)} />
        ))}
      </div>
    </div>
  );
};


export default Experience;