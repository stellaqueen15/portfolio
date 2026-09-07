"use client";

import BackgroundParticles from "@/app/components/BackgroundParticles";

export default function HeroSection() {
    return (
        <section className="relative flex h-screen min-h-150 items-center justify-center overflow-hidden bg-background px-4 pb-28 sm:px-6 sm:pb-32">
            <BackgroundParticles />

            <div className="relative z-10 w-full text-center">
                <h1
                    className="
                        text-5xl font-black uppercase leading-[0.75] tracking-tighter
                        sm:text-6xl
                        md:text-8xl
                        lg:text-[9rem]
                    "
                >
                    <span className="inline-block w-full text-gradient">
                        Brenda
                    </span>

                    <br />

                    <span
                        className="
                            inline-block px-2 py-4 text-4xl text-gradient
                            sm:px-4 sm:py-5 sm:text-5xl
                            md:px-6 md:py-6 md:text-7xl
                            lg:text-[6.5rem]
                        "
                    >
                        Développeuse web
                    </span>
                </h1>
            </div>
        </section>
    );
}