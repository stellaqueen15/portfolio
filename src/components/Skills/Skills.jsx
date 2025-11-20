import "../../App.css";
import "../Skills/Skills.css";

function Skills() {
  return (
    <>
      <section id="skills" className="skills-section">
        <div className="skills-container">
          <h2 className="skills-title">Mes compétences</h2>
          <div className="skills-content">
            <div className="skills-card">
              <h3>Frontend</h3>

              <div className="badges">
                <span className="skill-badge">HTML</span>
                <span className="skill-badge">CSS</span>
                <span className="skill-badge">TypeScript</span>
                <span className="skill-badge">React</span>
                <span className="skill-badge">Next.js</span>
                <span className="skill-badge">Vue.js</span>
                <span className="skill-badge">Svelte</span>
                <span className="skill-badge">TailwindCSS</span>
              </div>
            </div>

            <div className="skills-card">
              <h3>Backend</h3>

              <div className="badges">
                <span className="skill-badge">PHP</span>
                <span className="skill-badge">.NET</span>
                <span className="skill-badge">Express.js</span>
                <span className="skill-badge">API REST</span>
                <span className="skill-badge">MySQL</span>
                <span className="skill-badge">MongoDB</span>
              </div>
            </div>

            <div className="skills-card">
              <h3>Outils</h3>

              <div className="badges">
                <span className="skill-badge">Figma</span>
                <span className="skill-badge">Photoshop</span>
                <span className="skill-badge">VS Code</span>
                <span className="skill-badge">Docker</span>
                <span className="skill-badge">Git</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Skills;
