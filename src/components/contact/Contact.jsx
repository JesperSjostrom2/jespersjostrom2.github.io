import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './contact.css'
import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

const Contact = () => {
  useEffect(()=> {
    AOS.init({duration: 1000});
  }, []);

  const emailJsServiceId = process.env.REACT_APP_EMAILJS_SERVICE_ID;
  const emailJsTemplateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
  const emailJsUserId = process.env.REACT_APP_EMAILJS_USER_ID;

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(emailJsServiceId, emailJsTemplateId, form.current, emailJsUserId)
      .then((result) => {
          console.log(result.text);
          console.log("message sent");
          e.target.reset();
      }, (error) => {
          console.log(error.text);
      });
  };

  <form ref={form} onSubmit={sendEmail}>
      <input type="text" name="user_name" />
      <input type="email" name="user_email" />
      <input type="text" name="user_subject" />
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form>

  return (
    <section className="contact "id="contact">
    <div className="contact-container">
      <div className="contact-content">
        <h1 className="contact-header" data-aos="fade-up"> What's <span>next?</span></h1>
        <h1 className="contact-me"data-aos="fade-up" data-aos-delay="200"> Contact <span>Me!</span> </h1>
        <p className="short-info" data-aos="fade-up" data-aos-delay="300"> Thank you for visiting my portfolio. I would love to hear from you! If you have any inquiries, collaboration opportunities, or simply want to say hello, please feel free to reach out to me using the contact form below. I'll make sure to respond as soon as possible. Let's connect and explore new possibilities together!</p>

        <form ref={form} data-aos="fade-up" data-aos-delay="700" onSubmit={sendEmail}>
          <div className="input-box">
          <input className="name-input" type="text" name="user_name" placeholder="Full Name" required></input>
          <input className="email-input" type="email" name="user_email" placeholder="Email" required></input>
          </div>
          <div className="input-box2">
          <input className="type-input" type="subject" name="user_subject" placeholder="Subject" required></input>
          </div>
          <textarea className="textarea-input" cols="30" rows="10" name="Message" placeholder="Message" required></textarea>
          <div className="buttonsubmit">
          <button className="btn-contactform" type="submit" value="Send"> Submit </button>
          </div>
          </form>
        </div>
    </div>
    </section>
  )
}

export default Contact