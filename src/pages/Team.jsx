import { FaFacebook, FaTwitter, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import './Team.css';

const Team = () => {
  const teamMembers = [
    {
      id: 1,
      name: 'John Smith',
      position: 'Lead Plumber',
      image: 'https://via.placeholder.com/300x300',
      bio: '15+ years of experience in residential and commercial plumbing.',
      email: 'john@plumbco.com'
    },
    {
      id: 2,
      name: 'Sarah Johnson',
      position: 'Senior Technician',
      image: 'https://via.placeholder.com/300x300',
      bio: 'Specializes in water heater installation and repair.',
      email: 'sarah@plumbco.com'
    },
    {
      id: 3,
      name: 'Mike Davis',
      position: 'Master Plumber',
      image: 'https://via.placeholder.com/300x300',
      bio: 'Expert in commercial plumbing and large-scale projects.',
      email: 'mike@plumbco.com'
    },
    {
      id: 4,
      name: 'Emily Wilson',
      position: 'Plumbing Specialist',
      image: 'https://via.placeholder.com/300x300',
      bio: 'Focused on drain cleaning and sewer line services.',
      email: 'emily@plumbco.com'
    }
  ];

  return (
    <div className="team-page">
      <section className="page-header">
        <div className="container">
          <h1>Our Team</h1>
          <p>Meet our expert plumbers</p>
        </div>
      </section>

      <section className="team-content">
        <div className="container">
          <div className="row">
            {teamMembers.map(member => (
              <div key={member.id} className="col-lg-3 col-md-6 mb-4">
                <div className="team-card">
                  <div className="team-image">
                    <img src={member.image} alt={member.name} />
                    <div className="team-overlay">
                      <div className="team-social">
                        <a href="#"><FaFacebook /></a>
                        <a href="#"><FaTwitter /></a>
                        <a href="#"><FaLinkedin /></a>
                        <a href={`mailto:${member.email}`}><FaEnvelope /></a>
                      </div>
                    </div>
                  </div>
                  <div className="team-info">
                    <h4>{member.name}</h4>
                    <p className="team-position">{member.position}</p>
                    <p className="team-bio">{member.bio}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Team;

