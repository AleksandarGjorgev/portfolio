const skills = [
    "Python",
    "Next.js",
    "React",
    "Node.js",
    "Flutter",
    "Laravel",
    "SQL",
    "SOAP Integration",
  ];
  
  export default function SkillsPage() {
    return (
      <section className="p-8">
        <h2 className="text-3xl font-bold text-center mb-6">Moje veščine</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="p-4 bg-gray-100 border border-gray-300 rounded shadow hover:bg-blue-100 transition"
            >
              {skill}
            </div>
          ))}
        </div>
      </section>
    );
  }
  