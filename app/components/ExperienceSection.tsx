const experiences = [
    {
        date: "Févr. 2026 - Aujourd’hui",
        title: "Développeuse web junior",
        company: "Echos Virtuels",
        type: "Expérience professionnelle",
        tags: ["Web", "Frontend", "Backend"],
        details: [
            "60 000+ utilisateurs sur une application en production",
            "Modélisation de données relationnelles",
            "Composants UI accessibles & tests automatisés",
            "Implémentation de fonctionnalités complexes",
        ],
    },
    {
        date: "2022 - 2025",
        title: "DEC en Informatique",
        company: "Collège Ahuntsic",
        type: "Formation",
        tags: ["Web", "Mobile", "UI/UX"],
        details: [
            "Développement d’applications web et mobiles",
            "Conception et structuration de bases de données",
            "Programmation orientée objet",
            "Conception d’interfaces et expérience utilisateur",
            "Travail sur des projets individuels et en équipe",
        ],
    },
    {
        date: "Mars 2025 - Mai 2025",
        title: "Stagiaire en développement web",
        company: "Nuagerie Inc.",
        type: "Stage",
        tags: ["Web", "Frontend", "API"],
        details: [
            "Conception et développement de landing pages",
            "Refonte et amélioration d’interfaces existantes",
            "Internationalisation (i18n) et optimisation des performances",
            "Optimisation du SEO et de l’expérience utilisateur",
        ],
    },
    {
        date: "Juin 2023 - Déc. 2024",
        title: "Graphiste",
        company: "HabboCity",
        type: "Expérience",
        tags: ["Graphisme", "UI", "Design"],
        details: [
            "Création d’éléments graphiques pour la plateforme",
            "Conception d’interfaces et d’éléments visuels",
            "Création de contenus adaptés à l’univers du jeu",
            "Travail autour de l’identité visuelle et de l’expérience utilisateur",
        ],
    },
];

export default function ExperienceSection() {
    return (
        <section
            id="experiences"
            className="relative min-h-screen overflow-hidden px-6 py-20 bg-background">
            <div className="relative z-10 mb-12 text-center">
                <h2 className="text-5xl text-gradient uppercase font-black tracking-tight md:text-7xl">
                    Oui, j&apos;ai travaillé
                </h2>
            </div>

            <div className="relative mx-auto max-w-5xl">
                <div
                    className="absolute left-1/2 top-0 h-full w-1 -translate-x-1/2 rounded-full bg-secondary
                        shadow-[0_0_10px_rgba(255,255,255,0.25)]"
                />

                <div className="relative flex flex-col gap-10 md:gap-4">
                    {experiences.map((experience, index) => {
                        const isLeft = index % 2 === 0;

                        return (
                            <div
                                key={`${experience.company}-${experience.date}`}
                                className="relative grid min-h-37.5 grid-cols-2 items-center"
                            >
                                <div
                                    className={`
                                        ${isLeft
                                        ? "col-start-1 mr-10 text-right"
                                        : "col-start-2 ml-10 text-left"
                                    }
                                    `}
                                >
                                    <details
                                        className="group rounded-[28px] bg-surface shadow-soft p-5"
                                    >
                                        <summary
                                            className="cursor-pointer list-none select-none"
                                        >
                                            <div
                                                className="text-[11px] font-semibold uppercase tracking-wider opacity-60">
                                                {experience.date}
                                            </div>

                                            <h3 className="mt-0.5 text-lg font-black md:text-xl">
                                                {experience.title}
                                            </h3>

                                            <p className="text-sm font-semibold">
                                                {experience.company}
                                            </p>

                                            <div
                                                className={`mt-2 flex flex-wrap items-center gap-1.5 text-[10px] font-semibold
                                                ${isLeft ? "justify-end" : "justify-start"}
                                            `}>
                                                <span className="opacity-70">
                                                    {experience.type}
                                                </span>

                                                <span className="opacity-30">•</span>

                                                {experience.tags.map((tag) => (
                                                    <span
                                                        key={tag}
                                                        className="rounded-md text-primary border border-primary bg-primary/16 px-2 py-0.5 text-[10px]">
                                                        {tag}
                                                    </span>
                                                ))}
                                            </div>

                                            <div className="mt-2 text-[11px] font-semibold opacity-70">
                                                <span className="group-open:hidden">
                                                    + Voir les détails
                                                </span>

                                                <span className="hidden">
                                                    − Réduire
                                                </span>
                                            </div>
                                        </summary>

                                        <div
                                            className="
                                                mt-4 border-t border-white/30
                                                pt-4 text-sm leading-relaxed
                                            "
                                        >
                                            <ul
                                                className={`
                                                    space-y-1.5
                                                    ${isLeft
                                                    ? "list-inside"
                                                    : "list-inside"
                                                }
                                                `}
                                            >
                                                {experience.details.map(
                                                    (detail) => (
                                                        <li key={detail}>
                                                            {detail}
                                                        </li>
                                                    )
                                                )}
                                            </ul>
                                        </div>
                                    </details>
                                </div>

                                {/* Cercle */}
                                <div
                                    className="
                                        absolute left-1/2 top-1/2
                                        z-10
                                        h-7 w-7
                                        -translate-x-1/2
                                        -translate-y-1/2
                                        rounded-full
                                        border-4 border-secondary
                                        bg-white
                                        shadow-[0_3px_10px_rgba(255,137,47,0.4)]
                                    "
                                />

                                <div
                                    className="absolute left-1/2 top-1/2 z-20 h-2.5 w-2.5 -translate-x-1/2
                                        -translate-y-1/2 rounded-full bg-secondary"
                                />
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}