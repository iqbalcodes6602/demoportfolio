import React from 'react'
import Navbar from '../componenets/Navbar'
import MyEducation from '../componenets/MyEducation'
import MyExp from '../componenets/MyExp'
import MyProjects from '../componenets/MyProjects'
import Sidebar from '../componenets/Sidebar'
import "./Resume.css"

function Resume() {
  const isDark = localStorage.getItem('dark');
  const addLight = (isDark === "true") ? "" : "-light";

  return (
    <div className={`resume${addLight}`} >
      <div className={`navContainer${addLight}`}><Navbar /></div>
      <div className={`sideContainer${addLight}`}><Sidebar /></div>
      <div className={`main-content-resume${addLight}`} >
        <div className={`main-top-resume${addLight}`} >
          <h1>
            resume
          </h1>
        </div>
        <hr />
        <div className={`main-body-resume${addLight}`} >
          <b><span style={{ color: addLight?"black":"white" }} > <center>My Education</center></span></b>
          <MyEducation />
          <br />
          <b><span style={{ color: addLight?"black":"white" }} >
          <center>My Projects</center></span></b>
          <MyProjects />
        </div>
      </div>
    </div>
  )
}

export default Resume