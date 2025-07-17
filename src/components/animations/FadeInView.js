'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function FadeInView({
    children,
    delay = 0,
    duration = 0.8,
    direction = 'up',
    blur = true,
    scale = true,
    className = '',
    ...props
}) {
    const ref = useRef(null);
    const isInView = useInView(ref, {
        once: true,
        amount: 0.1,
        margin: "-100px"
    });

    // Configurazioni per le direzioni
    const directions = {
        up: { y: 60, x: 0 },
        down: { y: -60, x: 0 },
        left: { x: 60, y: 0 },
        right: { x: -60, y: 0 },
        none: { x: 0, y: 0 }
    };

    const initialState = {
        opacity: 0,
        ...directions[direction],
        ...(blur && { filter: 'blur(8px)' }),
        ...(scale && { scale: 0.95 })
    };

    const animateState = {
        opacity: 1,
        x: 0,
        y: 0,
        ...(blur && { filter: 'blur(0px)' }),
        ...(scale && { scale: 1 })
    };

    return (
        <motion.div
            ref={ref}
            initial={initialState}
            animate={isInView ? animateState : initialState}
            transition={{
                duration,
                delay,
                ease: [0.25, 0.1, 0.25, 1], // Bezier curve per movimento naturale
                filter: { duration: duration * 0.6 } // Blur si risolve più velocemente
            }}
            className={className}
            {...props}
        >
            {children}
        </motion.div>
    );
}
