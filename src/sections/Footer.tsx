import { Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 dark:bg-slate-950 text-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="border-t border-slate-800 pt-8">
          <div className="flex flex-col items-center text-slate-400 text-sm">
            <p className="flex items-center gap-1">
              Made with <Heart size={16} className="text-red-500" /> by Rithik Anand © {currentYear}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
