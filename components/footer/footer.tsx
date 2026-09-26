import { personal } from "@/data/personal";

export function Footer() {
  return (
    <footer className="site-footer" role="contentinfo">
      <div className="footer-inner">
        <div className="footer-brand">
          <span className="footer-name">{personal.name.toUpperCase()}</span>
          <span className="footer-location">{personal.location.toUpperCase()}</span>
        </div>

        <p className="footer-copy">© 2026</p>

        <a href="#top" className="back-to-top" aria-label="Back to top of page">
          <span>BACK TO TOP</span>
          <b aria-hidden="true">↑</b>
        </a>
      </div>
    </footer>
  );
}

