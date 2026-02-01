import { experience } from '../data';

// Helper component to render achievement text with highlighted keywords
const AchievementText = ({ 
  text, 
  keywords 
}: { 
  text: string; 
  keywords?: string[] 
}) => {
  if (!keywords || keywords.length === 0) {
    return <span>{text}</span>;
  }

  // Create a regex pattern to match keywords (case-insensitive)
  const pattern = new RegExp(`(${keywords.join('|')})`, 'gi');
  const parts = text.split(pattern);

  return (
    <span>
      {parts.map((part, idx) => {
        const isKeyword = keywords.some(
          (kw) => kw.toLowerCase() === part.toLowerCase()
        );
        return isKeyword ? (
          <span key={idx} className="font-semibold text-purple-600 dark:text-purple-400 bg-purple-50 dark:bg-purple-900/30 px-1 rounded">
            {part}
          </span>
        ) : (
          <span key={idx}>{part}</span>
        );
      })}
    </span>
  );
};

const ExperienceCard = ({ exp }: { exp: typeof experience[0] }) => {
  return (
    <div className="relative pl-8 pb-8 border-l-2 border-purple-400 dark:border-purple-600 last:pb-0">
      {/* Timeline dot */}
      <div className="absolute left-[-12px] top-0 w-6 h-6 bg-purple-600 dark:bg-purple-500 border-4 border-white dark:border-slate-900 rounded-full"></div>

      <div className="bg-white dark:bg-slate-700 p-6 rounded-lg shadow-lg hover:shadow-xl hover:border-2 hover:border-purple-500 dark:hover:border-purple-400 transition-all">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
          <h3 className="text-xl font-bold text-slate-900 dark:text-white">
            {exp.position}
          </h3>
          <span className="text-sm font-semibold text-purple-600 dark:text-purple-400 mt-2 md:mt-0">
            {exp.duration}
          </span>
        </div>

        <p className="text-lg text-slate-600 dark:text-slate-300 font-semibold mb-2">
          {exp.company}
        </p>

        <p className="text-slate-600 dark:text-slate-400 mb-4">
          {exp.description}
        </p>

        {/* Achievement Points - Always Visible */}
        <div className="space-y-3">
          <ul className="space-y-3">
            {exp.achievements.map((achievement, idx) => (
              <li key={idx} className="flex items-start text-slate-600 dark:text-slate-400 leading-relaxed">
                <span className="text-purple-600 dark:text-purple-400 mr-3 font-bold text-lg flex-shrink-0">•</span>
                <AchievementText text={achievement.text} keywords={achievement.keywords} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

const Experience = () => {
  return (
    <section
      id="experience"
      className="py-20 px-4 bg-slate-50 dark:bg-slate-900 transition-colors"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-slate-900 dark:text-white">
          Work <span className="text-purple-600 dark:text-purple-400">Experience</span>
        </h2>

        <div className="max-w-5xl mx-auto">
          {experience.map((exp) => (
            <ExperienceCard key={exp.id} exp={exp} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
