import { FaStar } from 'react-icons/fa';
import './Testimonial.css';

const Testimonial = ({ testimonial }) => {
  return (
    <div className="testimonial-card">
      <div className="testimonial-rating">
        {[...Array(5)].map((_, i) => (
          <FaStar key={i} className={i < testimonial.rating ? 'filled' : ''} />
        ))}
      </div>
      <p className="testimonial-text">"{testimonial.text}"</p>
      <div className="testimonial-author">
        <div className="author-avatar">
          <img src={testimonial.avatar || 'https://via.placeholder.com/60'} alt={testimonial.name} />
        </div>
        <div className="author-info">
          <h5>{testimonial.name}</h5>
          <p>{testimonial.position}</p>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;

