import Link from "next/link";

const navLinks = [
    { label: "Projets", href: "#projects" },
    { label: "Expériences", href: "#experiences" },
    { label: "Compétences", href: "#skills" },
    { label: "À propos", href: "#about-me" },
];

const linkClassName = `
    text-sm font-medium px-3 py-0.5 rounded-full
    bg-[linear-gradient(161.58deg,#FFFFFF_35%,#FFD375_150.59%)]
    shadow-[1px_1px_0px_rgba(255,255,255,0.5)]
    transition-colors hover:bg-white
`;

export default function Navbar() {
    return (
        <nav
            className="
                flex items-center gap-3 rounded-full
                bg-[linear-gradient(180deg,#FFB75E_0%,#ffb347_45%,#FF892F_100%)]
                text-foreground px-2 py-1.5 backdrop-blur-md shadow-[0px_5px_8.1px_rgba(255,137,47,0.57)]
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
        </nav>
    );
}