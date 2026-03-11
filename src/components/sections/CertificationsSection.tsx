import { CERTIFICATIONS } from "@/config/profile";
import ScrollFadeIn from "@/components/ui/ScrollFadeIn";
import SectionHeading from "@/components/ui/SectionHeading";

export default function CertificationsSection() {
  return (
    <section id="certifications" className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading>Certifications</SectionHeading>
        <div className="max-w-2xl mx-auto space-y-4">
          {CERTIFICATIONS.map((cert) => (
            <ScrollFadeIn key={cert.name}>
              <div className="flex items-center gap-4 bg-white rounded-xl p-5 shadow-sm">
                <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold shrink-0">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold">{cert.name}</p>
                  <p className="text-xs text-gray-400">{cert.date}</p>
                </div>
              </div>
            </ScrollFadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
