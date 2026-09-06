import type { ReactNode } from "react";

type SurfaceCardProps = {
    children: ReactNode;
    className?: string;
};

export default function SurfaceCard({children, className = "",}: SurfaceCardProps) {
    return (
        <div
            className={`overflow-hidden rounded-4xl bg-surface p-3 shadow-soft ${className}`}
        >
            {children}
        </div>
    );
}