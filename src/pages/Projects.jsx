import ProjectCard from '../components/ProjectCard/ProjectCard';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'Modern Bathroom Remodel',
      category: 'Bathroom Remodeling',
      image: 'src/assets/images/ModernBathroomRemodel.jpg'
    },
    {
      id: 2,
      title: 'Commercial Plumbing Installation',
      category: 'Commercial',
      image: 'https://plumco-react.wpocean.com/static/media/3.15ae66135ec4b273c803.jpg'
    },
    {
      id: 3,
      title: 'Kitchen Plumbing Upgrade',
      category: 'Kitchen',
      image: 'https://plumco-react.wpocean.com/static/media/2.92a41f8101c312056b0e.jpg'
    },
    {
      id: 4,
      title: 'Water Heater Replacement',
      category: 'Water Heater',
      image: 'src/assets/images/waterheater.jpg'
    },
    {
      id: 5,
      title: 'Sewer Line Replacement',
      category: 'Sewer Line',
      image: 'src/assets/images/sewerline.jpg'
    },
    {
      id: 6,
      title: 'Complete Home Plumbing',
      category: 'Residential',
      image: 'src/assets/images/completeplumbing.jpg'
    }
  ];

  return (
    <div className="projects-page">
      <section className="page-header">
        <div className="container">
          <h1>Our Projects</h1>
          <p>See our recent work and completed projects</p>
        </div>
      </section>

      <section className="projects-grid">
        <div className="container">
          <div className="row">
            {projects.map(project => (
              <div key={project.id} className="col-lg-4 col-md-6 mb-4">
                <ProjectCard project={project} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;

