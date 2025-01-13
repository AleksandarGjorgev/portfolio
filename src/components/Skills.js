import { motion } from "framer-motion";
import Image from 'next/image';
import {
  FaBootstrap,
  FaDatabase,
  FaDocker,
  FaGitAlt,
  FaHtml5,
  FaJsSquare,
  FaLaravel,
  FaNodeJs,
  FaPhp,
  FaPython,
  FaReact,
  FaSass,
  FaStar,
  FaTools,
  FaWordpress
} from "react-icons/fa";
import { SiCplusplus, SiFlask, SiHugo, SiMysql, SiNextdotjs } from "react-icons/si";

export default function Skills() {
  const rankIcons = {
    1: "/images/rank-1.png",
    2: "/images/rank-2.png",
    3: "/images/rank-3.png",
  };

  const categorizedSkills = [
    {
      category: "Programming Languages",
      skills: [
        { name: "Python", icon: FaPython, rank: 3, color: "text-yellow-400" },
        { name: "HTML & CSS", icon: FaHtml5, rank: 3, color: "text-orange-500" },
        { name: "Node.js", icon: FaNodeJs, rank: 3, color: "text-green-500" },
        { name: "C#", icon: SiCplusplus, rank: 2, color: "text-blue-500" },
        { name: "JavaScript", icon: FaJsSquare, rank: 2, color: "text-yellow-300" },
        { name: "PHP", icon: FaPhp, rank: 2, color: "text-violet-500" },
        { name: "SQL", icon: SiMysql, rank: 2, color: "text-blue-400" },
        { name: "C++", icon: SiCplusplus, rank: 2, color: "text-blue-500" },
      ],
    },
    {
      category: "Front-End Development",
      skills: [
        { name: "Next.js", icon: SiNextdotjs, rank: 3, color: "text-white" },
        { name: "React", icon: FaReact, rank: 3, color: "text-blue-400" },
        { name: "Bootstrap", icon: FaBootstrap, rank: 3, color: "text-purple-600" },
        { name: "SASS", icon: FaSass, rank: 3, color: "text-pink-500" },
        { name: "Hugo", icon: SiHugo, rank: 2, color: "text-gray-300" },
      ],
    },
    {
      category: "Back-End Development",
      skills: [
        { name: "Flask", icon: SiFlask, rank: 3, color: "text-gray-400" },
        { name: "Laravel", icon: FaLaravel, rank: 2, color: "text-red-500" },
        { name: "SOAP Integration", icon: FaTools, rank: 2, color: "text-gray-500" },
        { name: "RESTful API Development", icon: FaTools, rank: 2, color: "text-gray-500" },
      ],
    },
    {
      category: "Tools & Technologies",
      skills: [
        { name: "Git (Version Control)", icon: FaGitAlt, rank: 3, color: "text-red-500" },
        { name: "WordPress (CMS)", icon: FaWordpress, rank: 2, color: "text-blue-700" },
        { name: "Docker", icon: FaDocker, rank: 1, color: "text-blue-600" },
      ],
    },
    {
      category: "Database Management",
      skills: [
        { name: "MySQL", icon: SiMysql, rank: 3, color: "text-blue-400" },
        { name: "SQL Server", icon: FaDatabase, rank: 2, color: "text-purple-400" },
      ],
    },
    {
      category: "Soft Skills",
      skills: [
        { name: "Teamwork", icon: FaStar, color: "text-yellow-300" },
        { name: "Adaptability", icon: FaStar, color: "text-yellow-300" },
        { name: "Communication", icon: FaStar, color: "text-yellow-300" },
        { name: "Problem-Solving Under Pressure", icon: FaStar, color: "text-yellow-300" },
        { name: "Self-Motivation", icon: FaStar, color: "text-yellow-300" },
      ],
    },
  ];

  return (
    <motion.section
      className="py-16 px-4 bg-background text-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-3xl font-bold text-accent mb-8">Skills</h2>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
        {categorizedSkills.map((category, categoryIndex) => (
          <div key={categoryIndex} className="bg-card p-6 rounded-lg shadow-md">
            {/* Category Title */}
            <h3 className="text-xl font-semibold text-accent mb-4">{category.category}</h3>
            {/* Skills List */}
            <ul className="space-y-4">
              {category.skills
                .sort((a, b) => b.rank - a.rank) // Sort by rank, highest first
                .map((skill, skillIndex) => (
                  <li
                    key={skillIndex}
                    className="flex items-center justify-between hover:bg-muted/10 p-2 rounded transition-all"
                  >
                    <div className="flex items-center gap-4">
                      <skill.icon className={`text-2xl ${skill.color}`} />
                      <span className="text-white text-lg">{skill.name}</span>
                    </div>
                    {skill.rank && (
                      <Image
                        src={rankIcons[skill.rank]}
                        alt={`Rank ${skill.rank}`}
                        width={32}
                        height={32}
                        className="object-cover"
                      />
                    )}
                  </li>
                ))}
            </ul>
          </div>
        ))}
      </div>
    </motion.section>
  );
}
