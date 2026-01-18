import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const LOGS = [
    {
        id: 0,
        date: "JULY 2025",
        role: "3RD PRIZE",
        company: "KOTEC H TECH FEST",
        desc: "Secured 3rd prize in Hackathon organized by Qismat Foundation & Kottakkal Municipality.",
        imgs: ["/prize/kotech1.jpg", "/prize/kotech2.jpg", "/prize/kotech3.jpg"]
    },
    {
        id: 1,
        date: "2025",
        role: "2ND PRIZE",
        company: "MATRIX HACKATHON",
        sub: "(AVENTRON)",
        desc: "Secured 2nd prize in 30-hour hackathon by CSE Dept, MESCE.",
        imgs: ["/prize/aventron1.jpg", "/prize/aventron2.jpg"]
    },
    {
        id: 2,
        date: "WORKSHOP",
        role: "MENTOR",
        company: "ADTEC VIBE CODING",
        desc: "Conducted AI Vibe Coding workshop for juniors covering prompting and AI tools.",
        imgs: ["/prize/vibe1.jpg", "/prize/vibe2.jpg"]
    }
];

const Experience = () => {
    const [activeId, setActiveId] = useState(0);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 900);
        checkMobile();
        const handleResize = () => checkMobile();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <section id="experience" style={{ padding: '6rem 2rem', position: 'relative', minHeight: '100vh' }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto' }}>

                {/* HEADLINE */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    style={{ marginBottom: '5rem' }}
                >
                    <h2 style={{
                        fontSize: isMobile ? '2.5rem' : '4rem',
                        fontWeight: '900',
                        textTransform: 'uppercase',
                        lineHeight: 0.9,
                        letterSpacing: '-2px',
                        marginBottom: '1rem'
                    }}>
                        JOURNEY & <br />
                        <span style={{ color: 'var(--color-primary)' }}>ACHIEVEMENTS</span>
                    </h2>
                </motion.div>

                {isMobile ? (
                    // MOBILE LAYOUT: Vertical Stack
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '4rem' }}>
                        {LOGS.map((log) => (
                            <div key={log.id} style={{ borderLeft: '2px solid var(--color-primary)', paddingLeft: '1.5rem' }}>
                                <div style={{
                                    fontFamily: 'monospace', color: 'var(--color-primary)',
                                    fontWeight: 'bold', marginBottom: '0.5rem'
                                }}>
                                    {log.date}
                                </div>
                                <h3 style={{ fontSize: '2rem', fontWeight: '800', margin: '0 0 0.5rem 0', lineHeight: 1 }}>{log.role}</h3>
                                <div style={{ fontSize: '1rem', opacity: 0.7, marginBottom: '1rem' }}>{log.company}</div>
                                <p style={{ opacity: 0.8, lineHeight: 1.6, marginBottom: '1.5rem' }}>{log.desc}</p>

                                {/* Mobile Image (Static) */}
                                {log.imgs && (
                                    <div style={{ aspectRatio: '16/9', background: '#111', overflow: 'hidden', borderRadius: '4px' }}>
                                        <img src={log.imgs[0]} alt="evidence" style={{ width: '100%', height: '100%', objectFit: 'cover' }} loading="lazy" />
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                ) : (
                    // DESKTOP LAYOUT: Split Screen Spotlight
                    <div style={{ display: 'flex', gap: '5rem', alignItems: 'flex-start' }}>

                        {/* LEFT: Text List */}
                        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                            {LOGS.map((log) => (
                                <div
                                    key={log.id}
                                    onMouseEnter={() => setActiveId(log.id)}
                                    style={{
                                        padding: '2rem',
                                        cursor: 'pointer',
                                        border: activeId === log.id ? '2px solid var(--color-primary)' : '2px solid transparent',
                                        background: activeId === log.id ? 'rgba(255,255,255,0.03)' : 'transparent',
                                        opacity: activeId === log.id ? 1 : 0.4,
                                        transition: 'all 0.3s ease',
                                        transform: activeId === log.id ? 'translateX(20px)' : 'translateX(0)'
                                    }}
                                >
                                    <div style={{
                                        fontFamily: 'monospace', color: 'var(--color-primary)',
                                        fontWeight: 'bold', marginBottom: '0.5rem'
                                    }}>
                                        {log.date}
                                    </div>
                                    <h3 style={{ fontSize: '2.5rem', fontWeight: '800', margin: '0 0 0.5rem 0', lineHeight: 1 }}>{log.role}</h3>
                                    <div style={{ fontSize: '1.1rem', fontWeight: 'bold', textTransform: 'uppercase', marginBottom: '1rem' }}>
                                        {log.company} {log.sub}
                                    </div>
                                    <p style={{ margin: 0, opacity: 0.8, lineHeight: 1.6, maxWidth: '90%' }}>
                                        {log.desc}
                                    </p>
                                </div>
                            ))}
                        </div>

                        {/* RIGHT: Sticky Preview Box */}
                        <div style={{
                            flex: 1,
                            height: '500px',
                            position: 'sticky',
                            top: '20vh',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}>
                            <AnimatePresence mode='wait'>
                                <motion.div
                                    key={activeId}
                                    initial={{ opacity: 0, scale: 0.9, filter: 'blur(10px)' }}
                                    animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                                    exit={{ opacity: 0, scale: 1.05, filter: 'blur(10px)' }}
                                    transition={{ duration: 0.4 }}
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                        background: '#000',
                                        border: '1px solid rgba(255,255,255,0.2)',
                                        overflow: 'hidden',
                                        position: 'relative',
                                        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)'
                                    }}
                                >
                                    {/* Main Image */}
                                    {LOGS[activeId].imgs && (
                                        <img
                                            src={LOGS[activeId].imgs[0]}
                                            alt="Preview"
                                            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                        />
                                    )}

                                    {/* Overlay Text */}
                                    <div style={{
                                        position: 'absolute', bottom: 0, left: 0, right: 0,
                                        padding: '1.5rem',
                                        background: 'linear-gradient(to top, black, transparent)',
                                        color: 'white',
                                        fontFamily: 'monospace',
                                        fontSize: '0.9rem'
                                    }}>
                                        // EVIDENCE_RECORD_{activeId + 1}
                                    </div>
                                </motion.div>
                            </AnimatePresence>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
};

export default Experience;
