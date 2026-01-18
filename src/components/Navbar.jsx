import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { User, Cpu, Briefcase, Zap, Mail, Home } from 'lucide-react';

const NAV_LINKS = [
    { label: 'ABOUT', id: 'about', icon: <User size={20} /> },
    { label: 'SKILLS', id: 'skills', icon: <Cpu size={20} /> },
    { label: 'WORK', id: 'projects', icon: <Briefcase size={20} /> },
    { label: 'LAB', id: 'experience', icon: <Zap size={20} /> },
    { label: 'CONTACT', id: 'contact', icon: <Mail size={20} /> },
];

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState('home');

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);

            // simple active section detection
            const sections = ['about', 'skills', 'projects', 'experience', 'contact'];
            let current = 'home';
            for (const section of sections) {
                const element = document.getElementById(section);
                if (element && window.scrollY >= (element.offsetTop - 300)) {
                    current = section;
                }
            }
            setActiveSection(current);
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
            {/* ================= DESKTOP NAVBAR ================= */}
            <motion.nav
                className="desktop-nav" // Targeted by CSS
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
                <div style={{
                    maxWidth: '1200px',
                    margin: '0 auto',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    pointerEvents: 'auto'
                }}>

                    {/* BRAND */}
                    <motion.div
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

                    {/* DESKTOP LINKS */}
                    <div style={{
                        display: 'flex', gap: '2rem',
                        background: 'rgba(255,255,255,0.05)', backdropFilter: 'blur(10px)',
                        padding: '0.5rem 1rem', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '4px'
                    }}>
                        {NAV_LINKS.map((link) => (
                            <div
                                key={link.id}
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


            {/* ================= MOBILE FLOATING DOCK ================= */}
            <motion.div
                className="mobile-dock" // Targeted by CSS
                initial={{ y: 100, opacity: 0, x: '-50%' }}
                animate={{ y: 0, opacity: 1, x: '-50%' }}
                transition={{ duration: 0.5, delay: 0.2 }}
                style={{
                    position: 'fixed',
                    bottom: '2.5rem',
                    left: '50%',
                    // transform handled by framer-motion x prop
                    zIndex: 1000,
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1rem',
                    padding: '1rem 2rem',
                    borderRadius: '40px',

                    // LIQUID GLASS EFFECT
                    background: 'var(--dock-bg)',
                    backdropFilter: 'var(--dock-blur)',
                    border: '1px solid var(--dock-border)',
                    boxShadow: 'var(--dock-shadow)',
                }}
            >
                <motion.div
                    whileTap={{ scale: 0.9 }}
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    style={{
                        padding: '0.5rem',
                        borderRadius: '12px',
                        background: activeSection === 'home' ? 'var(--color-primary)' : 'transparent',
                        color: activeSection === 'home' ? '#000' : 'var(--color-text)',
                        cursor: 'pointer',
                        display: 'flex', alignItems: 'center', justifyContent: 'center'
                    }}
                >
                    <Home size={22} />
                </motion.div>

                <div style={{ width: '1px', height: '24px', background: 'rgba(255,255,255,0.1)' }} />

                {NAV_LINKS.map((link) => (
                    <motion.div
                        key={link.id}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => scrollToSection(link.id)}
                        style={{
                            padding: '0.5rem',
                            borderRadius: '12px',
                            background: activeSection === link.id ? 'var(--color-primary)' : 'transparent',
                            color: activeSection === link.id ? '#000' : 'var(--color-text)',
                            cursor: 'pointer',
                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                            position: 'relative'
                        }}
                    >
                        {link.icon}
                        {activeSection === link.id && (
                            <motion.div
                                layoutId="dock-active-dot"
                                style={{
                                    position: 'absolute',
                                    bottom: '-6px',
                                    width: '4px',
                                    height: '4px',
                                    borderRadius: '50%',
                                    background: 'var(--color-primary)'
                                }}
                            />
                        )}
                    </motion.div>
                ))}
            </motion.div>


            <style jsx>{`
                /* Default: Desktop visible, Mobile Dock hidden */
                .desktop-nav { display: block !important; }
                .mobile-dock { display: none !important; }

                /* Mobile Breakpoint */
                @media (max-width: 768px) {
                    .desktop-nav { display: none !important; }
                    .mobile-dock { display: flex !important; }
                }
            `}</style>
        </>
    );
};

export default Navbar;
