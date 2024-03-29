import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Snackbar from '@mui/material/Snackbar';

export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    console.log(form.current,'123')
    emailjs
      .sendForm('service_v4yc6sq', 'template_tagua6n', form.current, {
        publicKey: 'dXhCrbfkhUYNLPxmg',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          <Snackbar
          anchorOrigin={{vertical: 'bottom', horizontal: 'left' }}
          //onClose={handleClose}
          autoHideDuration={5000}
          message="Message Sent Successfully"
          />
          if (form.current) {
            form.current.reset();
          }
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
       <div className="contact__inputs grid">
                        <div className="contact__content">
                            <label className="contact__label">Name</label>
                            <input type="text" className="contact__input" name="user_name" />
                        </div>

                        <div className="contact__content">
                            <label className="contact__label">Email</label>
                            <input type="email" className="contact__input" name="from_name"/>
                        </div>
                    </div>
                    <div className="contact__content">
                        <label className="contact__label" >Write Your Message ....</label>
                        <textarea id="" cols="0" rows="7" className="contact__input" name="message"></textarea>
                    </div>

                    <div>
                        <button type='submit' value="Send" className='button button--flex'>Send Message <i class="uil uil-comment-alt button__icon"></i></button>
                    </div>
    </form>
  );
};