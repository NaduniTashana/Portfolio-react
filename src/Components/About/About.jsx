import React,{useEffect} from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profle_img from '../../assets/propic.jpg'


const About = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 });
      }, []);
  return (
    <div id='about' className='about' data-aos="fade-up">
        <div className="about-title">
            <h1>About me</h1>
            <img src={theme_pattern} alt="" />
        </div>
        <div className="about-section">
            <div className="about-left">
                <img src={profle_img} alt="" />
            </div>
            <div className="about-right">
                <div className="about-para">
                <p>Hello! I'm Naduni Tashana, a third-year undergraduate student at the University of Kelaniya, specializing in Software Engineering. I live in Colombo and have a keen interest in the dynamic field of software engineering, with a particular passion for web development, data science, and machine learning. I am also enthusiastic about Python development and constantly seek opportunities to enhance my skills and knowledge in these areas.</p>
                <p>In addition to my technical expertise, I possess strong soft skills that include effective communication, teamwork, and problem-solving abilities. I excel at collaborating with diverse teams and thrive in fast-paced environments. I am adept at utilizing various programming languages and tools to create innovative solutions and am always eager to learn and adapt to new technologies.</p>
                </div>
            
            </div>
        </div>
    
    
    </div>
    

    
    
    
  )
}

export default About