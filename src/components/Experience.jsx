import React, { useState, useEffect } from 'react';
import GlitchText from './GlitchText';
import { motion } from 'framer-motion';

const LOGS = [
    {
        date: "JULY 2025",
        role: "3RD PRIZE",
        company: "KOTEC H TECH FEST",
        desc: "Secured 3rd prize in Hackathon organized by Qismat Foundation & Kottakkal Municipality.",
        imgs: ["/prize/kotech1.jpg", "/prize/kotech2.jpg", "/prize/kotech3.jpg"]
    },
    {
        date: "2025",
        role: "2ND PRIZE",
        company: "MATRIX HACKATHON",
        sub: "(AVENTRON)",
        desc: "Secured 2nd prize in 30-hour hackathon by CSE Dept, MESCE.",
        imgs: ["/prize/aventron1.jpg", "/prize/aventron2.jpg"]
    },
    {
        date: "WORKSHOP",
        role: "MENTOR",
        company: "ADTEC VIBE CODING",
        desc: "Conducted AI Vibe Coding workshop for juniors covering prompting and AI tools.",
        imgs: ["/prize/vibe1.jpg", "/prize/vibe2.jpg"]
    }
];

const Experience = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    return (
        <section id="experience" style={{ padding: '6rem 2rem', position: 'relative' }}>
            <div style={{ maxWidth: '1000px', margin: '0 auto' }}>

                {/* HEADLINE */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    style={{ marginBottom: '4rem', textAlign: 'left' }}
                >
                    <h2 style={{
                        fontSize: isMobile ? '2.5rem' : '3.5rem',
                        fontWeight: '900',
                        textTransform: 'uppercase',
                        lineHeight: 0.9,
                        letterSpacing: '-2px',
                        marginBottom: '1rem'
                    }}>
                        JOURNEY & <br />
                        <span style={{ color: 'var(--color-primary)', display: 'inline-block' }}>
                            ACHIEVEMENTS
                        </span>
                    </h2>
                    <div style={{ width: '60px', height: '6px', background: 'var(--color-text)' }} />
                </motion.div>

                {/* TIMELINE CONTAINER */}
                <div style={{ position: 'relative', borderLeft: isMobile ? '2px solid rgba(255,255,255,0.1)' : 'none' }}>

                    {/* (Desktop) Central Spine Line */}
                    {!isMobile && (
                        <div style={{
                            position: 'absolute',
                            left: '50%',
                            top: 0,
                            bottom: 0,
                            width: '2px',
                            background: 'rgba(255,255,255,0.1)',
                            transform: 'translateX(-50%)'
                        }} />
                    )}

                    {LOGS.map((log, index) => {
                        const isEven = index % 2 === 0;
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                style={{
                                    display: 'flex',
                                    flexDirection: isMobile ? 'column' : (isEven ? 'row' : 'row-reverse'),
                                    alignItems: 'center',
                                    marginBottom: '4rem',
                                    position: 'relative'
                                }}
                            >
                                {/* 1. DATE / MARKER SIDE */}
                                <div style={{
                                    flex: 1,
                                    padding: isMobile ? '0 0 1rem 1.5rem' : (isEven ? '0 3rem 0 0' : '0 0 0 3rem'),
                                    textAlign: isMobile ? 'left' : (isEven ? 'right' : 'left'),
                                    position: 'relative',
                                    width: '100%'
                                }}>
                                    {/* Mobile Dot */}
                                    {isMobile && (
                                        <div style={{
                                            position: 'absolute', left: '-5px', top: '5px',
                                            width: '12px', height: '12px', background: 'var(--color-primary)',
                                            borderRadius: '50%', border: '2px solid black'
                                        }} />
                                    )}

                                    <div style={{
                                        fontFamily: 'monospace',
                                        color: 'var(--color-primary)',
                                        fontWeight: 'bold',
                                        fontSize: '0.9rem',
                                        letterSpacing: '1px',
                                        marginBottom: '0.5rem'
                                    }}>
                                        {log.date}
                                    </div>
                                    <h3 style={{
                                        fontSize: '1.8rem',
                                        fontWeight: '800',
                                        lineHeight: 1,
                                        textTransform: 'uppercase',
                                        margin: 0
                                    }}>
                                        {log.role}
                                    </h3>
                                    <div style={{ fontSize: '1.2rem', fontWeight: 'bold', opacity: 0.7 }}>
                                        {log.company} {log.sub && <span>{log.sub}</span>}
                                    </div>
                                </div>

                                {/* 2. CENTRAL NODE (Desktop Only) */}
                                {!isMobile && (
                                    <div style={{
                                        width: '20px', height: '20px',
                                        background: 'black',
                                        border: '4px solid var(--color-primary)',
                                        borderRadius: '50%',
                                        zIndex: 2,
                                        boxShadow: '0 0 20px var(--color-primary)'
                                    }} />
                                )}

                                {/* 3. CONTENT / GALLERY SIDE */}
                                <div style={{
                                    flex: 1,
                                    padding: isMobile ? '0 0 0 1.5rem' : (isEven ? '0 0 0 3rem' : '0 3rem 0 0'),
                                    width: '100%'
                                }}>
                                    <div style={{
                                        background: 'rgba(255,255,255,0.03)',
                                        border: '1px solid rgba(255,255,255,0.1)',
                                        padding: '1.5rem',
                                        borderRadius: '0px'
                                    }}>
                                        <p style={{ margin: '0 0 1.5rem 0', opacity: 0.8, lineHeight: 1.6 }}>
                                            {log.desc}
                                        </p>

                                        {/* Gallery - Optimized Static Grid with Native Loading */}
                                        {log.imgs && (
                                            <div style={{
                                                display: 'grid',
                                                gridTemplateColumns: 'repeat(auto-fit, minmax(80px, 1fr))',
                                                gap: '0.5rem',
                                                marginTop: '1.5rem'
                                            }}>
                                                {log.imgs.map((img, i) => (
                                                    <img
                                                        key={i}
                                                        src={img}
                                                        alt={`Evidence ${i + 1}`}
                                                        loading="lazy"
                                                        style={{
                                                            width: '100%',
                                                            height: '80px',
                                                            objectFit: 'cover',
                                                            background: '#222',
                                                            border: '1px solid rgba(255,255,255,0.2)',
                                                            display: 'block'
                                                        }}
                                                    />
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Experience;
