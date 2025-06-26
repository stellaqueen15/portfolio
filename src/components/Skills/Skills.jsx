import '../../App.css';
import '../Skills/Skills.css';
import { SquareCode, Server, Construction } from 'lucide-react';

function Skills() {
  return (
    <>
      <section id="skills" className="skills-section">
        <div className="skills-container">
          <h2 className="skills-title">Mes compétences</h2>
          <div className="skills-content">
            <div className="skills-first-row">
              <h3>Front-end</h3>
              <div className="skills-row">
                <div className="skill">
                  <img
                    src="https://icons.iconarchive.com/icons/cornmanthe3rd/plex/512/Other-html-5-icon.png"
                    alt=""
                    className="skill-image"
                  />
                  <p>HTML</p>
                </div>

                <div className="skill">
                  <img
                    src="https://img.icons8.com/fluent/512/css3.png"
                    alt=""
                    className="skill-image"
                  />
                  <p>CSS</p>
                </div>

                <div className="skill">
                  <img
                    src="https://static.vecteezy.com/system/resources/previews/027/127/560/non_2x/javascript-logo-javascript-icon-transparent-free-png.png"
                    alt=""
                    className="skill-image"
                  />
                  <p>JavaScript</p>
                </div>

                <div className="skill">
                  <img
                    src="https://cdn.iconscout.com/icon/free/png-256/free-react-logo-icon-download-in-svg-png-gif-file-formats--technology-social-media-vol-5-pack-logos-icons-2945110.png?f=webp&w=256"
                    alt=""
                    className="skill-image"
                  />
                  <p>React</p>
                </div>

                <div className="skill">
                  <img
                    src="https://dyma.fr/_next/image?url=%2Fimages%2Fformations%2Ftailwind-css%2F240x240.png&w=640&q=100"
                    alt=""
                    className="skill-image"
                  />
                  <p>TailwindCSS</p>
                </div>
              </div>
            </div>

            <div className="skills-second-row">
              <h3>Back-end</h3>
              <div className="skills-row">
                <div className="skill">
                  <img
                    src="https://www.svgrepo.com/show/452088/php.svg"
                    alt=""
                    className="skill-image"
                  />
                  <p>PHP</p>
                </div>

                <div className="skill">
                  <img
                    src="https://www.freepnglogos.com/uploads/logo-mysql-png/logo-mysql-development-mysql-logo-code-icon-9.png"
                    alt=""
                    className="skill-image"
                  />
                  <p>MySQL</p>
                </div>

                <div className="skill">
                  <img
                    src="https://ajeetchaulagain.com/static/7cb4af597964b0911fe71cb2f8148d64/87351/express-js.png"
                    alt=""
                    className="skill-image"
                  />
                  <p>ExpressJS</p>
                </div>

                <div className="skill">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/1985px-Postgresql_elephant.svg.png"
                    alt=""
                    className="skill-image"
                  />
                  <p>PostgreSQL</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Skills;
