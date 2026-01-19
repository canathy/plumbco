import { Link } from 'react-router-dom';
import ServiceCard from '../components/ServiceCard/ServiceCard';
import './Services.css';

const Services = () => {
  const services = [
    {
      id: 1,
      title: 'Emergency Plumbing',
      description: '24/7 emergency plumbing services for urgent repairs and fixes. We respond quickly to prevent water damage and restore your plumbing system.',
      icon: 'wrench'
    },
    {
      id: 2,
      title: 'Drain Cleaning',
      description: 'Professional drain cleaning and unclogging services using advanced tools and techniques to clear any blockage.',
      icon: 'tint'
    },
    {
      id: 3,
      title: 'Water Heater Repair',
      description: 'Expert water heater installation, repair, and maintenance. We work with all types of water heaters.',
      icon: 'fire'
    },
    {
      id: 4,
      title: 'Pipe Installation',
      description: 'Complete pipe installation and replacement services for residential and commercial properties.',
      icon: 'tools'
    },
    {
      id: 5,
      title: 'Leak Detection',
      description: 'Advanced leak detection and repair solutions using state-of-the-art equipment to find hidden leaks.',
      icon: 'shower'
    },
    {
      id: 6,
      title: 'Bathroom Remodeling',
      description: 'Transform your bathroom with our comprehensive remodeling services. From design to installation.',
      icon: 'bath'
    },
    {
      id: 7,
      title: 'Sewer Line Repair',
      description: 'Professional sewer line inspection, repair, and replacement services to keep your system running smoothly.',
      icon: 'tools'
    },
    {
      id: 8,
      title: 'Fixture Installation',
      description: 'Expert installation of faucets, sinks, toilets, and other plumbing fixtures with precision and care.',
      icon: 'shower'
    },
    {
      id: 9,
      title: 'Water Filtration',
      description: 'Installation and maintenance of water filtration systems for clean, safe drinking water.',
      icon: 'tint'
    }
  ];

  return (
    <div className="services-page">
      <section className="page-header">
        <div className="container">
          <h1>Our Services</h1>
          <p>Professional plumbing solutions for all your needs</p>
        </div>
      </section>

      <section className="services-list">
        <div className="container">
          <div className="row">
            {services.map(service => (
              <div key={service.id} className="col-lg-4 col-md-6 mb-4">
                <ServiceCard service={service} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <div className="cta-content text-center">
            <h2>Need a Custom Solution?</h2>
            <p>Contact us today to discuss your specific plumbing needs</p>
            <Link to="/contact" className="btn btn-primary btn-lg">Get Free Quote</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;

