import { faBriefcase, faFileWord } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import Navbar from '../componenets/Navbar'
import Sidebar from '../componenets/Sidebar'
import "./Home.css"


function Home() {
  const isDark = localStorage.getItem('dark');
  const addLight = (isDark === "true") ? "" : "-light";



  var TxtType = function (el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
  };

  TxtType.prototype.tick = function () {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
      this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
      this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';

    var that = this;
    var delta = 200 - Math.random() * 100;

    if (this.isDeleting) { delta /= 2; }

    if (!this.isDeleting && this.txt === fullTxt) {
      delta = this.period;
      this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
      this.isDeleting = false;
      this.loopNum++;
      delta = 500;
    }

    setTimeout(function () {
      that.tick();
    }, delta);
  };

  window.onload = function () {
    var elements = document.getElementsByClassName('typewrite');
    for (var i = 0; i < elements.length; i++) {
      var toRotate = elements[i].getAttribute('data-type');
      var period = elements[i].getAttribute('data-period');
      if (toRotate) {
        new TxtType(elements[i], JSON.parse(toRotate), period);
      }
    }
    // INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";

    css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
    document.body.appendChild(css);

  };



  return (
    <div className={`home${addLight}`} >
      <div className={`navContainer${addLight}`}><Navbar /></div>
      <div className={`sideContainer${addLight}`}><Sidebar /></div>
      <div
        className={`main-content${addLight}`} >
        <div className={`main-top${addLight}`} >Welcome</div>
        <div className='main-body' >
          <b>
            I'm a&nbsp;
            <span className={`tag-home${addLight}`} >
              <a class="typewrite" data-period="2000"
                data-type='[ "developer", "designer", "photographer", "student" ]'>
                <span class="wrap"></span>
              </a>
            </span>
          </b>
        </div>
        <div className={`main-top${addLight}`} >at <span className={`tag-home${addLight}`}>NIT</span> Rourkela</div>
        <button className={`btn-hire${addLight}`} ><FontAwesomeIcon icon={faFileWord} /> <b>Download CV</b></button>
      </div>
    </div >
  )
}

export default Home