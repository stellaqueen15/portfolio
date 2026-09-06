import SkillsCloud from "@/app/components/skills/SkillsCloud";

export default function SkillsSection() {
    return (
        <section
            id="skills"
            className="relative flex min-h-screen items-center overflow-hidden bg-background-reverse px-6 py-24"
        >
            <div className="mx-auto w-full max-w-350">
                <div className="mb-10 text-center">
                    <h2 className="text-5xl font-black uppercase md:text-7xl">
                        Skills
                    </h2>
                </div>

                <SkillsCloud />
            </div>
        </section>
    );
}