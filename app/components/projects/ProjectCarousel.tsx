"use client";

import { useState } from "react";
import Image from "next/image";
import SurfaceCard from "@/app/components/ui/SurfaceCard";

type Screen = {
    image: string;
    title: string;
    alt?: string;
};

type ProjectCarouselProps = {
    screens: Screen[];
};

export default function ProjectCarousel({
    screens,
}: ProjectCarouselProps) {
    const [activeIndex, setActiveIndex] = useState(0);

    const previous = () => {
        setActiveIndex(
            (current) =>
                (current - 1 + screens.length) % screens.length
        );
    };

    const next = () => {
        setActiveIndex(
            (current) =>
                (current + 1) % screens.length
        );
    };

    const getPosition = (index: number) => {
        const difference =
            (index - activeIndex + screens.length) %
            screens.length;

        if (difference === 0) return "active";
        if (difference === 1) return "next";
        if (difference === screens.length - 1) return "previous";

        return "hidden";
    };

    return (
        <div className="mt-10">
            {/* CAROUSEL */}
            <div className="relative h-140 overflow-hidden">
                {screens.map((screen, index) => {
                    const position = getPosition(index);

                    return (
                        <SurfaceCard
                            key={screen.title}
                            className={`absolute left-1/2 top-1/2 overflow-hidden
                                shadow-soft transition-all duration-500 ease-out
                                ${position === "active" ? `z-30 w-[75%] -translate-x-1/2
                                    -translate-y-1/2 scale-100 opacity-100`
                                : position === "previous" ? `z-10 w-[55%] translate-x-[-85%]
                                    -translate-y-1/2 scale-90 opacity-50` 
                                : position === "next" ? `z-10 w-[55%] translate-x-[-15%]
                                    -translate-y-1/2 scale-90 opacity-50`
                                : `z-0 w-[55%] -translate-x-1/2 -translate-y-1/2 scale-75 opacity-0`}
                            `}
                        >
                            <div className="relative overflow-hidden rounded-3xl aspect-video">
                                <Image
                                    src={screen.image}
                                    alt={screen.alt ?? screen.title}
                                    fill
                                    className="object-cover"
                                />
                            </div>

                            {position === "active" && (
                                <p className="px-2 pb-1 pt-3 text-center text-sm font-black uppercase">
                                    {screen.title}
                                </p>
                            )}
                        </SurfaceCard>
                    );
                })}

                <button
                    type="button"
                    onClick={previous}
                    aria-label="Aperçu précédent"
                    className="absolute left-4 top-1/2 z-40 flex h-12 w-12 -translate-y-1/2 items-center justify-center
                        rounded-full bg-foreground text-xl text-white shadow-soft transition-transform hover:scale-105"
                >
                    ←
                </button>

                <button
                    type="button"
                    onClick={next}
                    aria-label="Aperçu suivant"
                    className=" absolute right-4 top-1/2 z-40 flex h-12 w-12 -translate-y-1/2 items-center justify-center
                        rounded-full bg-foreground text-xl text-white shadow-soft transition-transform hover:scale-105"
                >
                    →
                </button>
            </div>


            {/* INDICATORS */}
            <div className="mt-2 flex items-center justify-center gap-2">
                {screens.map((screen, index) => (
                    <button
                        key={screen.title}
                        type="button"
                        onClick={() => setActiveIndex(index)}
                        aria-label={`Afficher ${screen.title}`}
                        className={`h-2 rounded-full transition-all duration-300
                            ${
                                index === activeIndex
                                    ? "w-8 bg-foreground"
                                    : "w-2 bg-foreground/30"
                            }
                        `}
                    />
                ))}
            </div>
        </div>
    );
}