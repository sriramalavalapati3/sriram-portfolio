import React from 'react';
import './Project.css';
import kfcImage from '../images/kfc.png';
import overStock from '../images/furniture-stock.png';
import weConnect from '../images/we-connect.png';
import typoTales from '../images/typotales.png';
import adminPanel from '../images/adminpannel.png';
import Youtube from '../images/youtube-admin.png'

const Projects = () => {
    return(
        <div id='projects'>
        <h1 style={{textAlign:'center'}}>Projects</h1>
        <div className='Projects'>
        <div class="card">
  <img class="card-img" src={kfcImage} alt="blog" />
  <div class="card-content">
    <h1 class="card-title">STEAK HOUSE</h1>
    <p class="card-text">
    STEAK HOUSE is replica of KFC website which delivers wide range of non-veg items
    </p>
    <p class="tech">Tech-Stack - <b>HTML | CSS | JavaScript</b></p>
    <p class="tech">Features - <b>Registration | login | ADD to cart | Logout</b></p>
    <br />
    <div class="card-links">
      <a class="btn" href='https://lucky-melba-e32a66.netlify.app/' target="_blank" rel="noopener noreferrer"><i class='bx bxl-netlify'></i>Visit Site</a>
      <a class="btn" href='https://github.com/sriramalavalapati3/Kfc-clone' target="_blank" rel="noopener noreferrer"><i class='bx bxl-github'></i>View Code</a>
    </div>
  </div>
        </div>
        <div class="card">
  <img class="card-img" src={overStock} alt="blog" />
  <div class="card-content">
    <h1 class="card-title">Furniture-Stock</h1>
    <p class="card-text">
    Ecommerce website for furniture products , It serves as a virtual storefront where customers can browse, select, and purchase items conveniently from their computers or mobile devices.
    </p>
    <p class="tech">Tech-Stack - <b>HTML | CSS | JavaScript | Node.js Basic server</b></p>
    <p class="tech">Area of Responsibility - <b>Resposible for creating backend json server | Database Managment | Resposible for Admin Pannel | crud operations</b></p>
    <br />
    <div class="card-links">
      <a class="btn" href='https://sensational-druid-3f736c.netlify.app/' target="_blank" rel="noopener noreferrer"><i class='bx bxl-netlify'></i>Visit Site</a>
      <a class="btn" href='https://github.com/sriramalavalapati3/Furniture-Stock' target="_blank" rel="noopener noreferrer"><i class='bx bxl-github'></i>View Code</a>
    </div>
  </div>
        </div>
        <div class="card">
  <img class="card-img" src={weConnect} alt="blog" />
  <div class="card-content">
    <h1 class="card-title">WE-CONNECT</h1>
    <p class="card-text">
    We connect allows teams to organize their communication and work in a central location, making it easier to stay connected and collaborate effectively.
    </p>
    <p class="tech">Tech-Stack - <b>HTML | CSS | JavaScript | Socket.io | Node.js | Redis | Mongoose | Nodemailer | Express</b></p>
    <p class="tech">Area of Responsibility - <b>Resposible for creating user server | Database Managment | Resposible for Email-otp-verification | Authentication | Resposible for creating front-end for signup ,login ,otp verification</b></p>
    <br />
    <div class="card-links">
      
      <a class="btn" href='https://singular-axolotl-96063b.netlify.app/' target="_blank" rel="noopener noreferrer"><i class='bx bxl-netlify'></i>Visit Site</a>
      <a class="btn" href='https://github.com/sriramalavalapati3/cumbersome-things-27' target="_blank" rel="noopener noreferrer"><i class='bx bxl-github'></i>View Code</a>
    </div>
  </div>
        </div>
        <div class="card">
  <img class="card-img" src={typoTales} alt="blog" />
  <div class="card-content">
    <h1 class="card-title">TYPO-TALES</h1>
    <p class="card-text">
    Typotales is a replica of typer racer website ,where you can sharpen your typing skills and you can play with your friends
    </p>
    <p class="tech">Tech-Stack - <b>HTML | CSS | JavaScript | Nodejs | MongoDB | Socket.io | Redis | Express</b></p>
    <p class="tech">Area of Responsibility -<b>Resposible for creating Rooms | Responsible server-side logic Building | Resposible for Organising Team | Responsible for carrying responses from events to particular Room</b></p>
    <br />
    <div class="card-links">
      <a class="btn" href='https://66064fe0bd20169a3178b948--cheery-mermaid-3f169a.netlify.app/' target="_blank" rel="noopener noreferrer"><i class='bx bxl-netlify'></i>Visit Site</a>
      <a class="btn" href='https://github.com/sriramalavalapati3/Typo-Tales' target="_blank" rel="noopener noreferrer"><i class='bx bxl-github'></i>View Code</a>
    </div>
  </div>
        </div>
        <div class="card">
  <img class="card-img" src={adminPanel} alt="blog" />
  <div class="card-content">
    <h1 class="card-title">Admin Panel</h1>
    <p class="card-text">
    This is Admin Pannel for Ecommerce-website
    </p>
    <p class="tech">Tech-Stack - <b>HTML | CSS | JavaScript</b></p>
    <p class="tech">Area of Responsibility -<b>Resposible for Dashboard,customer,Add products,Products Pages,Dark mode enabled</b></p>
    <br />
    <div class="card-links">
      <a class="btn" href='https://6479a11feee9a000c057c512--jade-cocada-a57bd0.netlify.app/' target="_blank" rel="noopener noreferrer"><i class='bx bxl-netlify'></i>Visit Site</a>
      <a class="btn" href='https://github.com/sriramalavalapati3/Admin-Panel/tree/main' target="_blank" rel="noopener noreferrer"><i class='bx bxl-github'></i>View Code</a>
    </div>
  </div>
        </div>
        <div class="card">
  <img class="card-img" src={Youtube} alt="blog" />
  <div class="card-content">
    <h1 class="card-title">Youtube-admin</h1>
    <p class="card-text">
   Bcube is admin pannel of youtube , where we can implement add , delete , editing of video details,using jwt token,
   implemented backend testing using chai,mocha
    </p>
    <p class="tech">Tech-Stack - <b>HTML | CSS | JavaScript | ReactJs | Nodejs | Express | ReduxJs | MongoDB | Docker | Chai | mocha </b></p>
    <p class="tech">Features - <b>login | upload,Delete,Edit Youtube embeded Videos| Jwt Token | Logout | Black-Listing | </b></p>
    <br />
    <div class="card-links">
      <a class="btn" href='https://bcube-peach.vercel.app/' target="_blank" rel="noopener noreferrer"><i class='bx bxl-netlify'></i>Visit Site</a>
      <a class="btn" href='https://github.com/sriramalavalapati3/Youtube-admin' target="_blank" rel="noopener noreferrer"><i class='bx bxl-github'></i>View Code</a>
    </div>
  </div>
        </div>
        </div>
        

        </div>
    )
}
export default Projects