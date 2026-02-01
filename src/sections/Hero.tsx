import { ArrowRight, Github, ExternalLink } from 'lucide-react';

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 pt-16 px-4"
    >
      <div className="max-w-6xl mx-auto text-center animate-fadeIn">
        <div className="mb-8">
          <div className="inline-block">
            <div className="w-32 h-32 mx-auto mb-8 rounded-full bg-gradient-to-br from-purple-400 to-purple-600 dark:from-purple-500 dark:to-purple-700 p-1 animate-float">
              <div className="w-full h-full rounded-full bg-white dark:bg-slate-900 flex items-center justify-center">
                <span className="text-5xl">👨‍💻</span>
              </div>
            </div>
          </div>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold text-slate-900 dark:text-white mb-4 animate-slideUp">
          Hi! I'm <span className="text-purple-600 dark:text-purple-400">Rithik Anand</span>
        </h1>

        <p className="text-lg text-slate-500 dark:text-slate-400 max-w-2xl mx-auto mb-12 animate-slideUp" style={{ animationDelay: '0.2s' }}>
          Computer Science graduate student at USC with experience in full-stack development, systems engineering, and machine learning. 
          Interested in distributed systems, scalable backend design, and building robust, real-world software that scales to meet growing demands.
          <br></br>
          Outside of tech, I'm usually hopping between new cafés and indulging a rotating set of eclectic interests.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slideUp" style={{ animationDelay: '0.3s' }}>
          <a
            href="#projects"
            className="inline-flex items-center justify-center px-8 py-3 bg-purple-600 dark:bg-purple-500 text-white rounded-lg font-semibold hover:bg-purple-700 dark:hover:bg-purple-600 group"
          >
            View My Work
            <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-8 py-3 border-2 border-purple-600 dark:border-purple-400 text-purple-600 dark:text-purple-400 rounded-lg font-semibold hover:bg-purple-50 dark:hover:bg-slate-800 transition-colors"
          >
            Get In Touch
          </a>
        </div>

        <div className="mt-16 flex justify-center gap-6">
          <a
            href="https://github.com/Rithxh"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-slate-200 dark:bg-slate-800 text-slate-900 dark:text-white hover:bg-purple-600 dark:hover:bg-purple-600 hover:text-white transition-colors"
            aria-label="GitHub"
          >
            <Github size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/rithikanand/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-slate-200 dark:bg-slate-800 text-slate-900 dark:text-white hover:bg-purple-600 dark:hover:bg-purple-600 hover:text-white transition-colors"
            aria-label="LinkedIn"
          >
            <ExternalLink size={24} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
