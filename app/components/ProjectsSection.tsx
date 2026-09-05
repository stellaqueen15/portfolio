const projects = [
    {
        title: "Portfolio",
        description: "Un portfolio pensé comme une expérience interactive.",
        image: "/projects/portfolio.png",
        tags: ["Next.js", "TypeScript", "Tailwind"],
        demo: "https://example.com",
        slug: "portfolio",
    },
    {
        title: "Influencer Dashboard",
        description: "Dashboard B2B pour visualiser et analyser des données.",
        image: "/projects/dashboard.png",
        tags: ["Next.js", "React", "MSW"],
        demo: "https://example.com",
        slug: "influencer-dashboard",
    },
    {
        title: "API Project",
        description: "Application web basée sur une API et des données dynamiques.",
        image: "/projects/api.png",
        tags: ["React", "API", "TypeScript"],
        demo: "https://example.com",
        slug: "api-project",
    },
    {
        title: "RP Admin Tool",
        description: "Interface d’administration pensée pour simplifier la gestion.",
        image: "/projects/admin.png",
        tags: ["Next.js", "UI/UX", "Tailwind"],
        demo: "https://example.com",
        slug: "rp-admin-tool",
    },
];

export default function ProjectsSection() {
    const offsets = [
        "md:translate-x-0",
        "md:translate-x-[8%]",
        "md:translate-x-[16%]",
        "md:translate-x-[8%]",
    ];

    return (
        <section className="relative min-h-screen overflow-hidden bg-background px-6 py-24">
            <div className="mx-auto max-w-7xl">
                <div className="relative z-10 mb-12 text-center">
                    <h2 className="text-5xl text-gradient uppercase font-black tracking-tight md:text-7xl">
                        Oui, j'ai travaillé
                    </h2>
                </div>

                {/* Projects */}
                <div className="flex flex-col gap-8">
                    {projects.map((project, index) => (
                        <article
                            key={project.title}
                            className={`w-full md:w-[92%] ${offsets[index]}`}
                        >
                            <div className="group overflow-hidden rounded-[28px] bg-white/75 shadow-soft backdrop-blur-md transition-transform duration-500 hover:-translate-y-1">

                                <div className="grid min-h-[280px] grid-cols-1 md:grid-cols-[38%_1fr]">

                                    {/* Image */}
                                    <div className="relative min-h-[220px] overflow-hidden md:min-h-0">
                                        <img
                                            src={project.image}
                                            alt={project.title}
                                            className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                                        />
                                    </div>

                                    {/* Content */}
                                    <div className="flex flex-col justify-between p-6 md:p-8">

                                        <div>
                                            <span className="text-sm font-bold uppercase opacity-40">
                                                0{index + 1}
                                            </span>

                                            <h3 className="mt-1 text-3xl font-black uppercase md:text-4xl">
                                                {project.title}
                                            </h3>

                                            <p className="mt-3 max-w-xl text-base font-medium opacity-70 md:text-lg">
                                                {project.description}
                                            </p>
                                        </div>

                                        <div className="mt-6">

                                            {/* Tags */}
                                            <div className="mb-5 flex flex-wrap gap-2">
                                                {project.tags.map((tag) => (
                                                    <span
                                                        key={tag}
                                                        className="rounded-full bg-black/5 px-4 py-2 text-sm font-bold"
                                                    >
                                                        {tag}
                                                    </span>
                                                ))}
                                            </div>

                                            {/* Buttons */}
                                            <div className="flex flex-wrap gap-3">

                                                {/* En savoir plus */}
                                                <a
                                                    href={`/projects/${project.slug}`}
                                                    className="rounded-full bg-foreground px-5 py-2.5 text-sm font-bold text-white transition-transform duration-200 hover:-translate-y-0.5"
                                                >
                                                    En savoir plus
                                                </a>

                                                {/* Demo */}
                                                {project.demo && (
                                                    <a
                                                        href={project.demo}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="rounded-full border-2 border-foreground/15 bg-white/50 px-5 py-2.5 text-sm font-bold transition-all duration-200 hover:-translate-y-0.5 hover:bg-white"
                                                    >
                                                        Voir la démo ↗
                                                    </a>
                                                )}

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
