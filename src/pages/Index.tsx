
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
            Civics.Com
            <br />
            Consultancy Services
          </h1>
          <p className="content-text mt-6 opacity-0 animate-fade-up" style={{ animationDelay: "0.2s" }}>
            Empowering Digital Innovation in Law & Technology
          </p>
          <div className="flex gap-6 justify-center mt-8 opacity-0 animate-fade-up" style={{ animationDelay: "0.4s" }}>
            <a href="https://www.linkedin.com/in/dazzagreenwood" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full hover:bg-secondary transition-colors">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="https://www.civics.com" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full hover:bg-secondary transition-colors">
              <Globe className="w-6 h-6" />
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="section-padding bg-secondary">
        <div className="max-w-5xl mx-auto">
          <div className="animate-on-scroll opacity-0">
            <h2 className="section-title">About</h2>
            <p className="content-text mb-6">
              "I am passionate about enhancing productivity and creativity with generative AI. At law.MIT.edu, I lead research and publishing endeavors to explore AI's applications in the legal sector. Through my consultancy, Civics.Com, I have trained thousands of lawyers and other professionals on the use of generative AI and directly assist companies in adopting AI to refine their processes and innovate their products, services, and business models."
            </p>
            <p className="content-text">
              Daniel "Dazza" Greenwood is the founder of CIVICS.com, a boutique provider of professional consultancy services for legal technologies, automated transactions, privacy and data management, and technology strategy. Dazza is also a researcher at MIT Media Lab and Lecturer at MIT Connection Science where he is advancing the field of computational law and generative AI for law as Executive Director of law.MIT.edu
            </p>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="section-padding">
        <div className="max-w-5xl mx-auto">
          <h2 className="section-title animate-on-scroll opacity-0">Professional Experience</h2>
          <div className="prose max-w-none animate-on-scroll opacity-0">
            <p className="content-text mb-6">
              Dazza Greenwood serves as lead on the Data Rights Protocol initiative through Consumer Reports Digital Lab. This protocol provides a common open specification for enabling consumers and companies to process the exercise of individual data rights as a consumer-connected digital service.
            </p>
            <p className="content-text">
              Dazza consults to fortune 100 companies, architecting and building integrated business, legal and technology cross-boundary networks at industry scale. As an attorney, Dazza served as both in-house and special counsel for technology law, representing corporations and governments. Dazza has testified before the US House, US Senate and other legislatures on electronic transactions law and consults extensively to the public sector, including to NASA, GSA, DHS, the UK Cabinet Office and many other public and private sector organizations and global NGOs.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding bg-secondary">
        <div className="max-w-5xl mx-auto">
          <h2 className="section-title animate-on-scroll opacity-0">Areas of Expertise</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[
              "Legal Technology",
              "Generative AI",
              "Privacy & Data",
              "Tech Strategy",
              "Computational Law",
              "Digital Rights",
              "Technology Law",
              "AI Consulting"
            ].map((skill) => (
              <div key={skill} className="glass p-4 rounded-lg text-center animate-on-scroll opacity-0">
                <Briefcase className="w-6 h-6 mx-auto mb-2 text-accent" />
                <p className="font-medium">{skill}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Connect Section */}
      <section className="section-padding">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="section-title animate-on-scroll opacity-0">Connect With Dazza</h2>
          <div className="space-y-4 animate-on-scroll opacity-0">
            <a 
              href="https://www.linkedin.com/in/dazzagreenwood" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block hover:text-accent transition-colors"
            >
              LinkedIn
            </a>
            <a 
              href="https://www.civics.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block hover:text-accent transition-colors"
            >
              CIVICS.com
            </a>
            <a 
              href="https://www.dazzagreenwood.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block hover:text-accent transition-colors"
            >
              DazzaGreenwood.com
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
