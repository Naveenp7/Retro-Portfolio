import React, { useState, useEffect } from 'react';
import { ArrowRight, Github, Linkedin, Instagram } from 'lucide-react';
import Reveal from './Reveal';
import DraggableSticker from './DraggableSticker';
import GlitchText from './GlitchText';
import MagneticButton from './MagneticButton';

const Hero = () => {
    // Typewriter effect state (kept for visual, sound removed)
    const [text, setText] = useState('');
    const fullText = "NAVEEN P";

    useEffect(() => {
        let index = 0;
        const interval = setInterval(() => {
            setText(fullText.substring(0, index));
            index++;
            if (index > fullText.length) clearInterval(interval);
        }, 150); // Slower for drama
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="hero-section" style={{
            minHeight: '90vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            padding: '2rem',
            position: 'relative',
            overflow: 'hidden'
        }}>

            {/* Draggable Stickers */}
            <DraggableSticker
                className="sticker hard-shadow"
                style={{
                    position: 'absolute',
                    top: '10%',
                    right: '5%',
                    background: 'var(--color-accent)',
                    padding: '1rem',
                    border: 'var(--border-thick)',
                    transform: 'rotate(5deg)',
                    fontWeight: 'bold',
                    zIndex: 10,
                    maxWidth: '200px',
                    textAlign: 'center',
                    cursor: 'grab'
                }}
            >
                OPEN TO WORK & COLLABS
            </DraggableSticker>

            <div style={{ maxWidth: '1000px', zIndex: 1 }}>
                <Reveal>
                    <h1 style={{
                        fontSize: 'clamp(3rem, 7vw, 6rem)',
                        lineHeight: '0.9',
                        fontWeight: '900',
                        marginBottom: '2rem',
                        color: 'var(--color-text)',
                        textTransform: 'uppercase'
                    }}>
                        <GlitchText text={text || "NAVEEN P"} /> <br />
                        <span style={{
                            color: 'var(--color-surface)',
                            WebkitTextStroke: '2px var(--color-border)',
                            textShadow: '4px 4px 0px var(--color-primary)',
                            fontSize: 'clamp(2rem, 5vw, 4rem)'
                        }}>AI & Data Engineer</span>
                    </h1>
                </Reveal>

                <Reveal>
                    <div style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        gap: '1rem',
                        marginBottom: '2rem'
                    }}>
                        {["COMPUTER VISION", "FLUTTER", "NLP", "FULL STACK"].map((tag, i) => (
                            <span key={tag} className="border-thick" style={{
                                padding: '0.5rem 1rem',
                                background: i % 2 === 0 ? 'var(--color-secondary)' : 'var(--color-primary)',
                                color: '#fff',
                                fontWeight: 'bold',
                                boxShadow: '4px 4px 0px 0px #000'
                            }}>
                                {tag}
                            </span>
                        ))}
                    </div>
                </Reveal>

                <Reveal>
                    <p style={{
                        fontSize: '1.2rem',
                        maxWidth: '700px',
                        borderLeft: '4px solid var(--color-primary)',
                        paddingLeft: '1rem',
                        marginBottom: '2rem',
                        fontWeight: '500',
                        background: 'var(--color-surface)',
                        color: 'var(--color-text)',
                        padding: '1rem',
                        border: 'var(--border-thick)'
                    }}>
                        Building high-performance <span style={{ fontWeight: 'bold' }}>mobile applications</span> and scalable AI systems.
                        Specializing in Flutter cross-platform development and generative models.
                    </p>
                </Reveal>

                <Reveal>
                    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                        <MagneticButton href="#projects" className="hard-shadow" style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '0.5rem',
                            padding: '1rem 2rem',
                            background: 'var(--color-text)',
                            color: 'var(--color-surface)',
                            border: 'var(--border-thick)',
                            fontSize: '1.2rem',
                            fontWeight: 'bold',
                            cursor: 'pointer',
                            textDecoration: 'none'
                        }}>
                            VIEW WORK <ArrowRight />
                        </MagneticButton>

                        <MagneticButton href="https://github.com/Naveenp7" target="_blank" rel="noreferrer" className="hard-shadow" style={{
                            padding: '1rem', background: 'var(--color-surface)', border: 'var(--border-thick)', color: 'var(--color-text)', display: 'flex'
                        }} title="GitHub">
                            <Github />
                        </MagneticButton>
                        <MagneticButton href="https://linkedin.com/in/naveen-p-42bb1a256" target="_blank" rel="noreferrer" className="hard-shadow" style={{
                            padding: '1rem', background: '#0077b5', border: 'var(--border-thick)', color: 'white', display: 'flex'
                        }} title="LinkedIn">
                            <Linkedin />
                        </MagneticButton>
                        <MagneticButton href="https://www.instagram.com/_navee.n._" target="_blank" rel="noreferrer" className="hard-shadow" style={{
                            padding: '1rem', background: '#E1306C', border: 'var(--border-thick)', color: 'white', display: 'flex'
                        }} title="Instagram">
                            <Instagram />
                        </MagneticButton>
                    </div>
                </Reveal>
            </div>
        </section>
    );
};

export default Hero;
