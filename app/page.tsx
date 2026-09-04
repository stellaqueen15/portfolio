import Link from "next/link";

export default function Home() {
  return (
      <main className="relative min-h-screen overflow-hidden bg-[linear-gradient(180deg,#FFCC5E_0%,#ffb347_45%,#FF892F_100%)] text-neutral-950">
        {/* Navbar */}
        <nav className="absolute left-0 top-0 z-20 w-full px-8 py-6">
          <div className="relative mx-auto flex max-w-7xl items-center justify-center">
            <Link
                href="/"
                className="absolute left-0 text-2xl font-black tracking-tight"
            >
              Logo
            </Link>

            {/* Navigation */}
            <div
                className="flex items-center gap-8 rounded-full bg-[linear-gradient(180deg,#FFB75E_0%,#ffb347_45%,#FF892F_100%)]
                 text-[#221504] px-3 py-1 backdrop-blur-md">
              <Link
                  href="#projects"
                  className="text-sm font-medium px-3 py-1 rounded-full bg-[linear-gradient(161.58deg,#FFFFFF_35%,#FFD375_150.59%)]
                  shadow-[1px_1px_0px_rgba(255,255,255,0.5)] transition-opacity hover:bg-white"
              >
                Projets
              </Link>

              <Link
                  href="#experiences"
                  className="text-sm font-medium transition-opacity hover:opacity-60"
              >
                Expériences
              </Link>

              <Link
                  href="#contact"
                  className="text-sm font-medium transition-opacity hover:opacity-60"
              >
                Contact
              </Link>
            </div>
          </div>
        </nav>

        {/* Hero */}
        <section className="relative flex min-h-screen items-center justify-center px-6 pb-32">
          <div className="relative z-10 text-center">
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.3em] opacity-60">
              Creative developer
            </p>

            <h1 className="max-w-5xl text-6xl font-black leading-[0.9] tracking-[-0.05em] sm:text-7xl md:text-8xl lg:text-[9rem]">
              I make things
              <br />
              <span className="text-pink-600">feel alive.</span>
            </h1>

            <p className="mx-auto mt-8 max-w-lg text-base leading-relaxed opacity-70 md:text-lg">
              Front-end developer & designer creating playful digital
              experiences through code, motion and visual design.
            </p>
          </div>
        </section>

        {/* Liquid waves */}
        <div className="pointer-events-none absolute bottom-0 left-0 z-10 w-full">
          {/* Wave 1 */}
          <svg
              className="relative block h-[260px] w-full"
              viewBox="0 0 1440 260"
              preserveAspectRatio="none"
              xmlns="http://www.w3.org/2000/svg"
          >
            <path
                d="
              M0 110
              C120 80 180 145 300 110
              C410 75 470 125 570 105
              C690 80 740 145 850 110
              C970 72 1030 135 1140 105
              C1260 70 1330 125 1440 95

              L1440 260
              L0 260
              Z
            "
                fill="rgba(255,255,255,0.42)"
            />

            {/* Drips */}
            <path
                d="
              M210 116
              C210 116 230 155 230 190
              C230 220 250 235 270 220
              C285 208 280 175 275 150
              C270 130 270 115 270 115
              Z

              M690 112
              C690 112 710 160 710 205
              C710 235 730 250 750 232
              C770 215 758 175 752 145
              C748 128 748 115 748 115
              Z

              M1110 108
              C1110 108 1130 155 1130 195
              C1130 225 1150 242 1170 225
              C1190 205 1178 165 1172 140
              C1168 122 1168 110 1168 110
              Z
            "
                fill="rgba(255,255,255,0.42)"
            />
          </svg>

          {/* Wave 2 */}
          <svg
              className="absolute bottom-0 left-0 block h-[190px] w-full"
              viewBox="0 0 1440 190"
              preserveAspectRatio="none"
              xmlns="http://www.w3.org/2000/svg"
          >
            <path
                d="
              M0 70
              C140 40 220 105 350 70
              C480 35 550 95 670 65
              C800 30 880 95 1000 62
              C1120 30 1300 90 1440 55
              L1440 190
              L0 190
              Z
            "
                fill="white"
            />

            {/* Longer liquid drops */}
            <path
                d="
              M380 74
              C380 74 395 110 395 145
              C395 170 410 180 425 166
              C440 150 432 120 428 100
              C425 86 425 75 425 75
              Z

              M870 67
              C870 67 888 105 888 145
              C888 172 905 184 922 168
              C940 150 930 115 925 94
              C922 80 922 68 922 68
              Z

              M1280 61
              C1280 61 1295 105 1295 138
              C1295 162 1310 174 1327 158
              C1342 142 1335 110 1330 90
              C1327 76 1327 64 1327 64
              Z
            "
                fill="white"
            />
          </svg>
        </div>
      </main>
  );
}