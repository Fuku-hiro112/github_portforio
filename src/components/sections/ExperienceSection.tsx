import { EXPERIENCES, STUDENT_PROJECT } from "@/config/profile";
import ScrollFadeIn from "@/components/ui/ScrollFadeIn";
import SectionHeading from "@/components/ui/SectionHeading";

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading>Experience</SectionHeading>
        <div className="max-w-4xl mx-auto space-y-10">
          {/* 職務経歴 */}
          {EXPERIENCES.map((exp, i) => (
            <ScrollFadeIn key={i}>
              <div className="relative border-l-2 border-blue-200 pl-8">
                <div className="absolute -left-2.5 top-1 w-5 h-5 rounded-full bg-blue-600 border-4 border-white" />
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                    <p className="text-sm text-blue-600 font-medium">
                      {exp.company}
                    </p>
                    <p className="text-xs text-gray-400">{exp.period}</p>
                  </div>
                  <h3 className="text-lg font-semibold mb-1">{exp.role}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-3">
                    {exp.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {exp.environment.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 bg-gray-100 text-gray-600 rounded text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                    <span className="px-2 py-0.5 bg-blue-50 text-blue-600 rounded text-xs">
                      {exp.teamSize}
                    </span>
                  </div>

                  {/* 実績 */}
                  <div className="space-y-4">
                    {exp.achievements.map((achievement, j) => (
                      <details key={j} className="group">
                        <summary className="cursor-pointer list-none flex items-start gap-2 text-sm font-medium text-gray-800 hover:text-blue-600 transition">
                          <svg
                            className="w-4 h-4 mt-0.5 shrink-0 text-blue-500 transition-transform group-open:rotate-90"
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
                        <div className="ml-6 mt-2 space-y-2 text-sm text-gray-600 leading-relaxed">
                          <div>
                            <span className="font-medium text-gray-700">状況: </span>
                            {achievement.situation}
                          </div>
                          <div>
                            <span className="font-medium text-gray-700">行動: </span>
                            {achievement.action}
                          </div>
                          <div>
                            <span className="font-medium text-gray-700">成果: </span>
                            {achievement.result}
                          </div>
                        </div>
                      </details>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollFadeIn>
          ))}

          {/* 学生時代のプロジェクト */}
          <ScrollFadeIn>
            <div className="relative border-l-2 border-blue-200 pl-8">
              <div className="absolute -left-2.5 top-1 w-5 h-5 rounded-full bg-blue-400 border-4 border-white" />
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                  <p className="text-sm text-blue-600 font-medium">個人制作</p>
                  <p className="text-xs text-gray-400">
                    {STUDENT_PROJECT.period}
                  </p>
                </div>
                <h3 className="text-lg font-semibold mb-1">
                  {STUDENT_PROJECT.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-3">
                  {STUDENT_PROJECT.description}
                </p>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {STUDENT_PROJECT.environment.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 bg-gray-100 text-gray-600 rounded text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <ul className="space-y-2 text-sm text-gray-600 leading-relaxed">
                  {STUDENT_PROJECT.learnings.map((learning, j) => (
                    <li key={j} className="flex items-start gap-2">
                      <span className="text-blue-400 mt-1 shrink-0">&#8226;</span>
                      {learning}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </ScrollFadeIn>
        </div>
      </div>
    </section>
  );
}
