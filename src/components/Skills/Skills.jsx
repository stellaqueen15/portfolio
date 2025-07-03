import '../../App.css';
import '../Skills/Skills.css';
import HTML from '../../assets/Icon_HTML.png';
import CSS from '../../assets/Icon_CSS.png';
import JS from '../../assets/Icon_JS.png';
import React from '../../assets/Icon_React.webp';
import Nextjs from '../../assets/Icon_NextJS.svg';
import Svelte from '../../assets/Icon_Svelte.png';
import TailwindCSS from '../../assets/Icon_TailwindCSS.webp';
import PHP from '../../assets/Icon_PHP.svg';
import MySQL from '../../assets/Icon_MySQL.png';
import ExpressJS from '../../assets/Icon_ExpressJS.png';
import PostgreSQL from '../../assets/Icon_PostgreSQL.png';
import Java from '../../assets/Icon_Java.svg';
import C from '../../assets/Icon_C.webp';
import Kotlin from '../../assets/Icon_Kotlin.png';
import Swift from '../../assets/Icon_Swift.svg';
import Figma from '../../assets/Icon_Figma.png';

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
                  <img src={HTML} alt="" className="skill-image" />
                  <p>HTML</p>
                </div>

                <div className="skill">
                  <img src={CSS} alt="" className="skill-image" />
                  <p>CSS</p>
                </div>

                <div className="skill">
                  <img src={JS} alt="" className="skill-image" />
                  <p>JavaScript</p>
                </div>

                <div className="skill">
                  <img src={React} alt="" className="skill-image" />
                  <p>React</p>
                </div>

                <div className="skill">
                  <img src={Nextjs} alt="" className="skill-image" />
                  <p>Next.js</p>
                </div>

                <div className="skill">
                  <img src={Svelte} alt="" className="skill-image" />
                  <p>Svelte</p>
                </div>

                <div className="skill">
                  <img src={TailwindCSS} alt="" className="skill-image" />
                  <p>TailwindCSS</p>
                </div>
              </div>
            </div>

            <div className="skills-second-row">
              <h3>Back-end</h3>
              <div className="skills-row">
                <div className="skill">
                  <img src={PHP} alt="" className="skill-image" />
                  <p>PHP</p>
                </div>

                <div className="skill">
                  <img src={MySQL} alt="" className="skill-image" />
                  <p>MySQL</p>
                </div>

                <div className="skill">
                  <img src={ExpressJS} alt="" className="skill-image" />
                  <p>ExpressJS</p>
                </div>

                <div className="skill">
                  <img src={PostgreSQL} alt="" className="skill-image" />
                  <p>PostgreSQL</p>
                </div>
              </div>
            </div>

            <div className="skills-second-row">
              <h3>Autres langages/Outils</h3>
              <div className="skills-row">
                <div className="skill">
                  <img
                    src="https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/181_Java_logo_logos-512.png"
                    alt=""
                    className="skill-image"
                  />
                  <p>Java</p>
                </div>

                <div className="skill">
                  <img src={C} alt="" className="skill-image" />
                  <p>C#</p>
                </div>

                <div className="skill">
                  <img
                    src="https://images.seeklogo.com/logo-png/27/2/kotlin-logo-png_seeklogo-273591.png"
                    alt=""
                    className="skill-image"
                  />
                  <p>Kotlin</p>
                </div>

                <div className="skill">
                  <img src={Swift} alt="" className="skill-image" />
                  <p>Swift</p>
                </div>

                <div className="skill">
                  <img
                    src="https://images.icon-icons.com/2429/PNG/512/figma_logo_icon_147289.png"
                    alt=""
                    className="skill-image"
                  />
                  <p>Figma</p>
                </div>

                <div className="skill">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Adobe_Photoshop_CC_icon.svg/512px-Adobe_Photoshop_CC_icon.svg.png"
                    alt=""
                    className="skill-image"
                  />
                  <p>Photoshop</p>
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
