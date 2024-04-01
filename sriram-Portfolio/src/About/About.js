import React from 'react';
import './About.css'
import gif from '../images/46207-programmer-1.gif'

const About = () => {
  return (
    <div>
<section title="ABOUT" id="about" class="about section">
        <title>About</title>
        <h1>ABOUT</h1>
        <div id="main1">
            <div class="child1-a">
                <img src={gif} alt=""/>
            </div>
            <div class="child2-a">

                <h3>Full Stack Web Developer</h3>
                <p id="user-detail-intro"> Enthusiastic about learning and expressing new technology. An aspiring node developer with knowledge of Express.js, JavaScript, Node.js, MySql, MongoDB, TypeScript,
                 and over 1 year of practical experience in coding and building numerous scalable websites. Solved 700+ DSA questions. Strong ambition to work as a backend developer to produce valuable solution
                </p>
                <div class="child3-a">

                    <div style={{color: 'white'}}><strong>1200+ Hours of Coding</strong></div>
                    <div style={{color: 'white'}}><strong>700+ DSA Problems</strong></div>
                    <div style={{color: 'white'}}><strong>15+ Completed Project</strong> </div>
                </div>
            </div>
        </div>
    </section>
    </div>
    
  );
};

export default About;
