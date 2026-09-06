import ProjectLayout from "@/app/components/project/ProjectLayout";

export default function PortfolioV3Page() {
    return (
        <ProjectLayout
            number="01"
            title="Portfolio V3"
            year="2026"
            status="En développement"
            statusColor="yellow"
            role="UI/UX · Développement Frontend"
            technologies={[
                "Next.js",
                "TypeScript",
                "Tailwind CSS",
                "Figma",
            ]}
        >

            {/* HERO */}
            <section className="mb-20">

                <span className="text-sm font-black uppercase opacity-40">
                    Une nouvelle version de moi-même
                </span>

                <h2 className="mt-3 max-w-4xl text-6xl font-black uppercase leading-[0.9] tracking-tight md:text-8xl">
                    Un portfolio qui ne ressemble pas à un CV.
                </h2>

                <p className="mt-8 max-w-2xl text-lg font-medium opacity-65 md:text-xl">
                    Une expérience interactive pensée pour présenter mon
                    univers, mes projets et ma façon de concevoir le web.
                </p>

            </section>


            {/* APERÇU PRINCIPAL */}
            <section className="mb-24">

                <div className="overflow-hidden rounded-[32px] bg-light-gradient p-3 shadow-soft">

                    <img
                        src="/Image.jpg"
                        alt="Aperçu du Portfolio V3"
                        className="w-full rounded-[24px] object-cover"
                    />

                </div>

            </section>


            {/* À PROPOS */}
            <section className="mb-24 max-w-4xl">

                <span className="text-sm font-black uppercase text-primary">
                    01 — Le projet
                </span>

                <h2 className="mt-3 text-4xl font-black uppercase md:text-6xl">
                    Pourquoi ce portfolio ?
                </h2>

                <div className="mt-6 space-y-4 text-lg font-medium leading-relaxed opacity-70">

                    <p>
                        Ce portfolio est avant tout un terrain de jeu pour
                        expérimenter autour du design, de l'interaction et
                        du développement frontend.
                    </p>

                    <p>
                        L'objectif est de créer une expérience qui reflète
                        davantage ma personnalité et ma manière de travailler
                        qu'un portfolio traditionnel.
                    </p>

                </div>

            </section>


            {/* DIRECTION ARTISTIQUE */}
            <section className="mb-24">

                <span className="text-sm font-black uppercase text-primary">
                    02 — Direction artistique
                </span>

                <h2 className="mt-3 text-4xl font-black uppercase md:text-6xl">
                    Coloré. Rond. Un peu chaotique.
                </h2>

                <p className="mt-6 max-w-3xl text-lg font-medium leading-relaxed opacity-70">
                    Une identité visuelle inspirée de mon intérêt pour
                    l'art, le design et les interfaces interactives.
                    L'interface mélange formes arrondies, couleurs chaudes,
                    glassmorphism et animations.
                </p>


                <div className="mt-10 grid gap-5 md:grid-cols-2">

                    <div className="overflow-hidden rounded-[28px] bg-light-gradient p-3 shadow-soft">
                        <img
                            src="/Image.jpg"
                            alt="Maquette Figma du Portfolio V3"
                            className="w-full rounded-[20px]"
                        />
                    </div>

                    <div className="rounded-[28px] bg-foreground p-7 text-white">

                        <p className="text-sm font-black uppercase opacity-40">
                            Design system
                        </p>

                        <p className="mt-4 text-2xl font-black">
                            Une interface pensée avant d'être codée.
                        </p>

                        <p className="mt-4 font-medium leading-relaxed opacity-60">
                            Les différentes sections, composants et
                            interactions sont d'abord explorés sur Figma
                            avant leur intégration dans Next.js.
                        </p>

                    </div>

                </div>

            </section>


            {/* DÉVELOPPEMENT */}
            <section className="mb-24">

                <span className="text-sm font-black uppercase text-primary">
                    03 — Développement
                </span>

                <h2 className="mt-3 text-4xl font-black uppercase md:text-6xl">
                    Sous le capot
                </h2>


                <div className="mt-10 grid gap-4 md:grid-cols-2">

                    <article className="rounded-[24px] bg-light-gradient p-6 shadow-soft">

                        <span className="text-3xl">🎨</span>

                        <h3 className="mt-5 text-2xl font-black uppercase">
                            Design → Code
                        </h3>

                        <p className="mt-3 font-medium leading-relaxed opacity-65">
                            Conception de l'interface sur Figma puis
                            intégration en Next.js.
                        </p>

                    </article>


                    <article className="rounded-[24px] bg-light-gradient p-6 shadow-soft">

                        <span className="text-3xl">🧩</span>

                        <h3 className="mt-5 text-2xl font-black uppercase">
                            Composants
                        </h3>

                        <p className="mt-3 font-medium leading-relaxed opacity-65">
                            Une architecture pensée autour de composants
                            réutilisables et cohérents.
                        </p>

                    </article>


                    <article className="rounded-[24px] bg-light-gradient p-6 shadow-soft">

                        <span className="text-3xl">✨</span>

                        <h3 className="mt-5 text-2xl font-black uppercase">
                            Interactions
                        </h3>

                        <p className="mt-3 font-medium leading-relaxed opacity-65">
                            Animations et transitions pour rendre la
                            navigation plus vivante.
                        </p>

                    </article>


                    <article className="rounded-[24px] bg-light-gradient p-6 shadow-soft">

                        <span className="text-3xl">📱</span>

                        <h3 className="mt-5 text-2xl font-black uppercase">
                            Responsive
                        </h3>

                        <p className="mt-3 font-medium leading-relaxed opacity-65">
                            Une expérience adaptée aux différentes tailles
                            d'écran.
                        </p>

                    </article>

                </div>

            </section>


            {/* SCREENSHOTS */}
            <section className="mb-24">

                <span className="text-sm font-black uppercase text-primary">
                    04 — Aperçus
                </span>

                <h2 className="mt-3 text-4xl font-black uppercase md:text-6xl">
                    Quelques morceaux du projet
                </h2>


                <div className="mt-10 space-y-6">

                    <div className="overflow-hidden rounded-[32px] bg-light-gradient p-3 shadow-soft">
                        <img
                            src="/Image.jpg"
                            alt="Section expérience du Portfolio V3"
                            className="w-full rounded-[24px]"
                        />
                    </div>

                    <div className="overflow-hidden rounded-[32px] bg-light-gradient p-3 shadow-soft">
                        <img
                            src="/Image.jpg"
                            alt="Section projets du Portfolio V3"
                            className="w-full rounded-[24px]"
                        />
                    </div>

                    <div className="overflow-hidden rounded-[32px] bg-light-gradient p-3 shadow-soft">
                        <img
                            src="/Image.jpg"
                            alt="Section compétences du Portfolio V3"
                            className="w-full rounded-[24px]"
                        />
                    </div>

                </div>

            </section>


            {/* ÉTAT DU PROJET */}
            <section className="mb-24 rounded-[32px] bg-foreground p-8 text-white md:p-12">

                <span className="text-sm font-black uppercase opacity-40">
                    05 — Et la suite ?
                </span>

                <h2 className="mt-3 text-4xl font-black uppercase md:text-6xl">
                    Encore en construction.
                </h2>

                <p className="mt-6 max-w-2xl text-lg font-medium leading-relaxed opacity-60">
                    Le portfolio est actuellement en développement.
                    Certaines interactions et animations restent encore
                    à intégrer avant sa version finale.
                </p>

            </section>

        </ProjectLayout>
    );
}