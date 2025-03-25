import React from 'react';
import ProjectCard from './ProjectCard';
import '../styles/projects.css';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'EstateKing Website ',
      description: 'EstateKing is a user-friendly real estate platform designed to streamline property management and listings. It offers intuitive tools for property owners, agents, and buyers to efficiently browse, list, and manage properties. With advanced search filters, interactive maps, and seamless communication features, EstateKing provides a comprehensive real estate experience.',
      technologies: ['React', 'Node.js', 'MongoDB'],
      imageUrl: '../images/project1.jpg',
      liveUrl: '#',
      codeUrl: '#'
    },
    {
      id: 2,
      title: 'LiveStock Website',
      description: 'Developed a comprehensive livestock management website designed to streamline farm operations. The platform offers user-friendly features for tracking animal health, managing inventory, monitoring farm activities, and generating reports. Implemented responsive design for seamless accessibility across devices, with secure user authentication and a clean, intuitive UI. Integrated database management for real-time data storage and retrieval. Ideal for farmers and agricultural businesses seeking efficient digital solutions.',
      technologies: ['React', 'Node.js', 'Material UI'],
      imageUrl: '../images/project2.jpeg',
      liveUrl: '#',
      codeUrl: '#'
    },
    // {
    //   id: 3,
    //   title: 'Weather Dashboard',
    //   description: 'Real-time weather information with 5-day forecast.',
    //   technologies: ['JavaScript', 'API Integration', 'CSS3'],
    //   imageUrl: 'https://via.placeholder.com/300',
    //   liveUrl: '#',
    //   codeUrl: '#'
    // }
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