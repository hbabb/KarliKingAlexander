// karliKingAlexander/frontend/src/core/components/footer/footer.tsx
import React from "react";
import {
  FaFacebook,
  FaLinkedin,
} from "react-icons/fa";

const Footer: React.FC = () => (
  <footer className="footer">
    <div className="footer-wrapper">
      <p className="copyright">
        &copy; {new Date().getFullYear()} Karli King Alexander. All rights
        reserved. {' '}<em className="construction">Under Construction</em>
      </p>
      <div className="social-icons">
        <a href="https://www.linkedin.com/in/karli-king-alexander/">
          <FaLinkedin />
        </a>
        <a href="https://www.facebook.com/karli.king.353">
          <FaFacebook />
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;