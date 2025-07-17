'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function StaggerContainer({
    children,
    staggerDelay = 0.1,
    className = '',
    ...props
}) {
    const ref = useRef(null);
    const isInView = useInView(ref, {
        once: true,
        amount: 0.1
    });

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: staggerDelay,
                delayChildren: 0.2
            }
        }
    };

    return (
        <motion.div
            ref={ref}
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className={className}
            {...props}
        >
            {children}
        </motion.div>
    );
}

// Componente figlio per elementi staggered
export function StaggerItem({
    children,
    direction = 'up',
    blur = true,
    className = '',
    ...props
}) {
    const directions = {
        up: { y: 50, x: 0 },
        down: { y: -50, x: 0 },
        left: { x: 50, y: 0 },
        right: { x: -50, y: 0 }
    };

    const itemVariants = {
        hidden: {
            opacity: 0,
            ...directions[direction],
            ...(blur && { filter: 'blur(6px)' }),
            scale: 0.9
        },
        visible: {
            opacity: 1,
            x: 0,
            y: 0,
            ...(blur && { filter: 'blur(0px)' }),
            scale: 1,
            transition: {
                duration: 0.6,
                ease: [0.25, 0.1, 0.25, 1]
            }
        }
    };

    return (
        <motion.div
            variants={itemVariants}
            className={className}
            {...props}
        >
            {children}
        </motion.div>
    );
}
