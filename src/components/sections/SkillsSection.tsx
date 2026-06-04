import { SKILL_CATEGORIES } from "@/config/profile";
import ScrollFadeIn from "@/components/ui/ScrollFadeIn";
import SectionHeading from "@/components/ui/SectionHeading";
import SkillBadge from "@/components/ui/SkillBadge";

export default function SkillsSection() {
  return (
    <section id="skills" className="py-24 border-b border-line">
      <div className="max-w-5xl mx-auto px-6">
        <SectionHeading index="02" en="Skills">
          スキル
        </SectionHeading>
        <div className="grid md:grid-cols-3 gap-10">
          {SKILL_CATEGORIES.map((category) => (
            <ScrollFadeIn key={category.title}>
              <div>
                <h3 className="font-display text-lg text-ink mb-4 pb-2 border-b border-line">
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <SkillBadge key={skill.name} skill={skill} />
                  ))}
                </div>
              </div>
            </ScrollFadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
