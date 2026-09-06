import Link from "next/link";
import type { ReactNode } from "react";

type ProjectLayoutProps = {
    title: string;
    number: string;
    year: string;
    status: string;
    statusColor?: "orange" | "green" | "yellow";
    role: string;
    technologies: string[];
    demo?: string;
    children: ReactNode;
};

const statusStyles = {
    orange: "bg-primary text-white",
    green: "bg-green-500 text-white",
    yellow: "bg-yellow-400 text-foreground",
};

export default function ProjectLayout({
    title,
    number,
    year,
    status,
    statusColor = "orange",
    role,
    technologies,
    demo,
    children,
}: ProjectLayoutProps) {
    return (
        <main className="min-h-screen bg-background">

            <div className="mx-auto flex max-w-[1600px]">
                <aside className="sticky top-0 hidden h-screen w-90 shrink-0 p-6 lg:block">
                    <div className="flex h-full flex-col justify-between rounded-4xl bg-light-gradient p-7 shadow-soft">
                        <div>
                            <Link
                                href="/"
                                className="mb-5 inline-flex items-center gap-2 text-sm font-bold opacity-50 transition-opacity hover:opacity-100"
                            >
                                ← Retour
                            </Link>

                            <div>
                                <div className="flex items-center justify-between">
                                    <span className="text-sm font-black uppercase opacity-40">
                                        Projet {number}
                                    </span>

                                    <span className="text-sm font-bold opacity-40">
                                        {year}
                                    </span>
                                </div>
                            </div>

                            <div className="rounded-3xl bg-white/40 p-5">
                                <div className="mb-6 text-center">
                                    <div className="mx-auto mb-4 h-28 w-full overflow-hidden rounded-[20px]">
                                        <img
                                            src="/Image.jpg"
                                            alt={title}
                                            className="h-full w-full object-cover"
                                        />
                                    </div>

                                    <p className="text-2xl font-black uppercase leading-none">
                                        {title}
                                    </p>
                                </div>

                                {/* INFOS */}
                                <div className="space-y-5">

                                    {/* ROLE */}
                                    <div>
                                        <p className="mb-1 text-xs font-black uppercase opacity-40">
                                            Role
                                        </p>

                                        <p className="font-bold">
                                            {role}
                                        </p>
                                    </div>


                                    {/* TECHNOLOGIES */}
                                    <div>
                                        <p className="mb-2 text-xs font-black uppercase opacity-40">
                                            Technologies
                                        </p>

                                        <div className="flex flex-wrap gap-2">
                                            {technologies.map((tech) => (
                                                <span
                                                    key={tech}
                                                    className="rounded-lg border border-primary/30 bg-primary/10 px-2.5 py-1 text-xs font-bold text-primary"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>


                                    {/* STATUS */}
                                    <div>
                                        <p className="mb-2 text-xs font-black uppercase opacity-40">
                                            Status
                                        </p>

                                        <span
                                            className={`inline-flex rounded-full px-3 py-1 text-xs font-black uppercase ${statusStyles[statusColor]}`}
                                        >
                                            {status}
                                        </span>
                                    </div>

                                </div>

                            </div>

                        </div>


                        {/* BOTTOM */}
                        <div className="space-y-3">

                            {demo && (
                                <a
                                    href={demo}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex w-full items-center justify-center rounded-full bg-foreground px-5 py-3 font-bold text-white transition-transform hover:-translate-y-0.5"
                                >
                                    Voir le projet ↗
                                </a>
                            )}

                            <Link
                                href="/#projects"
                                className="flex w-full items-center justify-center rounded-full border-2 border-primary px-5 py-3 font-bold text-primary transition-all hover:bg-white/30"
                            >
                                Tous les projets
                            </Link>

                        </div>

                    </div>

                </aside>

                <section className="min-w-0 flex-1 px-6 py-8 md:px-10 lg:px-12">
                    {/* VERSION MOBILE */}
                    <div className="mb-8 lg:hidden">

                        <Link
                            href="/"
                            className="mb-6 inline-flex text-sm font-bold opacity-50"
                        >
                            ← Retour
                        </Link>

                        <div className="rounded-[28px] bg-light-gradient p-6 shadow-soft">
                            <div className="mb-5 flex items-start justify-between gap-4">
                                <div className="flex min-w-0 items-center gap-3">

                                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary text-xl">
                                        🖥️
                                    </div>

                                    <div className="min-w-0">
                                        <span className="text-xs font-black uppercase opacity-40">
                                            Projet {number}
                                        </span>

                                        <h1 className="truncate text-3xl font-black uppercase leading-none">
                                            {title}
                                        </h1>
                                    </div>
                                </div>

                                <span
                                    className={`shrink-0 rounded-full px-3 py-1 text-xs font-black uppercase ${statusStyles[statusColor]}`}
                                >
                                    {status}
                                </span>

                            </div>

                            <p className="text-sm font-bold opacity-60">
                                {role}
                            </p>

                            <div className="mt-4 flex flex-wrap gap-2">
                                {technologies.map((tech) => (
                                    <span
                                        key={tech}
                                        className="rounded-lg border border-primary/30 bg-primary/10 px-2.5 py-1 text-xs font-bold text-primary"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                    {children}
                </section>
            </div>
        </main>
    );
}