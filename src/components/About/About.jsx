import "../../App.css";
import "../About/About.css";
import Image from "../../assets/About_Image.jpg";

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
                    src={Image}
                    alt="Une personne qui tape du code sur son clavier."
                  />
                </div>
              </div>
              <div className="about-second-part">
                <p className="about-text">
                  Je me présente : je suis Brenda, une jeune développeuse
                  diplômée d’un DEC en informatique. Je me suis spécialisée dans
                  la programmation web et mobile, en tirant parti des
                  compétences que j’ai acquises en tant que graphiste
                  autodidacte. Aujourd’hui, je cherche à appliquer avec rigueur
                  toutes mes compétences, tout en continuant d’apprendre et de
                  me perfectionner. La meilleure chose qui pourrait m’arriver
                  serait d’intégrer un projet qui me permette de m’aligner avec
                  ces objectifs, et surtout, de le faire dans la bonne humeur !
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
