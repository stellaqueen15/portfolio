import ProjectLayout from "@/app/components/project/ProjectLayout";
import ProjectCarousel from "@/app/components/project/ProjectCarousel";
import Image from "next/image";
import SurfaceCard from "@/app/components/ui/SurfaceCard";

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
                <SurfaceCard>
                    <Image
                        src="/Image.jpg"
                        alt="Aperçu du Portfolio V3"
                        width={1920}
                        height={1080}
                        className="w-full rounded-3xl object-cover"
                    />
                </SurfaceCard>
            </section>


            {/* À PROPOS */}
            <section className="mb-24 max-w-4xl">
                <span className="text-sm font-black uppercase text-foreground/60">
                    01 - Le projet
                </span>

                <h2 className="mt-3 text-4xl font-black uppercase md:text-6xl">
                    Pourquoi ce portfolio ?
                </h2>

                <div className="mt-6 space-y-4 text-lg font-medium leading-relaxed opacity-70">
                    <p>
                        Ce portfolio est avant tout un terrain de jeu pour
                        expérimenter autour du design, de l&apos;interaction et
                        du développement frontend.
                    </p>

                    <p>
                        L&apos;objectif est de créer une expérience qui reflète
                        davantage ma personnalité et ma manière de travailler
                        qu&apos;un portfolio traditionnel.
                    </p>
                </div>
            </section>


            {/* DIRECTION ARTISTIQUE */}
            <section className="mb-24">
                <span className="text-sm font-black uppercase text-foreground/60">
                    02 - Direction artistique
                </span>

                <h2 className="mt-3 text-4xl font-black uppercase md:text-6xl">
                    Coloré. Rond. Un peu chaotique.
                </h2>

                <p className="mt-6 max-w-3xl text-lg font-medium leading-relaxed opacity-70">
                    Une identité visuelle inspirée de mon intérêt pour
                    l&apos;art, le design et les interfaces interactives.
                    L&apos;interface mélange formes arrondies, couleurs chaudes,
                    glassmorphism et animations.
                </p>


                <div className="mt-10 grid gap-5 md:grid-cols-2">
                    <SurfaceCard>
                        <Image
                            src="/Image.jpg"
                            alt="Maquette Figma du Portfolio V3"
                            width={1920}
                            height={1080}
                            className="w-full rounded-[20px] object-cover"
                        />
                    </SurfaceCard>

                    <div className="rounded-4xl bg-foreground p-7 text-white">
                        <p className="text-sm font-black uppercase opacity-40">
                            Design system
                        </p>

                        <p className="mt-4 text-2xl font-black">
                            Une interface pensée avant d&apos;être codée.
                        </p>

                        <p className="mt-4 font-medium leading-relaxed opacity-60">
                            Les différentes sections, composants et
                            interactions sont d&apos;abord explorés sur Figma
                            avant leur intégration dans Next.js.
                        </p>
                    </div>
                </div>
            </section>


            {/* DÉVELOPPEMENT */}
            <section className="mb-24">
                <span className="text-sm font-black uppercase text-foreground/60">
                    03 - Développement
                </span>

                <h2 className="mt-3 text-4xl font-black uppercase md:text-6xl">
                    Sous le capot
                </h2>

                <div className="mt-10 grid gap-4 md:grid-cols-2">
                    <SurfaceCard className="p-6">
                        <span className="text-3xl">
                            <i className="fi fi-sr-palette"></i>
                        </span>

                        <h3 className="mt-5 text-2xl font-black uppercase">
                            Design → Code
                        </h3>

                        <p className="mt-3 font-medium leading-relaxed opacity-65">
                            Conception de l&apos;interface sur Figma puis
                            intégration en Next.js.
                        </p>
                    </SurfaceCard>

                    <SurfaceCard className="p-6">
                        <span className="text-3xl">
                            <i className="fi fi-sr-puzzle-alt"></i>
                        </span>

                        <h3 className="mt-5 text-2xl font-black uppercase">
                            Composants
                        </h3>

                        <p className="mt-3 font-medium leading-relaxed opacity-65">
                            Une architecture pensée autour de composants
                            réutilisables et cohérents.
                        </p>
                    </SurfaceCard>

                    <SurfaceCard className="p-6">
                        <span className="text-3xl">
                            <i className="fi fi-br-animated-icon"></i>
                        </span>

                        <h3 className="mt-5 text-2xl font-black uppercase">
                            Interactions
                        </h3>

                        <p className="mt-3 font-medium leading-relaxed opacity-65">
                            Animations et transitions pour rendre la
                            navigation plus vivante.
                        </p>
                    </SurfaceCard>

                    <SurfaceCard className="p-6">
                        <span className="text-3xl">
                            <i className="fi fi-sr-mobile-button"></i>
                        </span>

                        <h3 className="mt-5 text-2xl font-black uppercase">
                            Responsive
                        </h3>

                        <p className="mt-3 font-medium leading-relaxed opacity-65">
                            Une expérience adaptée aux différentes tailles
                            d&apos;écran.
                        </p>
                    </SurfaceCard>
                </div>
            </section>

            {/* SCREENSHOTS */}
            <section className="mb-24">
                <span className="text-sm font-black uppercase text-foreground/60">
                    04 - Aperçus
                </span>

                <h2 className="mt-3 text-4xl font-black uppercase md:text-6xl">
                    Quelques morceaux du projet
                </h2>

                <ProjectCarousel
                    screens={[
                        { image: "/Image.jpg", title: "Expérience", },
                        { image: "/Image.jpg", title: "Projets", },
                        { image: "/Image.jpg", title: "Compétences", }, ]
                    } />
            </section>


            {/* ÉTAT DU PROJET */}
            <section className="mb-24 rounded-4xl bg-foreground p-8 text-white md:p-12">
                <span className="text-sm font-black uppercase opacity-40">
                    05 - Et la suite ?
                </span>

                <h2 className="mt-3 text-4xl font-black uppercase md:text-6xl">
                    Encore en construction.
                </h2>

                <p className="mt-6 max-w-2xl text-lg font-medium leading-relaxed opacity-60">
                    Le portfolio est encore en cours d’évolution.
                    De nouvelles interactions, animations et améliorations sont progressivement intégrées afin de faire évoluer l’expérience.
                </p>
            </section>
        </ProjectLayout>
    );
}