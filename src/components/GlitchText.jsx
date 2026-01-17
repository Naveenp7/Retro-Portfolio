import React, { useState } from 'react';
import { motion } from 'framer-motion';

const GlitchText = ({ text, style, className }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className={className}
            style={{ position: 'relative', display: 'inline-block', ...style }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <span style={{ position: 'relative', zIndex: 10 }}>{text}</span>

            {/* Red Glitch Layer */}
            <motion.span
                initial={{ x: 0, opacity: 0 }}
                animate={isHovered ? { x: -2, opacity: 0.8, color: 'var(--color-secondary)' } : { x: 0, opacity: 0 }}
                transition={{ duration: 0.1, type: "tween" }}
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    zIndex: 1,
                    pointerEvents: 'none',
                    // mixBlendMode removed to prevent flicker
                }}
            >
                {text}
            </motion.span>

            {/* Blue Glitch Layer */}
            <motion.span
                initial={{ x: 0, opacity: 0 }}
                animate={isHovered ? { x: 2, opacity: 0.8, color: 'var(--color-primary)' } : { x: 0, opacity: 0 }}
                transition={{ duration: 0.1, type: "tween" }}
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    zIndex: 1,
                    pointerEvents: 'none',
                    // mixBlendMode removed to prevent flicker
                }}
            >
                {text}
            </motion.span>
        </div>
    );
};

export default GlitchText;
