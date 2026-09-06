"use client";

import { motion } from "framer-motion";

export default function Mascot() {
    return (
        <motion.div
            className="relative h-64 w-130 md:h-80 md:w-155"
            animate={{
                y: [0, -10, 5, 0],
                rotate: [0, 1, -1, 0],
            }}
            transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
            }}
        >
            <svg
                viewBox="0 0 605 320"
                className="h-full w-full overflow-visible"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
            >

                <circle
                    cx="155"
                    cy="75"
                    r="42"
                    fill="white"
                />

                <motion.circle
                    cx="155"
                    cy="75"
                    r="25"
                    fill="#3c2408"
                    animate={{
                        cx: [155, 162, 151, 155],
                        cy: [75, 70, 79, 75],
                    }}
                    transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />

                <circle
                    cx="450"
                    cy="75"
                    r="42"
                    fill="white"
                />

                <motion.circle
                    cx="450"
                    cy="75"
                    r="25"
                    fill="#3c2408"
                    animate={{
                        cx: [450, 457, 446, 450],
                        cy: [75, 70, 79, 75],
                    }}
                    transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 0.15,
                    }}
                />

                <motion.path
                    fill="#111111"
                    stroke="#EC8080"
                    strokeWidth="29"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d=" M 70 180 C 135 158 200 164 302 164 C 404 164 470 158 535 180 C 525 205 475 220 420 225 C 350 231 255 231 185 225 C 130 220 80 205 70 180 Z "
                    animate={{d:[` M 70 180 C 135 158 200 164 302 164 C 404 164 470 158 535 180 C 525 205 475 220 420 225 C 350 231 255 231 185 225 C 130 220 80 205 70 180 Z `, ` M 58 180 C 130 150 200 158 302 158 C 404 158 474 150 547 180 C 535 212 480 229 420 234 C 350 240 255 240 185 234 C 125 229 70 212 58 180 Z `, ` M 70 180 C 135 158 200 164 302 164 C 404 164 470 158 535 180 C 525 205 475 220 420 225 C 350 231 255 231 185 225 C 130 220 80 205 70 180 Z `,],}}
                    transition={{
                        duration: 3,
                        repeat: Infinity,
                        repeatType: "mirror",
                        ease: "easeInOut",}
                    }
                />
            </svg>
        </motion.div>
    );
}