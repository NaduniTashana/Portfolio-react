
import React, { useState, useEffect, useRef } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import './Services.css';
import theme_pattern from '../../assets/theme_pattern.svg';

const Services = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const [openCategory, setOpenCategory] = useState(null);

  const handleToggle = (category) => {
    if (openCategory === category) {
      setOpenCategory(null);
    } else {
      setOpenCategory(category);
    }
  };

  const getCategoryHeight = (ref) => {
    return ref.current ? ref.current.scrollHeight : 0;
  };

  const programmingRef = useRef(null);
  const frameworksRef = useRef(null);
  const databasesRef = useRef(null);
  const cloudRef = useRef(null);
  const webTechRef = useRef(null);

  return (
    <div id='skills' className='services' data-aos="fade-up">
      <div className="services-title">
        <h1>Skills</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="services-section" data-aos="fade-right">
        <div className="category" >
          <h2 onClick={() => handleToggle('programmingLanguages')}>Programming Languages</h2>
          <div
            className="skills-list"
            ref={programmingRef}
            style={{
              height: openCategory === 'programmingLanguages' ? getCategoryHeight(programmingRef) : 0,
              overflow: 'hidden',
              transition: 'height 0.3s ease'
            }}
          >
            <div className="skill">Python</div>
            <div className="skill">Java</div>
            <div className="skill">JavaScript</div>
            <div className="skill">C</div>
            <div className="skill">R</div>
            <div className="skill">PHP</div>
          </div>
        </div>
        <div className="category">
          <h2 onClick={() => handleToggle('frameworks')}>Frameworks and Libraries</h2>
          <div
            className="skills-list"
            ref={frameworksRef}
            style={{
              height: openCategory === 'frameworks' ? getCategoryHeight(frameworksRef) : 0,
              overflow: 'hidden',
              transition: 'height 0.3s ease'
            }}
          >
            <div className="skill">React js</div>
            <div className="skill">Node js</div>
            <div className="skill">TypeScript</div>
            <div className="skill">Pandas</div>
            <div className="skill">Express</div>
            <div className="skill">Springboot</div>
            <div className="skill">Angular</div>
          </div>
        </div>
        <div className="category" >
          <h2 onClick={() => handleToggle('databases')}>Databases</h2>
          <div
            className="skills-list"
            ref={databasesRef}
            style={{
              height: openCategory === 'databases' ? getCategoryHeight(databasesRef) : 0,
              overflow: 'hidden',
              transition: 'height 0.3s ease'
            }}
          >
            <div className="skill">MYSql</div>
            <div className="skill">MongoDB</div>
            <div className="skill">Postgresql</div>
          </div>
        </div>
        <div className="category" >
          <h2 onClick={() => handleToggle('cloudPlatforms')}>Cloud Platforms</h2>
          <div
            className="skills-list"
            ref={cloudRef}
            style={{
              height: openCategory === 'cloudPlatforms' ? getCategoryHeight(cloudRef) : 0,
              overflow: 'hidden',
              transition: 'height 0.3s ease'
            }}
          >
            <div className="skill">AWS</div>
          </div>
        </div>
        <div className="category" >
          <h2 onClick={() => handleToggle('webTechnologies')}>Web Technologies and Tools</h2>
          <div
            className="skills-list"
            ref={webTechRef}
            style={{
              height: openCategory === 'webTechnologies' ? getCategoryHeight(webTechRef) : 0,
              overflow: 'hidden',
              transition: 'height 0.3s ease'
            }}
          >
            <div className="skill">HTML & CSS</div>
            <div className="skill">Git</div>
            <div className="skill">power bi</div>
            <div className="skill">Figma</div>
            <div className="skill">Postman</div>
            <div className="skill">Selenium</div>
            <div className="skill">Jupiter</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;

