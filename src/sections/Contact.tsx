import { useState, type FormEvent } from 'react';
import { Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate form submission
    setTimeout(() => {
      console.log('Form submitted:', formData);
      setSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      setIsLoading(false);

      // Reset success message after 5 seconds
      setTimeout(() => setSubmitted(false), 5000);
    }, 1000);
  };

  return (
    <section
      id="contact"
      className="py-20 px-4 bg-white dark:bg-slate-800 transition-colors"
    >
      <div className="max-w-2xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-slate-900 dark:text-white">
          Get In <span className="text-purple-600 dark:text-purple-400">Touch</span>
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          {submitted && (
            <div className="p-4 bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 rounded-lg animate-slideDown">
              ✓ Thank you! I'll get back to you soon.
            </div>
          )}

          <div>
            <label className="block text-sm font-semibold text-slate-900 dark:text-white mb-2">
              Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 bg-slate-50 dark:bg-slate-700 border-2 border-slate-200 dark:border-slate-600 rounded-lg text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-purple-600 dark:focus:border-purple-400 transition-colors"
              placeholder="Your name"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-slate-900 dark:text-white mb-2">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 bg-slate-50 dark:bg-slate-700 border-2 border-slate-200 dark:border-slate-600 rounded-lg text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-purple-600 dark:focus:border-purple-400 transition-colors"
              placeholder="your.email@example.com"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-slate-900 dark:text-white mb-2">
              Message
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={6}
              className="w-full px-4 py-2 bg-slate-50 dark:bg-slate-700 border-2 border-slate-200 dark:border-slate-600 rounded-lg text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-purple-600 dark:focus:border-purple-400 transition-colors resize-none"
              placeholder="Your message..."
            />
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full px-6 py-3 bg-purple-600 dark:bg-purple-500 text-white rounded-lg font-semibold hover:bg-purple-700 dark:hover:bg-purple-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center justify-center gap-2"
          >
            <Send size={20} />
            {isLoading ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
