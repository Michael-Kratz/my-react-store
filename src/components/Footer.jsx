import "./Footer.css";

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-left">
          © {new Date().getFullYear()} My React Store by Michael Kratz
        </div>
        <nav className="footer-nav">
          <a href="/about">About</a>
          <a href="/contact">Contact</a>
          <a href="/catalog">Catalog</a>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;
