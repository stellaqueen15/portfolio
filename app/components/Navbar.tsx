import Link from "next/link";

export default  function Navbar() {
    return (
    <div
        className="flex items-center gap-3 rounded-full bg-[linear-gradient(180deg,#FFB75E_0%,#ffb347_45%,#FF892F_100%)]
                 text-foreground px-2 py-1.5 backdrop-blur-md shadow-[0px_5px_8.1px_rgba(255,137,47,0.57)]">
        <Link
            href="#projects"
            className="text-sm font-medium px-3 py-0.5 rounded-full bg-[linear-gradient(161.58deg,#FFFFFF_35%,#FFD375_150.59%)]
                  shadow-[1px_1px_0px_rgba(255,255,255,0.5)] transition-opacity hover:bg-white"
        >
            Projets
        </Link>

        <Link
            href="#experiences"
            className="text-sm font-medium px-3 py-0.5 rounded-full bg-[linear-gradient(161.58deg,#FFFFFF_35%,#FFD375_150.59%)]
                  shadow-[1px_1px_0px_rgba(255,255,255,0.5)] transition-opacity hover:bg-white"
        >
            Expériences
        </Link>

        <Link
            href="#about-me"
            className="text-sm font-medium px-3 py-0.5 rounded-full bg-[linear-gradient(161.58deg,#FFFFFF_35%,#FFD375_150.59%)]
                  shadow-[1px_1px_0px_rgba(255,255,255,0.5)] transition-opacity hover:bg-white"
        >
            Compétences
        </Link>

        <Link
            href="#skills"
            className="text-sm font-medium px-3 py-0.5 rounded-full bg-[linear-gradient(161.58deg,#FFFFFF_35%,#FFD375_150.59%)]
                  shadow-[1px_1px_0px_rgba(255,255,255,0.5)] transition-opacity hover:bg-white"
        >
            À propos
        </Link>
    </div>
    )
}