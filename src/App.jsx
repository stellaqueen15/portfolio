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
      <div style={{ position: 'relative', zIndex: 1 }}>
        <div class="background-circles">
          <div class="circle circle1"></div>
          <div class="circle circle2"></div>
          <div class="circle circle3"></div>
          <div class="circle circle4"></div>
          <div class="circle circle5"></div>
          <div class="circle circle6"></div>
        </div>
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
