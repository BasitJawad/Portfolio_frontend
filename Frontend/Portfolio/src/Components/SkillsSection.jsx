import {FaHtml5} from "react-icons/fa";
import {DiBootstrap} from "react-icons/di";
import {FaReact} from "react-icons/fa";
import {FaNodeJs} from "react-icons/fa";
import {FaGit} from "react-icons/fa";
import {DiCss3} from "react-icons/di";
import {RiTailwindCssFill} from "react-icons/ri"
import { SiGreensock } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { SiAuth0 } from "react-icons/si";
import { SiPiped } from "react-icons/si";
import { DiMaterializecss } from "react-icons/di";
const skills = [
  { name: "HTML", icon: <FaHtml5 className="text-orange-500 text-4xl" /> },
  { name: "CSS", icon: <DiCss3 className="text-blue-500 text-4xl" /> },
  { name: "Bootstrap", icon: <DiBootstrap className="text-purple-500 text-4xl" /> },
  { name: "Tailwind CSS", icon: <RiTailwindCssFill className="text-cyan-500 text-4xl" /> },
  { name: "React.js", icon: <FaReact className="text-blue-400 text-4xl" /> },
  { name: "Material-UI", icon: <DiMaterializecss className="text-blue-600 text-4xl" /> },
  { name: "GSAP", icon: <SiGreensock className="text-green-500 text-4xl" /> },
  { name: "Express.js", icon: <SiExpress className="text-gray-400 text-4xl" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-green-600 text-4xl" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-green-500 text-4xl" /> },
  { name: "MySQL", icon: <SiMysql className="text-blue-700 text-4xl" /> },
  { name: "Auth0", icon: <SiAuth0 className="text-red-500 text-4xl" /> },
  { name: "Git", icon: <FaGit className="text-orange-600 text-4xl" /> },
  { name: "Pipedream", icon: <SiPiped className="text-blue-300 text-4xl" /> },
];

const SkillsSection = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white py-12">
      <h1 className="text-4xl font-bold mb-10 text-yellow-400">TOOLS & SKILLS</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 px-6 w-full max-w-4xl">
        {skills.map((skill, index) => (
          <div key={index} className="flex flex-col items-center p-4 bg-gray-800 rounded-lg shadow-lg hover:scale-105 transition-transform">
            {skill.icon}
            <p className="mt-2 text-lg font-semibold">{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsSection;
