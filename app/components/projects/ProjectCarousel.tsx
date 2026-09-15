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

export default function ProjectCarousel({screens,}: ProjectCarouselProps) {
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
        <div className="mt-8 sm:mt-10">
            {/* CAROUSEL */}
            <div className="relative h-auto min-h-72 sm:h-140">
                {screens.map((screen, index) => {
                    const position = getPosition(index);

                    return (
                        <SurfaceCard
                            key={screen.title}
                            className={`
                                absolute left-1/2 top-1/2 overflow-hidden
                                shadow-soft transition-all duration-500 ease-out

                                ${
                                position === "active"
                                    ? `z-30 w-[calc(100%-3.5rem)] -translate-x-1/2 -translate-y-1/2 scale-100 opacity-100 sm:w-[75%]`
                                    : position === "previous"
                                        ? `z-10 hidden sm:block sm:w-[55%] sm:translate-x-[-85%] sm:-translate-y-1/2
                                            sm:scale-90 sm:opacity-50`
                                        : position === "next"
                                            ? `z-10 hidden sm:block sm:w-[55%] sm:translate-x-[-15%] sm:-translate-y-1/2
                                                sm:scale-90 sm:opacity-50`
                                            : `z-0 hidden`
                            }
                            `}
                        >
                            <div className="relative aspect-video overflow-hidden rounded-3xl">
                                <Image
                                    src={screen.image}
                                    alt={screen.alt ?? screen.title}
                                    fill
                                    className="object-cover"
                                />
                            </div>

                            {position === "active" && (
                                <p className="px-3 py-3 text-center text-xs font-black uppercase sm:px-2 sm:pb-1 sm:pt-3 sm:text-sm">
                                    {screen.title}
                                </p>
                            )}
                        </SurfaceCard>
                    );
                })}

                {/* PREVIOUS */}
                <button
                    type="button"
                    onClick={previous}
                    aria-label="Aperçu précédent"
                    className="absolute left-0 top-1/2 z-40 flex h-10 w-10 -translate-y-1/2 items-center justify-center
                        rounded-full bg-foreground text-lg text-white shadow-soft transition-transform hover:scale-105
                        sm:left-4 sm:h-12 sm:w-12 sm:text-xl"
                >
                    ←
                </button>

                {/* NEXT */}
                <button
                    type="button"
                    onClick={next}
                    aria-label="Aperçu suivant"
                    className="absolute right-0 top-1/2 z-40 flex h-10 w-10 -translate-y-1/2 items-center justify-center
                        rounded-full bg-foreground text-lg text-white shadow-soft transition-transform hover:scale-105
                        sm:right-4 sm:h-12 sm:w-12 sm:text-xl"
                >
                    →
                </button>
            </div>

            {/* INDICATORS */}
            <div className="mt-4 flex items-center justify-center gap-2">
                {screens.map((screen, index) => (
                    <button
                        key={screen.title}
                        type="button"
                        onClick={() => setActiveIndex(index)}
                        aria-label={`Afficher ${screen.title}`}
                        className={`h-2 rounded-full transition-all duration-300
                            ${index === activeIndex ? "w-7 bg-foreground sm:w-8" : "w-2 bg-foreground/30"}
                        `}
                    />
                ))}
            </div>
        </div>
    );
}