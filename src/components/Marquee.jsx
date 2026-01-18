import React from 'react';

const Marquee = ({ text, bgColor = 'var(--color-primary)', textColor = 'white', rotate = 0, top, bottom, position = 'absolute' }) => {
    return (
        <div className="marquee-container" style={{
            position: position,
            width: position === 'relative' ? '100%' : '105%', // Wider if absolute to cover rotation gaps
            background: bgColor,
            color: textColor,
            padding: '0.8rem 0',
            borderTop: 'var(--border-thick)',
            borderBottom: 'var(--border-thick)',
            transform: `rotate(${rotate}deg)`,
            top: top,
            bottom: bottom,
            left: position === 'relative' ? '0' : '-2.5%', // Center if relative
            zIndex: 0,
            overflow: 'hidden',
            display: 'flex',
            alignItems: 'center', // Vertically center text
            whiteSpace: 'nowrap',
        }}>
            <div className="marquee-content" style={{
                display: 'flex',
                animation: 'scroll 15s linear infinite',
                fontWeight: '900',
                fontSize: '1.5rem',
                textTransform: 'uppercase',
                gap: '2rem'
            }}>
                {/* Repeated content for seamless loop */}
                {Array(10).fill(text).map((item, i) => (
                    <span key={i} style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
                        {item} <span>✦</span>
                    </span>
                ))}
            </div>

            <style>{`
            @keyframes scroll {
                0% { transform: translateX(0); }
                100% { transform: translateX(-50%); }
            }
        `}</style>
        </div>
    );
};

export default Marquee;
