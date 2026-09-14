"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function AnimatedProject({ children, className, index }: { children: React.ReactNode; className?: string; index: number }) {
    const ref = useRef<HTMLElement>(null);

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "center center"],
    });

    const x = useTransform(
        scrollYProgress,
        [0, 1],
        [index % 2 === 0 ? -80 : 80, 0]
    );

    // When scroll progress goes from 0 to 1, move from 80px to 0px.
    const y = useTransform(scrollYProgress, [0, 1], [80, 0]);

    // When scroll progress goes from 0 to 0.7, fade from 0 to 1.
    const opacity = useTransform(scrollYProgress, [0, 0.7], [0, 1]);
    const scale = useTransform(scrollYProgress, [0, 1], [0.9, 1]);
    const rotate = useTransform(
        scrollYProgress,
        [0, 1],
        [index % 2 === 0 ? -4 : 4, 0]
    );

    return (
        <motion.article
            ref={ref}
            className={className}
            style={{
                x,
                y,
                opacity,
                scale,
                rotate,
            }}
        >
            {children}
        </motion.article>
    );
}