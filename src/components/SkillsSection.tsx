
import { useState } from 'react';
import { cn } from '@/lib/utils';

const SkillsSection = () => {
  const [activeTab, setActiveTab] = useState('skills');
  
  const categories = [
    { id: 'skills', label: 'Skills' },
    { id: 'tools', label: 'Tools' },
  ];

  const skills = {
    skills: [
      { name: 'Flutter', level: 90 },
      { name: 'Dart', level: 90 },
      { name: 'State Management with BLoC', level: 85 },
      { name: 'Integration with RESTful APIs', level: 85 },
      { name: 'APP and Play Store deployment', level: 80 },
      { name: 'Firebase', level: 80 },
      { name: 'UI/UX Design', level: 80 },
      { name: 'Code Magic - CI/CD', level: 75 },
      { name: 'Animations', level: 70 },
    ],
    tools: [
      { name: 'VS Code', level: 90 },
      { name: 'GitHub', level: 90 },
      { name: 'GitLab', level: 90 },
      { name: 'Discord', level: 90 },
      { name: 'Slack', level: 90 },
      { name: 'Android Studio', level: 80 },
      { name: 'ClickUp', level: 80 },
      { name: 'Insomnia', level: 80 },
      { name: 'Postman', level: 80 },
      { name: 'Figma', level: 75 },
    ],
  };

  return (
    <section id="skills" className="bg-gray-50 py-16">
      <div className="section-container">
        <h2 className="section-heading">My Skills</h2>
        
        <div className="flex justify-center mb-8">
          <div className="inline-flex rounded-md shadow-sm">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveTab(category.id)}
                className={cn(
                  'px-4 py-2 text-sm font-medium transition-colors',
                  activeTab === category.id 
                    ? 'bg-flutter-blue text-white' 
                    : 'bg-white text-gray-700 hover:bg-gray-100',
                  'first:rounded-l-md last:rounded-r-md border border-gray-200'
                )}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>
        
        <div className="max-w-2xl mx-auto">
          {Object.entries(skills).map(([category, categorySkills]) => (
            <div
              key={category}
              className={cn(
                'space-y-6 animate-fade-in',
                activeTab !== category && 'hidden'
              )}
            >
              {categorySkills.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium text-gray-700">{skill.name}</span>
                    <span className="text-sm text-gray-500">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-flutter-blue to-flutter-lightBlue transition-all duration-1000 ease-out"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
