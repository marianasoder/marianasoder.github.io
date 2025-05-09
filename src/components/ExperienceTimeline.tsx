
import { Briefcase, Calendar, GraduationCap } from 'lucide-react';
import { cn } from '@/lib/utils';

interface TimelineItem {
  id: number;
  type: 'work' | 'education';
  date: string;
  title: string;
  company?: string;
  location: string;
  description: string;
}

const ExperienceTimeline = () => {
  const timelineItems: TimelineItem[] = [
    {
      id: 1,
      type: 'work',
      date: 'Apr 2024 - Nov 2024',
      title: 'Flutter Developer',
      company: 'Blerify',
      location: 'Florida, EUA',
      description: 'Developed the wallet in Flutter. Collaborated with design and backend teams to create seamless user experiences.'
    },
    {
      id: 2,
      type: 'work',
      date: '2021 - Mar 2024',
      title: 'Flutter Developer',
      company: 'Eureka Labs',
      location: 'Maringá, BR',
      description: 'Developed and maintained multiple Flutter applications.'
    },
    {
      id: 3,
      type: 'work',
      date: 'Apr 2020 - May 2021',
      title: 'Flutter Developer ',
      company: 'ThinkProject - Soluções em TI',
      location: 'Remote',
      description: 'Developed over 4 applications as a freelancer, generally in the beauty industry.'
    },
    {
      id: 4,
      type: 'work',
      date: 'Oct 2019 - Apr 2020',
      title: 'Software Developer ',
      company: 'Eureka Labs',
      location: 'Maringá, BR',
      description: 'Developed both the frontend of Flutter applications and backend with JavaScript/Node.'
    },
    {
      id: 5,
      type: 'education',
      date: '2015 - 2019',
      title: 'Bsc. in Computer Science',
      company: 'Universidade Estadual de Maringá (UEM)',
      location: 'Maringá, BR',
      description: ''
    },
  ];

  return (
    <section id="experience" className="py-16">
      <div className="section-container">
        <h2 className="section-heading">Experience & Education</h2>

        <div className="max-w-3xl mx-auto mt-12">
          <div className="relative border-l-2 border-flutter-blue pl-6 ml-4">
            {timelineItems.map((item, index) => (
              <div
                key={item.id}
                className={cn(
                  "mb-10 animate-slide-up",
                  index % 2 === 0 ? "animate-delay-[200ms]" : "animate-delay-[400ms]"
                )}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="absolute -left-[9px] mt-1.5 h-4 w-4 rounded-full border-2 border-flutter-blue bg-white"></div>

                <div className="flex items-center text-sm text-gray-500 mb-1">
                  <Calendar size={14} className="mr-1.5" />
                  <span>{item.date}</span>
                </div>

                <h3 className="text-xl font-bold text-gray-800 flex items-center">
                  {item.type === 'work' ? (
                    <Briefcase size={18} className="mr-2 text-flutter-blue" />
                  ) : (
                    <GraduationCap size={18} className="mr-2 text-flutter-blue" />
                  )}
                  {item.title}
                </h3>

                <div className="text-gray-600 mb-1">
                  {item.company} • {item.location}
                </div>

                <p className="text-gray-600 mt-2">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceTimeline;
