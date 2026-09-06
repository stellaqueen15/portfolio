"use client";

import { motion } from "framer-motion";
import type { IconType } from "react-icons";

type SkillBubbleProps = {
    name: string;
    icon: IconType;
    size: "xl" | "lg" | "md" | "sm";
    x: string;
    y: string;
    delay?: number;
    duration?: number;
    rotation?: number;
};

const sizeStyles = {
    xl: {
        bubble: "h-28 w-28 md:h-36 md:w-36",
        icon: "text-4xl md:text-5xl",
        text: "text-sm md:text-base",
    },
    lg: {
        bubble: "h-24 w-24 md:h-30 md:w-30",
        icon: "text-3xl md:text-4xl",
        text: "text-xs md:text-sm",
    },
    md: {
        bubble: "h-20 w-20 md:h-24 md:w-24",
        icon: "text-2xl md:text-3xl",
        text: "text-[11px] md:text-xs",
    },
    sm: {
        bubble: "h-16 w-16 md:h-20 md:w-20",
        icon: "text-xl md:text-2xl",
        text: "text-[10px] md:text-xs",
    },
};

export default function SkillBubble({
    name,
    icon: Icon,
    size,
    x,
    y,
    delay = 0,
    duration = 5,
    rotation = 0,
}: SkillBubbleProps) {
    const styles = sizeStyles[size];

    return (
        <motion.div
            className="absolute"
            style={{
                left: x,
                top: y,
            }}
            animate={{
                x: [0, 10, -7, 0],
                y: [0, -12, 6, 0],
                rotate: [
                    rotation,
                    rotation + 2,
                    rotation - 2,
                    rotation,
                ],
            }}
            transition={{
                duration,
                delay,
                repeat: Infinity,
                ease: "easeInOut",
            }}
        >
            <motion.div
                whileHover={{
                    scale: 1.12,
                    rotate: 0,
                }}
                transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 15,
                }}
                className={`${styles.bubble} flex flex-col items-center justify-center gap-1 rounded-full border 
                    border-white/60 bg-light-gradient p-3 text-center shadow-soft cursor-default
                `}
            >
                <Icon className={styles.icon} />

                <span className={`${styles.text} font-black`}>
                    {name}
                </span>
            </motion.div>
        </motion.div>
    );
}