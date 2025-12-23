import { Download, ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="hero-section">
      {/* Background Image */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />
      
      {/* Content */}
      <div className="hero-content fade-in-up">
        
        <h1 className="text-5xl md:text-7xl font-bold mb-4">
          Hi, I'm <span className="gradient-text">Sai Sri Ram</span> 
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-600 mb-6 max-w-3xl mx-auto">
          Computer Science Graduate | Full Stack & Python Developer | Problem Solver
        </p>
        
        <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
          Computer Science graduate skilled in software development and problem-solving, with hands-on experience in building applications and working with data. Highly motivated, adaptable, and eager to contribute to innovative projects while continuously learning new technologies.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
          <button
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn-primary"
          >
            <ArrowRight size={20} />
            View My Projects
          </button>
          
          <a
            href="https://drive.google.com/file/d/1Sofumfw1Foo5aSZzLNBCYIpdnQ2GQOzp/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline"
          >
            <Download size={20} />
            Download Resume
          </a>
        </div>
        
        {/* Social Links */}
        <div className="flex gap-4 justify-center">
          <a
            href="https://github.com/saisriram07"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
          >
            <Github size={24} className="text-gray-700" />
          </a>
          <a
            href="https://www.linkedin.com/in/saisriram-kancharla-570a64226/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
          >
            <Linkedin size={24} className="text-brand-primary" />
          </a>
          <a
            href="mailto:ksaisriram2003@gmail.com"
            className="p-3 rounded-full bg-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
          >
            <Mail size={24} className="text-brand-secondary" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;