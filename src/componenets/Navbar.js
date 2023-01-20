import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import "./Navbar.css"
import { faBars, faMoon, faMultiply, faSun } from '@fortawesome/free-solid-svg-icons'
import Sidebar from './Sidebar';
import logoImg from '../img/logo-light.png'

function Navbar() {

    const isDark = localStorage.getItem('dark');
    const addLight = (isDark === "true") ? "" : "-light";

    const [toggleIcon, setToggleIcon] = useState(true);

    const handleToggle = () => {
        setToggleIcon(!toggleIcon);
        localStorage.setItem('dark', JSON.stringify(toggleIcon));
    }
    const [side, setSide] = useState(false);
    const showSide = () => {
        setSide(!side);
    }

    const state = localStorage.getItem('dark');
    return (
        <div>



            <div style={{ marginLeft: side ? "30%" : "0px", width: side ? "70%" : "100%" }} className={`navbar${addLight}`}>

                <div onClick={showSide} className={`navbar-left${addLight}`} >
                    <FontAwesomeIcon icon={side ? faMultiply : faBars} />
                </div>


                <div className={`navbar-middle${addLight}`}>
                    <img className='nav-logo' src={logoImg} alt="logo" />
                </div>


            </div>

            <div
                style={{ display: side ? "block" : "none" }} className={`toggleSidebar${addLight}`}>
                <Sidebar />
            </div>
        </div>
    )
}

export default Navbar