import '../../App.css';
import '../Menu/Menu.css';
import '@flaticon/flaticon-uicons/css/all/all.css';

function Menu() {
  return (
    <>
      <nav className="navbar" id="navbar">
        <div className="navbar-links">
          <a href="#hero" data-label="Accueil">
            <i className="fi fi-sr-home"></i>
          </a>
          <a href="#about" data-label="À propos">
            <i className="fi fi-sr-user"></i>
          </a>
          <a href="#projects" data-label="Projets">
            <i className="fi fi-sr-computer"></i>
          </a>
          <a href="#skills" data-label="Compétences">
            <i className="fi fi-sr-skill-alt"></i>
          </a>
        </div>

        <a href="mailto:brendamisenga@gmail.com" className="btn-contact">
          Contact
        </a>
      </nav>
    </>
  );
}

export default Menu;
