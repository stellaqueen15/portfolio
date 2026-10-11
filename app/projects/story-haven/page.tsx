import ProjectLayout from "@/app/components/projects/ProjectLayout";
import ProjectCarousel from "@/app/components/projects/ProjectCarousel";
import Image from "next/image";
import SurfaceCard from "@/app/components/ui/SurfaceCard";

export default function StoryHavenPage() {
    return (
        <ProjectLayout
            number="02"
            title="Story Haven"
            year="2026"
            status="En développement"
            statusColor="yellow"
            role="Conception UI/UX · Développement Full Stack"
            technologies={[
                "Next.js",
                "React",
                "TypeScript",
                "Tailwind CSS",
                "shadcn/ui",
            ]}
            github="https://github.com/stellaqueen15/story-haven"
        >
            {/* HERO */}
            <section className="mb-20">
                <span className="text-sm font-black uppercase opacity-40">
                    Là où les histoires prennent vie
                </span>

                <h2 className="mt-3 max-w-4xl text-6xl font-black uppercase leading-[0.9] tracking-tight md:text-8xl">
                    Un univers à partager.
                </h2>

                <p className="mt-8 max-w-2xl text-lg font-medium opacity-65 md:text-xl">
                    Une plateforme conçue pour rassembler les passionnés
                    d&apos;histoires, créer des communautés et donner vie
                    à des univers imaginaires partagés.
                </p>
            </section>

            {/* APERÇU PRINCIPAL */}
            <section className="mb-24">
                <SurfaceCard>
                    <Image
                        src="/Image.jpg"
                        alt="Aperçu de la plateforme Story Haven"
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
                    Un espace pour l&apos;imagination.
                </h2>

                <div className="mt-6 space-y-4 text-lg font-medium leading-relaxed opacity-70">
                    <p>
                        Story Haven est un projet personnel qui explore
                        la rencontre entre les communautés créatives,
                        la narration et la création d&apos;univers
                        fictifs.
                    </p>

                    <p>
                        La plateforme repose sur la création de
                        communautés permettant aux membres de se
                        rassembler autour d&apos;intérêts communs,
                        d&apos;échanger des idées et de développer
                        progressivement leurs propres espaces créatifs.
                    </p>

                    <p>
                        L&apos;objectif est de proposer une expérience
                        accessible dès le départ, sans imposer la
                        préparation complète d&apos;un univers lors
                        de la création d&apos;une communauté.
                        Chaque espace pourra ainsi évoluer à son rythme
                        et accueillir des fonctionnalités plus riches
                        au fil du temps.
                    </p>
                </div>
            </section>

            {/* DIRECTION ARTISTIQUE */}
            <section className="mb-24">
                <span className="text-sm font-black uppercase text-foreground/60">
                    02 - Direction artistique
                </span>

                <h2 className="mt-3 text-4xl font-black uppercase md:text-6xl">
                    Une expérience immersive.
                </h2>

                <p className="mt-6 max-w-3xl text-lg font-medium leading-relaxed opacity-70">
                    La direction artistique cherche à créer une
                    atmosphère accueillante et immersive, loin de
                    l&apos;apparence des plateformes sociales
                    traditionnelles. Les tons violets, les accents
                    bordeaux et les surfaces arrondies contribuent
                    à une identité visuelle moderne, chaleureuse
                    et tournée vers la créativité.
                </p>

                <div className="mt-10 grid gap-5 md:grid-cols-2">
                    <SurfaceCard>
                        <Image
                            src="/Image.jpg"
                            alt="Direction artistique de Story Haven"
                            width={1920}
                            height={1080}
                            className="w-full rounded-[20px] object-cover"
                        />
                    </SurfaceCard>

                    <div className="rounded-4xl bg-foreground p-7 text-white">
                        <p className="text-sm font-black uppercase opacity-40">
                            Expérience utilisateur
                        </p>

                        <p className="mt-4 text-2xl font-black">
                            Créer sans limites.
                        </p>

                        <p className="mt-4 font-medium leading-relaxed opacity-60">
                            L&apos;interface est pensée pour simplifier
                            la création de communautés tout en laissant
                            la place à des outils de narration et de
                            construction d&apos;univers plus élaborés.
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
                    Sous le capot.
                </h2>

                <div className="mt-10 grid gap-4 md:grid-cols-2">
                    <SurfaceCard className="p-6">
                        <span className="text-3xl">✦</span>

                        <h3 className="mt-5 text-2xl font-black uppercase">
                            Frontend moderne
                        </h3>

                        <p className="mt-3 font-medium leading-relaxed opacity-65">
                            Next.js, React et TypeScript constituent
                            la base d&apos;une application structurée,
                            maintenable et adaptée aux besoins
                            d&apos;une plateforme évolutive.
                        </p>
                    </SurfaceCard>

                    <SurfaceCard className="p-6">
                        <span className="text-3xl">◈</span>

                        <h3 className="mt-5 text-2xl font-black uppercase">
                            Composants réutilisables
                        </h3>

                        <p className="mt-3 font-medium leading-relaxed opacity-65">
                            Tailwind CSS et shadcn/ui permettent de
                            construire une interface cohérente à
                            partir de composants personnalisables
                            et réutilisables.
                        </p>
                    </SurfaceCard>

                    <SurfaceCard className="p-6">
                        <span className="text-3xl">◎</span>

                        <h3 className="mt-5 text-2xl font-black uppercase">
                            Architecture communautaire
                        </h3>

                        <p className="mt-3 font-medium leading-relaxed opacity-65">
                            Les communautés constituent le point
                            de départ de l&apos;expérience et
                            servent de fondation aux futures
                            fonctionnalités collaboratives.
                        </p>
                    </SurfaceCard>

                    <SurfaceCard className="p-6">
                        <span className="text-3xl">✧</span>

                        <h3 className="mt-5 text-2xl font-black uppercase">
                            Évolution progressive
                        </h3>

                        <p className="mt-3 font-medium leading-relaxed opacity-65">
                            Le développement se fait par étapes,
                            afin de poser des bases solides avant
                            d&apos;intégrer des fonctionnalités
                            plus avancées de création narrative
                            et de construction d&apos;univers.
                        </p>
                    </SurfaceCard>
                </div>
            </section>

            {/* APERÇUS */}
            <section className="mb-24">
                <span className="text-sm font-black uppercase text-foreground/60">
                    04 - Aperçus
                </span>

                <h2 className="mt-3 text-4xl font-black uppercase md:text-6xl">
                    Un univers en construction.
                </h2>

                <p className="mt-6 mb-10 max-w-3xl text-lg font-medium leading-relaxed opacity-70">
                    De la découverte de communautés à la création
                    de son propre espace, chaque partie de Story Haven
                    est pensée pour accompagner les utilisateurs dans
                    leurs projets créatifs.
                </p>

                <ProjectCarousel
                    screens={[
                        {
                            image: "/Image.jpg",
                            title: "Vue d'ensemble",
                        },
                        {
                            image: "/Image.jpg",
                            title: "Communautés",
                        },
                        {
                            image: "/Image.jpg",
                            title: "Création",
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
                    L&apos;histoire ne fait que commencer.
                </h2>

                <p className="mt-6 max-w-2xl text-lg font-medium leading-relaxed opacity-60">
                    Story Haven est actuellement en développement.
                    Le projet avance progressivement, en commençant
                    par les fonctionnalités essentielles liées aux
                    communautés avant d&apos;étendre les possibilités
                    de création et de narration.
                </p>

                <p className="mt-4 max-w-2xl text-lg font-medium leading-relaxed opacity-60">
                    À terme, l&apos;ambition est de proposer une
                    plateforme flexible où les communautés peuvent
                    grandir, les histoires prendre forme et les
                    univers fictifs devenir des expériences partagées.
                </p>
            </section>
        </ProjectLayout>
    );
}