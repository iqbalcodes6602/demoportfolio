import { faFileWord } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import Navbar from '../componenets/Navbar'
import Sidebar from '../componenets/Sidebar'
import "./AboutMe.css"

function AboutMe() {
  const isDark = localStorage.getItem('dark');
  const addLight = (isDark === "true") ? "" : "-light";


  return (
    <div className={`aboutme${addLight}`} >
      <div className={`navContainer${addLight}`}><Navbar /></div>
      <div className={`sideContainer${addLight}`}><Sidebar /></div>
      <div className={`main-content-about${addLight}`} >
        <div className={`main-top-about${addLight}`} >
          <h1>
            about me
          </h1>
        </div>
        <hr className='hr-about' />
        <div className='main-body-about' >
          I am a web developer, designer and student at NIT Rourkela, currently learning full stack web development. My technical skills include proficiency in ReactJS, ExpressJS, MongoDB, NodeJS, and Java. I am also well-versed in UI/UX design principles.
          <br />
          I am constantly seeking new challenges and opportunities to improve my skills and deliver innovative solutions to clients. My goal is to become a well-rounded developer who can create beautiful and functional websites that meet the needs of users.
        </div>
        <div className={`page-btn${addLight}`}>
          <button className={`d-button${addLight}`}>
            REACT JS
          </button>
          <button className={`d-button${addLight}`}>
            EXPRESS JS
          </button><button className={`d-button${addLight}`}>
            UI/UX
          </button>
          <button className={`d-button${addLight}`}>
            MONGO DB
          </button>
          <button className={`d-button${addLight}`}>
            JAVA
          </button>
          <button className={`d-button${addLight}`}>
            HTML/CSS
          </button>
          <button className={`d-button${addLight}`}>
            NODE JS
          </button>
          <button className={`d-button${addLight}`}>
            MERN
          </button>
          <button className={`d-button${addLight}`}>
            FIGMA
          </button><button className={`d-button${addLight}`}>
            PHOTOSHOP
          </button>
        </div>

      </div>
    </div>
  )
}

export default AboutMe