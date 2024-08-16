import React from 'react';
import './Intro.css';
import Github from '../../img/github.png';
import LinkedIn from '../../img/linkedin.png';
import Instagram from '../../img/instagram.png';
import Vector1 from '../../img/Vector1.png';
import Vector2 from '../../img/Vector2.png';
import Neel from '../../img/Neel.png';
import thumbup from '../../img/thumbup.png';
import Crown from '../../img/crown.png';
import glassesimoji from '../../img/glassesimoji.png';
import FloatingDiv from '../FloatingDiv/FloatingDiv';

const Intro = () => {
  return (
    <div className="intro">
      <div className="i-left">
        <div className="i-name">
          <span>Hy! I Am</span>
          <span>Neelanjana Singh</span>
          <span>
            Frontend Developer with a high level of experience in web designing and 
            development, producing quality work.
          </span>
        </div>
        <button className="button i-button">Hire me</button>
        <div className="i-icons">
          <a href="https://github.com/your-github-profile" target="_blank" rel="noopener noreferrer">
            <img src={Github} alt="GitHub" />
          </a>
          <a href="https://www.linkedin.com/in/your-linkedin-profile" target="_blank" rel="noopener noreferrer">
            <img src={LinkedIn} alt="LinkedIn" />
          </a>
          <a href="https://www.instagram.com/your-instagram-profile" target="_blank" rel="noopener noreferrer">
            <img src={Instagram} alt="Instagram" />
          </a>
        </div>
      </div>

      <div className="i-right">
        <img src={Vector1} alt="Vector1" className="vector1" />
        <img src={Vector2} alt="Vector2" className="vector2" />
        <img src={Neel} alt="Neel" className="Neel" />
        <img src={glassesimoji} alt="glassesimoji" className="glassesimoji" />
        <div style={{top: '-4%', left:'68%'}}>
          <FloatingDiv image={Crown} txt1='Web' txt2='Developer'/>
        </div>
        <div style={{top: '20rem', left:'0rem'}}>
          <FloatingDiv image={thumbup} txt1='Best Design' txt2='Award'/>
        </div>

        <div className='blur' style={{background:"rgb(238 210 255)"}}></div>
        <div className="blur" style={{background:'#C1F5FF', top:'17rem',width:'21rem' , height:'11rem'}}></div>
      </div>
    </div>
  );
};

export default Intro;
