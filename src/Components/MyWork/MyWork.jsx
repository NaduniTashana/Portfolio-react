// import React from 'react'
// import './MyWork.css'
// import theme_pattern from '../../assets/theme_pattern.svg'
// import mywork_data from '../../assets/mywork_data'
// import arrow_icon from '../../assets/arrow_icon.svg'

// const MyWork = () => {
//   return (
//     <div  id='projects'className='mywork'>
//         <div className="mywork-title">
//             <h1>My Projects</h1>
//             <img src={theme_pattern} alt="" />
//         </div>
//         <div className="mywork-container">
//             {mywork_data.map((work,index)=>{
//                 return <img key={index} src={work.w_img} alt=""  />
//             })}

//         </div>
//         <div className="mywork-showmore">
//             <p>Show more</p>
//             <img src={arrow_icon} alt="" />
//         </div>
//     </div>
//   )
// }

// export default MyWork

import React,{useEffect} from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

import './MyWork.css';
import theme_pattern from '../../assets/theme_pattern.svg';
import mywork_data from '../../assets/mywork_data';
import arrow_icon from '../../assets/arrow_icon.svg';

const MyWork = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <div id='projects' className='mywork' data-aos="fade-up">
      <div className="mywork-title">
        <h1>My Projects</h1>
        <img src={theme_pattern} alt="Theme Pattern" />
      </div>
      <div className="mywork-container" data-aos="fade-up">
        {mywork_data.map((work, index) => (
          <div key={index} className="mywork-item" data-aos="fade-up">
            <img src={work.w_img} alt={work.w_title} />
            <div className="overlay">
              <h3>{work.w_title}</h3>
              <p>{work.w_description}</p>
              <a href={work.w_github} target="_blank" rel="noopener noreferrer">View on GitHub</a>
            </div>
          </div>
        ))}
      </div>
      <div className="mywork-showmore">
      <p>Show more</p>
        <a href="https://github.com/NaduniTashana?tab=repositories" target="_blank" rel="noopener noreferrer">
       
        <img src={arrow_icon} alt="Arrow Icon" />
        </a>
      </div>
    </div>
  );
}

export default MyWork;



