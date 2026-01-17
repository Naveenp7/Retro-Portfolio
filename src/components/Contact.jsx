import React from 'react';
import { Send, Mail, Phone, MapPin, ArrowUpRight } from 'lucide-react';
import Reveal from './Reveal';
import Marquee from './Marquee';
import MagneticButton from './MagneticButton';

const Contact = () => {
    return (
        <section id="contact" style={{ position: 'relative', overflow: 'hidden' }}>
            {/* Mega Marquee Header */}
            <div style={{ background: 'var(--color-primary)', padding: '2rem 0', borderBottom: 'var(--border-thick)' }}>
                <Marquee text="AVAILABLE FOR HIRE • LET'S BUILD SOMETHING COOL • GET IN TOUCH •" rotate={0} bgColor="transparent" />
            </div>

            <div style={{
                maxWidth: '1200px',
                margin: '0 auto',
                padding: '4rem 2rem',
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: '4rem'
            }}>

                {/* Left Column: Giant Links */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                    <Reveal>
                        <h2 style={{ fontSize: '4rem', fontWeight: '900', lineHeight: '0.9', textTransform: 'uppercase', marginBottom: '2rem' }}>
                            Let's Talk<br />
                            <span style={{ color: 'var(--color-secondary)' }}>Projects</span>.
                        </h2>
                    </Reveal>

                    <nav style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                        <MagneticButton>
                            <a href="mailto:naveensanthosh830@gmail.com" className="hard-shadow" style={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                padding: '2rem',
                                background: 'white',
                                border: 'var(--border-thick)',
                                fontSize: '1.5rem',
                                fontWeight: 'bold',
                                textDecoration: 'none',
                                color: 'black',
                                transition: 'all 0.2s'
                            }}>
                                <span>EMAIL ME</span>
                                <ArrowUpRight size={32} />
                            </a>
                        </MagneticButton>

                        <MagneticButton>
                            <a href="tel:+917012895181" className="hard-shadow" style={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                padding: '2rem',
                                background: 'white',
                                border: 'var(--border-thick)',
                                fontSize: '1.5rem',
                                fontWeight: 'bold',
                                textDecoration: 'none',
                                color: 'black'
                            }}>
                                <span>CALL ME</span>
                                <Phone size={32} />
                            </a>
                        </MagneticButton>

                        <div className="hard-shadow" style={{
                            padding: '2rem',
                            background: 'var(--color-bg)',
                            border: 'var(--border-thick)',
                            fontSize: '1.2rem',
                            fontWeight: 'bold',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '1rem'
                        }}>
                            <MapPin /> Malappuram, Kerala, India
                        </div>
                    </nav>
                </div>

                {/* Right Column: Brutalist Form */}
                <div className="hard-shadow" style={{
                    background: 'var(--color-surface)',
                    border: 'var(--border-thick)',
                    padding: '3rem',
                    height: 'fit-content'
                }}>
                    <h3 style={{ fontSize: '2rem', fontWeight: '800', marginBottom: '2rem', textTransform: 'uppercase' }}>Send a Message</h3>
                    <form style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                            <label style={{ fontWeight: 'bold', fontSize: '0.9rem', textTransform: 'uppercase' }}>Name</label>
                            <input
                                type="text"
                                placeholder="WHO ARE YOU?"
                                style={{
                                    padding: '1.5rem',
                                    border: 'var(--border-thick)',
                                    fontSize: '1rem',
                                    fontWeight: 'bold',
                                    fontFamily: 'var(--font-main)',
                                    outline: 'none',
                                    background: 'var(--color-bg)'
                                }}
                            />
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                            <label style={{ fontWeight: 'bold', fontSize: '0.9rem', textTransform: 'uppercase' }}>Email</label>
                            <input
                                type="email"
                                placeholder="YOUR@EMAIL.COM"
                                style={{
                                    padding: '1.5rem',
                                    border: 'var(--border-thick)',
                                    fontSize: '1rem',
                                    fontWeight: 'bold',
                                    fontFamily: 'var(--font-main)',
                                    outline: 'none',
                                    background: 'var(--color-bg)'
                                }}
                            />
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                            <label style={{ fontWeight: 'bold', fontSize: '0.9rem', textTransform: 'uppercase' }}>Message</label>
                            <textarea
                                placeholder="WHAT'S ON YOUR MIND?"
                                rows="4"
                                style={{
                                    padding: '1.5rem',
                                    border: 'var(--border-thick)',
                                    fontSize: '1rem',
                                    fontWeight: 'bold',
                                    fontFamily: 'var(--font-main)',
                                    outline: 'none',
                                    resize: 'vertical',
                                    background: 'var(--color-bg)'
                                }}
                            />
                        </div>
                        <MagneticButton>
                            <button type="submit" style={{
                                width: '100%',
                                background: 'black',
                                color: 'white',
                                border: 'none',
                                padding: '1.5rem',
                                fontSize: '1.2rem',
                                fontWeight: '900',
                                cursor: 'pointer',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                gap: '0.5rem',
                                textTransform: 'uppercase'
                            }}>
                                SEND IT <Send size={20} />
                            </button>
                        </MagneticButton>
                    </form>
                </div>
            </div>

            <footer style={{
                textAlign: 'center',
                fontWeight: 'bold',
                padding: '2rem',
                borderTop: 'var(--border-thick)',
                background: 'black',
                color: 'white',
                textTransform: 'uppercase',
                fontSize: '0.9rem'
            }}>
                <p>© 2026 NAVEEN P | ENGINEERED WITH REACT & VITE</p>
            </footer>
        </section>
    );
};

export default Contact;
