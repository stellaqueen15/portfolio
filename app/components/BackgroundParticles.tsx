"use client";

import { motion } from "framer-motion";

const particles = [
    { x: "8%", y: "18%", size: 10, delay: 0, duration: 7 },
    { x: "18%", y: "72%", size: 7, delay: 1.5, duration: 9 },
    { x: "29%", y: "35%", size: 12, delay: 2, duration: 8 },
    { x: "42%", y: "15%", size: 7, delay: 0.8, duration: 10 },
    { x: "55%", y: "68%", size: 11, delay: 2.5, duration: 8 },
    { x: "67%", y: "25%", size: 8, delay: 1, duration: 7 },
    { x: "78%", y: "55%", size: 13, delay: 3, duration: 9 },
    { x: "90%", y: "18%", size: 7, delay: 1.8, duration: 8 },
    { x: "92%", y: "78%", size: 11, delay: 0.5, duration: 10 },
    { x: "12%", y: "45%", size: 8, delay: 2.2, duration: 9 },
];

export default function BackgroundParticles() {
    return (
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
            {particles.map((particle, index) => (
                <motion.span
                    key={index}
                    className="absolute rounded-full bg-white/70 blur-[1px]"
                    style={{
                        left: particle.x,
                        top: particle.y,
                        width: particle.size,
                        height: particle.size,
                    }}
                    animate={{
                        x: [0, 16, -10, 0],
                        y: [0, -18, 10, 0],
                        opacity: [0.3, 0.9, 0.45, 0.3],
                        scale: [1, 1.25, 0.85, 1],
                    }}
                    transition={{
                        duration: particle.duration,
                        delay: particle.delay,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />
            ))}
        </div>
    );
}