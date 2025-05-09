
import { ExternalLink, Github } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl?: string;
}

const ProjectCard = ({ title, description, image, tags, liveUrl }: ProjectCardProps) => {
  return (
    <div className="flutter-card group h-full flex flex-col">
      <div className="aspect-video overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
        <p className="text-gray-600 mb-4 flex-grow">{description}</p>

        <div className="mb-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-1 bg-flutter-light text-flutter-blue text-xs font-medium rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex gap-3 mt-auto">
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-flutter-blue transition-colors"
              aria-label={`Live demo for ${title}`}
            >
              <ExternalLink size={20} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
