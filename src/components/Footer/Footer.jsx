import { Link } from 'react-router-dom';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6 mb-4">
            <div className="footer-widget">
              <h3>PlumbCo</h3>
              <p>Your trusted plumbing service provider. We offer professional, reliable, and affordable plumbing solutions for your home and business.</p>
              <div className="social-links">
                <a href="#" aria-label="Facebook"><FaFacebook /></a>
                <a href="#" aria-label="Twitter"><FaTwitter /></a>
                <a href="#" aria-label="Instagram"><FaInstagram /></a>
                <a href="#" aria-label="LinkedIn"><FaLinkedin /></a>
              </div>
            </div>
          </div>
          <div className="col-lg-2 col-md-6 mb-4">
            <div className="footer-widget">
              <h4>Quick Links</h4>
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/services">Services</Link></li>
                <li><Link to="/projects">Projects</Link></li>
                <li><Link to="/blog">Blog</Link></li>
                <li><Link to="/contact">Contact</Link></li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 mb-4">
            <div className="footer-widget">
              <h4>Our Services</h4>
              <ul>
                <li><Link to="/services">Emergency Plumbing</Link></li>
                <li><Link to="/services">Drain Cleaning</Link></li>
                <li><Link to="/services">Water Heater Repair</Link></li>
                <li><Link to="/services">Pipe Installation</Link></li>
                <li><Link to="/services">Leak Detection</Link></li>
                <li><Link to="/services">Bathroom Remodeling</Link></li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 mb-4">
            <div className="footer-widget">
              <h4>Contact Info</h4>
              <ul className="contact-info">
                <li><FaMapMarkerAlt /> 123 Main Street, City, State 12345</li>
                <li><FaPhone /> +1 (234) 567-8900</li>
                <li><FaEnvelope /> info@plumbco.com</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="row">
            <div className="col-md-6">
              <p>&copy; 2024 PlumbCo. All rights reserved.</p>
            </div>
            <div className="col-md-6 text-end">
              <p>Designed with Canathy by PlumbCo Team</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

