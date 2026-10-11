import { experiences } from "@/app/data/experiences";

export default function ExperienceSection() {
    return (
        <section
            id="experiences"
            className="relative overflow-hidden bg-background px-4 py-20 sm:px-6 sm:py-24"
        >
            <div className="relative z-10 mb-12 text-center sm:mb-14">
                <h2 className="p-3 text-4xl font-black uppercase tracking-tight text-gradient sm:p-4 sm:text-5xl md:p-6 md:text-7xl">
                    Oui, j&apos;ai travaillé
                </h2>
            </div>

            <div className="relative mx-auto max-w-4xl">
                {/* Timeline discrète */}
                <div
                    aria-hidden="true"
                    className="absolute bottom-4 left-1.75 top-3 w-px bg-secondary/40 sm:left-2.25"
                />

                <div className="relative flex flex-col gap-6 sm:gap-7">
                    {experiences.map((experience, index) => (
                        <article
                            key={`${experience.company}-${experience.date}`}
                            className="relative pl-7 sm:pl-9"
                        >
                            {/* Point de timeline */}
                            <div
                                aria-hidden="true"
                                className="absolute left-0 top-5 flex h-3.75 w-3.75 items-center justify-center rounded-full border-2 border-secondary bg-background shadow-[0_0_8px_rgba(255,137,47,0.2)] sm:left-[2px]"
                            >
                                <div className="h-1.5 w-1.5 rounded-full bg-secondary" />
                            </div>

                            {/* Carte compacte */}
                            <div className="overflow-hidden rounded-2xl border border-primary/10 bg-surface shadow-soft transition-colors duration-200 hover:border-primary/25 sm:rounded-3xl">
                                <details className="experience-details">
                                    <summary className="cursor-pointer list-none px-4 py-4 outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-inset sm:px-5 sm:py-5">
                                        <div className="flex items-start gap-3">
                                            <div className="min-w-0 flex-1">
                                                <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-[10px] font-bold uppercase tracking-wider sm:text-xs">
                                                    <span className="text-primary">
                                                        {experience.date}
                                                    </span>
                                                    <span className="opacity-30">/</span>
                                                    <span className="opacity-60">
                                                        {experience.type}
                                                    </span>
                                                </div>

                                                <h3 className="mt-1.5 text-lg font-black leading-snug sm:text-xl">
                                                    {experience.title}
                                                </h3>

                                                <p className="mt-0.5 text-sm font-medium opacity-65">
                                                    {experience.company}
                                                </p>

                                                <div className="mt-3 flex flex-wrap gap-1.5">
                                                    {experience.tags.map((tag) => (
                                                        <span
                                                            key={tag}
                                                            className="rounded-md border border-primary/20 bg-primary/[0.07] px-2 py-0.5 text-[10px] font-semibold text-primary sm:text-[11px]"
                                                        >
                                                            {tag}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>

                                            <div
                                                aria-hidden="true"
                                                className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary/[0.07] text-primary transition-colors duration-200 group-hover:bg-primary/15 sm:h-8 sm:w-8"
                                            >
                                                <svg
                                                    className="experience-chevron h-4 w-4"
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeWidth="1.8"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                >
                                                    <path d="m7 10 5 5 5-5" />
                                                </svg>
                                            </div>
                                        </div>

                                        <div className="mt-3 flex items-center gap-1.5 text-[11px] font-semibold text-primary/75">
                                            <span className="experience-open-label">
                                                Découvrir les réalisations
                                            </span>
                                            <span className="experience-close-label">
                                                Réduire
                                            </span>
                                        </div>
                                    </summary>

                                    {/* Panneau animé */}
                                    <div className="experience-panel">
                                        <div className="experience-panel-inner">
                                            <div className="mx-4 border-t border-primary/10 sm:mx-5" />

                                            <div className="px-4 pb-5 pt-4 sm:px-5 sm:pb-6">
                                                <h4 className="mb-3 text-[10px] font-bold uppercase tracking-[0.14em] opacity-55 sm:text-xs">
                                                    Réalisations et responsabilités
                                                </h4>

                                                <ul className="space-y-2.5">
                                                    {experience.details.map((detail) => (
                                                        <li
                                                            key={detail}
                                                            className="flex items-start gap-2.5 text-sm leading-relaxed sm:text-[15px]"
                                                        >
                                                            <span
                                                                aria-hidden="true"
                                                                className="mt-1.75 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/70"
                                                            />
                                                            <span className="opacity-80">
                                                                {detail}
                                                            </span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </details>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}