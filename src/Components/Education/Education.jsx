import React,{useState,useEffect} from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

import './Education.css'
import theme_pattern from '../../assets/theme_pattern.svg'

const Education = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 });
      }, []);

      const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  return (
    <div id='education' className='education' data-aos="fade-up">
        <div className="education-title">
            <h1>Education</h1>
            <img src={theme_pattern} alt="" />
        </div>
        <div className="education-section" data-aos="fade-right">
        <div className="about-educations">
        <div className="about-education">
            <h3>University Of Kelaniya</h3>
            <p>(2022-present)</p>
            <p>Bsc(hons) in Software Engineering</p>
            <p>current-GPA : 3.53</p>
        </div>
        <hr/>
        <hr/>
        <div className="about-education" data-aos="fade-right">
            <h3>Sirimavo Bandaranayake Vidyalaya</h3>
            <p>(2017-2019)</p>
            <p>GCE Advanced Level</p>
            <p>Combined-Maths: A</p>
            <p>Chemistry: A</p>
            <p>Physics: C</p>
            
        </div>
        <hr/>
        <hr/>
        <div className="about-education" data-aos="fade-right">
            <h3>Vidyakara Balika Vidyala</h3>
            <p>(2006-2016)</p>
            <p>GCE Ordinary Level</p>
            <p>9'A passes</p>
        </div>
        <hr/>
        <hr/>
        <div className="about-education" data-aos="fade-right">
            <h3 onClick={toggleDropdown} className="dropdown-header">
              Certifications and Courses {isDropdownOpen ? '▲' : '▼ View'}
            </h3>
            <div className={`courses-dropdown ${isDropdownOpen ? 'open' : ''}`}>
              <ul>
              <li>
              <span className="course-name">hackerank Python silver badge</span>
                  <a href="https://www.hackerrank.com/profile/wijeban_se20062" target="_blank" rel="noopener noreferrer" className="view-button">View</a>
                </li>
                <li>
                <span className="course-name">hackerank SQL gold badge </span>
                  <a href="https://www.hackerrank.com/profile/wijeban_se20062" target="_blank" rel="noopener noreferrer" className="view-button">View</a>
                </li>
                <li>
                <span className="course-name">hackerank java silver badge</span>
                  <a href="https://www.hackerrank.com/profile/wijeban_se20062" target="_blank" rel="noopener noreferrer" className="view-button">View</a>
                </li>
                <li>
                <span className="course-name">Coursera AWS Cloud technical essentials</span>
                  <a href="https://www.coursera.org/account/accomplishments/verify/E9VKAYRCTTHL" target="_blank" rel="noopener noreferrer" className="view-button">View</a>
                </li>
                <li>
                <span className="course-name">Coursera Get started with jira</span>
                  <a href="https://www.coursera.org/account/accomplishments/verify/8AXL3JQYW6AW" target="_blank" rel="noopener noreferrer" className="view-button">View</a>
                </li>
                <li>
                <span className="course-name">Coursera IBM What is Data Science</span>
                  <a href="https://www.coursera.org/account/accomplishments/verify/V4HZH7LQ3KD4" target="_blank" rel="noopener noreferrer" className="view-button">View</a>
                </li>
                <li>
                <span className="course-name">Coursera IBM Tools for data Science</span>
                  <a href="https://www.coursera.org/account/accomplishments/verify/MEH2EVDXU9UD" target="_blank" rel="noopener noreferrer" className="view-button">View</a>
                </li>
                <li>
                <span className="course-name">Google Foundations of UX design</span>
                  <a href="https://www.coursera.org/account/accomplishments/verify/9R4ENL9YX799" target="_blank" rel="noopener noreferrer" className="view-button">View</a>
                </li>
              </ul>
            </div>
          </div>
        

    </div>
        </div>
    </div>
  )
}

export default Education