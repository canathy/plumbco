import { Link } from 'react-router-dom';
import { FaCheck } from 'react-icons/fa';
import './Pricing.css';

const Pricing = () => {
  const plans = [
    {
      id: 1,
      name: 'Basic',
      price: 99,
      period: 'per visit',
      features: [
        'Basic plumbing repairs',
        'Drain cleaning',
        'Fixture installation',
        'Leak detection',
        'Emergency service'
      ],
      popular: false
    },
    {
      id: 2,
      name: 'Professional',
      price: 199,
      period: 'per visit',
      features: [
        'All Basic features',
        'Water heater service',
        'Pipe installation',
        'Sewer line inspection',
        'Priority scheduling',
        'Annual maintenance'
      ],
      popular: true
    },
    {
      id: 3,
      name: 'Premium',
      price: 299,
      period: 'per visit',
      features: [
        'All Professional features',
        'Complete plumbing system',
        'Bathroom remodeling',
        'Commercial services',
        '24/7 support',
        'Warranty included'
      ],
      popular: false
    }
  ];

  return (
    <div className="pricing-page">
      <section className="page-header">
        <div className="container">
          <h1>Our Pricing</h1>
          <p>Choose the plan that works for you</p>
        </div>
      </section>

      <section className="pricing-content">
        <div className="container">
          <div className="row">
            {plans.map(plan => (
              <div key={plan.id} className="col-lg-4 col-md-6 mb-4">
                <div className={`pricing-card ${plan.popular ? 'popular' : ''}`}>
                  {plan.popular && <span className="popular-badge">Most Popular</span>}
                  <div className="pricing-header">
                    <h3>{plan.name}</h3>
                    <div className="pricing-price">
                      <span className="currency">$</span>
                      <span className="amount">{plan.price}</span>
                      <span className="period">/{plan.period}</span>
                    </div>
                  </div>
                  <ul className="pricing-features">
                    {plan.features.map((feature, index) => (
                      <li key={index}>
                        <FaCheck /> {feature}
                      </li>
                    ))}
                  </ul>
                  <Link to="/contact" className="btn btn-primary w-100">
                    Get Started
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pricing;

