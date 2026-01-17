import React, { useState, useEffect } from 'react';
import { ExternalLink, Github, ArrowUpRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Reveal from './Reveal';
import TiltCard from './TiltCard';
import GlitchText from './GlitchText';

const PROJECTS = [
    {
        id: "p1",
        name: "AI Electricity Manager",
        desc: "Appliance-wise energy usage tracking with interactive analytics.",
        tags: ["Web", "Analytics", "Dashboard"],
        links: { repo: "https://github.com/Naveenp7/Electricity-management-software", demo: "#" },
        color: "var(--color-primary)",
        img: "/electro.png"
    },
    {
        id: "p2",
        name: "Smart Board",
        desc: "Interactive digital classroom system with real-time content display.",
        tags: ["IoT", "Automation", "Real-time"],
        links: { repo: "https://github.com/Naveenp7/Smart-board-5.0", demo: "#" },
        color: "var(--color-secondary)",
        img: "/board.png"
    },
    {
        id: "p3",
        name: "Urban Safety System",
        desc: "Real-time public safety platform for reporting accidents & hazards.",
        tags: ["Hackathon", "Maps", "Live Alerts"],
        links: { repo: "https://github.com/Naveenp7", demo: "#" },
        color: "var(--color-accent)",
        img: "/urban.jpg"
    },
    {
        id: "p4",
        name: "FaceSnap",
        desc: "Event-based face recognition system for fast identification.",
        tags: ["Computer Vision", "Face Rec", "Python"],
        links: { repo: "https://github.com/Naveenp7/FaceSnap", demo: "#" },
        color: "#ff00ff",
        img: "/face.png"
    },
    {
        id: "p5",
        name: "CodeRoom",
        desc: "Collaborative coding platform supporting multiple users.",
        tags: ["WebSockets", "Real-time", "Editor"],
        links: { repo: "https://github.com/Naveenp7/guest-chat-app", demo: "#" },
        color: "#00ffff",
        img: "/coderoom.png"
    },
    {
        id: "p6",
        name: "Finance Manager",
        desc: "Small business finance tracker for daily income & expenses.",
        tags: ["Finance", "Database", "Personal"],
        links: { repo: "https://github.com/Naveenp7/Finance-Manager", demo: "#" },
        color: "#ff9900",
        img: "/finance.png"
    },
    {
        id: "p7",
        name: "Gym Management",
        desc: "QR-based attendance and membership management system.",
        tags: ["QR Code", "Admin Panel", "Web"],
        links: { repo: "https://github.com/Naveenp7/Gym-Management", demo: "#" },
        color: "#00ff00",
        img: "/gym.png"
    }
];

const Projects = () => {
    const [activeProject, setActiveProject] = useState(null); // For Desktop Hover
    const [expandedProjectId, setExpandedProjectId] = useState(null); // For Click Slide-down
    const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.matchMedia("(max-width: 768px)").matches);
        checkMobile();
        window.addEventListener('resize', checkMobile);

        const moveCursor = (e) => {
            setCursorPos({ x: e.clientX, y: e.clientY });
        };
        window.addEventListener('mousemove', moveCursor);

        return () => {
            window.removeEventListener('resize', checkMobile);
            window.removeEventListener('mousemove', moveCursor);
        };
    }, []);

    const toggleExpand = (id) => {
        setExpandedProjectId(prev => prev === id ? null : id);
    };

    return (
        <section id="projects" style={{ padding: '4rem 2rem', position: 'relative' }}>
            <Reveal>
                <h2 style={{
                    fontSize: '3rem',
                    fontWeight: '900',
                    marginBottom: '3rem',
                    textTransform: 'uppercase',
                    borderBottom: 'var(--border-thick)',
                    display: 'inline-block'
                }}>
                    <GlitchText text="Selected Works" />
                </h2>
            </Reveal>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
                <div style={{
                    borderBottom: 'var(--border-thick)',
                    paddingBottom: '1rem',
                    marginBottom: '1rem',
                    fontFamily: 'monospace',
                    opacity: 0.5,
                    display: 'flex',
                    justifyContent: 'space-between'
                }}>
                    <span>ID</span>
                    <span>PROJECT NAME</span>
                    {!isMobile && <span>TAGS</span>}
                </div>

                {PROJECTS.map((proj, index) => (
                    <div key={proj.id} style={{ display: 'flex', flexDirection: 'column' }}>
                        {/* Unified List Row for Desktop & Mobile */}
                        <motion.div
                            onMouseEnter={() => !isMobile && setActiveProject(proj)}
                            onMouseLeave={() => !isMobile && setActiveProject(null)}
                            onClick={() => toggleExpand(proj.id)}
                            className="project-row"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            style={{
                                padding: '1.5rem 0',
                                borderBottom: 'var(--border-thin)',
                                cursor: 'pointer',
                                display: 'grid',
                                gridTemplateColumns: isMobile ? '30px 1fr' : '50px 1fr auto',
                                alignItems: 'center',
                                position: 'relative',
                                background: (activeProject?.id === proj.id || expandedProjectId === proj.id) ? 'var(--color-text)' : 'transparent',
                                color: (activeProject?.id === proj.id || expandedProjectId === proj.id) ? 'var(--color-bg)' : 'var(--color-text)',
                                transition: 'all 0.1s ease',
                                fontFamily: 'monospace'
                            }}
                        >
                            <span style={{ opacity: 0.5 }}>0{index + 1}</span>

                            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                <h3 style={{
                                    fontSize: isMobile ? '1.2rem' : '2rem',
                                    fontWeight: '700',
                                    textTransform: 'uppercase',
                                    margin: 0,
                                    letterSpacing: '-1px',
                                    wordBreak: 'break-word'
                                }}>
                                    {(activeProject?.id === proj.id || expandedProjectId === proj.id) ? '> ' : ''}{proj.name}
                                </h3>
                            </div>

                            {!isMobile && (
                                <div style={{ display: 'flex', gap: '1rem', opacity: 0.8, fontSize: '0.9rem' }}>
                                    {proj.tags.slice(0, 3).map((t, i) => <span key={i}>[{t}]</span>)}
                                </div>
                            )}
                        </motion.div>

                        {/* Slide Down Details */}
                        <AnimatePresence>
                            {expandedProjectId === proj.id && (
                                <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: 'auto', opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{ duration: 0.3, ease: "easeInOut" }}
                                    style={{ overflow: 'hidden', background: 'var(--color-surface)' }}
                                >
                                    <div style={{
                                        padding: '1.5rem',
                                        borderBottom: 'var(--border-thin)',
                                        display: 'flex',
                                        flexDirection: 'column', // Changed to column to stack image
                                        gap: '1rem'
                                    }}>
                                        {/* Desktop Slide Down Layout: Image + Text side by side? Or vertically? 
                                    Let's do standard responsive: Text top, image bottom, or side-by-side on large screens if desired.
                                    For simplicity and mobile-first, vertical stack is safe.
                                */}
                                        <div style={{
                                            width: '100%',
                                            height: '250px',
                                            backgroundImage: `url(${proj.img})`,
                                            backgroundSize: 'cover',
                                            backgroundPosition: 'center',
                                            border: 'var(--border-thick)',
                                            marginBottom: '1rem'
                                        }}></div>

                                        <p style={{ fontSize: '1.1rem', lineHeight: '1.5', fontWeight: '500', margin: 0 }}>
                                            {proj.desc}
                                        </p>
                                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                                            {proj.tags.map(tag => (
                                                <span key={tag} style={{
                                                    background: 'var(--color-bg)',
                                                    border: 'var(--border-thin)',
                                                    padding: '0.2rem 0.5rem',
                                                    fontSize: '0.8rem',
                                                    fontWeight: 'bold'
                                                }}>
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                        <a href={proj.links.repo} target="_blank" rel="noreferrer" style={{
                                            display: 'inline-flex',
                                            alignItems: 'center',
                                            gap: '0.5rem',
                                            fontWeight: 'bold',
                                            textDecoration: 'underline',
                                            marginTop: '0.5rem',
                                            width: 'fit-content'
                                        }}>
                                            VIEW REPOSITORY <ArrowUpRight size={18} />
                                        </a>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                ))}
            </div>

            {/* Floating Preview Card (Desktop Only) */}
            <AnimatePresence>
                {activeProject && !isMobile && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.5, rotate: -5 }}
                        animate={{ opacity: 1, scale: 1, rotate: 0, x: cursorPos.x + 40, y: cursorPos.y - 150 }} // Adjusted offset
                        exit={{ opacity: 0, scale: 0.5, rotate: 5 }}
                        transition={{ type: "spring", stiffness: 400, damping: 25 }}
                        style={{
                            position: 'fixed',
                            top: 0,
                            left: 0,
                            width: '400px',
                            pointerEvents: 'none',
                            zIndex: 100
                        }}
                    >
                        <TiltCard>
                            <div className="hard-shadow" style={{
                                background: 'var(--color-surface)',
                                border: 'var(--border-thick)',
                                padding: '0',
                                display: 'flex',
                                flexDirection: 'column',
                                position: 'relative'
                            }}>

                                {/* Image Header */}
                                <div style={{
                                    height: '180px',
                                    backgroundImage: `url(${activeProject.img})`,
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                    borderBottom: 'var(--border-thick)',
                                    position: 'relative'
                                }}>
                                    <div style={{
                                        position: 'absolute',
                                        top: '10px',
                                        left: '10px',
                                        background: activeProject.color,
                                        padding: '0.2rem 0.5rem',
                                        border: 'var(--border-thin)',
                                        fontWeight: 'bold',
                                        fontSize: '0.8rem',
                                        color: 'black'
                                    }}>
                                        {activeProject.id}
                                    </div>
                                </div>

                                {/* Card Body */}
                                <div style={{ padding: '1.5rem', background: 'white' }}>
                                    <h3 style={{
                                        margin: '0 0 0.5rem 0',
                                        fontSize: '1.4rem',
                                        fontWeight: '800',
                                        color: 'black',
                                        textTransform: 'uppercase',
                                        fontFamily: 'monospace'
                                    }}>
                                        {activeProject.name}
                                    </h3>
                                    <p style={{ marginBottom: '1rem', fontWeight: '500', lineHeight: '1.4', color: 'black', fontSize: '1rem' }}>
                                        {activeProject.desc}
                                    </p>
                                    <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
                                        <div style={{
                                            background: 'black',
                                            color: 'white',
                                            padding: '0.5rem 1rem',
                                            fontWeight: 'bold',
                                            fontSize: '0.8rem',
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '5px'
                                        }}>
                                            <Github size={14} /> REPO
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </TiltCard>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default Projects;
