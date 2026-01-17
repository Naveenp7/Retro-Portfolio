import React from 'react';
import { motion } from 'framer-motion';

const DraggableSticker = ({ children, className, style }) => {
    return (
        <motion.div
            drag
            dragElastic={0.2}
            whileHover={{ scale: 1.1, cursor: 'grab' }}
            whileDrag={{ scale: 1.2, cursor: 'grabbing' }}
            className={className}
            style={style}
        >
            {children}
        </motion.div>
    );
};

export default DraggableSticker;
