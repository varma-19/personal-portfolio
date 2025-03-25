import React from 'react';
import '../styles/about.css';

const About = () => {
  return (
    <section className="about-section container-fluid">
      <h2>About Me</h2>
      <div className="about-content">
        <div className="about-text">
          <p>
            I'm a passionate developer with expertise in React, JavaScript, and modern
            web technologies. I love creating beautiful, functional websites and applications.
          </p>
          <p>
            When I'm not coding, you can find me hiking, reading, or exploring new coffee shops.
          </p>
          <h3>My Skills</h3>
          <ul className="skills-list">
            <li>React</li>
            <li>JavaScript</li>
            <li>HTML/CSS</li>
            <li>Node.js</li>
            <li>UI/UX Design</li>
          </ul>
        </div>
        <div className="about-image">
          <img src="../images/about.jpg" alt="About" />
        </div>
      </div>
    </section>
  );
};

export default About;