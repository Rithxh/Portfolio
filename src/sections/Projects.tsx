import { Github, ExternalLink } from 'lucide-react';
import { projects } from '../data';

const ProjectCard = ({ project }: { project: typeof projects[0] }) => {
  return (
    <div className="group bg-white dark:bg-slate-700 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl hover:border-2 hover:border-purple-500 dark:hover:border-purple-400 transition-all duration-300 hover:-translate-y-2">
      {/* Project Image Placeholder */}
      <div className="h-48 bg-gradient-to-br from-purple-400 to-purple-600 dark:from-purple-500 dark:to-purple-700 flex items-center justify-center overflow-hidden relative">
        <span className="text-5xl opacity-50">📱</span>
        <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity"></div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
          {project.title}
        </h3>
        <p className="text-slate-600 dark:text-slate-300 mb-4 line-clamp-3">
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 text-sm bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex gap-4">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-slate-900 dark:bg-slate-900 text-white rounded-lg hover:bg-purple-600 dark:hover:bg-purple-600 transition-colors"
              aria-label="GitHub repository"
            >
              <Github size={18} />
              Code
            </a>
          )}
          {(project.live || project.paper) && (
            <a
              href={project.paper ? project.paper : project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 border-2 border-purple-600 dark:border-purple-400 text-purple-600 dark:text-purple-400 rounded-lg hover:bg-purple-50 dark:hover:bg-slate-600 transition-colors"
              aria-label="Live demo"
            >
              <ExternalLink size={18} />
              {project.paper ? 'Paper' : 'Live'}
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  const featuredProjects = projects.filter(p => p.featured);
  const otherProjects = projects.filter(p => !p.featured);

  return (
    <section
      id="projects"
      className="py-20 px-4 bg-slate-50 dark:bg-slate-900 transition-colors"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-slate-900 dark:text-white">
          Featured <span className="text-purple-600 dark:text-purple-400">Projects</span>
        </h2>
        <p className="text-center text-slate-600 dark:text-slate-300 mb-16 max-w-2xl mx-auto">
          Here are some of my recent projects!
        </p>

        {/* Featured Projects */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* Other Projects */}
        {otherProjects.length > 0 && (
          <>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-8">
              More Projects
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              {otherProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default Projects;
