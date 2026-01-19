import { Link } from 'react-router-dom';
import { FaTrash, FaPlus, FaMinus } from 'react-icons/fa';
import './Cart.css';

const Cart = () => {
  const cartItems = [
    {
      id: 1,
      name: 'Professional Wrench Set',
      price: 49.99,
      quantity: 2,
      image: 'src/assets/images/ProfessionalWrenchSet.jpg'
    },
    {
      id: 2,
      name: 'Pipe Wrench',
      price: 29.99,
      quantity: 1,
      image: 'src/assets/images/Pipewrench.jpg'
    }
  ];

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const tax = subtotal * 0.1;
  const total = subtotal + tax;

  return (
    <div className="cart-page">
      <section className="page-header">
        <div className="container">
          <h1>Shopping Cart</h1>
          <p>Review your items</p>
        </div>
      </section>

      <section className="cart-content">
        <div className="container">
          {cartItems.length > 0 ? (
            <div className="row">
              <div className="col-lg-8">
                <div className="cart-items">
                  {cartItems.map(item => (
                    <div key={item.id} className="cart-item">
                      <div className="cart-item-image">
                        <img src={item.image} alt={item.name} />
                      </div>
                      <div className="cart-item-details">
                        <h4>{item.name}</h4>
                        <p className="cart-item-price">${item.price}</p>
                      </div>
                      <div className="cart-item-quantity">
                        <button className="quantity-btn"><FaMinus /></button>
                        <span>{item.quantity}</span>
                        <button className="quantity-btn"><FaPlus /></button>
                      </div>
                      <div className="cart-item-total">
                        <strong>${(item.price * item.quantity).toFixed(2)}</strong>
                      </div>
                      <button className="cart-item-remove">
                        <FaTrash />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
              <div className="col-lg-4">
                <div className="cart-summary">
                  <h3>Order Summary</h3>
                  <div className="summary-row">
                    <span>Subtotal</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="summary-row">
                    <span>Tax</span>
                    <span>${tax.toFixed(2)}</span>
                  </div>
                  <div className="summary-row total">
                    <span>Total</span>
                    <span>${total.toFixed(2)}</span>
                  </div>
                  <Link to="/checkout" className="btn btn-primary w-100 mt-4">
                    Proceed to Checkout
                  </Link>
                  <Link to="/shop" className="btn btn-outline-primary w-100 mt-2">
                    Continue Shopping
                  </Link>
                </div>
              </div>
            </div>
          ) : (
            <div className="empty-cart text-center">
              <h2>Your cart is empty</h2>
              <p>Add some items to your cart to continue</p>
              <Link to="/shop" className="btn btn-primary">Shop Now</Link>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Cart;

