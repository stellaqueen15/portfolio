import '../../App.css';
import '../Footer/Footer.css';

function Footer() {
  return (
    <>
      <footer class="footer">
        <div className="separator"></div>
        <div class="footer-content">
          <a href="https://github.com/stellaqueen15" target="_blank">
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/brenda-k-74364734a/"
            target="_blank"
          >
            LinkedIn
          </a>
          <a href="mailto:brendamisenga@gmail.com">Me contacter</a>
        </div>
        <p class="footer-note">© 2025 Brenda · Tous droits réservés</p>
      </footer>
    </>
  );
}

export default Footer;
