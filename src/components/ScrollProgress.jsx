import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

const ScrollProgress = () => {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    return (
        <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            height: '10px',
            zIndex: 9999,
            background: 'transparent',
        }}>
            {/* Background Track/Ticks */}
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                backgroundImage: 'linear-gradient(90deg, transparent 50%, rgba(0,0,0,0.1) 50%)',
                backgroundSize: '20px 100%', // Ticks every 20px
                borderBottom: '1px solid rgba(0,0,0,0.1)',
                pointerEvents: 'none'
            }} />

            {/* Actual Progress Bar */}
            <motion.div
                style={{
                    scaleX,
                    transformOrigin: "0%",
                    height: '100%',
                    background: 'var(--color-primary)', // Uses theme color
                    // Striped tactical pattern
                    backgroundImage: 'linear-gradient(45deg,rgba(255, 255, 255, 0.15) 25%,transparent 25%,transparent 50%,rgba(255, 255, 255, 0.15) 50%,rgba(255, 255, 255, 0.15) 75%,transparent 75%,transparent)',
                    backgroundSize: '20px 20px',
                }}
            />
        </div>
    );
};

export default ScrollProgress;
