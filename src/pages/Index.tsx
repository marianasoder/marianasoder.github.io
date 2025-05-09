
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import SkillsSection from '@/components/SkillsSection';
import ExperienceTimeline from '@/components/ExperienceTimeline';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';
import gp from '../images/gp.png';
import bl from '../images/bl.png';
import rs from '../images/rs.png';
import it from '../images/it.png';

const Index = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  // Project data
  const projects = [
    {
      id: 1,
      title: "Blerify",
      description: "A mobile wallet to receive, manage, present, and verify credentials, documents, data, and assets securely and reliably.",
      image: bl,
      tags: ["Flutter", "BLoC", "Drift", "RESTful APIs", "Rive Animations"],
      liveUrl: "https://play.google.com/store/apps/details?id=com.blerify.wallet"
    },
    {
      id: 2,
      title: "RastDrive",
      description: "Vehicle tracking application. You can: locate the vehicle on the map, view the history of the vehicle's last positions and also check the Street View mode of the vehicle's position.",
      image: rs,
      tags: ["Flutter", "Google Maps", "BLoC", "Notifications", "Firebase"],
      liveUrl: "https://play.google.com/store/apps/details?id=com.g10monitoramentoapp",
    },
    {
      id: 3,
      title: "Integrada",
      description: "App for Integrada cooperative members, with features that make their daily lives easier, such as finance management and product price quotes.",
      image: it,
      tags: ["Flutter", "BLoC", "RESTful APIs", "Firebase"],
      liveUrl: "https://play.google.com/store/apps/details?id=com.ionicframework.myapp304484"
    },
    {
      id: 4,
      title: "Gerente de Pastos",
      description: "Application for managing farms, pastures, and checking information such as the weather.",
      image: gp,
      tags: ["Flutter", "BLoC", "Hive", "Offline First", "Notifications", "Firebase"],
      liveUrl: "https://play.google.com/store/apps/details?id=br.com.eurekalabs.gerentedepasto"
    },
  ];

  return (
    <div className="relative">
      <Navbar />
      <HeroSection />

      {/* Projects Section */}
      <section id="projects" className="py-16">
        <div className="section-container">
          <h2 className="section-heading">Projects</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mt-12">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className="animate-slide-up"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <ProjectCard
                  title={project.title}
                  description={project.description}
                  image={project.image}
                  tags={project.tags}
                  liveUrl={project.liveUrl}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <SkillsSection />
      <ExperienceTimeline />
      <ContactSection />
      <Footer />

      {/* Scroll to top button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 p-3 bg-flutter-blue text-white rounded-full shadow-lg hover:bg-flutter-teal transition-colors z-10"
          aria-label="Scroll to top"
        >
          <ArrowUp size={20} />
        </button>
      )}
    </div>
  );
};

// Import ProjectCard component
import ProjectCard from '@/components/ProjectCard';

export default Index;
