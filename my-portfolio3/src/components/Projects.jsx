import React, { useState } from 'react';
import ScrollTrigger from './ScrollTrigger';
import './Projects.css';


const Projects = () => {

  const allProjects = [

  
    {
      title: 'Money Transfer',
      description: 'This is a Money Transfer Project. It showcases my skills in React etc...',
      link: 'https://princelamar509.github.io/MoneyTransfer1/', 
      category: 'React'
    },
    {
      title: 'Music App',
      description: 'This  is a Music App Project. It showcases my skills in React/SASS...',
      link: 'https://princelamar509.github.io/music-app/' ,
      category: 'React/SASS'
    },
    {
      title: 'Advanced Dice Game',
      description: 'This is a Dice Game Project. It showcases my skills in JavaScript etc...',
      link: 'https://princelamar509.github.io/DiceGame1/' ,
      category: 'JavaScript'
    },
    {
      
      title: 'Invoice App',
      description: 'This is a Invoice App Project. It showcases my skills in React native etc...',
      link: 'https://princelamar509.github.io/invoice-app1/',
      category: 'React'
    },
    {
      title: 'Crypto Portfolio Tracker App',
      description: 'This is a Crypto Portfolio Tracker App Project. It showcases my skills in JavaScript etc...',
      link: 'https://princelamar509.github.io/crypto-app/' ,
      category: 'JavaScript'
    }

  
    // Add more projects as needed
  ];

  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredProjects = selectedCategory === 'All'
    ? allProjects
    : allProjects.filter(project => project.category === selectedCategory);

  const categories = ['All', 'React', 'JavaScript', 'React/SASS'];

  return (
    <section id="projects" className="projects-section">
      <ScrollTrigger>
      <div className="projects">
        <h2>My Projects</h2>
        <div className="filter-container">
          {categories.map((category, index) => (
            <button
              key={index}
              className={`filter-button ${selectedCategory === category ? 'active' : ''}`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
        <div className="project-list">
          {filteredProjects.map((project, index) => (
            <div className="project-card" key={index}>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
                View Project
              </a>
            </div>
          ))}
        </div>
      </div>
      </ScrollTrigger>
    </section>
  );
};

export default Projects;

