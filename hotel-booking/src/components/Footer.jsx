function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">

        <div>
          <div className="footer-logo">
            <span>Stay</span>Ease
          </div>

          <p>
            Find comfortable stays and make your
            next journey unforgettable.
          </p>
        </div>

        <div>
          <h4>Company</h4>
          <a href="#about">About Us</a>
          <a href="#contact">Contact</a>
          <a href="#careers">Careers</a>
        </div>

        <div>
          <h4>Support</h4>
          <a href="#help">Help Center</a>
          <a href="#faq">FAQ</a>
          <a href="#privacy">Privacy Policy</a>
        </div>

        <div>
          <h4>Contact</h4>
          <p>hello@stayease.com</p>
          <p>+977 9800000000</p>
          <p>Kathmandu, Nepal</p>
        </div>

      </div>

      <div className="footer-bottom">
        © 2026 StayEase. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;