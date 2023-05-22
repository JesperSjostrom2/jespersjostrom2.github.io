import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './contact.css'

const Contact = () => {

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
    <section class="contact "id="contact">
    <div className="contact-container">
      <div className="contact-content">
        <h1 className="contact-header"> What's <span>next?</span></h1>
        <h1 className="contact-me"> Contact Me </h1>
        <p className="short-info"> I'm interested in freelance opportunities - especially abomitious or large projects. However, if you have other request or question, don't hesitate to use the form.</p>

        <form ref={form} onSubmit={sendEmail}>
          <div className="input-box">
          <input className="name-input" type="text" name="user_name" placeholder="Full Name" required></input>
          <input className="email-input" type="email" name="user_email" placeholder="Email" required></input>
          </div>

          <div className="input-box">
          <input className="type-input" type="subject" name="user_subject" placeholder="Subject" required></input>
          <input className="type-input" type="subject" name="user_number" placeholder="Number" required></input>
          </div>
          <textarea className="textarea-input" name="Message" placeholder="Message" required></textarea>

          <button className="btn-contactform" type="submit" value="Send"> Submit </button>
          </form>
        </div>
    </div>
    </section>
  )
}

export default Contact