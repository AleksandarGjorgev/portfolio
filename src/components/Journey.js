import { motion } from "framer-motion";
import { FaCode, FaTerminal, FaCalendarAlt, FaMapMarkerAlt, FaLink, FaTools } from "react-icons/fa";

export default function Timeline() {
  const timelineEvents = [
    {
      type: "Education",
      date: "Sep 2018 - May 2023",
      title: "High School Diploma",
      description: "Comprehensive study of programming fundamentals and IT systems. Developed strong foundation in C++ programming, creating various applications and algorithms. Mastered web development basics through hands-on projects in JavaScript, HTML, and CSS. Gained practical experience in network administration, including setting up and maintaining local networks, troubleshooting hardware issues, and providing IT support. Completed multiple projects involving database management and system administration.",
      location: "SŠTS Šiška, Ljubljana",
      link: "https://www.ssts.si",
      skills: [
        "Programming Fundamentals",
        "C++ Development",
        "JavaScript & Web Basics",
        "HTML5 & CSS3",
        "Network Administration",
        "IT Support & Troubleshooting",
        "Computer Hardware",
        "Database Management",
        "System Administration"
      ]
    },
    {
      type: "Work",
      date: "Apr 2022 - Jun 2022",
      title: "Frontend Developer (Internship)",
      description: "Led the development of responsive websites using Hugo and Bootstrap frameworks. Implemented modern UI/UX principles to create intuitive user interfaces. Collaborated with senior developers using Git for version control, learning industry best practices. Developed custom components and templates, focusing on accessibility and cross-browser compatibility. Created static sites with optimized performance and SEO best practices. Participated in code reviews and agile development processes.",
      location: "Methodyca",
      link: "https://www.methodyca.com",
      skills: [
        "Hugo Framework",
        "Bootstrap 5",
        "Git & GitHub",
        "Responsive Design",
        "UI/UX Design",
        "Team Collaboration",
        "Static Site Generation",
        "SEO Optimization",
        "Cross-browser Testing",
        "Agile Development"
      ]
    },
    {
      type: "Education",
      date: "Oct 2023 - Present",
      title: "College Diploma (Ongoing)",
      description: "Advanced studies in modern software development and cloud technologies. Deep dive into React.js and Node.js, building full-stack applications with modern architecture. Learning cloud computing principles and implementing scalable solutions. Mastering API development and integration, including REST and GraphQL. Working with various databases and implementing security best practices. Developing skills in DevOps and continuous integration/deployment.",
      location: "Sofizo d.o.o",
      link: "https://www.sofizo.si",
      skills: [
        "React.js & Next.js",
        "Node.js & Express",
        "Cloud Computing (AWS)",
        "API Development",
        "Database Design",
        "DevOps Practices",
        "CI/CD Pipelines",
        "Security Implementation",
        "System Architecture"
      ]
    },
    {
      type: "Work",
      date: "May 2023 - Jul 2023",
      title: "Frontend Developer",
      description: "Spearheaded the development of a comprehensive car booking platform using Laravel and Vue.js. Designed and implemented a modern, responsive user interface with focus on user experience. Integrated payment gateways and booking systems using REST APIs. Implemented real-time updates and notifications using WebSocket technology. Optimized application performance through code splitting and lazy loading. Collaborated with backend team to design and implement API endpoints. Used Docker for containerization and consistent development environments.",
      location: "Avant Car",
      link: "https://www.avantcar.si",
      skills: [
        "Laravel Framework",
        "Vue.js & Vuex",
        "Docker & Containerization",
        "REST API Integration",
        "WebSocket Implementation",
        "Payment Gateway Integration",
        "Performance Optimization",
        "Frontend Architecture",
        "Team Collaboration",
        "CI/CD Implementation"
      ]
    },
    {
      type: "Work",
      date: "Oct 2023 - Feb 2024",
      title: "Volunteer Soldier",
      description: "Completed intensive military service focusing on leadership development and team management. Led small units in various tactical exercises and operations. Developed strong decision-making skills under pressure and in challenging conditions. Mastered effective communication and coordination in high-stress situations. Gained experience in strategic planning and resource management. Participated in specialized training programs for crisis management and emergency response.",
      location: "Slovenian Armed Forces",
      link: "https://www.slovenskavojska.si",
      skills: [
        "Leadership & Team Management",
        "Strategic Planning",
        "Crisis Management",
        "Decision Making",
        "Resource Management",
        "Physical Endurance",
        "Discipline & Organization",
        "Emergency Response",
        "Team Coordination"
      ]
    },
    {
      type: "Work",
      date: "Apr 2024 - Dec 2024",
      title: "Software Developer",
      description: "Led the development of a sophisticated self-service POS system using Flutter for the user interface. Designed and implemented a modern, intuitive kiosk interface with touch-screen optimization. Integrated hardware components including Glory CI-10 cash recycler using SOAP APIs. Developed robust backend services in Python for transaction processing and data management. Implemented secure payment processing systems with encryption and compliance measures. Created comprehensive testing and deployment pipelines. Provided technical support and documentation for system deployment. Collaborated with hardware vendors for seamless integration.",
      location: "Printec Group",
      link: "https://www.printecgroup.si",
      skills: [
        "Flutter Development",
        "Python Backend",
        "SOAP API Integration",
        "Hardware Integration",
        "Payment Systems",
        "Kiosk Development",
        "CI-10 Integration",
        "Security Implementation",
        "Testing & QA",
        "Technical Documentation",
        "System Architecture",
        "Team Leadership"
      ]
    },
    {
      type: "Work",
      date: "Jan 2024 - Present",
      title: "Software Developer",
      description: "Full-stack development of applications and supply chain solutions. Leading the development of Yummzy Meal Planner using Flutter for cross-platform mobile development. Implementing OpenAI API integration for intelligent meal suggestions and user interactions. Developing warehouse management system using Android Studio (Java) with real-time tracking capabilities. Creating REST APIs for seamless integration between different systems. Implementing complex database solutions with PostgreSQL for efficient data management. Working on supply chain optimization using C# and SQL for inventory management. Developing modern solutions for logistics optimization and real-time tracking.",
      location: "E.R.S. Rokada",
      link: "https://ers-rokada.si/",
      skills: [
        "Flutter & Dart",
        "Flask & Python",
        "PostgreSQL",
        "Android Studio",
        "Java Development",
        "REST API Design",
        "C# & .NET",
        "SQL & Database Design",
        "OpenAI API Integration",
        "Supply Chain Systems",
        "Real-time Tracking",
        "System Integration",
        "Mobile Development"
      ]
    }
  ];

  return (
    <motion.section
      className="relative py-16 px-4 bg-background overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Decorative Code Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 text-accent/5 text-6xl font-mono">
          {"<journey>"}
        </div>
        <div className="absolute bottom-20 left-10 text-accent/5 text-6xl font-mono">
          {"</journey>"}
        </div>
      </div>

      <div className="container mx-auto max-w-6xl">
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
              <span className="text-sm text-muted ml-2">journey.js</span>
            </div>
            <h2 className="text-4xl font-bold">
              <span className="text-accent">&lt;</span>
              My Journey
              <span className="text-accent">/&gt;</span>
            </h2>
            <div className="w-24 h-1 bg-accent mx-auto rounded-full mt-4"></div>
          </div>
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-5xl mx-auto">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-accent/20"></div>

          <div className="space-y-12">
            {timelineEvents.map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`relative flex flex-col sm:flex-row ${
                  index % 2 === 0 ? "sm:justify-start" : "sm:justify-end"
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-accent border-4 border-background shadow-lg">
                  <FaCode className="text-xs text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
                </div>

                {/* Event Content */}
                <div
                  className={`w-full sm:w-[450px] bg-card/50 backdrop-blur-sm p-6 rounded-lg shadow-xl ${
                    index % 2 === 0 ? "sm:ml-8" : "sm:mr-8"
                  } border border-accent/20`}
                >
                  {/* Event Header */}
                  <div className="flex items-center gap-3 mb-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium flex items-center gap-2 ${
                      event.type === "Education" 
                        ? "bg-green-500/20 text-green-400" 
                        : "bg-blue-500/20 text-blue-400"
                    }`}>
                      <FaCalendarAlt className="text-xs" />
                      {event.type}
                    </span>
                    <time className="text-sm font-light text-muted flex items-center gap-2">
                      <FaTerminal className="text-xs" />
                      {event.date}
                    </time>
                  </div>

                  {/* Event Title */}
                  <h3 className="text-xl font-semibold text-white mb-2 flex items-center gap-2">
                    <FaCode className="text-accent" />
                    {event.title}
                  </h3>

                  {/* Location with Link */}
                  {event.link && (
                    <a
                      href={event.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-accent hover:text-accent/80 transition-colors duration-300 flex items-center gap-2 mb-3"
                    >
                      <FaMapMarkerAlt className="text-sm" />
                      <h4 className="text-lg font-medium">
                        {event.location}
                      </h4>
                      <FaLink className="text-sm" />
                    </a>
                  )}

                  {/* Description */}
                  <p className="text-muted mb-4 leading-relaxed">
                    {event.description}
                  </p>

                  {/* Skills */}
                  <div className="mt-4">
                    <h5 className="text-sm font-medium text-accent mb-3 flex items-center gap-2">
                      <FaTools className="text-sm" />
                      Key Skills & Technologies:
                    </h5>
                    <div className="flex flex-wrap gap-2">
                      {event.skills.map((skill, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 text-sm rounded-full bg-accent/10 text-accent border border-accent/20"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
}
