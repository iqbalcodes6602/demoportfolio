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
                        <h2>NITR MUN</h2>
                        <div className={`timeline-content-info${addLight}`}>
                            <span className={`timeline-content-info-title${addLight}`}>
                                <i className="fa fa-certificate" aria-hidden="true"></i>
                                2023
                            </span>
                        </div>
                        <p>
                            Made the website for Model United Nations, a 3 day event at NIT Rourkela. I used ReactJS and Material UI, created complete front end and also handled the form submission to send to backend API.
                        </p>
                    </div>
                </div>

                <div className={`cd-timeline-block${addLight}`}>
                    <div className={`cd-timeline-img cd-picture${addLight}`}>
                    </div>
                    <div className={`cd-timeline-content${addLight}`}>
                        <h2>Video Calling Website</h2>
                        <div className={`timeline-content-info${addLight}`}>
                            <span className={`timeline-content-info-title${addLight}`}>
                                <i className="fa fa-certificate" aria-hidden="true"></i>
                                2022
                            </span>
                        </div>
                        <p>1 on 1 video calling website without backend, usign ReactJS, PeerJS and Socket.io. Can make audio and video calls.</p>
                    </div>
                </div>

                <div className={`cd-timeline-block${addLight}`}>
                    <div className={`cd-timeline-img cd-picture${addLight}`}>
                    </div>
                    <div className={`cd-timeline-content${addLight}`}>
                        <h2>Portfolio Website</h2>
                        <div className={`timeline-content-info${addLight}`}>
                            <span className={`timeline-content-info-title${addLight}`}>
                                <i className="fa fa-certificate" aria-hidden="true"></i>
                                2022
                            </span>
                        </div>
                        <p>Features me portoflio using ReactJS. has a couple of features like routing with react-router-dom, and dark mode.
                        Also working 'send message form' without backend which sends message to my email
                        using EmailJS.
                        </p>
                    </div>
                </div>

            </section>
        </div>
    )
}

export default ResumeCards