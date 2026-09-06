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

function FloatingItem({
    label,
    x,
    y,
    rotation,
    delay,
    onClick,
    active,
}: (typeof items)[number] & {
    onClick: () => void;
    active: boolean;
}) {
    return (
        <motion.button
            type="button"
            className="absolute hidden cursor-pointer md:block"
            style={{
                left: x,
                top: y,
            }}
            animate={{
                y: [0, -9, 5, 0],
                rotate: [
                    rotation,
                    rotation + 2,
                    rotation - 2,
                    rotation,
                ],
            }}
            transition={{
                duration: 5.5,
                delay,
                repeat: Infinity,
                ease: "easeInOut",
            }}
            whileHover={{
                scale: 1.1,
                rotate: 0,
                y: -5,
            }}
            whileTap={{
                scale: 0.95,
            }}
            onClick={onClick}
        >
            <div
                className={`
rounded-full border px-5 py-3 shadow-soft
transition-colors
${
    active
        ? "border-white bg-white text-[#3c2408]"
        : "border-white/60 bg-light-gradient"
}
`}
            >
                <span className="text-sm font-black uppercase">
                    {label}
                </span>
            </div>
        </motion.button>
    );
}

function Star({
    x,
    y,
    size = "text-xl",
    delay = 0,
}: {
    x: string;
    y: string;
    size?: string;
    delay?: number;
}) {
    return (
        <motion.span
            className={`absolute ${size} text-white`}
            style={{
                left: x,
                top: y,
            }}
            animate={{
                opacity: [0.35, 1, 0.35],
                scale: [0.8, 1.15, 0.8],
            }}
            transition={{
                duration: 2.5,
                delay,
                repeat: Infinity,
                ease: "easeInOut",
            }}
        >
            ✦
        </motion.span>
    );
}

export default function AboutSection() {
    const [activeItem, setActiveItem] = useState<
        (typeof items)[number] | null
    >(null);

    const content = activeItem ?? defaultContent;

    return (
        <section
            id="about"
            className="relative flex min-h-screen items-center overflow-hidden bg-background px-6 py-24"
        >
            <div className="relative mx-auto h-180 w-full max-w-350">
                <motion.div
                    className="absolute left-1/2 top-8 z-20 -translate-x-1/2 text-center"
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-5xl text-gradient uppercase font-black tracking-tight md:text-7xl">
                        Ah oui, j&apos;existe
                    </h2>
                </motion.div>

                {/* Orbite horizontale */}
                <div className="absolute left-1/2 top-1/2 h-100 w-180 -translate-x-1/2 -translate-y-1/2 rounded-[50%] border border-white/20 md:h-115 md:w-212.5" />

                {/* Orbite verticale */}
                <div className="absolute left-1/2 top-1/2 h-130 w-75 -translate-x-1/2 -translate-y-1/2 rotate-25 rounded-[50%] border border-white/10" />

                {/* Petits points */}
                <div className="absolute left-[24%] top-[21%] h-2 w-2 rounded-full bg-white/70" />
                <div className="absolute right-[25%] top-[19%] h-3 w-3 rounded-full bg-white/50" />
                <div className="absolute bottom-[20%] left-[23%] h-3 w-3 rounded-full bg-white/50" />
                <div className="absolute bottom-[24%] right-[21%] h-2 w-2 rounded-full bg-white/70" />

                {/* Éléments personnels */}
                {items.map((item) => (
                    <FloatingItem
                        key={item.label}
                        {...item}
                        active={activeItem?.label === item.label}
                        onClick={() => setActiveItem(item)}
                    />
                ))}

                <Star x="18%" y="15%" delay={0} />
                <Star
                    x="84%"
                    y="17%"
                    delay={0.7}
                    size="text-2xl"
                />
                <Star
                    x="14%"
                    y="49%"
                    delay={1.1}
                    size="text-sm"
                />
                <Star x="88%" y="48%" delay={1.7} />
                <Star
                    x="24%"
                    y="84%"
                    delay={0.4}
                    size="text-2xl"
                />
                <Star
                    x="78%"
                    y="82%"
                    delay={1.3}
                    size="text-sm"
                />

                {/* Mascotte centrale */}
                <motion.button
                    type="button"
                    aria-label="Revenir à la présentation principale"
                    className="absolute left-1/2 top-[53%] z-10 -translate-x-1/2 -translate-y-1/2 cursor-pointer"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                        duration: 0.7,
                        type: "spring",
                    }}
                    whileHover={{
                        scale: 1.05,
                    }}
                    whileTap={{
                        scale: 0.95,
                    }}
                    onClick={() => setActiveItem(null)}
                >
                    <Mascot />
                </motion.button>

                {/* Texte central */}
                <motion.div
                    className="absolute bottom-5 left-1/2 z-20 w-[90%] -translate-x-1/2 text-center md:w-[560px]"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                        duration: 0.6,
                        delay: 0.2,
                    }}
                >
                    <motion.div
                        key={content.title}
                        initial={{
                            opacity: 0,
                            y: 10,
                        }}
                        animate={{
                            opacity: 1,
                            y: 0,
                        }}
                        transition={{
                            duration: 0.3,
                        }}
                    >
                        <p className="text-xl font-black leading-tight md:text-2xl">
                            {content.title}
                        </p>

                        <p className="mx-auto mt-4 max-w-130 text-sm font-semibold leading-relaxed opacity-65">
                            {content.description}
                        </p>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}