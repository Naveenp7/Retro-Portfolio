import React, { useState, useEffect } from 'react';
import Reveal from './Reveal';
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
        company: "MATRIX HACKATHON (AVENTRON)",
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
        const checkMobile = () => setIsMobile(window.matchMedia("(max-width: 768px)").matches);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    return (
        <section id="experience" style={{ padding: '4rem 2rem' }}>
            <Reveal>
                <h2 style={{
                    fontSize: '3rem',
                    fontWeight: '900',
                    marginBottom: '3rem',
                    textTransform: 'uppercase',
                    borderBottom: 'var(--border-thick)',
                    display: 'inline-block'
                }}>
                    <GlitchText text="Journey & Achievements" />
                </h2>
            </Reveal>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem', maxWidth: '1000px' }}>
                {LOGS.map((log, index) => (
                    <Reveal key={index} width="100%" disabled={isMobile}>
                        <div className="hard-shadow" style={{
                            border: 'var(--border-thick)',
                            background: 'var(--color-surface)',
                            padding: isMobile ? '1.5rem' : '2rem',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '1.5rem',
                        }}>
                            {/* Header Row */}
                            <div style={{
                                display: 'flex',
                                gap: isMobile ? '1rem' : '2rem',
                                alignItems: isMobile ? 'flex-start' : 'center',
                                flexDirection: isMobile ? 'column' : 'row' // Stack on Mobile
                            }}>
                                <div style={{
                                    background: 'var(--color-accent)',
                                    color: 'black',
                                    padding: '0.5rem 1rem',
                                    fontWeight: 'bold',
                                    border: 'var(--border-thick)',
                                    minWidth: isMobile ? '100%' : '150px', // Full width badge on mobile
                                    textAlign: 'center',
                                    textTransform: 'uppercase'
                                }}>
                                    {log.date}
                                </div>

                                <div style={{ flex: 1 }}>
                                    <h3 style={{ fontSize: '1.5rem', fontWeight: '800', margin: '0 0 0.5rem 0', textTransform: 'uppercase' }}>
                                        {log.role} <br /> <span style={{ color: 'var(--color-secondary)' }}>@ {log.company}</span>
                                    </h3>
                                    <p style={{ margin: 0, fontWeight: '500' }}>
                                        {log.desc}
                                    </p>
                                </div>
                            </div>

                            {/* Evidence Gallery (Film Strip) */}
                            {log.imgs && (
                                <div style={{
                                    marginTop: '0.5rem',
                                    position: 'relative'
                                }}>
                                    {/* Hide scrollbar for Chrome/Safari */}
                                    <style>{`
                                        .gallery-scroll::-webkit-scrollbar { display: none; }
                                    `}</style>

                                    <div className="gallery-scroll" style={{
                                        display: 'flex',
                                        gap: '1rem',
                                        overflowX: 'auto',
                                        paddingBottom: '1rem',
                                        WebkitOverflowScrolling: 'touch',
                                        overscrollBehaviorX: 'contain',
                                        scrollbarWidth: 'none',
                                        msOverflowStyle: 'none'
                                    }}>
                                        {log.imgs.map((img, i) => (
                                            <motion.div
                                                key={i}
                                                whileHover={!isMobile ? { scale: 1.05, rotate: i % 2 === 0 ? -2 : 2, zIndex: 10 } : {}}
                                                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                                                style={{
                                                    minWidth: isMobile ? '120px' : '180px',
                                                    height: isMobile ? '80px' : '120px',
                                                    border: '2px solid black',
                                                    background: 'var(--color-text)',
                                                    backgroundImage: `url(${img})`,
                                                    backgroundSize: 'cover',
                                                    backgroundPosition: 'center',
                                                    cursor: 'zoom-in',
                                                    flexShrink: 0,
                                                    backfaceVisibility: 'hidden',
                                                    boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
                                                }}
                                            />
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    </Reveal>
                ))}
            </div>
        </section>
    );
};

export default Experience;
