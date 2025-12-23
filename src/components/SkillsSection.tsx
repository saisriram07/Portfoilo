import { Code, Database, Wrench, Globe } from "lucide-react";

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Frontend",
      icon: Globe,
      color: "bg-blue-500",
      skills: ["HTML", "CSS", "JavaScript"]
    },
    {
      title: "Languages",
      icon: Code,
      color: "bg-purple-500", 
      skills: ["Python", "C"]
    },
    {
      title: "Libraries/Frameworks",
      icon: Wrench,
      color: "bg-green-500",
      skills: ["NumPy", "Pandas", "Matplotlib"]
    },
    {
      title: "Database & Tools",
      icon: Database,
      color: "bg-orange-500",
      skills: ["SQL", "Git & GitHub", "Excel"]
    }
  ];

  return (
    <section id="skills" className="py-20 px-4 scroll-animate">
      <div className="max-w-6xl mx-auto">
        <h2 className="section-header">Technical Skills</h2>
        <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto text-lg">
          Technologies and tools I use to bring ideas to life
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="portfolio-card group">
              <div className="flex items-center gap-3 mb-6">
                <div className={`p-3 ${category.color} rounded-lg shadow-lg group-hover:shadow-xl transition-all duration-300`}>
                  <category.icon className="text-white" size={24} />
                </div>
                <h3 className="font-bold text-lg">{category.title}</h3>
              </div>
              
              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="skill-badge w-full justify-center">
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        {/* Additional Skills Summary */}
        <div className="mt-12 text-center">
          <div className="portfolio-card inline-block">
            <h3 className="font-bold text-xl mb-4">Core Competencies</h3>
            <div className="flex flex-wrap gap-2 justify-center">
              {["Problem Solving", "Algorithm Design", "Data Analysis", "Web Development", 
                "Machine Learning", "Version Control", "Database Management", "API Development"].map((skill) => (
                <span key={skill} className="skill-badge">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;