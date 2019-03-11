import React from "react";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-container">
        <div class="footer-display">
          <div class="footer-heading">Connect</div>
          <div class="footer-content">
            <a href="/" className="footer-link">
              About Us
            </a>
            <a href="/" className="footer-link">
              Careers
            </a>
            <a href="/" className="footer-link">
              Contact Us
            </a>
          </div>
          <hr className="footer-hr" />
        </div>
        <div class="footer-display">
          <div class="footer-heading">Explore</div>
          <div class="footer-content">
            <a href="/" className="footer-link">
              Spring Token
            </a>
            <a href="/" className="footer-link">
              Blog
            </a>
            <a href="/" className="footer-link">
              FAQ
            </a>
          </div>
          <hr className="footer-hr" />
        </div>
        <div class="footer-display">
          <div class="footer-logo" />
          <div style={{ display: "flex" }} className="extra">
            <i class="far fa-envelope" style={{ margin: "8px 15px" }} />
            <a href="/" className="footer-link  ">
              communications@springrole.com
            </a>
          </div>
          <div style={{ display: "flex" }} className="extra">
            <i class="fas fa-map-marker-alt" style={{ margin: "8px 15px" }} />
            <a href="/" className="footer-link">
              No.19, 2nd Floor Amar Plaza, Krishnanagar Industrial Layout Hosur Rd, Bengaluru, Karnataka 560029
            </a>
          </div>
          <hr className="footer-hr" />
        </div>
      </div>
      <div className="copyright">
        <a href="/" class="copyright-content">
          Terms &amp; conditions
        </a>
        <a href="/" class="copyright-content">
          Privacy policy
        </a>
        <a href="/" class="copyright-content" style={{ borderRight: 0 }}>
          © SpringRole 2019
        </a>
      </div>
    </div>
  );
}

export default Footer;
