import React, { useRef, useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

const TiltCard = ({ children, className, style }) => {
    const ref = useRef(null);
    const [isMobile, setIsMobile] = useState(true); // Default to true (safe) to avoid flash

    useEffect(() => {
        // Check for touch capability and screen size
        setIsMobile(window.matchMedia("(hover: none) and (pointer: coarse)").matches || window.innerWidth < 768);
    }, []);

    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseX = useSpring(x, { stiffness: 150, damping: 15 });
    const mouseY = useSpring(y, { stiffness: 150, damping: 15 });

    const rotateX = useTransform(mouseY, [-0.5, 0.5], ["7.5deg", "-7.5deg"]);
    const rotateY = useTransform(mouseX, [-0.5, 0.5], ["-7.5deg", "7.5deg"]);

    const handleMouseMove = (e) => {
        if (isMobile) return; // STOP CALCULATION ON MOBILE

        const rect = ref.current.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const mouseXRatio = (e.clientX - rect.left) / width - 0.5;
        const mouseYRatio = (e.clientY - rect.top) / height - 0.5;

        x.set(mouseXRatio);
        y.set(mouseYRatio);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                transformStyle: isMobile ? "flat" : "preserve-3d", // Disable 3D context on mobile
                rotateX: isMobile ? 0 : rotateX, // Force 0 rotation
                rotateY: isMobile ? 0 : rotateY,
                ...style
            }}
            className={className}
        >
            {/* Disable Z-transform on mobile child too */}
            <div style={{
                transform: isMobile ? "none" : "translateZ(30px)",
                transformStyle: isMobile ? "flat" : "preserve-3d"
            }}>
                {children}
            </div>
        </motion.div>
    );
};

export default TiltCard;
