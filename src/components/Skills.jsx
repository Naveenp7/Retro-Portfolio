import React from 'react';
import Reveal from './Reveal';
import GlitchText from './GlitchText';

const SKILL_CATEGORIES = [
    {
        title: "LANGUAGES",
        skills: ["Python", "JavaScript", "C", "R", "Dart", "HTML/CSS"]
    },
    {
        title: "AI & ML",
        skills: ["OpenCV", "MediaPipe", "Scikit-learn", "TensorFlow", "NLP", "Face Rec"]
    },
    {
        title: "MOBILE DEV",
        skills: ["Flutter", "Dart", "Firebase", "React Native", "Android", "iOS"]
    },
    {
        title: "FRAMEWORKS",
        skills: ["React", "Flask", "Streamlit", "Node.js", "Express"]
    },
    {
        title: "TOOLS & DB",
        skills: ["Git/GitHub", "MongoDB", "SQLite", "Groq API", "Roboflow", "Linux"]
    }
];

const Skills = () => {
    return (
        <section id="skills" style={{ padding: '4rem 2rem' }}>
            <Reveal width="100%">
                <h2 style={{
                    fontSize: '3rem',
                    fontWeight: '900',
                    marginBottom: '3rem',
                    textTransform: 'uppercase',
                    textAlign: 'center'
                }}>
                    <GlitchText text="Technical Arsenal" />
                </h2>
            </Reveal>

            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                gap: '2rem',
                maxWidth: '1200px',
                margin: '0 auto'
            }}>
                {SKILL_CATEGORIES.map((cat, index) => (
                    <Reveal key={index}>
                        <div className="hard-shadow" style={{
                            border: 'var(--border-thick)',
                            background: 'white',
                            padding: '1.5rem',
                            minHeight: '100%'
                        }}>
                            <h3 style={{
                                borderBottom: 'var(--border-thick)',
                                paddingBottom: '0.5rem',
                                marginBottom: '1rem',
                                fontWeight: '900',
                                textTransform: 'uppercase',
                                background: index % 2 === 0 ? 'var(--color-accent)' : 'var(--color-secondary)',
                                display: 'inline-block',
                                padding: '0.2rem 0.5rem',
                                color: 'black'
                            }}>
                                {cat.title}
                            </h3>
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                                {cat.skills.map(skill => (
                                    <span key={skill} style={{
                                        border: '2px solid black',
                                        padding: '0.3rem 0.6rem',
                                        fontWeight: '600',
                                        fontSize: '0.9rem',
                                        backgroundColor: '#f0f0f0',
                                        color: 'black'
                                    }}>
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </Reveal>
                ))}
            </div>
        </section>
    );
};

export default Skills;
