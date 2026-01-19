import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaPhone, FaEnvelope, FaBars, FaTimes, FaChevronDown } from 'react-icons/fa';
import './Header.css';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleDropdown = (dropdown) => {
    setOpenDropdown(openDropdown === dropdown ? null : dropdown);
  };

  const closeDropdown = () => {
    setOpenDropdown(null);
  };

  return (
    <>
      {/* Top Bar */}
      <div className="top-bar">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <div className="top-bar-left">
                <span><FaPhone /> +1 (234) 567-8900</span>
                <span><FaEnvelope /> info@plumbco.com</span>
              </div>
            </div>
            <div className="col-md-6 text-end">
              <div className="top-bar-right">
                <span>Mon - Sat: 8:00 AM - 6:00 PM</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className={`main-header ${isScrolled ? 'scrolled' : ''}`}>
        <div className="container">
          <nav className="navbar navbar-expand-lg">
            <Link className="navbar-brand" to="/">
              <h2>PlumbCo</h2>
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              onClick={toggleMobileMenu}
              aria-label="Toggle navigation"
            >
              {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
            </button>
            <div className={`collapse navbar-collapse ${isMobileMenuOpen ? 'show' : ''}`}>
              <ul className="navbar-nav ms-auto">
                {/* Home Dropdown */}
                <li className="nav-item dropdown" onMouseEnter={() => setOpenDropdown('home')} onMouseLeave={closeDropdown}>
                  <Link className="nav-link dropdown-toggle" to="#" onClick={(e) => { e.preventDefault(); toggleDropdown('home'); }}>
                    Home <FaChevronDown className="dropdown-icon" />
                  </Link>
                  <ul className={`dropdown-menu ${openDropdown === 'home' ? 'show' : ''}`} onMouseEnter={() => setOpenDropdown('home')} onMouseLeave={closeDropdown}>
                    <li><Link className="dropdown-item" to="/" onClick={() => { setIsMobileMenuOpen(false); closeDropdown(); }}>Home 1</Link></li>
                    <li><Link className="dropdown-item" to="/home-2" onClick={() => { setIsMobileMenuOpen(false); closeDropdown(); }}>Home 2</Link></li>
                    <li><Link className="dropdown-item" to="/home-3" onClick={() => { setIsMobileMenuOpen(false); closeDropdown(); }}>Home 3</Link></li>
                  </ul>
                </li>

                <li className="nav-item">
                  <Link className="nav-link" to="/about" onClick={() => setIsMobileMenuOpen(false)}>About</Link>
                </li>

                {/* Services Dropdown */}
                <li className="nav-item dropdown" onMouseEnter={() => setOpenDropdown('services')} onMouseLeave={closeDropdown}>
                  <Link className="nav-link dropdown-toggle" to="#" onClick={(e) => { e.preventDefault(); toggleDropdown('services'); }}>
                    Services <FaChevronDown className="dropdown-icon" />
                  </Link>
                  <ul className={`dropdown-menu ${openDropdown === 'services' ? 'show' : ''}`} onMouseEnter={() => setOpenDropdown('services')} onMouseLeave={closeDropdown}>
                    <li><Link className="dropdown-item" to="/services" onClick={() => { setIsMobileMenuOpen(false); closeDropdown(); }}>Services List</Link></li>
                    <li><Link className="dropdown-item" to="/services/emergency-plumbing" onClick={() => { setIsMobileMenuOpen(false); closeDropdown(); }}>Service Detail</Link></li>
                  </ul>
                </li>

                {/* Shop Dropdown */}
                <li className="nav-item dropdown" onMouseEnter={() => setOpenDropdown('shop')} onMouseLeave={closeDropdown}>
                  <Link className="nav-link dropdown-toggle" to="#" onClick={(e) => { e.preventDefault(); toggleDropdown('shop'); }}>
                    Shop <FaChevronDown className="dropdown-icon" />
                  </Link>
                  <ul className={`dropdown-menu ${openDropdown === 'shop' ? 'show' : ''}`} onMouseEnter={() => setOpenDropdown('shop')} onMouseLeave={closeDropdown}>
                    <li><Link className="dropdown-item" to="/shop" onClick={() => { setIsMobileMenuOpen(false); closeDropdown(); }}>Shop</Link></li>
                    <li><Link className="dropdown-item" to="/shop/product" onClick={() => { setIsMobileMenuOpen(false); closeDropdown(); }}>Product Detail</Link></li>
                    <li><Link className="dropdown-item" to="/cart" onClick={() => { setIsMobileMenuOpen(false); closeDropdown(); }}>Cart</Link></li>
                    <li><Link className="dropdown-item" to="/checkout" onClick={() => { setIsMobileMenuOpen(false); closeDropdown(); }}>Checkout</Link></li>
                  </ul>
                </li>

                {/* Pages Dropdown */}
                <li className="nav-item dropdown" onMouseEnter={() => setOpenDropdown('pages')} onMouseLeave={closeDropdown}>
                  <Link className="nav-link dropdown-toggle" to="#" onClick={(e) => { e.preventDefault(); toggleDropdown('pages'); }}>
                    Pages <FaChevronDown className="dropdown-icon" />
                  </Link>
                  <ul className={`dropdown-menu ${openDropdown === 'pages' ? 'show' : ''}`} onMouseEnter={() => setOpenDropdown('pages')} onMouseLeave={closeDropdown}>
                    {/* <li><Link className="dropdown-item" to="/about" onClick={() => { setIsMobileMenuOpen(false); closeDropdown(); }}>About Us</Link></li> */}
                    <li><Link className="dropdown-item" to="/team" onClick={() => { setIsMobileMenuOpen(false); closeDropdown(); }}>Our Team</Link></li>
                    <li><Link className="dropdown-item" to="/pricing" onClick={() => { setIsMobileMenuOpen(false); closeDropdown(); }}>Pricing</Link></li>
                    <li><Link className="dropdown-item" to="/faq" onClick={() => { setIsMobileMenuOpen(false); closeDropdown(); }}>FAQ</Link></li>
                    <li><Link className="dropdown-item" to="/projects" onClick={() => { setIsMobileMenuOpen(false); closeDropdown(); }}>Projects</Link></li>
                    <li><Link className="dropdown-item" to="/projects/project-detail" onClick={() => { setIsMobileMenuOpen(false); closeDropdown(); }}>Project Detail</Link></li>
                    <li><Link className="dropdown-item" to="/404" onClick={() => { setIsMobileMenuOpen(false); closeDropdown(); }}>404 Page</Link></li>
                    <li><Link className="dropdown-item" to="/register" onClick={() => { setIsMobileMenuOpen(false); closeDropdown(); }}>Register</Link></li>
                    <li><Link className="dropdown-item" to="/login" onClick={() => { setIsMobileMenuOpen(false); closeDropdown(); }}>Login</Link></li>
                  </ul>
                </li>

                {/* Blog Dropdown */}
                <li className="nav-item dropdown" onMouseEnter={() => setOpenDropdown('blog')} onMouseLeave={closeDropdown}>
                  <Link className="nav-link dropdown-toggle" to="#" onClick={(e) => { e.preventDefault(); toggleDropdown('blog'); }}>
                    Blog <FaChevronDown className="dropdown-icon" />
                  </Link>
                  <ul className={`dropdown-menu ${openDropdown === 'blog' ? 'show' : ''}`} onMouseEnter={() => setOpenDropdown('blog')} onMouseLeave={closeDropdown}>
                    <li><Link className="dropdown-item" to="/blog" onClick={() => { setIsMobileMenuOpen(false); closeDropdown(); }}>Blog List</Link></li>
                    <li><Link className="dropdown-item" to="/blog/blog-detail" onClick={() => { setIsMobileMenuOpen(false); closeDropdown(); }}>Blog Detail</Link></li>
                  </ul>
                </li>

                <li className="nav-item">
                  <Link className="nav-link" to="/contact" onClick={() => setIsMobileMenuOpen(false)}>Contact</Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link btn btn-primary" to="/contact" onClick={() => setIsMobileMenuOpen(false)}>Get Free Quote</Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;

