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
                        <h2>Montfort Inter College</h2>
                        <div className={`timeline-content-info${addLight}`}>
                            <span className={`timeline-content-info-title${addLight}`}>
                                <i className="fa fa-certificate" aria-hidden="true"></i>
                                2018
                            </span>
                        </div>
                        <p>
                            Completed Class 10th <br />
                            Achieved 96% in final board exams
                        </p>
                    </div>
                </div>
                <div className={`cd-timeline-block${addLight}`}>
                    <div className={`cd-timeline-img cd-picture${addLight}`}>
                    </div>

                    <div className={`cd-timeline-content${addLight}`}>
                        <h2>Montfort Inter College</h2>
                        <div className={`timeline-content-info${addLight}`}>
                            <span className={`timeline-content-info-title${addLight}`}>
                                <i className="fa fa-certificate" aria-hidden="true"></i>
                                2020
                            </span>
                        </div>
                        <p>
                            Completed Class 12th (Physics, Chemistry, Maths)<br />
                            Achieved 93% in final exams
                        </p>
                    </div>
                </div>
                    <div className={`cd-timeline-block${addLight}`}>
                        <div className={`cd-timeline-img cd-picture${addLight}`}>
                        </div>

                        <div className={`cd-timeline-content${addLight}`}>
                            <h2>National Institute of Technology, Rourkela</h2>
                            <div className={`timeline-content-info${addLight}`}>
                                <span className={`timeline-content-info-title${addLight}`}>
                                    <i className="fa fa-certificate" aria-hidden="true"></i>
                                    2025
                                </span>
                            </div>
                            <p>
                                Bachelors of Technology in Industrial Design<br />
                                Current CGPA : 8.5
                            </p>
                        </div>
                    </div>
            </section>
        </div>
    )
}

export default ResumeCards