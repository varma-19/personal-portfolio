import React from 'react';
import ProjectCard from './ProjectCard';
import '../styles/projects.css';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'E-commerce Website',
      description: 'A full-featured online store with cart functionality and payment processing.',
      technologies: ['React', 'Node.js', 'MongoDB'],
      imageUrl: 'https://via.placeholder.com/300',
      liveUrl: '#',
      codeUrl: '#'
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'A productivity app for organizing tasks with drag-and-drop functionality.',
      technologies: ['React', 'Firebase', 'Material UI'],
      imageUrl: 'https://via.placeholder.com/300',
      liveUrl: '#',
      codeUrl: '#'
    },
    {
      id: 3,
      title: 'Weather Dashboard',
      description: 'Real-time weather information with 5-day forecast.',
      technologies: ['JavaScript', 'API Integration', 'CSS3'],
      imageUrl: 'https://via.placeholder.com/300',
      liveUrl: '#',
      codeUrl: '#'
    }
  ];

  return (
    <section className="projects-section">
      <h2>My Projects</h2>
      <div className="projects-grid">
        {projects.map(project => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;