import { Link } from 'react-router-dom';
import ServiceCard from '../components/ServiceCard/ServiceCard';
import Testimonial from '../components/Testimonial/Testimonial';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Home.css';

const Home = () => {
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
    },
    {
      id: 4,
      title: 'Pipe Installation',
      description: 'Complete pipe installation and replacement services.',
      icon: 'tools'
    },
    {
      id: 5,
      title: 'Leak Detection',
      description: 'Advanced leak detection and repair solutions.',
      icon: 'shower'
    },
    {
      id: 6,
      title: 'Bathroom Remodeling',
      description: 'Transform your bathroom with our remodeling services.',
      icon: 'bath'
    }
  ];

  const testimonials = [
    {
      id: 1,
      name: 'John Smith',
      position: 'Homeowner',
      text: 'Excellent service! The plumber arrived on time and fixed the issue quickly. Highly recommended!',
      rating: 5,
      avatar: 'src/assets/images/plumber.jpg'
    },
    {
      id: 2,
      name: 'Sarah Johnson',
      position: 'Business Owner',
      text: 'Professional team with great attention to detail. They completed our commercial plumbing project perfectly.',
      rating: 5,
      avatar: 'src/assets/images/plumber.jpg'
    },
    {
      id: 3,
      name: 'Mike Davis',
      position: 'Property Manager',
      text: 'Reliable and affordable service. PlumbCo has been our go-to plumbing company for years.',
      rating: 5,
      avatar: 'src/assets/images/plumber.jpg'
    }
  ];

  const sliderSettings = {
    dots: true,              // Shows navigation dots at the bottom
    infinite: true,          // Creates a continuous loop (last slide → first slide)
    speed: 500,              // Transition animation speed in milliseconds
    slidesToShow: 2,         // Number of slides visible at once
    slidesToScroll: 1,       // How many slides to scroll when navigating
    autoplay: true,          // Automatically advances slides
    autoplaySpeed: 3000,     // Time between auto-advances (3 seconds)
  responsive: [
    {
      breakpoint: 992,       // When screen width is ≤ 992px (tablets)
      settings: {
        slidesToShow: 2      // Still shows 2 slides
    }
  },
  {
    breakpoint: 768,       // When screen width is ≤ 768px (mobile)
    settings: {
      slidesToShow: 1      // Shows only 1 slide
    }
  }
]
  };

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="hero-content">
                <h1>Ready For Help You</h1>
                <p>We are certified company. We provide best plumbing services for you & your company .</p>
                <div className="hero-buttons">
                  <Link to="/contact" className="btn btn-primary btn-lg">Get Free Quote</Link>
                  <Link to="/services" className="btn btn-outline-primary btn-lg">Our Services</Link>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="hero-image">
                <img src="src/assets/images/plumber.jpg" alt="Plumbing Services" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="container">
          <div className="row">
            <div className="col-md-3 col-sm-6 mb-4">
              <div className="feature-box">
                <div className="feature-icon"> ✅ </div>
                <h5>Licensed & Insured</h5>
                <p>Fully licensed and insured professionals</p>
              </div>
            </div>
            <div className="col-md-3 col-sm-6 mb-4">
              <div className="feature-box">
                <div className="feature-icon">⏰</div>
                <h5>24/7 Available</h5>
                <p>Round-the-clock emergency services</p>
              </div>
            </div>
            <div className="col-md-3 col-sm-6 mb-4">
              <div className="feature-box">
                <div className="feature-icon">💰</div>
                <h5>Fair Pricing</h5>
                <p>Transparent and competitive rates</p>
              </div>
            </div>
            <div className="col-md-3 col-sm-6 mb-4">
              <div className="feature-box">
                <div className="feature-icon">⭐</div>
                <h5>5 Star Rated</h5>
                <p>Highly rated by our customers</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
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
          <div className="text-center mt-4">
            <Link to="/services" className="btn btn-primary">View All Services</Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about-section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="about-image">
                <img src="src/assets/images/aboutus.jpg" alt="About Us" />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="about-content">
                <h2>Why Choose PlumbCo?</h2>
                <p>With over 15 years of experience in the plumbing industry, we have built a reputation for excellence, reliability, and customer satisfaction.</p>
                <ul className="about-list">
                  <li>✓ Experienced and certified plumbers</li>
                  <li>✓ Latest tools and technology</li>
                  <li>✓ 100% satisfaction guarantee</li>
                  <li>✓ Emergency service available</li>
                  <li>✓ Competitive pricing</li>
                  <li>✓ Free estimates</li>
                </ul>
                <Link to="/about" className="btn btn-primary">Learn More</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section">
        <div className="container">
          <div className="section-header text-center">
            <h2>What Our Customers Say</h2>
            <p>Don't just take our word for it - hear from our satisfied customers</p>
          </div>
          <Slider {...sliderSettings}>
            {testimonials.map(testimonial => (
              <div key={testimonial.id} className="px-3">
                <Testimonial testimonial={testimonial} />
              </div>
            ))}
          </Slider>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content text-center">
            <h2>Need Professional Plumbing Services?</h2>
            <p>Contact us today for a free estimate and experience the PlumbCo difference!</p>
            <Link to="/contact" className="btn btn-light btn-lg">Get Started Now</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

