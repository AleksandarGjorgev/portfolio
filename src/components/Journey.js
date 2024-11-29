import { motion } from "framer-motion";

export default function Timeline() {
  const timelineEvents = [
    {
      type: "Education",
      date: "Sep 2018 - May 2023",
      title: "High School Diploma",
      description:
        "Studied programming basics, web development, and IT systems. Learned programming in C++, basic JavaScript, HTML, and CSS. Gained experience in network setup, IT support, and computer maintenance. at SŠTS Šiška, Ljubljana.",
      link: "https://www.ssts.si",
    },
    {
      type: "Work",
      date: "Apr 2022 - Jun 2022",
      title: "Frontend Developer (Internship)",
      description:
        "Designed responsive websites using Hugo and Bootstrap during an internship. Focused on improving user experience and accessibility. Learned version control with Git and collaborated with senior developers. Worked with HTML, CSS, JavaScript, and gained experience in static site generation. at Methodyca.",
      link: "https://www.methodyca.com",
    },
    {
      type: "Education",
      date: "Oct 2023 - Present",
      title: "College Diploma (Ongoing)",
      description:
        "Specializing in programming, cloud computing, and API integrations. Learned modern web development frameworks, including React and Node.js. at Sofizo d.o.o",
      link: "https://www.sofizo.si",
    },
    {
      type: "Work",
      date: "May 2023 - Jul 2023",
      title: "Frontend Developer",
      description:
        "Developed a car booking platform using Laravel and Docker. Implemented frontend components with JavaScript and Vue.js, ensuring a seamless user experience. Used Docker for containerization to maintain a consistent development environment. Collaborated closely with backend developers to integrate APIs and improve the platform's performance. at Avant Car",
      link: "https://www.avantcar.si",
    },
    {
      type: "Work",
      date: "Oct 2023 - Feb 2024",
      title: "Volunteer Soldier",
      description:
        "Completed volunteer military service, military tactics, focusing on teamwork, resilience, and survival skills. Developed strong discipline, physical endurance, and leadership skills. Gained experience in effective communication and teamwork under high-pressure situations. at Slovenian Armed Forces",
      link: "https://www.slovenskavojska.si",
    },
    {
      type: "Work",
      date: "Apr 2024 - Dec 2024",
      title: "Software Developer",
      description:
        "Developed a self-service POS system integrating kiosk and Glory CI-10. Worked on integrating hardware and software solutions using SOAP APIs. Developed backend services in Python and Node.js to handle transactions and maintain data integrity. Ensured security and compliance in payment processing while providing technical support for system deployment. at Printec Group",
      link: "https://www.printecgroup.com",
    },
  ];

  return (
    <div className="relative text-white py-16 px-4 sm:px-8">
      <h2 className="text-center text-4xl font-bold text-accent mb-12">My Timeline</h2>
      <div className="relative max-w-5xl mx-auto">
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-600"></div>
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
              {/* Dot */}
              <div
                className={`absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full ${
                  event.type === "Education" ? "bg-green-500" : "bg-blue-500"
                } border-4 border-gray-900`}
              ></div>
              {/* Event Content */}
              <div
                className={`w-full sm:w-[350px] bg-gray-800 p-6 rounded-lg shadow-lg ${
                  index % 2 === 0 ? "sm:ml-8" : "sm:mr-8"
                }`}
              >
                <time className="text-sm font-light text-gray-400">{event.date}</time>
                <h3 className="text-xl font-semibold mt-2">{event.title}</h3>
                {event.link && (
                  <a
                    href={event.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent mt-1 mb-2 inline-block"
                  >
                    <h4 className={`text-lg font-medium mt-1 ${event.type === "Education" ? "text-green-500" : "text-blue-500"}`}>
                      {event.description.split(" at ")[1]}
                    </h4>
                  </a>
                )}
                <p className="mt-2 text-gray-300">
                  {event.description.split(" at ")[0]}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
