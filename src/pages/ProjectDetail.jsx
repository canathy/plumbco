import { useParams, Link } from 'react-router-dom';
import { FaCalendar, FaUser, FaTag } from 'react-icons/fa';
import './ProjectDetail.css';

const ProjectDetail = () => {
  const { id } = useParams();

  const project = {
    id: 1,
    title: 'Modern Bathroom Remodel',
    category: 'Bathroom Remodeling',
    date: 'January 15, 2024',
    client: 'John & Sarah Smith',
    image: 'https://via.placeholder.com/800x500',
    description: 'Complete bathroom renovation including new fixtures, plumbing, and modern design elements.',
    details: [
      'Complete plumbing system replacement',
      'New modern fixtures installation',
      'Tile and flooring updates',
      'Lighting and electrical work',
      'Custom vanity installation'
    ],
    gallery: [
      'https://via.placeholder.com/400x300',
      'https://via.placeholder.com/400x300',
      'https://via.placeholder.com/400x300',
      'https://via.placeholder.com/400x300'
    ]
  };

  return (
    <div className="project-detail-page">
      <section className="page-header">
        <div className="container">
          <h1>{project.title}</h1>
          <p>{project.category}</p>
        </div>
      </section>

      <section className="project-detail-content">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="project-image mb-4">
                <img src={project.image} alt={project.title} />
              </div>
              <div className="project-info mb-4">
                <div className="info-item">
                  <FaCalendar />
                  <span><strong>Date:</strong> {project.date}</span>
                </div>
                <div className="info-item">
                  <FaUser />
                  <span><strong>Client:</strong> {project.client}</span>
                </div>
                <div className="info-item">
                  <FaTag />
                  <span><strong>Category:</strong> {project.category}</span>
                </div>
              </div>
              <div className="project-description">
                <h2>Project Description</h2>
                <p>{project.description}</p>
                <p>This comprehensive bathroom remodel transformed a dated space into a modern, functional bathroom. We worked closely with the homeowners to create a design that met their needs while staying within budget.</p>
              </div>
              <div className="project-details mt-5">
                <h2>Project Details</h2>
                <ul>
                  {project.details.map((detail, index) => (
                    <li key={index}>{detail}</li>
                  ))}
                </ul>
              </div>
              <div className="project-gallery mt-5">
                <h2>Project Gallery</h2>
                <div className="row">
                  {project.gallery.map((image, index) => (
                    <div key={index} className="col-md-6 mb-3">
                      <img src={image} alt={`Gallery ${index + 1}`} className="gallery-image" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="project-sidebar">
                <div className="sidebar-card">
                  <h3>Project Info</h3>
                  <div className="sidebar-info">
                    <p><strong>Category:</strong> {project.category}</p>
                    <p><strong>Date:</strong> {project.date}</p>
                    <p><strong>Client:</strong> {project.client}</p>
                  </div>
                  <Link to="/contact" className="btn btn-primary w-100 mt-3">
                    Start Your Project
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

export default ProjectDetail;

