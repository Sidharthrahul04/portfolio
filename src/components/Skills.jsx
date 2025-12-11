import React from 'react';
import { skills, focusAreas } from '../data/personalData';

const Skills = () => {
    return (
        <section id="skills" className="section">
            <h2>Skills</h2>
            <div className="grid two">
                <div className="card">
                    <h3>Tech Stack I Use</h3>
                    <div className="tag-group">
                        <p className="tag-label">Programming</p>
                        <div className="tag-row">
                            {skills.programming.map((s) => (
                                <span key={s} className="tag">
                                    {s}
                                </span>
                            ))}
                        </div>

                        <p className="tag-label">Web</p>
                        <div className="tag-row">
                            {skills.web.map((s) => (
                                <span key={s} className="tag">
                                    {s}
                                </span>
                            ))}
                        </div>

                        <p className="tag-label">Databases</p>
                        <div className="tag-row">
                            {skills.databases.map((s) => (
                                <span key={s} className="tag">
                                    {s}
                                </span>
                            ))}
                        </div>

                        <p className="tag-label">Tools & Scripting</p>
                        <div className="tag-row">
                            {skills.tools.map((s) => (
                                <span key={s} className="tag">
                                    {s}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="card">
                    <h3>What I&apos;m Focusing On</h3>
                    <ul className="bullet-list">
                        {focusAreas.map((area, index) => (
                            <li key={index}>{area}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default Skills;
