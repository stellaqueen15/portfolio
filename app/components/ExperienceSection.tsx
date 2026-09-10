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
        <section id="experiences" className="relative min-h-screen overflow-hidden bg-background px-4 py-20
            sm:px-6 sm:py-24"
        >
            <div className="relative z-10 mb-10 text-center sm:mb-12">
                <h2 className="p-3 text-4xl font-black uppercase tracking-tight text-gradient sm:p-4 sm:text-5xl
                    md:p-6 md:text-7xl"
                >
                    Oui, j&apos;ai travaillé
                </h2>
            </div>

            <div className="relative mx-auto max-w-5xl">
                {/* Ligne centrale desktop */}
                <div className="absolute left-1/2 top-0 hidden h-full w-1 -translate-x-1/2 rounded-full bg-secondary
                    shadow-[0_0_10px_rgba(255,255,255,0.25)] md:block" />

                {/* Ligne gauche mobile */}
                <div className="absolute left-3 top-0 h-full w-1 rounded-full bg-secondary
                    shadow-[0_0_10px_rgba(255,255,255,0.25)] md:hidden" />

                <div className="relative flex flex-col gap-6 sm:gap-8 md:gap-4">
                    {experiences.map((experience, index) => {
                        const isLeft = index % 2 === 0;

                        return (
                            <div key={`${experience.company}-${experience.date}`} className="relative min-h-0 md:grid
                                md:min-h-37.5 md:grid-cols-2 md:items-center"
                            >
                                {/* Carte */}
                                <div className={`ml-8 md:ml-0 ${isLeft ? "md:col-start-1 md:mr-16 md:text-right" : "md:col-start-2 md:ml-16 md:text-left"}`}>
                                    <details className="group rounded-3xl bg-surface p-4 shadow-soft sm:rounded-[28px] sm:p-5">
                                        <summary className="cursor-pointer list-none select-none">
                                            <div className="text-[10px] font-semibold uppercase tracking-wider opacity-60
                                                sm:text-[11px]"
                                            >
                                                {experience.date}
                                            </div>

                                            <h3 className="mt-0.5 text-base font-black sm:text-lg md:text-xl">
                                                {experience.title}
                                            </h3>

                                            <p className="text-sm font-semibold">
                                                {experience.company}
                                            </p>

                                            <div className={`mt-2 flex flex-wrap items-center gap-1.5 text-[9px]
                                                font-semibold sm:text-[10px]
                                                ${isLeft ? "md:justify-end" : "md:justify-start"}`}
                                            >
                                                <span className="opacity-70">
                                                    {experience.type}
                                                </span>

                                                <span className="opacity-30">
                                                    •
                                                </span>

                                                {experience.tags.map((tag) => (
                                                    <span key={tag} className="rounded-md border border-primary
                                                        bg-primary/16 px-2 py-0.5 text-[9px] text-primary sm:text-[10px]"
                                                    >
                                                        {tag}
                                                    </span>
                                                ))}
                                            </div>

                                            <div className="mt-2 text-[10px] font-semibold opacity-70 sm:text-[11px]">
                                                <span className="group-open:hidden">
                                                    + Voir les détails
                                                </span>

                                                <span className="hidden group-open:inline">
                                                    − Réduire
                                                </span>
                                            </div>
                                        </summary>

                                        <div className="mt-3 border-t border-white/30 pt-3 text-xs leading-relaxed
                                            sm:mt-4 sm:pt-4 sm:text-sm">
                                            <ul className="list-inside space-y-1.5">
                                                {experience.details.map((detail) => (
                                                    <li key={detail}>
                                                        {detail}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </details>
                                </div>

                                {/* Cercle desktop */}
                                <div className="absolute left-1/2 top-1/2 z-10 hidden h-7 w-7 -translate-x-1/2
                                    -translate-y-1/2 rounded-full border-4 border-secondary bg-white
                                    shadow-[0_3px_10px_rgba(255,137,47,0.4)] md:block"
                                />

                                <div className="absolute left-1/2 top-1/2 z-20 hidden h-2.5 w-2.5 -translate-x-1/2
                                    -translate-y-1/2 rounded-full bg-secondary md:block" />

                                {/* Cercle mobile */}
                                <div className="absolute left-3 top-1/2 z-20 h-5 w-5 -translate-x-1/2 -translate-y-1/2
                                    rounded-full border-3 border-secondary bg-white
                                    shadow-[0_3px_10px_rgba(255,137,47,0.4)] md:hidden"
                                />

                                <div className="absolute left-3 top-1/2 z-30 h-2 w-2 -translate-x-1/2 -translate-y-1/2
                                    rounded-full bg-secondary md:hidden" />
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}