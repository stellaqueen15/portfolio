"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Mascot from "./Mascot";

const defaultContent = {
    title: "Coucou, c'est moi.",
    description:
        "Développeuse web junior, créative et curieuse, j'aime comprendre comment les choses fonctionnent et surtout leur donner une vraie personnalité.",
};

const items = [
    {
        label: "Créative",
        x: "7%",
        y: "28%",
        rotation: -6,
        delay: 0,
        title: "J'aime créer.",
        description:
            "J'ai toujours eu un intérêt pour le visuel, le design et la création. Aujourd'hui, j'aime mélanger cette sensibilité avec le développement pour créer des expériences qui ont du caractère.",
    },
    {
        label: "UI / UX",
        x: "78%",
        y: "25%",
        rotation: 5,
        delay: 0.8,
        title: "L'interface, ça compte.",
        description:
            "Je m'intéresse particulièrement à la façon dont une interface fonctionne, se ressent et guide l'utilisateur. J'aime autant réfléchir à l'expérience qu'à la manière de la construire.",
    },
    {
        label: "Curieuse",
        x: "10%",
        y: "67%",
        rotation: 4,
        delay: 1.2,
        title: "Toujours envie d'apprendre.",
        description:
            "Quand quelque chose m'intrigue, j'ai tendance à vouloir comprendre comment ça fonctionne. Nouvelles technos, animations, design ou outils : j'aime expérimenter.",
    },
    {
        label: "Exploratrice",
        x: "80%",
        y: "65%",
        rotation: -5,
        delay: 0.4,
        title: "J'aime découvrir.",
        description:
            "J'aime sortir, découvrir de nouveaux endroits et tester de nouvelles expériences : un resto, une activité, un quartier que je ne connais pas encore... Je suis toujours partante pour explorer.",
    },
];

const mobilePositions = [
    { x: "3%", y: "27%" },
    { x: "74%", y: "27%" },
    { x: "4%", y: "56%" },
    { x: "74%", y: "56%" },
];

function FloatingItem({ label, x, y, rotation, delay, onClick, active }: (typeof items)[number] & { onClick: () => void; active: boolean }) {
    return (
        <motion.button
            type="button"
            className="absolute cursor-pointer"
            style={{ left: x, top: y }}
            animate={{ y: [0, -9, 5, 0], rotate: [rotation, rotation + 2, rotation - 2, rotation] }}
            transition={{ duration: 5.5, delay, repeat: Infinity, ease: "easeInOut" }}
            whileHover={{ scale: 1.1, rotate: 0, y: -5 }}
            whileTap={{ scale: 0.95 }}
            onClick={onClick}
        >
            <div className={`rounded-full border px-3 py-2 shadow-soft transition-colors sm:px-4 sm:py-2.5 md:px-5
                md:py-3 ${active ? "border-white bg-white text-[#3c2408]" : "border-white/60 bg-light-gradient"}`}>
                <span className="text-[10px] font-black uppercase sm:text-xs md:text-sm">
                    {label}
                </span>
            </div>
        </motion.button>
    );
}

function Star({ x, y, size = "text-xl", delay = 0 }: { x: string; y: string; size?: string; delay?: number }) {
    return (
        <motion.span
            className={`absolute ${size} text-white`}
            style={{ left: x, top: y }}
            animate={{ opacity: [0.35, 1, 0.35], scale: [0.8, 1.15, 0.8] }}
            transition={{ duration: 2.5, delay, repeat: Infinity, ease: "easeInOut" }}>
            ✦
        </motion.span>
    );
}

export default function AboutSection() {
    const [activeItem, setActiveItem] = useState<(typeof items)[number] | null>(null);

    const content = activeItem ?? defaultContent;

    return (
        <section
            id="about-me"
            className="relative flex min-h-screen items-center overflow-hidden bg-background px-4 py-20
                sm:px-6 sm:py-24"
        >
            <div className="relative mx-auto h-170 w-full max-w-350 sm:h-185 md:h-180">
                <motion.div
                    className="absolute left-1/2 top-4 z-20 w-full -translate-x-1/2 text-center sm:top-6 md:top-8"
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }
                }>
                    <h2 className="p-2 text-4xl font-black uppercase tracking-tight text-gradient sm:p-3
                        sm:text-5xl md:p-6 md:text-7xl">
                        Ah oui, j&apos;existe
                    </h2>
                </motion.div>

                <div className="absolute left-1/2 top-[45%] h-65 w-[92%] -translate-x-1/2 -translate-y-1/2
                    rounded-[50%] border border-white/20 sm:h-80 sm:w-[88%] md:top-1/2 md:h-115 md:w-212.5" />

                <div className="absolute left-1/2 top-[45%] h-95 w-55 -translate-x-1/2 -translate-y-1/2 rotate-25
                    rounded-[50%] border border-white/10 sm:h-110 sm:w-65 md:top-1/2 md:h-130 md:w-75" />

                <div className="absolute left-[18%] top-[19%] h-1.5 w-1.5 rounded-full bg-white/70
                    sm:left-[24%] sm:h-2 sm:w-2" />
                <div className="absolute right-[18%] top-[18%] h-2 w-2 rounded-full bg-white/50 sm:right-[25%]
                    sm:h-3 sm:w-3" />
                <div className="absolute bottom-[23%] left-[17%] h-2 w-2 rounded-full bg-white/50 sm:left-[23%]
                    sm:h-3 sm:w-3" />
                <div className="absolute bottom-[25%] right-[17%] h-1.5 w-1.5 rounded-full bg-white/70 sm:right-[21%]
                    sm:h-2 sm:w-2" />

                <div className="md:hidden">
                    {items.map((item, index) => {
                        const position = mobilePositions[index];

                        return (
                            <FloatingItem
                                key={item.label}
                                {...item}
                                {...position}
                                active={activeItem?.label === item.label}
                                onClick={() => setActiveItem(item)}
                            />
                        );
                    })}
                </div>

                <div className="hidden md:block">
                    {items.map((item) => (
                        <FloatingItem
                            key={item.label}
                            {...item}
                            active={activeItem?.label === item.label}
                            onClick={() => setActiveItem(item)}
                        />
                    ))}
                </div>

                <Star x="18%" y="15%" delay={0} size="text-lg sm:text-xl" />
                <Star x="84%" y="17%" delay={0.7} size="text-xl sm:text-2xl" />
                <Star x="14%" y="49%" delay={1.1} size="text-xs sm:text-sm" />
                <Star x="88%" y="48%" delay={1.7} size="text-lg sm:text-xl" />
                <Star x="24%" y="84%" delay={0.4} size="text-xl sm:text-2xl" />
                <Star x="78%" y="82%" delay={1.3} size="text-xs sm:text-sm" />

                <motion.button type="button" aria-label="Revenir à la présentation principale" className="absolute left-1/2 top-[45%] z-10 -translate-x-1/2 -translate-y-1/2 cursor-pointer sm:top-[45%] md:top-[53%]" initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.7, type: "spring" }} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} onClick={() => setActiveItem(null)}>
                    <Mascot />
                </motion.button>

                <motion.div
                    className="absolute bottom-3 left-1/2 z-20 w-[92%] -translate-x-1/2 text-center sm:bottom-5
                        sm:w-[85%] md:w-140"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <motion.div
                        key={content.title}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        <p className="text-lg font-black leading-tight sm:text-xl md:text-2xl">
                            {content.title}
                        </p>

                        <p className="mx-auto mt-3 max-w-130 text-xs font-semibold leading-relaxed opacity-65
                            sm:mt-4 sm:text-sm"
                        >
                            {content.description}
                        </p>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}