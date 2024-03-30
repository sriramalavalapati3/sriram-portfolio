import React from 'react';
import './Home.css';
import ProfilePic from '../ProfilePic.png';
import resume from '../images/Alavalapati_Deva_SriRam_Resume.pdf'

const Home = () => {
    const handleDownload = () => {
        // Replace 'resume.pdf' with the actual file name of your resume
        const resumeUrl = resume; // Specify the path to your resume file
    
        // Create a temporary link element
        const link = document.createElement('a');
        link.href = resumeUrl;
        link.download = 'Alavalapati_Deva_Sriram_Resume.pdf'; // Specify the default file name for download
    
        // Append the link to the document body and trigger the download
        document.body.appendChild(link);
        link.click();
    
        // Cleanup: remove the temporary link element
        document.body.removeChild(link);
      };
    return(
        <>
        <div className='Home' id='Home'>
            <div className='container'>
                <div className='Info'>
                <div className='Box-For-Icons'>
                <a href='https://github.com/sriramalavalapati3' target="_blank" rel="noopener noreferrer"><i class='bx bxl-github' style={{color:'rgb(108, 238, 108)'}}></i></a>
<a href='https://www.linkedin.com/in/sriram-alavalapati-a78489245/' target="_blank" rel="noopener noreferrer"><i class='bx bxl-linkedin-square' style={{color:'rgb(108, 238, 108)'}}></i></a>
<a href='https://www.instagram.com/sriram_alavalapati/' target="_blank" rel="noopener noreferrer"><i class='bx bxl-instagram-alt'style={{color:'rgb(108, 238, 108)'}} ></i></a>

             </div>
             <div className='ProfilePic'>
             <svg className="home__blob" viewBox="0 0 200 187" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <clipPath id="blob-mask">
            <path d="M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 165.547 
                      130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403 129.362C2.45775 
                      97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028 -0.149132 97.9666 
                      0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z" />
          </clipPath>
        </defs>
        <path fill="var(--first-color)" d="M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 
                  165.547 130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403 
                  129.362C2.45775 97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028 
                  -0.149132 97.9666 0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z" />
                  <image className="home__blob-img" href={ProfilePic} clipPath="url(#blob-mask)" />
      </svg>
             </div>
                </div>
             <div className='BioData'>
                <h1>Hi,i'm Sriram</h1>
                <h3>Full stack web developer</h3>
             <p>Passionate about building with Node.js for backend and React.js for frontend, adept in Socket.IO and WebRTC for creating real-time applications. Proficient in Jest, Chai, and Mocha for testing, with experience in Docker for containerization. Eager to learn and innovate!</p>
                </div>
            </div>
            <div><button className='resumeButton' onClick={handleDownload}><i class='bx bx-cloud-download'>Resume</i></button></div>
        </div>
        </>
    )
}

export default Home