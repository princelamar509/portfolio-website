import React, { useState, useEffect } from 'react';
import './Skills.css';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaSass, FaBootstrap, FaGit } from 'react-icons/fa';
import ScrollTrigger from './ScrollTrigger';

const Skills = () => {
  const [hoveredSkill, setHoveredSkill] = useState(null);
  const [hoverCount, setHoverCount] = useState(0);

  const skills = [
    { name: 'HTML', color: 'bar-html', icon: <FaHtml5 />, percentage: '90%' },
    { name: 'CSS', color: 'bar-css', icon: <FaCss3Alt />, percentage: '85%' },
    { name: 'JavaScript', color: 'bar-js', icon: <FaJs />, percentage: '80%' },
    { name: 'React', color: 'bar-react', icon: <FaReact />, percentage: '75%' },
    { name: 'Node.js', color: 'bar-node', icon: <FaNodeJs />, percentage: '70%' },
    { name: 'SASS', color: 'bar-sass', icon: <FaSass />, percentage: '65%' },
    { name: 'Bootstrap', color: 'bar-bootstrap', icon: <FaBootstrap />, percentage: '60%' },
    { name: 'Git', color: 'bar-git', icon: <FaGit size="1.5em" />, percentage: '85%' },
  ];

  useEffect(() => {
    if (hoverCount >= 3) {
      const skillsList = document.querySelector('.skills-list');
      skillsList.classList.add('animate-path');
    }
  }, [hoverCount]);

  const handleMouseEnter = (index) => {
    setHoveredSkill(index);
    setHoverCount(hoverCount + 1);
  };

  const handleMouseLeave = () => {
    setHoveredSkill(null);
  };

  return (
    <section id="skills" className="skills-section">
      <ScrollTrigger>
        <div className="skills-container">
          <div className="skills-header">
            <h2>My Skills</h2>
          </div>

          <div className="skills-list">
            {skills.map((skill, index) => (
              <div
                className={`skill-item ${hoveredSkill === index ? 'hovered' : ''}`}
                key={index}
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
              >
                <div className="skill-content">
                  <div className="skill-icon">{skill.icon}</div>
                  <div className="skill-name">{skill.name}</div>
                  <div className={`bar ${skill.color}`}>
                    <div
                      className={`skill-level ${hoveredSkill === index ? 'hovered' : ''}`}
                      style={{ width: skill.percentage }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </ScrollTrigger>
    </section>
  );
};

export default Skills;
