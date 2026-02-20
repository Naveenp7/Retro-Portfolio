import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const NAV_LINKS = [
    { label: 'ABOUT', id: 'about' },
    { label: 'SKILLS', id: 'skills' },
    { label: 'WORK', id: 'projects' },
    { label: 'LAB', id: 'experience' },
    { label: 'CONTACT', id: 'contact' },
];

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (id) => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
        else window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <>
            {/* ================= MAIN NAVBAR ================= */}
            <motion.nav
                className="desktop-nav"
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, ease: "circOut" }}
                style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: '100%',
                    zIndex: 999,
                    padding: scrolled ? '1rem 2rem' : '2rem',
                    transition: 'padding 0.3s ease',
                    pointerEvents: 'none'
                }}
            >
                <div className="nav-container" style={{
                    maxWidth: '1200px',
                    margin: '0 auto',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    pointerEvents: 'auto'
                }}>

                    {/* BRAND */}
                    <motion.div
                        className="nav-brand"
                        whileHover={{ scale: 1.05 }}
                        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                        style={{
                            background: 'var(--color-primary)',
                            padding: '0.5rem 1rem',
                            border: '2px solid black',
                            cursor: 'pointer',
                            fontWeight: '900',
                            fontFamily: 'monospace',
                            boxShadow: '4px 4px 0px rgba(0,0,0,1)'
                        }}
                    >
                        [NAVEEN_P]
                    </motion.div>

                    {/* LINKS */}
                    <div className="nav-links" style={{
                        display: 'flex', gap: '2rem',
                        background: 'rgba(255,255,255,0.05)', backdropFilter: 'blur(10px)',
                        padding: '0.5rem 1rem', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '4px'
                    }}>
                        {NAV_LINKS.map((link) => (
                            <div
                                key={link.id}
                                className="nav-link-item"
                                onClick={() => scrollToSection(link.id)}
                                style={{
                                    cursor: 'pointer',
                                    fontWeight: 'bold',
                                    fontFamily: 'monospace',
                                    fontSize: '0.9rem',
                                    opacity: 0.7,
                                    transition: 'all 0.2s',
                                    position: 'relative',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '0.5rem'
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.opacity = 1;
                                    e.currentTarget.style.color = 'var(--color-primary)';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.opacity = 0.7;
                                    e.currentTarget.style.color = 'var(--color-text)';
                                }}
                            >
                                {link.label}
                            </div>
                        ))}
                    </div>

                    {/* STATUS INDICATOR */}
                    <div className="status-indicator" style={{
                        display: 'flex', alignItems: 'center', gap: '8px',
                        fontFamily: 'monospace', fontSize: '0.8rem', opacity: 0.6
                    }}>
                        <span style={{
                            width: '8px', height: '8px', background: '#00ff00',
                            borderRadius: '50%', boxShadow: '0 0 10px #00ff00'
                        }} />
                        SYSTEM: ONLINE
                    </div>

                </div>
            </motion.nav>

            <style jsx>{`
                /* Mobile Breakpoint */
                @media (max-width: 768px) {
                    .desktop-nav {
                        padding: 1rem 0.5rem !important;
                    }
                    .nav-container {
                        justify-content: center !important;
                    }
                    .nav-brand, .status-indicator {
                        display: none !important;
                    }
                    .nav-links {
                        gap: 1rem !important;
                        padding: 0.5rem 1rem !important;
                        justify-content: center;
                        width: auto;
                        max-width: 100%;
                        overflow-x: auto;
                        -ms-overflow-style: none;
                        scrollbar-width: none;
                        box-shadow: 0 4px 12px rgba(0,0,0,0.2) !important;
                        border-radius: 8px !important;
                    }
                    .nav-links::-webkit-scrollbar {
                        display: none;
                    }
                    .nav-link-item {
                        font-size: 0.75rem !important;
                        white-space: nowrap;
                    }
                }
                
                @media (max-width: 480px) {
                    .nav-links {
                        gap: 0.75rem !important;
                    }
                    .nav-link-item {
                        font-size: 0.7rem !important;
                    }
                }
            `}</style>
        </>
    );
};

export default Navbar;
