import { Heart, Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Sai Sri Ram</h3>
            <p className="text-gray-300 leading-relaxed">
              Computer Science Graduate passionate about creating innovative 
              solutions and contributing to impactful software development.
            </p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2">
              {[
                { href: "#about", label: "About" },
                { href: "#skills", label: "Skills" },
                { href: "#projects", label: "Projects" },
                { href: "#experience", label: "Experience" },
                { href: "#certifications", label: "Certifications" },
                { href: "#contact", label: "Contact" }
              ].map((link) => (
                <button
                  key={link.href}
                  onClick={() => document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' })}
                  className="block text-gray-300 hover:text-white transition-colors duration-300"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>
          
          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Get In Touch</h4>
            <div className="space-y-3">
              <a 
                href="mailto:ksaisriram2003@gmail.com"
                className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors duration-300"
              >
                <Mail size={16} />
                ksaisriram2003@gmail.com
              </a>
              
              <div className="flex gap-4 mt-4">
                <a
                  href="https://github.com/saisriram07"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors duration-300"
                >
                  <Github size={20} />
                </a>
                <a
                  href="https://linkedin.com/in/saisriram-kancharla-570a64226"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors duration-300"
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href="mailto:ksaisriram2003@gmail.com"
                  className="p-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors duration-300"
                >
                  <Mail size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-300 text-sm">
              © {new Date().getFullYear()} Kancharla Sai Sri Ram. All rights reserved.
            </p>
            <div className="flex items-center gap-1 text-gray-300 text-sm">
              <span>Made with</span>
              <Heart size={16} className="text-red-500" />
              <span>using React & Tailwind CSS</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;