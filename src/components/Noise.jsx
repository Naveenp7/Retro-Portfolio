import React, { useState, useEffect } from 'react';

const Noise = () => {
    // FIX: Check window immediately during initialization to prevent "Flash of Heavy Content"
    const [isMobile, setIsMobile] = useState(() =>
        typeof window !== 'undefined' ? window.innerWidth < 768 : false
    );

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    if (isMobile) return null;

    return (
        <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            pointerEvents: 'none',
            zIndex: 9999,
            opacity: 0.05,
            background: 'url("/noise.gif")', // Make sure this asset exists, or use CSS noise
            mixBlendMode: 'overlay'
        }} />
    );
};

export default Noise;
