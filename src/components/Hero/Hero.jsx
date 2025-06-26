import '../../App.css';
import '../Hero/Hero.css';

function Hero() {
  return (
    <>
      <section id="hero">
        <div className="hero-section">
          <h1 className="hero-title">
            Brenda,
            <br />
            Développeuse full-stack
          </h1>
          <p className="hero-subtitle">
            Du front au back, j’apprends à créer des projets utiles, accessibles
            et bien structurés.
          </p>

          <div className="hability-section">
            <div className="hability">
              <h2>Front-end</h2>
              <p>60%</p>
            </div>
            <div className="hability-separator"></div>
            <div className="hability">
              <h2>Back-end</h2>
              <p>40%</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
