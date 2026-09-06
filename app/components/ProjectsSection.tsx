const projects = [
    {
        title: "Portfolio",
        description: "Un portfolio pensé comme une expérience interactive.",
        image: "/Image.jpg",
        tags: ["Next.js", "TypeScript", "Tailwind"],
        demo: "https://example.com",
        slug: "portfolio-v3",
    },
    {
        title: "Influencer Dashboard",
        description: "Dashboard B2B pour visualiser et analyser des données.",
        image: "/Image.jpg",
        tags: ["Next.js", "React", "MSW"],
        demo: "https://example.com",
        slug: "influencer-dashboard",
    },
    {
        title: "API Project",
        description: "Application web basée sur une API et des données dynamiques.",
        image: "/Image.jpg",
        tags: ["React", "API", "TypeScript"],
        demo: "https://example.com",
        slug: "api-project",
    },
    {
        title: "RP Admin Tool",
        description: "Interface d’administration pensée pour simplifier la gestion.",
        image: "/Image.jpg",
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
        <section className="relative min-h-screen overflow-hidden bg-background-reverse px-6 py-24">
            <div className="mx-auto max-w-7xl">
                <div className="relative z-10 mb-12 text-center">
                    <h2 className="text-5xl text-gradient uppercase font-black tracking-tight md:text-7xl">
                        Ce que j'ai bricolé
                    </h2>
                </div>

                <div className="flex flex-col gap-8">
                    {projects.map((project, index) => (
                        <article
                            key={project.title}
                            className={`w-full md:w-[92%] ${offsets[index]}`}
                        >
                            <div className="group overflow-hidden rounded-[50px] bg-surface shadow-soft
                                backdrop-blur-md transition-transform duration-500 hover:-translate-y-1">

                                <div className="grid min-h-[100px] grid-cols-1 md:grid-cols-[38%_1fr]">
                                    <div className="relative m-4 min-h-[220px] max-w-100 overflow-hidden rounded-[30px] md:min-h-0">
                                        <img
                                            src={project.image}
                                            alt={project.title}
                                            className="absolute inset-0 h-full w-full object-cover transition-transform
                                                duration-500 group-hover:scale-105"
                                        />
                                    </div>

                                    <div className="flex flex-col justify-between p-2 md:p-4">
                                        <div>
                                            <h3 className="text-3xl font-black md:text-4xl">
                                                {project.title}
                                            </h3>

                                            <p className="max-w-xl text-base font-medium opacity-70 md:text-lg">
                                                {project.description}
                                            </p>
                                        </div>

                                        <div className="mt-6 mr-3 flex items-center justify-between gap-6">
                                            <div className="flex flex-wrap gap-2">
                                                {project.tags.map((tag) => (
                                                    <span
                                                        key={tag}
                                                        className="rounded-md bg-primary/16 border border-primary
                                                            text-primary px-2 py-0.5 text-sm font-semibold"
                                                    >
                                                        {tag}
                                                    </span>
                                                ))}
                                            </div>

                                            <div className="flex flex-wrap gap-3">
                                                <a
                                                    href={`/projects/${project.slug}`}
                                                    className="rounded-xl bg-background px-5 py-2.5 text-sm font-bold
                                                    text-white transition-transform duration-200
                                                    hover:-translate-y-0.5"
                                                >
                                                    En savoir plus
                                                </a>

                                                {project.demo && (
                                                    <a
                                                        href={project.demo}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="flex items-center justify-center rounded-xl
                                                        border-2 border-primary px-3 text-sm font-bold
                                                        text-accent transition-all duration-200
                                                        hover:-translate-y-0.5 hover:bg-white/30"
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
