import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './JohnKarayelPage.css';

const JohnKarayelPage = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const skills = [
    { name: 'JavaScript', level: 90, icon: '⚡' },
    { name: 'React', level: 85, icon: '⚛️' },
    { name: 'Node.js', level: 80, icon: '🟢' },
    { name: 'Python', level: 75, icon: '🐍' },
    { name: 'SQL', level: 70, icon: '🗄️' },
    { name: 'Git', level: 85, icon: '📚' }
  ];

  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce solution with React frontend and Node.js backend. Features include user authentication, payment processing, and inventory management.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe API']
    },
    {
      title: 'Task Management App',
      description: 'Collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.',
      technologies: ['React', 'Socket.io', 'Express', 'PostgreSQL']
    },
    {
      title: 'Data Visualization Dashboard',
      description: 'Interactive dashboard for analyzing business metrics with dynamic charts, filters, and export capabilities.',
      technologies: ['D3.js', 'Python', 'Flask', 'Pandas']
    }
  ];

  return (
    <div className="App">
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-logo">
            <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
              ← Back to Home
            </Link>
          </div>
        </div>
      </nav>
      
      <div className={`john-page ${isVisible ? 'visible' : ''}`}>
        {/* Hero Section */}
        <section className="john-hero">
          <div className="john-hero-content">
            <div className="john-hero-text">
              <h1>John Karayel</h1>
              <p className="john-title">Full-Stack Developer & Problem Solver</p>
              <p className="john-description">
                Passionate about creating innovative web solutions and building meaningful digital experiences. 
                I love turning complex problems into simple, beautiful, and intuitive solutions.
              </p>
            </div>
            <div className="john-hero-photo">
              <div className="john-photo-container">
                <img src="/john-photo.jpg" alt="John Karayel" className="john-photo" />
              </div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <div className="john-sections">
          {/* About Section */}
          <section className="john-section">
            <h2>About Me</h2>
            <p>
              I'm a dedicated full-stack developer with a passion for creating exceptional web experiences. 
              With expertise in modern JavaScript frameworks and a strong foundation in both frontend and backend development, 
              I enjoy tackling challenging problems and building scalable solutions.
            </p>
            <p>
              When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, 
              or enjoying a good cup of coffee while brainstorming the next big idea.
            </p>
          </section>

          {/* Skills Section */}
          <section className="john-section">
            <h2>Technical Skills</h2>
            <div className="john-skills-grid">
              {skills.map((skill, index) => (
                <div key={index} className="john-skill-item">
                  <span className="john-skill-icon">{skill.icon}</span>
                  <div className="john-skill-name">{skill.name}</div>
                  <div className="john-skill-level">
                    <div 
                      className="john-skill-progress" 
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                  <div style={{ marginTop: '0.5rem', fontSize: '0.9rem', opacity: 0.8 }}>
                    {skill.level}%
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Projects Section */}
          <section className="john-section">
            <h2>Featured Projects</h2>
            <div className="john-projects-grid">
              {projects.map((project, index) => (
                <div key={index} className="john-project-card">
                  <h3 className="john-project-title">{project.title}</h3>
                  <p className="john-project-description">{project.description}</p>
                  <div className="john-project-tech">
                    {project.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="john-tech-tag">{tech}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Contact Section */}
          <section className="john-section">
            <h2>Get In Touch</h2>
            <p style={{ textAlign: 'center', marginBottom: '2rem', fontSize: '1.1rem' }}>
              I'm always interested in new opportunities and exciting projects. Let's connect!
            </p>
            <div className="john-contact-info">
              <div className="john-contact-item">
                <span className="john-contact-icon">📧</span>
                <div className="john-contact-label">Email</div>
                <div className="john-contact-value">
                  <a href="mailto:john.karayel@example.com">john.karayel@example.com</a>
                </div>
              </div>
              <div className="john-contact-item">
                <span className="john-contact-icon">💼</span>
                <div className="john-contact-label">LinkedIn</div>
                <div className="john-contact-value">
                  <a href="https://linkedin.com/in/johnkarayel" target="_blank" rel="noopener noreferrer">
                    linkedin.com/in/johnkarayel
                  </a>
                </div>
              </div>
              <div className="john-contact-item">
                <span className="john-contact-icon">🐙</span>
                <div className="john-contact-label">GitHub</div>
                <div className="john-contact-value">
                  <a href="https://github.com/johnkarayel" target="_blank" rel="noopener noreferrer">
                    github.com/johnkarayel
                  </a>
                </div>
              </div>
              <div className="john-contact-item">
                <span className="john-contact-icon">🌍</span>
                <div className="john-contact-label">Location</div>
                <div className="john-contact-value">Boston, MA</div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default JohnKarayelPage;