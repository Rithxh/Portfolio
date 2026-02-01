import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import Projects from './sections/Projects';
import Skills from './sections/Skills';
import Experience from './sections/Experience';
import Contact from './sections/Contact';
import Footer from './sections/Footer';
import './App.css';
import Education from './sections/Education';

function App() {
  return (
    <div className="dark">
      <div className="bg-slate-900 text-slate-100">
      <Navbar />
      <main>
        <Hero />
        <Education />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
      </div>
    </div>
  );
}

export default App;
