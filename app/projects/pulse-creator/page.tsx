import ProjectLayout from "@/app/components/project/ProjectLayout";
import ProjectCarousel from "@/app/components/project/ProjectCarousel";
import Image from "next/image";
import SurfaceCard from "@/app/components/ui/SurfaceCard";

export default function PulseCreatorPage() {
    return (
        <ProjectLayout
            number="02"
            title="PulseCreator"
            year="2026"
            status="En développement"
            statusColor="yellow"
            role="UI/UX · Développement Frontend"
            image="/Image.jpg"
            technologies={[
                "Next.js",
                "React",
                "TypeScript",
                "Tailwind CSS",
                "MSW",
            ]}
        >

            {/* HERO */}
            <section className="mb-20">
                <span className="text-sm font-black uppercase opacity-40">
                    Transformer les chiffres en décisions
                </span>

                <h2 className="mt-3 max-w-4xl text-6xl font-black uppercase leading-[0.9] tracking-tight md:text-8xl">
                    Un dashboard pensé pour les créateurs.
                </h2>

                <p className="mt-8 max-w-2xl text-lg font-medium opacity-65 md:text-xl">
                    Une interface B2B conçue pour centraliser les performances
                    des créateurs de contenu et rendre leurs données plus
                    simples à comprendre.
                </p>
            </section>


            {/* APERÇU PRINCIPAL */}
            <section className="mb-24">
                <SurfaceCard>
                    <Image
                        src="/Image.jpg"
                        alt="Aperçu du dashboard PulseCreator"
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
                    Pourquoi PulseCreator ?
                </h2>

                <div className="mt-6 space-y-4 text-lg font-medium leading-relaxed opacity-70">
                    <p>
                        PulseCreator est un projet personnel autour de la
                        conception d&apos;un dashboard destiné aux créateurs
                        de contenu.
                    </p>

                    <p>
                        L&apos;objectif est de regrouper différentes
                        statistiques au même endroit afin de permettre une
                        lecture rapide des performances et de faire ressortir
                        les informations réellement importantes.
                    </p>

                    <p>
                        Le projet me permet également d&apos;explorer la
                        conception d&apos;interfaces de données, la
                        visualisation de statistiques et la création de
                        composants de dashboard réutilisables.
                    </p>
                </div>
            </section>


            {/* DIRECTION ARTISTIQUE */}
            <section className="mb-24">
                <span className="text-sm font-black uppercase text-foreground/60">
                    02 - Direction artistique
                </span>

                <h2 className="mt-3 text-4xl font-black uppercase md:text-6xl">
                    Des données sans l&apos;interface froide.
                </h2>

                <p className="mt-6 max-w-3xl text-lg font-medium leading-relaxed opacity-70">
                    L&apos;interface cherche à trouver un équilibre entre la
                    quantité de données affichées et la lisibilité. Les
                    statistiques sont organisées autour d&apos;une hiérarchie
                    visuelle claire afin de permettre une compréhension rapide
                    du dashboard.
                </p>

                <div className="mt-10 grid gap-5 md:grid-cols-2">
                    <SurfaceCard>
                        <Image
                            src="/Image.jpg"
                            alt="Maquette du dashboard PulseCreator"
                            width={1920}
                            height={1080}
                            className="w-full rounded-[20px] object-cover"
                        />
                    </SurfaceCard>

                    <div className="rounded-4xl bg-foreground p-7 text-white">
                        <p className="text-sm font-black uppercase opacity-40">
                            Interface
                        </p>

                        <p className="mt-4 text-2xl font-black">
                            Faire ressortir l&apos;essentiel.
                        </p>

                        <p className="mt-4 font-medium leading-relaxed opacity-60">
                            Les informations principales sont mises en avant
                            grâce aux cartes statistiques, aux graphiques et à
                            une hiérarchie visuelle pensée pour faciliter la
                            lecture.
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
                            <i className="fi fi-sr-chart-histogram"></i>
                        </span>

                        <h3 className="mt-5 text-2xl font-black uppercase">
                            Data visualisation
                        </h3>

                        <p className="mt-3 font-medium leading-relaxed opacity-65">
                            Des statistiques et graphiques organisés pour
                            permettre une lecture rapide des performances.
                        </p>
                    </SurfaceCard>

                    <SurfaceCard className="p-6">
                        <span className="text-3xl">
                            <i className="fi fi-sr-dashboard"></i>
                        </span>

                        <h3 className="mt-5 text-2xl font-black uppercase">
                            Composants
                        </h3>

                        <p className="mt-3 font-medium leading-relaxed opacity-65">
                            Une interface construite autour de composants
                            réutilisables pour garder une structure cohérente.
                        </p>
                    </SurfaceCard>

                    <SurfaceCard className="p-6">
                        <span className="text-3xl">
                            <i className="fi fi-sr-api"></i>
                        </span>

                        <h3 className="mt-5 text-2xl font-black uppercase">
                            Données mockées
                        </h3>

                        <p className="mt-3 font-medium leading-relaxed opacity-65">
                            MSW est utilisé pour simuler les réponses d&apos;une
                            API et développer le frontend indépendamment d&apos;un
                            backend réel.
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
                            Une interface pensée pour rester claire et
                            fonctionnelle sur différentes tailles d&apos;écran.
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
                    Le dashboard en action
                </h2>

                <ProjectCarousel
                    screens={[
                        {
                            image: "/Image.jpg",
                            title: "Overview",
                        },
                        {
                            image: "/Image.jpg",
                            title: "Analytics",
                        },
                        {
                            image: "/Image.jpg",
                            title: "Plateformes",
                        },
                    ]}
                />
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
                    PulseCreator est encore en cours de développement.
                    L&apos;interface principale et plusieurs composants sont
                    déjà en place, mais le projet continue d&apos;évoluer avec
                    de nouvelles vues, fonctionnalités et améliorations.
                </p>

                <p className="mt-4 max-w-2xl text-lg font-medium leading-relaxed opacity-60">
                    L&apos;objectif est de continuer à enrichir l&apos;expérience
                    tout en gardant une interface claire malgré la quantité
                    de données à présenter.
                </p>
            </section>

        </ProjectLayout>
    );
}