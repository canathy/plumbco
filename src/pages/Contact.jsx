import { useState } from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Console log the form data
    console.log('Contact Form Data:', formData);
    console.log('Form submitted with the following information:');
    console.log('Name:', formData.name);
    console.log('Email:', formData.email);
    console.log('Phone:', formData.phone);
    console.log('Service:', formData.service);
    console.log('Message:', formData.message);
    
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      service: '',
      message: ''
    });
  };

  return (
    <div className="contact-page">
      <section className="page-header">
        <div className="container">
          <h1>Contact Us</h1>
          <p>Get in touch with us for all your plumbing needs</p>
        </div>
      </section>

      <section className="contact-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mb-4">
              <div className="contact-form-wrapper">
                <h2>Send Us a Message</h2>
                <form onSubmit={handleSubmit} className="contact-form">
                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <input
                        type="text"
                        name="name"
                        className="form-control"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="col-md-6 mb-3">
                      <input
                        type="email"
                        name="email"
                        className="form-control"
                        placeholder="Your Email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <input
                        type="tel"
                        name="phone"
                        className="form-control"
                        placeholder="Your Phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="col-md-6 mb-3">
                      <select
                        name="service"
                        className="form-control"
                        value={formData.service}
                        onChange={handleChange}
                        required
                      >
                        <option value="">Select a Service</option>
                        <option value="emergency">Emergency Plumbing</option>
                        <option value="drain">Drain Cleaning</option>
                        <option value="heater">Water Heater Repair</option>
                        <option value="pipe">Pipe Installation</option>
                        <option value="leak">Leak Detection</option>
                        <option value="remodel">Bathroom Remodeling</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>
                  <div className="mb-3">
                    <textarea
                      name="message"
                      className="form-control"
                      rows="6"
                      placeholder="Your Message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                    ></textarea>
                  </div>
                  <button type="submit" className="btn btn-primary btn-lg">
                    Send Message
                  </button>
                </form>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="contact-info-wrapper">
                <h2>Contact Information</h2>
                <div className="contact-info-item">
                  <div className="contact-icon">
                    <FaMapMarkerAlt />
                  </div>
                  <div>
                    <h5>Address</h5>
                    <p>123 Main Street<br />City, State 12345</p>
                  </div>
                </div>
                <div className="contact-info-item">
                  <div className="contact-icon">
                    <FaPhone />
                  </div>
                  <div>
                    <h5>Phone</h5>
                    <p>+1 (234) 567-8900</p>
                  </div>
                </div>
                <div className="contact-info-item">
                  <div className="contact-icon">
                    <FaEnvelope />
                  </div>
                  <div>
                    <h5>Email</h5>
                    <p>info@plumbco.com</p>
                  </div>
                </div>
                <div className="contact-info-item">
                  <div className="contact-icon">
                    <FaClock />
                  </div>
                  <div>
                    <h5>Business Hours</h5>
                    <p>Mon - Sat: 8:00 AM - 6:00 PM<br />Sun: Emergency Only</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;

