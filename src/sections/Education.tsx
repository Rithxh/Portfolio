import { education } from '../data';

const EducationCard = ({ edu }: { edu: typeof education[0] }) => {
  return (
    <div className="bg-white dark:bg-slate-700 p-6 rounded-lg shadow-lg hover:shadow-xl hover:border-2 hover:border-purple-500 dark:hover:border-purple-400 transition-all">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
        <h3 className="text-xl font-bold text-slate-900 dark:text-white">
          {edu.degree}
        </h3>
        <span className="text-sm font-semibold text-purple-600 dark:text-purple-400 mt-2 md:mt-0">
          {edu.duration}
        </span>
      </div>

      <p className="text-lg text-slate-600 dark:text-slate-300 font-semibold mb-1">
        {edu.school}
      </p>

      <p className="text-sm text-slate-500 dark:text-slate-400 mb-3">
        {edu.field}
      </p>

      {edu.gpa && (
        <p className="text-sm text-slate-600 dark:text-slate-300 mb-3">
          <span className="font-semibold">GPA:</span> {edu.gpa}
        </p>
      )}

      {edu.description && (
        <p className="text-slate-600 dark:text-slate-400 mb-4">
          {edu.description}
        </p>
      )}

      {edu.achievements && edu.achievements.length > 0 && (
        <ul className="space-y-2">
          {edu.achievements.map((achievement, idx) => (
            <li key={idx} className="flex items-start text-slate-600 dark:text-slate-400">
              <span className="text-purple-600 dark:text-purple-400 mr-3 font-bold">•</span>
              {achievement}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

const Education = () => {
  return (
    <section
      id="education"
      className="py-20 px-4 bg-white dark:bg-slate-800 transition-colors"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-slate-900 dark:text-white">
          Education
        </h2>

        <div className="mx-auto" style={{ maxWidth: '75%' }}>
          <div className="flex flex-col gap-6">
            {education.map((edu) => (
              <EducationCard key={edu.id} edu={edu} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
