import { faCamera, faGlobe, faPenNib } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react'
import DesignImg from '../componenets/MyWorkComponents/DesignImg';
import PhotoImg from '../componenets/MyWorkComponents/PhotoImg';
import WebImg from '../componenets/MyWorkComponents/WebImg';
import Navbar from '../componenets/Navbar'
import Sidebar from '../componenets/Sidebar'
import "./MyWork.css"

function MyWorks() {
  const isDark = localStorage.getItem('dark');
  const addLight = (isDark === "true") ? "" : "-light";


  const [showDesign, setShowDesign] = useState(false);
  const handleDesign = () => {
    setShowDesign(!showDesign);
    setShowWeb(false);
    setShowPhoto(false);
  }
  const [showWeb, setShowWeb] = useState(false);
  const handleWeb = () => {
    setShowWeb(!showWeb);
    setShowDesign(false);
    setShowPhoto(false);
  }
  const [showPhoto, setShowPhoto] = useState(false);
  const handlePhoto = () => {
    setShowPhoto(!showPhoto);
    setShowWeb(false);
    setShowDesign(false);
  }
  return (
    <div className={`works${addLight}`} >
    <div className={`navContainer${addLight}`}><Navbar /></div>
    <div className={`sideContainer${addLight}`}><Sidebar /></div> 
      <div className={`main-content-works${addLight}`} >
        <div className={`main-top-works${addLight}`} >
          <h1>
            my work
          </h1>
        </div>
        <hr />
        <div className={`main-body-works${addLight}`} >
          <button className={`work-btn-changer${addLight}-${showDesign?"active":"inactive"}`} onClick={handleDesign} ><FontAwesomeIcon icon={faPenNib} /> Design</button>
          <button className={`work-btn-changer${addLight}-${showWeb?"active":"inactive"}`} onClick={handleWeb} ><FontAwesomeIcon icon={faGlobe} /> Webdev</button>
          <button className={`work-btn-changer${addLight}-${showPhoto?"active":"inactive"}`} onClick={handlePhoto} ><FontAwesomeIcon icon={faCamera} /> Photography</button>
          <div style={
            { display: (showDesign === false && showPhoto === false && showWeb === false) ? "block" : "none" }
          } >
            <DesignImg />
            <WebImg />
            <PhotoImg />
          </div>
          <div style={
            { display: showDesign ? "block" : "none" }
          } ><DesignImg />
          </div>
          <div style={
            { display: showWeb ? "block" : "none" }
          } ><WebImg />
          </div>
          <div style={
            { display: showPhoto ? "block" : "none" }
          } ><PhotoImg />
          </div>
        </div>
      </div>
    </div>
  )
}

export default MyWorks