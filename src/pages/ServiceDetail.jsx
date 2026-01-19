import { useParams, Link } from 'react-router-dom';
import { FaCheck, FaClock, FaDollarSign, FaTools } from 'react-icons/fa';
import './ServiceDetail.css';

const ServiceDetail = () => {
  const { slug } = useParams();

  const serviceDetails = {
    'emergency-plumbing': {
      title: 'Emergency Plumbing',
      description: 'Our 24/7 emergency plumbing service is available whenever you need us most. We understand that plumbing emergencies don\'t wait for convenient times, which is why our team is always ready to respond quickly to your call.',
      features: [
        '24/7 Availability',
        'Fast Response Time',
        'Licensed Professionals',
        'Emergency Repairs',
        'Leak Detection',
        'Pipe Burst Repair'
      ],
      pricing: 'Starting at $150',
      duration: '30-60 minutes',
      image: 'src/assets/images/completeplumbing.jpg'
    }
  };

  const service = serviceDetails[slug] || serviceDetails['emergency-plumbing'];

  return (
    <div className="service-detail-page">
      <section className="page-header">
        <div className="container">
          <h1>{service.title}</h1>
          <p>Professional {service.title.toLowerCase()} services</p>
        </div>
      </section>

      <section className="service-detail-content">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="service-image mb-4">
                <img src={service.image} alt={service.title} />
              </div>
              <div className="service-description">
                <h2>About This Service</h2>
                <p>{service.description}</p>
                <p>We pride ourselves on delivering exceptional service quality with every job. Our experienced team uses the latest tools and techniques to ensure your plumbing issues are resolved efficiently and effectively.</p>
              </div>

              <div className="service-features mt-5">
                <h2>What We Offer</h2>
                <div className="row">
                  {service.features.map((feature, index) => (
                    <div key={index} className="col-md-6 mb-3">
                      <div className="feature-item">
                        <FaCheck className="feature-icon" />
                        <span>{feature}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="service-sidebar">
                <div className="sidebar-card">
                  <h3>Service Info</h3>
                  <div className="info-item">
                    <FaDollarSign />
                    <div>
                      <strong>Pricing</strong>
                      <p>{service.pricing}</p>
                    </div>
                  </div>
                  <div className="info-item">
                    <FaClock />
                    <div>
                      <strong>Duration</strong>
                      <p>{service.duration}</p>
                    </div>
                  </div>
                  <div className="info-item">
                    <FaTools />
                    <div>
                      <strong>Service Type</strong>
                      <p>Professional</p>
                    </div>
                  </div>
                  <Link to="/contact" className="btn btn-primary w-100 mt-3">Get Quote</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServiceDetail;

