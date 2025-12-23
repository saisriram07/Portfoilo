import { Award, ExternalLink, Calendar, CheckCircle } from "lucide-react";

const CertificationsSection = () => {
  const certifications = [
    {
      title: "Machine Learning Certification",
      issuer: "Cognibot",
      description: "Comprehensive training in machine learning concepts, algorithms, and practical implementation",
      skills: ["Supervised Learning", "Unsupervised Learning", "Model Evaluation", "Data Preprocessing"],
      date: "2024",
      verified: true
    },
    {
      title: "Full Stack Development",
      issuer: "Infosys Springboard", 
      description: "Complete web development program covering frontend and backend technologies",
      skills: ["Web Development", "Frontend", "Backend", "Database Management"],
      date: "2024",
      verified: true
    },
    {
      title: "Python Essentials 1",
      issuer: "Cisco",
      description: "Foundation level Python programming certification covering core concepts and syntax",
      skills: ["Python Programming", "Programming Fundamentals", "Problem Solving"],
      date: "2023",
      verified: true
    },
    {
      title: "Python Essentials 2", 
      issuer: "Cisco",
      description: "Advanced Python programming concepts including OOP, data structures, and algorithms",
      skills: ["Advanced Python", "OOP", "Data Structures", "Algorithms"],
      date: "2023",
      verified: true
    }
  ];

  return (
    <section id="certifications" className="py-20 px-4 bg-brand-muted/30 scroll-animate">
      <div className="max-w-6xl mx-auto">
        <h2 className="section-header">Certifications & Training</h2>
        <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto text-lg">
          Professional certifications that demonstrate my commitment to continuous learning
        </p>
        
        <div className="grid md:grid-cols-2 gap-6">
          {certifications.map((cert, index) => (
            <div key={index} className="portfolio-card group">
              {/* Header */}
              <div className="flex items-start gap-4 mb-4">
                <div className="flex-shrink-0">
                  <div className="p-3 bg-gradient-primary rounded-lg shadow-lg group-hover:shadow-xl transition-all duration-300">
                    <Award className="text-white" size={24} />
                  </div>
                </div>
                
                <div className="flex-1">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <h3 className="font-bold text-xl text-gray-900 mb-1">
                        {cert.title}
                      </h3>
                      <p className="text-brand-primary font-semibold">
                        {cert.issuer}
                      </p>
                    </div>
                    
                    <div className="text-right">
                      <div className="flex items-center gap-2 text-gray-600 mb-1">
                        <Calendar size={14} />
                        <span className="text-sm">{cert.date}</span>
                      </div>
                      {cert.verified && (
                        <div className="flex items-center gap-1 text-green-600">
                          <CheckCircle size={14} />
                          <span className="text-xs font-medium">Verified</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Description */}
              <p className="text-gray-700 leading-relaxed mb-4">
                {cert.description}
              </p>
              
              {/* Skills Covered */}
              <div className="mb-6">
                <h4 className="font-semibold text-gray-900 mb-2 text-sm">Skills Covered</h4>
                <div className="flex flex-wrap gap-1">
                  {cert.skills.map((skill, skillIndex) => (
                    <span key={skillIndex} className="bg-brand-primary/10 text-brand-primary px-2 py-1 rounded text-xs font-medium">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              
            </div>
          ))}
        </div>
        
        {/* Additional Training */}
        <div className="mt-12 text-center">
          <div className="portfolio-card inline-block">
            <h3 className="font-bold text-xl mb-4">Continuous Learning</h3>
            <p className="text-gray-700 mb-4 max-w-2xl">
              I believe in staying updated with the latest technologies and best practices. 
              Currently pursuing additional certifications in cloud computing and advanced data science.
            </p>
            <div className="flex flex-wrap gap-2 justify-center">
              <span className="skill-badge">Continuous Learning</span>
              <span className="skill-badge">Professional Development</span>
              <span className="skill-badge">Industry Standards</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;