
import { ChevronDown } from 'lucide-react';
import profile from '../images/profile.png';

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden bg-gradient-to-br from-white to-flutter-light">
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute top-20 left-20 w-40 h-40 rounded-full bg-flutter-lightBlue animate-float" style={{ animationDelay: '0s' }}></div>
        <div className="absolute bottom-20 right-20 w-60 h-60 rounded-full bg-flutter-teal animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-72 h-72 rounded-full bg-flutter-blue animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="section-container z-10 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="order-2 md:order-1">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              <span className="block">Hi, I'm Mariana Soder,</span>
              <span className="flutter-gradient text-transparent bg-clip-text">a mobile developer</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8">
              I build stunning cross-platform apps with Flutter that deliver exceptional user experiences.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#projects" className="flutter-button text-center">
                View My Work
              </a>
              <a href="#contact" className="border border-flutter-blue text-flutter-blue hover:bg-flutter-blue hover:text-white font-semibold py-2 px-4 rounded-md transition-colors duration-300 text-center">
                Get In Touch
              </a>
            </div>
          </div>

          <div className="order-1 md:order-2 flex justify-center">
            <div className="w-64 h-64 md:w-80 md:h-80 relative animate-float">
              <div className="absolute inset-0 bg-flutter-blue rounded-full opacity-20"></div>
              <div className="absolute inset-3 bg-flutter-lightBlue rounded-full opacity-30"></div>
              <div className="absolute inset-6 bg-flutter-accent rounded-full opacity-40"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <img src={profile}></img>
              </div>
            </div>
          </div>
        </div>
      </div>

      <a
        href="#projects"
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-flutter-blue animate-bounce"
        aria-label="Scroll to projects"
      >
        <ChevronDown size={32} />
      </a>
    </section>
  );
};

export default HeroSection;
