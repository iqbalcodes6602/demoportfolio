import React from 'react'

function ResumeCards() {
    const isDark = localStorage.getItem('dark');
    const addLight = (isDark === "true") ? "" : "-light";


    return (
        <div className={`list-cards-resume${addLight}`} >
            <section id="cd-timeline" className={`cd-container${addLight}`}>
                <div className={`cd-timeline-block${addLight}`}>
                    <div className={`cd-timeline-img cd-picture${addLight}`}>
                    </div>

                    <div className={`cd-timeline-content${addLight}`}>
                        <h2>Penta Consulting</h2>
                        <div className={`timeline-content-info${addLight}`}>
                            <span className={`timeline-content-info-title${addLight}`}>
                                <i className="fa fa-certificate" aria-hidden="true"></i>
                                Front End Developer
                            </span>
                        </div>
                        <p>Working alongside the designer team implementing the designs, also developing custom solutions to address team necessities.</p>
                        <ul className={`content-skills${addLight}`}>
                            <li>HTML5</li>
                            <li>CSS3</li>
                            <li>JavaScript</li>
                            <li>jQuery</li>
                            <li>Wordpress</li>
                        </ul>
                    </div>  
                </div>   
            </section> 
        </div>
    )
}

export default ResumeCards