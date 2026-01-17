import React from 'react';
import Reveal from './Reveal';
import GlitchText from './GlitchText';
import { motion } from 'framer-motion';
import { Database, Cpu, Terminal, CheckCircle2 } from 'lucide-react';

const About = () => {
    return (
        <section id="about" style={{ padding: '4rem 2rem', maxWidth: '1000px', margin: '0 auto' }}>
            <Reveal width="100%">
                {/* Main Dossier Container */}
                <div className="hard-shadow" style={{
                    background: 'var(--color-surface)',
                    border: 'var(--border-thick)',
                    position: 'relative',
                    overflow: 'hidden'
                }}>
                    {/* Dossier Header */}
                    <div style={{
                        background: 'var(--color-text)',
                        color: 'var(--color-surface)',
                        padding: '0.5rem 1rem',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        fontFamily: 'monospace',
                        fontWeight: 'bold',
                        fontSize: '0.9rem',
                        borderBottom: 'var(--border-thick)'
                    }}>
                        <span>FILE: 001_PROFILE</span>
                        <span>STATUS: OPENTOWORK</span>
                    </div>

                    <div className="dossier-grid">

                        {/* LEFT COLUMN: IDENTITY */}
                        <div className="dossier-profile-col">
                            {/* Profile "Image" Placeholder / Avatar Area */}
                            <div style={{
                                width: '100%',
                                aspectRatio: '1/1',
                                background: 'var(--color-bg)',
                                border: 'var(--border-thin)',
                                position: 'relative',
                                overflow: 'hidden'
                            }}>
                                <img
                                    src="/me.png"
                                    alt="Naveen P"
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                        objectFit: 'cover',
                                        filter: 'grayscale(100%) contrast(1.2)',
                                        transition: 'filter 0.5s ease',
                                        cursor: 'crosshair'
                                    }}
                                    onMouseEnter={(e) => e.currentTarget.style.filter = 'grayscale(0%) contrast(1)'}
                                    onMouseLeave={(e) => e.currentTarget.style.filter = 'grayscale(100%) contrast(1.2)'}
                                />

                                {/* Corner Decorations */}
                                <div style={{ position: 'absolute', top: 10, left: 10, width: 20, height: 20, borderTop: '2px solid var(--color-primary)', borderLeft: '2px solid var(--color-primary)', zIndex: 2 }} />
                                <div style={{ position: 'absolute', bottom: 10, right: 10, width: 20, height: 20, borderBottom: '2px solid var(--color-primary)', borderRight: '2px solid var(--color-primary)', zIndex: 2 }} />
                            </div>

                            {/* Quick Stats */}
                            <div style={{ display: 'grid', gap: '1rem', fontFamily: 'monospace' }}>
                                <div>
                                    <div style={{ opacity: 0.6, fontSize: '0.8rem' }}>CLASS</div>
                                    <div style={{ fontWeight: 'bold', fontSize: '1.1rem' }}>AI & DATA SCIENCE</div>
                                </div>
                                <div>
                                    <div style={{ opacity: 0.6, fontSize: '0.8rem' }}>LEVEL</div>
                                    <div style={{ fontWeight: 'bold', fontSize: '1.1rem' }}>FINAL YEAR (2026)</div>
                                </div>
                                <div>
                                    <div style={{ opacity: 0.6, fontSize: '0.8rem' }}>BASE</div>
                                    <div style={{ fontWeight: 'bold', fontSize: '1.1rem' }}>MES KUTTIPPURAM</div>
                                </div>
                            </div>
                        </div>

                        {/* RIGHT COLUMN: DATA */}
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>

                            {/* Bio */}
                            <div>
                                <h3 style={{ fontSize: '1.5rem', fontWeight: '900', marginBottom: '1rem', textTransform: 'uppercase' }}>
                                    <GlitchText text="OBJECTIVE" />
                                </h3>
                                <p style={{ fontSize: '1.1rem', lineHeight: '1.6', fontWeight: '500' }}>
                                    High-performance <span style={{ background: 'var(--color-primary)', color: '#fff', padding: '0 4px' }}>AI Engineer</span> specializing in scalable systems and generative models. Bridging the gap between raw data and intuitive user experiences.
                                </p>
                            </div>

                            {/* Skills Grid */}
                            <div>
                                <h4 style={{ fontFamily: 'monospace', fontWeight: 'bold', borderBottom: 'var(--border-thin)', marginBottom: '1rem', paddingBottom: '0.2rem' }}>// CORE_COMPETENCIES</h4>
                                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                                    {[
                                        "Flutter", "Dart", "Firebase", "React", "Node.js",
                                        "Computer Vision", "TensorFlow", "Framer Motion", "Docker"
                                    ].map(skill => (
                                        <span key={skill} style={{
                                            border: 'var(--border-thin)',
                                            padding: '0.3rem 0.8rem',
                                            fontSize: '0.9rem',
                                            fontWeight: 'bold',
                                            background: 'var(--color-bg)',
                                            fontFamily: 'monospace'
                                        }}>
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Certifications List */}
                            <div>
                                <h4 style={{ fontFamily: 'monospace', fontWeight: 'bold', borderBottom: 'var(--border-thin)', marginBottom: '1rem', paddingBottom: '0.2rem' }}>// CERTIFIED_SKILLS</h4>
                                <ul style={{ listStyle: 'none', padding: 0, display: 'grid', gap: '0.8rem' }}>
                                    {[
                                        { name: "Python for Data Science", org: "NPTEL" },
                                        { name: "AI Development", org: "IBM Coursera" },
                                        { name: "Hadoop & Hive", org: "IBM" },
                                    ].map((cert, i) => (
                                        <li key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontWeight: 'bold' }}>
                                            <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                                <CheckCircle2 size={16} color="var(--color-primary)" />
                                                {cert.name}
                                            </span>
                                            <span style={{ fontSize: '0.8rem', opacity: 0.6, fontFamily: 'monospace' }}>{cert.org}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                        </div>
                    </div>
                </div>
            </Reveal>
        </section>
    );
};

export default About;
