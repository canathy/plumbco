import { Link } from 'react-router-dom';
import './ProjectCard.css';

const ProjectCard = ({ project }) => {
  return (
    <div className="project-card">
      <div className="project-image">
        <img src={project.image || 'src/assets/images/plumber.jpg'} alt={project.title} />
        <div className="project-overlay">
          <Link to={`/projects/${project.id}`} className="project-link">
            View Details
          </Link>
        </div>
      </div>
      <div className="project-content">
        <h4>{project.title}</h4>
        <p>{project.category}</p>
      </div>
    </div>
  );
};

export default ProjectCard;

