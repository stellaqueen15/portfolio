export default function Footer() {
    return (
        <footer className="bg-primary px-6 py-16">
            <div className="mx-auto flex max-w-6xl flex-col items-center gap-8 text-center">
                <div>
                    <h2 className="text-4xl font-black md:text-5xl">
                        On se retrouve bientôt ?
                    </h2>

                    <p className="mt-3 font-semibold opacity-60">
                        Merci d'être arrivée jusqu'ici !
                    </p>
                </div>

                <div className="flex flex-wrap justify-center gap-3">
                    <a
                        href="https://github.com/..."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-full bg-white/20 px-5 py-2.5 font-bold transition hover:-translate-y-1 hover:bg-white/30"
                    >
                        GitHub ↗
                    </a>

                    <a
                        href="https://linkedin.com/in/..."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-full bg-white/20 px-5 py-2.5 font-bold transition hover:-translate-y-1 hover:bg-white/30"
                    >
                        LinkedIn ↗
                    </a>

                    <a
                        href="mailto:ton@email.com"
                        className="rounded-full bg-white/20 px-5 py-2.5 font-bold transition hover:-translate-y-1 hover:bg-white/30"
                    >
                        Email ↗
                    </a>
                </div>

                <div className="h-px w-full bg-white/20" />

                <div className="flex w-full flex-col items-center justify-between gap-2 text-sm font-semibold opacity-50 md:flex-row">
                    <span>© 2026 Brenda</span>
                    <span>Conçu avec beaucoup trop d'idées et juste assez de CSS ✦</span>
                </div>
            </div>
        </footer>
    );
}