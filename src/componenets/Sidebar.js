import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import "./Sidebar.css"
import SideBarImage from "../img/portrait.jpg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAddressBook, faFileWord, faHome, faPerson, faProjectDiagram, faUser } from '@fortawesome/free-solid-svg-icons';

function Sidebar() {
    const isDark = localStorage.getItem('dark');
    const addLight = (isDark === "true") ? "" : "-light";

    return (
        <>
            <div
                className={`sidebar${addLight}`}>
                <div
                    className={`sidebar-top${addLight}`} >
                    <img className={`image-side${addLight}`} src={SideBarImage} alt="image" />
                    Iqbal
                </div>
                <div
                    className={`sidebar-links${addLight}`} >
                    <ul>
                        <li>
                            <Link to="/" >

                                <button className={`side-btn${addLight}`} ><FontAwesomeIcon icon={faHome} /> Home</button> </Link>
                        </li>
                        <li>
                            <Link to="/about" >
                                <button className={`side-btn${addLight}`}><FontAwesomeIcon icon={faUser} /> About Me
                                </button></Link>
                        </li>
                        <li>
                            <Link to="/resume" >
                                <button className={`side-btn${addLight}`}><FontAwesomeIcon icon={faFileWord} /> Resume
                                </button></Link>
                        </li>
                        <li>
                            <Link to="/works" >
                                <button className={`side-btn${addLight}`}><FontAwesomeIcon icon={faProjectDiagram} /> My Works
                                </button></Link>
                        </li>
                        <li>
                            <Link to="/contact" >
                                <button className={`side-btn${addLight}`}><FontAwesomeIcon icon={faAddressBook} /> Get In Touch
                                </button></Link>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Sidebar