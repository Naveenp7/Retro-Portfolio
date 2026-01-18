import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Github, ExternalLink } from 'lucide-react';
import MagneticButton from './MagneticButton';

const AppStoryModal = ({ activeIndex, apps, onClose, onNavigate }) => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    // 1. Handle Key Navigation
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'Escape') onClose();
            if (e.key === 'ArrowRight') onNavigate((activeIndex + 1) % apps.length);
            if (e.key === 'ArrowLeft') onNavigate((activeIndex - 1 + apps.length) % apps.length);
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [activeIndex, apps.length, onClose, onNavigate]);

    if (activeIndex === null) return null;

    const app = apps[activeIndex];

    // Variants
    const slideVariants = {
        enter: (direction) => ({
            x: direction > 0 ? 500 : -500,
            opacity: 0,
            scale: 0.8
        }),
        center: {
            zIndex: 1,
            x: 0,
            opacity: 1,
            scale: 1,
            transition: { type: 'spring', stiffness: 300, damping: 30 }
        },
        exit: (direction) => ({
            zIndex: 0,
            x: direction < 0 ? 500 : -500,
            opacity: 0,
            scale: 0.8,
            transition: { duration: 0.2 }
        })
    };

    return createPortal(
        <div style={{
            position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh',
            background: '#0a0a0a',
            zIndex: 9999,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            overflowY: 'auto' // Allow scroll if content needs it
        }}>
            {/* Close Button */}
            <button
                onClick={onClose}
                style={{
                    position: 'absolute', top: '1.5rem', right: '1.5rem',
                    background: 'rgba(255,255,255,0.1)', border: 'none', color: 'white',
                    width: '40px', height: '40px', borderRadius: '50%',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    cursor: 'pointer', zIndex: 20
                }}
            >
                <X size={24} />
            </button>

            {/* MAIN CONTENT WRAPPER */}
            <div style={{
                display: 'flex',
                flexDirection: isMobile ? 'column' : 'row',
                alignItems: 'center',
                justifyContent: 'center',
                gap: isMobile ? '2rem' : '4rem',
                maxWidth: '1200px',
                width: '100%',
                padding: isMobile ? '4rem 1rem 2rem 1rem' : '2rem',
                minHeight: '100%'
            }}>

                {/* 1. Phone Container */}
                <div style={{
                    flex: '0 0 auto',
                    position: 'relative',
                    zIndex: 2,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    {/* Navigation Arrows (Mobile: Float on sides, Desktop: Outside) */}
                    {isMobile && (
                        <>
                            <button
                                onClick={(e) => { e.stopPropagation(); onNavigate((activeIndex - 1 + apps.length) % apps.length); }}
                                style={{
                                    position: 'absolute', left: '-1rem', top: '50%', transform: 'translateY(-50%)',
                                    background: 'rgba(255,255,255,0.9)', borderRadius: '50%',
                                    width: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center',
                                    border: 'none', zIndex: 20, boxShadow: '0 4px 12px rgba(0,0,0,0.3)', color: 'black'
                                }}
                            >
                                <ChevronLeft size={24} />
                            </button>
                            <button
                                onClick={(e) => { e.stopPropagation(); onNavigate((activeIndex + 1) % apps.length); }}
                                style={{
                                    position: 'absolute', right: '-1rem', top: '50%', transform: 'translateY(-50%)',
                                    background: 'rgba(255,255,255,0.9)', borderRadius: '50%',
                                    width: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center',
                                    border: 'none', zIndex: 20, boxShadow: '0 4px 12px rgba(0,0,0,0.3)', color: 'black'
                                }}
                            >
                                <ChevronRight size={24} />
                            </button>
                        </>
                    )}

                    <AnimatePresence mode='wait' custom={1}>
                        <motion.div
                            key={app.id}
                            variants={slideVariants}
                            initial="enter"
                            animate="center"
                            exit="exit"
                            style={{
                                width: isMobile ? '75vw' : '320px',
                                maxWidth: '320px',
                                aspectRatio: '9/19.5', /* Maintain iPhone Aspect Ratio */
                                height: 'auto',
                                border: '4px solid #333',
                                borderRadius: isMobile ? '30px' : '40px',
                                overflow: 'hidden',
                                background: 'black',
                                boxShadow: '0 20px 50px rgba(0,0,0,0.5)',
                                position: 'relative'
                            }}
                        >
                            {/* Dynamic Notch */}
                            <div style={{
                                position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)',
                                width: '35%', height: '4%', background: '#000',
                                borderBottomLeftRadius: '10px', borderBottomRightRadius: '10px',
                                zIndex: 10
                            }} />

                            <img
                                src={app.image}
                                alt={app.title}
                                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                            />
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* 2. Details Container */}
                <div style={{
                    flex: 1,
                    color: 'white',
                    maxWidth: '600px',
                    width: '100%',
                    textAlign: isMobile ? 'center' : 'left',
                    paddingBottom: isMobile ? '4rem' : '0'
                }}>
                    <AnimatePresence mode='wait'>
                        <motion.div
                            key={app.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ delay: 0.1 }}
                        >
                            <h2 style={{
                                fontSize: isMobile ? '2rem' : '3rem',
                                fontWeight: '900',
                                marginBottom: '1rem',
                                lineHeight: 1.1,
                                marginTop: isMobile ? '0' : '0'
                            }}>
                                {app.title}
                            </h2>

                            <div style={{
                                display: 'flex',
                                gap: '0.6rem',
                                flexWrap: 'wrap',
                                marginBottom: '2rem',
                                justifyContent: isMobile ? 'center' : 'flex-start'
                            }}>
                                {app.tags.map(tag => (
                                    <span key={tag} style={{
                                        padding: '0.3rem 0.8rem',
                                        background: 'rgba(255,255,255,0.08)',
                                        border: '1px solid rgba(255,255,255,0.15)',
                                        borderRadius: '20px',
                                        fontSize: '0.8rem',
                                        fontWeight: '600',
                                        color: '#ccc'
                                    }}>
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            <div style={{ marginBottom: '2rem' }}>
                                <h3 style={{ color: 'var(--color-primary)', fontSize: '0.9rem', marginBottom: '0.5rem', letterSpacing: '1px' }}>THE CHALLENGE</h3>
                                <p style={{ lineHeight: '1.6', opacity: 0.8, marginBottom: '1.5rem', fontSize: isMobile ? '0.95rem' : '1rem' }}>
                                    {app.details.challenge}
                                </p>

                                <h3 style={{ color: 'var(--color-primary)', fontSize: '0.9rem', marginBottom: '0.5rem', letterSpacing: '1px' }}>THE SOLUTION</h3>
                                <p style={{ lineHeight: '1.6', opacity: 0.8, fontSize: isMobile ? '0.95rem' : '1rem' }}>
                                    {app.details.solution}
                                </p>
                            </div>

                            {/* Buttons */}
                            <div style={{
                                display: 'flex',
                                gap: '1rem',
                                justifyContent: isMobile ? 'center' : 'flex-start'
                            }}>
                                <MagneticButton href="#" style={{
                                    padding: '0.8rem 1.6rem', background: 'white', color: 'black', fontWeight: 'bold',
                                    borderRadius: '30px', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem'
                                }}>
                                    <ExternalLink size={16} /> DEMO
                                </MagneticButton>
                                <MagneticButton href="#" style={{
                                    padding: '0.8rem 1.6rem', background: 'transparent', color: 'white', fontWeight: 'bold',
                                    border: '1px solid rgba(255,255,255,0.5)', borderRadius: '30px', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem'
                                }}>
                                    <Github size={16} /> CODE
                                </MagneticButton>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>

            {/* Desktop Navigation Arrows (Fixed Position) */}
            {!isMobile && (
                <>
                    <button
                        onClick={() => onNavigate((activeIndex - 1 + apps.length) % apps.length)}
                        style={{
                            position: 'absolute', left: '3rem',
                            background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '50%',
                            width: '56px', height: '56px', display: 'flex', alignItems: 'center', justifyContent: 'center',
                            cursor: 'pointer', zIndex: 10, color: 'white', transition: 'all 0.2s'
                        }}
                    >
                        <ChevronLeft size={32} />
                    </button>

                    <button
                        onClick={() => onNavigate((activeIndex + 1) % apps.length)}
                        style={{
                            position: 'absolute', right: '3rem',
                            background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '50%',
                            width: '56px', height: '56px', display: 'flex', alignItems: 'center', justifyContent: 'center',
                            cursor: 'pointer', zIndex: 10, color: 'white', transition: 'all 0.2s'
                        }}
                    >
                        <ChevronRight size={32} />
                    </button>
                </>
            )}
        </div>,
        document.body
    );
};

export default AppStoryModal;
