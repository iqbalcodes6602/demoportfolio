import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NotFound from './componenets/NotFound';
import './App.css';
import Home from './pages/Home';
import AboutMe from './pages/AboutMe';
import Resume from './pages/Resume';
import GetInTouch from './pages/GetInTouch';
import MyWorks from './pages/MyWork';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';

function App() {
    const isDark = localStorage.getItem('dark');
    const addLight = (isDark === "true") ? "" : "-light";

    const [toggleIcon, setToggleIcon] = useState(true);

    const handleToggle = () => {
        setToggleIcon(!toggleIcon);
        localStorage.setItem('dark', JSON.stringify(toggleIcon));
    }
    const state = localStorage.getItem('dark');
    return (
        <>
            <div className={`themeToggler${addLight}`} onClick={handleToggle} >
                <FontAwesomeIcon
                    icon={JSON.parse(state) ?
                        faSun : faMoon} />
            </div>
            <BrowserRouter>
                <Routes>
                    <Route exact path='/' element={<Home />} />
                    <Route exact path='/about' element={<AboutMe />} />
                    <Route exact path='/resume' element={<Resume />} />
                    <Route exact path='/works' element={<MyWorks />} />
                    <Route exact path='/contact' element={<GetInTouch />} />
                    <Route exact path='*' element={<NotFound />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;