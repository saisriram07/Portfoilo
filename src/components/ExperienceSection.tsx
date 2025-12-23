import { Briefcase, Calendar, CheckCircle } from "lucide-react";

const ExperienceSection = () => {
  const experienceData = {
    title: "Machine Learning Intern",
    company: "Cognibot",
    duration: "Internship Program",
    type: "Remote",
    responsibilities: [
      "Learned supervised & unsupervised learning concepts",
      "Worked on data preprocessing and feature engineering",
      "Gained experience in model evaluation and validation techniques", 
      "Participated in ML project workflows and best practices",
      "Developed understanding of algorithm selection and optimization"
    ]
  };

  return (
    <section id="experience" className="py-20 px-4 bg-brand-muted/30 scroll-animate">
      <div className="max-w-6xl mx-auto">
        <h2 className="section-header">Professional Experience</h2>
        <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto text-lg">
          Building practical knowledge through hands-on learning opportunities
        </p>
        
        <div className="max-w-4xl mx-auto">
          <div className="portfolio-card">
            <div className="flex items-start gap-6">
              {/* Company Logo/Icon */}
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center shadow-lg">
                  <Briefcase className="text-white" size={28} />
                </div>
              </div>
              
              {/* Experience Details */}
              <div className="flex-1">
                <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-2 mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-1">
                      {experienceData.title}
                    </h3>
                    <p className="text-xl font-semibold text-brand-primary mb-2">
                      {experienceData.company}
                    </p>
                  </div>
                  
                  <div className="flex flex-col lg:items-end gap-1">
                    <div className="flex items-center gap-2 text-gray-600">
                      <Calendar size={16} />
                      <span className="text-sm font-medium">{experienceData.duration}</span>
                    </div>
                    <span className="inline-block bg-brand-accent/20 text-brand-accent px-3 py-1 rounded-full text-sm font-medium">
                      {experienceData.type}
                    </span>
                  </div>
                </div>
                
                {/* Key Responsibilities */}
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                    <CheckCircle className="text-brand-primary" size={18} />
                    Key Learning & Responsibilities
                  </h4>
                  <ul className="space-y-2">
                    {experienceData.responsibilities.map((responsibility, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-brand-primary rounded-full mt-2 flex-shrink-0" />
                        <span className="text-gray-700 leading-relaxed">{responsibility}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                {/* Skills Gained */}
                <div className="mt-6 pt-6 border-t border-gray-100">
                  <h4 className="font-semibold text-gray-900 mb-3">Skills Developed</h4>
                  <div className="flex flex-wrap gap-2">
                    {["Machine Learning", "Data Preprocessing", "Model Evaluation", "Python", "Supervised Learning", "Unsupervised Learning"].map((skill) => (
                      <span key={skill} className="skill-badge">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;