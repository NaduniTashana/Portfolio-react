import React,{useEffect} from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

import './Contact.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import mail_icon from '../../assets/mail_icon.svg'
import location_icon from '../../assets/location_icon.svg'
import call_icon from '../../assets/call_icon.svg'
import in_icon from '../../assets/linkedin.svg'
import git_icon from '../../assets/github (1).svg'

const Contact = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
    
        formData.append("access_key", "440b88c9-5e0c-405f-be7c-2d69495f2ad4");
    
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
    
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: json
        }).then((res) => res.json());
    
        if (res.success) {
          alert(res.message)
        }
      };
  return (
    <div id='contact' className='contact' data-aos="fade-up">
        <div className="contact-title">
            <h1>Get In Touch</h1>
            <img src={theme_pattern} alt=""  />
        </div>
        <div className="contact-section">
            <div className="contact-left">
                <h1>Lets Talk</h1>
                <p>Feel free to get in touch with me for any collaborations or opportunities in software engineering.I look forward to connecting with you!</p>
                <div className="contact-details">
                    <div className="contact-detail">
                        <img src={mail_icon} alt="" /><p>nadutash0@gmail.com</p>

                    </div>
                    <div className="contact-detail">
                    <img src={call_icon} alt="" /><p>+94768599056</p>
                        
                    </div>
                    <div className="contact-detail">
                    <img src={location_icon} alt="" /><p>63/8, Dambagena Road, Maharagama</p>
                        
                    </div>
                    <div className="contact-detail">
                    <img src={in_icon} alt="" /><a href="https://www.linkedin.com/in/naduni-tashana-7364b1266" target="_blank">LinkedIn</a>
                        
                    </div>
                    <div className="contact-detail">
                    <img src={git_icon} alt="" /><a href="https://github.com/NaduniTashana" target="_blank">GitHub</a>
                        
                    </div>
                </div>
            </div>
            <form  onSubmit={onSubmit}className='contact-right'>
                <label htmlFor="">Your Name</label>
                <input type="text" placeholder='enter your name' name='name'/>
                <label htmlFor="">Your Email</label>
                <input type="email" placeholder='enter your email' name='email' />
                <label htmlFor="">Write Your message here</label>
                <textarea name="message" rows="8" placeholder='enter your message'></textarea>
                <button  type='submit' className='contact-submit'>Submit now</button>

            </form>
        </div>
    </div>
  )
}

export default Contact