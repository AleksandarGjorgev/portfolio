import { motion } from "framer-motion";

const mentors = [
  {
    name: "Tomislav Angelov",
    title: "Mentor at Methodyca",
    contact: "+386 31 302 465",
    description: "Tomislav Angelov was my mentor during my internship at Methodyca, where I worked on developing the company's front-end website as my first major project. He provided guidance and feedback that significantly helped me improve my front-end development skills."
  },
  {
    name: "Matej Šeme",
    title: "Mentor at Printec Group",
    contact: "+386 68 182 388",
    description: "Matej Šeme was my mentor while working at Printec Group. He guided me in developing a self-service POS system, including the implementation of a Flask server for API communication and integration with the Glory CI-10 cash management system."
  },
  {
    name: "Domen Novak",
    title: "Field Manager at Printec Group",
    contact: "+386 51 624 880",
    description: "Domen Novak was my first point of contact with Printec Group. I initially worked in the field as a technician under his supervision, which provided me with practical experience. Later, I was moved to the development team at Printec Group."
  }
];

export default function ContactReferences() {
  return (
    <motion.section
      className="w-full mb-20 p-8 text-center text-primary"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <h2 className="text-4xl font-bold mb-8">Mentors and References</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {mentors.map((mentor, index) => (
          <motion.div
            key={index}
            className="p-6 bg-card shadow-md rounded-lg"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <h3 className="text-2xl font-semibold mb-2">{mentor.name}</h3>
            <p className="text-lg mb-1">{mentor.title}</p>
            <p className="text-secondary mb-4">{mentor.contact}</p>
            <p className="text-sm text-muted">{mentor.description}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
