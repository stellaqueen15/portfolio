import '../../App.css';
import '../About/About.css';

function About() {
  return (
    <>
      <section id="about" className="about-section">
        <div className="about-container">
          <h2 className="about-title">À propos de moi</h2>
          <div className="about-content">
            <div className="about-content-top">
              <div className="about-cercle">
                <div class="image-wrapper">
                  <img
                    className="about-image"
                    src="https://www.ifocop.fr/media/2023/08/la-difference-entre-un-developpeur-web-integrateur-et-un-webdesigner-ifocop.jpg"
                    alt=""
                  />
                </div>
              </div>
              <div className="about-second-part">
                <p className="about-text">
                  Je suis une jeune développeuse passionnée, spécialisée dans le
                  développement web avec une approche à la fois créative et
                  technique. Avant de me plonger dans la programmation, j’ai
                  exploré le graphisme en autodidacte, ce qui m’a permis de
                  développer un sens du design que j’intègre dans mes projets.
                  Étant diplômée en informatique, option programmation, je suis
                  actuellement développeuse junior avec un début d'expérience
                  concrète dans le monde du développement web. Toujours curieuse
                  et motivée, je cherche à évoluer dans des projets stimulants
                  et humains.
                </p>
                <div className="informations">
                  <div className="about-information">
                    <i class="fi fi-rr-marker"></i>
                    <p>Basée à Montréal</p>
                  </div>

                  <div className="about-information">
                    <i class="fi fi-rr-graduation-cap"></i>
                    <p>Diplomée du DEC en Technique de l'informatique</p>
                  </div>

                  <div className="about-information">
                    <i class="fi fi-rr-heart"></i>
                    <p>Coup de coeur pour React</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
