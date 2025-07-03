import '../../App.css';
import '../Menu/Menu.css';
import '@flaticon/flaticon-uicons/css/all/all.css';

function Menu() {
  return (
    <>
      <nav className="navbar" id="navbar">
        <div className="navbar-links">
          <a href="#hero">
            <i class="fi fi-rr-home"></i>
          </a>
          <a href="#about">
            <i class="fi fi-rr-user"></i>
          </a>
          <a href="#projects">
            <i class="fi fi-rs-display-code"></i>
          </a>
          <a href="#skills">
            <i class="fi fi-rr-brain-circuit"></i>
          </a>
        </div>
        <a href="mailto:brendakmpro@gmail.com" className="btn-contact">
          Me contacter
        </a>
      </nav>
    </>
  );
}

export default Menu;
