"use client";

import SkillBubble from "./SkillBubble";
import { skills } from "@/app/data/skills";

export default function SkillsCloud() {
    return (
        <div className="relative mx-auto h-180 w-full overflow-hidden sm:h-195 md:h-210">
            {skills.map((skill) => (
                <SkillBubble
                    key={skill.name}
                    {...skill}
                />
            ))}
        </div>
    );
}