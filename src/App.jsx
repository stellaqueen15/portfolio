import './App.css';
import Menu from './components/Menu/Menu';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';
import Footer from './components/Footer/Footer';
import StarBackground from './components/StarBackground';

function App() {
  return (
    <>
      <StarBackground />
      <div style={{ position: 'relative', zIndex: 1 }}>
        <Menu />
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Footer />
      </div>
    </>
  );
}

export default App;
