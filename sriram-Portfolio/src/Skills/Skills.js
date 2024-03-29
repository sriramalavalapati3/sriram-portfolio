import React from 'react';
import './Skills.css';
import express from '../images/expressLogo.png'
import redis from '../images/redis2.png'

const Skills = () =>{
    return(
    
<div id='skills'>
  <h1 style={{textAlign:'center'}}>Skills</h1>
     <div className='skillsContainer' >
            <div className='frontedContainer'>
                <h2 style={{textAlign:'center'}}><i class='bx bx-code-alt'></i>Front-End</h2>
            <div className='frontendSkills'>
          <div className='Skills'>
          <i class='bx bxl-html5'>Html</i>
          <span style={{fontSize:'10px'}}>Advanced</span>
          <div className='percentageBar'>
          <div className='percentageLine' style={{ width: `${90}%`, backgroundColor: 'rgb(108, 238, 108)', height: '5px',zIndex:'500' }}></div>
          </div>
          </div>
          <div className='Skills'>
          <i class='bx bxl-css3'>Css</i>
          <span style={{fontSize:'10px'}}>Intermediate</span>
          <div className='percentageBar'>
          <div className='percentageLine' style={{ width: `${75}%`, backgroundColor: 'rgb(108, 238, 108)', height: '5px',zIndex:'500' }}></div>
          </div>
          </div>
          <div className='Skills'>
          <i class='bx bxl-javascript'>JavaScript</i>
          <span style={{fontSize:'10px'}}>Advanced</span>
          <div className='percentageBar'>
          <div className='percentageLine' style={{ width: `${90}%`, backgroundColor: 'rgb(108, 238, 108)', height: '5px',zIndex:'500' }}></div>
          </div>
          </div>
          <div className='Skills'>
          <i class='bx bxl-react'>React.JS</i>
          <span style={{fontSize:'10px'}}>Intermediate</span>
          <div className='percentageBar'>
          <div className='percentageLine' style={{ width: `${75}%`, backgroundColor: 'rgb(108, 238, 108)', height: '5px',zIndex:'500' }}></div>
          </div>
          </div>
          <div className='Skills'>
          <i class='bx bxl-redux'>Redux.JS</i>
          <span style={{fontSize:'10px'}}>Intermediate</span>
          <div className='percentageBar'>
          <div className='percentageLine' style={{ width: `${80}%`, backgroundColor: 'rgb(108, 238, 108)', height: '5px',zIndex:'500' }}></div>
          </div>
          </div>
          <div className='Skills'>
          <i class='bx bxl-typescript'>TypeScript</i>
          <span style={{fontSize:'10px'}}>Intermediate</span>
          <div className='percentageBar'>
          <div className='percentageLine' style={{ width: `${60}%`, backgroundColor: 'rgb(108, 238, 108)', height: '5px',zIndex:'500' }}></div>
          </div>
          </div>
          <div className='Skills'>
          <i class='bx bx-code-block'>Frontend-Testing,Jest</i>
          <span style={{fontSize:'10px'}}>Intermediate</span>
          <div className='percentageBar'>
          <div className='percentageLine' style={{ width: `${75}%`, backgroundColor: 'rgb(108, 238, 108)', height: '5px',zIndex:'500' }}></div>
          </div>
          </div>
        </div>
            </div>
            <div className='backendContainer'>
                <h2 style={{textAlign:'center'}}><i class='bx bx-code-alt'></i>Backend-End</h2>
            <div className='frontendSkills'>
          <div className='Skills'>
          <i class='bx bxl-nodejs'>Node.JS</i>
          <span style={{fontSize:'10px'}}>Advanced</span>
          <div className='percentageBar'>
          <div className='percentageLine' style={{ width: `${80}%`, backgroundColor: 'rgb(108, 238, 108)', height: '5px',zIndex:'500' }}></div>
          </div>
          </div>
          <div className='Skills' style={{margin:'0',padding:'0'}}>
            <div style={{display:'flex',alignItems:'center'}}>
            <img src={express} style={{width:'6.25%'}} alt='express'/>
            express.Js
            </div>
          <span style={{fontSize:'10px'}}>Intermediate</span>
          <div className='percentageBar'>
          <div className='percentageLine' style={{ width: `${75}%`, backgroundColor: 'rgb(108, 238, 108)', height: '5px',zIndex:'500' }}></div>
          </div>
          </div>
          <div className='Skills' style={{margin:'0',padding:'0'}}>
            <div style={{display:'flex',alignItems:'center'}}>
            <img src={redis} style={{width:'6.25%'}} alt='express'/>
            Redis
            </div>
          <span style={{fontSize:'10px'}}>Intermediate</span>
          <div className='percentageBar'>
          <div className='percentageLine' style={{ width: `${75}%`, backgroundColor: 'rgb(108, 238, 108)', height: '5px',zIndex:'500' }}></div>
          </div>
          </div>
         
          <div className='Skills'>
          <i class='bx bxl-docker'>Docker</i>
          <span style={{fontSize:'10px'}}>Intermediate</span>
          <div className='percentageBar'>
          <div className='percentageLine' style={{ width: `${55}%`, backgroundColor: 'rgb(108, 238, 108)', height: '5px',zIndex:'500' }}></div>
          </div>
          </div>
          <div className='Skills'>
          <i class='bx bxl-mongodb'>MongoDB</i>
          <span style={{fontSize:'10px'}}>Advanced</span>
          <div className='percentageBar'>
          <div className='percentageLine' style={{ width: `${85}%`, backgroundColor: 'rgb(108, 238, 108)', height: '5px',zIndex:'500' }}></div>
          </div>
          </div>
          <div className='Skills'>
          <i class='bx bxl-postgresql'>MySql</i>
          <span style={{fontSize:'10px'}}>Advanced</span>
          <div className='percentageBar'>
          <div className='percentageLine' style={{ width: `${75}%`, backgroundColor: 'rgb(108, 238, 108)', height: '5px',zIndex:'500' }}></div>
          </div>
          </div>
          <div className='Skills'>
          <i class='bx bxl-aws'>AWS</i>
          <span style={{fontSize:'10px'}}>Basic</span>
          <div className='percentageBar'>
          <div className='percentageLine' style={{ width: `${50}%`, backgroundColor: 'rgb(108, 238, 108)', height: '5px',zIndex:'500' }}></div>
          </div>
          </div>
          <div className='Skills'>
          <i class='bx bx-code-curly'>Rest-Api's,Oauth,JWT</i>
          <span style={{fontSize:'10px'}}>Advanced</span>
          <div className='percentageBar'>
          <div className='percentageLine' style={{ width: `${75}%`, backgroundColor: 'rgb(108, 238, 108)', height: '5px',zIndex:'500' }}></div>
          </div>
          </div>
          <div className='Skills'>
          <i class='bx bx-code-block'>API-Testing,chai,Mocha,PostMan</i>
          <span style={{fontSize:'10px'}}>Advanced</span>
          <div className='percentageBar'>
          <div className='percentageLine' style={{ width: `${75}%`, backgroundColor: 'rgb(108, 238, 108)', height: '5px',zIndex:'500' }}></div>
          </div>
          </div>
        </div>
            </div>
        </div>
   
    </div>

    
       
    )
}
export default Skills