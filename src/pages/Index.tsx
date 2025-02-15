
import { useEffect } from "react";
import { Github, Linkedin, Globe, Code, Briefcase } from "lucide-react";

const Index = () => {
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-fade-up");
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    document.querySelectorAll(".animate-on-scroll").forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="hero-text opacity-0 animate-fade-up">
            Crafting Digital
            <br />
            Experiences
          </h1>
          <p className="content-text mt-6 opacity-0 animate-fade-up" style={{ animationDelay: "0.2s" }}>
            Full-Stack Developer & UI/UX Designer
          </p>
          <div className="flex gap-6 justify-center mt-8 opacity-0 animate-fade-up" style={{ animationDelay: "0.4s" }}>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full hover:bg-secondary transition-colors">
              <Github className="w-6 h-6" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full hover:bg-secondary transition-colors">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="#" className="p-2 rounded-full hover:bg-secondary transition-colors">
              <Globe className="w-6 h-6" />
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="section-padding bg-secondary">
        <div className="max-w-5xl mx-auto">
          <div className="animate-on-scroll opacity-0">
            <h2 className="section-title">About Me</h2>
            <p className="content-text">
              I'm a passionate developer focused on creating beautiful and functional digital experiences. With expertise in modern web technologies, I bring ideas to life through clean code and intuitive design.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="section-padding">
        <div className="max-w-5xl mx-auto">
          <h2 className="section-title animate-on-scroll opacity-0">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[1, 2, 3, 4].map((project) => (
              <div
                key={project}
                className="group relative overflow-hidden rounded-lg animate-on-scroll opacity-0"
              >
                <div className="aspect-video bg-secondary glass p-6">
                  <Code className="w-8 h-8 mb-4 text-accent" />
                  <h3 className="font-playfair text-xl font-bold mb-2">Project {project}</h3>
                  <p className="text-sm text-foreground/70">A brief description of the project and its key features.</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="section-padding bg-secondary">
        <div className="max-w-5xl mx-auto">
          <h2 className="section-title animate-on-scroll opacity-0">Skills & Expertise</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {["React", "TypeScript", "Node.js", "UI/UX", "Next.js", "TailwindCSS", "GraphQL", "AWS"].map((skill) => (
              <div key={skill} className="glass p-4 rounded-lg text-center animate-on-scroll opacity-0">
                <Briefcase className="w-6 h-6 mx-auto mb-2 text-accent" />
                <p className="font-medium">{skill}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="section-title animate-on-scroll opacity-0">Let's Connect</h2>
          <p className="content-text animate-on-scroll opacity-0">
            I'm always open to discussing new projects and opportunities.
          </p>
          <a
            href="mailto:contact@example.com"
            className="inline-block mt-8 px-8 py-3 rounded-lg bg-accent text-white font-medium hover:bg-accent/90 transition-colors animate-on-scroll opacity-0"
          >
            Get in Touch
          </a>
        </div>
      </section>
    </div>
  );
};

export default Index;
