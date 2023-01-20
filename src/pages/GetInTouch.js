import React, { useRef, useState } from 'react'
import Navbar from '../componenets/Navbar'
import Sidebar from '../componenets/Sidebar'
import mapImg from '../img/map.jfif'
import "./GetInTouch.css"
import emailjs from '@emailjs/browser';

function GetInTouch() {
  const isDark = localStorage.getItem('dark');
  const addLight = (isDark === "true") ? "" : "-light";

  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_do9zgds', 'template_e5jhlks', form.current, 'dF4J0brR81hi-kHRG')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
    e.target.reset();
  };

  return (
    <div className={`contact${addLight}`} >
      <div className={`navContainer${addLight}`}><Navbar /></div>
      <div className={`sideContainer${addLight}`}><Sidebar /></div>
      <div className={`main-content-contact${addLight}`} >
        <div className={`main-top-contact${addLight}`} >
          <h1>
            get in touch
          </h1>
        </div>
        <hr />
        <div className={`main-body-contact${addLight}`} >
          <div className={`section1${addLight}`} >
            Send me a message
            <form ref={form} onSubmit={sendEmail} >
              <input
                className={`typebox${addLight}`}
                type="text"
                name="user_name"
                placeholder='Your Name'
              />
              <input
                className={`typebox${addLight}`}
                type="email"
                name="user_email"
                placeholder='Your Email'
              />
              <br />
              <input
                className={`typebox${addLight}`}
                type="text"
                name="subject"
                placeholder='Subject'
              />
              <br />
              <textarea
                style={{ resize: "vertical", minHeight: "100px" }}
                className={`typebox${addLight}`}
                type="text"
                name='message'
                placeholder='Message...'
              /><br />
              <button type='submit' className={`submitContact${addLight}`}>Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default GetInTouch