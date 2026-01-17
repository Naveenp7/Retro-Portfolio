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
        <button
            onClick={() => setIsNegative(!isNegative)}
            className="hard-shadow"
            style={{
                position: 'fixed',
                bottom: '2rem',
                right: '2rem', // Bottom right corner
                zIndex: 2000,
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
    );
};

export default ThemeToggle;
