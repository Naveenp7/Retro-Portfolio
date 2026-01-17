import React, { useEffect, useState } from 'react';

const CustomCursor = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [hovered, setHovered] = useState(false);
    const [clicking, setClicking] = useState(false);

    useEffect(() => {
        const moveCursor = (e) => {
            setPosition({ x: e.clientX, y: e.clientY });
        };

        const mouseDown = () => setClicking(true);
        const mouseUp = () => setClicking(false);

        const addHover = () => setHovered(true);
        const removeHover = () => setHovered(false);

        document.addEventListener('mousemove', moveCursor);
        document.addEventListener('mousedown', mouseDown);
        document.addEventListener('mouseup', mouseUp);

        // Add listeners to clickable elements
        const clickables = document.querySelectorAll('a, button, .project-card, input, textarea');
        clickables.forEach(el => {
            el.addEventListener('mouseenter', addHover);
            el.addEventListener('mouseleave', removeHover);
        });

        return () => {
            document.removeEventListener('mousemove', moveCursor);
            document.removeEventListener('mousedown', mouseDown);
            document.removeEventListener('mouseup', mouseUp);
            clickables.forEach(el => {
                el.removeEventListener('mouseenter', addHover);
                el.removeEventListener('mouseleave', removeHover);
            });
        };
    }, []);

    // Also need to re-attach listeners when DOM changes (simplified approach here)
    // For a robust solution in React, use context or global CSS for cursor: none

    return (
        <>
            <style>{`
                body { cursor: none; }
                a, button, input, textarea { cursor: none; }
            `}</style>
            <div className="custom-cursor-dot" style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '32px',
                height: '32px',
                background: 'var(--color-primary)', // Using primary orange for visibility
                borderRadius: '50%',
                transform: `translate(${position.x - 16}px, ${position.y - 16}px) scale(${hovered ? 2.5 : 1})`,
                pointerEvents: 'none',
                zIndex: 9999,
                mixBlendMode: 'difference', // This creates the cool inverted color effect
                transition: 'transform 0.15s ease-out',
                border: '2px solid white'
            }}></div>
            <div className="custom-cursor-dot" style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '8px',
                height: '8px',
                background: 'white',
                borderRadius: '50%',
                transform: `translate(${position.x - 4}px, ${position.y - 4}px)`,
                pointerEvents: 'none',
                zIndex: 10000,
                mixBlendMode: 'difference'
            }}></div>
        </>
    );
};

export default CustomCursor;
