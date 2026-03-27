import './index.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import JavaProjects from './components/JavaProjects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#121212', color: '#E0E0E0' }}>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <JavaProjects />
        <Contact />
      </main>
    </div>
  );
}

export default App;
