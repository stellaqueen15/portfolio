"use client";

import { motion } from "framer-motion";
import BackgroundParticles from "@/app/components/ui/BackgroundParticles";

const floatingItems = [
    {
        label: "✦ Frontend",
        className: "left-[5%] top-[25%] sm:left-[8%] md:left-[10%] md:top-[28%]",
        delay: 0,
        duration: 6,
        rotate: -5,
    },
    {
        label: "UI / UX",
        className: "right-[4%] top-[20%] sm:right-[8%] md:right-[11%] md:top-[24%]",
        delay: 0.8,
        duration: 7,
        rotate: 5,
    },
    {
        label: "Vue.js",
        className: "left-[7%] top-[65%] sm:left-[12%] md:left-[15%] md:top-[68%]",
        delay: 1.2,
        duration: 6.5,
        rotate: 4,
    },
    {
        label: "React",
        className: "right-[6%] top-[62%] sm:right-[12%] md:right-[15%] md:top-[67%]",
        delay: 0.4,
        duration: 7.5,
        rotate: -4,
    },
    {
        label: "Créative ✦",
        className: "left-[18%] top-[16%] sm:left-[23%] md:left-[26%] md:top-[17%]",
        delay: 1.6,
        duration: 8,
        rotate: 3,
    },
    {
        label: "✦ Curieuse",
        className: "right-[17%] top-[72%] sm:right-[22%] md:right-[25%] md:top-[76%]",
        delay: 2,
        duration: 6.8,
        rotate: -3,
    },
];

export default function HeroSection() {
    return (
        <section className="relative flex h-screen min-h-150 items-center justify-center overflow-hidden bg-background px-4 sm:px-6">
            <BackgroundParticles />

            <div className="pointer-events-none absolute inset-0">
                {floatingItems.map((item) => (
                    <motion.div
                        key={item.label}
                        className={`absolute ${item.className}`}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{
                            opacity: 1,
                            scale: 1,
                            y: [0, -10, 5, 0],
                            rotate: [item.rotate, item.rotate + 2, item.rotate - 2, item.rotate],
                        }}
                        transition={{
                            opacity: {
                                duration: 0.6,
                                delay: item.delay,
                            },
                            scale: {
                                duration: 0.6,
                                delay: item.delay,
                                ease: "backOut",
                            },
                            y: {
                                duration: item.duration,
                                delay: item.delay,
                                repeat: Infinity,
                                ease: "easeInOut",
                            },
                            rotate: {
                                duration: item.duration + 1,
                                delay: item.delay,
                                repeat: Infinity,
                                ease: "easeInOut",
                            },
                        }}
                    >
                        <div className="rounded-full bg-white/85 px-3 py-1.5 text-xs font-bold text-foreground shadow-[2px_3px_0px_rgba(60,36,8,0.12)] backdrop-blur-sm sm:px-4 sm:py-2 sm:text-sm md:text-base">
                            {item.label}
                        </div>
                    </motion.div>
                ))}
            </div>

            <div className="relative z-10 w-full text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <h1 className="text-5xl font-black uppercase leading-[0.75] tracking-tighter sm:text-6xl md:text-8xl lg:text-[9rem]">
                        <span className="inline-block w-full text-gradient">
                            Brenda
                        </span>

                        <br />

                        <span className="inline-block px-2 py-4 text-4xl text-gradient sm:px-4 sm:py-5 sm:text-5xl md:px-6 md:py-6 md:text-7xl lg:text-[6.5rem]">
                            Développeuse web
                        </span>
                    </h1>

                    <p className="mt-6 text-sm font-bold uppercase tracking-wide text-foreground/60 sm:mt-8 sm:text-base md:text-lg">
                        Je fais des sites. Des fois, ils sont même beaux.
                    </p>
                </motion.div>
            </div>

            <motion.div
                className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2 text-xs font-bold uppercase tracking-widest text-foreground/50 sm:bottom-8 sm:text-sm"
                animate={{ y: [0, 6, 0] }}
                transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            >
                ↓ Scroll
            </motion.div>
        </section>
    );
}