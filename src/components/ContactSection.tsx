import { Mail, Phone, Linkedin, Github, MapPin, Send, Download } from "lucide-react";

const ContactSection = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "ksaisriram2003@gmail.com",
      href: "mailto:ksaisriram2003@gmail.com",
      color: "text-red-500",
      bgColor: "bg-red-50"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 81253 78063",
      href: "tel:+918125378063",
      color: "text-green-500",
      bgColor: "bg-green-50"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "saisriram-kancharla",
      href: "https://www.linkedin.com/in/saisriram-kancharla-570a64226/",
      color: "text-blue-500",
      bgColor: "bg-blue-50"
    },
    {
      icon: Github,
      label: "GitHub",
      value: "saisriram07",
      href: "https://github.com/saisriram07",
      color: "text-gray-700",
      bgColor: "bg-gray-50"
    }
  ];

  return (
    <section id="contact" className="py-20 px-4 scroll-animate">
      <div className="max-w-6xl mx-auto">
        <h2 className="section-header">Let's Connect</h2>
        <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto text-lg">
          I'm always interested in new opportunities and collaborations. Feel free to reach out!
        </p>
        
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Information */}
          <div className="space-y-6">
            <div className="portfolio-card">
              <h3 className="font-bold text-2xl mb-6 flex items-center gap-3">
                <div className="p-3 bg-brand-primary/10 rounded-lg">
                  <Send className="text-brand-primary" size={24} />
                </div>
                Get In Touch
              </h3>
              
              <p className="text-gray-700 leading-relaxed mb-8">
                I'm currently seeking entry-level opportunities in software development, 
                web development, or machine learning. Whether you have a project in mind, 
                want to collaborate, or just want to say hello, I'd love to hear from you!
              </p>
              
              <div className="space-y-4">
                {contactInfo.map((contact, index) => (
                  <a
                    key={index}
                    href={contact.href}
                    target={contact.href.startsWith('http') ? '_blank' : undefined}
                    rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="flex items-center gap-4 p-4 rounded-lg hover:bg-gray-50 transition-all duration-300 group"
                  >
                    <div className={`p-3 ${contact.bgColor} rounded-lg group-hover:scale-110 transition-transform duration-300`}>
                      <contact.icon className={contact.color} size={20} />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">{contact.label}</p>
                      <p className="text-gray-600">{contact.value}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
            
            {/* Quick Actions */}
            <div className="portfolio-card">
              <h3 className="font-bold text-xl mb-4">Quick Actions</h3>
              <div className="space-y-3">
                <a
                  href="https://drive.google.com/file/d/1Sofumfw1Foo5aSZzLNBCYIpdnQ2GQOzp/view?usp=drive_link"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary w-full justify-center"
                >
                  <Download size={20} />
                  Download My Resume
                </a>
                
                <a
                  href="mailto:ksaisriram2003@gmail.com?subject=Opportunity Discussion&body=Hi Sai Sri Ram, I'd like to discuss..."
                  className="btn-outline w-full justify-center"
                >
                  <Mail size={20} />
                  Send Email
                </a>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="portfolio-card">
            <h3 className="font-bold text-2xl mb-6 flex items-center gap-3">
              <div className="p-3 bg-brand-secondary/10 rounded-lg">
                <Mail className="text-brand-secondary" size={24} />
              </div>
              Send Message
            </h3>
            
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-transparent transition-colors duration-300"
                    placeholder="Your first name"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-transparent transition-colors duration-300"
                    placeholder="Your last name"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-transparent transition-colors duration-300"
                  placeholder="your.email@example.com"
                />
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-transparent transition-colors duration-300"
                  placeholder="What's this about?"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-transparent transition-colors duration-300 resize-none"
                  placeholder="Tell me about your project or opportunity..."
                />
              </div>
              
              <button type="submit" className="btn-primary w-full justify-center">
                <Send size={20} />
                Send Message
              </button>
            </form>
          </div>
        </div>
        
        {/* Location Info */}
        <div className="mt-12 text-center">
          <div className="portfolio-card inline-block">
            <div className="flex items-center gap-3 justify-center mb-2">
              <MapPin className="text-brand-primary" size={20} />
              <span className="font-medium text-gray-900">Based in India</span>
            </div>
            <p className="text-gray-600">Open to remote opportunities and relocation</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;