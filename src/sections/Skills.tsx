import { skills } from '../data';

const SkillCard = ({ category, items }: { category: string; items: string[] }) => {
  return (
    <div className="p-6 bg-white dark:bg-slate-700 rounded-lg shadow-lg hover:shadow-xl hover:border-2 hover:border-purple-500 dark:hover:border-purple-400 transition-all">
      <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">
        {category}
      </h3>
      <div className="grid grid-cols-2 gap-3">
        {items.map((item) => (
          <div
            key={item}
            className="px-3 py-2 bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300 rounded-lg text-sm font-medium hover:bg-purple-200 dark:hover:bg-purple-800 transition-colors"
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

const Skills = () => {
  return (
    <section
      id="skills"
      className="py-20 px-4 bg-white dark:bg-slate-800 transition-colors"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-slate-900 dark:text-white">
          Skills & <span className="text-purple-600 dark:text-purple-400">Expertise</span>
        </h2>
        <p className="text-center text-slate-600 dark:text-slate-300 mb-16 max-w-2xl mx-auto">
          A comprehensive overview of my technical skills and expertise across different domains.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {skills.map((skillGroup) => (
            <SkillCard
              key={skillGroup.category}
              category={skillGroup.category}
              items={skillGroup.items}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
