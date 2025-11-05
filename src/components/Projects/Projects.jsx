import "../../App.css";
import "../Projects/Projects.css";
import ProjectCineHelp from "../../assets/Projet_CineHelp.png";
import ImageProjectSiteVitrine from "../../assets/ProjetVitrine_Image.png";
import InProgress from "../../assets/InProgress.webp";
import Daquizz from "../../assets/Projet_Daquizz.png";
import Refonte from "../../assets/Projet_Refonte.png";

function Projects() {
  return (
    <>
      <section id="projects" className="projects-section">
        <h2 className="section-title">Mes Projets</h2>
        <div className="projects-grid">
          <div className="project-card">
            <div className="project-image">
              <img src="https://i.imgur.com/MHmS1zB.png" alt="Joo Project" />
              <div className="overlay">
                <span>
                  <a
                    href="https://youtu.be/qR940fKm1r4"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Voir le projet
                  </a>
                </span>
              </div>
            </div>
            <div className="project-content">
              <div className="project-title-content">
                <h3 className="project-title">SoccerShop</h3>
                <p>• Terminé</p>
              </div>
              <p className="project-desc">
                Une app e-commerce d'équipement de football, réalisé en équipe
                avec une UI entièrement pensé et réalisé par mes soins.
              </p>
              <ul className="project-stack">
                <li>HTML</li>
                <li>CSS</li>
                <li>MySQL</li>
                <li>PHP</li>
              </ul>
            </div>
          </div>

          <div className="project-card">
            <div className="project-image">
              <img src={ProjectCineHelp} alt="Section Hero du site CineHelp" />
              <div className="overlay">
                <span>
                  <a
                    href="https://cine-help-now.netlify.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Voir le projet
                  </a>
                </span>
              </div>
            </div>
            <div className="project-content">
              <div className="project-title-content">
                <h3 className="project-title">CinéHelp</h3>
                <p>• Terminé</p>
              </div>
              <p className="project-desc">
                Réalisation d'un site web vitrine pour un organisme dans le
                monde du cinéma.
              </p>
              <ul className="project-stack">
                <li>React</li>
                <li>TailwindCSS</li>
              </ul>
            </div>
          </div>

          <div className="project-card">
            <div className="project-image">
              <img
                src={ImageProjectSiteVitrine}
                alt="Image de la section 'Hero' du site vitrine réalisée"
              />
              <div className="overlay">
                <span>
                  <a
                    href="https://exemple-site-vitrine.netlify.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Voir le projet
                  </a>
                </span>
              </div>
            </div>
            <div className="project-content">
              <div className="project-title-content">
                <h3 className="project-title">Site vitrine</h3>
                <p>• Terminé</p>
              </div>
              <p className="project-desc">
                Un site vitrine d'une interprète chinoise pour afficher ses
                services sur un site intuitive, tout en utilisant un design au
                goût du jour.
              </p>
              <ul className="project-stack">
                <li>SvelteKit</li>
                <li>TailwindCSS</li>
                <li>i18n</li>
              </ul>
            </div>
          </div>

          <div className="project-card">
            <div className="project-image">
              <img
                src={Refonte}
                alt="Image de la section 'Hero' du site vitrine réalisée"
              />
              <div className="overlay">
                <span>
                  <a
                    href="https://brenda-refonte-site.vercel.app/fr"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Voir le projet
                  </a>
                </span>
              </div>
            </div>
            <div className="project-content">
              <div className="project-title-content">
                <h3 className="project-title">Projet de refonte de site</h3>
                <p>• Terminé</p>
              </div>
              <p className="project-desc">
                Refonte d’un site réalisée durant mon stage, améliorant design,
                UX et responsivité.
                <em>
                  Les logos et marques sont présentés uniquement à titre de
                  démonstration.
                </em>
              </p>
              <ul className="project-stack">
                <li>Next.js</li>
                <li>TailwindCSS</li>
                <li>Framer Motion</li>
                <li>i18n</li>
              </ul>
            </div>
          </div>
        </div>
      <a href="https://www.behance.net/gallery/237988455/Visuels-promotionnels-pour-jeu-vido-indpendant" target="_blank" rel="noopener noreferrer"
        class="inline-block mt-17 px-4 py-2 bg-white/15 border-1 border-white/40 text-white text-xl font-medium rounded-xl hover:bg-white/25 transition-colors duration-200">
        Découvrir mes projets créatifs sur Behance
      </a>


      </section>
    </>
  );
}

export default Projects;
