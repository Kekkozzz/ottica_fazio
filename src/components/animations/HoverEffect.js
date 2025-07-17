'use client';

import { motion } from 'framer-motion';

export default function HoverEffect({
    children,
    scale = 1.05,
    rotate = 0,
    duration = 0.3,
    className = '',
    whileHover,
    whileTap,
    ...props
}) {
    const defaultHover = {
        scale,
        rotate,
        transition: { duration, ease: "easeOut" }
    };

    const defaultTap = {
        scale: 0.95,
        transition: { duration: 0.1, ease: "easeOut" }
    };

    return (
        <motion.div
            whileHover={whileHover || defaultHover}
            whileTap={whileTap || defaultTap}
            className={className}
            {...props}
        >
            {children}
        </motion.div>
    );
}
