import React from 'react';
import '../styles/home.css';

const Home = () => {
  return (
    <section className="home-section">
      <div className="home-content">
        <h1>Hi, I'm BOMMIDI MANIKANTA VARMA</h1>
        <p>Frontend Developer | UI/UX Designer</p>
        <div className="home-buttons">
          <button className="btn-primary">View My Work</button>
          <button className="btn-secondary">Contact Me</button>
        </div>
      </div>
      <div className="home-image">
        <img src="../images/image recent.jpeg" alt="Profile" />
      </div>
    </section>
  );
};

export default Home;