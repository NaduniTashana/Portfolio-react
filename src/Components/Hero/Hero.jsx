import React,{useEffect} from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

import './Hero.css'
import profile_img from '../../assets/propic2.jpg'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Hero = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <div id='home' className='hero' data-aos="fade-up">
      <img src={profile_img} alt="" data-aos="fade-right"/>
      <h1><span>I'm Naduni Tashana,</span></h1>
      <p>Passionate and driven student exploring the realms of data science and software engineering</p>
      <div className="hero-action" data-aos="fade-up">
        <div className="hero-connect"><AnchorLink  className='anchor-link' offset={50} href='#contact'><p onClick = {()=>setMenu("contact")}></p>Connect with me</AnchorLink></div>
        <a href="https://drive.google.com/uc?export=download&id=1O8QOGQXbwlkh7YLBjcfIEc9IAvSpzG1h" download="NaduniTashana_CV.pdf">My Resume</a>
      </div>


    </div>
  )
}

export default Hero