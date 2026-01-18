import React, { useEffect, useState } from 'react';
import { Sun, Moon } from 'lucide-react';

const ThemeToggle = () => {
    const [isNegative, setIsNegative] = useState(false);

    useEffect(() => {
        if (isNegative) {
            document.body.classList.add('negative-mode');
        } else {
            document.body.classList.remove('negative-mode');
        }
    }, [isNegative]);

    return (
        <>
            <button
                onClick={() => setIsNegative(!isNegative)}
                className="theme-toggle-btn hard-shadow"
                style={{
                    position: 'fixed',
                    zIndex: 900,
                    background: 'var(--color-surface)',
                    border: 'var(--border-thick)',
                    color: 'var(--color-text)',
                    padding: '0.8rem',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
                title={isNegative ? "Switch to Light Mode" : "Switch to Negative Mode"}
            >
                {isNegative ? <Sun size={24} /> : <Moon size={24} />}
            </button>
            <style jsx>{`
                .theme-toggle-btn {
                    bottom: 2rem;
                    right: 2rem;
                }
                @media (max-width: 768px) {
                    .theme-toggle-btn {
                        bottom: 7rem !important; /* Move up to clear the dock */
                        right: 1.5rem !important;
                    }
                }
            `}</style>
        </>
    );
};

export default ThemeToggle;
