import Image from "next/image";

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
        <section
            id="projects"
            className="
                relative min-h-screen overflow-hidden
                bg-background-reverse
                px-4 py-20
                sm:px-6 sm:py-24
            "
        >
            <div className="mx-auto max-w-7xl">
                <div className="relative z-10 mb-10 text-center sm:mb-12">
                    <h2
                        className="
                            p-3 text-4xl font-black uppercase tracking-tight text-gradient
                            sm:p-4 sm:text-5xl
                            md:p-6 md:text-7xl
                        "
                    >
                        Ce que j&apos;ai bricolé
                    </h2>
                </div>

                <div className="flex flex-col gap-6 sm:gap-8">
                    {projects.map((project, index) => (
                        <article
                            key={project.title}
                            className={`w-full md:w-[92%] ${offsets[index]}`}
                        >
                            <div
                                className="
                                    group overflow-hidden
                                    rounded-[30px]
                                    bg-surface
                                    shadow-soft
                                    backdrop-blur-md
                                    transition-transform duration-500
                                    hover:-translate-y-1
                                    sm:rounded-[40px]
                                    md:rounded-[50px]
                                "
                            >
                                <div
                                    className="
                                        grid grid-cols-1
                                        md:grid-cols-[38%_1fr]
                                    "
                                >
                                    <div
                                        className="
                                            relative m-3
                                            min-h-47.5
                                            overflow-hidden
                                            rounded-[22px]
                                            sm:m-4
                                            sm:min-h-55
                                            sm:rounded-[26px]
                                            md:min-h-0
                                            md:max-w-100
                                            md:rounded-[30px]
                                        "
                                    >
                                        <Image
                                            src={project.image}
                                            alt={project.title}
                                            fill
                                            className="
                                                object-cover
                                                transition-transform duration-500
                                                group-hover:scale-105
                                            "
                                        />
                                    </div>

                                    {/* Content */}
                                    <div
                                        className="
                                            flex flex-col justify-between
                                            p-4
                                            sm:p-5
                                            md:p-4
                                        "
                                    >
                                        <div>
                                            <h3
                                                className="
                                                    text-2xl font-black
                                                    sm:text-3xl
                                                    md:text-4xl
                                                "
                                            >
                                                {project.title}
                                            </h3>

                                            <p
                                                className="
                                                    max-w-xl
                                                    text-sm font-medium opacity-70
                                                    sm:text-base
                                                    md:text-lg
                                                "
                                            >
                                                {project.description}
                                            </p>
                                        </div>

                                        {/* Tags + buttons */}
                                        <div
                                            className="
                                                mt-5 flex flex-col gap-4
                                                sm:mt-6
                                                md:mr-3
                                                md:flex-row md:items-center
                                                md:justify-between md:gap-6
                                            "
                                        >
                                            {/* Tags */}
                                            <div className="flex flex-wrap gap-2">
                                                {project.tags.map((tag) => (
                                                    <span
                                                        key={tag}
                                                        className="
                                                            rounded-md
                                                            border border-primary
                                                            bg-primary/16
                                                            px-2 py-0.5
                                                            text-xs font-semibold
                                                            text-primary
                                                            sm:text-sm
                                                        "
                                                    >
                                                        {tag}
                                                    </span>
                                                ))}
                                            </div>

                                            {/* Buttons */}
                                            <div
                                                className="
                                                    flex flex-wrap gap-2
                                                    sm:gap-3
                                                "
                                            >
                                                <a
                                                    href={`/projects/${project.slug}`}
                                                    className="
                                                        rounded-xl
                                                        bg-background
                                                        px-4 py-2
                                                        text-xs font-bold
                                                        text-white
                                                        transition-transform
                                                        duration-200
                                                        hover:-translate-y-0.5
                                                        sm:px-5 sm:py-2.5
                                                        sm:text-sm
                                                    "
                                                >
                                                    En savoir plus
                                                </a>

                                                {project.demo && (
                                                    <a
                                                        href={project.demo}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="
                                                            flex items-center
                                                            justify-center
                                                            rounded-xl
                                                            border-2 border-primary
                                                            px-3 py-2
                                                            text-xs font-bold
                                                            text-accent
                                                            transition-all duration-200
                                                            hover:-translate-y-0.5
                                                            hover:bg-white/30
                                                            sm:text-sm
                                                        "
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