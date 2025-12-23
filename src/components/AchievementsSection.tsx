import { Trophy, Users, BarChart3 } from "lucide-react";

const AchievementsSection = () => {
  const achievements = [
    {
      icon: Users,
      title: "TechX Club Contributor",
      organization: "Sathyabama Institute of Science and Technology",
      description: "Contributed to the TechX Club, supporting the planning and execution of tech workshops, coding competitions, and hackathons.",
    },
    {
      icon: BarChart3,
      title: "Data Analytics Virtual Internship",
      organization: "Deloitte Australia",
      description: "Completed Deloitte Australia's Data Analytics Virtual Internship, transforming complex datasets into clear, actionable business insights using Tableau — reflecting strong consulting-level analytical skills.",
    },
  ];

  return (
    <section id="achievements" className="py-20 px-4 bg-brand-muted/30 scroll-animate">
      <div className="max-w-6xl mx-auto">
        <h2 className="section-header">Achievements</h2>
        <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto text-lg">
          Notable accomplishments and contributions throughout my journey
        </p>
        
        <div className="grid md:grid-cols-2 gap-8">
          {achievements.map((achievement, index) => (
            <div 
              key={index} 
              className="portfolio-card group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start gap-4">
                <div className="p-4 bg-gradient-primary rounded-xl shadow-lg group-hover:shadow-xl transition-all duration-300">
                  <achievement.icon className="text-white" size={28} />
                </div>
                
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <Trophy className="text-brand-accent" size={16} />
                    <span className="text-xs font-semibold uppercase tracking-wide text-brand-accent">
                      Achievement
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-1">
                    {achievement.title}
                  </h3>
                  
                  <p className="text-brand-primary font-medium mb-3">
                    {achievement.organization}
                  </p>
                  
                  <p className="text-gray-700 leading-relaxed">
                    {achievement.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
