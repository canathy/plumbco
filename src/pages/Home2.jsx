import { Link } from 'react-router-dom';
import ServiceCard from '../components/ServiceCard/ServiceCard';
import './Home.css';

const Home2 = () => {
  const services = [
    {
      id: 1,
      title: 'Emergency Plumbing',
      description: '24/7 emergency plumbing services for urgent repairs and fixes.',
      icon: 'wrench'
    },
    {
      id: 2,
      title: 'Drain Cleaning',
      description: 'Professional drain cleaning and unclogging services.',
      icon: 'tint'
    },
    {
      id: 3,
      title: 'Water Heater Repair',
      description: 'Expert water heater installation, repair, and maintenance.',
      icon: 'fire'
    }
  ];

  return (
    <div className="home-page">
      <section className="hero-section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="hero-content">
                <h1>Professional Plumbing Services You Can Trust</h1>
                <p>We provide reliable, affordable, and professional plumbing solutions for residential and commercial properties.</p>
                <div className="hero-buttons">
                  <Link to="/contact" className="btn btn-primary btn-lg">Get Free Quote</Link>
                  <Link to="/services" className="btn btn-outline-primary btn-lg">Our Services</Link>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="hero-image">
                <img src="src/assets/images/aboutus.jpg" alt="Plumbing Services" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="services-section">
        <div className="container">
          <div className="section-header text-center">
            <h2>Our Services</h2>
            <p>Comprehensive plumbing solutions for all your needs</p>
          </div>
          <div className="row">
            {services.map(service => (
              <div key={service.id} className="col-lg-4 col-md-6 mb-4">
                <ServiceCard service={service} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home2;

