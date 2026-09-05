const experiences = [
    {
        date: "Févr. 2026 — Aujourd’hui",
        title: "Développeuse web junior",
        company: "Echos Virtuels",
        type: "Expérience professionnelle",
        tags: ["Web", "Frontend", "Backend"],
        details: [
            "Développement et maintenance d’applications web",
            "Intégration de nouvelles fonctionnalités",
            "Travail avec des APIs et des bases de données",
            "Correction et optimisation de fonctionnalités existantes",
            "Participation à différentes étapes du développement",
        ],
    },
    {
        date: "2022 — 2025",
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
        date: "Mars 2025 — Mai 2025",
        title: "Stagiaire en développement web",
        company: "Nuagerie Inc.",
        type: "Stage",
        tags: ["Web", "Frontend", "API"],
        details: [
            "Développement et intégration de fonctionnalités web",
            "Participation à l’amélioration d’interfaces existantes",
            "Travail avec des APIs",
            "Correction de problèmes et ajustements techniques",
        ],
    },
    {
        date: "Juin 2023 — Déc. 2024",
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
            className="
                relative min-h-screen overflow-hidden
                px-6 py-20
            "
        >
            {/* Titre */}
            <div className="relative z-10 mb-12 text-center">
                <p className="mb-2 text-sm font-semibold uppercase tracking-widest opacity-60">
                    Mon parcours
                </p>

                <h2 className="text-5xl font-black tracking-tight md:text-7xl">
                    Expériences
                </h2>
            </div>

            {/* Timeline */}
            <div className="relative mx-auto max-w-5xl">

                {/* Ligne centrale */}
                <div
                    className="
                        absolute left-1/2 top-0 h-full w-[4px]
                        -translate-x-1/2
                        rounded-full
                        bg-white/50
                        shadow-[0_0_10px_rgba(255,255,255,0.25)]
                    "
                />

                <div className="relative flex flex-col gap-10 md:gap-4">
                    {experiences.map((experience, index) => {
                        const isLeft = index % 2 === 0;

                        return (
                            <div
                                key={`${experience.company}-${experience.date}`}
                                className="
                                    relative grid min-h-[150px]
                                    grid-cols-2 items-center
                                "
                            >
                                {/* Carte */}
                                <div
                                    className={`
                                        ${isLeft
                                        ? "col-start-1 mr-10 text-right"
                                        : "col-start-2 ml-10 text-left"
                                    }
                                    `}
                                >
                                    <details
                                        className="
                                            group
                                            rounded-[28px]
                                            bg-white/30
                                            p-5
                                            backdrop-blur-md
                                            transition-all
                                            duration-300
                                            hover:bg-white/40
                                            hover:shadow-[0_8px_25px_rgba(255,137,47,0.15)]
                                        "
                                    >
                                        <summary
                                            className="
                                                cursor-pointer
                                                list-none
                                                select-none
                                            "
                                        >
                                            <div className="text-xs font-semibold uppercase tracking-wider opacity-60">
                                                {experience.date}
                                            </div>

                                            <h3 className="mt-1 text-xl font-black md:text-2xl">
                                                {experience.title}
                                            </h3>

                                            <p className="font-semibold opacity-70">
                                                {experience.company}
                                            </p>

                                            <div
                                                className={`
                                                    mt-3 flex flex-wrap gap-1.5
                                                    ${isLeft
                                                    ? "justify-end"
                                                    : "justify-start"
                                                }
                                                `}
                                            >
                                                {experience.tags.map((tag) => (
                                                    <span
                                                        key={tag}
                                                        className="
                                                            rounded-full
                                                            bg-white/60
                                                            px-2.5 py-1
                                                            text-[11px]
                                                            font-semibold
                                                        "
                                                    >
                                                        {tag}
                                                    </span>
                                                ))}
                                            </div>

                                            <div className="mt-3 text-xs font-semibold opacity-50">
                                                <span className="group-open:hidden">
                                                    + Voir les détails
                                                </span>

                                                <span className="hidden group-open:inline">
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
                                        border-4 border-[#FF9A3D]
                                        bg-white
                                        shadow-[0_3px_10px_rgba(255,137,47,0.4)]
                                    "
                                />

                                {/* Petit point décoratif */}
                                <div
                                    className="
                                        absolute left-1/2 top-1/2
                                        z-20
                                        h-2.5 w-2.5
                                        -translate-x-1/2
                                        -translate-y-1/2
                                        rounded-full
                                        bg-[#FF9A3D]
                                    "
                                />
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}