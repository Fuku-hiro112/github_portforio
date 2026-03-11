import { SKILL_CATEGORIES } from "@/config/profile";
import ScrollFadeIn from "@/components/ui/ScrollFadeIn";
import SectionHeading from "@/components/ui/SectionHeading";
import SkillBadge from "@/components/ui/SkillBadge";

export default function SkillsSection() {
  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading>Skills</SectionHeading>
        <div className="grid md:grid-cols-3 gap-8">
          {SKILL_CATEGORIES.map((category) => (
            <ScrollFadeIn key={category.title}>
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="font-semibold text-lg mb-4 text-blue-700">
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <SkillBadge
                      key={skill.name}
                      skill={skill}
                      colorClass={category.colorClass}
                    />
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
