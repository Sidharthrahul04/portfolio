import React from 'react';
import { personalInfo, aboutHeading } from '../data/personalData';

const About = () => {
    return (
        <section id="about" className="section about-section">
            <div className="about-layout">
                <div className="about-text-block">
                    <h2>{aboutHeading}</h2>
                    <p className="section-intro">{personalInfo.bio}</p>
                    <p className="section-intro about-extra">{personalInfo.bioExtra}</p>
                </div>

                <div className="about-photo-shell">
                    <div className="about-photo-ring">
                        <img
                            src={personalInfo.images.about}
                            alt={personalInfo.name}
                            className="about-photo"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
