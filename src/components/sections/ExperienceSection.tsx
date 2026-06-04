import { EXPERIENCES, STUDENT_PROJECT } from "@/config/profile";
import ScrollFadeIn from "@/components/ui/ScrollFadeIn";
import SectionHeading from "@/components/ui/SectionHeading";

const STAR_LABELS: { key: "situation" | "action" | "result"; label: string }[] = [
  { key: "situation", label: "状況" },
  { key: "action", label: "行動" },
  { key: "result", label: "成果" },
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-24 border-b border-line">
      <div className="max-w-5xl mx-auto px-6">
        <SectionHeading index="03" en="Experience">
          職務経歴
        </SectionHeading>
        <div className="max-w-3xl space-y-14">
          {/* 職務経歴 */}
          {EXPERIENCES.map((exp, i) => (
            <ScrollFadeIn key={i}>
              <div className="relative border-l border-line pl-8">
                <div className="absolute -left-[5px] top-1.5 w-2.5 h-2.5 rounded-full bg-accent" />
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-1">
                  <p className="text-base text-accent font-medium">{exp.company}</p>
                  <p className="text-xs text-faint tabular-nums">{exp.period}</p>
                </div>
                <h3 className="font-display text-xl text-ink mb-2">{exp.role}</h3>
                <p className="text-muted text-sm leading-relaxed mb-4">
                  {exp.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {exp.environment.map((tech) => (
                    <span
                      key={tech}
                      className="border border-line px-2 py-0.5 rounded text-xs text-muted"
                    >
                      {tech}
                    </span>
                  ))}
                  <span className="border border-accent/30 bg-accent-soft px-2 py-0.5 rounded text-xs text-accent">
                    {exp.teamSize}
                  </span>
                </div>

                {/* 実績 */}
                <p className="text-xs text-faint mb-1 tracking-wide">
                  主な実績（クリックで詳細）
                </p>
                <div>
                  {exp.achievements.map((achievement, j) => (
                    <details key={j} className="group border-t border-line py-3">
                      <summary className="cursor-pointer list-none flex items-start gap-2 text-base font-medium text-ink hover:text-accent transition">
                        <svg
                          className="w-4 h-4 mt-1 shrink-0 text-accent transition-transform group-open:rotate-90"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                        {achievement.title}
                      </summary>
                      <div className="ml-6 mt-3 space-y-2 text-sm leading-relaxed">
                        {STAR_LABELS.map(({ key, label }) => (
                          <div
                            key={key}
                            className={
                              key === "result"
                                ? "bg-accent-soft -mx-2 px-2 py-1.5 rounded"
                                : ""
                            }
                          >
                            <span className="font-medium text-accent">{label}</span>
                            <span className="text-faint"> ─ </span>
                            <span
                              className={
                                key === "result" ? "text-ink" : "text-muted"
                              }
                            >
                              {achievement[key]}
                            </span>
                          </div>
                        ))}
                      </div>
                    </details>
                  ))}
                </div>
              </div>
            </ScrollFadeIn>
          ))}

          {/* 学生時代のプロジェクト */}
          <ScrollFadeIn>
            <div className="relative border-l border-line pl-8">
              <div className="absolute -left-[5px] top-1.5 w-2.5 h-2.5 rounded-full bg-faint" />
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-1">
                <p className="text-base text-accent font-medium">個人制作</p>
                <p className="text-xs text-faint tabular-nums">
                  {STUDENT_PROJECT.period}
                </p>
              </div>
              <h3 className="font-display text-xl text-ink mb-2">
                {STUDENT_PROJECT.title}
              </h3>
              <p className="text-muted text-sm leading-relaxed mb-4">
                {STUDENT_PROJECT.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-5">
                {STUDENT_PROJECT.environment.map((tech) => (
                  <span
                    key={tech}
                    className="border border-line px-2 py-0.5 rounded text-xs text-muted"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <ul className="space-y-2 text-sm text-muted leading-relaxed border-t border-line pt-4">
                {STUDENT_PROJECT.learnings.map((learning, j) => (
                  <li key={j} className="flex items-start gap-2">
                    <span className="text-accent mt-1 shrink-0">—</span>
                    {learning}
                  </li>
                ))}
              </ul>
            </div>
          </ScrollFadeIn>
        </div>
      </div>
    </section>
  );
}
