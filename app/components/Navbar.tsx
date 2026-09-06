import Link from "next/link";

const navLinks = [
    { label: "Projets", href: "#projects" },
    { label: "Expériences", href: "#experiences" },
    { label: "Compétences", href: "#skills" },
    { label: "À propos", href: "#about-me" },
];

const linkClassName = `
    rounded-full
    bg-[linear-gradient(161.58deg,#FFFFFF_35%,#FFD375_150.59%)]
    px-2 py-0.5 text-[11px] font-medium
    shadow-[1px_1px_0px_rgba(255,255,255,0.5)]
    transition-colors hover:bg-white
    sm:px-3 sm:py-0.5 sm:text-sm`;

export default function Navbar() {
    return (
        <nav className="absolute left-0 top-0 z-20 w-full px-3 py-4 sm:px-6 sm:py-5 md:px-8 md:py-6">
            <div className="relative mx-auto flex max-w-7xl items-center justify-center">
                <div
                    className="
                        flex items-center gap-1.5 rounded-full
                        bg-[linear-gradient(180deg,#FFB75E_0%,#ffb347_45%,#FF892F_100%)]
                        px-1.5 py-1
                        text-foreground
                        shadow-[0px_5px_8.1px_rgba(255,137,47,0.57)]
                        sm:gap-2 sm:px-2 sm:py-1.5
                        md:gap-3
                    "
                >
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={linkClassName}
                        >
                            {link.label}
                        </Link>
                    ))}
                </div>
            </div>
        </nav>
    );
}