import React from 'react';
import { projects } from '../data/personalData';

const Projects = () => {
    return (
        <section id="projects" className="section">
            <h2>Projects</h2>
            <p className="section-intro">
                A few things I&apos;ve built or contributed to. I prefer projects that
                mix data, automation, and real-world use cases.
            </p>
            <div className="grid two">
                {projects.map((project) => (
                    <article key={project.title} className="card project-card">
                        <div className="project-header">
                            <h3>
                                {project.link ? (
                                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                                        {project.title}
                                    </a>
                                ) : (
                                    project.title
                                )}
                            </h3>
                            <span className="pill">{project.timeframe}</span>
                        </div>
                        <p className="project-description">{project.description}</p>
                        <div className="tag-row">
                            {project.tech.map((t) => (
                                <span key={t} className="tag">
                                    {t}
                                </span>
                            ))}
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
};

export default Projects;
