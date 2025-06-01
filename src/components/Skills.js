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
  FaWordpress,
  FaAndroid,
  FaServer,
  FaMicrosoft,
  FaTerminal,
  FaCode,
  FaFolderOpen
} from "react-icons/fa";
import { 
  SiCplusplus, 
  SiFlask, 
  SiHugo, 
  SiMysql, 
  SiNextdotjs, 
  SiPostgresql, 
  SiOpenai, 
  SiFlutter,
  SiTailwindcss,
  SiVuedotjs,
  SiDotnet,
  SiPycharm,
  SiMicrosoftvisualstudio
} from "react-icons/si";

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
        { name: "JavaScript", icon: FaJsSquare, rank: 3, color: "text-yellow-300" },
        { name: "HTML & CSS", icon: FaHtml5, rank: 3, color: "text-orange-500" },
        { name: "C#", icon: SiCplusplus, rank: 2, color: "text-green-500" },
        { name: "PHP", icon: FaPhp, rank: 2, color: "text-violet-500" },
        { name: "SQL", icon: SiMysql, rank: 2, color: "text-blue-400" },
        { name: "C++", icon: SiCplusplus, rank: 2, color: "text-blue-500" },
        { name: "Dart", icon: SiFlutter, rank: 2, color: "text-blue-400" },
      ],
    },
    {
      category: "Front-End Development",
      skills: [
        { name: "Flutter", icon: SiFlutter, rank: 3, color: "text-blue-400" },
        { name: "Next.js", icon: SiNextdotjs, rank: 3, color: "text-white" },
        { name: "React", icon: FaReact, rank: 3, color: "text-blue-400" },
        { name: "Vue.js", icon: SiVuedotjs, rank: 2, color: "text-green-500" },
        { name: "TailwindCSS", icon: SiTailwindcss, rank: 3, color: "text-cyan-400" },
        { name: "Bootstrap", icon: FaBootstrap, rank: 3, color: "text-purple-600" },
        { name: "SASS", icon: FaSass, rank: 3, color: "text-pink-500" },
        { name: "Hugo", icon: SiHugo, rank: 2, color: "text-gray-300" },
      ],
    },
    {
      category: "Back-End Development",
      skills: [
        { name: "Node.js", icon: FaNodeJs, rank: 3, color: "text-green-500" },
        { name: "Flask", icon: SiFlask, rank: 3, color: "text-gray-400" },
        { name: "Laravel", icon: FaLaravel, rank: 2, color: "text-red-500" },
        { name: ".NET", icon: SiDotnet, rank: 2, color: "text-purple-500" },
        { name: "SOAP API", icon: FaTools, rank: 2, color: "text-gray-500" },
        { name: "REST API", icon: FaTools, rank: 3, color: "text-gray-500" },
        { name: "OpenAI API", icon: SiOpenai, rank: 2, color: "text-green-400" },
      ],
    },
    {
      category: "Database & Data Management",
      skills: [
        { name: "PostgreSQL", icon: SiPostgresql, rank: 3, color: "text-blue-400" },
        { name: "MySQL", icon: SiMysql, rank: 3, color: "text-blue-400" },
        { name: "SQL Server", icon: FaDatabase, rank: 2, color: "text-purple-400" },
        { name: "Database Design", icon: FaDatabase, rank: 2, color: "text-blue-400" },
      ],
    },
    {
      category: "Tools & Technologies",
      skills: [
        { name: "Git & GitHub", icon: FaGitAlt, rank: 3, color: "text-red-500" },
        { name: "Docker", icon: FaDocker, rank: 2, color: "text-blue-600" },
        { name: "Android Studio", icon: FaAndroid, rank: 2, color: "text-green-500" },
        { name: "PyCharm", icon: SiPycharm, rank: 2, color: "text-green-500" },
        { name: "WordPress", icon: FaWordpress, rank: 2, color: "text-blue-700" },
        { name: "CI/CD", icon: FaTools, rank: 2, color: "text-gray-500" },
        { name: "Server Management", icon: FaServer, rank: 2, color: "text-gray-400" },
      ],
    },
    {
      category: "Soft Skills",
      skills: [
        { name: "Team Leadership", icon: FaStar, color: "text-yellow-300" },
        { name: "Problem-Solving", icon: FaStar, color: "text-yellow-300" },
        { name: "Communication", icon: FaStar, color: "text-yellow-300" },
        { name: "Adaptability", icon: FaStar, color: "text-yellow-300" },
        { name: "Time Management", icon: FaStar, color: "text-yellow-300" },
        { name: "Project Management", icon: FaStar, color: "text-yellow-300" },
      ],
    },
  ];

  return (
    <motion.section
      className="py-16 px-4 bg-background relative overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Decorative Code Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 text-accent/5 text-6xl font-mono">
          {"<skills>"}
        </div>
        <div className="absolute bottom-20 left-10 text-accent/5 text-6xl font-mono">
          {"</skills>"}
        </div>
      </div>

      <div className="container mx-auto max-w-7xl">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="bg-card/50 backdrop-blur-sm p-6 rounded-lg border border-accent/20 inline-block">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
              <span className="text-sm text-muted ml-2">skills.js</span>
            </div>
            <h2 className="text-4xl font-bold">
              <span className="text-accent">&lt;</span>
              Skills & Expertise
              <span className="text-accent">/&gt;</span>
            </h2>
            <div className="w-24 h-1 bg-accent mx-auto rounded-full mt-4"></div>
          </div>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {categorizedSkills.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              className="bg-card/50 backdrop-blur-sm p-6 rounded-lg border border-accent/20 shadow-xl hover:border-accent/40 transition-all"
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-6">
                <FaFolderOpen className="text-2xl text-accent" />
                <h3 className="text-xl font-semibold text-accent">{category.category}</h3>
              </div>

              {/* Skills List */}
              <ul className="space-y-4">
                {category.skills
                  .sort((a, b) => (b.rank || 0) - (a.rank || 0))
                  .map((skill, skillIndex) => {
                    const IconComponent = skill.icon;
                    return (
                      <motion.li
                        key={skillIndex}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: skillIndex * 0.05 }}
                        className="flex items-center justify-between p-3 rounded-lg hover:bg-accent/10 transition-all group"
                      >
                        <div className="flex items-center gap-4">
                          {IconComponent && (
                            <div className="p-2 rounded-lg bg-accent/10 group-hover:bg-accent/20 transition-all">
                              <IconComponent className={`text-2xl ${skill.color}`} />
                            </div>
                          )}
                          <span className="text-white text-lg group-hover:text-accent transition-colors">
                            {skill.name}
                          </span>
                        </div>
                        {skill.rank && (
                          <div className="relative">
                            <Image
                              src={rankIcons[skill.rank]}
                              alt={`Rank ${skill.rank}`}
                              width={32}
                              height={32}
                              className="object-cover transition-transform group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-accent/20 rounded-full blur-sm opacity-0 group-hover:opacity-100 transition-opacity"></div>
                          </div>
                        )}
                      </motion.li>
                    );
                  })}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Decorative Terminal Icon */}
        <motion.div
          className="absolute bottom-8 right-8 bg-card/80 backdrop-blur-sm p-4 rounded-lg border border-accent/20 shadow-lg"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <FaTerminal className="text-2xl text-accent" />
        </motion.div>
      </div>
    </motion.section>
  );
}
