import ProjectLayout from "@/app/components/project/ProjectLayout";
import ProjectCarousel from "@/app/components/project/ProjectCarousel";
import Image from "next/image";
import SurfaceCard from "@/app/components/ui/SurfaceCard";

export default function SoccerShopPage() {
    return (
        <ProjectLayout
            number="04"
            title="SoccerShop"
            year="2025"
            status="Terminé"
            statusColor="green"
            role="Frontend · UI/UX · QA"
            technologies={[
                "HTML",
                "CSS",
                "PHP",
                "MySQL",
                "Figma",
            ]}
        >

            {/* HERO */}
            <section className="mb-20">
                <span className="text-sm font-black uppercase opacity-40">
                    Projet de fin d&apos;études · Équipe de 5
                </span>

                <h2 className="mt-3 max-w-4xl text-6xl font-black uppercase leading-[0.9] tracking-tight md:text-8xl">
                    Une boutique de football pensée de A à Z.
                </h2>

                <p className="mt-8 max-w-2xl text-lg font-medium opacity-65 md:text-xl">
                    Une application e-commerce développée en équipe dans le
                    cadre de mon projet de fin d&apos;études, avec une
                    interface entièrement conçue et développée par mes soins.
                </p>
            </section>

            {/* APERÇU PRINCIPAL */}
            <section className="mb-24">
                <SurfaceCard>
                    <Image
                        src="/Image.jpg"
                        alt="Aperçu de SoccerShop"
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
                    Un projet réalisé à cinq.
                </h2>

                <div className="mt-6 space-y-4 text-lg font-medium leading-relaxed opacity-70">
                    <p>
                        SoccerShop est une application e-commerce développée
                        dans le cadre de mon projet de fin d&apos;études en
                        informatique. Le projet a été réalisé en équipe de
                        cinq, avec des responsabilités réparties entre les
                        différents membres.
                    </p>

                    <p>
                        Je me suis principalement chargée de toute la partie
                        frontend du projet : conception des interfaces,
                        réalisation des maquettes sur Figma et intégration
                        complète des pages dans l&apos;application.
                    </p>

                    <p>
                        J&apos;ai également participé à la définition de la
                        structure du projet et de son architecture MVC, tout en
                        apportant mon aide sur certaines parties backend et en
                        effectuant des vérifications afin de m&apos;assurer que
                        les fonctionnalités fonctionnaient correctement.
                    </p>
                </div>
            </section>

            {/* DIRECTION ARTISTIQUE */}
            <section className="mb-24">
                <span className="text-sm font-black uppercase text-foreground/60">
                    02 - Direction artistique
                </span>

                <h2 className="mt-3 text-4xl font-black uppercase md:text-6xl">
                    Une interface pensée avant d&apos;être codée.
                </h2>

                <p className="mt-6 max-w-3xl text-lg font-medium leading-relaxed opacity-70">
                    J&apos;ai pris en charge la conception de plusieurs
                    interfaces du projet sur Figma avant de les intégrer
                    directement dans l&apos;application. L&apos;objectif était
                    de créer une expérience e-commerce claire, cohérente et
                    adaptée à l&apos;univers du football.
                </p>

                <div className="mt-10 grid gap-5 md:grid-cols-2">
                    <SurfaceCard>
                        <Image
                            src="/Image.jpg"
                            alt="Maquette Figma de SoccerShop"
                            width={1920}
                            height={1080}
                            className="w-full rounded-[20px] object-cover"
                        />
                    </SurfaceCard>

                    <div className="rounded-4xl bg-foreground p-7 text-white">
                        <p className="text-sm font-black uppercase opacity-40">
                            Design → Code
                        </p>

                        <p className="mt-4 text-2xl font-black">
                            Concevoir puis construire.
                        </p>

                        <p className="mt-4 font-medium leading-relaxed opacity-60">
                            Les interfaces ont été réfléchies sur Figma avant
                            leur intégration. J&apos;ai ensuite transformé ces
                            maquettes en pages fonctionnelles directement dans
                            l&apos;application.
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
                    Tout coder à la main.
                </h2>

                <p className="mt-6 max-w-3xl text-lg font-medium leading-relaxed opacity-70">
                    Le projet a été développé entièrement à la main avec une
                    architecture MVC. Mon rôle principal était de construire
                    le frontend et d&apos;intégrer les interfaces tout en
                    travaillant en collaboration avec les membres responsables
                    du backend.
                </p>

                <div className="mt-10 grid gap-4 md:grid-cols-2">
                    <SurfaceCard className="p-6">
                        <span className="text-3xl">
                            <i className="fi fi-sr-browser"></i>
                        </span>

                        <h3 className="mt-5 text-2xl font-black uppercase">
                            Frontend
                        </h3>

                        <p className="mt-3 font-medium leading-relaxed opacity-65">
                            Développement de l&apos;ensemble des interfaces et
                            intégration des différentes pages de la boutique
                            avec HTML et CSS.
                        </p>
                    </SurfaceCard>

                    <SurfaceCard className="p-6">
                        <span className="text-3xl">
                            <i className="fi fi-sr-palette"></i>
                        </span>

                        <h3 className="mt-5 text-2xl font-black uppercase">
                            Figma
                        </h3>

                        <p className="mt-3 font-medium leading-relaxed opacity-65">
                            Conception de plusieurs interfaces et réflexion
                            autour de la structure visuelle avant leur
                            intégration dans le projet.
                        </p>
                    </SurfaceCard>

                    <SurfaceCard className="p-6">
                        <span className="text-3xl">
                            <i className="fi fi-sr-settings"></i>
                        </span>

                        <h3 className="mt-5 text-2xl font-black uppercase">
                            Architecture MVC
                        </h3>

                        <p className="mt-3 font-medium leading-relaxed opacity-65">
                            Participation à la définition de la structure du
                            projet et mise en place d&apos;une architecture
                            MVC pour organiser l&apos;application.
                        </p>
                    </SurfaceCard>

                    <SurfaceCard className="p-6">
                        <span className="text-3xl">
                            <i className="fi fi-sr-check-circle"></i>
                        </span>

                        <h3 className="mt-5 text-2xl font-black uppercase">
                            QA
                        </h3>

                        <p className="mt-3 font-medium leading-relaxed opacity-65">
                            Vérification des fonctionnalités et collaboration
                            avec le backend afin d&apos;identifier et de
                            corriger certains problèmes avant la finalisation
                            du projet.
                        </p>
                    </SurfaceCard>
                </div>
            </section>

            {/* COLLABORATION */}
            <section className="mb-24">
                <span className="text-sm font-black uppercase text-foreground/60">
                    04 - Travail en équipe
                </span>

                <h2 className="mt-3 text-4xl font-black uppercase md:text-6xl">
                    Frontend, mais pas uniquement.
                </h2>

                <div className="mt-6 max-w-3xl space-y-4 text-lg font-medium leading-relaxed opacity-70">
                    <p>
                        Même si j&apos;étais la seule personne responsable du
                        frontend, le projet nécessitait une collaboration
                        constante avec les quatre autres membres de
                        l&apos;équipe.
                    </p>

                    <p>
                        J&apos;ai donc également participé aux échanges autour
                        du fonctionnement de l&apos;application, apporté mon
                        aide sur certaines parties backend et vérifié que les
                        différentes fonctionnalités s&apos;intégraient
                        correctement avec l&apos;interface.
                    </p>
                </div>

                <div className="mt-10 grid gap-4 md:grid-cols-3">
                    <SurfaceCard className="p-6">
                        <p className="text-sm font-black uppercase opacity-40">
                            Équipe
                        </p>

                        <h3 className="mt-3 text-2xl font-black">
                            5 personnes
                        </h3>

                        <p className="mt-3 font-medium leading-relaxed opacity-65">
                            Un projet collaboratif avec des responsabilités
                            réparties entre les membres.
                        </p>
                    </SurfaceCard>

                    <SurfaceCard className="p-6">
                        <p className="text-sm font-black uppercase opacity-40">
                            Rôle
                        </p>

                        <h3 className="mt-3 text-2xl font-black">
                            Seule en frontend
                        </h3>

                        <p className="mt-3 font-medium leading-relaxed opacity-65">
                            Conception et intégration de l&apos;ensemble de la
                            partie interface.
                        </p>
                    </SurfaceCard>

                    <SurfaceCard className="p-6">
                        <p className="text-sm font-black uppercase opacity-40">
                            Collaboration
                        </p>

                        <h3 className="mt-3 text-2xl font-black">
                            Front ↔ Back
                        </h3>

                        <p className="mt-3 font-medium leading-relaxed opacity-65">
                            Échanges avec le backend et vérification du bon
                            fonctionnement des fonctionnalités.
                        </p>
                    </SurfaceCard>
                </div>
            </section>

            {/* CE QUE J'AI APPRIS */}
            <section className="mb-24">
                <span className="text-sm font-black uppercase text-foreground/60">
                    05 - Ce que j&apos;ai appris
                </span>

                <h2 className="mt-3 text-4xl font-black uppercase md:text-6xl">
                    Passer du design à une vraie application.
                </h2>

                <div className="mt-6 max-w-3xl space-y-4 text-lg font-medium leading-relaxed opacity-70">
                    <p>
                        Ce projet m&apos;a surtout permis de mettre en pratique
                        l&apos;ensemble du processus de développement d&apos;une
                        application web : réfléchir à une interface, la
                        concevoir, l&apos;intégrer puis la connecter à des
                        fonctionnalités réelles.
                    </p>

                    <p>
                        Il m&apos;a également appris à travailler sur une base
                        de code partagée, à communiquer avec les autres membres
                        de l&apos;équipe et à prendre en compte les contraintes
                        du backend lors de la conception du frontend.
                    </p>
                </div>

                <div className="mt-10 grid gap-4 md:grid-cols-3">
                    <SurfaceCard className="p-6">
                        <p className="text-sm font-black uppercase opacity-40">
                            UI / UX
                        </p>

                        <h3 className="mt-3 text-2xl font-black">
                            Penser l&apos;expérience
                        </h3>

                        <p className="mt-3 font-medium leading-relaxed opacity-65">
                            Transformer les besoins du projet en interfaces
                            cohérentes et fonctionnelles.
                        </p>
                    </SurfaceCard>

                    <SurfaceCard className="p-6">
                        <p className="text-sm font-black uppercase opacity-40">
                            Architecture
                        </p>

                        <h3 className="mt-3 text-2xl font-black">
                            Structurer le projet
                        </h3>

                        <p className="mt-3 font-medium leading-relaxed opacity-65">
                            Comprendre l&apos;organisation d&apos;une
                            application MVC et les liens entre ses différentes
                            parties.
                        </p>
                    </SurfaceCard>

                    <SurfaceCard className="p-6">
                        <p className="text-sm font-black uppercase opacity-40">
                            Collaboration
                        </p>

                        <h3 className="mt-3 text-2xl font-black">
                            Travailler à plusieurs
                        </h3>

                        <p className="mt-3 font-medium leading-relaxed opacity-65">
                            Développer sur une base de code commune et
                            coordonner le frontend avec le backend.
                        </p>
                    </SurfaceCard>
                </div>
            </section>

            {/* SCREENSHOTS */}
            <section className="mb-24">
                <span className="text-sm font-black uppercase text-foreground/60">
                    06 - Aperçus
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
                            title: "Boutique",
                        },
                        {
                            image: "/Image.jpg",
                            title: "Produit",
                        },
                    ]}
                />
            </section>

            {/* RÉSULTAT */}
            <section className="mb-24 max-w-4xl">
                <span className="text-sm font-black uppercase text-foreground/60">
                    07 - Résultat
                </span>

                <h2 className="mt-3 text-4xl font-black uppercase md:text-6xl">
                    Un projet de fin d&apos;études complet.
                </h2>

                <p className="mt-6 text-lg font-medium leading-relaxed opacity-70">
                    SoccerShop m&apos;a permis de prendre en charge
                    l&apos;ensemble du frontend d&apos;une application web
                    développée en équipe, de la conception des interfaces sur
                    Figma jusqu&apos;à leur intégration. Le projet m&apos;a
                    également donné l&apos;occasion de travailler avec une
                    architecture MVC, de collaborer avec le backend et de
                    participer aux vérifications de qualité de
                    l&apos;application.
                </p>
            </section>

            {/* ÉTAT DU PROJET */}
            <section className="mb-24 rounded-4xl bg-foreground p-8 text-white md:p-12">
                <span className="text-sm font-black uppercase opacity-40">
                    08 - Projet terminé
                </span>

                <h2 className="mt-3 text-4xl font-black uppercase md:text-6xl">
                    Du Figma au produit final.
                </h2>

                <p className="mt-6 max-w-2xl text-lg font-medium leading-relaxed opacity-60">
                    Un projet réalisé à cinq dans le cadre de mon projet de fin
                    d&apos;études, entièrement codé à la main et mené de la
                    conception des interfaces jusqu&apos;à l&apos;intégration
                    d&apos;une application e-commerce fonctionnelle.
                </p>

                <a
                    href="https://youtu.be/qR940fKm1r4"
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