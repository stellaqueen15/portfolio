import "../../App.css";
import "../Projects/Projects.css";
import ProjectCineHelp from "../../assets/Projet_CineHelp.png";
import ImageProjectSiteVitrine from "../../assets/ProjetVitrine_Image.png";
import InProgress from "../../assets/InProgress.webp";

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
              <img src={InProgress} alt="Image qui affiche 'En  cours'" />
              <div className="overlay"></div>
            </div>
            <div className="project-content">
              <div className="project-title-content">
                <h3 className="project-title">Admin Tool</h3>
                <p>• En cours</p>
              </div>
              <p className="project-desc">À suivre...</p>
              <ul className="project-stack">
                <li>React</li>
                <li>Express.js</li>
                <li>PostgreSQL</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Projects;
