import { ExternalLink, Github, Cpu, Cloud, Zap } from "lucide-react";

const ProjectsSection = () => {
  const projects = [
    {
      title: "Real-Time Air Quality Prediction",
      subtitle: "IoT + Machine Learning System",
      description: "Built comprehensive IoT system with sensors (MQ-135, DHT11) for real-time air quality monitoring. Implemented Random Forest ML model for accurate air quality predictions with data visualization dashboard.",
      technologies: ["IoT", "Python", "Random Forest", "MQ-135 Sensor", "DHT11", "Machine Learning", "Data Visualization"],
      icon: Cloud,
      color: "bg-blue-500",
      github: "#"
    },
    {
      title: "Bunk Prevention & Event Analyzer", 
      subtitle: "Smart Attendance Web Application",
      description: "Developed web-based attendance tracking system with real-time updates and analytics. Features automatic attendance monitoring, event analysis, and student engagement insights with responsive design.",
      technologies: ["HTML", "CSS", "JavaScript", "Web Development", "Real-time Updates", "Analytics"],
      icon: Cpu,
      color: "bg-purple-500",
      github: "https://github.com/saisriram07/BUNK-PREVENTION-AND-EVENT-ANALYZER"
    },
    {
      title: "Weather-Based Wind Turbine Energy Prediction",
      subtitle: "ML-Powered Energy Forecasting",
      description: "Machine learning model to forecast wind turbine energy output based on weather parameters. Features user-friendly interface for energy predictions and optimized algorithms for accurate forecasting.",
      technologies: ["Machine Learning", "Python", "Weather Data", "Energy Forecasting", "Predictive Analytics", "UI/UX"],
      icon: Zap,
      color: "bg-green-500", 
      github: "https://github.com/saisriram07/weather-Based-prediction-of-wind-turbine-energy"
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 scroll-animate">
      <div className="max-w-6xl mx-auto">
        <h2 className="section-header">Projects</h2>
        <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto text-lg">
          Showcasing practical applications of technology to solve real-world problems
        </p>
        
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="project-card group">
              {/* Project Header */}
              <div className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className={`p-3 ${project.color} rounded-lg shadow-lg`}>
                    <project.icon className="text-white" size={24} />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-xl text-gray-900 leading-tight">
                      {project.title}
                    </h3>
                    <p className="text-brand-primary font-medium text-sm">
                      {project.subtitle}
                    </p>
                  </div>
                </div>
                
                {/* Project Description */}
                <p className="text-gray-700 leading-relaxed mb-6">
                  {project.description}
                </p>
                
                {/* Technologies */}
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3 text-sm">Technologies Used</h4>
                  <div className="flex flex-wrap gap-1">
                    {project.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Project Actions */}
              <div className="px-6 pb-6 pt-0">
                <a 
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-all duration-300 text-sm font-medium"
                >
                  <Github size={16} />
                  View Code
                </a>
              </div>
            </div>
          ))}
        </div>
        
        {/* View More Projects CTA */}
        <div className="text-center mt-12">
          <a 
            href="https://github.com/saisriram07"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline"
          >
            <Github size={20} />
            View More Projects on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;