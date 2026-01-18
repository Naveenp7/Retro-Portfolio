import React from 'react';
import { motion } from 'framer-motion';
import { X, ExternalLink, Github } from 'lucide-react';
import MagneticButton from './MagneticButton';

const ProjectModal = ({ selectedProject, setSelectedProject }) => {
    if (!selectedProject) return null;

    return (
        <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: 'rgba(0, 0, 0, 0.8)',
            zIndex: 1000,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '1rem',
            backdropFilter: 'blur(5px)'
        }}
            onClick={() => setSelectedProject(null)} // Close on background click
        >
            <motion.div
                layoutId={`project-card-${selectedProject.id}`}
                className="hard-shadow"
                style={{
                    background: 'var(--color-surface)',
                    width: '100%',
                    maxWidth: '900px',
                    maxHeight: '90vh',
                    overflowY: 'auto',
                    border: 'var(--border-thick)',
                    position: 'relative',
                    color: 'var(--color-text)',
                    display: 'flex',
                    flexDirection: 'column'
                }}
                onClick={(e) => e.stopPropagation()} // Prevent close on modal click
            >
                {/* Close Button */}
                <button
                    onClick={() => setSelectedProject(null)}
                    style={{
                        position: 'absolute',
                        top: '1rem',
                        right: '1rem',
                        background: 'var(--color-primary)',
                        border: 'var(--border-thick)',
                        padding: '0.5rem',
                        cursor: 'pointer',
                        zIndex: 10,
                        color: 'white'
                    }}
                >
                    <X size={24} />
                </button>

                {/* Banner Image */}
                <div style={{ height: '300px', overflow: 'hidden', borderBottom: 'var(--border-thick)' }}>
                    <motion.img
                        src={selectedProject.image}
                        alt={selectedProject.title}
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                </div>

                <div style={{ padding: '2rem' }}>
                    <motion.h2
                        layoutId={`project-title-${selectedProject.id}`}
                        style={{ fontSize: '2.5rem', fontWeight: '900', marginBottom: '1rem', textTransform: 'uppercase' }}
                    >
                        {selectedProject.title}
                    </motion.h2>

                    <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '2rem' }}>
                        {selectedProject.tags.map(tag => (
                            <span key={tag} style={{
                                padding: '0.2rem 0.8rem',
                                background: 'var(--color-secondary)',
                                color: 'white',
                                fontWeight: 'bold',
                                fontSize: '0.9rem',
                                border: 'var(--border-thin)'
                            }}>
                                {tag}
                            </span>
                        ))}
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '2rem' }}>
                        <div>
                            <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem', borderBottom: '4px solid var(--color-primary)', display: 'inline-block' }}>THE CHALLENGE</h3>
                            <p style={{ fontSize: '1.1rem', lineHeight: '1.6', marginBottom: '1.5rem', opacity: 0.9 }}>
                                {selectedProject.details?.challenge || "Defining the problem statement and understanding the core user needs were the first steps in this journey. The main challenge involved optimizing performance while maintaining high visual fidelity."}
                            </p>
                        </div>

                        <div>
                            <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem', borderBottom: '4px solid var(--color-secondary)', display: 'inline-block' }}>THE SOLUTION</h3>
                            <p style={{ fontSize: '1.1rem', lineHeight: '1.6', marginBottom: '1.5rem', opacity: 0.9 }}>
                                {selectedProject.details?.solution || "We implemented a robust architecture using modern frameworks. By focusing on scalability and modular code, we achieved a seamless user experience across all devices."}
                            </p>
                        </div>
                    </div>

                    {/* Links */}
                    <div style={{ display: 'flex', gap: '1rem', marginTop: '2rem', paddingTop: '2rem', borderTop: 'var(--border-thin)' }}>
                        <MagneticButton href="#" style={{
                            flex: 1, padding: '1rem', textAlign: 'center', background: 'var(--color-text)', color: 'var(--color-surface)',
                            border: 'var(--border-thick)', fontWeight: 'bold', textDecoration: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem'
                        }}>
                            <ExternalLink size={20} /> LIVE DEMO
                        </MagneticButton>
                        <MagneticButton href="#" style={{
                            flex: 1, padding: '1rem', textAlign: 'center', background: 'var(--color-surface)', color: 'var(--color-text)',
                            border: 'var(--border-thick)', fontWeight: 'bold', textDecoration: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem'
                        }}>
                            <Github size={20} /> VIEW CODE
                        </MagneticButton>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default ProjectModal;
