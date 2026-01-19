import { Link } from 'react-router-dom';
import { FaWrench, FaShower, FaTint, FaTools, FaFire, FaBath } from 'react-icons/fa';
import './ServiceCard.css';

const iconMap = {
  wrench: FaWrench,
  shower: FaShower,
  tint: FaTint,
  tools: FaTools,
  fire: FaFire,
  bath: FaBath,
};

const ServiceCard = ({ service }) => {
  const Icon = iconMap[service.icon] || FaWrench;

  return (
    <div className="service-card">
      <div className="service-icon">
        <Icon />
      </div>
      <h4>{service.title}</h4>
      <p>{service.description}</p>
      <Link to={`/services/${service.id}`} className="service-link">
        Learn More <span>→</span>
      </Link>
    </div>
  );
};

export default ServiceCard;

