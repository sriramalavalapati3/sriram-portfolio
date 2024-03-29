import React,{useState} from 'react';
import './Qualification.css'; // Don't forget to import your CSS file

const Qualification = () => {
  const [graduation,nongraduation] = useState(true)
  const tgogleJourney = () =>{
nongraduation(true)
  }
  const toggleQualification = () =>{
    nongraduation(false)
  }
  return (
    <>
    <h2 style={{textAlign:'center'}}>My Journey</h2>
    <div className="qualification_container">
      {/* tabs */}
      <div className="qualification__tabs">
        <div className={`qualification__button button--flex ${graduation ? 'active' : ''}`} onClick={tgogleJourney}>
       
        <span id='journey'>
        <i class='bx bx-laptop'></i>
        <strong>Journey</strong>
        </span>
         
        </div>

        <div className={`qualification__button button--flex qualification__active ${!graduation ? 'click': ''}`} onClick={toggleQualification}>
        <span id='graduation'>
        <i class='bx bxs-graduation'></i>
        <strong>Graduation</strong>
        </span>
        </div>
      </div>
      {
        graduation ?  <div className="qualification__sections">
        {/* QUALIFICATION WORK CONTENT */}
        <div className="qualification__content" data-content="" id="work">

         <div className='Data'>
            <div className='content'>
            <h2 className='heading'>Full Stack Developer Intern</h2>
            <h3 className='subHeading'><i class='bx bxs-building' ></i>Myanatomy Integration</h3>
            <div>
            <i class='bx bx-calendar' style={{fontSize:'20px'}}></i>
            <span className='calender'style={{fontSize:'20px'}}>July 2023 - Feb 2024</span>
            </div>
            
            </div>
            <div>
            <span className='circle'></span>
            <span className='line'></span>
          </div>
          <div></div>
          </div>
          <div className='Data'>
          <div></div>
          <div>
            <span className='circle'></span>
            <span className='line'></span>
          </div>
            <div>
            <h2 className='heading'>Full Stack Developer Trainee</h2>
            <h3 className='subHeading'><i class='bx bxs-building' ></i>Masai</h3>
            <div>
            <i class='bx bx-calendar' style={{fontSize:'20px'}}></i>
            <span className='calender'style={{fontSize:'20px'}}>July 2022 - May 2023</span>
            </div>
            
            </div>
          </div>


         </div>

        </div> :
 <div className="qualification__content qualification__active" data-content="" id="education">
   <div className='Data'>
            <div className='content'>
            <h2 className='heading'>Full Stack Developement</h2>
            <h3 className='subHeading'><i class='bx bxs-building' ></i>Masai</h3>
            <div>
            <i class='bx bx-calendar' style={{fontSize:'20px'}}></i>
            <span className='calender'style={{fontSize:'20px'}}>July 2022 - May 2023</span>
            </div>
            </div>
            <div>
            <span className='circle'></span>
            <span className='line'></span>
          </div>
          <div></div>
          </div>
          <div className='Data'>
          <div></div>
          <div>
            <span className='circle'></span>
            <span className='line'></span>
          </div>
            <div>
            <h2 className='heading'>B.Tech (Mechanical Engineering)</h2>
            <h3 className='subHeading'><i class='bx bxs-building' ></i>Vasireddy Venkatadri Institute of Technology</h3>
            <div>
            <i class='bx bx-calendar' style={{fontSize:'20px'}}></i>
            <span className='calender'style={{fontSize:'20px'}}>July 2017 - July 2021</span>
            </div>
            
            </div>
          </div>
          <div className='Data'>
            <div className='content'>
            <h2 className='heading'>Higher Secondary Education</h2>
            <h3 className='subHeading'><i class='bx bxs-building' ></i>Narayana Junior College</h3>
            <div>
            <i class='bx bx-calendar' style={{fontSize:'20px'}}></i>
            <span className='calender'style={{fontSize:'20px'}}>July 2015 - May 2017</span>
            </div>
            
            </div>
            <div>
            <span className='circle'></span>
            <span className='line'></span>
          </div>
          <div></div>
          </div> 
          <div className='Data'>
          <div></div>
          <div>
            <span className='circle'></span>
            <span className='line'></span>
          </div>
            <div>
            <h2 className='heading'>Secondary Education</h2>
            <h3 className='subHeading'><i class='bx bxs-building' ></i>Nehru Niketan E.M School</h3>
            <div>
            <i class='bx bx-calendar' style={{fontSize:'20px'}}></i>
            <span className='calender'style={{fontSize:'20px'}}>July 2014 - April 2015</span>
            </div>
            
            </div>
          </div>
</div>
      }
       
      </div>
    </>
    
  );
};

export default Qualification;
