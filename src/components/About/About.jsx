import "../../App.css";
import "../About/About.css";
import Image from "../../assets/Brenda.png";

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
                  Je m’appelle Brenda. J’ai commencé comme graphiste
                  autodidacte, en offrant mes services bénévolement à des
                  créateurs et petites communautés. En côtoyant des
                  développeurs, je me suis rendu compte que le développement me
                  passionnait tout autant que le design. Pour approfondir mes
                  compétences, j’ai ensuite fait un DEC en informatique.
                  Aujourd’hui, je cherche à rejoindre une équipe où je pourrai
                  mêler créativité et développement, tout en continuant à
                  apprendre et à me perfectionner.
                </p>
                <p className="about-text">
                  En dehors du code, j’aime tout ce qui stimule ma créativité :
                  le design, la photo, la musique, le sport et découvrir de
                  nouveaux endroits. Ces inspirations variées m’aident à créer
                  des projets qui me ressemblent : simples, modernes et
                  agréables à utiliser. Ce qui me motive, c’est de continuer à
                  grandir comme développeuse tout en restant connectée à ce que
                  j’aime dans la vie.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
