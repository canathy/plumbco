import { useParams, Link } from 'react-router-dom';
import { FaShoppingCart, FaStar, FaCheck } from 'react-icons/fa';
import './ProductDetail.css';

const ProductDetail = () => {
  const { id } = useParams();

  const product = {
    id: 1,
    name: 'Professional Wrench Set',
    price: 49.99,
    originalPrice: 69.99,
    image: 'src/assets/images/products/ProfessionalWrenchSet.jpg',
    rating: 5,
    category: 'Tools',
    description: 'High-quality professional wrench set perfect for all your plumbing needs. Made from durable materials and designed to last.',
    features: [
      'Made from high-grade steel',
      'Comfortable grip handles',
      'Multiple sizes included',
      'Lifetime warranty',
      'Professional grade quality'
    ],
    inStock: true
  };

  return (
    <div className="product-detail-page">
      <section className="product-detail-content">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="product-image-large">
                <img src={product.image} alt={product.name} />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="product-info">
                <span className="product-category">{product.category}</span>
                <h1>{product.name}</h1>
                <div className="product-rating mb-3">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className={i < product.rating ? 'filled' : ''} />
                  ))}
                  <span className="rating-text">({product.rating} reviews)</span>
                </div>
                <div className="product-price mb-4">
                  <span className="current-price">${product.price}</span>
                  {product.originalPrice && (
                    <span className="original-price">${product.originalPrice}</span>
                  )}
                </div>
                <p className="product-description">{product.description}</p>
                <div className="product-features mb-4">
                  <h3>Features</h3>
                  <ul>
                    {product.features.map((feature, index) => (
                      <li key={index}>
                        <FaCheck /> {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="product-actions">
                  <div className="quantity-selector mb-3">
                    <label>Quantity:</label>
                    <input type="number" min="1" defaultValue="1" className="form-control" style={{width: '100px', display: 'inline-block'}} />
                  </div>
                  <button className="btn btn-primary btn-lg w-100 mb-3">
                    <FaShoppingCart /> Add to Cart
                  </button>
                  <Link to="/contact" className="btn btn-outline-primary w-100">
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductDetail;

