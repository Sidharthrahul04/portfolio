import React, { useState } from 'react';
import { personalInfo, contactMessage } from '../data/personalData';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });
    const [submitted, setSubmitted] = useState(false);
    const [status, setStatus] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);

        if (!formData.name || !formData.email || !formData.message) {
            setStatus('Please fill in all fields before sending.');
            return;
        }

        setStatus('Thanks for reaching out! I\'ll get back to you soon.');
        setFormData({ name: '', email: '', message: '' });
        setSubmitted(false);
    };

    const hasError = (field) => submitted && !formData[field];

    return (
        <section id="contact" className="section contact-section">
            <h2>Get In Touch</h2>
            <p className="section-intro">{contactMessage}</p>

            <form className="contact-form" onSubmit={handleSubmit} noValidate>
                <div className="form-row">
                    <label htmlFor="name">Name</label>
                    <input
                        id="name"
                        name="name"
                        type="text"
                        className={`input-field ${hasError('name') ? 'error' : ''}`}
                        placeholder="Your name"
                        value={formData.name}
                        onChange={handleChange}
                    />
                </div>

                <div className="form-row">
                    <label htmlFor="email">Email</label>
                    <input
                        id="email"
                        name="email"
                        type="email"
                        className={`input-field ${hasError('email') ? 'error' : ''}`}
                        placeholder="you@example.com"
                        value={formData.email}
                        onChange={handleChange}
                    />
                </div>

                <div className="form-row">
                    <label htmlFor="message">Message</label>
                    <textarea
                        id="message"
                        name="message"
                        className={`textarea-field ${hasError('message') ? 'error' : ''
                            }`}
                        rows="4"
                        placeholder="Tell me a bit about what you're looking for…"
                        value={formData.message}
                        onChange={handleChange}
                    />
                </div>

                <button type="submit" className="btn primary full">
                    Send Message
                </button>

                {status && <p className="form-status">{status}</p>}
            </form>

            {/* ICONS CENTERED */}
            <div className="social-row">
                <a
                    href={personalInfo.linkedin}
                    target="_blank"
                    rel="noreferrer"
                >
                    <img
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg"
                        alt="LinkedIn"
                        className="social-icon"
                    />
                </a>
                <a
                    href={personalInfo.github}
                    target="_blank"
                    rel="noreferrer"
                >
                    <img
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
                        alt="GitHub"
                        className="social-icon"
                    />
                </a>
            </div>

            <p className="footer">
                © {new Date().getFullYear()} Built with patience, coffee, and a lot of
                console.logs by <strong>{personalInfo.name} {personalInfo.lastName}</strong>.
            </p>
        </section>
    );
};

export default Contact;
