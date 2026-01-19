import { Link } from 'react-router-dom';
import './About.css';


const About = () => {
  return (
    <div className="about-page">
      <section className="page-header">
        <div className="container">
          <h1>About Us</h1>
          <p>Your trusted plumbing partner since 2009</p>
        </div>
      </section>

      <section className="about-content-section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="about-image">
                <img src="src/assets/images/aboutus.jpg" alt="About PlumbCo" />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="about-text">
                <h2>Who We Are</h2>
                <p>PlumbCo has been serving the community with professional plumbing services for over 15 years. We started as a small family business and have grown into a trusted name in the plumbing industry.</p>
                <p>Our team of licensed and certified plumbers is committed to providing the highest quality service, using the latest tools and technology to solve any plumbing problem efficiently and effectively.</p>
                <p>We pride ourselves on our reliability, professionalism, and customer-first approach. Every job is completed to the highest standards, and we stand behind our work with comprehensive warranties.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="values-section">
        <div className="container">
          <div className="section-header text-center">
            <h2>Our Values</h2>
            <p>What drives us every day</p>
          </div>
          <div className="row">
            <div className="col-md-4 mb-4">
              <div className="value-card">
                <div className="value-icon">✓</div>
                <h4>Quality</h4>
                <p>We never compromise on quality. Every job is completed to the highest standards.</p>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="value-card">
                <div className="value-icon">⏰</div>
                <h4>Reliability</h4>
                <p>You can count on us to be there when you need us, 24/7.</p>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="value-card">
                <div className="value-icon">💡</div>
                <h4>Innovation</h4>
                <p>We use the latest technology and techniques to provide the best solutions.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="stats-section">
        <div className="container">
          <div className="row text-center">
            <div className="col-md-3 col-sm-6 mb-4">
              <div className="stat-box">
                <h3>15+</h3>
                <p>Years of Experience</p>
              </div>
            </div>
            <div className="col-md-3 col-sm-6 mb-4">
              <div className="stat-box">
                <h3>5000+</h3>
                <p>Happy Customers</p>
              </div>
            </div>
            <div className="col-md-3 col-sm-6 mb-4">
              <div className="stat-box">
                <h3>50+</h3>
                <p>Expert Plumbers</p>
              </div>
            </div>
            <div className="col-md-3 col-sm-6 mb-4">
              <div className="stat-box">
                <h3>24/7</h3>
                <p>Emergency Service</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <div className="cta-content text-center">
            <h2>Ready to Work With Us?</h2>
            <p>Contact us today and experience the PlumbCo difference</p>
            <Link to="/contact" className="btn btn-primary btn-lg">Get In Touch</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;

