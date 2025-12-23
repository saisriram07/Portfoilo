import { GraduationCap, Calendar, Award, User } from "lucide-react";

const AboutSection = () => {
  const educationData = [
    {
      degree: "B.E. Computer Science Engineering",
      institution: "Sathyabama University",
      duration: "2021 - 2025",
      grade: "CGPA: 7.67",
      icon: GraduationCap,
    },
    {
      degree: "Intermediate (MPC)",
      institution: "Vidya Vikas Junior College, Eluru",
      duration: "2019 - 2021",
      grade: "78.3%",
      icon: Calendar,
    },
    {
      degree: "Schooling (CBSE)",
      institution: "Vasavi Ideal Public School",
      duration: "2018 - 2019",
      grade: "72.2%",
      icon: Award,
    },
  ];

  return (
    <section id="about" className="py-20 px-4 bg-brand-muted/30 scroll-animate">
      <div className="max-w-6xl mx-auto">
        <h2 className="section-header">About Me</h2>
        <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto text-lg">
          Learn more about my educational journey and professional aspirations
        </p>
        
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Personal Info */}
          <div className="portfolio-card">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-brand-primary/10 rounded-lg">
                <User className="text-brand-primary" size={24} />
              </div>
              <h3 className="text-2xl font-bold">Personal Profile</h3>
            </div>
            
            <div className="space-y-4">
              <p className="text-gray-700 leading-relaxed">
                Entry-level software professional with a strong foundation in Computer Science 
                and a clear understanding of software development basics. Possesses good 
                problem-solving skills, attention to detail, and a practical approach to 
                building reliable and efficient solutions.
              </p>
              
              <p className="text-gray-700 leading-relaxed">
                Adaptable and focused, with the ability to work well in team-based and 
                structured environments. Committed to continuous learning, skill development, 
                and contributing effectively to technology-driven organizational goals.
              </p>
              
              <div className="flex flex-wrap gap-2 mt-6">
                <span className="skill-badge">Problem Solving</span>
                <span className="skill-badge">Team Collaboration</span>
                <span className="skill-badge">Continuous Learning</span>
                <span className="skill-badge">Innovation</span>
              </div>
            </div>
          </div>
          
          {/* Education Timeline */}
          <div className="portfolio-card">
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <div className="p-3 bg-brand-secondary/10 rounded-lg">
                <GraduationCap className="text-brand-secondary" size={24} />
              </div>
              Education Journey
            </h3>
            
            <div className="space-y-6">
              {educationData.map((edu, index) => (
                <div key={index} className="timeline-item group">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-gradient-primary rounded-lg shadow-lg group-hover:shadow-xl transition-all duration-300">
                      <edu.icon className="text-white" size={20} />
                    </div>
                    
                    <div className="flex-1">
                      <h4 className="font-bold text-lg text-gray-900 mb-1">
                        {edu.degree}
                      </h4>
                      <p className="text-brand-primary font-medium mb-1">
                        {edu.institution}
                      </p>
                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1">
                        <span className="text-gray-600 text-sm">{edu.duration}</span>
                        <span className="text-brand-accent font-semibold text-sm">
                          {edu.grade}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;