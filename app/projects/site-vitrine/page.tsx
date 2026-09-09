import ProjectLayout from "@/app/components/project/ProjectLayout";
import ProjectCarousel from "@/app/components/project/ProjectCarousel";
import Image from "next/image";
import SurfaceCard from "@/app/components/ui/SurfaceCard";

export default function SiteVitrinePage() {
    return (
        <ProjectLayout
            number="03"
            title="Site vitrine"
            year="2025"
            status="Terminé"
            statusColor="green"
            role="UI/UX · Développement Frontend"
            technologies={[
                "SvelteKit",
                "Tailwind CSS",
                "i18n",
            ]}
        >

            {/* HERO */}
            <section className="mb-20">
                <span className="text-sm font-black uppercase opacity-40">
                    Un projet réalisé de A à Z
                </span>

                <h2 className="mt-3 max-w-4xl text-6xl font-black uppercase leading-[0.9] tracking-tight md:text-8xl">
                    Un site vitrine pensé pour être beau, rapide et visible.
                </h2>

                <p className="mt-8 max-w-2xl text-lg font-medium opacity-65 md:text-xl">
                    Un site réalisé de A à Z pendant mon stage pour une
                    interprète et traductrice chinoise, avec une attention
                    particulière portée au design, au référencement, aux
                    performances et à l&apos;expérience utilisateur.
                </p>
            </section>


            {/* APERÇU PRINCIPAL */}
            <section className="mb-24">
                <SurfaceCard>
                    <Image
                        src="/Image.jpg"
                        alt="Aperçu du site vitrine"
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
                    Un vrai projet, avec un vrai besoin.
                </h2>

                <div className="mt-6 space-y-4 text-lg font-medium leading-relaxed opacity-70">
                    <p>
                        Ce site vitrine a été réalisé pendant mon stage chez
                        Nuagerie Inc. pour une professionnelle spécialisée dans
                        la traduction et l&apos;interprétation chinoise.
                    </p>

                    <p>
                        L&apos;objectif était de créer une présence web moderne
                        permettant de présenter clairement ses services tout
                        en proposant une expérience simple et intuitive.
                    </p>

                    <p>
                        J&apos;ai pris en charge le projet de A à Z, en
                        échangeant directement avec la personne concernée afin
                        de recueillir ses retours et d&apos;adapter
                        progressivement l&apos;interface à ses besoins.
                    </p>
                </div>
            </section>


            {/* DIRECTION ARTISTIQUE */}
            <section className="mb-24">
                <span className="text-sm font-black uppercase text-foreground/60">
                    02 - Direction artistique
                </span>

                <h2 className="mt-3 text-4xl font-black uppercase md:text-6xl">
                    Moderne. Clair. Intuitif.
                </h2>

                <p className="mt-6 max-w-3xl text-lg font-medium leading-relaxed opacity-70">
                    Le design a été pensé pour mettre les services au premier
                    plan et permettre aux visiteurs de comprendre rapidement
                    l&apos;activité proposée. Les choix d&apos;interface ont
                    également été affinés grâce aux retours de la cliente tout
                    au long du développement.
                </p>

                <div className="mt-10 grid gap-5 md:grid-cols-2">
                    <SurfaceCard>
                        <Image
                            src="/Image.jpg"
                            alt="Interface du site vitrine"
                            width={1920}
                            height={1080}
                            className="w-full rounded-[20px] object-cover"
                        />
                    </SurfaceCard>

                    <div className="rounded-4xl bg-foreground p-7 text-white">
                        <p className="text-sm font-black uppercase opacity-40">
                            Conception
                        </p>

                        <p className="mt-4 text-2xl font-black">
                            Concevoir avec des retours réels.
                        </p>

                        <p className="mt-4 font-medium leading-relaxed opacity-60">
                            Le projet n&apos;a pas été conçu uniquement derrière
                            un écran. Les retours de la personne pour qui le
                            site était destiné ont permis d&apos;ajuster la
                            présentation du contenu et l&apos;expérience au fil
                            du développement.
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
                    Bien plus que l&apos;interface.
                </h2>

                <p className="mt-6 max-w-3xl text-lg font-medium leading-relaxed opacity-70">
                    Ce projet m&apos;a permis de découvrir plusieurs enjeux
                    essentiels au développement d&apos;un site web réel :
                    référencement, génération statique, performances et
                    internationalisation.
                </p>

                <div className="mt-10 grid gap-4 md:grid-cols-2">
                    <SurfaceCard className="p-6">
                        <span className="text-3xl">
                            <i className="fi fi-sr-browser"></i>
                        </span>

                        <h3 className="mt-5 text-2xl font-black uppercase">
                            SvelteKit
                        </h3>

                        <p className="mt-3 font-medium leading-relaxed opacity-65">
                            Développement complet du site avec SvelteKit et
                            intégration des différentes sections de
                            l&apos;interface.
                        </p>
                    </SurfaceCard>

                    <SurfaceCard className="p-6">
                        <span className="text-3xl">
                            <i className="fi fi-sr-language"></i>
                        </span>

                        <h3 className="mt-5 text-2xl font-black uppercase">
                            Internationalisation
                        </h3>

                        <p className="mt-3 font-medium leading-relaxed opacity-65">
                            Mise en place de l&apos;i18n afin de proposer le
                            contenu du site dans plusieurs langues.
                        </p>
                    </SurfaceCard>

                    <SurfaceCard className="p-6">
                        <span className="text-3xl">
                            <i className="fi fi-sr-search"></i>
                        </span>

                        <h3 className="mt-5 text-2xl font-black uppercase">
                            SEO
                        </h3>

                        <p className="mt-3 font-medium leading-relaxed opacity-65">
                            Découverte et mise en pratique des principes de
                            référencement afin de construire un site plus
                            facilement compréhensible et indexable par les
                            moteurs de recherche.
                        </p>
                    </SurfaceCard>

                    <SurfaceCard className="p-6">
                        <span className="text-3xl">
                            <i className="fi fi-sr-bolt"></i>
                        </span>

                        <h3 className="mt-5 text-2xl font-black uppercase">
                            Performance
                        </h3>

                        <p className="mt-3 font-medium leading-relaxed opacity-65">
                            Travail autour des performances et de la génération
                            statique avec SvelteKit afin de proposer une
                            expérience rapide.
                        </p>
                    </SurfaceCard>
                </div>
            </section>


            {/* SSG & PERFORMANCE */}
            <section className="mb-24">
                <span className="text-sm font-black uppercase text-foreground/60">
                    04 - Ce que j&apos;ai appris
                </span>

                <h2 className="mt-3 text-4xl font-black uppercase md:text-6xl">
                    Penser au-delà du navigateur.
                </h2>

                <div className="mt-6 max-w-3xl space-y-4 text-lg font-medium leading-relaxed opacity-70">
                    <p>
                        Ce projet m&apos;a notamment permis de comprendre qu&apos;un
                        site web ne se résume pas à son apparence. Sa façon
                        d&apos;être généré, sa vitesse de chargement et sa
                        capacité à être trouvé par les moteurs de recherche
                        font également partie de l&apos;expérience.
                    </p>

                    <p>
                        J&apos;ai ainsi découvert les avantages du SSG avec
                        SvelteKit et appris à prendre davantage en compte les
                        performances et le SEO lors de la conception d&apos;un
                        site.
                    </p>
                </div>

                <div className="mt-10 grid gap-4 md:grid-cols-3">
                    <SurfaceCard className="p-6">
                        <p className="text-sm font-black uppercase opacity-40">
                            SSG
                        </p>

                        <h3 className="mt-3 text-2xl font-black">
                            Générer à l&apos;avance
                        </h3>

                        <p className="mt-3 font-medium leading-relaxed opacity-65">
                            Comprendre comment la génération statique peut
                            contribuer à créer des pages rapides et adaptées
                            aux sites vitrines.
                        </p>
                    </SurfaceCard>

                    <SurfaceCard className="p-6">
                        <p className="text-sm font-black uppercase opacity-40">
                            SEO
                        </p>

                        <h3 className="mt-3 text-2xl font-black">
                            Être trouvable
                        </h3>

                        <p className="mt-3 font-medium leading-relaxed opacity-65">
                            Prendre en compte le référencement dès la conception
                            plutôt que comme une étape ajoutée à la fin.
                        </p>
                    </SurfaceCard>

                    <SurfaceCard className="p-6">
                        <p className="text-sm font-black uppercase opacity-40">
                            Performance
                        </p>

                        <h3 className="mt-3 text-2xl font-black">
                            Charger efficacement
                        </h3>

                        <p className="mt-3 font-medium leading-relaxed opacity-65">
                            Comprendre l&apos;impact des choix techniques sur la
                            vitesse et l&apos;expérience des visiteurs.
                        </p>
                    </SurfaceCard>
                </div>
            </section>


            {/* SCREENSHOTS */}
            <section className="mb-24">
                <span className="text-sm font-black uppercase text-foreground/60">
                    05 - Aperçus
                </span>

                <h2 className="mt-3 text-4xl font-black uppercase md:text-6xl">
                    Quelques morceaux du projet
                </h2>

                <ProjectCarousel
                    screens={[
                        {
                            image: "/Image.jpg",
                            title: "Accueil",
                        },
                        {
                            image: "/Image.jpg",
                            title: "Services",
                        },
                        {
                            image: "/Image.jpg",
                            title: "Présentation",
                        },
                    ]}
                />
            </section>


            {/* RÉSULTAT */}
            <section className="mb-24 max-w-4xl">
                <span className="text-sm font-black uppercase text-foreground/60">
                    06 - Résultat
                </span>

                <h2 className="mt-3 text-4xl font-black uppercase md:text-6xl">
                    Un projet concret, du début à la fin.
                </h2>

                <p className="mt-6 text-lg font-medium leading-relaxed opacity-70">
                    Ce projet m&apos;a permis de réaliser un site vitrine
                    complet dans un contexte professionnel, tout en découvrant
                    des problématiques que l&apos;on rencontre difficilement
                    lorsqu&apos;on travaille uniquement sur des projets
                    personnels : répondre à un besoin réel, intégrer des
                    retours, penser au référencement et prendre en compte les
                    performances dès le développement.
                </p>
            </section>


            {/* ÉTAT DU PROJET */}
            <section className="mb-24 rounded-4xl bg-foreground p-8 text-white md:p-12">
                <span className="text-sm font-black uppercase opacity-40">
                    07 - Projet terminé
                </span>

                <h2 className="mt-3 text-4xl font-black uppercase md:text-6xl">
                    De A à Z, jusqu&apos;au bout.
                </h2>

                <p className="mt-6 max-w-2xl text-lg font-medium leading-relaxed opacity-60">
                    Réalisé pendant mon stage chez Nuagerie Inc., ce projet
                    m&apos;a permis de mettre en pratique SvelteKit, Tailwind
                    CSS et l&apos;i18n tout en développant une meilleure
                    compréhension du SEO, du SSG et des performances web.
                </p>

                <a
                    href="https://exemple-site-vitrine.netlify.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-8 inline-flex rounded-full bg-white px-6 py-3 font-black text-foreground transition-transform hover:-translate-y-1"
                >
                    Voir le projet
                </a>
            </section>

        </ProjectLayout>
    );
}