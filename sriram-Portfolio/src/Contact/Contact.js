import React from 'react';
import './Contact.css';
import { ContactUs } from '../ContactForm/ContactForm';
function Contact() {
    return (
        <div className="contact-container">
        <section className="contact section" id="ContactMe">
            <h1 className="section__title">Contact</h1>
            <div className="contact__container container grid">
                <div>
                    <div className="contact__information">
                        <a href="https://github.com/sriramalavalapati3" target="_blank" rel="noopener noreferrer" className='contacts'>
                            <i className="uil uil-github contact__icon"></i>
                            <h3 className="contact__title">Github</h3>
                        </a>
                    </div>

                    <div className="contact__information">
                        <a href="https://www.linkedin.com/in/sriram-alavalapati-a78489245/" target="_blank" rel="noopener noreferrer" className='contacts'>
                            <i className="uil uil-linkedin contact__icon"></i>
                            <h3 className="contact__title">Linkedin</h3>
                        </a>
                    </div>

                    <div className="contact__information">
                        <a href="mailto:sriramalavalapatiit01@gmail.com" className='contacts'>
                            <i className="uil uil-envelope-alt contact__icon"></i>
                            <h3 className="contact__title">sriramalavalapatiit01@gmail.com</h3>   
                        </a>
                    </div>
                    <div className="contact__information">
                        <a href="mailto:sriramalavalapatiit01@gmail.com" className='contacts'>
                        <i class='bx bxs-phone-call contact__icon' ></i>
                            <h3 className="contact__title">+917013417056</h3>
                        </a>
                       
                    </div>

                    <div className="contact__information">
                        <a href="https://www.instagram.com/sriram_alavalapati/" target="_blank" rel="noopener noreferrer" className='contacts'>
                            <i className="uil uil-instagram contact__icon"></i>
                            <h3 className="contact__title">Instagram</h3>
                        </a>
                    </div>

                    <div className="contact__information" style={{display:'flex',flexDirection:'column',}}>
                        <div className='contacts' style={{marginRight:'200px'}}>
                        <i className="uil uil-map-marker contact__icon"></i>
                        <h3 className="contact__title">Location</h3>
                        </div>
                        <div>
                            <span className="contact__subtitle">Tenali , ANDHRA PRADESH</span>
                        </div>
                    </div>
                </div>
                <ContactUs/>
            </div>
        </section>
        </div>
    );
}

export default Contact;
