import React from 'react';
import { personalInfo, heroKicker, heroHeading, heroSubtitle } from '../data/personalData';

const Hero = () => {
    return (
        <section className="hero">
            <div className="hero-text">
                <p className="hero-kicker">{heroKicker}</p>
                <h1>{heroHeading}</h1>
                <p className="hero-subtitle">{heroSubtitle}</p>

                <div className="hero-actions">
                    <a href="#projects" className="btn primary">
                        View Projects
                    </a>
                    <a href="#contact" className="btn ghost">
                        Let&apos;s Collaborate
                    </a>
                </div>

                <div className="hero-meta">
                    <div>
                        <span className="meta-label">Location</span>
                        <span>{personalInfo.location}</span>
                    </div>
                    <div>
                        <span className="meta-label">Focus</span>
                        <span>{personalInfo.focus}</span>
                    </div>
                    <div>
                        <span className="meta-label">Currently</span>
                        <span>{personalInfo.education}</span>
                    </div>
                </div>
            </div>

            <div className="hero-card">
                <div className="avatar-circle">
                    <img
                        src={personalInfo.images.avatar}
                        alt={personalInfo.name}
                        className="avatar-photo"
                    />
                </div>
                <p className="hero-role">{personalInfo.role}</p>
                <p className="hero-tagline">{personalInfo.tagline}</p>
                <div className="hero-contact">
                    <a href={`tel:${personalInfo.phone}`} className="chip">
                        📞 {personalInfo.phone}
                    </a>
                    <a href={`mailto:${personalInfo.email}`} className="chip">
                        ✉️ {personalInfo.email}
                    </a>
                    <a
                        href={personalInfo.linkedin}
                        target="_blank"
                        rel="noreferrer"
                        className="chip"
                    >
                        🔗 LinkedIn
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Hero;
