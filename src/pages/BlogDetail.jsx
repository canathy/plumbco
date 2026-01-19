import { useParams, Link } from 'react-router-dom';
import { FaCalendar, FaUser, FaTag, FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';
import './BlogDetail.css';

const BlogDetail = () => {
  const { id } = useParams();

  const blogPost = {
    id: 1,
    title: 'How to Prevent Common Plumbing Problems',
    date: 'January 15, 2024',
    author: 'John Smith',
    category: 'Tips & Tricks',
    image: 'src/assets/images/prevent.jpg',
    content: `
      <p>Plumbing problems can be costly and inconvenient. However, many common issues can be prevented with proper maintenance and care. In this comprehensive guide, we'll share expert tips to help you avoid the most common plumbing problems.</p>
      
      <h3>Regular Maintenance is Key</h3>
      <p>One of the best ways to prevent plumbing problems is through regular maintenance. Schedule annual inspections with a professional plumber to catch issues before they become major problems.</p>
      
      <h3>Watch What Goes Down the Drain</h3>
      <p>Be mindful of what you put down your drains. Avoid pouring grease, oil, or food scraps down the kitchen sink. Use drain screens to catch hair and debris in bathroom drains.</p>
      
      <h3>Check for Leaks Regularly</h3>
      <p>Small leaks can lead to big problems if left unchecked. Regularly inspect your pipes, faucets, and water heater for any signs of leaks or moisture.</p>
      
      <h3>Protect Your Pipes in Winter</h3>
      <p>Frozen pipes can cause significant damage. Insulate exposed pipes and keep your home heated during cold weather to prevent freezing.</p>
    `
  };

  return (
    <div className="blog-detail-page">
      <section className="blog-detail-content">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <article className="blog-post">
                <div className="blog-header">
                  <span className="blog-category">{blogPost.category}</span>
                  <h1>{blogPost.title}</h1>
                  <div className="blog-meta">
                    <span><FaCalendar /> {blogPost.date}</span>
                    <span><FaUser /> {blogPost.author}</span>
                    <span><FaTag /> {blogPost.category}</span>
                  </div>
                </div>
                <div className="blog-image">
                  <img src={blogPost.image} alt={blogPost.title} />
                </div>
                <div className="blog-content" dangerouslySetInnerHTML={{ __html: blogPost.content }} />
                <div className="blog-share">
                  <h4>Share this post:</h4>
                  <div className="share-buttons">
                    <a href="#" className="share-btn facebook"><FaFacebook /> Facebook</a>
                    <a href="#" className="share-btn twitter"><FaTwitter /> Twitter</a>
                    <a href="#" className="share-btn linkedin"><FaLinkedin /> LinkedIn</a>
                  </div>
                </div>
              </article>
            </div>
            <div className="col-lg-4">
              <div className="blog-sidebar">
                <div className="sidebar-widget">
                  <h3>Recent Posts</h3>
                  <ul className="recent-posts">
                    <li><Link to="/blog">When to Replace Your Water Heater</Link></li>
                    <li><Link to="/blog">Winter Plumbing Maintenance Guide</Link></li>
                    <li><Link to="/blog">Benefits of Professional Drain Cleaning</Link></li>
                  </ul>
                </div>
                <div className="sidebar-widget">
                  <h3>Categories</h3>
                  <ul className="categories">
                    <li><Link to="/blog">Tips & Tricks</Link></li>
                    <li><Link to="/blog">Maintenance</Link></li>
                    <li><Link to="/blog">Services</Link></li>
                    <li><Link to="/blog">Seasonal</Link></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogDetail;

